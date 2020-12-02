(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{109:function(e,r,t){"use strict";t.d(r,"a",(function(){return d})),t.d(r,"b",(function(){return f}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var r=a.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},d=function(e){var r=u(e.components);return a.a.createElement(s.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},p=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),p=n,f=d["".concat(i,".").concat(p)]||d[p]||m[p]||o;return t?a.a.createElement(f,c(c({ref:r},s),{},{components:t})):a.a.createElement(f,c({ref:r},s))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=p;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},69:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return l})),t.d(r,"default",(function(){return u}));var n=t(3),a=t(7),o=(t(0),t(109)),i={id:"resource-localization",title:"Resource Localization",slug:"/resource-localization"},c={unversionedId:"resource-localization",id:"resource-localization",isDocsHomePage:!1,title:"Resource Localization",description:"When resource names contain ids (see getResource), localizing strings gets problematic, as strings that describe the same field may have multiple names.",source:"@site/docs/resource-localization.md",slug:"/resource-localization",permalink:"/ec.admin/docs/resource-localization",editUrl:"https://github.com/entrecode/ec.admin/edit/master/doc/docs/resource-localization.md",version:"current",sidebar:"someSidebar",previous:{title:"Resource Caching",permalink:"/ec.admin/docs/resource-caching"},next:{title:"Multiple Datamanagers",permalink:"/ec.admin/docs/multiple-datamanagers"}},l=[],s={rightToc:l};function u(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"When resource names contain ids (see ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/ec.admin/docs/get-resource"}),"getResource"),"), localizing strings gets problematic, as strings that describe the same field may have multiple names."),Object(o.b)("p",null,'For example, input labels use the localization string "resources.resourceName.fields.fieldName", where resourceName and fieldName are dynamic. For a resource with the name "dataManager|73538731-4ac3-4a1a-b3b5-e31d09e94d42|model", this would be "resources.dataManager|73538731-4ac3-4a1a-b3b5-e31d09e94d42|model.fields.validation". For a different datamanager, the label of the model validation field would have another localization string.'),Object(o.b)("p",null,'So we would have to define the same localization string for all possible model id\'s which is impossible. A workaround could be a custom i18nProvider that removes ids from resource names, so the example would be "resources.dataManager|model.fields.validation".'),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const removeId = (key) => {\n  // remove id from key (every odd part of split)\n};\n\nconst { translate, ...rest } = polyglotI18nProvider((locale) => {\n  return messages[locale];\n}, 'de');\n\nconst i18nProviderCustom = {\n  translate: (key, options) => {\n    key = removeId(key);\n    return translate(removeId(key), options);\n  },\n  ...rest,\n};\n")),Object(o.b)("p",null,"TBD: test this"))}u.isMDXComponent=!0}}]);