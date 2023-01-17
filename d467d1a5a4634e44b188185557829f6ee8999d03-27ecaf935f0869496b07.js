"use strict";(self.webpackChunksantitfg_github_io=self.webpackChunksantitfg_github_io||[]).push([[257],{3204:function(e){const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,a=!1,r=!1;for(let n=0;n<e.length;n++){const s=e[n];t&&/[a-zA-Z]/.test(s)&&s.toUpperCase()===s?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(s)&&s.toLowerCase()===s?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=s.toLowerCase()===s&&s.toUpperCase()!==s,r=a,a=s.toUpperCase()===s&&s.toLowerCase()!==s)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a;var a};e.exports=t,e.exports.default=t},8032:function(e,t,a){a.d(t,{G:function(){return A},L:function(){return p},M:function(){return L},P:function(){return E},_:function(){return l},a:function(){return i},b:function(){return u},g:function(){return d},h:function(){return o}});var r=a(7294),n=(a(3204),a(5697)),s=a.n(n);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t.indexOf(a=s[r])>=0||(n[a]=e[a]);return n}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function u(e,t,a,r,n){return void 0===n&&(n={}),i({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},n,{opacity:t?1:0})})}function d(e,t,a,r,n,s,l,o){const c={};s&&(c.backgroundColor=s,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=s,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),o&&(c.objectPosition=o);const u=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const m=["children"],g=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){let{children:t}=e,a=l(e,m);return r.createElement(r.Fragment,null,r.createElement(g,i({},a)),t,null)},y=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],f=function(e){let{src:t,srcSet:a,loading:n,alt:s="",shouldLoad:o}=e,c=l(e,y);return r.createElement("img",i({},c,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:s}))},M=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,s=l(e,h);const o=s.sizes||(null==t?void 0:t.sizes),c=r.createElement(f,i({},s,t,{sizes:o,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return r.createElement("source",{key:t+"-"+s+"-"+a,type:s,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:o})})),c):c};var N;f.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},M.displayName="Picture",M.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const b=["fallback"],E=function(e){let{fallback:t}=e,a=l(e,b);return t?r.createElement(M,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},a))};E.displayName="Placeholder",E.propTypes={fallback:n.string,sources:null==(N=M.propTypes)?void 0:N.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const L=function(e){return r.createElement(r.Fragment,null,r.createElement(M,i({},e)),r.createElement("noscript",null,r.createElement(M,i({},e,{shouldLoad:!0}))))};L.displayName="MainImage",L.propTypes=M.propTypes;const I=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],w=["style","className"],j=e=>e.replace(/\n/g,""),x=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),i=3;i<r;i++)n[i-3]=arguments[i];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},D={image:s().object.isRequired,alt:x},v=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],C=["style","className"],T=new Set;let k,S;const z=function(e){let{as:t="div",image:n,style:s,backgroundColor:u,className:d,class:m,onStartLoad:g,onLoad:p,onError:y}=e,h=l(e,v);const{width:f,height:M,layout:N}=n,b=c(f,M,N),{style:E,className:L}=b,I=l(b,C),w=(0,r.useRef)(),j=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);m&&(d=m);const x=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(N,f,M);return(0,r.useEffect)((()=>{k||(k=Promise.all([a.e(774),a.e(731)]).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return S=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=w.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==g||g({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void T.add(j);if(S&&T.has(j))return;let t,r;return k.then((e=>{let{renderImageToString:a,swapPlaceholderImage:l}=e;w.current&&(w.current.innerHTML=a(i({isLoading:!0,isLoaded:T.has(j),image:n},h)),T.has(j)||(t=requestAnimationFrame((()=>{w.current&&(r=l(w.current,j,T,s,g,p,y))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{T.has(j)&&S&&(w.current.innerHTML=S(i({isLoading:T.has(j),isLoaded:T.has(j),image:n},h)),null==g||g({wasCached:!0}),null==p||p({wasCached:!0}))}),[n]),(0,r.createElement)(t,i({},I,{style:i({},E,s,{backgroundColor:u}),className:L+(d?" "+d:""),ref:w,dangerouslySetInnerHTML:{__html:x},suppressHydrationWarning:!0}))},A=(0,r.memo)((function(e){return e.image?(0,r.createElement)(z,e):null}));A.propTypes=D,A.displayName="GatsbyImage";const O=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function U(e){return function(t){let{src:a,__imageData:n,__error:s}=t,o=l(t,O);return s&&console.warn(s),n?r.createElement(e,i({image:n},o)):(console.warn("Image not loaded",a),null)}}const Q=U((function(e){let{as:t="div",className:a,class:n,style:s,image:o,loading:m="lazy",imgClassName:g,imgStyle:y,backgroundColor:h,objectFit:f,objectPosition:M}=e,N=l(e,I);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),y=i({objectFit:f,objectPosition:M,backgroundColor:h},y);const{width:b,height:x,layout:D,images:v,placeholder:C,backgroundColor:T}=o,k=c(b,x,D),{style:S,className:z}=k,A=l(k,w),O={fallback:void 0,sources:[]};return v.fallback&&(O.fallback=i({},v.fallback,{srcSet:v.fallback.srcSet?j(v.fallback.srcSet):void 0})),v.sources&&(O.sources=v.sources.map((e=>i({},e,{srcSet:j(e.srcSet)})))),r.createElement(t,i({},A,{style:i({},S,s,{backgroundColor:h}),className:z+(a?" "+a:"")}),r.createElement(p,{layout:D,width:b,height:x},r.createElement(E,i({},d(C,!1,D,b,x,T,f,M))),r.createElement(L,i({"data-gatsby-image-ssr":"",className:g},N,u("eager"===m,!1,O,m,y)))))})),P=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},_=new Set(["fixed","fullWidth","constrained"]),R={src:s().string.isRequired,alt:x,width:P,height:P,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!_.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};Q.displayName="StaticImage",Q.propTypes=R;const W=U(A);W.displayName="StaticImage",W.propTypes=R},7302:function(e,t,a){var r=a(1883),n=a(8032),s=a(7294);t.Z=e=>{const{data:t}=e;var a=void 0;return t.frontmatter.image&&(a=s.createElement(n.G,{className:"  w-full h-full object-cover rounded-3xl ",image:t.frontmatter.image.childImageSharp.gatsbyImageData,alt:t.frontmatter.title})),s.createElement("div",{className:"relative inline-block  rounded-3xl  hover:bg-red-400 "},s.createElement(r.Link,{to:t.fields.slug,className:" "},s.createElement("div",{className:"absolute  z-10  opacity-0 hover:opacity-100 inset-0  w-full h-full  "},s.createElement("div",{className:" absolute text-xl rounded-b-3xl text-txt-principal text-center font-bold inset-x-0 bottom-0 p-12 gradiente-principal "},t.frontmatter.title)),a))}},145:function(e,t,a){a.d(t,{Z:function(){return l}});var r=a(7294),n=a(1883),s=a.p+"static/gitlab-logo-500-a069418ec936366f20ad020c9889dc84.png";var i=()=>{const{0:e,1:t}=(0,r.useState)(!1);return r.createElement(r.Fragment,null,r.createElement("nav",{className:" sm:flex flex-wrap  px-4  md:px-8 lg:px-10 justify-between"},r.createElement("div",{className:"block sm:flex "},r.createElement("div",{className:"flex justify-between  "},r.createElement(n.Link,{to:"/",className:"p-4  font-bold "},r.createElement("span",{className:" text-2xl"},"ICO")),r.createElement("button",{onClick:()=>{t(!e)},className:"sm:hidden inline-block p-4"},e?"MENU":"X")),r.createElement("ul",{className:"p-4 text-center text-2xl font-bold sm:ml-10 "+(e?" hidden":"block sm:flex")},r.createElement("li",null,r.createElement(n.Link,{to:"/about",className:"block mt-4 sm:inline-block sm:mt-0 text-teal gradiente-link  mr-4"},"Sobre mi")))),r.createElement("ul",{className:"p-4 text-center text-2xl font-bold "+(e?" hidden":"flex justify-center")},r.createElement("a",{href:"https://gitlab.com/stfg.prof",target:"_blank",rel:"noopener noreferrer",className:"block mt-4 sm:inline-block sm:mt-0 text-teal   mr-4"},r.createElement("img",{src:s,alt:"Gitlab",className:"w-8 h-8"})),r.createElement("a",{href:"https://github.com/santitfg",target:"_blank",rel:"noopener noreferrer",className:"block mt-4 sm:inline-block sm:mt-0 text-teal   mr-4"},r.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTgiIGhlaWdodD0iOTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00OC44NTQgMEMyMS44MzkgMCAwIDIyIDAgNDkuMjE3YzAgMjEuNzU2IDEzLjk5MyA0MC4xNzIgMzMuNDA1IDQ2LjY5IDIuNDI3LjQ5IDMuMzE2LTEuMDU5IDMuMzE2LTIuMzYyIDAtMS4xNDEtLjA4LTUuMDUyLS4wOC05LjEyNy0xMy41OSAyLjkzNC0xNi40Mi01Ljg2Ny0xNi40Mi01Ljg2Ny0yLjE4NC01LjcwNC01LjQyLTcuMTctNS40Mi03LjE3LTQuNDQ4LTMuMDE1LjMyNC0zLjAxNS4zMjQtMy4wMTUgNC45MzQuMzI2IDcuNTIzIDUuMDUyIDcuNTIzIDUuMDUyIDQuMzY3IDcuNDk2IDExLjQwNCA1LjM3OCAxNC4yMzUgNC4wNzQuNDA0LTMuMTc4IDEuNjk5LTUuMzc4IDMuMDc0LTYuNi0xMC44MzktMS4xNDEtMjIuMjQzLTUuMzc4LTIyLjI0My0yNC4yODMgMC01LjM3OCAxLjk0LTkuNzc4IDUuMDE0LTEzLjItLjQ4NS0xLjIyMi0yLjE4NC02LjI3NS40ODYtMTMuMDM4IDAgMCA0LjEyNS0xLjMwNCAxMy40MjYgNS4wNTJhNDYuOTcgNDYuOTcgMCAwIDEgMTIuMjE0LTEuNjNjNC4xMjUgMCA4LjMzLjU3MSAxMi4yMTMgMS42MyA5LjMwMi02LjM1NiAxMy40MjctNS4wNTIgMTMuNDI3LTUuMDUyIDIuNjcgNi43NjMuOTcgMTEuODE2LjQ4NSAxMy4wMzggMy4xNTUgMy40MjIgNS4wMTUgNy44MjIgNS4wMTUgMTMuMiAwIDE4LjkwNS0xMS40MDQgMjMuMDYtMjIuMzI0IDI0LjI4MyAxLjc4IDEuNTQ4IDMuMzE2IDQuNDgxIDMuMzE2IDkuMTI2IDAgNi42LS4wOCAxMS44OTctLjA4IDEzLjUyNiAwIDEuMzA0Ljg5IDIuODUzIDMuMzE2IDIuMzY0IDE5LjQxMi02LjUyIDMzLjQwNS0yNC45MzUgMzMuNDA1LTQ2LjY5MUM5Ny43MDcgMjIgNzUuNzg4IDAgNDguODU0IDB6IiBmaWxsPSIjMjQyOTJmIi8+PC9zdmc+",alt:"Github",className:"w-8 h-8"})))))};var l=e=>r.createElement(r.Fragment,null,r.createElement("header",null,r.createElement(i,null)),r.createElement("div",{className:"p-5"}),r.createElement("main",{className:"container mx-auto text-justify "},e.children),r.createElement("footer",{className:"container mx-auto text-justify"},r.createElement("div",{className:"p-4"}),r.createElement("hr",{className:"border-solid border-top-2 border-principal "}),r.createElement("div",{className:"p-6"})))}}]);
//# sourceMappingURL=d467d1a5a4634e44b188185557829f6ee8999d03-27ecaf935f0869496b07.js.map