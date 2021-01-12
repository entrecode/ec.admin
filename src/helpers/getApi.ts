// this is just a sketch yet

// plan to make this work with ecProvider (no api in dataProvider)
// take resource:
// const path = "dataManager|30ded721-f935-4fe9-9f2c-4a2952f7bfcb|model|061edd27-555f-4426-88ad-c49ce2e9328b|entry".split();
// const dmID = path[1];
// const api = apis[dmID] || new PublicAPI(dmID);
// => write non hook alternative to useFields like getFields(model, api, excludeSystemFields?)
// use that.. 


import { PublicAPI } from 'ec.sdk';

let cache = {};
export declare type environment = 'live' | 'stage' | 'nightly' | 'develop';

async function getApi(datamanagerID: string, env: environment = 'stage', ecUser = true) {
  const cached = cache[datamanagerID];
  if (!cached || cached.env !== env || cached.ecUser !== ecUser) {
    const api = new PublicAPI(datamanagerID, env, ecUser);
    cache[datamanagerID] = { api, env, ecUser };
    return api;
  }
  return cached.api;
}

export default getApi;