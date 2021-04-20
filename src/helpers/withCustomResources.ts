/** a declarative way to add custom resources to a data provider. 
 * 
 * Before:
 * 
 * ```js
 * let p = await ecProvider(env);
 * p = {
 *  ...p,
 *  getList: async (resource, params) => {
 *    if(resource === 'muffin') {
 *      return customMuffinFetcher(params);
 *    }
 *    return p.getList(resource, params)
 *  }
 * } 
 * ```
 * 
 * After:
 * 
 * ```js
 * let p = await ecProvider(env as any);
 * p = withCustomResources(p, {
 *  muffin: {
 *    getList: async (resource, params) => {
 *      return customMuffinFetcher(params);
 *    }
 *  }
 * })
 * ```
 * 
 */
export function withCustomResources(provider, resources: { [name: string]: object }) {
  return Object.entries(resources).reduce((p, [name, methods]) => {
    return {
      ...p,
      ...(Object.entries(methods).reduce((_p, [method, implementation]) => {
        return {
          ..._p,
          [method]: (resource, params) => {
            if (resource === name) {
              return implementation(resource, params)
            }
            return _p[method](resource, params);
          }
        }
      }, p))
    }
  }, provider);
}