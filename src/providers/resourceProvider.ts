import { DataManager } from 'ec.sdk';
import { environment } from 'ec.sdk/lib/Core';
import getResource from '../helpers/getResource';

// see AppWithResources for usage example
// implements a resource provider for ec.sdk
// see https://marmelab.com/react-admin/DataProviders.html
export default async (env: environment = 'stage') => {
  const api = new DataManager(env);
  return {
    api,
    getList: async (resource, params) => {
      console.log('getList', resource);
      const { data, id } = await getResource(resource.split('|'), api);
      const items = data.items.map(item => ({ ...item, id: item[id] }))
      return {
        data: items, total: data.total
      }
    },
    getOne: async (resource, params) => {
      const { data, id } = await getResource([...resource.split('|'), params.id], api)
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
