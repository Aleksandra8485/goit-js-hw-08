var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in o){var a=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,a.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},e.parcelRequired7c6=a);var n=a("kEUo3");const r=document.querySelector(".feedback-form"),l=document.querySelector('input[name="email"]'),s=document.querySelector('textarea[name="message"]'),i=(0,n.throttle)((()=>{const e={email:l.value,message:s.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500);window.addEventListener("load",(()=>{const e=localStorage.getItem("feedback-form-state");if(e){const t=JSON.parse(e);l.value=t.email,s.value=t.message}})),l.addEventListener("input",i),s.addEventListener("input",i),r.addEventListener("submit",(e=>{e.preventDefault();const t=l.value,o=s.value;l.value="",s.value="",localStorage.removeItem("feedback-form-state"),console.log("Email:",t),console.log("Message:",o)}));
//# sourceMappingURL=03-feedback.331e4c2a.js.map