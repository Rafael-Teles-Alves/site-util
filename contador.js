/* Script by hscripts.com */
/* Copyright of HIOXINDIA */
/* More scripts @www.hscripts.com*/

function ctck()
{
var sds = document.getElementById("dum");
if(sds == null){
alert("Esta utilizando un paquete gratuito. No esta autorizado para retirar la etiqueta.");
}
var sdss = document.getElementById("dumdiv");
if(sdss == null){
alert("Esta utilizando un paquete gratuito. No esta autorizado para retirar la etiqueta.");
}
}
document.onload="ctck()";
function getCookieVal (offset)
{
var endstr = document.cookie.indexOf (";", offset);
if (endstr == -1)
endstr = document.cookie.length;
return unescape(document.cookie.substring(offset, endstr));
}
function GetCookie (name)
{
var arg = name + "=";
var alen = arg.length;
var clen = document.cookie.length;
var i = 0;
while (i < clen)
{
var j = i + alen;
if (document.cookie.substring(i, j) == arg)
return getCookieVal (j);
i = document.cookie.indexOf(" ", i) + 1;
if (i == 0)
break;
}
return null;
}
function SetCookie (name, value)
{
var argv = SetCookie.arguments;
var argc = SetCookie.arguments.length;
var expires = (2 < argc) ? argv[2] : null;
var path = (3 < argc) ? argv[3] : null;
var domain = (4 < argc) ? argv[4] : null;
var secure = (5 < argc) ? argv[5] : false;
document.cookie = name + "=" + escape (value) + ((expires == null) ? "" : ("; expires=" + expires.toGMTString())) + ((path == null) ? "" : ("; path=" + path)) + ((domain == null) ? "" : ("; domain=" + domain)) + ((secure == true) ? "; secure" : "");
}
function DisplayInfo()
{
var expdate = new Date();
var visit;
expdate.setTime(expdate.getTime()+(24 * 60 * 60 * 1000 * 365));
if(!(visit = GetCookie("visit")))
visit = 0;
visit ++ ;
SetCookie("visit", visit, expdate, "/", null, false);
document.write("Usted ha visitado esta pagina "+ visit + " veces"); }
document.onload=DisplayInfo();
