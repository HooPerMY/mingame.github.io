System.register("chunks:///_virtual/setting",["./SettingUI.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/SettingUI.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameDefine.ts","./DirectorHelper.ts","./AudioMgr.ts","./PlatformDefine.ts","./PlatformMgr.ts","./BaseUI.ts","./UIDefine.ts","./InstanceExport.ts","./UIMgr.ts","./BattleDefine.ts","./Config.ts","./XgameReportSdk.ts"],(function(e){"use strict";var t,n,i,c,o,s,l,r,u,a,h,C,p,d,f,m,v,_;return{setters:[function(e){t=e.inheritsLoose},function(e){n=e.cclegacy},function(e){i=e.CUseData},function(e){c=e.ccclass},function(e){o=e.AudioMgr},function(e){s=e.EBottomAdType,l=e.EPlatformType,r=e.EBlockOnceAdType},function(e){u=e.PlatformMgr},function(e){a=e.BaseUI},function(e){h=e.EUILayer},function(e){C=e._battle,p=e._battleCustom,d=e._privacy},function(e){f=e.UIMgr},function(e){m=e.EBattleLevelType},function(e){v=e._config_},function(e){_=e.XgameReportSdk}],execute:function(){var g;n._RF.push({},"52af3yS6apPi5dNpKPnKLiB","SettingUI",void 0);e("SettingUI",c("SettingUI")(g=function(e){function n(){for(var t,n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))||this).layerType=h.Panel,t.blockOnceAdType=r.Show,t.cSwitchChildrenCC_music=null,t.cSwitchChildrenCC_sound=null,t.cSwitchChildrenCC_btns=null,t.cAUser=null,t.cADec=null,t.cReset=null,t}t(n,e);var c=n.prototype;return c.onCreate=function(){switch(u.type){case l.OPPO:case l.WECHAT:this.bottomAdType=s.Native;break;default:this.bottomAdType=s.Banner}},c.onOpen=function(){_.reportCustomEvent("ui",{scene:"setting_view",ui_action:"view_show"}),this.updateView(),u.type,l.WECHAT,this.cAUser.active=!1,this.cADec.active=!1,C.levelType==m.customEditor||C.levelType==m.custom&&!p.runFrinend?(this.cSwitchChildrenCC_btns.node.active=!0,this.cSwitchChildrenCC_btns.index=1):(this.cSwitchChildrenCC_btns.index=0,C.isRun?(this.cSwitchChildrenCC_btns.node.active=!0,C.pause()):this.cSwitchChildrenCC_btns.node.active=!1)},c.onClose=function(){C.isRun&&(C.report("pause_back_game"),C.resume())},c.onClickABack=function(){C.report("pause_back_home"),this.closeUI(),_.reportCustomEvent("ui",{scene:"setting_view",ui_action:"back_click"})},c.onClickAUser=function(){d.openUserUI()},c.onClickADec=function(){d.openDecUI()},c.onClickReset=function(){C.report("pause_restart"),this.closeUI(),C.reset()},c.onClickExit=function(){switch(this.closeUI(),C.levelType){case m.level:u.platform.reportEvent("level",{id:C.curLevel,levelevent:3}),f.open(i.BattleLevelSelectUrl,{level:C.level,configLength:v.Array.level_item.length,add:!0});break;case m.toDay:C.exit();break;case m.shape:f.open(i.BattleLevelSelectUrl,{level:C.shapeLevel,configLength:C.shapeLevel.max});break;case m.custom:C.exit()}},c.onClickIndex=function(){this.closeUI(),f.open("battle/prefab/ui/BattleCustomMapUI")},c.onClickEditor=function(){this.closeUI(),C.levelType!=m.customEditor&&p.editorRun()},c.onClickSwitchChildrenCC_music=function(){1==o.getVolume(!0)?o.setVolume(!0,0):o.setVolume(!0,1),this.updateView()},c.onClickSwitchChildrenCC_sound=function(){1==o.getVolume(!1)?o.setVolume(!1,0):o.setVolume(!1,1),this.updateView()},c.updateView=function(){1==o.getVolume(!0)?this.cSwitchChildrenCC_music.index=0:this.cSwitchChildrenCC_music.index=1,1==o.getVolume(!1)?this.cSwitchChildrenCC_sound.index=0:this.cSwitchChildrenCC_sound.index=1},n}(a))||g);n._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/setting', 'chunks:///_virtual/setting'); 
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