(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{103:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=l(n),d=r,b=s["".concat(i,".").concat(d)]||s[d]||m[d]||a;return n?o.a.createElement(b,c(c({ref:t},p),{},{components:n})):o.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(103)),i={id:"custom-form",title:"Custom Form",slug:"/custom-form"},c={unversionedId:"custom-form",id:"custom-form",isDocsHomePage:!1,title:"Custom Form",description:"Similar to lists, we can replace a generic EntryEdit / EntryCreate form with a custom one.",source:"@site/docs/custom-form.md",slug:"/custom-form",permalink:"/ec.admin/docs/custom-form",editUrl:"https://github.com/entrecode/ec.admin/edit/master/doc/docs/custom-form.md",version:"current",sidebar:"someSidebar",previous:{title:"Custom List",permalink:"/ec.admin/docs/custom-list"},next:{title:"FAQ",permalink:"/ec.admin/docs/FAQ"}},u=[{value:"Example",id:"example",children:[]},{value:"Used APIs",id:"used-apis",children:[]},{value:"Create",id:"create",children:[]}],p={rightToc:u};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Similar to lists, we can replace a generic EntryEdit / EntryCreate form with a custom one."),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("p",null,"Here's an example of a custom edit component:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import React from 'react';\nimport { Edit, SimpleForm, Loading, TextInput } from 'react-admin';\nimport { useFields, inputProps, TypeInput } from 'ec.admin';\n\nexport function MuffinEdit(props) {\n  const { fieldConfig } = useFields(props.resource);\n  if (!fieldConfig) {\n    return <Loading />;\n  }\n  const input = (property) => inputProps(property, fieldConfig);\n  return (\n    <Edit {...props}>\n      <SimpleForm>\n        <TextInput {...input('name')} />\n        {/* equal to <TextInput source=\"name\" /> */}\n        <TypeInput {...input('amazement_factor')} />\n      </SimpleForm>\n    </Edit>\n  );\n}\n")),Object(a.b)("p",null,"To use it, we can override the edit prop on the target ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://marmelab.com/react-admin/Resource.html"}),"Resource"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"<Resource name={'muffin'} {...entryCrud} edit={MuffinEdit} />\n")),Object(a.b)("h2",{id:"used-apis"},"Used APIs"),Object(a.b)("p",null,"The example uses the following ec.admin APIs:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"./helpers#typeinput"}),"TypeInput")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"./helpers#inputprops"}),"inputProps")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"./helpers#usefields"}),"useFields"))),Object(a.b)("p",null,'Note that the "name" field just uses a plain ',Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://marmelab.com/react-admin/Inputs.html#textinput"}),"TextInput"),". When going that route, you have to make sure that the component can handle the field's value. The commented out version of it shows how the field would could be implemented without inputProps. If going that route, you have to check set props:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"source: field name (make sure it exists)"),Object(a.b)("li",{parentName:"ul"},"options.disabled should be true if the field is readOnly")),Object(a.b)("p",null,"Of course, the component that is used for a field can also be custom. For more info see ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://marmelab.com/react-admin/Inputs.html#writing-your-own-input-component"}),"Writing Your Own Input Component"),"."),Object(a.b)("h2",{id:"create"},"Create"),Object(a.b)("p",null,"Implementing a custom create form is similar to the above example, except"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"you should get the field config from ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"./helpers#usefieldconfig"}),"useFieldConfig")," which omits the system fields (id, created, modified, creator)."),Object(a.b)("li",{parentName:"ul"},"you have to override Resource.create instead of Resource.edit"),Object(a.b)("li",{parentName:"ul"},"When in doubt, refer to EntryCreate component.")))}l.isMDXComponent=!0}}]);