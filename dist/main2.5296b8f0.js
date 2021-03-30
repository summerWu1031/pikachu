// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n  /*\n  *\u9996\u5148\u6211\u4EEC\u9700\u8981\u76AE\u5361\u4E18\u7684\u76AE\n  */\n\n  .skin {\n    position: relative;\n    background-color: #ffe600;\n    min-height: 50vh;\n  }\n\n  /*\n  *\u7136\u540E\u9700\u8981\u4E00\u4E2A\u5C0F\u5DE7\u7684\u9F3B\u5B50\n  */\n\n .nose {\n  position: relative;\n  left: 50%;\n  top: 40px;\n  margin-left: -5px;\n  border: 5px solid red;\n  border-color: black transparent transparent transparent;\n  height: 10px;\n  width: 10px;\n  z-index: 1;\n}\n\n.yuan {\n  height: 4px;\n  width: 10px;\n  position: absolute;\n  top: -9px;\n  left: -5px;\n  border-radius: 50% 50% 0 0;\n  background-color: #000;\n}\n\n/*\n*\u7136\u540E\u753B\u76AE\u5361\u4E18\u7684\u773C\u775B\n*/\n.eyes {\n  width: 32px;\n  height: 32px;\n  border: 2px solid black;\n  position: absolute;\n  left: 50%;\n  margin-left: -16px;\n  top: 20px;\n  border-radius: 50%;\n  background-color: #2e2e2e;\n}\n\n/*\n*\u753B\u773C\u775B\u91CC\u9762\u767D\u8272\u7684\u90E8\u5206\n*/\n.eyes::before {\n  content: \"\";\n  display: block;\n  border: 2px solid black;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background-color: #fff;\n  position: relative;\n  left: 4px;\n}\n\n/*\n*\u628A\u773C\u775B\u653E\u5230\u5408\u9002\u7684\u4F4D\u7F6E\n*/\n.eyes.left {\n  transform: translateX(-75px);\n}\n.eyes.right {\n  transform: translateX(75px);\n}\n\n/*\n*\u5F00\u59CB\u753B\u76AE\u5361\u4E18\u7684\u5634\u5DF4\n*/\n.mouth {\n  width: 100px;\n  height: 100px;\n  position: absolute;\n  top: 70px;\n  left: 50%;\n  margin-left: -50px;\n}\n\n/*\n*\u9996\u5148\u753B\u5B83\u7684\u4E0A\u5634\u5507\n*/\n.mouth .up {\n  position: relative;\n  top: -25px;\n}\n.mouth .up .lip {\n  width: 60px;\n  height: 15px;\n  border: 2px solid black;\n  border-top-color: transparent;\n  position: absolute;\n  left: 50%;\n  margin-left: -30px;\n  background-color: #ffe600;\n  z-index: 1;\n}\n\n/*\n*\u4E0A\u5634\u5507\u662F\u50CF\u80E1\u5B50\u5F62\u72B6\u7684\n*\u753B\u597D\u540E\u628A\u5B83\u653E\u5728\u5BF9\u5E94\u4F4D\u7F6E\n*/\n.mouth .up .lip.left {\n  border-radius: 0 0 0 50px;\n  transform: rotate(-15deg) translateX(-31px);\n}\n\n.mouth .up .lip.right {\n  border-radius: 0 0 50px 0;\n  transform: rotate(15deg) translateX(31px);\n}\n\n.mouth .up .lip::before {\n  content: \"\";\n  display: block;\n  width: 4px;\n  height: 15px;\n  position: absolute;\n  bottom: -0.5px;\n  background-color: #ffe600;\n}\n.mouth .up .lip.left::before {\n  right: -3px;\n}\n.mouth .up .lip.right::before {\n  left: -3px;\n}\n\n\n/*\n*\u7136\u540E\u6211\u4EEC\u6765\u753B\u4E0B\u5634\u5507\n*/\n.mouth .down {\n  width: 100px;\n  height: 100px;\n  position: absolute;\n  top: -11px;\n  overflow: hidden;\n}\n.mouth .down .yuan1 {\n  width: 94px;\n  height: 1000px;\n  border: 3px solid black;\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  margin-left: -47px;\n  border-radius: 75px/300px;\n  background-color: #9b000a;\n  overflow: hidden;\n}\n\n/*\n*\u7136\u540E\u662F\u5C0F\u820C\u5934\n*/\n.mouth .down .yuan2 {\n  width: 100px;\n  height: 100px;\n  position: absolute;\n  background-color: #ff485f;\n  bottom: -17px;\n  left: 50%;\n  margin-left: -50px;\n  border-radius: 50% 50% 0 0;\n}\n\n/*\n*\u63A5\u7740\u6211\u4EEC\u6765\u753B\u76AE\u5361\u4E18\u7684\u8138\n*/\n.face {\n  width: 44px;\n  height: 44px;\n  border: 2px solid black;\n  position: absolute;\n  top: 85px;\n  left: 50%;\n  margin-left: -22px;\n  border-radius: 50%;\n  background-color: #ff0000;\n  z-index: 3;\n}\n\n/*\n*\u628A\u8138\u988A\u653E\u5230\u5408\u9002\u7684\u4F4D\u7F6E\n*/\n.face.left {\n  transform: translateX(-100px);\n}\n.face.right {\n  transform: translateX(100px);\n}\n\n/*\n*\u7136\u540E\u628A\u76AE\u5361\u4E18\u7684\u653E\u7535\u6280\u80FD\u653E\u5230\u5408\u9002\u7684\u5730\u65B9\n*/\n.face > img {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  display:block;\n}\n\n.face.left > img {\n  transform: rotateY(180deg);\n  transform-origin: 0 0;\n}\n\n/*\n*\u753B\u597D\u4E86\uFF0C\u628A\u76AE\u5361\u4E18\u9001\u4F60\n*/\n\n/*\n*\u8BA9\u6211\u4EEC\u6765\u753B\u4E00\u4E2A\u7CBE\u7075\u7403\u5427\n*\u9996\u5148\u9700\u8981\u753B\u4E00\u4E2A\u5706\n*/\n.ball {\n  width: 100px;\n  height: 100px;\n  border: 4px solid black;\n  position: absolute;\n  top: 200px;\n  left: 50%;\n  margin-left: -50px;\n  border-radius: 50%;\n}\n\n/*\n*\u7136\u540E\u753B\u4E00\u4E2A\u91CC\u9762\u7684\u5C0F\u7403\u7403\n*/\n.innerBall {\n  width: 50px;\n  height: 50px;\n  border: 4px solid black;\n  border-radius: 50%;\n  background-color: #fff;\n  position: absolute;\n  top: 23px;\n  left: 50%;\n  margin-left: -25px;\n  z-index: 1;\n}\n\n/*\n*\u63A5\u7740\u628A\u5F00\u5173\u7EA2\u8272\u7684\u90E8\u5206\u56FE\u4E0A\n*/\n.innerBall::after {\n  content: \"\";\n  display: block;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: 4px solid #d9171a;\n  background-color: #ff1b1b;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-left: -15px;\n  margin-top: -15px;\n  transform-origin: bottom center;\n  animation: blink 1s infinite;\n}\n\n/*\n*\u6700\u540E\u52A0\u70B9\u9634\u5F71\u8BA9\u4ED6\u770B\u8D77\u6765\u66F4\u7ACB\u4F53\n*/\n.ball::before {\n  content: \"\";\n  display: block;\n  width: 95px;\n  height: 95px;\n  border-radius: 50%;\n  border-right: 20px solid rgba(0, 0, 0, 0.2);\n}\n\n/*\n*\u7CBE\u7075\u7403\u753B\u597D\u5566\uFF0C\u5E0C\u671B\u4F60\u53EF\u4EE5\u6536\u670D\u76AE\u5361\u4E18\u54E6\n*/\n  ";
var _default = string;
exports.default = _default;
},{}],"main2.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  n: 1,
  time: 50,
  id: undefined,
  ui: {
    demo1: document.querySelector('#demo1'),
    demo2: document.querySelector('#demo2')
  },
  init: function init() {
    player.ui.demo1.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.bindEvents();
    player.play();
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > _css.default.length) {
      window.clearInterval(player.id);
      return;
    }

    demo1.innerText = _css.default.substr(0, player.n);
    demo2.innerHTML = _css.default.substr(0, player.n);
    demo1.scrollTop = demo1.scrollHeight; //拉到最底下
  },
  play: function play() {
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 300;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 50;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();
},{"./css.js":"css.js"}],"../../../../AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59358" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main2.js"], null)
//# sourceMappingURL=/main2.5296b8f0.js.map