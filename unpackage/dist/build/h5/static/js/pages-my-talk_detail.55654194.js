(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-talk_detail"],{"055b":function(t,e,i){i("ac1f"),i("1276");var r={errorImg:null,filter:null,highlight:null,onText:null,entities:{quot:'"',apos:"'",semi:";",nbsp:" ",ensp:" ",emsp:" ",ndash:"–",mdash:"—",middot:"·",lsquo:"‘",rsquo:"’",ldquo:"“",rdquo:"”",bull:"•",hellip:"…"},blankChar:n(" , ,\t,\r,\n,\f"),boolAttrs:n("allowfullscreen,autoplay,autostart,controls,ignore,loop,muted"),blockTags:n("address,article,aside,body,caption,center,cite,footer,header,html,nav,pre,section"),ignoreTags:n("area,base,canvas,frame,iframe,input,link,map,meta,param,script,source,style,svg,textarea,title,track,wbr"),richOnlyTags:n("a,colgroup,fieldset,legend"),selfClosingTags:n("area,base,br,col,circle,ellipse,embed,frame,hr,img,input,line,link,meta,param,path,polygon,rect,source,track,use,wbr"),trustTags:n("a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video"),userAgentStyles:{address:"font-style:italic",big:"display:inline;font-size:1.2em",blockquote:"background-color:#f6f6f6;border-left:3px solid #dbdbdb;color:#6c6c6c;padding:5px 0 5px 10px",caption:"display:table-caption;text-align:center",center:"text-align:center",cite:"font-style:italic",dd:"margin-left:40px",mark:"background-color:yellow",pre:"font-family:monospace;white-space:pre;overflow:scroll",s:"text-decoration:line-through",small:"display:inline;font-size:0.8em",u:"text-decoration:underline"}};function n(t){for(var e=Object.create(null),i=t.split(","),r=i.length;r--;)e[i[r]]=!0;return e}t.exports=r},"15fe":function(t,e,i){"use strict";i.r(e);var r=i("6c02"),n=i.n(r);for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);e["default"]=n.a},"20bd":function(t,e,i){"use strict";i.r(e);var r=i("bf1b"),n=i.n(r);for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);e["default"]=n.a},"6c02":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={data:function(){return{article_id:0,type:0,datalsit:""}},onLoad:function(t){console.log(t),this.type=t.type,this.article_id=t.id,this.article()},methods:{article:function(){var t=this;this.$api.get("news",{id:this.article_id,label:this.type}).then((function(e){console.log(e),1==e.status&&(t.datalsit=e.data)}))}}};e.default=r},"6e02":function(t,e,i){var r=i("24fb");e=r(!1),e.push([t.i,"@-webkit-keyframes _show-data-v-f207f29a{0%{opacity:0}100%{opacity:1}}@keyframes _show-data-v-f207f29a{0%{opacity:0}100%{opacity:1}}\n\n\n\n",""]),t.exports=e},"75f9":function(t,e,i){"use strict";var r;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return r}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[t.nodes.length?t._e():t._t("default"),i("v-uni-view",{style:t.showAm+(t.selectable?";user-select:text;-webkit-user-select:text":""),attrs:{id:"_top"}},[i("div",{attrs:{id:"rtf"+t.uid}})])],2)},a=[]},"87d8":function(t,e,i){"use strict";i.r(e);var r=i("cf8a"),n=i("15fe");for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);var o,s=i("f0c5"),l=Object(s["a"])(n["default"],r["b"],r["c"],!1,null,"8ac01e52",null,!1,r["a"],o);e["default"]=l.exports},"9a03":function(t,e,i){"use strict";i.r(e);var r=i("75f9"),n=i("20bd");for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("cd5d");var o,s=i("f0c5"),l=Object(s["a"])(n["default"],r["b"],r["c"],!1,null,"f207f29a",null,!1,r["a"],o);e["default"]=l.exports},a59a:function(t,e,i){var r=i("6e02");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=i("4f06").default;n("0c2afa8a",r,!0,{sourceMap:!1,shadowMode:!1})},b85c:function(t,e,i){"use strict";i("a4d3"),i("e01a"),i("d28b"),i("d3b7"),i("3ca3"),i("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var r=n(i("06c5"));function n(t){return t&&t.__esModule?t:{default:t}}function a(t,e){var i;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(i=(0,r.default)(t))||e&&t&&"number"===typeof t.length){i&&(t=i);var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,l=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return s=t.done,t},e:function(t){l=!0,o=t},f:function(){try{s||null==i["return"]||i["return"]()}finally{if(l)throw o}}}}},bf1b:function(t,e,i){"use strict";var r=i("4ea4");i("99af"),i("caad"),i("c975"),i("acd8"),i("e25e"),i("ac1f"),i("2532"),i("466d"),i("5319"),i("841c"),i("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,a=r(i("b85c")),o=uni.getSystemInfoSync(),s=o.windowWidth,l=(o.platform,i("055b")),c={name:"parser",data:function(){return{uid:this._uid,showAm:"",nodes:[]}},props:{html:String,autopause:{type:Boolean,default:!0},autoscroll:Boolean,autosetTitle:{type:Boolean,default:!0},domain:String,lazyLoad:Boolean,selectable:Boolean,tagStyle:Object,showWithAnimation:Boolean,useAnchor:Boolean},watch:{html:function(t){this.setContent(t)}},created:function(){this.imgList=[],this.imgList.each=function(t){for(var e=0,i=this.length;e<i;e++)this.setItem(e,t(this[e],e,this))},this.imgList.setItem=function(t,e){if(void 0!=t&&e){if(0==e.indexOf("http")&&this.includes(e)){for(var i,r=e.split("://")[0],n=r.length;i=e[n];n++){if("/"==i&&"/"!=e[n-1]&&"/"!=e[n+1])break;r+=Math.random()>.5?i.toUpperCase():i}return r+=e.substr(n),this[t]=r}if(this[t]=e,e.includes("data:image")){var a=e.match(/data:image\/(\S+?);(\S+?),(.+)/);if(!a)return}}}},mounted:function(){var t=this;this.document=document.getElementById("rtf"+this._uid),n&&(this.search=function(e){return n(t,e)}),this.html&&this.setContent(this.html)},beforeDestroy:function(){this._observer&&this._observer.disconnect(),this.imgList.each((function(t){})),clearInterval(this._timer)},methods:{setContent:function(t,e){var i=this;if(t){var r=document.createElement("div");e?this.rtf?this.rtf.appendChild(r):this.rtf=r:(this.rtf&&this.rtf.parentNode.removeChild(this.rtf),this.rtf=r),r.innerHTML=this._handleHtml(t,e);for(var n,o=this.rtf.getElementsByTagName("style"),c=0;n=o[c++];)n.innerHTML=n.innerHTML.replace(/body/g,"#rtf"+this._uid),n.setAttribute("scoped","true");!this._observer&&this.lazyLoad&&IntersectionObserver&&(this._observer=new IntersectionObserver((function(t){for(var e,r=0;e=t[r++];)e.isIntersecting&&(e.target.src=e.target.getAttribute("data-src"),e.target.removeAttribute("data-src"),i._observer.unobserve(e.target))}),{rootMargin:"500px 0px 500px 0px"}));var u=this,f=this.rtf.getElementsByTagName("title");f.length&&this.autosetTitle&&uni.setNavigationBarTitle({title:f[0].innerText});var d=function(t){var e=t.getAttribute("src");i.domain&&e&&("/"==e[0]?"/"==e[1]?t.src=(i.domain.includes("://")?i.domain.split("://")[0]:"")+":"+e:t.src=i.domain+e:e.includes("://")||0==e.indexOf("data:")||(t.src=i.domain+"/"+e))};this.imgList.length=0;for(var h,p=this.rtf.getElementsByTagName("img"),m=0,g=0;h=p[m];m++)parseInt(h.style.width||h.getAttribute("width"))>s&&(h.style.height="auto"),d(h),h.hasAttribute("ignore")||"A"==h.parentElement.nodeName||(h.i=g++,u.imgList.push(h.getAttribute("original-src")||h.src||h.getAttribute("data-src")),h.onclick=function(t){t.stopPropagation();var e=!0;this.ignore=function(){return e=!1},u.$emit("imgtap",this),e&&uni.previewImage({current:this.i,urls:u.imgList})}),h.onerror=function(){l.errorImg&&(u.imgList[this.i]=this.src=l.errorImg),u.$emit("error",{source:"img",target:this})},u.lazyLoad&&this._observer&&h.src&&0!=h.i&&(h.setAttribute("data-src",h.src),h.removeAttribute("src"),this._observer.observe(h));var v,b=this.rtf.getElementsByTagName("a"),y=(0,a.default)(b);try{for(y.s();!(v=y.n()).done;){var _=v.value;_.onclick=function(t){t.stopPropagation();var e=!0,i=this.getAttribute("href");if(u.$emit("linkpress",{href:i,ignore:function(){return e=!1}}),e&&i)if("#"==i[0])u.useAnchor&&u.navigateTo({id:i.substr(1)});else{if(0==i.indexOf("http")||0==i.indexOf("//"))return!0;uni.navigateTo({url:i})}return!1}}}catch(M){y.e(M)}finally{y.f()}var w=this.rtf.getElementsByTagName("video");u.videoContexts=w;for(var x,T=0;x=w[T++];)d(x),x.style.maxWidth="100%",x.onerror=function(){u.$emit("error",{source:"video",target:this})},x.onplay=function(){if(u.autopause)for(var t,e=0;t=u.videoContexts[e++];)t!=this&&t.pause()};var A,k,C=this.rtf.getElementsByTagName("audio"),S=(0,a.default)(C);try{for(S.s();!(A=S.n()).done;){var I=A.value;d(I),I.onerror=function(){u.$emit("error",{source:"audio",target:this})}}}catch(M){S.e(M)}finally{S.f()}if(this.autoscroll){var B,L=this.rtf.getElementsByTagName("table"),O=(0,a.default)(L);try{for(O.s();!(B=O.n()).done;){var E=B.value,N=document.createElement("div");N.style.overflow="scroll",E.parentNode.replaceChild(N,E),N.appendChild(E)}}catch(M){O.e(M)}finally{O.f()}}e||this.document.appendChild(this.rtf),this.$nextTick((function(){i.nodes=[1],i.$emit("load")})),setTimeout((function(){return i.showAm=""}),500),clearInterval(this._timer),this._timer=setInterval((function(){i.rect=i.rtf.getBoundingClientRect(),i.rect.height==k&&(i.$emit("ready",i.rect),clearInterval(i._timer)),k=i.rect.height}),350),this.showWithAnimation&&!e&&(this.showAm="animation:_show .5s")}else this.rtf&&!e&&this.rtf.parentNode.removeChild(this.rtf)},getText:function(){arguments.length>0&&void 0!==arguments[0]||this.nodes;var t="";return t=this.rtf.innerText,t},in:function(t){t.page&&t.selector&&t.scrollTop&&(this._in=t)},navigateTo:function(t){var e=this;if(!this.useAnchor)return t.fail&&t.fail("Anchor is disabled");var i=" ",r=uni.createSelectorQuery().in(this._in?this._in.page:this).select((this._in?this._in.selector:"#_top")+(t.id?"".concat(i,"#").concat(t.id,",").concat(this._in?this._in.selector:"#_top").concat(i,".").concat(t.id):"")).boundingClientRect();this._in?r.select(this._in.selector).scrollOffset().select(this._in.selector).boundingClientRect():r.selectViewport().scrollOffset(),r.exec((function(i){if(!i[0])return t.fail&&t.fail("Label not found");var r=i[1].scrollTop+i[0].top-(i[2]?i[2].top:0)+(t.offset||0);e._in?e._in.page[e._in.scrollTop]=r:uni.pageScrollTo({scrollTop:r,duration:300}),t.success&&t.success()}))},getVideoContext:function(t){if(!t)return this.videoContexts;for(var e=this.videoContexts.length;e--;)if(this.videoContexts[e].id==t)return this.videoContexts[e]},_handleHtml:function(t,e){if(!e){var i="<style scoped>@keyframes _show{0%{opacity:0}100%{opacity:1}}img{max-width:100%}";for(var r in l.userAgentStyles)i+="".concat(r,"{").concat(l.userAgentStyles[r],"}");for(r in this.tagStyle)i+="".concat(r,"{").concat(this.tagStyle[r],"}");i+="</style>",t=i+t}return t.includes("rpx")&&(t=t.replace(/[0-9.]+\s*rpx/g,(function(t){return parseFloat(t)*s/750+"px"}))),t}}};e.default=c},cd5d:function(t,e,i){"use strict";var r=i("a59a"),n=i.n(r);n.a},cf8a:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return r}));var r={uParse:i("9a03").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticStyle:{padding:"2% 3%"}},[i("u-parse",{attrs:{html:t.datalsit.content}})],1)],1)},a=[]}}]);