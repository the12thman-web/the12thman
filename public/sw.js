if(!self.define){let e,s={};const c=(c,n)=>(c=new URL(c+".js",n).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(n,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>c(e,i),o={module:{uri:i},exports:t,require:r};s[i]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(a(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/1.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/Logo.png",revision:"f564e85d80302b818ce226981a1fb211"},{url:"/Logo1.png",revision:"7af7294a95e3356e02f3f23cb29b2115"},{url:"/_next/static/chunks/166-e390f80c13de7eb4.js",revision:"e390f80c13de7eb4"},{url:"/_next/static/chunks/31-f15fcc9f93ae50cd.js",revision:"f15fcc9f93ae50cd"},{url:"/_next/static/chunks/345.eafeb01b653652ab.js",revision:"eafeb01b653652ab"},{url:"/_next/static/chunks/652-dfddf89d6c44bdef.js",revision:"dfddf89d6c44bdef"},{url:"/_next/static/chunks/932-ea62e3ad5c3cb777.js",revision:"ea62e3ad5c3cb777"},{url:"/_next/static/chunks/framework-3b5a00d5d7e8d93b.js",revision:"3b5a00d5d7e8d93b"},{url:"/_next/static/chunks/main-62d1391230fa3096.js",revision:"62d1391230fa3096"},{url:"/_next/static/chunks/pages/_app-3748c2bcebefb00d.js",revision:"3748c2bcebefb00d"},{url:"/_next/static/chunks/pages/_error-8353112a01355ec2.js",revision:"8353112a01355ec2"},{url:"/_next/static/chunks/pages/about-56de7a71b39cef84.js",revision:"56de7a71b39cef84"},{url:"/_next/static/chunks/pages/category/%5Bcatslug%5D-50fdc58acc30817b.js",revision:"50fdc58acc30817b"},{url:"/_next/static/chunks/pages/contact-56e34ee5b32f8070.js",revision:"56e34ee5b32f8070"},{url:"/_next/static/chunks/pages/index-072e7973ced077e2.js",revision:"072e7973ced077e2"},{url:"/_next/static/chunks/pages/posts/%5Bslug%5D-57bdcfb440bbf8d8.js",revision:"57bdcfb440bbf8d8"},{url:"/_next/static/chunks/pages/privacy-3ef3e74dfc26b3e6.js",revision:"3ef3e74dfc26b3e6"},{url:"/_next/static/chunks/pages/search/%5Bslug%5D-475be833db8b0911.js",revision:"475be833db8b0911"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-c6191752f6b0a2a0.js",revision:"c6191752f6b0a2a0"},{url:"/_next/static/css/01d3c9c6192bebbd.css",revision:"01d3c9c6192bebbd"},{url:"/_next/static/css/0f98740312d1abf9.css",revision:"0f98740312d1abf9"},{url:"/_next/static/css/ae4ed9c503fd1e33.css",revision:"ae4ed9c503fd1e33"},{url:"/_next/static/vIIKsWyVt9RnNb6uZHuEi/_buildManifest.js",revision:"f92a8b0d46aef89b42418804e3c7e365"},{url:"/_next/static/vIIKsWyVt9RnNb6uZHuEi/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/favicon.ico",revision:"8cad18f6216b5244218915a3343731bc"},{url:"/icon-192x192.png",revision:"d650651818032c090eb0fed664293a82"},{url:"/icon-256x256.png",revision:"6c450f0fdd47d6d0e3cf4f5fd20c1394"},{url:"/icon-384x384.png",revision:"b43ed4fe43e1efd46b989745aa906def"},{url:"/icon-512x512.png",revision:"21ccf1593b96b6a8d86b0e30d1abdaad"},{url:"/images/iplwin.jpg",revision:"46c57cea6eac95f7135a84b56aef7bbd"},{url:"/images/laser.jpg",revision:"fcac070f0a69304755d7ed2bbc171b7b"},{url:"/manifest.json",revision:"af4c3bcfc2d457e12822a1d442670ccc"},{url:"/scripts/script.js",revision:"7b1da6ab0049f48c47efa497991a40c5"},{url:"/scripts/wanderAdd.js",revision:"4ffc6063f7726ccb29c4bee77226f829"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
