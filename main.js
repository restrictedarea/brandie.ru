!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("redux"),require("redux-thunk"),require("react-redux"),require("react-router-dom"),require("react-dom")):"function"==typeof define&&define.amd?define(["exports","react","redux","redux-thunk","react-redux","react-router-dom","react-dom"],t):t(e.application=e.application||{},e.React,e.Redux,e.ReduxThunk,e.ReactRedux,e.ReactRouterDOM,e.ReactDOM)}(this,function(e,t,n,r,l,o,a){"use strict";function c(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}function u(e){return{type:D,location:e}}function i(e){return{type:T,location:e}}function s(e,t){return{type:_,location:e,data:t}}function m(e){return{type:I,location:e}}function p(e,t){return{type:A,location:e,error:t}}function d(e){return e.replace(/(\/)?([^\/]+\.html)?$/,function(e,t,n){return(t||"/")+(n||"index.html")})}function E(e){return e=d(e),function(t,n){if("undefined"!=typeof window){var r=n();d(r.pages.currentLocation)!==e&&(t(u(e)),r.pages.pages[e]&&"notLoaded"!==r.pages.pages[e].status||(t(i(e)),fetch(window.location.protocol+"//"+window.location.host+e.replace(/\.html$/,".json")).then(function(n){404===n.status?t(m(e)):n.json().then(function(n){t(s(e,n))})}).catch(function(n){t(p(e,n))})))}}}function f(e){return{currentLocation:e.pages.currentLocation,pages:e.pages.pages}}function b(e){return{}}function h(e){return{}}function w(e){return{}}function q(e){return{}}function v(e){return{}}function y(e){return{}}function g(e){return{}}function x(e){return{}}function N(e){return{}}function R(e){return{title:e.title}}function O(e,t){switch(void 0===e&&(e=""),t.type){case D:return t.location;default:return e}}function C(e,t,n){var r={status:"notLoaded",data:null,lastError:null};return Object.assign(e[t]?Object.assign({},e[t]):r,n)}function L(e,t){switch(void 0===e&&(e={}),t.type){case T:return Object.assign({},e,(n={},n[t.location]=C(e,t.location,{status:"loading"}),n));case _:return Object.assign({},e,(r={},r[t.location]=C(e,t.location,{status:"loaded",data:t.data}),r));case I:return Object.assign({},e,(l={},l[t.location]=C(e,t.location,{status:"notFound"}),l));case A:return Object.assign({},e,(o={},o[t.location]=C(e,t.location,{status:"notLoaded",lastError:t.error}),o));default:return e}var n,r,l,o}function P(e,t){switch(void 0===e&&(e=""),t.type){case Ae:return t.title;default:return e}}function j(e){return n.createStore(Ge,e,n.applyMiddleware(r))}function M(e){return k.createElement(l.Provider,{store:e},k.createElement(o.Route,{component:Ie}))}var k="default"in t?t.default:t;r="default"in r?r.default:r;var F=function(e){return function(){for(var t=[],n=0;n<arguments.length;n++){var r=e.mods&&e.mods[arguments[n]];r&&t.push(r)}return(e.base?[e.base]:[]).concat(t).join(" ")}};const S=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e};var D="pages/show",T="pages/load:start",_="pages/load:success",I="pages/load:notFound",A="pages/load:error",B=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),t.prototype.componentDidMount=function(){this.props.load(this.props.location.pathname)},t.prototype.componentDidUpdate=function(e){this.props.load(this.props.location.pathname)},t.prototype.render=function(){var e=this.props,t=e.Page,n=e.ErrorPage,r=e.NotFoundPage,l=this.props.pages[this.props.currentLocation];if(!l)return null;switch(l.status){case"notLoaded":return k.createElement(n,null);case"loading":case"loaded":return k.createElement(t,S({},l.data));case"notFound":return k.createElement(r,null)}},t}(t.Component),G={load:E},H=l.connect(f,G)(B),W={root:F({base:"a"})},$={root:F({base:"b"}),container:F({base:"c"}),menu:F({base:"d"}),center:F({base:"e"})},U={root:F({base:"f"}),logo:F({base:"g"}),menu:F({base:"h"}),item:F({base:"i",mods:{active:"j"}}),button:F({base:"k"})},z=[{title:"Портфолио",to:"/portfolio"},{title:"Блог",to:"/blog"},{title:"Контактные данные",to:"/contact"}],J=function(e){return k.createElement("div",{className:U.root()},k.createElement("div",{className:U.logo()},"LEGO HERE"),k.createElement("div",{className:U.menu()},z.map(function(e,t){return k.createElement(o.NavLink,{className:U.item(),activeClassName:U.item("active"),to:e.to,key:t},e.title)}),k.createElement(o.NavLink,{className:U.button(),to:"/order"},"Заказать логотип")))},K=function(e){return k.createElement("div",{className:$.root()},k.createElement("div",{className:$.container()},k.createElement("div",{className:$.menu()},k.createElement(J,null)),k.createElement("div",{className:$.center()},k.createElement("div",null,"Правильный логотип"),k.createElement("div",null,"— ваш единственный шанс произвести хорошее первое впечатление"))))},Q={root:F({base:"l"}),container:F({base:"m"})},V=function(e){return k.createElement("div",{className:Q.root()},k.createElement("div",{className:Q.container()},k.createElement(J,null)))},X={root:F({base:"n"}),container:F({base:"o"})},Y=function(e){return k.createElement("div",{className:X.root()},k.createElement("div",{className:X.container()},e.children))},Z={root:F({base:"p"}),container:F({base:"q"}),caption:F({base:"r"})},ee=function(e){return k.createElement("div",{className:Z.root()},k.createElement("div",{className:Z.container()},k.createElement("div",{className:Z.caption()},"Footer")))},te=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),t.prototype.render=function(){return k.createElement("div",{className:W.root()},k.createElement(K,null),k.createElement(Y,null,k.createElement("h1",null,"Что нужно сделать для того, чтоб получить отличный логотип?"),"qwe",k.createElement("br",null),"qwe",k.createElement("br",null),"qwe",k.createElement("br",null),"qwe",k.createElement("br",null),"qwe",k.createElement("br",null),"qwe",k.createElement("br",null),"qwe",k.createElement("br",null),"qwe",k.createElement("br",null),"qwe",k.createElement("br",null),"qwe",k.createElement("br",null),"qwe",k.createElement("br",null),"qwe",k.createElement("br",null),"qwe",k.createElement("br",null),"qwe",k.createElement("br",null),"qwe",k.createElement("br",null),"qwe",k.createElement("br",null),"qwe",k.createElement("br",null),"qwe",k.createElement("br",null),"qwe",k.createElement("br",null),"qwe",k.createElement("br",null),"qwe",k.createElement("br",null),"qwe",k.createElement("br",null),"qwe",k.createElement("br",null),"qwe",k.createElement("br",null),"qwe",k.createElement("br",null),"qwe",k.createElement("br",null),"qwe",k.createElement("br",null),"qwe",k.createElement("br",null),"qwe",k.createElement("br",null),"qwe",k.createElement("br",null),"qwe",k.createElement("br",null),"qwe",k.createElement("br",null),"qwe",k.createElement("br",null),"qwe",k.createElement("br",null),"qwe",k.createElement("br",null),"qwe",k.createElement("br",null),"qwe",k.createElement("br",null),"qwe",k.createElement("br",null),"qwe",k.createElement("br",null),"qwe",k.createElement("br",null),"qwe",k.createElement("br",null),"qwe",k.createElement("br",null),"qwe",k.createElement("br",null),"qwe",k.createElement("br",null),"qwe",k.createElement("br",null),"qwe",k.createElement("br",null),"qwe",k.createElement("br",null),"qwe",k.createElement("br",null),"qwe",k.createElement("br",null),"qwe",k.createElement("br",null),"qwe",k.createElement("br",null),"qwe",k.createElement("br",null)),k.createElement(ee,null),k.createElement(V,null))},t}(t.Component),ne={},re=l.connect(b,ne)(te),le={root:F({base:"s"})},oe=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),t.prototype.render=function(){return k.createElement("div",{className:le.root()},k.createElement(Y,null,k.createElement("h1",null,this.props.title)),k.createElement(ee,null),k.createElement(V,null))},t}(t.Component),ae={},ce=l.connect(h,ae)(oe),ue={root:F({base:"t"})},ie=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),t.prototype.render=function(){return k.createElement("div",{className:ue.root()},k.createElement(Y,null,k.createElement("h1",null,"LOGO"),k.createElement("h1",null,this.props.title)),k.createElement(ee,null),k.createElement(V,null))},t}(t.Component),se={},me=l.connect(w,se)(ie),pe={root:F({base:"u"})},de=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),t.prototype.render=function(){return k.createElement("div",{className:pe.root()},k.createElement(Y,null,k.createElement("h1",null,"Order")),k.createElement(ee,null),k.createElement(V,null))},t}(t.Component),Ee={},fe=l.connect(q,Ee)(de),be={root:F({base:"v"})},he=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),t.prototype.render=function(){return k.createElement("div",{className:be.root()},k.createElement(Y,null,k.createElement("div",{dangerouslySetInnerHTML:{__html:this.props.content}})),k.createElement(ee,null),k.createElement(V,null))},t}(t.Component),we={},qe=l.connect(v,we)(he),ve={root:F({base:"w"})},ye=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),t.prototype.render=function(){return k.createElement("div",{className:ve.root()},k.createElement(Y,null,this.props.title),k.createElement(ee,null),k.createElement(V,null))},t}(t.Component),ge={},xe=l.connect(y,ge)(ye),Ne={root:F({base:"x"})},Re=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),t.prototype.render=function(){return k.createElement("div",{className:Ne.root()},k.createElement(Y,null,k.createElement("h1",null,"ARTICLE"),this.props.title),k.createElement(ee,null),k.createElement(V,null))},t}(t.Component),Oe={},Ce=l.connect(g,Oe)(Re),Le={root:F({base:"y"})},Pe=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),t.prototype.componentWillMount=function(){this.props.staticContext&&(this.props.staticContext.status=404)},t.prototype.render=function(){return k.createElement("div",{className:Le.root()},k.createElement(Y,null,k.createElement("h1",null,"Страница не найдена")),k.createElement(ee,null),k.createElement(V,null))},t}(t.Component),je={},Me=l.connect(x,je)(Pe),ke={},Fe=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),t.prototype.componentWillMount=function(){this.props.staticContext&&(this.props.staticContext.status=500)},t.prototype.render=function(){return k.createElement("div",{className:ke.root()},k.createElement(Y,null,k.createElement("h1",null,"Произошла ошибка")),k.createElement(ee,null),k.createElement(V,null))},t}(t.Component),Se={},De=l.connect(N,Se)(Fe),Te=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),t.prototype.render=function(){"undefined"!=typeof document&&(document.title=this.props.title);var e={ErrorPage:De,NotFoundPage:Me};return k.createElement(o.Switch,null,k.createElement(o.Route,{exact:!0,path:"/(index.html)?",render:function(t){return k.createElement(H,S({Page:re},e,t))}}),k.createElement(o.Route,{exact:!0,path:"/portfolio/(index.html)?",render:function(t){return k.createElement(H,S({Page:ce},e,t))}}),k.createElement(o.Route,{exact:!0,path:"/portfolio/*/(index.html)?",render:function(t){return k.createElement(H,S({Page:me},e,t))}}),k.createElement(o.Route,{exact:!0,path:"/order/(index.html)?",render:function(t){return k.createElement(H,S({Page:fe},e,t))}}),k.createElement(o.Route,{exact:!0,path:"/contact/(index.html)?",render:function(t){return k.createElement(H,S({Page:qe},e,t))}}),k.createElement(o.Route,{exact:!0,path:"/blog/(index.html)?",render:function(t){return k.createElement(H,S({Page:xe},e,t))}}),k.createElement(o.Route,{exact:!0,path:"/blog/*/(index.html)?",render:function(t){return k.createElement(H,S({Page:Ce},e,t))}}),k.createElement(o.Route,{render:function(e){return k.createElement(Me,S({},e))}}))},t}(t.Component),_e={},Ie=l.connect(R,_e)(Te),Ae="setTitle",Be=n.combineReducers({currentLocation:O,pages:L}),Ge=n.combineReducers({title:P,pages:Be});"undefined"!=typeof window&&window.addEventListener("load",function(e){var t=window.initialState;delete window.initialState;var n=j(t),r=k.createElement(o.BrowserRouter,null,M(n));a.render(r,document.getElementById("application"))}),e.getStore=j,e.getApplication=M,Object.defineProperty(e,"__esModule",{value:!0})});