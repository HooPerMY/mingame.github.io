System.register("chunks:///_virtual/privacy",["./PrivacyDecUI.ts","./PrivacyDecUIItem.ts"],(function(){"use strict";return{setters:[null,null],execute:function(){}}}));

System.register("chunks:///_virtual/PrivacyDecUI.ts",["./rollupPluginModLoBabelHelpers.js","cc","./DirectorHelper.ts","./BaseUI.ts","./UIDefine.ts","./PrivacyDecUIItem.ts"],(function(t){"use strict";var e,c,n,i,r,a,o;return{setters:[function(t){e=t.inheritsLoose},function(t){c=t.cclegacy},function(t){n=t.ccclass,i=t.menu},function(t){r=t.BaseUI},function(t){a=t.EUILayer},function(t){o=t.PrivacyDecUIItem}],execute:function(){var s;c._RF.push({},"d99absQn+FBe56xnrZEXFRD","PrivacyDecUI",void 0);t("PrivacyDecUI",n("PrivacyDecUI")(s=i("privacy/PrivacyDecUI")(s=function(t){function c(){for(var e,c=arguments.length,n=new Array(c),i=0;i<c;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))||this).layerType=a.NoticeUp,e.cLabel_top_dec=null,e._openData=null,e}return e(c,t),c.prototype.onOpen=function(){var t=this;this.cLabel_top_dec.string=this._openData.gameName,this.ListCC.render(this._openData.count,o,(function(e,c,n){e.init("privacy/texture/"+t._openData.path+(t._openData.pathPirfix||"")+(n+1))})),this.ListCC.ScrollView.scrollToTop(0)},c}(r))||s)||s);c._RF.pop()}}}));

System.register("chunks:///_virtual/PrivacyDecUIItem.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ListCCByBaseItemCC.ts","./DirectorHelper.ts"],(function(t){"use strict";var e,r,i,c;return{setters:[function(t){e=t.inheritsLoose},function(t){r=t.cclegacy},function(t){i=t.ListCCByBaseItemCC},function(t){c=t.ccclass}],execute:function(){var n;r._RF.push({},"47985OVqclEVYZt7preuGzu","PrivacyDecUIItem",void 0);t("PrivacyDecUIItem",c("PrivacyDecUIItem")(n=function(t){function r(){for(var e,r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))||this).url="",e}e(r,t);var i=r.prototype;return i.init=function(t){this.url=t},i.listInit=function(){this.SpriteLoaderCC.setSpriteFrameUrl(this.url,!0)},r}(i))||n);r._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/privacy', 'chunks:///_virtual/privacy'); 
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