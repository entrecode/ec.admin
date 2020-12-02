import Core from 'ec.sdk/lib/Core';
import Resource from 'ec.sdk/lib/resources/Resource';

// see getResource.md for explanation
async function getResource(path: string[], api: Resource | Core) {
  const relations = api.getAvailableRelations();
  if (path.length === 1) {
    const { id, creatable } = relations[path[0]];
    const data = await api.resourceList(path[0])
    return { data, id }
  }
  const resource = await api.resource(path[0], path[1]);
  if (path.length === 2) {
    const { id, creatable } = relations[path[0]];
    return { data: resource, id, creatable };
  }
  return getResource(path.slice(2), resource)
}

export default getResource;