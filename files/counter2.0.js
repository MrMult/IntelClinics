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

var my_flash,my_m,undef,my_id,my_width,my_height,my_alt,my_img;
var my_j=0,my_s,my_rr,my_tf,my_fs,my_blocked='*',my_dst;
var my_h='mycounter.ua/';

if (my_alt == undef) my_alt = 'MyCounter';
if (my_width == undef || my_height == undef || my_width == 0 || my_height == 0) {
  my_width = undef;
  my_height = undef;
}
if (my_id == undef) my_id = 0;
if (my_img == undef) my_img = '';
if (typeof(screen)!=typeof(undef)) my_s=screen;
var my_stats_url="https://"+my_h+"stats/?id="+my_id;
document.cookie="s=1;path=/";

// get JavaScript version
var my_tmp = '';
for (var i=0; i<=9; i++) {
  my_tmp += '<scr'+'ipt lang'+'uage="JavaScr'+'ipt';
  if (i) my_tmp += '1.'+i;
  my_tmp += '">my_j='+i+';</scr'+'ipt>';
}
my_tmp += '<scr'+'ipt language="JavaScr'+'ipt"></script>';
document.write(my_tmp);

// get Shockwave Flash version
my_flash = getFlash();
// get GMT
my_gmt = getGMT();
my_rr = my_tf = my_fs = '';

try { if (parent!=window) my_rr = escape(parent.document.referrer); }
catch(e) { my_rr = my_blocked }
try { if (self!=top) my_tf = escape(top.location.href); }
catch(e) { my_tf = my_blocked }
if (my_tf==my_blocked) {
  try { my_fs = document.body.clientWidth+'x'+document.body.clientHeight; }
  catch(e) {
    try { my_fs = document.documentElement.offsetWidth+'x'+document.documentElement.offsetHeight; }
    catch(e) {
      try { my_fs = self.innerWidth+'x'+self.innerHeight; }
      catch(e) { }
    }
  }
}
// write out counter
document.write('<a href="https://'+my_h+
'" target=_blank onClick="this.href=my_stats_url">'+
'<img src="https://web.archive.org/web/20231215171529/https://get.'+my_h+'counter.php?id='+
my_id+'&w='+escape(window.location.href)+
(my_s!=undef?'&s='+my_s.width+'x'+my_s.height+'x'+
(my_s.colorDepth?my_s.colorDepth:my_s.pixelDepth):'')+
(document.referrer?'&r='+escape(document.referrer):'')+
(my_rr?'&rr='+my_rr:'')+(my_tf?'&tf='+my_tf:'')+
(my_fs?'&fs='+my_fs:'')+
(document.cookie?'&c=1':'')+'&j='+my_j+(navigator.javaEnabled()?'&e=1':'')+
(my_flash?'&f='+my_flash:'')+(my_gmt?'&gmt='+my_gmt:'')+(my_dst?'&dst='+my_dst:'')+
(my_width==1&&my_height==1?'&m=1':(my_img?'&m='+my_img:''))+'"'+
(my_width!=undef?' width="'+my_width+'" height="'+my_height+'"':'')+
' title="'+my_alt+'" alt="'+my_alt+'" border="0" /></a>');

//

function getFlash() {
  var my_msie = (navigator.appName.toLowerCase().substring(0,2) == "mi") ? 1 : 0;
  var my_flash;

  if (navigator.plugins && navigator.plugins.length) {
    for (var i=0; i<navigator.plugins.length; i++) {
      if (navigator.plugins[i].name.indexOf('Shockwave Flash') >= 0) {
        my_flash = parseFloat(navigator.plugins[i].description.split('Shockwave Flash ')[1]);
        break;
      }
    }
  }
  else if (window.ActiveXObject) {
    for (var i=10; i>=2; i--) {
      try {
        var f=eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash."+i+"');");
        if (f)  {
          my_flash = i+'.0';
          break;
        }
      }
      catch(e) {}
    }
    if (my_flash == "" && my_msie &&
        (navigator.appVersion.indexOf("MSIE 5") >= 0 || navigator.appVersion.indexOf("MSIE 6") >= 0)) {
      if (clientInformation.appMinorVersion.indexOf('SP2') >= 0) my_flash = '>';
    }
  }
  return my_flash;
}
//
function getGMT() {
  var my_now = new Date();
  var my_year = my_now.getFullYear();
  var my_winterOffset = (new Date(my_year,01,01)).getTimezoneOffset();
  var my_summerOffset = (new Date(my_year,07,01)).getTimezoneOffset();
  my_dst = 0;
  if (my_winterOffset != my_summerOffset) my_dst = 1;
  var my_nowOffset = (new Date()).getTimezoneOffset();
  var my_gmt = -my_nowOffset/60;
  if (my_nowOffset == my_summerOffset && my_nowOffset != my_winterOffset) my_gmt--;
  return my_gmt;
}
//


}
/*
     FILE ARCHIVED ON 17:15:29 Dec 15, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:48:24 Feb 15, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.858
  exclusion.robots: 0.031
  exclusion.robots.policy: 0.014
  esindex: 0.016
  cdx.remote: 9.335
  LoadShardBlock: 524.631 (6)
  PetaboxLoader3.datanode: 250.352 (8)
  load_resource: 359.076 (2)
  PetaboxLoader3.resolve: 266.327 (2)
*/