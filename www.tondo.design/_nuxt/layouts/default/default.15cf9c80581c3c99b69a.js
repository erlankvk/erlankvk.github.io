/*! For license information please see LICENSES */
webpackJsonp([5],{"1b8t":function(t,e,n){"use strict";var o=n("emAS"),i=n("41/c");var r=function(t){n("aciR")},a=n("K60R")(o.a,i.a,!1,r,"data-v-3e5b0eef",null);e.a=a.exports},"1dmZ":function(t,e,n){var o=n("V1hz");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n("rjj0")("42519d2d",o,!0,{sourceMap:!1})},"3c10":function(t,e,n){"use strict";e.a=function(t,e){var n=!1,o=void 0,i=void 0;return function r(){if(n)return o=arguments,void(i=this);t.apply(this,arguments);n=!0;setTimeout(function(){n=!1,o&&(r.apply(i,o),o=i=null)},e)}}},"41/c":function(t,e,n){"use strict";var o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{appear:""},on:{enter:t.hookEnter,leave:t.hookLeave}},[n("div",{staticClass:"mobile-menu"},[n("div",{staticClass:"mobile-menu__inner"},[n("ul",{staticClass:"mobile-menu__list"},[n("li",{staticClass:"mobile-menu__item"},[n("router-link",{staticClass:"mobile-menu__link",class:{"router-link-active":"Cases"===t.$route.name},attrs:{to:{name:"index"},exact:""}},[t._v("Cases")])],1),n("li",{staticClass:"mobile-menu__item"},[n("router-link",{staticClass:"mobile-menu__link",attrs:{to:{name:"about"}}},[t._v("About us")])],1),n("li",{staticClass:"mobile-menu__item"},[n("router-link",{staticClass:"mobile-menu__link",attrs:{to:{name:"approach"}}},[t._v("Our approach")])],1),n("li",{staticClass:"mobile-menu__item"},[n("router-link",{staticClass:"mobile-menu__link",attrs:{to:{name:"contacts"}}},[t._v("Contacts")])],1),n("li",{staticClass:"mobile-menu__item mobile-menu__item_additional"},[n("router-link",{staticClass:"mobile-menu__link",attrs:{to:{name:"showreel"}}},[t._v("Showreel")])],1)])])])])},staticRenderFns:[]};e.a=o},"80h8":function(t,e,n){"use strict";e.a={props:["id"],data:function(){return{iconId:"#icon-"+this.id,iconClass:"icon_"+this.id}}}},Ag2C:function(t,e,n){var o=n("disY");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n("rjj0")("33ec2c06",o,!0,{sourceMap:!1})},BAzp:function(t,e,n){"use strict";var o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{appear:""},on:{enter:t.fadeInDown,leave:t.hookLeave}},[n("header",{staticClass:"header",class:t.color?"header_color_"+t.color:""},[n("router-link",{staticClass:"header__logo",attrs:{to:{name:"index"}},nativeOn:{click:function(e){return t.onLogoClick(e)}}},[n("icon",{staticClass:"header__logo-icon",attrs:{id:"logo"}})],1)],1)])},staticRenderFns:[]};e.a=o},HhTT:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("Zrlr"),i=n.n(o),r=n("wxAW"),a=n.n(r),s=function(){function t(e,n){var o=this;i()(this,t),this.options=e,this.touchsurface=e.element;var r=void 0,a=void 0,s=void 0,c=void 0,u=void 0,l=void 0,d=n||function(){};return this.onTouchstart=function(t){var e=t.changedTouches[0];r="none",a=e.pageX,s=e.pageY,l=(new Date).getTime()},this.onTouchmove=function(t){o.options.preventMove&&t.preventDefault()},this.onTouchend=function(t){var e=t.changedTouches[0];c=e.pageX-a,u=e.pageY-s,(new Date).getTime()-l<=3e3&&(Math.abs(c)>=50&&Math.abs(u)<=300?r=c<0?"left":"right":Math.abs(u)>=50&&Math.abs(c)<=300&&(r=u<0?"up":"down")),d(r)},this}return a()(t,[{key:"run",value:function(){this.touchsurface.addEventListener("touchstart",this.onTouchstart,!1),this.touchsurface.addEventListener("touchmove",this.onTouchmove,!1),this.touchsurface.addEventListener("touchend",this.onTouchend,!1)}},{key:"destroy",value:function(){this.touchsurface.removeEventListener("touchstart",this.onTouchstart,!1),this.touchsurface.removeEventListener("touchmove",this.onTouchmove,!1),this.touchsurface.removeEventListener("touchend",this.onTouchend,!1)}}]),t}();e.default=s},NUCa:function(t,e,n){(t.exports=n("FZ+f")()).push([t.i,'.mobile-menu[data-v-3e5b0eef]{position:fixed;width:100%;height:100%;left:0;top:0;z-index:40;background:rgba(0,0,0,.6)}.mobile-menu__inner[data-v-3e5b0eef]{height:100%;overflow:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch;height:75%;padding:338.464px 61.536px 0;padding:21.154rem 3.846rem 0;position:relative;background:#fff;color:#000}.mobile-menu__list[data-v-3e5b0eef]{height:100%;position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.mobile-menu__item[data-v-3e5b0eef]{font-size:36.928px;font-size:2.308rem;line-height:1.333333333333333}@media only screen and (max-width:46.9em){.mobile-menu__item[data-v-3e5b0eef]{font-size:4.615rem;line-height:1.333333333333333}}.mobile-menu__item_additional[data-v-3e5b0eef]{font-size:13px;line-height:1.692307692307692;margin-top:auto;padding:110.768px 0;padding:6.923rem 0}@media only screen and (max-width:46.9em){.mobile-menu__item_additional[data-v-3e5b0eef]{font-size:3.077rem;line-height:1.5}}.mobile-menu__link[data-v-3e5b0eef]{color:currentColor;line-height:1;transition:opacity .3s ease,color .3s ease;background:none;text-decoration:none;cursor:pointer;-webkit-tap-highlight-color:transparent;opacity:.4;position:relative}.mobile-menu__link[data-v-3e5b0eef]:after{left:-60%;right:-60%;top:-80%;bottom:-80%}.mobile-menu__link.nuxt-link-active[data-v-3e5b0eef],.mobile-menu__link.router-link-active[data-v-3e5b0eef]{opacity:1}.page:not(.page_platform_mobile) .mobile-menu__link[data-v-3e5b0eef]:hover{opacity:.6}.mobile-menu__link[data-v-3e5b0eef]:disabled{opacity:.4;cursor:default}.mobile-menu__link[data-v-3e5b0eef]:after{position:absolute;display:block;content:"";left:0;right:0;top:0;bottom:0}',""])},OSdC:function(t,e,n){(t.exports=n("FZ+f")()).push([t.i,'.list__item[data-v-173d37a2]{font-size:36.928px;font-size:2.308rem;line-height:1.333333333333333;display:block;margin-bottom:.2em}@media only screen and (max-width:46.9em){.list__item[data-v-173d37a2]{font-size:4.615rem;line-height:1.333333333333333}}.list__link[data-v-173d37a2]{color:currentColor;line-height:1;transition:opacity .3s ease,color .3s ease;background:none;text-decoration:none;cursor:pointer;position:relative;-webkit-tap-highlight-color:transparent;opacity:1;white-space:nowrap}.list__link[data-v-173d37a2]:after{left:-20%;right:-20%;top:-50%;bottom:-50%;position:absolute;display:block;content:"";left:-60%;right:-60%;top:-80%;bottom:-80%}.list__link.nuxt-link-active[data-v-173d37a2],.list__link.router-link-active[data-v-173d37a2]{opacity:.4}.page:not(.page_platform_mobile) .list__link[data-v-173d37a2]:hover{opacity:.6}.list__link[data-v-173d37a2]:disabled{opacity:.4;cursor:default}.header[data-v-173d37a2]{position:fixed;right:61.536px;right:3.846rem;top:61.536px;top:3.846rem;z-index:50;transition:color .3s ease}.header_color_black[data-v-173d37a2]{color:#000}.header__logo[data-v-173d37a2]{color:currentColor;font-size:36.928px;font-size:2.308rem}.header__logo-icon[data-v-173d37a2]{min-height:21px;min-width:131px}',""])},OVgZ:function(t,e,n){"use strict";var o={render:function(){var t=this.$createElement,e=this._self._c||t;return this.id?e("svg",{staticClass:"icon",class:this.iconClass},[e("use",{attrs:{"xlink:href":this.iconId}})]):this._e()},staticRenderFns:[]};e.a=o},QK6D:function(t,e,n){"use strict";var o=n("Dd8w"),i=n.n(o),r=n("NYxO"),a=n("iPd/");e.a={name:"loader",components:{},directives:{imagesLoaded:a},data:function(){return{value:0,interval:null}},computed:i()({},Object(r.mapState)(["app","loader"]),{loaderVisibility:function(){return!this.loader.isLoaded&&null!==this.loader.images&&this.value>4}}),watch:{value:function(){this.value>=this.loader.progress&&this.value>=30&&clearInterval(this.interval)},"loader.images":function(){this.value=0},"loader.progress":function(){var t=this;clearInterval(this.interval),this.interval=setInterval(function(){t.value=t.value+1},10)}},created:function(){},mounted:function(){},methods:i()({},Object(r.mapMutations)(["setLoaderProgress"]),{imageProgress:function(t){var e=100*t.progressedCount/t.images.length;this.setLoaderProgress(e)},hookEnter:function(t,e){var n=new TimelineMax({onComplete:e}),o=t.querySelector(".loader__value");n.set(t,{opacity:0}).set(o,{scale:.5}).to(t,.3,{opacity:1,clearProps:"opacity"},"+=.3").to(o,.3,{scale:1,clearProps:"scale"},"-=.3")},hookLeave:function(t,e){var n=new TimelineMax({onComplete:e}),o=t.querySelector(".loader__value");n.set(t,{opacity:1}).set(o,{scale:1}).to(t,.3,{opacity:0}).to(o,.3,{scale:.5},"-=.3")}}),beforeDestroy:function(){}}},V1hz:function(t,e,n){(t.exports=n("FZ+f")()).push([t.i,".icon[data-v-5a02d7de]{display:block;width:1em;height:1em;vertical-align:top;color:currentColor}.icon use[data-v-5a02d7de]{width:100%;height:1em;fill:currentColor}.icon_behance[data-v-5a02d7de]{width:1.5em}.icon_branch-left[data-v-5a02d7de],.icon_branch-right[data-v-5a02d7de]{width:.571em}.icon_facebook[data-v-5a02d7de]{width:.466666666666667em}.icon_logo[data-v-5a02d7de]{width:5.583em}.icon_payse[data-v-5a02d7de]{width:.647058823529412em}.icon_play[data-v-5a02d7de]{width:.933333333333333em}.icon_share[data-v-5a02d7de]{width:.8125em}",""])},V36p:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("Dd8w"),i=n.n(o),r=n("NYxO"),a=(n("lPMi"),n("uo8q")),s=n("kiZH"),c=n("vTn1"),u=n("1b8t"),l=n("3c10"),d=n("6LNL"),f=(n.n(d),n("ugPf")),h=n("hm4w"),p=n("HhTT").default;e.default={components:{footerModule:a.a,headerModule:s.a,loader:c.a,mobileMenu:u.a},data:function(){return{fadeIn:d.fadeIn,fadeOut:d.fadeOut,onKeyDown:null,menuIsOpen:!1}},head:function(){return{title:this.commonData.meta.title,meta:[{hid:"ogtitle",property:"og:title",content:this.commonData.meta.title},{hid:"description",name:"description",content:this.commonData.meta.description},{hid:"ogdescription",property:"og:description",content:this.commonData.meta.description},{hid:"ogimage",property:"og:image",content:"http://tondo.design"+this.commonData.meta.og_image}]}},computed:i()({},Object(r.mapState)(["app","commonData","mobileButtonActivity"]),Object(r.mapGetters)(["isMobile"]),{key:function(){return this.$route.name.split("-")[0]},footerVisibility:function(){return"index-cases-id"!==this.$route.name&&!this.isMobile},headerVisibility:function(){return"index-cases-id"!==this.$route.name||!this.isMobile},showTurnScreen:function(){return this.isMobile&&this.app.sizes.viewport.height<this.app.sizes.viewport.width&&"showreel"!==this.$route.name&&"approach"!==this.$route.name},buttonIsCross:function(){return"index-cases-id"===this.$route.name||this.menuIsOpen},mobileHeaderColor:function(){return this.menuIsOpen?"black":null},globalScrollIsEnabled:function(){return!(!this.isMobile||"index"===this.$route.name||"index-cases-id"===this.$route.name||"showreel"===this.$route.name)}}),watch:{isMobile:function(){this.isMobile||(this.menuIsOpen=!1)},"$route.name":function(){this.menuIsOpen=!1}},created:function(){var t=this;if(this.onKeyDown=function(e){switch(e.keyCode){case 37:t.$root.$emit("onNavigateLeft");break;case 38:t.$root.$emit("onNavigateUp");break;case 39:t.$root.$emit("onNavigateRight");break;case 40:t.$root.$emit("onNavigateDown");break;case 32:t.$root.$emit("onSpaceKeyUp")}},f)new f({callback:function(e){"up"===e.direction?t.$root.$emit("onNavigateUp"):t.$root.$emit("onNavigateDown")},preventMouse:!1});switch(document.readyState){case"loading":document.addEventListener("DOMContentLoaded",function(){t.setAppReady(!0)}),window.onload=function(){t.setAppLoad(!0)};break;case"interactive":this.setAppReady(!0),window.onload=function(){t.setAppLoad(!0)};break;case"complete":this.setAppReady(!0),this.setAppLoad(!0)}},mounted:function(){var t=this;this.setIsMobilePlatform(),this.setLayoutType(),this.setFontSize(h.update(this.app.currentLayout)),this.saveSizes();var e=Object(l.a)(function(){t.setLayoutType(),t.setFontSize(h.update(t.app.currentLayout)),t.saveSizes()},100);(window.addEventListener("resize",e),window.addEventListener("keydown",this.onKeyDown),p)&&new p({element:this.$el},function(e){switch(e){case"up":t.$root.$emit("onNavigateDown");break;case"down":t.$root.$emit("onNavigateUp")}}).run()},methods:i()({},Object(r.mapMutations)(["setAppReady","setAppLoad","setCurrentLayout","setFontSize","setSizes","setIsMobilePlatform"]),{saveSizes:function(){var t={viewport:{width:window.innerWidth,height:window.innerHeight}};this.setSizes(t)},menuBtnClick:function(){this.mobileButtonActivity&&("index-cases-id"===this.$route.name?this.$router.push({name:"index"}):this.menuIsOpen?this.menuIsOpen=!1:this.menuIsOpen=!0)},setLayoutType:function(){var t=window.matchMedia("only screen and (max-width: 46.9em)"),e=window.matchMedia("only screen and (max-width: 80em)");t.matches?this.setCurrentLayout("mobile"):e.matches?this.setCurrentLayout("tablet"):this.setCurrentLayout("desktop")}})}},VahZ:function(t,e,n){var o=n("OSdC");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n("rjj0")("5a7994a2",o,!0,{sourceMap:!1})},Whit:function(t,e,n){var o=n("ktrK");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n("rjj0")("ad9f73f8",o,!0,{sourceMap:!1})},Zrlr:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},aJBx:function(t,e,n){"use strict";var o=n("Dd8w"),i=n.n(o),r=n("NYxO"),a=n("arKX"),s=n("6LNL");n.n(s);e.a={name:"header-component",components:{icon:a.a},props:{color:{type:String}},data:function(){return{fadeInDown:s.fadeInDown,fadeOutUp:s.fadeOutUp}},computed:{},watch:{},created:function(){},mounted:function(){},methods:i()({},Object(r.mapMutations)(["setCasesFilter"]),{hookLeave:function(t,e){Object(s.fadeOutUp)(t,e,"+=.3")},onLogoClick:function(){this.setCasesFilter()}}),beforeDestroy:function(){}}},aciR:function(t,e,n){var o=n("NUCa");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n("rjj0")("7cb547f6",o,!0,{sourceMap:!1})},arKX:function(t,e,n){"use strict";var o=n("80h8"),i=n("OVgZ");var r=function(t){n("1dmZ")},a=n("K60R")(o.a,i.a,!1,r,"data-v-5a02d7de",null);e.a=a.exports},disY:function(t,e,n){(t.exports=n("FZ+f")()).push([t.i,".hidden[data-v-b14cf5e0]{position:absolute;overflow:hidden;clip:rect(0 0 0 0);width:1px;height:1px;margin:-1px;padding:0;border:0}.loader__body[data-v-b14cf5e0]{position:absolute;left:0;right:0;top:0;bottom:0;z-index:15;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.loader_ui_black[data-v-b14cf5e0]{color:#0014ff}.loader_ui_black .loader__cover[data-v-b14cf5e0]{background:#fff}.loader_ui_white[data-v-b14cf5e0]{color:#ff1432}.loader_ui_white .loader__cover[data-v-b14cf5e0]{background:#000}.loader__cover[data-v-b14cf5e0]{position:absolute;left:0;right:0;top:0;bottom:0;z-index:1}.loader__value[data-v-b14cf5e0]{font-size:196.928px;font-size:12.308rem;line-height:1;font-family:fondo,Helvetica,sans-serif;font-weight:600;position:relative;z-index:2}",""])},emAS:function(t,e,n){"use strict";e.a={name:"mobile-menu",components:{},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{onTouchMove:function(t){t.preventDefault()},hookEnter:function(t,e){var n=t.querySelector(".mobile-menu__inner"),o=new TimelineLite({onComplete:e});document.body.addEventListener("touchmove",this.onTouchMove,!1),o.set(t,{opacity:0}).set(n,{y:-40}).to(t,.3,{opacity:1,clearProps:"opacity"}).to(n,.3,{y:0,clearProps:"y"},"-=.3")},hookLeave:function(t,e){var n=t.querySelector(".mobile-menu__inner"),o=new TimelineLite({onComplete:e});document.body.removeEventListener("touchmove",this.onTouchMove,!1),o.set(t,{opacity:1}).set(n,{y:0}).to(t,.3,{opacity:0}).to(n,.3,{y:-40},"-=.3")}},beforeDestroy:function(){}}},ffFl:function(t,e,n){"use strict";var o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loader"},[n("div",{directives:[{name:"images-loaded",rawName:"v-images-loaded:on.progress",value:t.imageProgress,expression:"imageProgress",arg:"on",modifiers:{progress:!0}}],staticClass:"hidden"},t._l(t.loader.images,function(t){return n("img",{attrs:{src:t}})})),n("transition",{on:{enter:t.hookEnter,leave:t.hookLeave}},[t.loaderVisibility?n("div",{staticClass:"loader__body",class:{loader_ui_white:"white"===t.app.uiColor,loader_ui_black:"black"===t.app.uiColor}},[n("div",{staticClass:"loader__cover",style:{opacity:t.loader.opacity}}),n("div",{staticClass:"loader__value"},[t._v(t._s(t.value))])]):t._e()])],1)},staticRenderFns:[]};e.a=o},hm4w:function(t,e){var n={target:document.querySelector("html"),bp:{mobile:{width:750,height:640,fontSize:13},tablet:{width:1280,height:750,fontSize:13},desktop:{width:1600,height:900,fontSize:13}}};t.exports={update:function(t){var e=window.innerHeight,o=window.innerWidth,i=n.bp[t].width,r=n.bp[t].height,a=n.bp[t].fontSize,s=e-r,c=o-i,u=void 0;if(o>i&&e>r)u=o/e<=i/r?o/i:e/r;else if(s<0?(u=(r-Math.abs(s))/r)<.3&&(u=.3):u=1,c<0){var l=(i-Math.abs(c))/i;l<u&&(u=l),u<.3&&(u=.3)}var d=Math.floor(u*a);return d=d>a?a:d,n.target.style.fontSize=d+"px",d}}},"iPd/":function(t,e,n){!function(e,o){t.exports=o(n("/5sW"))}(0,function(t){return function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return t[o].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="/",e(0)}([function(t,e,n){var o,i,r;i=[t,e,n(13),n(14),n(43),n(44)],void 0===(r="function"==typeof(o=function(t,e,n,o,i,r){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if("function"!=typeof t)throw"imageLoaded directive error: objet "+t+" should be a function "+e}function c(t,e){var n=(0,d.default)(t),o=n.images.map(function(t){return{img:t.img,src:t.img.src}}),i=t.__imagesLoaded__.context;(function(t,e){var n=t.length;if(n!=e.length)return!1;for(var o=0;o<n;o++){var i=t[o],r=e[o];if(i.img!==r.img||i.src!==r.src)return!1}return!0})(i,o)||(function(t,e){var n=e.value,o=e.arg,i=e.modifiers;if(!o)return s(n),void t.on("always",function(t){return setTimeout(function(){return n(t)})});var r=!!i&&!!(0,l.default)(i).length,a=r?i:n,c=r?function(t){return n}:function(t){return n[t]},u=function(){var e=c(d);s(e,r?"":"property "+d+" of "+n),t[o](d,function(t,n){return setTimeout(function(){return e(t,n)})})};for(var d in a)u()}(n,e),(0,u.default)(t.__imagesLoaded__,{context:o,imageLoaded:n}))}Object.defineProperty(e,"__esModule",{value:!0});var u=a(n),l=a(o),d=a(i),f=a(r);e.default={bind:function(t){t.__imagesLoaded__={context:[]}},inserted:function(t,e){c(t,e)},componentUpdated:function(t,e){f.default.nextTick(function(){c(t,e)})},unbind:function(t,e){t.__imagesLoaded__=null}},t.exports=e.default})?o.apply(e,i):o)||(t.exports=r)},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){t.exports=!n(2)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var o=n(4),i=n(1),r=n(21),a=n(25),s="prototype",c=function(t,e,n){var u,l,d,f=t&c.F,h=t&c.G,p=t&c.S,m=t&c.P,v=t&c.B,_=t&c.W,g=h?i:i[e]||(i[e]={}),b=g[s],y=h?o:p?o[e]:(o[e]||{})[s];for(u in h&&(n=e),n)(l=!f&&y&&void 0!==y[u])&&u in g||(d=l?y[u]:n[u],g[u]=h&&"function"!=typeof y[u]?n[u]:v&&l?r(d,o):_&&y[u]==d?function(t){var e=function(e,n,o){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,o)}return t.apply(this,arguments)};return e[s]=t[s],e}(d):m&&"function"==typeof d?r(Function.call,d):d,m&&((g.virtual||(g.virtual={}))[u]=d,t&c.R&&b&&!b[u]&&a(b,u,d)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e,n){var o=n(20);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==o(t)?t.split(""):Object(t)}},function(t,e,n){var o=n(30),i=n(23);t.exports=Object.keys||function(t){return o(t,i)}},function(t,e){var n=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:n)(t)}},function(t,e,n){var o=n(8),i=n(6);t.exports=function(t){return o(i(t))}},function(t,e,n){var o=n(6);t.exports=function(t){return Object(o(t))}},function(t,e,n){t.exports={default:n(15),__esModule:!0}},function(t,e,n){t.exports={default:n(16),__esModule:!0}},function(t,e,n){n(40),t.exports=n(1).Object.assign},function(t,e,n){n(41),t.exports=n(1).Object.keys},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var o=n(5);t.exports=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var o=n(11),i=n(37),r=n(36);t.exports=function(t){return function(e,n,a){var s,c=o(e),u=i(c.length),l=r(a,u);if(t&&n!=n){for(;u>l;)if((s=c[l++])!=s)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var o=n(17);t.exports=function(t,e,n){if(o(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,o){return t.call(e,n,o)};case 3:return function(n,o,i){return t.call(e,n,o,i)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var o=n(5),i=n(4).document,r=o(i)&&o(i.createElement);t.exports=function(t){return r?i.createElement(t):{}}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var o=n(28),i=n(33);t.exports=n(3)?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){t.exports=!n(3)&&!n(2)(function(){return 7!=Object.defineProperty(n(22)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){"use strict";var o=n(9),i=n(29),r=n(31),a=n(12),s=n(8),c=Object.assign;t.exports=!c||n(2)(function(){var t={},e={},n=Symbol(),o="abcdefghijklmnopqrst";return t[n]=7,o.split("").forEach(function(t){e[t]=t}),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=o})?function(t,e){for(var n=a(t),c=arguments.length,u=1,l=i.f,d=r.f;c>u;)for(var f,h=s(arguments[u++]),p=l?o(h).concat(l(h)):o(h),m=p.length,v=0;m>v;)d.call(h,f=p[v++])&&(n[f]=h[f]);return n}:c},function(t,e,n){var o=n(18),i=n(26),r=n(38),a=Object.defineProperty;e.f=n(3)?Object.defineProperty:function(t,e,n){if(o(t),e=r(e,!0),o(n),i)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var o=n(24),i=n(11),r=n(19)(!1),a=n(34)("IE_PROTO");t.exports=function(t,e){var n,s=i(t),c=0,u=[];for(n in s)n!=a&&o(s,n)&&u.push(n);for(;e.length>c;)o(s,n=e[c++])&&(~r(u,n)||u.push(n));return u}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var o=n(7),i=n(1),r=n(2);t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],a={};a[t]=e(n),o(o.S+o.F*r(function(){n(1)}),"Object",a)}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var o=n(35)("keys"),i=n(39);t.exports=function(t){return o[t]||(o[t]=i(t))}},function(t,e,n){var o=n(4),i="__core-js_shared__",r=o[i]||(o[i]={});t.exports=function(t){return r[t]||(r[t]={})}},function(t,e,n){var o=n(10),i=Math.max,r=Math.min;t.exports=function(t,e){return(t=o(t))<0?i(t+e,0):r(t,e)}},function(t,e,n){var o=n(10),i=Math.min;t.exports=function(t){return t>0?i(o(t),9007199254740991):0}},function(t,e,n){var o=n(5);t.exports=function(t,e){if(!o(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!o(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!o(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!o(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e){var n=0,o=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+o).toString(36))}},function(t,e,n){var o=n(7);o(o.S+o.F,"Object",{assign:n(27)})},function(t,e,n){var o=n(12),i=n(9);n(32)("keys",function(){return function(t){return i(o(t))}})},function(t,e,n){var o,i;"undefined"!=typeof window&&window,o=function(){"use strict";function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var n=this._events=this._events||{},o=n[t]=n[t]||[];return-1==o.indexOf(e)&&o.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var n=this._onceEvents=this._onceEvents||{},o=n[t]=n[t]||{};return o[e]=!0,this}},e.off=function(t,e){var n=this._events&&this._events[t];if(n&&n.length){var o=n.indexOf(e);return-1!=o&&n.splice(o,1),this}},e.emitEvent=function(t,e){var n=this._events&&this._events[t];if(n&&n.length){var o=0,i=n[o];e=e||[];for(var r=this._onceEvents&&this._onceEvents[t];i;){var a=r&&r[i];a&&(this.off(t,i),delete r[i]),i.apply(this,e),i=n[o+=a?0:1]}return this}},t},void 0===(i="function"==typeof o?o.call(e,n,e,t):o)||(t.exports=i)},function(t,e,n){var o,i;!function(r,a){"use strict";o=[n(42)],void 0===(i=function(t){return function(t,e){function n(t,e){for(var n in e)t[n]=e[n];return t}function o(t,e,i){return this instanceof o?("string"==typeof t&&(t=document.querySelectorAll(t)),this.elements=function(t){var e=[];if(Array.isArray(t))e=t;else if("number"==typeof t.length)for(var n=0;n<t.length;n++)e.push(t[n]);else e.push(t);return e}(t),this.options=n({},this.options),"function"==typeof e?i=e:n(this.options,e),i&&this.on("always",i),this.getImages(),a&&(this.jqDeferred=new a.Deferred),void setTimeout(function(){this.check()}.bind(this))):new o(t,e,i)}function i(t){this.img=t}function r(t,e){this.url=t,this.element=e,this.img=new Image}var a=t.jQuery,s=t.console;o.prototype=Object.create(e.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),!0===this.options.background&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&c[e]){for(var n=t.querySelectorAll("img"),o=0;o<n.length;o++){var i=n[o];this.addImage(i)}if("string"==typeof this.options.background){var r=t.querySelectorAll(this.options.background);for(o=0;o<r.length;o++){var a=r[o];this.addElementBackgroundImages(a)}}}};var c={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var n=/url\((['"])?(.*?)\1\)/gi,o=n.exec(e.backgroundImage);null!==o;){var i=o&&o[2];i&&this.addBackground(i,t),o=n.exec(e.backgroundImage)}},o.prototype.addImage=function(t){var e=new i(t);this.images.push(e)},o.prototype.addBackground=function(t,e){var n=new r(t,e);this.images.push(n)},o.prototype.check=function(){function t(t,n,o){setTimeout(function(){e.progress(t,n,o)})}var e=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(e){e.once("progress",t),e.check()}):void this.complete()},o.prototype.progress=function(t,e,n){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&s&&s.log("progress: "+n,t,e)},o.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},i.prototype=Object.create(e.prototype),i.prototype.check=function(){var t=this.getIsImageComplete();return t?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},i.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},i.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},i.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},i.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},i.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},r.prototype=Object.create(i.prototype),r.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var t=this.getIsImageComplete();t&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},r.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},r.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},o.makeJQueryPlugin=function(e){(e=e||t.jQuery)&&((a=e).fn.imagesLoaded=function(t,e){var n=new o(this,t,e);return n.jqDeferred.promise(a(this))})},o.makeJQueryPlugin(),o}(r,t)}.apply(e,o))||(t.exports=i)}(window)},function(e,n){e.exports=t}])})},kiZH:function(t,e,n){"use strict";var o=n("aJBx"),i=n("BAzp");var r=function(t){n("VahZ")},a=n("K60R")(o.a,i.a,!1,r,"data-v-173d37a2",null);e.a=a.exports},ktrK:function(t,e,n){(t.exports=n("FZ+f")()).push([t.i,'.footer[data-v-1668bc78]{position:absolute;display:-ms-flexbox;display:flex;right:0;left:0;bottom:61.536px;bottom:3.846rem;z-index:30}@media only screen and (max-width:46.9em){.footer[data-v-1668bc78]{display:none}}.footer__menu[data-v-1668bc78]{padding-left:61.536px;padding-left:3.846rem;padding-right:61.536px;padding-right:3.846rem;width:50%;display:-ms-flexbox;display:flex}.footer__menu_side_right[data-v-1668bc78]{-ms-flex-pack:end;justify-content:flex-end;text-align:right}.footer__menu-item[data-v-1668bc78]{width:33.333333333333336%;line-height:1}@media only screen and (max-width:80em){.footer__menu-item[data-v-1668bc78]{width:50%}}.footer__menu-item_double[data-v-1668bc78]{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.footer__menu-link[data-v-1668bc78]{color:currentColor;line-height:1;transition:opacity .3s ease,color .3s ease;background:none;text-decoration:none;cursor:pointer;-webkit-tap-highlight-color:transparent;opacity:1;font-weight:600;position:relative;display:inline-block;vertical-align:top}.footer__menu-link[data-v-1668bc78]:after{position:absolute;display:block;content:"";left:-60%;right:-60%;top:-80%;bottom:-80%}.footer__menu-link.nuxt-link-active[data-v-1668bc78],.footer__menu-link.router-link-active[data-v-1668bc78]{opacity:.4}.page:not(.page_platform_mobile) .footer__menu-link[data-v-1668bc78]:hover{opacity:.6}.footer__menu-link[data-v-1668bc78]:disabled{opacity:.4;cursor:default}.footer__menu-link_prefix-play[data-v-1668bc78]{padding-left:25.84px;padding-left:1.615rem}.footer__menu-link_prefix-play[data-v-1668bc78]:before{width:0;height:0;background:0;border-style:solid;border-width:4.92px 0 4.92px 11.072px;border-width:.3075rem 0 .3075rem .692rem;border-color:transparent transparent transparent currentColor;content:"";position:absolute;left:0;top:50%;margin-top:-6.16px;margin-top:-.385rem;margin-right:14.768px;margin-right:.923rem;display:inline-block;vertical-align:top}',""])},qUJj:function(t,e,n){"use strict";var o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{appear:""},on:{enter:t.hookEnter,leave:t.hookLeave}},[n("footer",{staticClass:"footer"},[n("ul",{staticClass:"footer__menu"},[n("li",{staticClass:"footer__menu-item"},[n("router-link",{staticClass:"footer__menu-link",class:{"router-link-active":"index"===t.$route.name},attrs:{to:{name:"index"},exact:""}},[t._v("Cases")])],1),t.isTablet?n("transition",{attrs:{appear:""},on:{enter:t.hookEnter}},[n("li",{staticClass:"footer__menu-item footer__menu-item_double"},[n("a",{staticClass:"footer__menu-link",attrs:{href:t.commonData.presentation,target:"_blank"}},[t._v("Presentation, PDF")]),n("router-link",{staticClass:"footer__menu-link footer__menu-link_prefix-play",attrs:{to:{name:"showreel"}}},[t._v("Showreel")])],1)]):[n("transition",{attrs:{appear:""},on:{enter:t.hookEnter}},[t.additionalMenuVisibility?n("li",{staticClass:"footer__menu-item"},[n("a",{staticClass:"footer__menu-link",attrs:{href:t.commonData.presentation,target:"_blank"}},[t._v("Presentation, PDF")])]):t._e()]),n("transition",{attrs:{appear:""},on:{enter:t.hookEnter}},[t.additionalMenuVisibility?n("li",{staticClass:"footer__menu-item"},[n("router-link",{staticClass:"footer__menu-link footer__menu-link_prefix-play",attrs:{to:{name:"showreel"}}},[t._v("Showreel")])],1):t._e()])]],2),n("ul",{staticClass:"footer__menu footer__menu_side_right"},[n("li",{staticClass:"footer__menu-item footer__menu-item_double"},[n("router-link",{staticClass:"footer__menu-link",attrs:{to:{name:"about-partners"}}},[t._v("About us")]),n("router-link",{staticClass:"footer__menu-link",attrs:{to:{name:"approach"}}},[t._v("Approach")])],1),n("li",{staticClass:"footer__menu-item"},[n("router-link",{staticClass:"footer__menu-link",attrs:{to:{name:"contacts"}}},[t._v("Contacts")])],1)])])])},staticRenderFns:[]};e.a=o},r6Wt:function(t,e,n){"use strict";var o=n("Dd8w"),i=n.n(o),r=n("NYxO");e.a={name:"footer-component",components:{},data:function(){return{}},computed:i()({},Object(r.mapState)(["commonData","loader"]),Object(r.mapGetters)(["isTablet"]),{additionalMenuVisibility:function(){switch(this.$route.name){case"index":return this.loader.isLoaded}return!0}}),watch:{},created:function(){},mounted:function(){},methods:{hookEnter:function(t,e){new TimelineMax({onComplete:e}).set(t,{opacity:0,y:20}).to(t,.4,{opacity:1,y:0,clearProps:"opacity, y"})},hookLeave:function(t,e){new TimelineMax({onComplete:e}).set(t,{opacity:1,y:0}).to(t,.4,{opacity:0,y:20})}},beforeDestroy:function(){}}},ugPf:function(t,e,n){var o=function(){function t(t){var i={callback:function(){},elem:document,preventMouse:!0};this.eventWheel="onwheel"in document?"wheel":"mousewheel",this._options=o(i,t),this._deltaArray=[0,0,0],this._isAcceleration=!1,this._isStopped=!0,this._direction="",this._timer="",this._isWorking=!0;var r=this;this._wheelHandler=function(t){r._isWorking&&(function(t){var o=this,i=n(t);if(0===i)return;var r,a=i>0?"down":"up",s=o._deltaArray.length,c=!1,u=0;for(clearTimeout(o._timer),o._timer=setTimeout(function(){o._deltaArray=[0,0,0],o._isStopped=!0,o._direction=a},150),r=0;r<s;r++)0!==o._deltaArray[r]&&(o._deltaArray[r]>0?++u:--u);Math.abs(u)===s&&(u>0?"down":"up")!==o._direction&&(c=!0,o._direction=a);o._isStopped||(c?(o._isAcceleration=!0,e.call(this,t)):Math.abs(u)===s&&function(t){var o=Math.abs(this._deltaArray[0]),i=Math.abs(this._deltaArray[1]),r=Math.abs(this._deltaArray[2]),a=Math.abs(n(t));a>r&&r>i&&i>o&&(this._isAcceleration||(e.call(this,t),this._isAcceleration=!0));a<r&&r<=i&&(this._isAcceleration=!1)}.call(this,t));o._isStopped&&(o._isStopped=!1,o._isAcceleration=!0,o._direction=a,e.call(this,t));o._deltaArray.shift(),o._deltaArray.push(i)}.call(r,t),r._options.preventMouse&&function(t){(t=t||window.event).preventDefault?t.preventDefault():t.returnValue=!1}(t))},function(t,e,n){t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent&&t.attachEvent("on"+e,n)}(this._options.elem,this.eventWheel,this._wheelHandler)}function e(t){t.direction=this._direction,this._options.callback.call(this,t)}t.prototype={constructor:t,turnOn:function(){return this._isWorking=!0,this},turnOff:function(){return this._isWorking=!1,this},setOptions:function(t){return this._options=o(this._options,t),this},getOption:function(t){var e=this._options[t];if(void 0!==e)return e;throw new Error("Unknown option")},destroy:function(){return function(t,e,n){t.removeEventListener?t.removeEventListener(e,n,!1):t.detachEvent&&t.detachEvent("on"+e,n)}(this._options.elem,this.eventWheel,this._wheelHandler),this}};var n=function(t){return(n=t.wheelDelta&&!t.deltaY?function(t){return-1*t.wheelDelta}:function(t){return t.deltaY})(t)};function o(t,e){var n,o={};for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&(o[n]=t[n]);for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n]);return o}return t}();t.exports=o},uo8q:function(t,e,n){"use strict";var o=n("r6Wt"),i=n("qUJj");var r=function(t){n("Whit")},a=n("K60R")(o.a,i.a,!1,r,"data-v-1668bc78",null);e.a=a.exports},vTn1:function(t,e,n){"use strict";var o=n("QK6D"),i=n("ffFl");var r=function(t){n("Ag2C")},a=n("K60R")(o.a,i.a,!1,r,"data-v-b14cf5e0",null);e.a=a.exports},wxAW:function(t,e,n){"use strict";e.__esModule=!0;var o=function(t){return t&&t.__esModule?t:{default:t}}(n("C4MV"));e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),(0,o.default)(t,i.key,i)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}()}});