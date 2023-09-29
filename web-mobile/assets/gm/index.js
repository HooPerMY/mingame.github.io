System.register("chunks:///_virtual/gm",["./GMDataItem.ts","./GMDataUI.ts","./GMUI.ts"],(function(){"use strict";return{setters:[null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/GMDataItem.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BaseComponent.ts","./DirectorHelper.ts","./UIMgr.ts"],(function(t){"use strict";var e,n,i,c,a,o;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy},function(t){i=t.BaseComponent},function(t){c=t.ccclass,a=t.menu},function(t){o=t.UIMgr}],execute:function(){var r;n._RF.push({},"a3c6ciCEHtKDq/LeCt32H+O","GMDataItem",void 0);t("GMDataItem",c("GMDataItem")(r=a("gm/GMDataItem")(r=function(t){function n(){for(var e,n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))||this).cLabelDec=null,e.data=null,e}e(n,t);var i=n.prototype;return i.init=function(t){this.data=t,this.cLabelDec.string=t.dec,this.EditBox.node.active=!!t.inputTip,t.inputTip&&(this.EditBox.placeholder=t.inputTip)},i.onClickItem=function(){o.close("gm/prefab/GMDataUI"),this.data.click(this.EditBox.string)},n}(i))||r)||r);n._RF.pop()}}}));

System.register("chunks:///_virtual/GMDataUI.ts",["./rollupPluginModLoBabelHelpers.js","cc","./DirectorHelper.ts","./BaseUI.ts","./UIDefine.ts","./InstanceExport.ts","./GMDataItem.ts"],(function(t){"use strict";var n,e,a,r,c,o,i,s;return{setters:[function(t){n=t.inheritsLoose},function(t){e=t.cclegacy},function(t){a=t.ccclass,r=t.menu},function(t){c=t.BaseUI},function(t){o=t.EUILayer},function(t){i=t._gm},function(t){s=t.GMDataItem}],execute:function(){var u;e._RF.push({},"014b75lo6VCQYf5Qr/+Fv3I","GMDataUI",void 0);t("GMDataUI",a("GMDataUI")(u=r("gm/GMDataUI")(u=function(t){function e(){for(var n,e=arguments.length,a=new Array(e),r=0;r<e;r++)a[r]=arguments[r];return(n=t.call.apply(t,[this].concat(a))||this).layerType=o.Top,n}return n(e,t),e.prototype.onOpen=function(){this.ListCC.render(i.getDatas(),s,(function(t,n){t.init(n)}))},e}(c))||u)||u);e._RF.pop()}}}));

System.register("chunks:///_virtual/GMUI.ts",["./rollupPluginModLoBabelHelpers.js","cc","./DirectorHelper.ts","./SceneMgr.ts","./BaseUI.ts","./UIDefine.ts","./UIMgr.ts"],(function(e){"use strict";var n,t,r,c,o,i,s,u;return{setters:[function(e){n=e.inheritsLoose},function(e){t=e.cclegacy},function(e){r=e.ccclass,c=e.menu},function(e){o=e.SceneMgr},function(e){i=e.BaseUI},function(e){s=e.EUILayer},function(e){u=e.UIMgr}],execute:function(){var a;t._RF.push({},"54eb4qWubJAeK4+Q44ywZ9X","GMUI",void 0);e("GMUI",r("GMUI")(a=c("gm/GMUI")(a=function(e){function t(){for(var n,t=arguments.length,r=new Array(t),c=0;c<t;c++)r[c]=arguments[c];return(n=e.call.apply(e,[this].concat(r))||this).layerType=s.Top,n}return n(t,e),t.prototype.onClickBtn=function(){o.isProChange||u.open("gm/prefab/GMDataUI")},t}(i))||a)||a);t._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/gm', 'chunks:///_virtual/gm'); 
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