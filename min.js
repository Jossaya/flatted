/*! (c) 2018, Andrea Giammarchi, (ISC) */
var Flatted=function(c,a){return{parse:function(n){var t=JSON.parse(n,u).map(r),e=t[0];return"object"==typeof e&&e?function u(i,f,n){return Object.keys(n).reduce(function(n,t){var e=n[t];if(e instanceof c){var r=i[e];"object"!=typeof r||f.has(r)?n[t]=r:(f.add(r),n[t]=u(i,f,r))}return n},n)}(t,new Set,e):e},stringify:function(n){for(var i,t=0,f=new Map,e=(f.set(n,c(t)),[]),o=[n],r=function(n,t){if(i)return i=!i,t;switch(typeof t){case"object":if(null===t)return t;case a:return f.get(t)||(e=f,u=c(o.push(r=t)-1),e.set(r,u),u)}var e,r,u;return t};t<o.length;t++)i=!0,e[t]=JSON.stringify(o[t],r);return"["+e.join(",")+"]"}};function r(n){return n instanceof c?c(n):n}function u(n,t){return typeof t===a?new c(t):t}}(String,"string");
