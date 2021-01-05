import dataProvider from './dataProvider';

// see AppWithMultipleDatamanagers for usage example

export default async (env) => {
  let api;
  return {
    api,
    getList: async (resource, params) => {
      console.log('getList', resource, params)
      const { filter } = params;
      if (!filter.dataManagerID) {
        console.warn('no dataManagerID given as filter');
        return { data: [], total: 0 }
      }
      const dataManagerID = filter.dataManagerID;
      delete filter.dataManagerID;
      const p = await dataProvider(dataManagerID, env, true);
      api = p.api;
      const { data, total } = await p.getList(resource, { ...params, filter });
      return {
        data: data.map(entry => ({
          ...entry,
          id: `${dataManagerID}|${entry.id}`
        })), total
      };
    },
    getOne: async (resource, params) => {
      console.log('getOne', resource, params);
      const [dataManagerID, id] = params.id.split('|');
      const p = await dataProvider(dataManagerID, env, true);
      const { data } = await p.getOne(resource, { ...params, id });
      console.log('got one', data);
      return { data: { ...data, id: `${dataManagerID}|${data.id}` } }
    },
    getMany: (resource, params) => {
      console.log('getMany', resource, params);
      return { data: [] }
    }
  }
}