(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/talk_detail"],{"599c":function(t,e,n){"use strict";(function(t){n("4963");i(n("66fd"));var e=i(n("b06e"));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},"603d":function(t,e,n){"use strict";n.r(e);var i=n("fc69"),u=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=u.a},"6b21":function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={uParse:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-parse/u-parse")]).then(n.bind(null,"5073"))}},u=function(){var t=this,e=t.$createElement;t._self._c},a=[]},b06e:function(t,e,n){"use strict";n.r(e);var i=n("6b21"),u=n("603d");for(var a in u)"default"!==a&&function(t){n.d(e,t,(function(){return u[t]}))}(a);var r,c=n("f0c5"),o=Object(c["a"])(u["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);e["default"]=o.exports},fc69:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{article_id:0,type:0,datalsit:""}},onLoad:function(t){console.log(t),this.type=t.type,this.article_id=t.id,this.article()},methods:{article:function(){var t=this;this.$api.get("news",{id:this.article_id,label:this.type}).then((function(e){console.log(e),1==e.status&&(t.datalsit=e.data)}))}}};e.default=i}},[["599c","common/runtime","common/vendor"]]]);