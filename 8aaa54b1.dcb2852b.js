(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{104:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(r),b=n,f=u["".concat(p,".").concat(b)]||u[b]||d[b]||o;return r?a.a.createElement(f,i(i({ref:t},s),{},{components:r})):a.a.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var s=2;s<o;s++)p[s]=r[s];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},83:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(104)),p={id:"helpers",title:"Helpers",slug:"/helpers"},i={unversionedId:"helpers",id:"helpers",isDocsHomePage:!1,title:"Helpers",description:"Props",source:"@site/docs/helpers.md",slug:"/helpers",permalink:"/ec.admin/docs/helpers",editUrl:"https://github.com/entrecode/ec.admin/edit/master/doc/docs/helpers.md",version:"current",sidebar:"someSidebar",previous:{title:"Components",permalink:"/ec.admin/docs/components"},next:{title:"Custom List",permalink:"/ec.admin/docs/custom-list"}},c=[{value:"Props",id:"props",children:[{value:"fieldProps",id:"fieldprops",children:[]},{value:"inputProps",id:"inputprops",children:[]}]}],s={rightToc:c};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("p",null,"In the above components, the props were passed using spread syntax and inputProps / fieldProps methods. These functions essentially return objects that have all props for the given property and fieldConfig."),Object(o.b)("h3",{id:"fieldprops"},Object(o.b)("a",Object(n.a)({parentName:"h3"},{href:"https://github.com/entrecode/ec.admin/blob/master/src/fields/fieldProps.tsx"}),"fieldProps")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"fieldProps(field, fieldConfig);\n")),Object(o.b)("p",null,"Returns entry field props that can be passed to a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://marmelab.com/react-admin/Fields.html"}),"Field"),".\nAutomatically populates field type specific data. Expects fieldConfig as obtained from useFields hook."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"<TextField {...fieldProps('name', fieldConfig)} />\n")),Object(o.b)("h3",{id:"inputprops"},Object(o.b)("a",Object(n.a)({parentName:"h3"},{href:"https://github.com/entrecode/ec.admin/blob/master/src/inputs/inputProps.tsx"}),"inputProps")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"inputProps(field, fieldConfig);\n")),Object(o.b)("p",null,"Returns entry field props that can be passed to an ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://marmelab.com/react-admin/Inputs.html"}),"Input"),".\nAutomatically populates input type specific data. Expects fieldConfig as obtained from useFields hook."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"<TextInput {...inputProps('name', fieldConfig)} />\n")))}l.isMDXComponent=!0}}]);