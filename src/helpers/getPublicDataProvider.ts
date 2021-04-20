import dataProvider from '../providers/entryProvider';

let publicDataProviders = {}; // "cache"

// TODO: rename to getEntryProvider
export default async function getPublicDataProvider(dataManagerID, env) {
  if (!!publicDataProviders[dataManagerID]) {
    // console.log('cached');
    return publicDataProviders[dataManagerID];
  }
  publicDataProviders[dataManagerID] = dataProvider(dataManagerID, env, true);
  return await publicDataProviders[dataManagerID];
}