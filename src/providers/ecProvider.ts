import { DataManager } from 'ec.sdk';
import { environment } from 'ec.sdk/lib/Core';
import getResource from '../helpers/getResource';
import getPublicDataProvider from '../helpers/getPublicDataProvider';
import { DataProvider } from 'react-admin';

// see AppWithResources for usage example
// implements a resource provider for ec.sdk
// see https://marmelab.com/react-admin/DataProviders.html

// TODO: cache

export default async (env: environment = 'stage'): Promise<DataProvider> => {
  const api = new DataManager(env);
  return {
    api,
    getList: async (resource, params) => {
      const path = resource.split('|');
      if (path.includes('entry')) { // need PublicAPI
        const [dataProvider, model] = await getPublicData(path, env);
        return dataProvider.getList(model, params);
      }
      const { data, id } = await getResource(path, api);
      const items = data.items.map(item => ({ ...item, id: item[id] }))
      return {
        data: items, total: data.total
      }
    },
    getOne: async (resource, params) => {
      const path = resource.split('|');
      if (path.includes('entry')) { // need PublicAPI
        const [dataProvider, model] = await getPublicData(path, env);
        return dataProvider.getOne(model, params);
      }
      const { data, id } = await getResource([...path, params.id as string], api)
      const item = { ...data, id: resource[id] };
      return { data: item }
    },
    getMany: async (resource, params) => {
      console.log('getMany', resource);
      const path = resource.split('|');
      if (path.includes('entry')) { // need PublicAPI
        const [dataProvider, model] = await getPublicData(path, env);
        return dataProvider.getMany(model, params);
      }
      return Promise.reject('method "getMany" not yet implemented!');
    },
    create: async (resource, params) => {
      const path = resource.split('|');
      if (path.includes('entry')) { // need PublicAPI
        const [dataProvider, model] = await getPublicData(path, env);
        return dataProvider.create(model, params);
      }
      return Promise.reject('method "create" not yet implemented!');
    },
    update: async (resource, params) => {
      // console.log('update', resource);
      const path = resource.split('|');
      if (path.includes('entry')) { // need PublicAPI
        const [dataProvider, model] = await getPublicData(path, env);
        return dataProvider.update(model, params);
      }
      return Promise.reject('method "update" not yet implemented!');
    },
    delete: async (resource, params) => {
      const path = resource.split('|');
      if (path.includes('entry')) { // need PublicAPI
        const [dataProvider, model] = await getPublicData(path, env);
        return dataProvider.delete(model, params);
      }
      return Promise.reject('method "update" not yet implemented!');
    },
    getManyReference: (resource, params) => {
      return Promise.reject('method "getManyReference" not yet implemented!');
    },
    updateMany: (resource, params) => {
      return Promise.reject('method "updateMany" not yet implemented!');
    },
    deleteMany: (resource, params) => {
      console.log('deleteMany', resource);
      return Promise.reject('method "deleteMany" not yet implemented!');
    },
  };
};

export async function getPublicData(path, env/* , api */) {
  if (!path.includes('entry')) {
    throw new Error('can only getPublicDataProvider for resources with "entry" in it.')
  }
  /* path = path.slice(0, path.indexOf('entry')); // non public part
  const { data: model } = await getResource(path, api); // get model (need title)
  const modelTitle = model.title; */
  const dataManagerID = path[1]; // dataManager|xxxxx|model|yyyyy|entry
  const modelTitle = path[3]; // dataManager|xxxxx|model|yyyyy|entry
  // now delegate to dataProvider
  const provider = await getPublicDataProvider(dataManagerID, env);
  return [provider, modelTitle];
}