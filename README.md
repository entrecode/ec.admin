# ec.admin

entrecode flavoured components for [react-admin](https://marmelab.com/react-admin/).

## Get Started

This is how you create a new project with ec.admin.

### 1. init react-app

```sh
npx create-react-app ec.admin-app --template typescript --use-npm
cd ec.admin-app
npm i --save ec.admin
```

### 2. setup ec.admin

For ec.sdk to work, prepend "HTTPS=true" to package.json#scripts.start:

```js
{
  "start": "HTTPS=true react-scripts start"
  /* .. */
}
```

## module setup

what i did to setup the ec.admin module

```sh
yarn create react-app ec.admin --template typescript
```

## dev setup

- clone ec.admin repo
- run "yarn link" in ec.admin root
- go to other project (e.g. light.react-admin)
- run "yarn link ec.admin"
- run yarn start
- After every change in ec.admin, the "yarn build" needs to run. TODO: create watcher script
- problem: yarn build needs node_modules to build, but the other projects will be confused by node_modules inside a package (two react versions)