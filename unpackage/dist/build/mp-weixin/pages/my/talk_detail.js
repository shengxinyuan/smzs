(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/talk_detail"],{2696:function(t,e,n){"use strict";n.r(e);var a=n("744b"),i=n("8c6b");for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);var r,o=n("f0c5"),c=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);e["default"]=c.exports},"313e":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{article_id:0,type:0,datalsit:""}},onLoad:function(t){console.log(t),this.type=t.type,this.article_id=t.id,this.article()},methods:{article:function(){var t=this;this.$api.get("news",{id:this.article_id,label:this.type}).then((function(e){console.log(e),1==e.status&&(t.datalsit=e.data)}))}}};e.default=a},"744b":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return a}));var a={uParse:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-parse/u-parse")]).then(n.bind(null,"e2c6"))}},i=function(){var t=this,e=t.$createElement;t._self._c},u=[]},"8c6b":function(t,e,n){"use strict";n.r(e);var a=n("313e"),i=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,(function(){return a[t]}))}(u);e["default"]=i.a},"9fe9":function(t,e,n){"use strict";(function(t){n("b7aa");a(n("66fd"));var e=a(n("2696"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])}},[["9fe9","common/runtime","common/vendor"]]]);