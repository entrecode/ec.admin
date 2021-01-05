import { DataManager } from 'ec.sdk';
import { environment } from 'ec.sdk/lib/Core';
import getResource from '../helpers/getResource';
import dataProvider from './dataProvider';

// see AppWithResources for usage example
// implements a resource provider for ec.sdk
// see https://marmelab.com/react-admin/DataProviders.html
export default async (env: environment = 'stage') => {
  const api = new DataManager(env);
  return {
    api,
    getList: async (resource, params) => {
      const path = resource.split('|');
      if (path.includes('entry')) { // need PublicAPI
        const [dataProvider, model] = await getPublicData(path, api, env);
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
        const [dataProvider, model] = await getPublicData(path, api, env);
        return dataProvider.getOne(model, params);
      }
      const { data, id } = await getResource([...path, params.id], api)
      const item = { ...data, id: resource[id] };
      return { data: item }
    },
    getMany: async (resource, params) => {
      return Promise.reject('method "getMany" not yet implemented!');
    },
    create: async (resource, { data }) => {
      return Promise.reject('method "create" not yet implemented!');
    },
    update: async (resource, params) => {
      return Promise.reject('method "update" not yet implemented!');
    },
    delete: async (resource, { id, previousData }) => {
      return Promise.reject('method "delete" not yet implemented!');
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

async function getPublicData(path, api, env) {
  if (!path.includes('entry')) {
    throw new Error('can only getPublicDataProvider for resources with "entry" in it.')
  }
  path = path.slice(0, path.indexOf('entry')); // non public part
  const { data: model } = await getResource(path, api); // get model (need title)
  const dataManagerID = path[1]; // dataManager|xxxxx|model|yyyyy|entry
  // now delegate to dataProvider
  return [await dataProvider(dataManagerID, env, true), model.title];
}