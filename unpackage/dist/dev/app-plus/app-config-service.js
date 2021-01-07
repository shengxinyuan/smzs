
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/index/shop_detail","pages/login/login","pages/information/information","pages/information/newList","pages/login/register","pages/login/forget","pages/classify/classify","pages/selts/selts","pages/my/my","pages/my/setting","pages/cart/cart","pages/cart/payment","components/zs-tabbar/zs-tabbar","pages/message/message","components/zs-title/zs-title","components/zs-classifytype/zs-classifytype","components/zs-popup/zs-popup","components/zs-store-admin/zs-store-admin","components/zs-synth-admin/zs-synth-admin","components/zs-share/zs-share","pages/information/information"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"奢美钻石","compilerVersion":"2.9.8","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true},"window":{"navigationBarTitleText":"首页","navigationStyle":"custom","enablePullDownRefresh":true,"backgroundTextStyle":"light"}},{"path":"/pages/index/shop_detail","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/login/login","meta":{},"window":{}},{"path":"/pages/information/information","meta":{},"window":{}},{"path":"/pages/information/newList","meta":{},"window":{"navigationBarTitleText":"消息列表"}},{"path":"/pages/login/register","meta":{},"window":{}},{"path":"/pages/login/forget","meta":{},"window":{"navigationBarTitleText":"修改密码"}},{"path":"/pages/classify/classify","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/selts/selts","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/my/my","meta":{},"window":{"navigationStyle":"custom","enablePullDownRefresh":true,"backgroundTextStyle":"light"}},{"path":"/pages/my/setting","meta":{},"window":{"navigationBarTitleText":"系统设置"}},{"path":"/pages/cart/cart","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/cart/payment","meta":{},"window":{"navigationBarTitleText":"确认订单"}},{"path":"/components/zs-tabbar/zs-tabbar","meta":{},"window":{}},{"path":"/pages/message/message","meta":{},"window":{"navigationBarTitleText":"消息"}},{"path":"/components/zs-title/zs-title","meta":{},"window":{}},{"path":"/components/zs-classifytype/zs-classifytype","meta":{},"window":{}},{"path":"/components/zs-popup/zs-popup","meta":{},"window":{}},{"path":"/components/zs-store-admin/zs-store-admin","meta":{},"window":{}},{"path":"/components/zs-synth-admin/zs-synth-admin","meta":{},"window":{}},{"path":"/components/zs-share/zs-share","meta":{},"window":{}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
