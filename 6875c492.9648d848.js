(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{78:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(108),c=t(126),m=t(104),s=t(113);a.default=function(e){const{metadata:a,items:t,sidebar:n}=e,{allTagsPath:i,name:o,count:d}=a;return r.a.createElement(l.a,{title:`Posts tagged "${o}"`,description:`Blog | Tagged "${o}"`,wrapperClassName:"blog-wrapper"},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--2"},r.a.createElement(s.a,{sidebar:n})),r.a.createElement("main",{className:"col col--8"},r.a.createElement("h1",null,d," ",function(e,a){return e>1?`${a}s`:a}(d,"post"),' tagged with "',o,'"'),r.a.createElement(m.a,{href:i},"View All Tags"),r.a.createElement("div",{className:"margin-vert--xl"},t.map((({content:e})=>r.a.createElement(c.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:!0},r.a.createElement(e,null)))))))))}}}]);