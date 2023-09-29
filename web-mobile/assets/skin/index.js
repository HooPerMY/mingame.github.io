System.register("chunks:///_virtual/skin",["./SkinUI.ts","./SkinUIItem.ts"],(function(){"use strict";return{setters:[null,null],execute:function(){}}}));

System.register("chunks:///_virtual/SkinUI.ts",["./rollupPluginModLoBabelHelpers.js","cc","./DirectorHelper.ts","./PlatformDefine.ts","./PlatformMgr.ts","./BaseUI.ts","./UIDefine.ts","./InstanceExport.ts","./ConfigAdaptation.ts","./Config.ts","./SkinUIItem.ts","./XgameReportSdk.ts","./SkinHelper.ts"],(function(t){"use strict";var n,i,e,o,s,r,a,c,u,p,h,f,d,l;return{setters:[function(t){n=t.inheritsLoose},function(t){i=t.cclegacy},function(t){e=t.ccclass},function(t){o=t.EBottomAdType,s=t.EPlatformType,r=t.EBlockOnceAdType},function(t){a=t.PlatformMgr},function(t){c=t.BaseUI},function(t){u=t.EUILayer},function(t){p=t._prop},null,function(t){h=t._config_},function(t){f=t.SkinUIItem},function(t){d=t.XgameReportSdk},function(t){l=t.SkinHelper}],execute:function(){var C;i._RF.push({},"7143cuYD8FIoLyRP1Z9PShW","SkinUI",void 0);t("SkinUI",e("SkinUI")(C=function(t){function i(){for(var n,i=arguments.length,e=new Array(i),o=0;o<i;o++)e[o]=arguments[o];return(n=t.call.apply(t,[this].concat(e))||this).layerType=u.Panel,n.blockOnceAdType=r.None,n}n(i,t);var e=i.prototype;return e.onCreate=function(){switch(a.type){case s.WECHAT:this.bottomAdType=o.Native;break;default:this.bottomAdType=o.Banner}this.addEvent(this.ClickChangeViewCC.EventType.CHANGE,this.onOpen,this,this.ClickChangeViewCC.node),this.addEvent(l.EventType.CHANGE,this.noAnimUpdateView,this,p.bgSkin),this.addEvent(l.EventType.CHANGE,this.noAnimUpdateView,this,p.arrowSkin),this.addEvent(l.EventType.UNLOCK,this.noAnimUpdateView,this,p.bgSkin),this.addEvent(l.EventType.UNLOCK,this.noAnimUpdateView,this,p.arrowSkin)},e.onOpen=function(){d.reportCustomEvent("ui",{scene:"skin_view",ui_action:"view_show"}),this.ListCC.isPlayAnim=!0,this.updateView()},e.onClose=function(){d.reportCustomEvent("ui",{scene:"skin_view",ui_action:"back_click"})},e.noAnimUpdateView=function(){this.ListCC.isPlayAnim=!1,this.updateView()},e.updateView=function(){switch(this.ClickChangeViewCC._index){case 0:this.ListCC.render(h.Array.skin_item,f,(function(t,n){t.initArrow(n)}));break;case 1:this.ListCC.render(h.Array.bg_item,f,(function(t,n){t.initBg(n)}))}},i}(c))||C);i._RF.pop()}}}));

System.register("chunks:///_virtual/SkinUIItem.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BaseComponent.ts","./DirectorHelper.ts","./InstanceExport.ts","./UIMgr.ts"],(function(i){"use strict";var t,n,e,s,o,c,r,u;return{setters:[function(i){t=i.inheritsLoose},function(i){n=i.cclegacy},function(i){e=i.BaseComponent},function(i){s=i.ccclass},function(i){o=i._prop,c=i._language,r=i._main},function(i){u=i.UIMgr}],execute:function(){var a;n._RF.push({},"19921HTx39Bg4e+rwJ0Xa3Y","SkinUIItem",void 0);i("SkinUIItem",s("SkinUIItem")(a=function(i){function n(){for(var t,n=arguments.length,e=new Array(n),s=0;s<n;s++)e[s]=arguments[s];return(t=i.call.apply(i,[this].concat(e))||this).config=null,t.skin=null,t}t(n,i);var e=n.prototype;return e.initBg=function(i){this.updateView(o.bgSkin,i)},e.initArrow=function(i){this.updateView(o.arrowSkin,i)},e.updateView=function(i,t){this.config=t,this.skin=i;var n=0;n=this.skin.has(this.config.id)?this.skin.cur==this.config.id?2:1:0,this.ControllerCC.index=n,this.SpriteLoaderCC.setSpriteFrameUrl(this.config.icon_url)},e.onClick=function(){var i=this;switch(this.ControllerCC._index){case 0:r.showVideo("获取"+("skin_item"==this.config.configName?"箭头":"背景")+"皮肤-id{"+this.config.id+"}",(function(){i.skin.unlock(i.config.id),u.tip(c.get(800001))}));break;case 1:u.tip(c.get(800007)),this.skin.use(this.config.id);break;case 2:u.tip(c.get(800008))}},n}(e))||a);n._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/skin', 'chunks:///_virtual/skin'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});