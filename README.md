# ec.admin

entrecode flavoured components for [react-admin](https://marmelab.com/react-admin/).

## [Documentation](https://entrecode.github.io/ec.admin/docs/)

```sh
npm run doc # run docs locally
npm run deploy-doc # deploy to gh-pages
```

## Demo

The demo lives in /demo:

```sh
npm run demo
```

## Build & Publish

```sh
# start release + bump version
npm run clean # remove lib
npm run build # build lib
npm publish # publish version => also make release via gitflow
# TODO: add script that runs above + makes git release
```

## Presentation

```sh
npm run deck
```

## Roadmap

The following features may be implemented in the future:

### Resource Support

Currently, entryProvider only wraps one instance of PublicAPI.
It would be a great addition if multiple instances of a PublicAPI could be accessed with one [dataProvider](https://marmelab.com/react-admin/DataProviders.html#extending-a-data-provider-example-of-file-upload).
Also, the more generic Resources could be supported. This would enable potential CRUD support for all entrecode resources. The implementation could be done step by step:

- AssetGroup / Asset => asset browser using [GridList](https://material-ui.com/components/grid-list/)
- DataManager => use multiple datamanagers at the same time
- .. potential implementation of any other ec.resource

### Custom Filter Sidebar

Currently, the [FilterList sidebar](https://marmelab.com/react-admin/List.html#the-filterlist-sidebar) only supports one selection per property (and does not play well with object values). It would be good to have a more sophisticated FitlerList sidebar. Maybe this will also be implemented by react-admin in the future, as the FilterList sidebar is relatively new.. _but maybe only for enterprise edition_
