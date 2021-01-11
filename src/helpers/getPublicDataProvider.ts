import dataProvider from '../../lib/providers/dataProvider';

let publicDataProviders = {}; // "cache"

export default async function getPublicDataProvider(dataManagerID, env) {
  if (!!publicDataProviders[dataManagerID]) {
    // console.log('cached');
    return publicDataProviders[dataManagerID];
  }
  publicDataProviders[dataManagerID] = dataProvider(dataManagerID, env, true);
  return await publicDataProviders[dataManagerID];
}