(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('redux'), require('redux-thunk'), require('react-redux'), require('react-router'), require('react-dom')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'redux', 'redux-thunk', 'react-redux', 'react-router', 'react-dom'], factory) :
	(factory((global.application = global.application || {}),global.React,global.Redux,global.ReduxThunk,global.ReactRedux,global.ReactRouter,global.ReactDOM));
}(this, (function (exports,React,redux,ReduxThunk,reactRedux,reactRouter,reactDom) { 'use strict';

var React__default = 'default' in React ? React['default'] : React;
ReduxThunk = 'default' in ReduxThunk ? ReduxThunk['default'] : ReduxThunk;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};

var TEST_SET_NUMBER = "test/setNumber";

function number(state, action) {
    if (state === void 0) { state = 0; }
    switch (action.type) {
        case TEST_SET_NUMBER:
            return action.number;
        default:
            return state;
    }
}
var test = redux.combineReducers({
    number: number,
});

var reducer = redux.combineReducers({
    test: test,
});

var getClass = function (classData) {
	return function () {
		var mods = [];

		for (var a = 0; a < arguments.length; a++) {
			var mod = classData.mods && classData.mods[arguments[a]];

			if (mod) {
				mods.push(mod);
			}
		}

		return (classData.base ? [classData.base] : []).concat(mods).join(" ");
	}
};

var style = {test: getClass({"base":"application_components_pages_Home_style__test_"})};

var Home = (function (_super) {
    __extends(Home, _super);
    function Home() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Home.prototype.render = function () {
        return (React__default.createElement("div", { className: style.test() }, "Hello"));
    };
    return Home;
}(React.Component));
var mapStateToProps = function (state) {
    return {};
};
var mapDispatchToProps = {};
var Home$1 = reactRedux.connect(mapStateToProps, mapDispatchToProps)(Home);

var NotFound = (function (_super) {
    __extends(NotFound, _super);
    function NotFound() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NotFound.prototype.render = function () {
        return (React__default.createElement("div", null, "404"));
    };
    return NotFound;
}(React.Component));
var mapStateToProps$1 = function (state) {
    return {};
};
var mapDispatchToProps$1 = {};
var NotFound$1 = reactRedux.connect(mapStateToProps$1, mapDispatchToProps$1)(NotFound);

var routes = (React__default.createElement(reactRouter.Route, { path: "/" },
    React__default.createElement(reactRouter.IndexRoute, { component: Home$1 }),
    React__default.createElement(reactRouter.Route, { path: "*", component: NotFound$1 })));

function getRoutes() {
    return routes;
}
function getStore(initialState) {
    if (initialState === void 0) { initialState = {}; }
    return redux.createStore(reducer, initialState, redux.applyMiddleware(ReduxThunk));
}

function getApplication(store, router) {
    return React__default.createElement(reactRedux.Provider, { store: store }, router);
}

if (typeof window !== "undefined") {
    window.addEventListener("load", function (event) {
        var initialState = window.initialState;
        delete window.initialState;
        reactRouter.match({
            routes: routes,
            history: reactRouter.browserHistory,
        }, function (error, redirectLocation, props) {
            var store = getStore(initialState);
            var router = React__default.createElement(reactRouter.Router, __assign({}, props));
            var application = getApplication(store, router);
            reactDom.render(application, document.getElementById("application"));
        });
    });
}

exports.getRoutes = getRoutes;
exports.getStore = getStore;
exports.getApplication = getApplication;

Object.defineProperty(exports, '__esModule', { value: true });

})));
