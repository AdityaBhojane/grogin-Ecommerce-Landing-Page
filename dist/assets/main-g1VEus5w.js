/* empty css              */(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();gsap.from("#bubble",{y:30,duration:1,yoyo:!0,repeat:-1});const n=document.getElementById("bubble");document.getElementById("bubble-info");const l=document.getElementById("search");l.addEventListener("click",()=>{window.location.href="./src/Filter Product page/SearchProduct.html"});let s=!1;n.addEventListener("click",()=>{gsap.from("#bubble",{rotate:360}),s?(gsap.to("#cards",{x:300}),s=!1):(gsap.to("#cards",{x:-300}),s=!0)});