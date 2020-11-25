# Notes

...moved from light.react-admin

## ec.admin vs ec.components

- no extra abstraction layer (no config)
- everything is written in react-admin style (already documented)
- ec.admin just adds dataProvider + components that implement ec.sdk functionality

## idea: write ecResourceProvider

- instead of dataProvider for PublicAPI (just entries)
- connects to any ec.api (datamanagers, models, assets)
- is just available for ec accounts

## Referenced Entries vs lightEntries

- either use ReferenceFields for entries / entry fields:
  - this will trigger additional request and load all referenced entries by id (getMany)
  - can use already existing components:
    - clickable chips in list lead to detail views
    - select components already work
- ... or directly use already existing LightEntries and just show them
  - less request
  - but need more custom implementation of entry selects
  - need all linked resources present in App

to use references:

- EntryField / EntriesField => use ReferenceArrayField
- dataProvider#deserialize => map lightEntries to ids

## assets

- use [GridList](https://material-ui.com/components/grid-list/)
- [as done here](https://marmelab.com/react-admin-demo/#/products)
- [and here](https://github.com/marmelab/react-admin/blob/801e2456844c11325504c7d496048c7c32b557be/examples/demo/src/products/GridList.tsx)

## links

- [check out](https://marmelab.com/react-admin/Tutorial.html#handling-relationships)
  - maybe just find out how to links entries to one another
- [maps](https://github.com/FusionWorks/react-admin-google-maps)
- https://github.com/Nooul/ra-component-factory
- https://github.com/BigBasket/ra-treemenu

## SDK issues

- cannot sort after property 'created', only after '\_created'
- PublicAPI.models fails @PublicAPI.ts line 244
- DMAssetResource.getImageThumbUrl returns url with undefined at the start
- mode without lightentries !?!

## other stuff

- [redux-saga](https://github.com/redux-saga/redux-saga)

## tbd

- use model field config labels
- datetime serialization
- form validation
- [x] max height for text / json fields
- test old + new assets
- what about new assets without validation (assetGroup)
- what about entry/entries without validation (model)
- what about required fields?
- what about custom validation?
- what about error handling?
- prefill boolean fields with false
- [x] [filters](https://marmelab.com/react-admin/List.html#filters)
- [ ] custom filters

// extend data provider https://marmelab.com/react-admin/DataProviders.html#extending-a-data-provider-example-of-file-upload
// https://marmelab.com/blog/2020/10/07/react-admin-october-update.html#code-classlanguage-textuselistcontextcode-for-easier-list-layout-customization
