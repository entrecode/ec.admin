import { PublicAPI } from 'ec.sdk';
import { isSortable, isFilterable } from '../types';
import { pick, getFormData } from '../helpers';
import { environment } from 'ec.sdk/lib/Core';

// implements a custom data provider for ec.sdk PublicAPI
// see https://marmelab.com/react-admin/DataProviders.html
export default async (datamanagerID, env: environment = 'stage', ecUser = true) => {
  const api = new PublicAPI(datamanagerID, env, ecUser);
  const systemFields = ['id', /* 'creator', */ '_created', '_modified', '_entryTitle'];
  return {
    api,
    getList: async (model, params) => {
      // model = model.split('|').slice(-1).join('');
      // console.log('get list', model, params);
      try {
        let {
          sort: { order, field },
          pagination: { page, perPage },
          filter,
        } = params;
        const fieldConfig = {
          ...(await api.getFieldConfig(model)),
          /* id: { type: 'text' }, */
          _created: { type: 'datetime' },
          _modified: { type: 'datetime' },
        };
        if (!isSortable(fieldConfig[field]?.type)) {
          field = '_created';
          order = 'ASC';
          // TODO uncomment
          //return Promise.reject(`field "${field}" is not sortable!`);
        }
        if (filter.id) {
          filter._id = filter.id; // workaround: sdk won't accept id with out _ for exact filter
          delete filter.id;
        }
        let filters = Object.keys(filter) || [];
        filters.forEach((property) => {
          if (!isFilterable(fieldConfig[property]?.type) && !['_id', 'id'].includes(property)) {
            console.warn(`property "${property}" with type "${fieldConfig[property]?.type}" is not filterable`);
            delete filter[property];
            // TODO
            //return Promise.reject(`field "${field}" is not filterable!`);
          }
          if (typeof filter[property] !== 'object') {
            // filter[property] = { exact: filter[property] }; // workaround for nested filterlistviews
            filter[property] = { search: filter[property] }; // workaround for nested filterlistviews
          }
        });
        const entryList = await api.entryList(model, {
          sort: [`${order === 'DESC' ? '-' : ''}${field}`],
          ...filter,
          page,
          _count: perPage,
        });
        const properties = [...systemFields, ...Object.keys(fieldConfig)];
        const data = entryList.getAllItems().map((entry) => deserialize(pick(entry, ...properties), fieldConfig));

        return { data, total: entryList.total }; // , validUntil?: {Date}
      } catch (error) {
        return handleError(error);
      }
    },
    getOne: async (resource, params) => {
      // console.log('get one', resource, params, api);
      // resource = resource.split('|').slice(-1).join('');
      try {
        let entry = await api.entry(resource, params.id);
        const fieldConfig = await api.getFieldConfig(entry.getModelTitle());
        entry = deserialize(entry, fieldConfig);
        // TODO: deserialize fields
        return { data: entry }; // TBD validUntil
      } catch (error) {
        return handleError(error);
      }
    },
    getMany: async (model, params) => {
      // console.log('get many', model, params);
      try {
        //console.log('getMany', model);
        const fieldConfig = await api.getFieldConfig(model);
        // const ids = params.ids.map((id) => (typeof id === 'object' ? id.id : id));
        const ids = params.ids.filter((id) => typeof id === 'string');
        //console.log('ids', ids);
        // TODO eliminate all calls with object
        const entries = await api.entryList(model, { _count: ids.length, id: { any: ids } });
        const properties = [...systemFields, ...Object.keys(fieldConfig)];
        const response = {
          data: entries.getAllItems().map((entry) => deserialize(pick(entry, ...properties), fieldConfig)),
        };
        //console.log('response', response,properties);
        return response;
        //return Promise.reject('method "getMany" not yet implemented!');
      } catch (error) {
        return handleError(error);
      }
    },
    create: async (model, { data }) => {
      // console.log('create', model, data);
      try {
        const fieldConfig = await api.getFieldConfig(model);
        data = await uploadAssets(data, fieldConfig, api);
        const entry = await api.createEntry(model, data);
        return { data: entry };
      } catch (error) {
        return handleError(error);
      }
    },
    update: async (resource, params) => {
      // console.log('update', resource, params);
      try {
        let entry = await api.entry(resource, params.id);
        const writtenProperties = Object.keys(params.data).filter(
          (key) => !key.startsWith('_') && !systemFields.includes(key)
        );
        const fieldConfig = await api.getFieldConfig(resource);

        let data = pick(params.data, ...writtenProperties);

        data = await uploadAssets(data, fieldConfig, api);
        data = serialize(data, fieldConfig);
        entry = Object.assign(entry, data);
        // TODO serialize fields:
        // - date to iso string
        // - asset magic
        entry = await entry.save();
        entry = deserialize(entry, fieldConfig);
        return { data: entry };
      } catch (error) {
        return handleError(error);
      }
    },
    delete: async (model, { id, previousData }) => {
      // console.log('delete', model, id, previousData);
      try {
        const entry = await api.entry(model, id);
        if (!entry) {
          return Promise.reject('Entry not found.. Already Deleted?');
        }
        await entry.del();
        return { data: previousData };
      } catch (error) {
        return handleError(error);
      }
    },
    getManyReference: (resource, params) => {
      return Promise.reject('method "getManyReference" not yet implemented!');
    },
    updateMany: (resource, params) => {
      return Promise.reject('method "updateMany" not yet implemented!');
    },
    deleteMany: (resource, params) => {
      // console.log('deleteMany', resource);
      return Promise.reject('method "deleteMany" not yet implemented!');
    },
  };
};

async function uploadAssets(data, fieldConfig, api) {
  // TODO: support assetS fields + maybe also implemented legacy assets
  const assets = Object.fromEntries(
    Object.entries<any>(fieldConfig)
      .filter(([key, { type }]) => type === 'asset' && data[key]?.rawFile)
      .map(([key, { validation: assetGroup }]) => [key, { rawFile: data[key].rawFile, assetGroup }])
  );
  await Promise.all(
    Object.entries(assets).map(([key, { rawFile, assetGroup }]) => {
      // console.log('raw file', rawFile);
      return api
        .createDMAssets(
          assetGroup,
          getFormData([rawFile], {
            ignoreDuplicates: true,
          })
        )
        .then((assetList) => {
          data[key] = assetList.getAllItems()[0];
        });
    })
  );
  return data;
}

export function deserialize(entry, fieldConfig) {
  Object.entries<any>(fieldConfig).forEach(([property, { type }]) => {
    if (['location', 'json'].includes(type) && !!entry[property]) {
      entry[property] = JSON.stringify(entry[property]);
    }
    if (type === 'entries' && !!entry[property]) {
      entry[property] = entry[property].map(({ id }) => id);
    }
    if (type === 'entry' && !!entry[property]) {
      entry[property] = entry[property]?.id;
    }
  });
  return entry;
}

export function serialize(entry, fieldConfig) {
  Object.entries<any>(fieldConfig).forEach(([property, { type }]) => {
    if (['location', 'json'].includes(type) && !!entry[property]) {
      entry[property] = JSON.parse(entry[property]);
    }
  });
  return entry;
}

function handleError(error) {
  const message = `Error ${error.status}:${error.code}, ${error.message}: ${error.detail}`;
  return Promise.reject(message);
}

export function getDataManagerID(entry) {
  const url = entry._links['ec:model']?.[0]?.href;
  if (!url) {
    // console.log('entry', entry);
    throw new Error('could not get dataManagerID from entry');
  }
  return new URL(url).searchParams?.get('dataManagerID');
}
