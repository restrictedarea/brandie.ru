!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("redux"),require("redux-thunk"),require("react-redux"),require("react-router"),require("react-dom")):"function"==typeof define&&define.amd?define(["exports","react","redux","redux-thunk","react-redux","react-router","react-dom"],t):t(e.application=e.application||{},e.React,e.Redux,e.ReduxThunk,e.ReactRedux,e.ReactRouter,e.ReactDOM)}(this,function(e,t,n,r,o,u,i){"use strict";function c(e,t){function n(){this.constructor=e}m(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}function a(e,t){switch(void 0===e&&(e=0),t.type){case b:return t.number;default:return e}}function d(e){return s.createElement("div",{className:x.container()},"Header!")}function l(){return k}function p(e){return void 0===e&&(e={}),n.createStore(R,e,n.applyMiddleware(r))}function f(e,t){return s.createElement(o.Provider,{store:e},t)}var s="default"in t?t.default:t;r="default"in r?r.default:r;var m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},y=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},h=function(e){return function(){for(var t=[],n=0;n<arguments.length;n++){var r=e.mods&&e.mods[arguments[n]];r&&t.push(r)}return(e.base?[e.base]:[]).concat(t).join(" ")}},b="test/setNumber",v=n.combineReducers({number:a}),R=n.combineReducers({test:v}),w={test:h({base:"a"})},x={container:h({base:"b"})},E=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),t.prototype.render=function(){return s.createElement("div",{className:w.test()},s.createElement(d,null),"Hello")},t}(t.Component),_=function(e){return{}},O={},g=o.connect(_,O)(E),j=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),t.prototype.render=function(){return s.createElement("div",null,"404")},t}(t.Component),q=function(e){return{}},P={},S=o.connect(q,P)(j),k=s.createElement(u.Route,{path:"/"},s.createElement(u.IndexRoute,{component:g}),s.createElement(u.Route,{path:"*",component:S}));"undefined"!=typeof window&&window.addEventListener("load",function(e){var t=window.initialState;delete window.initialState,u.match({routes:k,history:u.browserHistory},function(e,n,r){var o=p(t),c=s.createElement(u.Router,y({},r)),a=f(o,c);i.render(a,document.getElementById("application"))})}),e.getRoutes=l,e.getStore=p,e.getApplication=f,Object.defineProperty(e,"__esModule",{value:!0})});