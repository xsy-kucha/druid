(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9ad55310"],{a2b3:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"version",(function(){return s["cb"]})),n.d(r,"dependencies",(function(){return s["l"]})),n.d(r,"PRIORITY",(function(){return s["g"]})),n.d(r,"init",(function(){return s["B"]})),n.d(r,"connect",(function(){return s["j"]})),n.d(r,"disConnect",(function(){return s["m"]})),n.d(r,"disconnect",(function(){return s["n"]})),n.d(r,"dispose",(function(){return s["o"]})),n.d(r,"getInstanceByDom",(function(){return s["w"]})),n.d(r,"getInstanceById",(function(){return s["x"]})),n.d(r,"registerTheme",(function(){return s["R"]})),n.d(r,"registerPreprocessor",(function(){return s["P"]})),n.d(r,"registerProcessor",(function(){return s["Q"]})),n.d(r,"registerPostInit",(function(){return s["N"]})),n.d(r,"registerPostUpdate",(function(){return s["O"]})),n.d(r,"registerUpdateLifecycle",(function(){return s["T"]})),n.d(r,"registerAction",(function(){return s["H"]})),n.d(r,"registerCoordinateSystem",(function(){return s["I"]})),n.d(r,"getCoordinateSystemDimensions",(function(){return s["v"]})),n.d(r,"registerLocale",(function(){return s["L"]})),n.d(r,"registerLayout",(function(){return s["J"]})),n.d(r,"registerVisual",(function(){return s["U"]})),n.d(r,"registerLoading",(function(){return s["K"]})),n.d(r,"setCanvasCreator",(function(){return s["V"]})),n.d(r,"registerMap",(function(){return s["M"]})),n.d(r,"getMap",(function(){return s["y"]})),n.d(r,"registerTransform",(function(){return s["S"]})),n.d(r,"dataTool",(function(){return s["k"]})),n.d(r,"zrender",(function(){return s["eb"]})),n.d(r,"matrix",(function(){return s["D"]})),n.d(r,"vector",(function(){return s["bb"]})),n.d(r,"zrUtil",(function(){return s["db"]})),n.d(r,"color",(function(){return s["i"]})),n.d(r,"throttle",(function(){return s["X"]})),n.d(r,"helper",(function(){return s["A"]})),n.d(r,"use",(function(){return s["Z"]})),n.d(r,"setPlatformAPI",(function(){return s["W"]})),n.d(r,"parseGeoJSON",(function(){return s["F"]})),n.d(r,"parseGeoJson",(function(){return s["G"]})),n.d(r,"number",(function(){return s["E"]})),n.d(r,"time",(function(){return s["Y"]})),n.d(r,"graphic",(function(){return s["z"]})),n.d(r,"format",(function(){return s["u"]})),n.d(r,"util",(function(){return s["ab"]})),n.d(r,"env",(function(){return s["p"]})),n.d(r,"List",(function(){return s["e"]})),n.d(r,"Model",(function(){return s["f"]})),n.d(r,"Axis",(function(){return s["a"]})),n.d(r,"ComponentModel",(function(){return s["c"]})),n.d(r,"ComponentView",(function(){return s["d"]})),n.d(r,"SeriesModel",(function(){return s["h"]})),n.d(r,"ChartView",(function(){return s["b"]})),n.d(r,"innerDrawElementOnCanvas",(function(){return s["C"]})),n.d(r,"extendComponentModel",(function(){return s["r"]})),n.d(r,"extendComponentView",(function(){return s["s"]})),n.d(r,"extendSeriesModel",(function(){return s["t"]})),n.d(r,"extendChartView",(function(){return s["q"]})),n.d(r,"default",(function(){return p}));var o=function(){var e=this,t=e._self._c;return t("div",{staticStyle:{width:"100%",height:"100%",position:"relative"}},[t("div",{ref:"container",staticStyle:{width:"100%",height:"calc(100% - 10px)"},attrs:{id:"container"}})])},a=[],i=n("2909"),s=(n("b680"),n("a15b"),n("b0c0"),n("99af"),n("4de4"),n("d3b7"),n("b64b"),n("aa74")),c=n("22b4"),u=n("1be7"),d=n("f95e"),l=n("5e81"),f=n("ee29");Object(c["a"])([d["a"],l["a"]]);var p={init:function(){return u["l"].apply(null,arguments)}};Object(c["a"])(f["a"]);
/*!
 * echarts-extension-amap 
 * @version 1.10.1
 * @author plainheart
 * 
 * MIT License
 * 
 * Copyright (c) 2019-2021 Zhongxiang.Wang
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */
var m=s["cb"].split(".")[0]>4,h=function(){return AMap.version>=2};function v(e,t){return e&&t&&e[0]===t[0]&&e[1]===t[1]}var g={};function y(e,t,n){var r="[ECharts][Extension][AMap]".concat(e?" "+e+":":""," ").concat(t);n&&g[r]||console.warn(r),n&&(g[r]=!0)}function _(){g={}}function b(e,t){return t=t||[0,0],s["ab"].map([0,1],(function(n){var r=t[n],o=e[n]/2,a=[],i=[];return a[n]=r-o,i[n]=r+o,a[1-n]=i[1-n]=t[1-n],Math.abs(this.dataToPoint(a)[n]-this.dataToPoint(i)[n])}),this)}var C=["echartsLayerZIndex","echartsLayerInteractive","renderOnMoving","largeMode","returnMapCameraState","layers"];function w(e,t){this._amap=e,this._api=t,this._mapOffset=[0,0]}var L=w.prototype;L.setZoom=function(e){this._zoom=e},L.setCenter=function(e){var t=new AMap.LngLat(e[0],e[1]);this._center=this._amap.lngLatToContainer(t)},L.setMapOffset=function(e){this._mapOffset=e},L.setAMap=function(e){this._amap=e},L.getAMap=function(){return this._amap},L.dataToPoint=function(e){var t=new AMap.LngLat(e[0],e[1]),n=this._amap.lngLatToContainer(t),r=this._mapOffset;return[n.x-r[0],n.y-r[1]]},L.pointToData=function(e){var t=this._mapOffset,n=this._amap.containerToLngLat(new AMap.Pixel(e[0]+t[0],e[1]+t[1]));return[n.lng,n.lat]},L.getViewRect=function(){var e=this._api;return new s["z"].BoundingRect(0,0,e.getWidth(),e.getHeight())},L.getRoamTransform=function(){return s["D"].create()},L.prepareCustoms=function(){var e=this.getViewRect();return{coordSys:{type:"amap",x:e.x,y:e.y,width:e.width,height:e.height},api:{coord:s["ab"].bind(this.dataToPoint,this),size:s["ab"].bind(b,this)}}},w.create=function(e,t){var n;e.eachComponent("amap",(function(e){if("undefined"===typeof AMap)throw new Error("AMap api is not loaded");if(n)throw new Error("Only one amap component can exist");var r=e.getAMap(),o=e.get("echartsLayerInteractive");if(!r){var a=t.getDom(),i=t.getZr().painter,c=i.getViewportRoot();c.className="amap-ec-layer",c.style.visibility="hidden";var u=a.querySelector(".ec-extension-amap");u&&(c.style.left="0px",c.style.top="0px",a.removeChild(u)),u=document.createElement("div"),u.className="ec-extension-amap",u.style.cssText="position:absolute;top:0;left:0;bottom:0;right:0;",a.appendChild(u);var d=s["ab"].clone(e.get());"echartsLayerZIndex"in d&&y("DEPRECATED","the option `echartsLayerZIndex` has been removed since v1.9.0, use `echartsLayerInteractive` instead."),s["ab"].each(C,(function(e){delete d[e]})),r=new AMap.Map(u,d),r.on("complete",(function(){u.querySelector(".amap-maps").appendChild(c),c.style.visibility=""})),e.setAMap(r),e.setEChartsLayer(c),i.getViewportRootOffset=function(){return{offsetLeft:0,offsetTop:0}}}var l=e.__echartsLayerInteractive;l!==o&&(e.setEChartsLayerInteractive(o),e.__echartsLayerInteractive=o);var f=e.get("center"),p=e.get("zoom");if(f&&p){var m=r.getCenter(),h=r.getZoom(),v=e.centerOrZoomChanged([m.lng,m.lat],h);v&&r.setZoomAndCenter(p,new AMap.LngLat(f[0],f[1]))}var g=e.__mapStyle,_=e.get("mapStyle");if(g!==_&&r.setMapStyle(e.__mapStyle=_),r.setLang){var b=e.__mapLang,L=e.get("lang");b!==L&&r.setLang(e.__mapLang=L)}else y("CAVEAT","The current map doesn't support `setLang` API!",!0);n=new w(r,t),n.setMapOffset(e.__mapOffset||[0,0]),n.setZoom(p),n.setCenter(f),e.coordinateSystem=n})),e.eachSeries((function(e){"amap"===e.get("coordinateSystem")&&(e.coordinateSystem=n)}))},L.dimensions=w.dimensions=["lng","lat"];var M,S={type:"amap",setAMap:function(e){this.__amap=e},getAMap:function(){return this.__amap},setEChartsLayer:function(e){this.__echartsLayer=e},getEChartsLayer:function(){return this.__echartsLayer},setEChartsLayerVisiblity:function(e){this.__echartsLayer.style.display=e?"block":"none"},setEChartsLayerInteractive:function(e){this.option.echartsLayerInteractive=!!e,this.__echartsLayer.style.pointerEvents=e?"auto":"none"},setCenterAndZoom:function(e,t){this.option.center=e,this.option.zoom=t},centerOrZoomChanged:function(e,t){var n=this.option;return!(v(e,n.center)&&t===n.zoom)},defaultOption:{center:[116.397428,39.90923],zoom:5,isHotspot:!1,resizeEnable:!0,echartsLayerInteractive:!0,renderOnMoving:!0,largeMode:!1,returnMapCameraState:!1}},x=m?s["c"].extend(S):S,T={type:"amap",init:function(){this._isFirstRender=!0,M=h()},render:function(e,t,n){var r=!0,o=e.getAMap(),a=n.getZr().painter.getViewportRoot(),i=o.getContainer(),c=e.coordinateSystem,u=e.get("renderOnMoving"),d=e.get("resizeEnable"),l=e.get("largeMode"),f=e.get("returnMapCameraState"),p=o.getViewMode_(),m="3D"===p,h=function(t){if(!r){var s=i.style,u=[-parseInt(s.left,10)||0,-parseInt(s.top,10)||0],d=a.style,l=u[0]+"px",m=u[1]+"px";d.left!==l&&(d.left=l),d.top!==m&&(d.top=m),c.setMapOffset(e.__mapOffset=u);var h={type:"amapRoam",animation:{duration:0}};if(f){t=t||{};var v=t.center;v||(v=o.getCenter(),v=[v.lng,v.lat]),h.camera={viewMode:p,center:v,zoom:t.zoom||o.getZoom(),rotation:null==t.rotation?o.getRotation():t.rotation,pitch:null==t.pitch?o.getPitch():t.pitch,scale:o.getScale(),bounds:o.getBounds()}}n.dispatchAction(h)}};if(o.off("mapmove",this._moveHandler),o.off("moveend",this._moveHandler),o.off("viewchange",this._moveHandler),o.off("camerachange",this._moveHandler),o.off("zoom",this._moveHandler),this._resizeHandler&&o.off("resize",this._resizeHandler),this._moveStartHandler&&o.off("movestart",this._moveStartHandler),this._moveEndHandler&&(o.off("moveend",this._moveEndHandler),o.off("zoomend",this._moveEndHandler)),o.on(u?M?"viewchange":m?"camerachange":"mapmove":"moveend",!M&&l?h=Object(s["X"])(h,20,!0):h),this._moveHandler=h,!u||M&&m||o.on("zoom",h),!u){o.on("movestart",this._moveStartHandler=function(){setTimeout((function(){e.setEChartsLayerVisiblity(!1)}),0)});var v=this._moveEndHandler=function(t){(!t||"moveend"!==t.type)&&h(t),setTimeout((function(){e.setEChartsLayerVisiblity(!0)}),M||!l?0:20)};if(o.on("moveend",v),o.on("zoomend",v),this._isFirstRender&&m){var g=o.setPitch,y=o.setRotation;o.setPitch=function(){g.apply(this,arguments),v()},o.setRotation=function(){y.apply(this,arguments),v()}}}if(d){var _=function(){Object(s["w"])(n.getDom()).resize()};!M&&l&&(_=Object(s["X"])(_,20,!0)),o.on("resize",this._resizeHandler=_)}this._isFirstRender=r=!1},dispose:function(e){_();var t=e.getComponent("amap");t&&(t.getAMap().destroy(),t.setAMap(null),t.setEChartsLayer(null),t.coordinateSystem&&(t.coordinateSystem.setAMap(null),t.coordinateSystem=null),delete this._moveHandler,delete this._resizeHandler,delete this._moveStartHandler,delete this._moveEndHandler)}},A=m?s["d"].extend(T):T;function E(e){m?e.registerComponentModel(x):e.extendComponentModel(x),m?e.registerComponentView(A):e.extendComponentView(A),e.registerCoordinateSystem("amap",w),e.registerAction({type:"amapRoam",event:"amapRoam",update:"updateLayout"},(function(e,t){t.eachComponent("amap",(function(e){var t=e.getAMap(),n=t.getCenter();e.setCenterAndZoom([n.lng,n.lat],t.getZoom())}))}))}m?s["Z"](E):E(r);var O=n("313e"),I=n("ee4e"),z=I["a"].event.newBreakOut,R=window.AMap,D=null,H=null,P=function(e,t){for(var n=[],r={},o=0;o<e.length;o++){var a=e[o].location.lnglat;if(a){a[0]=1*a[0].toFixed(I["a"].lnglatDecimal),a[0]=1*a[0].toFixed(I["a"].lnglatDecimal);var i=a.join(",");r[i]||(r[i]={location:a,eventList:[]}),r[i].eventList.push(e[o])}}for(var s in r){for(var c=r[s].eventList,u=r[s].location,d=0,l=0;l<c.length;l++)d+=c[l].newsList.length;n.push({name:c[0].name+(c.length>1?"等"+c.length+"件"+(t?"新发":"")+"污染事件":""),value:u.concat([5*d]),eventList:c})}return n},k={name:"amapEcharts",data:function(){return{currentData:[],pollutionData:[],maxTime:0,PollutionType2Keys:[]}},mounted:function(){var e=this;window.onClickTooltipItem=this.onClickTooltipItem;var t={amap:{center:[112.06,36.86],zoom:5,resizeEnable:!0,mapStyle:"amap://styles/fe7fe61b2a9319dbc82d6c20df0cd8ea",renderOnMoving:!0,echartsLayerZIndex:2e3,echartsLayerInteractive:!0,largeMode:!1},tooltip:{trigger:"item",enterable:!0,formatter:function(t){var n="";for(var r in t.data.eventList)n+=e.getTooltipHtml(t.data.eventList[r]);return'<div style="pointer-events: auto"><div class="ivu-cell-group">'+n+"</div></div>"},backgroundColor:"rgba(0,0,0,0.5)",borderWidth:0,textStyle:{color:"#fff"}},animation:!1,series:[{name:"污染事件",type:"scatter",coordinateSystem:"amap",data:P(this.currentData),symbolSize:function(e){return 10*Math.log(e[2])},encode:{value:2},label:{formatter:"{b}",position:"right",show:!1},itemStyle:{normal:{color:[]}},emphasis:{label:{show:!0}}},{name:"新发污染事件",type:"effectScatter",coordinateSystem:"amap",data:P(this.currentData.filter((function(t){return t.firstReportTime>=e.maxTime-z})),!0),symbolSize:function(e){return 10*Math.log(e[2])},encode:{value:2},showEffectOn:"render",rippleEffect:{brushType:"stroke"},hoverAnimation:!0,label:{formatter:"{b}",position:"right",show:!0,color:"white"},itemStyle:{color:[],shadowBlur:10,shadowColor:"#333"},zlevel:1}]};D=O["init"](document.getElementById("container")),D.setOption(t);var n=D.getModel().getComponent("amap");H=n.getAMap();var r=new R.ControlBar({position:{right:"10px",top:"10px"}}),o=new R.ToolBar({position:{right:"40px",top:"110px"}});H.addControl(r),H.addControl(o)},methods:{onClickTooltipItem:function(e){this.$emit("eventClick",e)},getTooltipHtml:function(e){return'<div class="ivu-cell" onclick="onClickTooltipItem(\''+e.id+'\')"><div class="ivu-cell-link"><div class="ivu-cell-item"><div class="ivu-cell-main"><div class="ivu-cell-title">'+e.name+"</div></div></div></div></div>"},getInfo:function(){},setData:function(e,t,n){var r=this;this.currentData=Object(i["a"])(e),this.maxTime=t;var o=D.getOption();o.series[0].data=P(this.currentData),o.series[1].data=P(this.currentData.filter((function(e){return e.firstReportTime>=r.maxTime-z})),!0),this.PollutionType2Keys=Object.keys(n),o.series[0].itemStyle.color=function(e){var t=e.data.eventList[0].pollution;return n[t]},o.series[1].itemStyle.color=function(e){var t=e.data.eventList[0].pollution;return n[t]},D.setOption(o)}}},V=k,Z=n("2877"),B=Object(Z["a"])(V,o,a,!1,null,null,null);t["default"]=B.exports},ee4e:function(e,t,n){"use strict";t["a"]={event:{oneStep:864e5,newBreakOut:864e5},dateFormat:"yyyy-mm-dd",requestInterval:1e3,defaultLimit:1e4,maxLimit:1e4,minLimit:5e3,initTimeRange:10368e6,bufferSize:120,maxRequestStep:1e3,stepUnit:"天",initModal:{defaultUrl:"10.102.33.48:16393/EnvEvent/",defaultTimeRange:[new Date(2022,0,1),new Date(2022,5,1)],defaultToken:"5JJaxB"},initDownloadReport:{defaultDownloadReportUrl:"10.102.33.48:10010/GenEventsReport/",defaultDownloadReportToken:"oWd4Vv"},lnglatDecimal:4}}}]);
//# sourceMappingURL=chunk-9ad55310.e1a350cf.js.map