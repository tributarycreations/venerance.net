parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"Gg4U":[function(require,module,exports) {

},{"./../img/nanosuitmjolnir.jpg":[["nanosuitmjolnir.c8ed11de.jpg","8D/t"],"8D/t"],"./../img/junglestealthgpost_ani.png":[["junglestealthgpost_ani.1339ce9c.png","gX/x"],"gX/x"],"./../img/view2.jpg":[["view2.857fc740.jpg","cJAl"],"cJAl"],"./../img/jockeyscavengers.png":[["jockeyscavengers.65f06931.png","KF7J"],"KF7J"]}],"L4bL":[function(require,module,exports) {
"use strict";require("../scss/style.scss"),$(document).ready(function(){$(window).scroll(function(){$(this).scrollTop()>200?($(".navbar").css("background-color","rgba(0,0,0,0.65)"),$(".navbar-brand").css("display","block")):($(".navbar").css("background-color","transparent"),$(".navbar-brand").css("display","none"))})}),$(".navbar ul li a").on("click",function(a){a.preventDefault();var n=this.hash;$("html, body").animate({scrollTop:$(n).offset().top},1e3,function(){window.location.hash=n})});
},{"../scss/style.scss":"Gg4U"}]},{},["L4bL"], null)
//# sourceMappingURL=script.01991a04.map