(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{121:function(e,t,r){"use strict";r.d(t,"b",function(){return m});var a=r(1),n=r.n(a),i=r(0),o=r.n(i),c=r(118),u=r.n(c);r.d(t,"a",function(){return u.a}),r(122);var l=n.a.createContext({}),m=function(e){return n.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},122:function(e,t,r){var a;e.exports=(a=r(124))&&a.default||a},124:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r.n(a),i=r(0),o=r.n(i),c=r(46),u=r(4),l=function(e){var t=e.location,r=u.a.getResourcesForPathname(t.pathname);return n.a.createElement(c.a,{location:t,pageResources:r})};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},127:function(e){e.exports={data:{site:{siteMetadata:{title:"UN World Data Forum",description:"The 2018 UN World Data Forum takes place 22-24 October 2018 in Dubai, United Arab Emirates.",siteUrl:"https://2018.undataforum.org"}}}}},128:function(e,t,r){"use strict";var a=r(127),n=r(1),i=r.n(n),o=r(121),c=r(135),u=r.n(c),l=r(0),m=r.n(l),s=function(e){var t=e.title,r=e.description,a=e.url;return i.a.createElement(u.a,{title:t},i.a.createElement("meta",{property:"og:title",content:t}),i.a.createElement("meta",{property:"og:type",content:"website"}),a&&i.a.createElement("meta",{property:"og:url",content:a}),i.a.createElement("meta",{property:"og:description",content:r}),i.a.createElement("meta",{name:"robots",content:"noindex,nofollow"}))};s.propTypes={title:m.a.string.isRequired,description:m.a.string.isRequired,url:m.a.string};var d=s,p=r(125),f=function(e){var t=e.href,r=e.children;return i.a.createElement(o.a,{to:t},r)},h=function(e){var t=e.children;return i.a.createElement(o.b,{query:"820388659",render:function(e){var r=e.site.siteMetadata,a=r.title,n=r.description,o=r.siteUrl;return i.a.createElement(p.Provider,null,i.a.createElement(d,{title:a,description:n,url:o}),i.a.createElement(p.Header,{anchor:f,links:[{href:"/tracks",text:"Tracks"},{href:"/schedule",text:"Schedule"},{href:"/committee",text:"Committee"}],title:function(e){return i.a.createElement(p.AlternateTitle,{color:e,year:2018})}}),t)},data:a})};r.d(t,"a",function(){return h})},250:function(e,t,r){"use strict";r.r(t),r.d(t,"templateQuery",function(){return p});var a=r(1),n=r.n(a),i=r(255),o=r.n(i),c=r(121),u=r(125),l=r(128),m=function(e){var t=e.href,r=e.children;return n.a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},r)},s=function(e){var t=e.href,r=e.children;return n.a.createElement(c.a,{to:t},r)},d=new o.a({createElement:n.a.createElement,components:{a:function(e){var t=e.href,r=e.children;return n.a.createElement(u.MarkdownAnchor,{anchor:m,href:t},r)},p:u.MarkdownParagraph}}).Compiler;t.default=function(e){var t=e.data,r=t.markdownRemark,a=r.htmlAst,i=r.frontmatter,o=i.firstName,c=i.lastName,m=i.committee,p=t.imageSharp.resize.src,f=o+" "+c,h=[];return m&&h.push({text:"Committee Member",href:"/committee/",color:"red"}),n.a.createElement(l.a,null,n.a.createElement(u.Container,{maxWidth:6,mt:3},n.a.createElement(u.ProfileHeader,{anchor:s,name:f,img:p,badges:h,mb:3}),d(a)))};var p="3018981668"}}]);
//# sourceMappingURL=component---src-templates-profile-jsx-e60290dcb2aee74fb5f1.js.map