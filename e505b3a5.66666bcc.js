(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return m})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(109)),i={id:"theming",title:"Theming",sidebar_label:"Theming",slug:"/theming"},c={unversionedId:"theming",id:"theming",isDocsHomePage:!1,title:"Theming",description:"To theme the admin, use Admin theme prop:",source:"@site/docs/theming.md",slug:"/theming",permalink:"/ec.admin/docs/theming",editUrl:"https://github.com/entrecode/ec.admin/edit/master/doc/docs/theming.md",version:"current",sidebar_label:"Theming",sidebar:"someSidebar",previous:{title:"Localization",permalink:"/ec.admin/docs/localization"},next:{title:"Hooks",permalink:"/ec.admin/docs/hooks"}},m=[],p={rightToc:m};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"To theme the admin, use Admin theme prop:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// App.tsx\nimport { themes } from 'ec.admin';\n/* more imports */\n\nconst App = () => {\n  /* .. */\n  return <Admin theme={themes.dark}>{/* stuff */}</Admin>;\n};\n")),Object(a.b)("p",null,"Checkout ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://marmelab.com/react-admin/Theming.html"}),"ra theme docs")," for more info."))}u.isMDXComponent=!0},109:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),l=u(n),d=r,f=l["".concat(i,".").concat(d)]||l[d]||s[d]||a;return n?o.a.createElement(f,c(c({ref:t},p),{},{components:n})):o.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);