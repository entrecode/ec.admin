export default function getPublicResourceName(model, resource) {
  if (!model) {
    return;
  }
  if (!resource) {
    console.log(  'no resource given!', model);
    return model;
  }
  if (!resource.includes('|')) {
    // using dataProvider with model title as resource names
    return model;
  }
  // using resourceProvider with `dataManager|${dmID}|model|${model}|entry"
  const prefix = resource.split('|').slice(0, 3).join('|');
  return `${prefix}|${model}|entry`;
};