---
id: resource-localization
title: Resource Localization
slug: /resource-localization
---

When resource names contain ids (see [getResource](./getResource.md)), localizing strings gets problematic, as strings that describe the same field may have multiple names.

For example, input labels use the localization string "resources.resourceName.fields.fieldName", where resourceName and fieldName are dynamic. For a resource with the name "dataManager|73538731-4ac3-4a1a-b3b5-e31d09e94d42|model", this would be "resources.dataManager|73538731-4ac3-4a1a-b3b5-e31d09e94d42|model.fields.validation". For a different datamanager, the label of the model validation field would have another localization string.

So we would have to define the same localization string for all possible model id's which is impossible. A workaround could be a custom i18nProvider that removes ids from resource names, so the example would be "resources.dataManager|model.fields.validation".

```js
const removeId = (key) => {
  // remove id from key (every odd part of split)
};

const { translate, ...rest } = polyglotI18nProvider((locale) => {
  return messages[locale];
}, 'de');

const i18nProviderCustom = {
  translate: (key, options) => {
    key = removeId(key);
    return translate(removeId(key), options);
  },
  ...rest,
};
```

TBD: test this
