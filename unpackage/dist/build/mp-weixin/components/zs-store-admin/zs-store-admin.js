(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/zs-store-admin/zs-store-admin"],{"7e62":function(t,n,o){},a0fc:function(t,n,o){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={data:function(){return{}},props:{skip:{type:Boolean},menber_json:{},jinx:{},islogin:!1,store_admin:{type:Array,default:function(){return[]}}},created:function(){console.log(this.skip)},mounted:function(){console.log(this.store_admin)},methods:{goto_vip_set:function(n){if(this.islogin){1==this.skip?0==n?this.com.navto("../../pages/service/my-dp-html"):1==n?this.com.navto("../../pages/shop-orders/shop-orders"):2==n?this.com.navto("../../pages/set-shop/set-shop"):3==n?this.com.navto("../../pages/community/shop-code"):4==n?this.com.navto("../../pages/community/my-gold-prices"):5==n?this.com.navto("../../pages/community/talk"):6==n?this.com.navto("../../pages/community/community"):7==n&&this.com.navto("../../pages/index/Selected_topics?id="+this.jinx[1].id+"&type="+JSON.stringify(this.jinx)):t.showModal({title:"您还不是会员，是否去开通？",success:function(n){n.confirm&&t.navigateTo({url:"/pages/my/vip_member"})}})}else t.showModal({content:"您还未登录，是否登录？",success:function(n){n.confirm&&t.navigateTo({url:"/pages/login/login"})}})}}};n.default=o}).call(this,o("543d")["default"])},bcc4:function(t,n,o){"use strict";o.r(n);var e=o("a0fc"),i=o.n(e);for(var s in e)"default"!==s&&function(t){o.d(n,t,(function(){return e[t]}))}(s);n["default"]=i.a},daea:function(t,n,o){"use strict";o.r(n);var e=o("ff12"),i=o("bcc4");for(var s in i)"default"!==s&&function(t){o.d(n,t,(function(){return i[t]}))}(s);o("ec4a");var c,a=o("f0c5"),r=Object(a["a"])(i["default"],e["b"],e["c"],!1,null,"60b11fd2",null,!1,e["a"],c);n["default"]=r.exports},ec4a:function(t,n,o){"use strict";var e=o("7e62"),i=o.n(e);i.a},ff12:function(t,n,o){"use strict";var e;o.d(n,"b",(function(){return i})),o.d(n,"c",(function(){return s})),o.d(n,"a",(function(){return e}));var i=function(){var t=this,n=t.$createElement;t._self._c},s=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/zs-store-admin/zs-store-admin-create-component',
    {
        'components/zs-store-admin/zs-store-admin-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("daea"))
        })
    },
    [['components/zs-store-admin/zs-store-admin-create-component']]
]);
