var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

google.maps.__gjsload__('search_impl', function(_){var Igb=function(a,b){_.H(a.j,3,b)},Mgb=function(a,b,c){const d=_.LL(new Jgb);c.nk=(0,_.ta)(d.load,d);c.clickable=0!=a.get("clickable");_.VJa(c,_.tS(b));const e=[];e.push(_.dk(c,"click",(0,_.ta)(Kgb,null,a)));_.Lb(["mouseover","mouseout","mousemove"],function(f){e.push(_.dk(c,f,(0,_.ta)(Lgb,null,a,f)))});e.push(_.dk(a,"clickable_changed",function(){a.g.clickable=0!=a.get("clickable")}));a.h=e},Kgb=function(a,b,c,d,e){let f=null;if(e&&(f={status:e.getStatus()},0==e.getStatus())){f.location=_.Y(e.j,
2)?new _.tj(_.Au(_.M(e.j,2,_.Gu).j,1),_.Au(_.M(e.j,2,_.Gu).j,2)):null;f.fields={};const h=_.ei(e.j,3);for(let k=0;k<h;++k){const m=_.Qr(e.j,3,_.BS,k);f.fields[m.getKey()]=m.getValue()}}_.qk(a,"click",b,c,d,f)},Lgb=function(a,b,c,d,e,f,h){let k=null;f&&(k={title:f[1].title,snippet:f[1].snippet});_.qk(a,b,c,d,e,k,h)},Ngb=function(){},Ogb=class extends _.U{constructor(){super()}cc(){return _.Bi(this.j,2)}},Pgb=[_.N,,,_.Lp,_.ZKa];var Qgb=class extends _.U{constructor(a){super(a)}getStatus(){return _.K(this.j,1,-1)}};var Jgb=class{constructor(){var a=_.Bo,b=_.yo;this.h=_.Di;this.g=_.Dr(_.Nz,a,_.aC+"/maps/api/js/LayersService.GetFeature",b)}load(a,b){function c(h){h=new Qgb(h);b(h)}var d=new Ogb;_.H(d.j,1,a.layerId.split("|")[0]);_.H(d.j,2,a.featureId);Igb(d,this.h.g().g());for(var e in a.parameters){var f=_.ti(d.j,4,_.BS);_.H(f.j,1,e);_.H(f.j,2,a.parameters[e])}a=_.li(d.Ab(),Pgb,1);this.g(a,c,c);return a}cancel(){throw Error("Not implemented");}};Ngb.prototype.HA=function(a){if(_.Zm[15]){var b=a.l;const c=a.l=a.getMap();b&&a.g&&(a.i?(b=b.__gm.h,b.set(b.get().gh(a.g))):a.g&&_.rKa(a.g,b)&&(_.Lb(a.h||[],_.fk),a.h=null));if(c){b=new _.Ey;const d=a.get("layerId").split("|");b.layerId=d[0];for(let e=1;e<d.length;++e){const [f,...h]=d[e].split(":");b.parameters[f]=h.join(":")}a.get("spotlightDescription")&&(b.spotlightDescription=new _.cz(a.get("spotlightDescription")));a.get("paintExperimentIds")&&(b.paintExperimentIds=a.get("paintExperimentIds").slice(0));
a.get("styler")&&(b.styler=new _.Sy(a.get("styler")));a.get("roadmapStyler")&&(b.roadmapStyler=new _.Sy(a.get("roadmapStyler")));a.get("travelMapRequest")&&(b.travelMapRequest=new _.Xga(a.get("travelMapRequest")));a.get("mapsApiLayer")&&(b.mapsApiLayer=new _.Ky(a.get("mapsApiLayer")));a.get("mapFeatures")&&(b.mapFeatures=a.get("mapFeatures"));a.get("clickableCities")&&(b.clickableCities=a.get("clickableCities"));a.get("searchPipeMetadata")&&(b.searchPipeMetadata=new _.tB(a.get("searchPipeMetadata")));
a.get("overlayLayer")&&(b.overlayLayer=new _.dz(a.get("overlayLayer")));a.get("caseExperimentIds")&&(b.caseExperimentIds=a.get("caseExperimentIds").slice(0));a.get("boostMapExperimentIds")&&(b.boostMapExperimentIds=a.get("boostMapExperimentIds").slice(0));a.get("airQualityPipeMetadata")&&(b.airQualityPipeMetadata=new _.Fga(a.get("airQualityPipeMetadata")));a.get("directionsPipeParameters")&&(b.directionsPipeParameters=new _.Dga(a.get("directionsPipeParameters")));a.get("clientSignalPipeMetadata")&&
(b.clientSignalPipeMetadata=new _.ZA(a.get("clientSignalPipeMetadata")));b.darkLaunch=!!a.get("darkLaunch");a.g=b;a.i=a.get("renderOnBaseMap");a.i?(a=c.__gm.h,a.set(a.get().df(b))):Mgb(a,c,b);_.kl(c,"Lg");_.il(c,148282)}}};_.Vj("search_impl",new Ngb);});


}
/*
     FILE ARCHIVED ON 20:12:33 Jan 08, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:48:52 Feb 15, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.591
  exclusion.robots: 0.019
  exclusion.robots.policy: 0.008
  esindex: 0.011
  cdx.remote: 3.926
  LoadShardBlock: 234.886 (3)
  PetaboxLoader3.datanode: 200.243 (4)
  load_resource: 205.722
  PetaboxLoader3.resolve: 173.135
*/