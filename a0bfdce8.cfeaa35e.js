(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{101:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,f=p["".concat(a,".").concat(d)]||p[d]||m[d]||i;return r?o.a.createElement(f,l(l({ref:t},s),{},{components:r})):o.a.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},84:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return a})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),o=(r(0),r(101));const i={id:"custom-list",title:"Custom List",slug:"/custom-list"},a={unversionedId:"custom-list",id:"custom-list",isDocsHomePage:!1,title:"Custom List",description:"It's easy to replace a generic EntryList with a custom one.",source:"@site/docs/custom-list.md",slug:"/custom-list",permalink:"/ec.admin/docs/custom-list",editUrl:"https://github.com/entrecode/ec.admin/edit/master/doc/docs/custom-list.md",version:"current",sidebar:"someSidebar",previous:{title:"Theming",permalink:"/ec.admin/docs/theming"},next:{title:"Custom Form",permalink:"/ec.admin/docs/custom-form"}},l=[{value:"Example",id:"example",children:[]},{value:"Used APIs",id:"used-apis",children:[]}],c={rightToc:l};function s({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"It's easy to replace a generic EntryList with a custom one."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"Here's an example of a custom list component:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import React from 'react';\nimport { List, Loading, Datagrid, TextField } from 'react-admin';\nimport { TypeField, useFields, fieldProps } from '../lib';\nimport { BakerField } from '../lib';\n\nexport const MuffinList = (props) => {\n  let { fieldConfig } = useFields(props.resource);\n  if (!fieldConfig) {\n    return <Loading />;\n  }\n  const field = (property) => fieldProps(property, fieldConfig);\n  return (\n    <List {...props}>\n      <Datagrid rowClick=\"edit\">\n        <TypeField {...field('name')} />\n        <TypeField {...field('amazement_factor')} />\n        <TextField {...field('description')} />\n        {/* equal to: <TextField source=\"description\" sortable={false} /> */}\n        <BakerField {...field('baker')} />\n      </Datagrid>\n    </List>\n  );\n};\n")),Object(o.b)("p",null,"To use it, we can override the list prop on the target ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://marmelab.com/react-admin/Resource.html"}),"Resource"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"<Resource name={'muffin'} {...entryCrud} list={MuffinList} />\n")),Object(o.b)("h2",{id:"used-apis"},"Used APIs"),Object(o.b)("p",null,"The example uses the following ec.admin APIs:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"./helpers#typefield"}),"TypeField")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"./helpers#fieldprops"}),"fieldProps")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"./helpers#usefields"}),"useFields"))),Object(o.b)("p",null,'Note that the "description" field just uses a plain ',Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://marmelab.com/react-admin/Fields.html#textfield"}),"TextField"),". When going that route, you have to make sure that the component can handle the field's value. The commented out version of it shows how the field would could be implemented without fieldProps. If going that route, you should at least set those props:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"source: field name (make sure it exists)"),Object(o.b)("li",{parentName:"ul"},"sortable: if true, the list column is sortable (only set to true for fields that support it)")),Object(o.b)("p",null,"Of course, the component that is used for a field can also be custom. For more info see ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://marmelab.com/react-admin/Fields.html#writing-your-own-field-component"}),"Writing Your Own Field Component"),"."))}s.isMDXComponent=!0}}]);