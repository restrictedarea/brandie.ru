!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("redux"),require("redux-thunk"),require("react-redux"),require("react-router-dom"),require("react-dom")):"function"==typeof define&&define.amd?define(["exports","react","redux","redux-thunk","react-redux","react-router-dom","react-dom"],t):t(e.application=e.application||{},e.React,e.Redux,e.ReduxThunk,e.ReactRedux,e.ReactRouterDOM,e.ReactDOM)}(this,function(e,t,n,o,r,i,c){"use strict";function a(e,t){function n(){this.constructor=e}for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}function u(e){return f.createElement("div",{className:v.root()},b.map(function(e,t){return f.createElement(i.NavLink,{className:v.item(),activeClassName:v.item("active"),to:e.to,key:t},e.title)}))}function l(e){return{type:N,title:e}}function s(e,t){switch(void 0===e&&(e=""),t.type){case N:return t.title;default:return e}}function p(e,t){switch(void 0===e&&(e=0),t.type){case J:return t.number;default:return e}}function d(e){return void 0===e&&(e={}),n.createStore(Q,e,n.applyMiddleware(o))}function m(e){return f.createElement(r.Provider,{store:e},f.createElement(i.Route,{component:z}))}var f="default"in t?t.default:t;o="default"in o?o.default:o;var h=function(e){return function(){for(var t=[],n=0;n<arguments.length;n++){var o=e.mods&&e.mods[arguments[n]];o&&t.push(o)}return(e.base?[e.base]:[]).concat(t).join(" ")}},y={root:h({base:"a"}),header:h({base:"b"}),body:h({base:"c"}),footer:h({base:"d"}),container:h({base:"e"}),logo:h({base:"f"}),menu:h({base:"g"})},v={root:h({base:"h"}),item:h({base:"i",mods:{active:"j"}})},b=[{title:"Сделать заказ",to:"/order"},{title:"Портфолио",to:"/portfolio"},{title:"Связаться с нами",to:"/contact"}],E={root:h({base:"k"})},N="application/setTitle",R=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.componentWillMount=function(){this.props.setTitle("Home")},t.prototype.render=function(){return f.createElement("div",{className:E.root()},"Hello")},t}(t.Component),w=function(e){return{}},x={setTitle:l},T=r.connect(w,x)(R),C={root:h({base:"l"})},M=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.componentWillMount=function(){this.props.setTitle("Portfolio")},t.prototype.render=function(){return f.createElement("div",{className:C.root()},"Portfolio")},t}(t.Component),g=function(e){return{}},k={setTitle:l},q=r.connect(g,k)(M),j={root:h({base:"m"})},O=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.componentWillMount=function(){this.props.setTitle("Contact")},t.prototype.render=function(){return f.createElement("div",{className:j.root()},"Contact")},t}(t.Component),P=function(e){return{}},S={setTitle:l},W=r.connect(P,S)(O),F={root:h({base:"n"})},B=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.componentWillMount=function(){this.props.setTitle("NotFound")},t.prototype.render=function(){return f.createElement("div",{className:F.root()},"NotFound")},t}(t.Component),D=function(e){return{}},H={setTitle:l},L=r.connect(D,H)(B),_=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.render=function(){return"undefined"!=typeof document&&(document.title=this.props.title),f.createElement("div",{className:y.root()},f.createElement("div",{className:y.header()},f.createElement("div",{className:y.container()},f.createElement("div",{className:y.logo()}),f.createElement("div",{className:y.menu()},f.createElement(u,null)))),f.createElement("div",{className:y.body()},f.createElement("div",{className:y.container()},f.createElement(i.Switch,null,f.createElement(i.Route,{exact:!0,path:"/",component:T}),f.createElement(i.Route,{exact:!0,path:"/portfolio",component:q}),f.createElement(i.Route,{exact:!0,path:"/contact",component:W}),f.createElement(i.Route,{component:L})))),f.createElement("div",{className:y.footer()},f.createElement("div",{className:y.container()},"Footer")))},t}(t.Component),A=function(e){return{title:e.application.title}},I={},z=r.connect(A,I)(_),G=n.combineReducers({title:s}),J="test/setNumber",K=n.combineReducers({number:p}),Q=n.combineReducers({application:G,test:K});"undefined"!=typeof window&&window.addEventListener("load",function(e){var t=window.initialState;delete window.initialState;var n=d(t),o=f.createElement(i.BrowserRouter,null,m(n));c.render(o,document.getElementById("application"))}),e.getStore=d,e.getApplication=m,Object.defineProperty(e,"__esModule",{value:!0})});