// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"aj62f":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "cb5ea115f72d0d54";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"4ZGjQ":[function(require,module,exports,__globalThis) {
var _jsClientSdk = require("@launchdarkly/js-client-sdk");
let client;
// Real-world user scenarios for testing the new checkout feature
const users = {
    enterpriseCustomer: {
        kind: 'user',
        key: 'acme-corp-user',
        email: 'sarah@acme.com',
        name: 'Sarah Chen',
        plan: 'premium',
        accountType: 'Enterprise',
        companySize: 'large'
    },
    regularCustomer: {
        kind: 'user',
        key: 'indie-startup-user',
        email: 'alex@startup.dev',
        name: 'Alex Morgan',
        plan: 'free',
        accountType: 'Freemium',
        companySize: 'small'
    }
};
async function initializeClient(userType) {
    if (client) client.close();
    const context = users[userType];
    client = _jsClientSdk.createClient('6a6a6f71c0abbe0a98ecd74e', context);
    client.on('ready', ()=>{
        const flagValue = client.variation('new-checkout-flow', false);
        updateFeature(flagValue, context);
    });
    // Listen for flag changes in real-time
    client.on('change:new-checkout-flow', ()=>{
        const flagValue = client.variation('new-checkout-flow', false);
        updateFeature(flagValue, context);
    });
    client.start();
}
function updateFeature(enabled, context) {
    const content = document.getElementById('feature-content');
    const userName = context.name;
    const accountType = context.accountType;
    if (enabled) content.innerHTML = `
      <h2>\u{2705} New Checkout Flow (ENABLED)</h2>
      <p><strong>${userName}</strong> (${accountType}) is seeing the new checkout experience</p>
    `;
    else content.innerHTML = `
      <h2>\u{274C} Standard Checkout Flow (DISABLED)</h2>
      <p><strong>${userName}</strong> (${accountType}) is using the proven checkout flow</p>
    `;
}
// Make function global for button clicks
window.initializeClient = initializeClient;
// Start with enterprise customer
initializeClient('enterpriseCustomer');
// Add buttons with better labels
document.body.innerHTML += `
  <div style="margin-top: 20px; padding: 10px;">
    <button onclick="window.initializeClient('enterpriseCustomer')" style="padding: 10px 15px; margin: 5px; background: #007bff; color: white; border: none; cursor: pointer; border-radius: 4px;">
      Test Enterprise Customer (Premium)
    </button>
    <button onclick="window.initializeClient('regularCustomer')" style="padding: 10px 15px; margin: 5px; background: #6c757d; color: white; border: none; cursor: pointer; border-radius: 4px;">
      Test Freemium Customer (Free)
    </button>
  </div>
`;

},{"@launchdarkly/js-client-sdk":"aK7Te"}],"aK7Te":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "basicLogger", ()=>Bc);
parcelHelpers.export(exports, "createClient", ()=>Jc);
var Dr = Object.defineProperty, Sr = Object.defineProperties;
var kr = Object.getOwnPropertyDescriptors;
var te = Object.getOwnPropertySymbols;
var Jn = Object.prototype.hasOwnProperty, Wn = Object.prototype.propertyIsEnumerable;
var Kn = (n, t, e)=>t in n ? Dr(n, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
    }) : n[t] = e, b = (n, t)=>{
    for(var e in t || (t = {}))Jn.call(t, e) && Kn(n, e, t[e]);
    if (te) for (var e of te(t))Wn.call(t, e) && Kn(n, e, t[e]);
    return n;
}, U = (n, t)=>Sr(n, kr(t));
var ee = (n, t)=>{
    var e = {};
    for(var i in n)Jn.call(n, i) && t.indexOf(i) < 0 && (e[i] = n[i]);
    if (n != null && te) for (var i of te(n))t.indexOf(i) < 0 && Wn.call(n, i) && (e[i] = n[i]);
    return e;
};
function Cr(n) {
    return `/${n.replace(/~/g, "~0").replace(/\//g, "~1")}`;
}
function ri(n) {
    return n.indexOf("~") ? n.replace(/~1/g, "/").replace(/~0/g, "~") : n;
}
function Ir(n) {
    return (n.startsWith("/") ? n.substring(1) : n).split("/").map((e)=>ri(e));
}
function Pr(n) {
    return !n.startsWith("/");
}
function xr(n) {
    return !n.match(/\/\/|(^\/.*~[^0|^1])|~$/);
}
var rt = class {
    constructor(t, e = !1){
        if (e) {
            let i = t;
            this.y = [
                i
            ], this.isValid = i !== "", this.redactionName = i.startsWith("/") ? Cr(i) : i;
        } else {
            if (this.redactionName = t, t === "" || t === "/" || !xr(t)) {
                this.isValid = !1, this.y = [];
                return;
            }
            Pr(t) ? this.y = [
                t
            ] : t.indexOf("/", 1) < 0 ? this.y = [
                ri(t.slice(1))
            ] : this.y = Ir(t), this.y[0] === "_meta" ? this.isValid = !1 : this.isValid = !0;
        }
    }
    get(t) {
        let { y: e, isValid: i } = this;
        if (!i) return;
        let r = t;
        for(let s = 0; s < e.length; s += 1){
            let a = e[s];
            if (r != null && Object.prototype.hasOwnProperty.call(r, a) && typeof r == "object" && !Array.isArray(r)) r = r[a];
            else return;
        }
        return r;
    }
    getComponent(t) {
        return this.y[t];
    }
    get depth() {
        return this.y.length;
    }
    get isKind() {
        return this.y.length === 1 && this.y[0] === "kind";
    }
    compare(t) {
        return this.depth === t.depth && this.y.every((e, i)=>e === t.getComponent(i));
    }
    get components() {
        return [
            ...this.y
        ];
    }
};
rt.InvalidReference = new rt("");
var Re = class {
    is(t) {
        if (Array.isArray(t)) return !1;
        let i = typeof t;
        return i === "function" || i === "object";
    }
    getType() {
        return "factory method or object";
    }
}, st = class {
    constructor(t, e){
        this.mt = t, this.typeOf = typeof e;
    }
    is(t) {
        return Array.isArray(t) ? !1 : typeof t === this.typeOf;
    }
    getType() {
        return this.mt;
    }
}, re = class {
    constructor(t, e){
        this.mt = t, this.typeOf = typeof e;
    }
    is(t) {
        return Array.isArray(t) ? t.length > 0 ? t.every((e)=>typeof e === this.typeOf) : !0 : !1;
    }
    getType() {
        return this.mt;
    }
}, Ct = class extends st {
    constructor(t){
        super(`number with minimum value of ${t}`, 0), this.min = t;
    }
    is(t) {
        return typeof t === this.typeOf && t >= this.min;
    }
}, se = class extends st {
    constructor(t){
        super(`string matching ${t}`, ""), this.expression = t;
    }
    is(t) {
        return typeof t == "string" && !!t.match(this.expression);
    }
}, Ne = class {
    is(t) {
        return typeof t == "function";
    }
    getType() {
        return "function";
    }
}, Ue = class {
    is(t) {
        return typeof t == "boolean" || typeof t == "undefined" || t === null;
    }
    getType() {
        return "boolean | undefined | null";
    }
}, Lr = /^\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d(\.\d\d*)?(Z|[-+]\d\d(:\d\d)?)/, ze = class {
    is(t) {
        return typeof t == "number" || typeof t == "string" && Lr.test(t);
    }
    getType() {
        return "date";
    }
}, je = class extends se {
    constructor(){
        super(/^(\w|\.|-)+$/);
    }
    is(t) {
        return super.is(t) && t !== "kind";
    }
}, _e = class {
    constructor(t){
        this.Zt = t;
    }
    is(t) {
        return typeof t == "string" && this.Zt.includes(t);
    }
    getType() {
        return this.Zt.join(" | ");
    }
};
function Y(n) {
    return n == null;
}
var p = class {
    static createTypeArray(t, e) {
        return new re(t, e);
    }
    static numberWithMin(t) {
        return new Ct(t);
    }
    static stringMatchingRegex(t) {
        return new se(t);
    }
    static oneOf(...t) {
        return new _e(t);
    }
};
p.String = new st("string", "");
p.Number = new st("number", 0);
p.ObjectOrFactory = new Re;
p.Object = new st("object", {});
p.StringArray = new re("string[]", "");
p.Boolean = new st("boolean", !0);
p.Function = new Ne;
p.Date = new ze;
p.Kind = new je;
p.NullableBoolean = new Ue;
function si(n) {
    return "kind" in n ? p.String.is(n.kind) && n.kind !== "multi" : !1;
}
function ai(n) {
    return "kind" in n ? p.String.is(n.kind) && n.kind === "multi" : !1;
}
function oi(n) {
    return !("kind" in n) || n.kind === null || n.kind === void 0;
}
function ae(n, t = []) {
    if (n === null || typeof n != "object") return JSON.stringify(n);
    if (t.includes(n)) throw new Error("Cycle detected");
    return Array.isArray(n) ? `[${n.map((r)=>ae(r, [
            ...t,
            n
        ])).map((r)=>r === void 0 ? "null" : r).join(",")}]` : `{${Object.keys(n).sort().map((i)=>{
        let r = ae(n[i], [
            ...t,
            n
        ]);
        if (r !== void 0) return `${JSON.stringify(i)}:${r}`;
    }).filter((i)=>i !== void 0).join(",")}}`;
}
var Ve = "user";
function Yn(n) {
    return n.includes("%") || n.includes(":") ? n.replace(/%/g, "%25").replace(/:/g, "%3A") : n;
}
function Ar(n) {
    return n && p.Object.is(n);
}
function Zn(n) {
    return p.Kind.is(n);
}
function Xn(n) {
    return p.String.is(n) && n !== "";
}
function Fe(n, t = !1) {
    return n ? n.map((e)=>new rt(e, t)) : [];
}
function Tr(n) {
    return n != null;
}
function Or(n) {
    let t = U(b({}, n.custom || []), {
        kind: "user",
        key: String(n.key)
    });
    if (Tr(n.anonymous)) {
        let e = !!n.anonymous;
        delete t.anonymous, t.anonymous = e;
    }
    return n.name !== null && n.name !== void 0 && (t.name = n.name), n.ip !== null && n.ip !== void 0 && (t.ip = n.ip), n.firstName !== null && n.firstName !== void 0 && (t.firstName = n.firstName), n.lastName !== null && n.lastName !== void 0 && (t.lastName = n.lastName), n.email !== null && n.email !== void 0 && (t.email = n.email), n.avatar !== null && n.avatar !== void 0 && (t.avatar = n.avatar), n.country !== null && n.country !== void 0 && (t.country = n.country), n.privateAttributeNames !== null && n.privateAttributeNames !== void 0 && (t._meta = {
        privateAttributes: n.privateAttributeNames
    }), t;
}
var J = class n {
    constructor(t, e, i){
        this.P = !1, this.Q = !1, this.Xt = !1, this.M = {}, this.kind = e, this.valid = t, this.message = i;
    }
    static D(t, e) {
        return new n(!1, t, e);
    }
    static Re(t, e) {
        if (!(!e || !t.isValid)) return t.depth === 1 && t.getComponent(0) === "anonymous" ? !!(e != null && e.anonymous) : t.get(e);
    }
    Qt(t) {
        if (this.P) return this.M[t];
        if (this.kind === t) return this.v;
    }
    static Ne(t) {
        let e = Object.keys(t).filter((c)=>c !== "kind"), i = e.every(Zn);
        if (!e.length) return n.D("multi", "A multi-kind context must contain at least one kind");
        if (!i) return n.D("multi", "Context contains invalid kinds");
        let r = {}, s = !0, a = e.reduce((c, u)=>{
            var d;
            let l = t[u];
            return Ar(l) ? (c[u] = l, r[u] = Fe((d = l._meta) == null ? void 0 : d.privateAttributes)) : s = !1, c;
        }, {});
        if (!s) return n.D("multi", "Context contained contexts that were not objects");
        if (!Object.values(a).every((c)=>Xn(c.key))) return n.D("multi", "Context contained invalid keys");
        if (e.length === 1) {
            let c = e[0], u = new n(!0, c);
            return u.v = U(b({}, a[c]), {
                kind: c
            }), u.tt = r, u.Q = c === "user", u;
        }
        let o = new n(!0, t.kind);
        return o.M = a, o.tt = r, o.P = !0, o;
    }
    static Ue(t) {
        var c;
        let { key: e, kind: i } = t, r = Zn(i), s = Xn(e);
        if (!r) return n.D(i != null ? i : "unknown", "The kind was not valid for the context");
        if (!s) return n.D(i, "The key for the context was not valid");
        let a = Fe((c = t._meta) == null ? void 0 : c.privateAttributes), o = new n(!0, i);
        return o.Q = i === "user", o.v = t, o.tt = {
            [i]: a
        }, o;
    }
    static ze(t) {
        if (!(t.key !== void 0 && t.key !== null)) return n.D("user", "The key for the context was not valid");
        let i = new n(!0, "user");
        return i.Q = !0, i.Xt = !0, i.v = Or(t), i.tt = {
            user: Fe(t.privateAttributeNames, !0)
        }, i;
    }
    static fromLDContext(t) {
        return t ? si(t) ? n.Ue(t) : ai(t) ? n.Ne(t) : oi(t) ? n.ze(t) : n.D("unknown", "Context was not of a valid kind") : n.D("unknown", "No context specified. Returning default value");
    }
    static toLDContext(t) {
        if (!t.valid) return;
        let e = t.getContexts();
        if (!t.P) return e[0][1];
        let i = {
            kind: "multi"
        };
        return e.forEach((r)=>{
            let s = r[0], a = r[1];
            i[s] = a;
        }), i;
    }
    valueForKind(t, e = Ve) {
        return t.isKind ? this.kinds : n.Re(t, this.Qt(e));
    }
    key(t = Ve) {
        var e;
        return (e = this.Qt(t)) == null ? void 0 : e.key;
    }
    get isMultiKind() {
        return this.P;
    }
    get canonicalKey() {
        return this.Q ? this.v.key : this.P ? Object.keys(this.M).sort().map((t)=>`${t}:${Yn(this.M[t].key)}`).join(":") : `${this.kind}:${Yn(this.v.key)}`;
    }
    get kinds() {
        return this.P ? Object.keys(this.M) : [
            this.kind
        ];
    }
    get kindsAndKeys() {
        return this.P ? Object.entries(this.M).reduce((t, [e, i])=>(t[e] = i.key, t), {}) : {
            [this.kind]: this.v.key
        };
    }
    privateAttributes(t) {
        var e;
        return ((e = this.tt) == null ? void 0 : e[t]) || [];
    }
    getContexts() {
        return this.P ? Object.entries(this.M) : [
            [
                this.kind,
                this.v
            ]
        ];
    }
    get legacy() {
        return this.Xt;
    }
    canonicalUnfilteredJson() {
        if (this.valid) {
            if (this.yt) return this.yt;
            try {
                this.yt = ae(n.toLDContext(this));
            } catch (t) {}
            return this.yt;
        }
    }
};
J.UserKind = Ve;
var Mr = [
    "key",
    "kind",
    "_meta",
    "anonymous"
].map((n)=>new rt(n, !0)), Fr = [
    "name",
    "ip",
    "firstName",
    "lastName",
    "email",
    "avatar",
    "country"
];
function $r(n, t) {
    return n.depth === t.length && t.every((e, i)=>e === n.getComponent(i));
}
function Rr(n, t) {
    let e = [], i = {}, r = [];
    for(e.push(...Object.keys(n).map((s)=>({
            key: s,
            ptr: [
                s
            ],
            source: n,
            parent: i,
            visited: [
                n
            ]
        }))); e.length;){
        let s = e.pop(), a = t.find((o)=>$r(o, s.ptr));
        if (a) r.push(a.redactionName);
        else {
            let o = s.source[s.key];
            o === null ? s.parent[s.key] = o : Array.isArray(o) ? s.parent[s.key] = [
                ...o
            ] : typeof o == "object" ? s.visited.includes(o) || (s.parent[s.key] = {}, e.push(...Object.keys(o).map((c)=>({
                    key: c,
                    ptr: [
                        ...s.ptr,
                        c
                    ],
                    source: o,
                    parent: s.parent[s.key],
                    visited: [
                        ...s.visited,
                        o
                    ]
                })))) : s.parent[s.key] = o;
        }
    }
    return {
        cloned: i,
        excluded: r.sort()
    };
}
var Be = class {
    constructor(t, e){
        this.je = t, this._e = e;
    }
    filter(t, e = !1) {
        let i = t.getContexts();
        if (i.length === 1) return this.te(t, i[0][1], i[0][0], e);
        let r = {
            kind: "multi"
        };
        return i.forEach(([s, a])=>{
            r[s] = this.te(t, a, s, e);
        }), r;
    }
    Ve(t, e, i, r) {
        return (r ? Object.keys(e).map((s)=>new rt(s, !0)) : [
            ...this._e,
            ...t.privateAttributes(i)
        ]).filter((s)=>!Mr.some((a)=>a.compare(s)));
    }
    te(t, e, i, r) {
        let s = this.je || r && e.anonymous === !0, { cloned: a, excluded: o } = Rr(e, this.Ve(t, e, i, s));
        return t.legacy && Fr.forEach((c)=>{
            c in a && (a[c] = String(a[c]));
        }), o.length && (a._meta || (a._meta = {}), a._meta.redactedAttributes = o), a._meta && (delete a._meta.privateAttributes, Object.keys(a._meta).length === 0 && delete a._meta), a;
    }
}, Qn = 30000, Nr = .5, oe = class {
    constructor(t, e, i = Math.random){
        this.Be = e, this.He = i, this.gt = 0, this.ee = Math.max(1, t), this.qe = Math.ceil(Math.log2(Qn / this.ee));
    }
    x() {
        let t = Math.min(this.gt, this.qe), e = this.ee * 2 ** t;
        return Math.min(e, Qn);
    }
    Ge(t) {
        return t - Math.trunc(this.He() * Nr * t);
    }
    success(t = Date.now()) {
        this.vt = t;
    }
    fail(t = Date.now()) {
        this.vt !== void 0 && t - this.vt > this.Be && (this.gt = 0), this.vt = void 0;
        let e = this.Ge(this.x());
        return this.gt += 1, e;
    }
};
var ti;
(function(n) {
    n[n.Valid = 0] = "Valid", n[n.Initializing = 1] = "Initializing", n[n.Interrupted = 2] = "Interrupted", n[n.Closed = 3] = "Closed";
})(ti || (ti = {}));
var lt = class extends Error {
    constructor(t, e, i, r = !0){
        super(e), this.kind = t, this.status = i, this.name = "LaunchDarklyPollingError", this.recoverable = r;
    }
}, gt = class extends Error {
    constructor(t, e, i, r = !0){
        super(e), this.kind = t, this.code = i, this.name = "LaunchDarklyStreamingError", this.recoverable = r;
    }
};
var Xa = 120000, Qa = 300000;
var M;
(function(n) {
    n.Unknown = "UNKNOWN", n.NetworkError = "NETWORK_ERROR", n.ErrorResponse = "ERROR_RESPONSE", n.InvalidData = "INVALID_DATA";
})(M || (M = {}));
var vt;
(function(n) {
    n[n.Disabled = 0] = "Disabled", n[n.Enabled = 1] = "Enabled";
})(vt || (vt = {}));
var wt;
(function(n) {
    n[n.AnalyticsEvents = 0] = "AnalyticsEvents", n[n.DiagnosticEvent = 1] = "DiagnosticEvent";
})(wt || (wt = {}));
var ut;
(function(n) {
    n[n.Succeeded = 0] = "Succeeded", n[n.Failed = 1] = "Failed", n[n.FailedAndMustShutDown = 2] = "FailedAndMustShutDown";
})(ut || (ut = {}));
function yt(n) {
    if (typeof n == "string") return n;
    if (n === void 0) return "undefined";
    if (n === null) return "null";
    if (Object.prototype.hasOwnProperty.call(n, "toString")) try {
        return n.toString();
    } catch (t) {}
    if (typeof n == "bigint") return `${n}n`;
    try {
        return JSON.stringify(n);
    } catch (t) {
        return t instanceof TypeError && t.message.indexOf("circular") >= 0 ? "[Circular]" : "[Not Stringifiable]";
    }
}
function Ur(n) {
    return typeof n == "symbol" ? "NaN" : typeof n == "bigint" ? `${n}n` : String(Number(n));
}
function zr(n) {
    return typeof n == "symbol" ? "NaN" : typeof n == "bigint" ? `${n}n` : String(parseInt(n, 10));
}
function jr(n) {
    return typeof n == "symbol" ? "NaN" : String(parseFloat(n));
}
var ne = {
    s: (n)=>yt(n),
    d: (n)=>Ur(n),
    i: (n)=>zr(n),
    f: (n)=>jr(n),
    j: (n)=>yt(n),
    o: (n)=>yt(n),
    O: (n)=>yt(n),
    c: ()=>""
};
function He(...n) {
    var e;
    let t = n.shift();
    if (p.String.is(t)) {
        let i = "", r = 0;
        for(; r < t.length;){
            let s = t.charAt(r);
            if (s === "%") {
                if (r + 1 < t.length) {
                    let o = t.charAt(r + 1);
                    if (o in ne && n.length) {
                        let c = n.shift();
                        i += (e = ne[o]) == null ? void 0 : e.call(ne, c);
                    } else o === "%" ? i += "%" : i += `%${o}`;
                    r += 2;
                }
            } else i += s, r += 1;
        }
        return n.length && (i.length && (i += " "), i += n.map(yt).join(" ")), i;
    }
    return n.map(yt).join(" ");
}
var z;
(function(n) {
    n[n.debug = 0] = "debug", n[n.info = 1] = "info", n[n.warn = 2] = "warn", n[n.error = 3] = "error", n[n.none = 4] = "none";
})(z || (z = {}));
var _r = [
    "debug",
    "info",
    "warn",
    "error",
    "none"
], dt = class n {
    static get() {
        return new n({});
    }
    constructor(t){
        var e, i, r;
        if (this.tn = (i = z[(e = t.level) != null ? e : "info"]) != null ? i : z.info, this.en = (r = t.name) != null ? r : "LaunchDarkly", this.se = t.formatter, typeof t.destination == "object") this.ae = {
            [z.debug]: t.destination.debug,
            [z.info]: t.destination.info,
            [z.warn]: t.destination.warn,
            [z.error]: t.destination.error
        };
        else if (typeof t.destination == "function") {
            let { destination: s } = t;
            this.ae = {
                [z.debug]: s,
                [z.info]: s,
                [z.warn]: s,
                [z.error]: s
            };
        }
    }
    nn(...t) {
        var e;
        try {
            return this.se ? (e = this.se) == null ? void 0 : e.call(this, ...t) : He(...t);
        } catch (i) {
            return He(...t);
        }
    }
    rn(t, e) {
        try {
            t(e);
        } catch (i) {
            console.error(e);
        }
    }
    S(t, e) {
        var i;
        if (t >= this.tn) {
            let r = `${_r[t]}: [${this.en}]`;
            try {
                let s = (i = this.ae) == null ? void 0 : i[t];
                s ? this.rn(s, `${r} ${this.nn(...e)}`) : console.error(...e);
            } catch (s) {
                console.error(...e);
            }
        }
    }
    error(...t) {
        this.S(z.error, t);
    }
    warn(...t) {
        this.S(z.warn, t);
    }
    info(...t) {
        this.S(z.info, t);
    }
    debug(...t) {
        this.S(z.debug, t);
    }
}, Vr = {
    error: p.Function,
    warn: p.Function,
    info: p.Function,
    debug: p.Function
}, It = class {
    constructor(t, e){
        Object.entries(Vr).forEach(([i, r])=>{
            if (!r.is(t[i])) throw new Error(`Provided logger instance must support logger.${i}(...) method`);
        }), this.t = t, this.sn = e;
    }
    S(t, e) {
        try {
            this.t[t](...e);
        } catch (i) {
            this.sn[t](...e);
        }
    }
    error(...t) {
        this.S("error", t);
    }
    warn(...t) {
        this.S("warn", t);
    }
    info(...t) {
        this.S("info", t);
    }
    debug(...t) {
        this.S("debug", t);
    }
}, en = (n)=>{
    let t = new dt({
        level: "info",
        destination: console.error,
        formatter: He
    });
    return n ? new It(n, t) : t;
}, F = class {
    static deprecated(t, e) {
        return `"${t}" is deprecated, please use "${e}"`;
    }
    static optionBelowMinimum(t, e, i) {
        return `Config option "${t}" had invalid value of ${e}, using minimum of ${i} instead`;
    }
    static unknownOption(t) {
        return `Ignoring unknown config option "${t}"`;
    }
    static wrongOptionType(t, e, i) {
        return `Config option "${t}" should be of type ${e}, got ${i}, using default value`;
    }
    static wrongOptionTypeBoolean(t, e) {
        return `Config option "${t}" should be a boolean, got ${e}, converting to boolean`;
    }
    static invalidTagValue(t) {
        return `Config option "${t}" must only contain letters, numbers, ., _ or -.`;
    }
    static tagValueTooLong(t) {
        return `Value of "${t}" was longer than 64 characters and was discarded.`;
    }
    static partialEndpoint(t) {
        return `You have set custom uris without specifying the ${t} URI; connections may not work properly`;
    }
}, Br = /^(\w|\.|-)+$/, Hr = p.stringMatchingRegex(Br), qr = {
    is: (n, t)=>Hr.is(n) ? n.length > 64 ? {
            valid: !1,
            message: F.tagValueTooLong(t)
        } : {
            valid: !0
        } : {
            valid: !1,
            message: F.invalidTagValue(t)
        }
}, ce = class {
    constructor(t){
        let e = {}, i = t == null ? void 0 : t.application, r = t == null ? void 0 : t.logger;
        i && Object.entries(i).forEach(([a, o])=>{
            if (o != null) {
                let { valid: c, message: u } = qr.is(o, `application.${a}`);
                c ? a === "versionName" ? e["application-version-name"] = [
                    o
                ] : e[`application-${a}`] = [
                    o
                ] : r == null || r.warn(u);
            }
        });
        let s = Object.keys(e);
        s.length && (this.value = s.sort().flatMap((a)=>e[a].sort().map((o)=>`${a}/${o}`)).join(" "));
    }
}, ue = class {
    constructor(t, e, i){
        this.platform = i, this.basicConfiguration = {
            tags: e.tags,
            logger: e.logger,
            offline: e.offline,
            serviceEndpoints: e.serviceEndpoints,
            sdkKey: t
        };
    }
};
function $e(n) {
    return n.replace(/\/+$/, "");
}
function nn(n) {
    return n.replace(/^\/+/, "").replace(/\?$/, "");
}
var tt = class n {
    constructor(t, e, i = n.DEFAULT_EVENTS, r = "/bulk", s = "/diagnostic", a = !0, o){
        this.streaming = $e(t), this.polling = $e(e), this.events = $e(i), this.analyticsEventPath = r, this.diagnosticEventPath = s, this.includeAuthorizationHeader = a, this.payloadFilterKey = o;
    }
};
tt.DEFAULT_EVENTS = "https://events.launchdarkly.com";
function rn(n, t = []) {
    if (t.length === 0) return n;
    let e = t.map(({ key: i, value: r })=>`${i}=${r}`);
    return `${n}?${e.join("&")}`;
}
function sn(n, t, e) {
    let i = nn(t), r = [
        ...e
    ];
    return n.payloadFilterKey && r.push({
        key: "filter",
        value: n.payloadFilterKey
    }), rn(`${n.streaming}/${i}`, r);
}
function an(n, t, e = []) {
    let i = nn(t), r = [
        ...e
    ];
    return n.payloadFilterKey && r.push({
        key: "filter",
        value: n.payloadFilterKey
    }), rn(`${n.polling}/${i}`, r);
}
function ei(n, t, e = []) {
    let i = nn(t);
    return rn(`${n.events}/${i}`, e);
}
var Pt = class extends Error {
    constructor(t){
        super(t), this.name = "LaunchDarklyUnexpectedResponseError";
    }
}, le = class extends Error {
    constructor(t){
        super(t), this.name = "LaunchDarklyClientError";
    }
}, xt = class extends Error {
    constructor(t){
        super(t), this.name = "LaunchDarklyTimeoutError";
    }
};
function ht(n) {
    return n >= 400 && n < 500 ? n === 400 || n === 408 || n === 429 : !0;
}
function Gr(n) {
    return n === 413 ? !0 : ht(n);
}
function on(n, t) {
    let e, i;
    return {
        promise: new Promise((s, a)=>{
            i = s, e = setTimeout(()=>{
                let o = `${t} timed out after ${n} seconds.`;
                a(new xt(o));
            }, n * 1e3);
        }),
        cancel: ()=>{
            i(), clearTimeout(e);
        }
    };
}
function cn(n) {
    return n == null ? n : JSON.parse(JSON.stringify(n));
}
function ve(n) {
    return Math.trunc(n * 1e3);
}
var Kr = (n)=>JSON.stringify(n) === "{}", we = (n, t)=>n && Object.entries(n).reduce((e, [i, r])=>(r && !Kr(r) && !(t != null && t.includes(i)) && (e[i] = typeof r == "object" ? we(r, t) : r), e), {});
function kt(n, t) {
    if (n === t) return !0;
    if (n && t && typeof n == "object" && typeof t == "object") {
        if (n.constructor !== t.constructor) return !1;
        var e, i, r;
        if (Array.isArray(n)) {
            if (e = n.length, e != t.length) return !1;
            for(i = e; i-- !== 0;)if (!kt(n[i], t[i])) return !1;
            return !0;
        }
        if (n instanceof Map && t instanceof Map) {
            if (n.size !== t.size) return !1;
            for (i of n.entries())if (!t.has(i[0])) return !1;
            for (i of n.entries())if (!kt(i[1], t.get(i[0]))) return !1;
            return !0;
        }
        if (n instanceof Set && t instanceof Set) {
            if (n.size !== t.size) return !1;
            for (i of n.entries())if (!t.has(i[0])) return !1;
            return !0;
        }
        if (ArrayBuffer.isView(n) && ArrayBuffer.isView(t)) {
            if (e = n.length, e != t.length) return !1;
            for(i = e; i-- !== 0;)if (n[i] !== t[i]) return !1;
            return !0;
        }
        if (n.constructor === RegExp) return n.source === t.source && n.flags === t.flags;
        if (n.valueOf !== Object.prototype.valueOf) return n.valueOf() === t.valueOf();
        if (n.toString !== Object.prototype.toString) return n.toString() === t.toString();
        if (r = Object.keys(n), e = r.length, e !== Object.keys(t).length) return !1;
        for(i = e; i-- !== 0;)if (!Object.prototype.hasOwnProperty.call(t, r[i])) return !1;
        for(i = e; i-- !== 0;){
            var s = r[i];
            if (!kt(n[s], t[s])) return !1;
        }
        return !0;
    }
    return n !== n && t !== t;
}
function ci(n, t, e, i = !0, r = "user-agent", s) {
    let { userAgentBase: a, version: o, wrapperName: c, wrapperVersion: u } = t.sdkData(), l = {
        [r]: `${a != null ? a : "NodeJSClient"}/${o}`
    };
    return i && (l.authorization = n), c && (l["x-launchdarkly-wrapper"] = u ? `${c}/${u}` : c), e != null && e.value && (l["x-launchdarkly-tags"] = e.value), s && (l["x-launchdarkly-instance-id"] = s), l;
}
function G(n, t, e) {
    let i;
    n.status ? i = `error ${n.status}${n.status === 401 ? " (invalid SDK key)" : ""}` : i = `I/O error (${n.message || "unknown error"})`;
    let r = e != null ? e : "giving up permanently";
    return `Received ${i} for ${t} - ${r}`;
}
function At({ status: n }) {
    return n ? ht(n) : !0;
}
var Tt = (n, t)=>t.btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
var Ot = async (n = 1e3)=>new Promise((t)=>{
        setTimeout(t, n);
    });
var qe = class {
    constructor(t, e, i){
        this.a = e, this.an = i, this.Dt = [], this.oe = Date.now(), this.ce = this.oe, this.ue = {
            diagnosticId: e.crypto.randomUUID(),
            sdkKeySuffix: t.length > 6 ? t.substring(t.length - 6) : t
        };
    }
    createInitEvent() {
        var i, r, s;
        let t = this.a.info.sdkData(), e = this.a.info.platformData();
        return {
            kind: "diagnostic-init",
            id: this.ue,
            creationDate: this.oe,
            sdk: t,
            configuration: this.an,
            platform: b({
                name: e.name,
                osArch: (i = e.os) == null ? void 0 : i.arch,
                osName: (r = e.os) == null ? void 0 : r.name,
                osVersion: (s = e.os) == null ? void 0 : s.version
            }, e.additional || {})
        };
    }
    recordStreamInit(t, e, i) {
        let r = {
            timestamp: t,
            failed: e,
            durationMillis: i
        };
        this.Dt.push(r);
    }
    createStatsEventAndReset(t, e, i) {
        let r = Date.now(), s = {
            kind: "diagnostic",
            id: this.ue,
            creationDate: r,
            dataSinceDate: this.ce,
            droppedEvents: t,
            deduplicatedUsers: e,
            eventsInLastBatch: i,
            streamInits: this.Dt
        };
        return this.Dt = [], this.ce = r, s;
    }
}, Ge;
(function(n) {
    n.MalformedFlag = "MALFORMED_FLAG", n.UserNotSpecified = "USER_NOT_SPECIFIED", n.FlagNotFound = "FLAG_NOT_FOUND", n.ClientNotReady = "CLIENT_NOT_READY", n.WrongType = "WRONG_TYPE";
})(Ge || (Ge = {}));
var Jr = Ge, de = class {
    static invalidMetricValue(t) {
        return `The track function was called with a non-numeric "metricValue" (${t}), only numeric metric values are supported.`;
    }
};
de.MissingContextKeyNoEvent = "Context was unspecified or had no key; event will not be sent";
var Ke = class {
    constructor(t, e){
        let { basicConfiguration: i, platform: r } = t, { serviceEndpoints: { analyticsEventPath: s, diagnosticEventPath: a } } = i, { crypto: o, requests: c } = r;
        this.cn = b({}, e), this.le = ei(i.serviceEndpoints, s, []), this.un = ei(i.serviceEndpoints, a, []), this.z = c, this.ln = o;
    }
    async nt(t, e, i, r) {
        let s = {
            status: ut.Succeeded
        }, a = U(b({}, this.cn), {
            "content-type": "application/json"
        });
        i && (a["x-launchdarkly-payload-id"] = i, a["x-launchDarkly-event-schema"] = "4");
        let o;
        try {
            let { status: c, headers: u } = await this.z.fetch(e, {
                headers: a,
                body: JSON.stringify(t),
                compressBodyIfPossible: !0,
                method: "POST",
                keepalive: !0
            }), l = Date.parse(u.get("date") || "");
            if (l && (s.serverTime = l), c <= 204) return s;
            if (o = new Pt(G({
                status: c,
                message: "some events were dropped"
            }, "event posting")), !ht(c)) return Gr(c) ? s.status = ut.Failed : s.status = ut.FailedAndMustShutDown, s.error = o, s;
        } catch (c) {
            o = c;
        }
        return o && !r ? (s.status = ut.Failed, s.error = o, s) : (await Ot(), this.nt(t, this.le, i, !1));
    }
    async sendEventData(t, e) {
        let i = t === wt.AnalyticsEvents ? this.ln.randomUUID() : void 0, r = t === wt.AnalyticsEvents ? this.le : this.un;
        return this.nt(e, r, i, !0);
    }
};
function he(n) {
    return n.kind === "feature";
}
function Wr(n) {
    return n.kind === "identify";
}
function Yr(n) {
    return n.kind === "migration_op";
}
var Je = class {
    constructor(t, e, i, r, s, a){
        this.count = t, this.key = e, this.value = i, this.version = s, this.variation = a, this.default = r;
    }
    increment() {
        this.count += 1;
    }
};
function Zr(n) {
    return `${n.key}:${n.variation !== null && n.variation !== void 0 ? n.variation : ""}:${n.version !== null && n.version !== void 0 ? n.version : ""}`;
}
var fe = class {
    constructor(t = !1, e){
        this.dn = t, this.k = e, this.K = 0, this.it = 0, this.rt = {}, this.st = {};
    }
    summarizeEvent(t) {
        if (he(t) && !t.excludeFromSummaries) {
            this.v || (this.v = t.context);
            let e = Zr(t), i = this.rt[e], r = this.st[t.key];
            r || (r = new Set, this.st[t.key] = r), t.context.kinds.forEach((s)=>r.add(s)), i ? i.increment() : this.rt[e] = new Je(1, t.key, t.value, t.default, t.version, t.variation), (this.K === 0 || t.creationDate < this.K) && (this.K = t.creationDate), t.creationDate > this.it && (this.it = t.creationDate);
        }
    }
    getSummary() {
        var i;
        let t = Object.values(this.rt).reduce((r, s)=>{
            let a = r[s.key];
            a || (a = {
                default: s.default,
                counters: [],
                contextKinds: [
                    ...this.st[s.key]
                ]
            }, r[s.key] = a);
            let o = {
                value: s.value,
                count: s.count
            };
            return s.variation !== void 0 && s.variation !== null && (o.variation = s.variation), s.version !== void 0 && s.version !== null ? o.version = s.version : o.unknown = !0, a.counters.push(o), r;
        }, {}), e = {
            startDate: this.K,
            endDate: this.it,
            features: t,
            kind: "summary",
            context: this.v !== void 0 && this.dn ? (i = this.k) == null ? void 0 : i.filter(this.v) : void 0
        };
        return this.hn(), e;
    }
    hn() {
        this.K = 0, this.it = 0, this.rt = {}, this.st = {};
    }
}, We = class extends Error {
    constructor(t){
        super(t), this.name = "LaunchDarklyInvalidSDKKeyError";
    }
}, Ye = class {
    constructor(t, e){
        this.k = t, this.t = e, this.J = {};
    }
    summarizeEvent(t) {
        var e;
        if (he(t)) {
            let i = t.context.canonicalUnfilteredJson();
            if (!i) {
                t.context.valid && ((e = this.t) == null || e.error("Unable to serialize context, likely the context contains a cycle."));
                return;
            }
            let r = this.J[i];
            r || (this.J[i] = new fe(!0, this.k), r = this.J[i]), r.summarizeEvent(t);
        }
    }
    getSummaries() {
        let t = this.J;
        return this.J = {}, Object.values(t).map((e)=>e.getSummary());
    }
};
function ie(n) {
    let t = Math.trunc(n);
    return t === 1 ? !0 : t === 0 ? !1 : Math.floor(Math.random() * t) === 0;
}
function Xr(n) {
    return n.getSummaries !== void 0;
}
var Ze = class {
    constructor(t, e, i, r, s, a = !0, o = !1){
        this.e = t, this.at = r, this.C = s, this.ot = [], this.de = 0, this.St = 0, this.kt = 0, this.Ct = !1, this.he = 0, this.It = !1, this.Pt = null, this.fn = t.eventsCapacity, this.t = e.basicConfiguration.logger, this.fe = new Ke(e, i), this.k = new Be(t.allAttributesPrivate, t.privateAttributes.map((c)=>new rt(c))), o ? this.W = new Ye(this.k, this.t) : this.W = new fe, a && this.start();
    }
    start() {
        var t, e;
        if (((t = this.at) == null ? void 0 : t.flushInterval) !== void 0 && (this.Pt = setInterval(()=>{
            var i;
            (i = this.at) == null || i.flush();
        }, this.at.flushInterval * 1e3)), this.pn = setInterval(async ()=>{
            var i;
            try {
                await this.flush();
            } catch (r) {
                (i = this.t) == null || i.debug(`Flush failed: ${r}`);
            }
        }, this.e.flushInterval * 1e3), this.C) {
            let i = this.C.createInitEvent();
            this.pe(i), this.me = setInterval(()=>{
                let r = this.C.createStatsEventAndReset(this.St, this.kt, this.he);
                this.St = 0, this.kt = 0, this.pe(r);
            }, this.e.diagnosticRecordingInterval * 1e3);
        }
        (e = this.t) == null || e.debug("Started EventProcessor.");
    }
    pe(t) {
        this.fe.sendEventData(wt.DiagnosticEvent, t);
    }
    close() {
        clearInterval(this.pn), this.Pt && clearInterval(this.Pt), this.me && clearInterval(this.me);
    }
    async flush() {
        var e;
        if (this.It) throw new We("Events cannot be posted because a permanent error has been encountered. This is most likely an invalid SDK key. The specific error information is logged independently.");
        let t = this.ot;
        if (this.ot = [], Xr(this.W)) this.W.getSummaries().forEach((r)=>{
            Object.keys(r.features).length && t.push(r);
        });
        else {
            let i = this.W.getSummary();
            Object.keys(i.features).length && t.push(i);
        }
        t.length && (this.he = t.length, (e = this.t) == null || e.debug("Flushing %d events", t.length), await this.nt(t));
    }
    sendEvent(t) {
        var c, u;
        if (this.It) return;
        if (Yr(t)) {
            if (ie(t.samplingRatio)) {
                let l = U(b({}, t), {
                    context: t.context ? this.k.filter(t.context, (c = this.e.redactAnonymousAllEvents) != null ? c : !1) : void 0
                });
                l.samplingRatio === 1 && delete l.samplingRatio, this.ct(l);
            }
            return;
        }
        this.W.summarizeEvent(t);
        let e = he(t), i = e && t.trackEvents || !e, r = this.mn(t), s = Wr(t), a = (u = this.at) == null ? void 0 : u.processContext(t.context);
        a || s || (this.kt += 1), a && !s && this.ct(this.xt({
            kind: "index",
            creationDate: t.creationDate,
            context: t.context,
            samplingRatio: 1
        }, !1)), i && ie(t.samplingRatio) && this.ct(this.xt(t, !1)), r && ie(t.samplingRatio) && this.ct(this.xt(t, !0));
    }
    xt(t, e) {
        var i;
        switch(t.kind){
            case "feature":
                {
                    let r = {
                        kind: e ? "debug" : "feature",
                        creationDate: t.creationDate,
                        context: this.k.filter(t.context, !e),
                        key: t.key,
                        value: t.value,
                        default: t.default
                    };
                    return t.samplingRatio !== 1 && (r.samplingRatio = t.samplingRatio), t.prereqOf && (r.prereqOf = t.prereqOf), t.variation !== void 0 && (r.variation = t.variation), t.version !== void 0 && (r.version = t.version), t.reason && (r.reason = t.reason), r;
                }
            case "index":
            case "identify":
                {
                    let r = {
                        kind: t.kind,
                        creationDate: t.creationDate,
                        context: this.k.filter(t.context)
                    };
                    return t.samplingRatio !== 1 && (r.samplingRatio = t.samplingRatio), r;
                }
            case "custom":
                {
                    let r = {
                        kind: "custom",
                        creationDate: t.creationDate,
                        key: t.key,
                        context: this.k.filter(t.context, (i = this.e.redactAnonymousAllEvents) != null ? i : !1)
                    };
                    return t.samplingRatio !== 1 && (r.samplingRatio = t.samplingRatio), t.data !== void 0 && (r.data = t.data), t.metricValue !== void 0 && (r.metricValue = t.metricValue), t.url !== void 0 && (r.url = t.url), r;
                }
            case "click":
                return {
                    kind: "click",
                    creationDate: t.creationDate,
                    contextKeys: t.context.kindsAndKeys,
                    key: t.key,
                    url: t.url,
                    selector: t.selector
                };
            case "pageview":
                return {
                    kind: "pageview",
                    creationDate: t.creationDate,
                    contextKeys: t.context.kindsAndKeys,
                    key: t.key,
                    url: t.url
                };
            default:
                return t;
        }
    }
    ct(t) {
        var e;
        this.ot.length < this.fn ? (this.ot.push(t), this.Ct = !1) : (this.Ct || (this.Ct = !0, (e = this.t) == null || e.warn("Exceeded event queue capacity. Increase capacity to avoid dropping events.")), this.St += 1);
    }
    mn(t) {
        return he(t) && t.debugEventsUntilDate && t.debugEventsUntilDate > this.de && t.debugEventsUntilDate > Date.now();
    }
    async nt(t) {
        let e = await this.fe.sendEventData(wt.AnalyticsEvents, t);
        if (e.status === ut.FailedAndMustShutDown && (this.It = !0), e.serverTime && (this.de = e.serverTime), e.error) throw e.error;
    }
}, pe = class {
    constructor(t, e, i, r, s = 1, a){
        this.context = t, this.key = e, this.data = i, this.metricValue = r, this.samplingRatio = s, this.url = a, this.kind = "custom", this.creationDate = Date.now(), this.context = t;
    }
}, Lt = class {
    constructor(t, e, i, r, s, a, o, c, u, l, d, f, m = 1){
        this.withReasons = t, this.context = e, this.key = i, this.samplingRatio = m, this.kind = "feature", this.creationDate = Date.now(), this.value = r, this.default = s, a !== void 0 && (this.version = a), o !== void 0 && (this.variation = o), c !== void 0 && (this.trackEvents = c), u !== void 0 && (this.prereqOf = u), l !== void 0 && (this.reason = l), d !== void 0 && (this.debugEventsUntilDate = d), f !== void 0 && (this.excludeFromSummaries = f);
    }
}, me = class {
    constructor(t, e = 1){
        this.context = t, this.samplingRatio = e, this.kind = "identify", this.creationDate = Date.now();
    }
}, Xe = class {
    close() {}
    async flush() {}
    sendEvent() {}
}, Qe = class {
    constructor(t){
        this.Lt = t;
    }
    evalEvent(t) {
        var e;
        return new Lt(this.Lt, t.context, t.flagKey, t.value, t.defaultVal, t.version, (e = t.variation) != null ? e : void 0, t.trackEvents || t.addExperimentData, t.prereqOfFlagKey, this.Lt || t.addExperimentData ? t.reason : void 0, t.debugEventsUntilDate, t.excludeFromSummaries, t.samplingRatio);
    }
    unknownFlagEvent(t, e, i) {
        return new Lt(this.Lt, i, t, e, e, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0);
    }
    identifyEvent(t) {
        return new me(t, 1);
    }
    customEvent(t, e, i, r, s = 1) {
        return new pe(e, t, i != null ? i : void 0, r != null ? r : void 0, s);
    }
}, ni = "FDv1Fallback";
function Qr(n) {
    return {
        yn: n,
        ye: "",
        useSelector (t) {
            return this.ye = t, this;
        },
        processFullTransfer (t) {
            let e = [
                {
                    event: "server-intent",
                    data: {
                        payloads: [
                            {
                                id: ni,
                                target: 1,
                                intentCode: "xfer-full",
                                reason: "payload-missing"
                            }
                        ]
                    }
                }
            ];
            Object.entries((t == null ? void 0 : t.flags) || []).forEach(([i, r])=>{
                e.push({
                    event: "put-object",
                    data: {
                        kind: "flag",
                        key: i,
                        version: r.version || 1,
                        object: r
                    }
                });
            }), Object.entries((t == null ? void 0 : t.segments) || []).forEach(([i, r])=>{
                e.push({
                    event: "put-object",
                    data: {
                        kind: "segment",
                        key: i,
                        version: r.version || 1,
                        object: r
                    }
                });
            }), e.push({
                event: "payload-transferred",
                data: {
                    state: this.ye,
                    version: 1,
                    id: ni
                }
            }), this.yn.processEvents(e);
        }
    };
}
var H = {
    type: "none"
};
function ui(n, t) {
    let e = "inactive", i = "partial", r = [];
    function s(h, y) {
        var S;
        return (S = n[h]) == null ? void 0 : S.call(n, y);
    }
    function a() {
        e = "inactive", i = "partial", r = [];
    }
    function o() {
        e = "changes", i = "partial", r = [];
    }
    function c() {
        r = [];
    }
    function u(h) {
        return Y(h.target) ? (t == null || t.warn(`Ignoring 'none' intent with missing fields: target=${h.target}`), H) : {
            type: "payload",
            payload: {
                version: h.target,
                type: "none",
                updates: []
            }
        };
    }
    function l(h) {
        var S;
        if (!((S = h.payloads) != null && S.length)) return {
            type: "error",
            kind: "MISSING_PAYLOAD",
            message: "No payload present in server-intent"
        };
        let y = h.payloads[0];
        switch(y == null ? void 0 : y.intentCode){
            case "xfer-full":
                return e = "full", r = [], i = "full", H;
            case "xfer-changes":
                return e = "changes", r = [], i = "partial", H;
            case "none":
                return e = "changes", r = [], i = "partial", u(y);
            default:
                return t == null || t.warn(`Unable to process intent code '${y == null ? void 0 : y.intentCode}'.`), H;
        }
    }
    function d(h) {
        if (e === "inactive") return t == null || t.warn("Received put-object before server-intent was established. Ignoring."), H;
        if (!h.kind || !h.key || Y(h.version) || !h.object) return t == null || t.warn(`Ignoring put-object with missing fields: kind=${h.kind}, key=${h.key}, version=${h.version}`), H;
        let y = s(h.kind, h.object);
        return y ? (r.push({
            kind: h.kind,
            key: h.key,
            version: h.version,
            object: y
        }), H) : (t == null || t.warn(`Unable to process object for kind: '${h.kind}'`), H);
    }
    function f(h) {
        return e === "inactive" ? (t == null || t.warn("Received delete-object before server-intent was established. Ignoring."), H) : !h.kind || !h.key || Y(h.version) ? (t == null || t.warn(`Ignoring delete-object with missing fields: kind=${h.kind}, key=${h.key}, version=${h.version}`), H) : (r.push({
            kind: h.kind,
            key: h.key,
            version: h.version,
            deleted: !0
        }), H);
    }
    function m(h) {
        if (e === "inactive") return {
            type: "error",
            kind: "PROTOCOL_ERROR",
            message: "A payload transferred has been received without an intent having been established."
        };
        if (Y(h.state) || Y(h.version)) return t == null || t.warn(`Ignoring payload-transferred with missing fields: state=${h.state}, version=${h.version}`), a(), H;
        let y = {
            type: "payload",
            payload: {
                version: h.version,
                state: h.state,
                type: i,
                updates: r
            }
        };
        return o(), y;
    }
    function w(h) {
        return t == null || t.info(`Goodbye was received from the LaunchDarkly connection with reason: ${h.reason}.`), a(), {
            type: "goodbye",
            reason: h.reason
        };
    }
    function v(h) {
        return t == null || t.info(`An issue was encountered receiving updates with reason: ${h.reason}.`), c(), {
            type: "serverError",
            id: h.payload_id,
            reason: h.reason
        };
    }
    return {
        get state () {
            return e;
        },
        processEvent (h) {
            switch(h.event){
                case "server-intent":
                    return l(h.data);
                case "put-object":
                    return d(h.data);
                case "delete-object":
                    return f(h.data);
                case "payload-transferred":
                    return m(h.data);
                case "goodbye":
                    return w(h.data);
                case "error":
                    return v(h.data);
                case "heart-beat":
                    return H;
                default:
                    return {
                        type: "error",
                        kind: "UNKNOWN_EVENT",
                        message: `Received an unknown event of type '${h.event}'`
                    };
            }
        },
        reset () {
            a();
        }
    };
}
function ts(n) {
    return n === "MISSING_PAYLOAD" || n === "PROTOCOL_ERROR";
}
var ye = class {
    constructor(t, e, i){
        this.m = e, this.t = i, this.n = [], this.gn = ui(t, i);
    }
    addPayloadListener(t) {
        this.n.push(t);
    }
    removePayloadListener(t) {
        let e = this.n.indexOf(t, 0);
        e > -1 && this.n.splice(e, 1);
    }
    processEvents(t) {
        t.forEach((e)=>{
            var r, s;
            let i = this.gn.processEvent(e);
            switch(i.type){
                case "payload":
                    this.n.forEach((a)=>a(i.payload));
                    break;
                case "error":
                    ts(i.kind) ? (r = this.m) == null || r.call(this, M.InvalidData, i.message) : (s = this.t) == null || s.warn(i.message);
                    break;
            }
        });
    }
}, tn = class {
    constructor(t, e, i, r){
        this.m = i, this.t = r, this._(t, "server-intent"), this._(t, "put-object"), this._(t, "delete-object"), this._(t, "payload-transferred"), this._(t, "goodbye"), this._(t, "error"), this.At = new ye(e, i, r);
    }
    addPayloadListener(t) {
        this.At.addPayloadListener(t);
    }
    removePayloadListener(t) {
        this.At.removePayloadListener(t);
    }
    _(t, e) {
        t.addEventListener(e, async (i)=>{
            var r, s, a, o, c;
            if (i != null && i.data) {
                (r = this.t) == null || r.debug(`Received ${e} event.  Data is ${i.data}`);
                try {
                    this.At.processEvents([
                        {
                            event: e,
                            data: JSON.parse(i.data)
                        }
                    ]);
                } catch (u) {
                    (s = this.t) == null || s.error(`Stream received data that was unable to be processed in "${e}" message`), (a = this.t) == null || a.debug(`Data follows: ${i.data}`), (o = this.m) == null || o.call(this, M.InvalidData, "Malformed data in EventStream.");
                }
            } else (c = this.m) == null || c.call(this, M.Unknown, "Event from EventStream missing data.");
        });
    }
};
function es(n) {
    if (n) {
        let t = Object.keys(n).find((e)=>e.toLowerCase() === "x-ld-envid");
        if (t) return {
            environmentId: n[t]
        };
    }
}
var ii = "unknown plugin";
function ge(n, t) {
    try {
        return t.getMetadata().name || ii;
    } catch (e) {
        return n.error("Exception thrown getting metadata for plugin. Unable to get plugin name."), ii;
    }
}
function ns(n, t, e) {
    let i = [];
    return e.forEach((r)=>{
        var s;
        try {
            let a = (s = r.getHooks) == null ? void 0 : s.call(r, t);
            a === void 0 ? n.error(`Plugin ${ge(n, r)} returned undefined from getHooks.`) : a && a.length > 0 && i.push(...a);
        } catch (a) {
            n.error(`Exception thrown getting hooks for plugin ${ge(n, r)}. Unable to get hooks.`);
        }
    }), i;
}
function is(n, t, e, i) {
    i.forEach((r)=>{
        try {
            r.register(e, t);
        } catch (s) {
            n.error(`Exception thrown registering plugin ${ge(n, r)}.`);
        }
    });
}
var _ = Object.freeze({
    __proto__: null,
    ClientMessages: de,
    DiagnosticsManager: qe,
    ErrorKinds: Jr,
    EventFactoryBase: Qe,
    EventProcessor: Ze,
    FDv1PayloadAdaptor: Qr,
    InputCustomEvent: pe,
    InputEvalEvent: Lt,
    InputIdentifyEvent: me,
    NullEventProcessor: Xe,
    PayloadProcessor: ye,
    PayloadStreamReader: tn,
    canonicalize: ae,
    createProtocolHandler: ui,
    initMetadataFromHeaders: es,
    isLegacyUser: oi,
    isMultiKind: ai,
    isSingleKind: si,
    safeGetHooks: ns,
    safeGetName: ge,
    safeRegisterPlugins: is,
    shouldSample: ie
});
var kn = {
    Initializing: "INITIALIZING",
    Valid: "VALID",
    Interrupted: "INTERRUPTED",
    SetOffline: "SET_OFFLINE",
    Closed: "CLOSED"
};
function ss(n) {
    return n >= 200 && n <= 299;
}
var Ee = class extends Error {
    constructor(t, e){
        super(t), this.status = e, this.name = "LaunchDarklyRequestError";
    }
};
function Ce(n, t, e, i, r, s, a, o, c, u) {
    let l, d = "GET", f = b({}, s);
    c && (d = "REPORT", f["content-type"] = "application/json", l = n);
    let m = c ? e.pathReport(r, n) : e.pathGet(r, n), w = [
        ...a != null ? a : []
    ];
    o && w.push({
        key: "withReasons",
        value: "true"
    }), u && w.push({
        key: "h",
        value: u
    });
    let v = an(t, m, w);
    return {
        async requestPayload () {
            let h;
            try {
                let y = await i.fetch(v, {
                    method: d,
                    headers: f,
                    body: l
                });
                if (ss(y.status)) return await y.text();
                h = y.status;
            } catch (y) {
                throw new Ee(y == null ? void 0 : y.message);
            }
            throw new Ee(`Unexpected status code: ${h}`, h);
        }
    };
}
var li = new Error("Task has already been executed or shed. This is likely an implementation error. The task will not be executed again.");
function as(n, t, e = !1) {
    let i, r = new Promise((o)=>{
        i = (c, u)=>{
            var l;
            try {
                (l = n.after) == null || l.call(n, c, u);
            } catch (d) {
                t == null || t.error(`Error in after callback: ${d}`);
            }
            o(c);
        };
    }), s = n.before ? n.before() : Promise.resolve(void 0), a = !1;
    return {
        execute: ()=>{
            a && (t == null || t.error(li)), a = !0, s.then((o)=>{
                n.execute(o).then((c)=>i({
                        status: "complete",
                        result: c
                    }, o)).catch((c)=>i({
                        status: "error",
                        error: c
                    }, o));
            }).catch((o)=>{
                t == null || t.error(o), i({
                    status: "error",
                    error: o
                }, void 0);
            });
        },
        shed: ()=>{
            a && (t == null || t.error(li)), a = !0, s.then((o)=>{
                i({
                    status: "shed"
                }, o);
            });
        },
        promise: r,
        sheddable: e
    };
}
function os(n) {
    let t, e = [];
    function i() {
        if (!t && e.length > 0) {
            let r = e.shift();
            t = r.promise.finally(()=>{
                t = void 0, i();
            }), r.execute();
        }
    }
    return {
        execute (r, s = !1) {
            var o, c;
            let a = as(r, n, s);
            return t ? ((o = e[e.length - 1]) != null && o.sheddable && ((c = e.pop()) == null || c.shed()), e.push(a)) : (t = a.promise.finally(()=>{
                t = void 0, i();
            }), a.execute()), a.promise;
        },
        pendingCount () {
            return e.length;
        }
    };
}
function Ci(n) {
    return "validate" in n;
}
function Ie(n, t, e, i, r) {
    let s = b({}, e);
    return Y(n) ? s : p.Object.is(n) ? (Object.entries(n).forEach(([a, o])=>{
        let c = t[a], u = r ? `${r}.${a}` : a;
        if (!c) {
            i == null || i.warn(F.unknownOption(u));
            return;
        }
        if (Y(o)) return;
        if (Ci(c)) {
            let d = c.validate(o, u, i, e[a]);
            d !== void 0 && (s[a] = d.value);
            return;
        }
        if (c.is(o)) {
            s[a] = o;
            return;
        }
        let l = c.getType();
        l === "boolean" ? (i == null || i.warn(F.wrongOptionTypeBoolean(u, typeof o)), s[a] = !!o) : l === "boolean | undefined | null" ? (i == null || i.warn(F.wrongOptionTypeBoolean(u, typeof o)), typeof o != "boolean" && typeof o != "undefined" && o !== null && (s[a] = !!o)) : c instanceof Ct && p.Number.is(o) ? (i == null || i.warn(F.optionBelowMinimum(u, o, c.min)), s[a] = c.min) : i == null || i.warn(F.wrongOptionType(u, l, typeof o));
    }), s) : (i == null || i.warn(F.wrongOptionType(r != null ? r : "config", "object", typeof n)), s);
}
function at(n, t) {
    var i;
    let e = t == null ? void 0 : t.defaults;
    return {
        is: (i = t == null ? void 0 : t.is) != null ? i : (r)=>p.Object.is(r),
        getType: ()=>"object",
        validate (r, s, a, o) {
            if (!p.Object.is(r)) {
                a == null || a.warn(F.wrongOptionType(s, "object", typeof r));
                return;
            }
            let c = e != null ? e : p.Object.is(o) ? o : {}, u = Ie(r, n, c, a, s);
            return Object.keys(u).length > 0 ? {
                value: u
            } : void 0;
        }
    };
}
function Ii(n, t) {
    return {
        is: (e)=>Array.isArray(e),
        getType: ()=>"array",
        validate (e, i, r) {
            if (!Array.isArray(e)) {
                r == null || r.warn(F.wrongOptionType(i, "array", typeof e));
                return;
            }
            let s = [];
            return e.forEach((a, o)=>{
                let c = `${i}[${o}]`;
                if (Y(a) || !p.Object.is(a)) {
                    r == null || r.warn(F.wrongOptionType(c, "object", typeof a));
                    return;
                }
                let u = a, l = u[n], d = typeof l == "string" ? t[l] : void 0;
                if (!d) {
                    let f = Object.keys(t).join(" | "), m = typeof l == "string" ? l : typeof l;
                    r == null || r.warn(F.wrongOptionType(`${c}.${n}`, f, m));
                    return;
                }
                s.push(Ie(u, d, {}, r, c));
            }), {
                value: s
            };
        }
    };
}
function cs(...n) {
    return {
        is: (t)=>n.some((e)=>e.is(t)),
        getType: ()=>n.map((t)=>t.getType()).join(" | "),
        validate (t, e, i, r) {
            let s = n.find((a)=>a.is(t));
            if (s) return Ci(s) ? s.validate(t, e, i, r) : {
                value: t
            };
            i == null || i.warn(F.wrongOptionType(e, this.getType(), typeof t));
        }
    };
}
function us(n, t, e) {
    let i = e == null ? void 0 : e.defaults;
    return {
        is: (r)=>p.Object.is(r),
        getType: ()=>"object",
        validate (r, s, a, o) {
            if (Y(r)) return;
            if (!p.Object.is(r)) {
                a == null || a.warn(F.wrongOptionType(s, "object", typeof r));
                return;
            }
            let c = r, u = {}, l = {};
            Object.keys(c).forEach((f)=>{
                n.is(f) ? (u[f] = c[f], l[f] = t) : a == null || a.warn(F.wrongOptionType(s, n.getType(), f));
            });
            let d = i != null ? i : p.Object.is(o) ? o : {};
            return {
                value: Ie(u, l, d, a, s)
            };
        }
    };
}
var di = 300, hi = 3600, Cn = p.oneOf("cache", "polling", "streaming"), In = p.oneOf("streaming", "polling", "offline", "one-shot", "background"), Pn = {
    pollingBaseUri: p.String,
    streamingBaseUri: p.String
}, ls = {
    type: Cn
}, Pi = {
    type: Cn,
    pollInterval: p.numberWithMin(30),
    endpoints: at(Pn)
}, xi = {
    type: Cn,
    initialReconnectDelay: p.numberWithMin(1),
    endpoints: at(Pn)
}, ds = Ii("type", {
    cache: ls,
    polling: Pi,
    streaming: xi
}), hs = Ii("type", {
    polling: Pi,
    streaming: xi
}), fs = {
    pollInterval: p.numberWithMin(30),
    endpoints: at(Pn)
}, ps = {
    initializers: ds,
    synchronizers: hs,
    fdv1Fallback: at(fs)
}, $t = {
    streaming: {
        initializers: [
            {
                type: "cache"
            },
            {
                type: "polling"
            }
        ],
        synchronizers: [
            {
                type: "streaming"
            },
            {
                type: "polling"
            }
        ],
        fdv1Fallback: {
            pollInterval: di
        }
    },
    polling: {
        initializers: [
            {
                type: "cache"
            }
        ],
        synchronizers: [
            {
                type: "polling"
            }
        ],
        fdv1Fallback: {
            pollInterval: di
        }
    },
    offline: {
        initializers: [
            {
                type: "cache"
            }
        ],
        synchronizers: []
    },
    "one-shot": {
        initializers: [
            {
                type: "cache"
            },
            {
                type: "polling"
            },
            {
                type: "streaming"
            }
        ],
        synchronizers: []
    },
    background: {
        initializers: [
            {
                type: "cache"
            }
        ],
        synchronizers: [
            {
                type: "polling",
                pollInterval: hi
            }
        ],
        fdv1Fallback: {
            pollInterval: hi
        }
    }
}, ms = us(In, at(ps));
function fi(n, t) {
    return p.Object.is(n) && n.type === t;
}
var ys = {
    type: p.oneOf("automatic"),
    lifecycle: p.Boolean,
    network: p.Boolean
}, gs = {
    type: p.oneOf("manual"),
    initialConnectionMode: In
}, vs = {
    backgroundConnectionMode: In,
    automaticModeSwitching: cs(p.Boolean, at(ys, {
        is: (n)=>fi(n, "automatic")
    }), at(gs, {
        is: (n)=>fi(n, "manual")
    })),
    connectionModes: ms
}, xn = {
    foregroundConnectionMode: "one-shot",
    backgroundConnectionMode: void 0,
    automaticModeSwitching: !1
};
function ws(n) {
    return typeof n == "object" && n !== null && "type" in n && n.type === "manual";
}
function Li(n, t) {
    var e;
    return ws(n.automaticModeSwitching) ? n.automaticModeSwitching.initialConnectionMode : (e = n.foregroundConnectionMode) != null ? e : t.foregroundConnectionMode;
}
function Es(n) {
    return {
        logger: p.Object,
        maxCachedContexts: p.numberWithMin(0),
        baseUri: p.String,
        streamUri: p.String,
        eventsUri: p.String,
        capacity: p.numberWithMin(1),
        diagnosticRecordingInterval: p.numberWithMin(2),
        flushInterval: p.numberWithMin(2),
        streamInitialReconnectDelay: p.numberWithMin(0),
        allAttributesPrivate: p.Boolean,
        debug: p.Boolean,
        diagnosticOptOut: p.Boolean,
        withReasons: p.Boolean,
        sendEvents: p.Boolean,
        pollInterval: p.numberWithMin(30),
        useReport: p.Boolean,
        privateAttributes: p.StringArray,
        disableCache: p.Boolean,
        applicationInfo: p.Object,
        wrapperName: p.String,
        wrapperVersion: p.String,
        payloadFilterKey: p.stringMatchingRegex(/^[a-zA-Z0-9](\w|\.|-)*$/),
        hooks: p.createTypeArray("Hook[]", {}),
        inspectors: p.createTypeArray("LDInspection", {}),
        cleanOldPersistentData: p.Boolean,
        dataSystem: n != null && n.dataSystemDefaults ? at(vs, {
            defaults: U(b({}, n.dataSystemDefaults), {
                connectionModes: $t
            })
        }) : p.Object
    };
}
var bs = 300, Ai = "https://clientsdk.launchdarkly.com", Ti = "https://clientstream.launchdarkly.com";
function Ds(n) {
    return n instanceof It ? n : en(n);
}
var hn = class {
    constructor(t = {}, e = {
        getImplementationHooks: ()=>[],
        credentialType: "mobileKey"
    }){
        var s, a, o;
        this.logger = en(), this.baseUri = Ai, this.eventsUri = tt.DEFAULT_EVENTS, this.streamUri = Ti, this.maxCachedContexts = 5, this.disableCache = !1, this.capacity = 100, this.diagnosticRecordingInterval = 900, this.flushInterval = 30, this.streamInitialReconnectDelay = 1, this.allAttributesPrivate = !1, this.debug = !1, this.diagnosticOptOut = !1, this.sendEvents = !0, this.sendLDHeaders = !0, this.useReport = !1, this.withReasons = !1, this.privateAttributes = [], this.pollInterval = bs, this.hooks = [], this.inspectors = [], this.logger = Ds(t.logger);
        let i = Es({
            dataSystemDefaults: e.dataSystemDefaults
        }), r = Ie(t, i, {}, this.logger);
        Object.entries(r).forEach(([c, u])=>{
            c !== "logger" && (this[c] = u);
        }), this.serviceEndpoints = new tt(this.streamUri, this.baseUri, this.eventsUri, e.analyticsEventPath, e.diagnosticEventPath, e.includeAuthorizationHeader, t.payloadFilterKey), this.useReport = (s = t.useReport) != null ? s : !1, this.tags = new ce({
            application: this.applicationInfo,
            logger: this.logger
        }), this.userAgentHeaderName = (a = e.userAgentHeaderName) != null ? a : "user-agent", this.trackEventModifier = (o = e.trackEventModifier) != null ? o : (c)=>c, this.credentialType = e.credentialType, this.getImplementationHooks = e.getImplementationHooks;
    }
};
async function Ln(n, t) {
    if (n.digest) return n.digest(t);
    if (n.asyncDigest) return n.asyncDigest(t);
    throw new Error("Platform must implement digest or asyncDigest");
}
var Oi = async (n, { crypto: t, storage: e }, i)=>{
    let r = await (e == null ? void 0 : e.get(n));
    return r == null && (i && (r = await (e == null ? void 0 : e.get(i)), r != null && (await (e == null ? void 0 : e.set(n, r)), await (e == null ? void 0 : e.get(n)) != null && await (e == null ? void 0 : e.clear(i)))), r == null && (r = t.randomUUID(), await (e == null ? void 0 : e.set(n, r)))), r;
};
function Mi(n) {
    return async (t)=>Ln(n.createHash("sha256").update(t), "base64");
}
var Z = async (n)=>n;
async function Rt(n) {
    return (await Promise.all(n.map((e)=>e.transform(e.value)))).join("_");
}
async function Fi(n, t) {
    return Rt([
        {
            value: "LaunchDarkly",
            transform: Z
        },
        {
            value: t,
            transform: Mi(n)
        }
    ]);
}
async function Ss(n) {
    return Rt([
        {
            value: "LaunchDarkly",
            transform: Z
        },
        {
            value: "AnonymousKeys",
            transform: Z
        },
        {
            value: n,
            transform: Z
        }
    ]);
}
async function $i(n) {
    return Rt([
        {
            value: "LaunchDarkly",
            transform: Z
        },
        {
            value: "ContextKeys",
            transform: Z
        },
        {
            value: n,
            transform: Z
        }
    ]);
}
async function ks(n) {
    return Rt([
        {
            value: n,
            transform: Z
        },
        {
            value: "ContextIndex",
            transform: Z
        }
    ]);
}
async function An(n, t, e) {
    return Rt([
        {
            value: t,
            transform: Z
        },
        {
            value: e.canonicalKey,
            transform: Mi(n)
        }
    ]);
}
var { isLegacyUser: Cs, isSingleKind: un, isMultiKind: pi } = _, Ri = "1.0", Is = (n)=>{
    let i = n, { kind: t } = i, e = ee(i, [
        "kind"
    ]);
    return {
        kind: "multi",
        [t]: e
    };
}, Ps = async ({ crypto: n, info: t }, { applicationInfo: e })=>{
    var a;
    let { ld_application: i } = t.platformData(), r = (a = we(i)) != null ? a : {}, s = (e == null ? void 0 : e.id) || (r == null ? void 0 : r.id);
    if (s) {
        let o = (e == null ? void 0 : e.version) || (r == null ? void 0 : r.version), c = (e == null ? void 0 : e.name) || (r == null ? void 0 : r.name), u = (e == null ? void 0 : e.versionName) || (r == null ? void 0 : r.versionName);
        return r = b(b(b(U(b({}, r), {
            id: s
        }), o ? {
            version: o
        } : {}), c ? {
            name: c
        } : {}), u ? {
            versionName: u
        } : {}), r.key = await Ln(n.createHash("sha256").update(s), "base64"), r.envAttributesVersion = r.envAttributesVersion || Ri, r;
    }
}, xs = async (n)=>{
    var o, c, u, l;
    let { ld_device: t, os: e } = n.info.platformData(), i = (o = we(t)) != null ? o : {}, r = (e == null ? void 0 : e.name) || ((c = i.os) == null ? void 0 : c.name), s = (e == null ? void 0 : e.version) || ((u = i.os) == null ? void 0 : u.version), a = (l = i.os) == null ? void 0 : l.family;
    if ((r || s || a) && (i.os = b(b(b({}, r ? {
        name: r
    } : {}), s ? {
        version: s
    } : {}), a ? {
        family: a
    } : {})), Object.keys(i).filter((d)=>d !== "key" && d !== "envAttributesVersion").length) {
        let d = await $i("ld_device");
        return i.key = await Oi(d, n), i.envAttributesVersion = i.envAttributesVersion || Ri, i;
    }
}, Ls = async (n, t, e)=>{
    if (Cs(n)) return n;
    let i, r;
    if (un(n) && n.kind !== "ld_application" || pi(n) && !n.ld_application ? i = await Ps(t, e) : e.logger.warn("Not adding ld_application environment attributes because it already exists."), un(n) && n.kind !== "ld_device" || pi(n) && !n.ld_device ? r = await xs(t) : e.logger.warn("Not adding ld_device environment attributes because it already exists."), i || r) {
        let s = un(n) ? Is(n) : n;
        return b(b(b({}, s), i ? {
            ld_application: i
        } : {}), r ? {
            ld_device: r
        } : {});
    }
    return n;
};
function As() {
    let n, t;
    return {
        set (e, i) {
            n = e, t = i;
        },
        getContext () {
            return t;
        },
        getUnwrappedContext () {
            return n;
        },
        newIdentificationPromise () {
            let e, i;
            return {
                identifyPromise: new Promise((s, a)=>{
                    e = s, i = a;
                }),
                identifyResolve: e,
                identifyReject: i
            };
        },
        hasContext () {
            return t !== void 0;
        },
        hasValidContext () {
            return this.hasContext() && t.valid;
        }
    };
}
var { isLegacyUser: Ts, isMultiKind: Os, isSingleKind: Ms } = _, Tn = async (n, t, e)=>{
    let { anonymous: i, key: r } = t;
    if (i && !r) {
        let s = await $i(n), a = await Ss(n);
        t.key = await Oi(s, e, a);
    }
}, Fs = async (n, t)=>{
    await Tn(n.kind, n, t);
}, $s = async (n, t)=>{
    let r = n, { kind: e } = r, i = ee(r, [
        "kind"
    ]);
    return Promise.all(Object.entries(i).map(([s, a])=>Tn(s, a, t)));
}, Rs = async (n, t)=>{
    await Tn("user", n, t);
}, Ns = async (n, t)=>{
    let e = cn(n);
    return Ms(e) && await Fs(e, t), Os(e) && await $s(e, t), Ts(e) && await Rs(e, t), e;
}, Us = (n)=>({
        customBaseURI: n.serviceEndpoints.polling !== Ai,
        customStreamURI: n.serviceEndpoints.streaming !== Ti,
        customEventsURI: n.serviceEndpoints.events !== tt.DEFAULT_EVENTS,
        eventsCapacity: n.capacity,
        eventsFlushIntervalMillis: ve(n.flushInterval),
        reconnectTimeMillis: ve(n.streamInitialReconnectDelay),
        diagnosticRecordingIntervalMillis: ve(n.diagnosticRecordingInterval),
        allAttributesPrivate: n.allAttributesPrivate,
        usingSecureMode: !1,
        bootstrapMode: !1
    }), zs = (n, t, e)=>{
    if (t.sendEvents && !t.diagnosticOptOut) return new _.DiagnosticsManager(n, e, Us(t));
};
function mi(n, t) {
    return {
        value: t != null ? t : null,
        variationIndex: null,
        reason: {
            kind: "ERROR",
            errorKind: n
        }
    };
}
function yi(n, t, e) {
    return b({
        value: n,
        variationIndex: t != null ? t : null
    }, e !== void 0 && {
        reason: e
    });
}
var js = (n, t, e, i, r)=>{
    if (t.sendEvents) return new _.EventProcessor(U(b({}, t), {
        eventsCapacity: t.capacity
    }), new ue(n, t, e), i, void 0, r, !1, !0);
}, be = class extends _.EventFactoryBase {
    evalEventClient(t, e, i, r, s, a) {
        let { trackEvents: o, debugEventsUntilDate: c, trackReason: u, flagVersion: l, version: d, variation: f } = r;
        return super.evalEvent({
            addExperimentData: u,
            context: s,
            debugEventsUntilDate: c,
            defaultVal: i,
            flagKey: t,
            reason: a,
            trackEvents: !!o,
            value: e,
            variation: f,
            version: l != null ? l : d
        });
    }
};
function On(n, t) {
    let e = Object.keys(t), i = "$flagsState", r = "$valid", s = t[i];
    !s && e.length && n.warn("LaunchDarkly client was initialized with bootstrap data that did not include flag metadata. Events may not be sent correctly."), t[r] === !1 && n.warn("LaunchDarkly bootstrap data is not available because the back end could not read the flags.");
    let a = {};
    return e.forEach((o)=>{
        if (o !== i && o !== r) {
            let c;
            s && s[o] ? c = b({
                value: t[o]
            }, s[o]) : c = {
                value: t[o],
                version: 0
            }, a[o] = {
                version: c.version,
                flag: c
            };
        }
    }), a;
}
var fn = "_freshness";
async function Ni(n, t) {
    let e = t.canonicalUnfilteredJson();
    if (e) return Ln(n.createHash("sha256").update(e), "base64");
}
async function _s(n, t, e, i, r) {
    let s = await An(t, e, i), a = await n.get(`${s}${fn}`);
    if (a != null) try {
        let o = JSON.parse(a), c = await Ni(t, i);
        return c === void 0 || o.contextHash !== c ? void 0 : typeof o.timestamp == "number" && !Number.isNaN(o.timestamp) ? o.timestamp : void 0;
    } catch (o) {
        r == null || r.warn(`Could not read freshness data from persistent storage: ${o.message}`);
        return;
    }
}
function Vs(n) {
    return n !== null && typeof n == "object" && typeof n.version == "number";
}
async function Ui(n, t, e, i, r) {
    let s = await An(t, e, i), a = await n.get(s), o = !1;
    if (a == null) {
        if (a = await n.get(i.canonicalKey), a == null) return;
        o = !0;
    }
    try {
        let c = JSON.parse(a);
        if (c === null || typeof c != "object") {
            r == null || r.warn("Cached flag data is not a valid object");
            return;
        }
        let u = Object.entries(c), l = u.find(([, f])=>!Vs(f));
        if (l) {
            r == null || r.warn(`Discarding cached flags due to invalid entry: ${l[0]}`);
            return;
        }
        return {
            flags: u.reduce((f, [m, w])=>(f[m] = w, f), {}),
            storageKey: s,
            fromLegacyKey: o
        };
    } catch (c) {
        r == null || r.warn(`Could not parse cached flag evaluations from persistent storage: ${c.message}`);
        return;
    }
}
var Mt = class n {
    constructor(){
        this.container = {
            index: new Array
        };
    }
    static fromJson(t) {
        let e = new n;
        try {
            e.container = JSON.parse(t);
        } catch (i) {}
        return e;
    }
    toJson() {
        return JSON.stringify(this.container);
    }
    notice(t, e) {
        let i = this.container.index.find((r)=>r.id === t);
        i === void 0 ? this.container.index.push({
            id: t,
            timestamp: e
        }) : i.timestamp = e;
    }
    prune(t) {
        let e = Math.max(t, 0);
        return this.container.index.length > e ? (this.container.index.sort((i, r)=>i.timestamp - r.timestamp), this.container.index.splice(0, this.container.index.length - e)) : [];
    }
}, pn = class {
    constructor(t, e, i, r, s, a, o, c = ()=>Date.now()){
        this.a = t, this.Tt = e, this.ut = i, this.ge = r, this.A = s, this.g = a, this.t = o, this.vn = c, this.ve = ks(this.Tt);
    }
    async init(t, e) {
        this.g.init(t, e), await this.Ot(t);
    }
    async upsert(t, e, i) {
        return this.g.upsert(t, e, i) ? (await this.Ot(t), !0) : !1;
    }
    async applyChanges(t, e, i) {
        this.g.applyChanges(t, e, i), await this.Ot(t);
    }
    async loadCached(t) {
        if (this.ge || this.ut <= 0 || !this.a.storage) return !1;
        let e = await Ui(this.a.storage, this.a.crypto, this.Tt, t, this.t);
        if (!e) return !1;
        e.fromLegacyKey && (await this.a.storage.set(e.storageKey, JSON.stringify(e.flags)), await this.a.storage.clear(t.canonicalKey));
        let i = Object.entries(e.flags).reduce((r, [s, a])=>(r[s] = {
                version: a.version,
                flag: a
            }, r), {});
        return this.g.initCached(t, i), this.t.debug("Loaded cached flag evaluations from persistent storage"), !0;
    }
    async wn(t, e, i) {
        var a;
        let r = await Ni(this.a.crypto, e);
        if (r === void 0) {
            this.t.error("Could not serialize context for freshness tracking");
            return;
        }
        let s = {
            timestamp: i,
            contextHash: r
        };
        await ((a = this.a.storage) == null ? void 0 : a.set(`${t}${fn}`, JSON.stringify(s)));
    }
    async En() {
        var e;
        if (this.V !== void 0) return this.V;
        let t = await ((e = this.a.storage) == null ? void 0 : e.get(await this.ve));
        if (!t) return this.V = new Mt, this.V;
        try {
            this.V = Mt.fromJson(t), this.t.debug("Loaded context index from persistent storage");
        } catch (i) {
            this.t.warn(`Could not load index from persistent storage: ${i.message}`), this.V = new Mt;
        }
        return this.V;
    }
    async Ot(t) {
        var l, d;
        if (this.ge) return;
        let e = this.vn(), i = await this.En(), r = await An(this.a.crypto, this.Tt, t);
        this.ut > 0 && i.notice(r, e);
        let s = i.prune(this.ut), a = this.ut <= 0 || s.some((f)=>f.id === r);
        if (await Promise.all(s.flatMap((f)=>{
            var m, w;
            return [
                (m = this.a.storage) == null ? void 0 : m.clear(f.id),
                (w = this.a.storage) == null ? void 0 : w.clear(`${f.id}${fn}`)
            ];
        })), await ((l = this.a.storage) == null ? void 0 : l.set(await this.ve, i.toJson())), a) return;
        let o = this.A.getAll(), c = Object.entries(o).reduce((f, [m, w])=>(w.flag !== null && w.flag !== void 0 && (f[m] = w.flag), f), {}), u = JSON.stringify(c);
        await ((d = this.a.storage) == null ? void 0 : d.set(r, u));
        try {
            await this.wn(r, t, e);
        } catch (f) {
            this.t.warn(`Failed to store freshness data: ${f.message}`);
        }
    }
};
function Bs() {
    let n = {};
    return {
        init (t) {
            n = Object.entries(t).reduce((e, [i, r])=>(e[i] = r, e), {});
        },
        insertOrUpdate (t, e) {
            n[t] = e;
        },
        get (t) {
            if (Object.prototype.hasOwnProperty.call(n, t)) return n[t];
        },
        getAll () {
            return n;
        },
        applyChanges (t, e) {
            e === "full" ? this.init(t) : e === "partial" && Object.entries(t).forEach(([i, r])=>{
                n[i] = r;
            });
        }
    };
}
function gi(n, t) {
    let e = [];
    return Object.entries(n).forEach(([i, r])=>{
        let s = t[i];
        (!s || !kt(r, s)) && e.push(i);
    }), Object.keys(t).forEach((i)=>{
        n[i] || e.push(i);
    }), e;
}
function Hs(n, t) {
    let e = n, i = t, r, s = new Array;
    return {
        handleFlagChanges (a, o) {
            r ? s.forEach((c)=>{
                try {
                    c(r, a, o);
                } catch (u) {}
            }) : i.warn("Received a change event without an active context. Changes will not be propagated.");
        },
        init (a, o) {
            r = a;
            let c = e.getAll();
            e.init(o);
            let u = gi(c, o);
            u.length > 0 && this.handleFlagChanges(u, "init");
        },
        initCached (a, o) {
            (r == null ? void 0 : r.canonicalKey) !== a.canonicalKey && this.init(a, o);
        },
        applyChanges (a, o, c) {
            r = a;
            let u = e.getAll();
            if (e.applyChanges(o, c), c === "full") {
                let l = gi(u, o);
                l.length > 0 && this.handleFlagChanges(l, "init");
            } else if (c === "partial") {
                let l = Object.keys(o);
                l.length > 0 && this.handleFlagChanges(l, "patch");
            }
        },
        upsert (a, o, c) {
            if ((r == null ? void 0 : r.canonicalKey) !== a.canonicalKey) return i.warn("Received an update for an inactive context."), !1;
            let u = e.get(o);
            return u !== void 0 && u.version >= c.version ? !1 : (e.insertOrUpdate(o, c), this.handleFlagChanges([
                o
            ], "patch"), !0);
        },
        on (a) {
            s.push(a);
        },
        off (a) {
            let o = s.indexOf(a);
            o > -1 && s.splice(o, 1);
        }
    };
}
var mn = class {
    constructor(t, e, i, r, s, a = ()=>Date.now()){
        this.A = Bs(), this.g = Hs(this.A, s), this.lt = this.bn(t, e, i, r, s, a);
    }
    async bn(t, e, i, r, s, a = ()=>Date.now()) {
        let o = await Fi(t.crypto, e);
        return new pn(t, o, i, r, this.A, this.g, s, a);
    }
    get(t) {
        return this.r && Object.prototype.hasOwnProperty.call(this.r, t) ? this.Mt(this.r[t]) : this.A.get(t);
    }
    getAll() {
        return this.r ? b(b({}, this.A.getAll()), Object.entries(this.r).reduce((t, [e, i])=>(t[e] = this.Mt(i), t), {})) : this.A.getAll();
    }
    presetFlags(t) {
        this.A.init(t);
    }
    setBootstrap(t, e) {
        this.g.init(t, e);
    }
    async init(t, e) {
        return (await this.lt).init(t, e);
    }
    async upsert(t, e, i) {
        return (await this.lt).upsert(t, e, i);
    }
    async loadCached(t) {
        return (await this.lt).loadCached(t);
    }
    async applyChanges(t, e, i) {
        return (await this.lt).applyChanges(t, e, i);
    }
    on(t) {
        this.g.on(t);
    }
    off(t) {
        this.g.off(t);
    }
    Mt(t) {
        return {
            flag: {
                value: t,
                version: 0
            },
            version: 0
        };
    }
    setOverride(t, e) {
        this.r || (this.r = {}), this.r[t] = e, this.g.handleFlagChanges([
            t
        ], "override");
    }
    removeOverride(t) {
        !this.r || !Object.prototype.hasOwnProperty.call(this.r, t) || (delete this.r[t], Object.keys(this.r).length === 0 && (this.r = void 0), this.g.handleFlagChanges([
            t
        ], "override"));
    }
    clearAllOverrides() {
        if (this.r) {
            let t = b({}, this.r);
            this.r = void 0, this.g.handleFlagChanges(Object.keys(t), "override");
        }
    }
    getAllOverrides() {
        if (!this.r) return {};
        let t = {};
        return Object.entries(this.r).forEach(([e, i])=>{
            t[e] = this.Mt(i);
        }), t;
    }
    getDebugOverride() {
        return {
            setOverride: this.setOverride.bind(this),
            removeOverride: this.removeOverride.bind(this),
            clearAllOverrides: this.clearAllOverrides.bind(this),
            getAllOverrides: this.getAllOverrides.bind(this)
        };
    }
}, vi = "unknown hook", zi = "beforeEvaluation", ji = "afterEvaluation", qs = "afterTrack";
function Nt(n, t, e, i, r) {
    try {
        return i();
    } catch (s) {
        return n == null || n.error(`An error was encountered in "${t}" of the "${e}" hook: ${s}`), r;
    }
}
function Ut(n, t) {
    try {
        return t.getMetadata().name || vi;
    } catch (e) {
        return n.error("Exception thrown getting metadata for hook. Unable to get hook name."), vi;
    }
}
function Gs(n, t, e) {
    return t.map((i)=>Nt(n, zi, Ut(n, i), ()=>{
            var r, s;
            return (s = (r = i == null ? void 0 : i.beforeEvaluation) == null ? void 0 : r.call(i, e, {})) != null ? s : {};
        }, {}));
}
function Ks(n, t, e, i, r) {
    for(let s = t.length - 1; s >= 0; s -= 1){
        let a = t[s], o = i[s];
        Nt(n, ji, Ut(n, a), ()=>{
            var c, u;
            return (u = (c = a == null ? void 0 : a.afterEvaluation) == null ? void 0 : c.call(a, e, o, r)) != null ? u : {};
        }, {});
    }
}
function Js(n, t, e) {
    return t.map((i)=>Nt(n, zi, Ut(n, i), ()=>{
            var r, s;
            return (s = (r = i == null ? void 0 : i.beforeIdentify) == null ? void 0 : r.call(i, e, {})) != null ? s : {};
        }, {}));
}
function Ws(n, t, e, i, r) {
    for(let s = t.length - 1; s >= 0; s -= 1){
        let a = t[s], o = i[s];
        Nt(n, ji, Ut(n, a), ()=>{
            var c, u;
            return (u = (c = a == null ? void 0 : a.afterIdentify) == null ? void 0 : c.call(a, e, o, r)) != null ? u : {};
        }, {});
    }
}
function Ys(n, t, e) {
    for(let i = 0; i < t.length; i += 1){
        let r = t[i];
        Nt(n, qs, Ut(n, r), ()=>{
            var s;
            return (s = r == null ? void 0 : r.afterTrack) == null ? void 0 : s.call(r, e);
        }, void 0);
    }
}
var yn = class {
    constructor(t, e){
        this.t = t, this.$ = [], this.$.push(...e);
    }
    withEvaluation(t, e, i, r) {
        if (this.$.length === 0) return r();
        let s = [
            ...this.$
        ], a = {
            flagKey: t,
            context: e,
            defaultValue: i
        }, o = Gs(this.t, s, a), c = r();
        return Ks(this.t, s, a, o, c), c;
    }
    identify(t, e) {
        let i = [
            ...this.$
        ], r = {
            context: t,
            timeout: e
        }, s = Js(this.t, i, r);
        return (a)=>{
            Ws(this.t, i, r, s, a);
        };
    }
    addHook(t) {
        this.$.push(t);
    }
    afterTrack(t) {
        if (this.$.length === 0) return;
        let e = [
            ...this.$
        ];
        Ys(this.t, e, t);
    }
};
function Zs(n) {
    return {
        getMetadata () {
            return {
                name: "LaunchDarkly-Inspector-Adapter"
            };
        },
        afterEvaluation: (t, e, i)=>(n.onFlagUsed(t.flagKey, i, t.context), e),
        afterIdentify (t, e, i) {
            return n.onIdentityChanged(t.context), e;
        }
    };
}
function Xs(n, t) {
    return `an inspector: "${t}" of an invalid type (${n}) was configured`;
}
function Qs(n, t) {
    return `an inspector: "${t}" of type: "${n}" generated an exception`;
}
function ta(n, t) {
    let e = !1, i = {
        method: (...r)=>{
            try {
                n.method(...r);
            } catch (s) {
                e || (e = !0, t.warn(Qs(i.type, i.name)));
            }
        },
        type: n.type,
        name: n.name,
        synchronous: n.synchronous
    };
    return i;
}
var _i = "flag-used", Vi = "flag-details-changed", Bi = "flag-detail-changed", Hi = "client-identity-changed", ea = [
    _i,
    Vi,
    Bi,
    Hi
];
function na(n, t) {
    let e = ea.includes(n.type) && n.method && typeof n.method == "function";
    return e || t.warn(Xs(n.type, n.name)), e;
}
var gn = class {
    constructor(t, e){
        this.B = [];
        let i = t.filter((r)=>na(r, e));
        this.B = i.map((r)=>ta(r, e));
    }
    hasInspectors() {
        return this.B.length !== 0;
    }
    onFlagUsed(t, e, i) {
        this.B.forEach((r)=>{
            r.type === _i && r.method(t, e, i);
        });
    }
    onFlagsChanged(t) {
        this.B.forEach((e)=>{
            e.type === Vi && e.method(t);
        });
    }
    onFlagChanged(t, e) {
        this.B.forEach((i)=>{
            i.type === Bi && i.method(t, e);
        });
    }
    onIdentityChanged(t) {
        this.B.forEach((e)=>{
            e.type === Hi && e.method(t);
        });
    }
}, vn = class {
    constructor(t){
        this.t = t, this.n = new Map;
    }
    on(t, e) {
        var i, r;
        if (typeof t != "string") {
            (i = this.t) == null || i.warn("Only string event names are supported.");
            return;
        }
        this.n.has(t) ? (r = this.n.get(t)) == null || r.push(e) : this.n.set(t, [
            e
        ]);
    }
    off(t, e) {
        let i = this.n.get(t);
        if (i) {
            if (e) {
                let r = i.filter((s)=>s !== e);
                r.length === 0 ? this.n.delete(t) : this.n.set(t, r);
                return;
            }
            this.n.delete(t);
        }
    }
    Dn(t, e, ...i) {
        var r;
        try {
            t(...i);
        } catch (s) {
            (r = this.t) == null || r.error(`Encountered error invoking handler for "${e}", detail: "${s}"`);
        }
    }
    emit(t, ...e) {
        let i = this.n.get(t);
        i == null || i.forEach((r)=>this.Dn(r, t, ...e));
    }
    eventNames() {
        return [
            ...this.n.keys()
        ];
    }
    listenerCount(t) {
        var e, i;
        return (i = (e = this.n.get(t)) == null ? void 0 : e.length) != null ? i : 0;
    }
};
function ia(n, t, e) {
    let i = t.info.sdkData(), r;
    e.applicationInfo && (e.applicationInfo.id && (r = r != null ? r : {}, r.id = e.applicationInfo.id), e.applicationInfo.version && (r = r != null ? r : {}, r.version = e.applicationInfo.version), e.applicationInfo.name && (r = r != null ? r : {}, r.name = e.applicationInfo.name), e.applicationInfo.versionName && (r = r != null ? r : {}, r.versionName = e.applicationInfo.versionName));
    let s = {
        name: i.userAgentBase,
        version: i.version
    };
    i.wrapperName && (s.wrapperName = i.wrapperName), i.wrapperVersion && (s.wrapperVersion = i.wrapperVersion);
    let a = {
        sdk: s,
        [e.credentialType]: n
    };
    return r && (a.application = r), a;
}
var { ClientMessages: wi, ErrorKinds: Ei } = _, ra = 5, De = class {
    constructor(t, e, i, r, s, a){
        var u, l, d, f;
        if (this.sdkKey = t, this.autoEnvAttributes = e, this.platform = i, this.u = As(), this.Ft = 15, this.T = new be(!1), this.dt = new be(!0), this.$t = !1, this.Sn = os(), this.we = !1, !t) throw new Error("You must configure the client with a client-side SDK key");
        if (!i.encoding) throw new Error("Platform must implement Encoding because btoa is required.");
        this.e = new hn(r, a), this.logger = this.e.logger, this.we = (u = a == null ? void 0 : a.requiresStart) != null ? u : !1, this.initialContext = a == null ? void 0 : a.initialContext, this.Ee = ci(this.sdkKey, this.platform.info, this.e.tags, this.e.serviceEndpoints.includeAuthorizationHeader, this.e.userAgentHeaderName), this.R = new mn(this.platform, t, this.e.maxCachedContexts, (l = this.e.disableCache) != null ? l : !1, this.e.logger);
        let o = (f = (d = this.R).getDebugOverride) == null ? void 0 : f.call(d);
        o && a != null && a.registerDebugOverrides && a.registerDebugOverrides(o), this.C = zs(t, this.e, i), this.E = js(t, this.e, i, this.Ee, this.C), this.emitter = new vn, this.emitter.on("error", (m, w)=>{
            this.logger.error(`error: ${w}, context: ${JSON.stringify(m)}`);
        }), this.R.on((m, w, v)=>{
            this.kn(w, v);
            let h = J.toLDContext(m);
            this.emitter.emit("change", h, w), w.forEach((y)=>{
                this.emitter.emit(`change:${y}`, h);
            });
        }), this.dataManager = s(this.R, this.e, this.Ee, this.emitter, this.C), this.isFDv2 = !!this.e.dataSystem, this.dataSystemConfig = this.e.dataSystem;
        let c = [
            ...this.e.hooks
        ];
        if (this.environmentMetadata = ia(this.sdkKey, this.platform, this.e), this.e.getImplementationHooks(this.environmentMetadata).forEach((m)=>{
            c.push(m);
        }), this.N = new yn(this.logger, c), this.Y = new gn(this.e.inspectors, this.logger), this.Y.hasInspectors() && this.N.addHook(Zs(this.Y)), r.cleanOldPersistentData && a != null && a.getLegacyStorageKeys && this.platform.storage) try {
            this.logger.debug("Cleaning old persistent data."), Promise.all(a.getLegacyStorageKeys().map((m)=>{
                var w;
                return (w = this.platform.storage) == null ? void 0 : w.clear(m);
            })).catch((m)=>{
                this.logger.error(`Error cleaning old persistent data: ${m}`);
            }).finally(()=>{
                this.logger.debug("Cleaned old persistent data.");
            });
        } catch (m) {
            this.logger.error(`Error cleaning old persistent data: ${m}`);
        }
    }
    allFlags() {
        return Object.entries(this.R.getAll()).reduce((e, [i, r])=>(r.flag !== null && r.flag !== void 0 && !r.flag.deleted && (e[i] = r.flag.value), e), {});
    }
    async close() {
        var t;
        await this.flush(), (t = this.E) == null || t.close(), this.dataManager.close(), this.logger.debug("Closed event processor and data source.");
    }
    async flush() {
        var t;
        try {
            await ((t = this.E) == null ? void 0 : t.flush()), this.logger.debug("Successfully flushed event processor.");
        } catch (e) {
            return this.logger.error(`Error flushing event processor: ${e}.`), {
                error: e,
                result: !1
            };
        }
        return {
            result: !0
        };
    }
    getContext() {
        return this.u.hasContext() ? cn(this.u.getUnwrappedContext()) : void 0;
    }
    getInternalContext() {
        return this.u.getContext();
    }
    presetFlags(t) {
        this.R.presetFlags(t);
    }
    start(t) {
        var i, r;
        if (this.initializeResult) return Promise.resolve(this.initializeResult);
        if (this.startPromise) return this.startPromise;
        if (!this.initialContext) return this.logger.error("Initial context not set"), Promise.resolve({
            status: "failed",
            error: new Error("Initial context not set")
        });
        let e = U(b({}, (i = t == null ? void 0 : t.identifyOptions) != null ? i : {}), {
            sheddable: !1
        });
        if (t != null && t.bootstrap && !e.bootstrap && (e.bootstrap = t.bootstrap), e.bootstrap) try {
            e.bootstrapParsed || (e.bootstrapParsed = On(this.logger, e.bootstrap)), e.bootstrapParsed && this.presetFlags(e.bootstrapParsed);
        } catch (s) {
            this.logger.error("Failed to bootstrap data", s);
        }
        return this.initializedPromise || (this.initializedPromise = new Promise((s)=>{
            this.initResolve = s;
        })), this.startPromise = this.Rt(this.initializedPromise, (r = t == null ? void 0 : t.timeout) != null ? r : 5, "start"), this.identifyResult(this.initialContext, e), this.startPromise;
    }
    async identify(t, e) {
        let i = await this.identifyResult(t, e);
        if (i.status === "error") throw i.error;
        if (i.status === "timeout") {
            let r = new xt(`identify timed out after ${i.timeout} seconds.`);
            throw this.logger.error(r.message), r;
        }
    }
    async identifyResult(t, e) {
        var o, c;
        if (this.we && !this.startPromise) return this.logger.error("The client must be started before a context can be identified. Call start() prior to identifying a context."), {
            status: "error",
            error: new Error("Identify called before start")
        };
        let i = (o = e == null ? void 0 : e.timeout) != null ? o : ra, r = (e == null ? void 0 : e.timeout) === void 0 && (e == null ? void 0 : e.noTimeout) === !0;
        i > this.Ft && this.logger.warn(`The identify function was called with a timeout greater than ${this.Ft} seconds. We recommend a timeout of less than ${this.Ft} seconds.`);
        let s = this.Sn.execute({
            before: async ()=>{
                let u = await Ns(t, this.platform);
                this.autoEnvAttributes === vt.Enabled && (u = await Ls(u, this.platform, this.e));
                let l = J.fromLDContext(u);
                if (l.valid) {
                    let d = this.N.identify(u, e == null ? void 0 : e.timeout);
                    return {
                        context: u,
                        checkedContext: l,
                        afterIdentify: d
                    };
                }
                return {
                    context: u,
                    checkedContext: l
                };
            },
            execute: async (u)=>{
                var v;
                let { context: l, checkedContext: d } = u;
                if (!d.valid) {
                    let h = new Error("Context was unspecified or had no key");
                    return this.emitter.emit("error", l, h), Promise.reject(h);
                }
                this.u.set(l, d), (v = this.E) == null || v.sendEvent(this.T.identifyEvent(d));
                let { identifyPromise: f, identifyResolve: m, identifyReject: w } = this.u.newIdentificationPromise();
                return this.logger.debug(`Identifying ${JSON.stringify(d)}`), await this.dataManager.identify(m, w, d, e), f;
            },
            after: async (u, l)=>{
                var d, f, m;
                u.status === "complete" ? (d = l == null ? void 0 : l.afterIdentify) == null || d.call(l, {
                    status: "completed"
                }) : u.status === "shed" ? (f = l == null ? void 0 : l.afterIdentify) == null || f.call(l, {
                    status: "shed"
                }) : u.status === "error" && ((m = l == null ? void 0 : l.afterIdentify) == null || m.call(l, {
                    status: "error"
                }));
            }
        }, (c = e == null ? void 0 : e.sheddable) != null ? c : !1).then((u)=>{
            if (u.status === "error") {
                let d = {
                    status: "error",
                    error: u.error
                };
                return this.maybeSetInitializationResult({
                    status: "failed",
                    error: u.error
                }), d;
            }
            if (u.status === "shed") return {
                status: "shed"
            };
            let l = {
                status: "completed"
            };
            return this.maybeSetInitializationResult({
                status: "complete"
            }), l;
        });
        if (r) return s;
        let a = new Promise((u)=>{
            setTimeout(()=>{
                u({
                    status: "timeout",
                    timeout: i
                });
            }, i * 1e3);
        });
        return Promise.race([
            s,
            a
        ]);
    }
    maybeSetInitializationResult(t) {
        this.initializeResult === void 0 && (this.initializeResult = t, this.emitter.emit("ready"), t.status === "complete" && this.emitter.emit("initialized"), this.initResolve && (this.initResolve(t), this.initResolve = void 0));
    }
    waitForInitialization(t) {
        var i;
        let e = (i = t == null ? void 0 : t.timeout) != null ? i : 5;
        return this.initializeResult ? Promise.resolve(this.initializeResult) : this.initializedPromise ? this.Rt(this.initializedPromise, e) : (this.initializedPromise || (this.initializedPromise = new Promise((r)=>{
            this.initResolve = r;
        })), this.Rt(this.initializedPromise, e));
    }
    Rt(t, e, i = "waitForInitialization") {
        let r = on(e, i);
        return Promise.race([
            t.then((s)=>(r.cancel(), s)),
            r.promise.then(()=>({
                    status: "complete"
                })).catch(()=>({
                    status: "timeout"
                }))
        ]).catch((s)=>{
            var a;
            return (a = this.logger) == null || a.error(s.message), {
                status: "failed",
                error: s
            };
        });
    }
    on(t, e) {
        this.emitter.on(t, e);
    }
    off(t, e) {
        this.emitter.off(t, e);
    }
    track(t, e, i) {
        var r, s;
        if (!this.u.hasValidContext()) {
            this.logger.warn(wi.MissingContextKeyNoEvent);
            return;
        }
        i !== void 0 && !p.Number.is(i) && ((r = this.logger) == null || r.warn(wi.invalidMetricValue(typeof i))), (s = this.E) == null || s.sendEvent(this.e.trackEventModifier(this.T.customEvent(t, this.u.getContext(), e, i))), this.N.afterTrack({
            key: t,
            context: this.u.getUnwrappedContext(),
            data: e,
            metricValue: i
        });
    }
    ht(t, e, i, r, s) {
        var w, v, h, y, S;
        let a = this.u.hasContext();
        a || (w = this.logger) == null || w.warn("Flag evaluation called before client is fully initialized, data from this evaulation could be stale.");
        let o = this.u.getContext(), c = this.R.get(t);
        if (c === void 0 || c.flag.deleted) {
            let k = e != null ? e : null;
            return (v = this.logger) == null || v.warn(`Unknown feature flag "${t}"; returning default value ${k}.`), a && ((h = this.E) == null || h.sendEvent(this.T.unknownFlagEvent(t, k, o))), mi(Ei.FlagNotFound, e);
        }
        let { reason: u, value: l, variation: d, prerequisites: f } = c.flag;
        if (r) {
            let [k, L] = r(l);
            if (!k) {
                a && ((y = this.E) == null || y.sendEvent(i.evalEventClient(t, e, e, c.flag, o, u)));
                let A = new le(`Wrong type "${L}" for feature flag "${t}"; returning default value`);
                return this.emitter.emit("error", this.u.getUnwrappedContext(), A), mi(Ei.WrongType, e);
            }
        }
        let m = yi(l, d, u);
        if (l == null && (this.logger.debug("Result value is null. Providing default value."), m.value = e), f && f.length > 0) {
            let k = s != null ? s : new Set;
            k.add(t);
            try {
                for (let L of f)k.has(L) || this.ht(L, void 0, this.T, void 0, k);
            } finally{
                k.delete(t);
            }
        }
        return a && ((S = this.E) == null || S.sendEvent(i.evalEventClient(t, l, e, c.flag, o, u))), m;
    }
    variation(t, e) {
        let { value: i } = this.N.withEvaluation(t, this.u.getUnwrappedContext(), e, ()=>this.ht(t, e, this.T));
        return i;
    }
    variationDetail(t, e) {
        return this.N.withEvaluation(t, this.u.getUnwrappedContext(), e, ()=>this.ht(t, e, this.dt));
    }
    H(t, e, i, r) {
        return this.N.withEvaluation(t, this.u.getUnwrappedContext(), e, ()=>this.ht(t, e, i, r));
    }
    boolVariation(t, e) {
        return this.H(t, e, this.T, (i)=>[
                p.Boolean.is(i),
                p.Boolean.getType()
            ]).value;
    }
    jsonVariation(t, e) {
        return this.variation(t, e);
    }
    numberVariation(t, e) {
        return this.H(t, e, this.T, (i)=>[
                p.Number.is(i),
                p.Number.getType()
            ]).value;
    }
    stringVariation(t, e) {
        return this.H(t, e, this.T, (i)=>[
                p.String.is(i),
                p.String.getType()
            ]).value;
    }
    boolVariationDetail(t, e) {
        return this.H(t, e, this.dt, (i)=>[
                p.Boolean.is(i),
                p.Boolean.getType()
            ]);
    }
    numberVariationDetail(t, e) {
        return this.H(t, e, this.dt, (i)=>[
                p.Number.is(i),
                p.Number.getType()
            ]);
    }
    stringVariationDetail(t, e) {
        return this.H(t, e, this.dt, (i)=>[
                p.String.is(i),
                p.String.getType()
            ]);
    }
    jsonVariationDetail(t, e) {
        return this.variationDetail(t, e);
    }
    addHook(t) {
        this.N.addHook(t);
    }
    setEventSendingEnabled(t, e) {
        var i, r, s, a;
        this.$t !== t && (this.$t = t, t ? (this.logger.debug("Starting event processor"), (i = this.E) == null || i.start()) : e ? ((r = this.logger) == null || r.debug("Flushing event processor before disabling."), this.flush().then(()=>{
            var o, c;
            this.$t || ((o = this.logger) == null || o.debug("Stopping event processor."), (c = this.E) == null || c.close());
        })) : ((s = this.logger) == null || s.debug("Stopping event processor."), (a = this.E) == null || a.close()));
    }
    sendEvent(t) {
        var e;
        (e = this.E) == null || e.sendEvent(t);
    }
    kn(t, e) {
        if (!this.Y.hasInspectors()) return;
        let i = {};
        t.forEach((r)=>{
            let s = this.R.get(r);
            if (s != null && s.flag && !s.flag.deleted) {
                let { reason: a, value: o, variation: c } = s.flag;
                i[r] = yi(o, c, a);
            } else i[r] = {
                value: void 0,
                variationIndex: null
            };
        }), e === "init" ? this.Y.onFlagsChanged(i) : e === "patch" && Object.entries(i).forEach(([r, s])=>{
            this.Y.onFlagChanged(r, s);
        });
    }
};
function qi(n, t) {
    return {
        async get (e) {
            try {
                let i = await n.get(e);
                return typeof i == "string" ? i : null;
            } catch (i) {
                return t == null || t.error(`Error getting key from storage: ${e}, reason: ${i}`), null;
            }
        },
        async set (e, i) {
            try {
                await n.set(e, i);
            } catch (r) {
                t == null || t.error(`Error setting key in storage: ${e}, reason: ${r}`);
            }
        },
        async clear (e) {
            try {
                await n.clear(e);
            } catch (i) {
                t == null || t.error(`Error clearing key from storage: ${e}, reason: ${i}`);
            }
        }
    };
}
function Gi(n, t, e) {
    e.forEach((i)=>{
        var r;
        try {
            (r = i.registerDebug) == null || r.call(i, t);
        } catch (s) {
            n.error(`Exception thrown registering plugin ${_.safeGetName(n, i)}.`);
        }
    });
}
function Mn(n) {
    return {
        polling: ()=>({
                pathGet (t, e) {
                    return `/sdk/evalx/${n}/contexts/${Tt(e, t)}`;
                },
                pathReport (t, e) {
                    return `/sdk/evalx/${n}/context`;
                },
                pathPost (t, e) {
                    throw new Error("Post for FDv1 unsupported.");
                },
                pathPing (t, e) {
                    throw new Error("Ping for polling unsupported.");
                }
            }),
        streaming: ()=>({
                pathGet (t, e) {
                    return `/eval/${n}/${Tt(e, t)}`;
                },
                pathReport (t, e) {
                    return `/eval/${n}`;
                },
                pathPost (t, e) {
                    throw new Error("Post for FDv1 unsupported.");
                },
                pathPing (t, e) {
                    return `/ping/${n}`;
                }
            })
    };
}
function sa() {
    return {
        polling: ()=>({
                pathGet (n, t) {
                    return `/sdk/poll/eval/${Tt(t, n)}`;
                },
                pathReport (n, t) {
                    throw new Error("Report for FDv2 unsupported.");
                },
                pathPost (n, t) {
                    return "/sdk/poll/eval";
                },
                pathPing (n, t) {
                    throw new Error("Ping for polling unsupported.");
                }
            }),
        streaming: ()=>({
                pathGet (n, t) {
                    return `/sdk/stream/eval/${Tt(t, n)}`;
                },
                pathReport (n, t) {
                    throw new Error("Report for FDv2 unsupported.");
                },
                pathPost (n, t) {
                    return "/sdk/stream/eval";
                },
                pathPing (n, t) {
                    throw new Error("Ping for streaming unsupported.");
                }
            })
    };
}
function aa(n, t, e) {
    return {
        async handlePut (i, r) {
            e.debug(`Got PUT: ${Object.keys(r)}`);
            let s = Object.entries(r).reduce((a, [o, c])=>(a[o] = {
                    version: c.version,
                    flag: c
                }, a), {});
            await n.init(i, s), t.requestStateUpdate("VALID");
        },
        async handlePatch (i, r) {
            e.debug(`Got PATCH ${JSON.stringify(r, null, 2)}`), n.upsert(i, r.key, {
                version: r.version,
                flag: r
            });
        },
        async handleDelete (i, r) {
            e.debug(`Got DELETE ${JSON.stringify(r, null, 2)}`), n.upsert(i, r.key, {
                version: r.version,
                flag: U(b({}, r), {
                    deleted: !0,
                    flagVersion: 0,
                    value: void 0,
                    variation: 0,
                    trackEvents: !1
                })
            });
        },
        handleStreamingError (i) {
            t.reportError(i.kind, i.message, i.code, i.recoverable);
        },
        handlePollingError (i) {
            t.reportError(i.kind, i.message, i.status, i.recoverable);
        }
    };
}
function Ki(n, t = ()=>Date.now()) {
    let e = "CLOSED", i = t(), r;
    function s() {
        return {
            state: e,
            stateSince: i,
            lastError: r
        };
    }
    function a(o, c = !1) {
        let u = o === "INTERRUPTED" && e === "INITIALIZING" ? "INITIALIZING" : o, l = e !== u;
        l && (e = u, i = t()), (l || c) && n.emit("dataSourceStatus", s());
    }
    return {
        get status () {
            return s();
        },
        requestStateUpdate (o) {
            a(o);
        },
        reportError (o, c, u, l = !1) {
            r = {
                kind: o,
                message: c,
                statusCode: u,
                time: t()
            }, a(l ? "INTERRUPTED" : "CLOSED", !0);
        }
    };
}
function bi(n) {
    n == null || n.debug("Poll completed after the processor was closed. Skipping processing.");
}
var wn = class {
    constructor(t, e, i, r, s){
        this.Cn = t, this.In = e, this.Pn = i, this.m = r, this.t = s, this.h = !1;
    }
    async be() {
        var s, a, o, c, u, l, d;
        if (this.h) return;
        let t = (f)=>{
            var m, w, v;
            (m = this.t) == null || m.error("Polling received invalid data"), (w = this.t) == null || w.debug(`Invalid JSON follows: ${f}`), (v = this.m) == null || v.call(this, new lt(M.InvalidData, "Malformed JSON data in polling response"));
        };
        (s = this.t) == null || s.debug("Polling LaunchDarkly for feature flag updates");
        let e = Date.now();
        try {
            let f = await this.Cn.requestPayload();
            try {
                if (this.h) {
                    bi(this.t);
                    return;
                }
                let m = JSON.parse(f);
                try {
                    (a = this.Pn) == null || a.call(this, m);
                } catch (w) {
                    (o = this.t) == null || o.error(`Exception from data handler: ${w}`);
                }
            } catch (m) {
                t(f);
            }
        } catch (f) {
            if (this.h) {
                bi(this.t);
                return;
            }
            let m = f;
            if (m.status !== void 0 && !ht(m.status)) {
                (c = this.t) == null || c.error(G(f, "polling request")), (u = this.m) == null || u.call(this, new lt(M.ErrorResponse, m.message, m.status));
                return;
            }
            (l = this.t) == null || l.error(G(f, "polling request", "will retry"));
        }
        let i = Date.now() - e, r = Math.max(this.In * 1e3 - i, 0);
        (d = this.t) == null || d.debug("Elapsed: %d ms, sleeping for %d ms", i, r), this.Nt = setTimeout(()=>{
            this.be();
        }, r);
    }
    start() {
        this.be();
    }
    stop() {
        this.Nt && (clearTimeout(this.Nt), this.Nt = void 0), this.h = !0;
    }
    close() {
        this.stop();
    }
}, oa = (n, t, e, i)=>{
    e == null || e.error(`Stream received invalid data in "${n}" message`), e == null || e.debug(`Invalid JSON follows: ${t}`), i == null || i(new gt(M.InvalidData, "Malformed JSON data in event stream"));
};
function ca(n, t) {
    t == null || t.debug(`Received ${n} event after processor was closed. Skipping processing.`);
}
function Di(n) {
    n == null || n.debug("Ping completed after processor was closed. Skipping processing.");
}
var En = class {
    constructor(t, e, i, r, s, a, o, c, u){
        var f;
        this.xn = t, this.Ut = e, this.n = i, this.z = r, this.Ln = a, this.C = o, this.m = c, this.t = u, this.h = !1;
        let l;
        e.useReport && !r.getEventSourceCapabilities().customMethod ? l = e.paths.pathPing(s, t) : l = e.useReport ? e.paths.pathReport(s, t) : e.paths.pathGet(s, t);
        let d = [
            ...(f = e.queryParameters) != null ? f : []
        ];
        this.Ut.withReasons && d.push({
            key: "withReasons",
            value: "true"
        }), this.z = r, this.De = b({}, e.baseHeaders), this.t = u, this.An = sn(e.serviceEndpoints, l, d);
    }
    Se() {
        this.ft = Date.now();
    }
    zt(t) {
        this.ft && this.C && this.C.recordStreamInit(this.ft, !t, Date.now() - this.ft), this.ft = void 0;
    }
    Tn(t) {
        var e, i, r;
        return At(t) ? ((r = this.t) == null || r.warn(G(t, "streaming request", "will retry")), this.zt(!1), this.Se(), !0) : (this.zt(!1), (e = this.m) == null || e.call(this, new gt(M.ErrorResponse, t.message, t.status, !1)), (i = this.t) == null || i.error(G(t, "streaming request")), !1);
    }
    start() {
        this.Se();
        let t;
        this.Ut.useReport ? (this.De["content-type"] = "application/json", t = {
            method: "REPORT",
            body: this.xn
        }) : t = {};
        let e = this.z.createEventSource(this.An, U(b({
            headers: this.De
        }, t), {
            errorFilter: (i)=>this.Tn(i),
            initialRetryDelayMillis: this.Ut.initialRetryDelayMillis,
            readTimeoutMillis: 300000,
            retryResetIntervalMillis: 60000
        }));
        this.ke = e, e.onclose = ()=>{
            var i;
            (i = this.t) == null || i.info("Closed LaunchDarkly stream connection");
        }, e.onerror = ()=>{}, e.onopen = ()=>{
            var i;
            (i = this.t) == null || i.info("Opened LaunchDarkly stream connection");
        }, e.onretrying = (i)=>{
            var r;
            (r = this.t) == null || r.info(`Will retry stream connection in ${i.delayMillis} milliseconds`);
        }, this.n.forEach(({ deserializeData: i, processJson: r }, s)=>{
            e.addEventListener(s, (a)=>{
                var o, c;
                if (this.h) {
                    ca(s, this.t);
                    return;
                }
                if ((o = this.t) == null || o.debug(`Received ${s} event`), a != null && a.data) {
                    this.zt(!0);
                    let { data: u } = a, l = i(u);
                    if (!l) {
                        oa(s, u, this.t, this.m);
                        return;
                    }
                    r(l);
                } else (c = this.m) == null || c.call(this, new gt(M.InvalidData, "Unexpected payload from event stream"));
            });
        }), e.addEventListener("ping", async ()=>{
            var i, r, s, a, o, c, u;
            (i = this.t) == null || i.debug("Got PING, going to poll LaunchDarkly for feature flag updates");
            try {
                let l = await this.Ln.requestPayload();
                try {
                    if (this.h) {
                        Di(this.t);
                        return;
                    }
                    let d = JSON.parse(l);
                    try {
                        (r = this.n.get("put")) == null || r.processJson(d);
                    } catch (f) {
                        (s = this.t) == null || s.error(`Exception from data handler: ${f}`);
                    }
                } catch (d) {
                    (a = this.t) == null || a.error("Polling after ping received invalid data"), (o = this.t) == null || o.debug(`Invalid JSON follows: ${l}`), (c = this.m) == null || c.call(this, new lt(M.InvalidData, "Malformed JSON data in ping polling response"));
                }
            } catch (l) {
                if (this.h) {
                    Di(this.t);
                    return;
                }
                let d = l;
                (u = this.m) == null || u.call(this, new lt(M.ErrorResponse, d.message, d.status));
            }
        });
    }
    stop() {
        var t;
        (t = this.ke) == null || t.close(), this.ke = void 0, this.h = !0;
    }
    close() {
        this.stop();
    }
}, Se = class {
    constructor(t, e, i, r, s, a, o, c, u){
        this.platform = t, this.flagManager = e, this.credential = i, this.config = r, this.getPollingPaths = s, this.getStreamingPaths = a, this.baseHeaders = o, this.emitter = c, this.diagnosticsManager = u, this.closed = !1, this.logger = r.logger, this.dataSourceStatusManager = Ki(c), this.q = aa(e, this.dataSourceStatusManager, this.config.logger);
    }
    setConnectionParams(t) {
        this.On = t;
    }
    createPollingProcessor(t, e, i, r, s) {
        let a = new wn(i, this.config.pollInterval, async (o)=>{
            await this.q.handlePut(e, o), r == null || r();
        }, (o)=>{
            this.emitter.emit("error", t, o), this.q.handlePollingError(o), s == null || s(o);
        }, this.logger);
        this.updateProcessor = this.Ce(a, this.dataSourceStatusManager);
    }
    createStreamingProcessor(t, e, i, r, s) {
        var o;
        let a = new En(JSON.stringify(t), {
            credential: this.credential,
            serviceEndpoints: this.config.serviceEndpoints,
            paths: this.getStreamingPaths(),
            baseHeaders: this.baseHeaders,
            initialRetryDelayMillis: this.config.streamInitialReconnectDelay * 1e3,
            withReasons: this.config.withReasons,
            useReport: this.config.useReport,
            queryParameters: (o = this.On) == null ? void 0 : o.queryParameters
        }, this.createStreamListeners(e, r), this.platform.requests, this.platform.encoding, i, this.diagnosticsManager, (c)=>{
            this.emitter.emit("error", t, c), this.q.handleStreamingError(c), s == null || s(c);
        }, this.logger);
        this.updateProcessor = this.Ce(a, this.dataSourceStatusManager);
    }
    createStreamListeners(t, e) {
        let i = new Map;
        return i.set("put", {
            deserializeData: JSON.parse,
            processJson: async (r)=>{
                await this.q.handlePut(t, r), e == null || e();
            }
        }), i.set("patch", {
            deserializeData: JSON.parse,
            processJson: async (r)=>{
                this.q.handlePatch(t, r);
            }
        }), i.set("delete", {
            deserializeData: JSON.parse,
            processJson: async (r)=>{
                this.q.handleDelete(t, r);
            }
        }), i;
    }
    Ce(t, e) {
        return {
            start: ()=>{
                e.requestStateUpdate("INITIALIZING"), t.start();
            },
            stop: ()=>{
                t.stop(), e.requestStateUpdate("CLOSED");
            },
            close: ()=>{
                t.close(), e.requestStateUpdate("CLOSED");
            }
        };
    }
    close() {
        var t;
        (t = this.updateProcessor) == null || t.close(), this.closed = !0;
    }
};
function ua(n, t) {
    return Object.entries(n).every(([e, i])=>i === void 0 || t[e] === i);
}
var la = {
    foreground: "foregroundMode",
    background: "backgroundMode"
};
function da(n, t) {
    let e = n.find((i)=>ua(i.conditions, t));
    if (e) {
        let { mode: i } = e;
        return typeof i == "object" ? t[la[i.configured]] : i;
    }
    return t.foregroundMode;
}
var Ji = [
    {
        conditions: {
            networkAvailable: !1
        },
        mode: "offline"
    },
    {
        conditions: {},
        mode: {
            configured: "foreground"
        }
    }
];
function ft(n, t, e, i, r) {
    return {
        type: "changeSet",
        payload: n,
        fdv1Fallback: t,
        environmentId: e,
        freshness: i,
        fdv1FallbackTtlMs: r
    };
}
function V(n, t, e) {
    return {
        type: "status",
        state: "interrupted",
        errorInfo: n,
        fdv1Fallback: t,
        fdv1FallbackTtlMs: e
    };
}
function X() {
    return {
        type: "status",
        state: "shutdown",
        fdv1Fallback: !1
    };
}
function Ft(n, t, e) {
    return {
        type: "status",
        state: "terminal_error",
        errorInfo: n,
        fdv1Fallback: t,
        fdv1FallbackTtlMs: e
    };
}
function Wi(n, t, e) {
    return {
        type: "status",
        state: "goodbye",
        reason: n,
        fdv1Fallback: t,
        fdv1FallbackTtlMs: e
    };
}
function Et(n) {
    return {
        kind: M.ErrorResponse,
        message: `Unexpected status code: ${n}`,
        statusCode: n,
        time: Date.now()
    };
}
function ke(n) {
    return {
        kind: M.NetworkError,
        message: n,
        time: Date.now()
    };
}
function pt(n) {
    return {
        kind: M.InvalidData,
        message: n,
        time: Date.now()
    };
}
function bn(n) {
    return {
        kind: M.Unknown,
        message: n,
        time: Date.now()
    };
}
function ha(n) {
    let i = n, { version: t } = i;
    return ee(i, [
        "version"
    ]);
}
async function fa(n) {
    let { storage: t, crypto: e, environmentNamespace: i, context: r, logger: s } = n;
    if (!t) return s == null || s.debug("No storage available for cache initializer"), ft({
        version: 0,
        type: "none",
        updates: []
    }, !1);
    let a = await Ui(t, e, i, r, s);
    if (!a) return s == null || s.debug("Cache miss for context"), ft({
        version: 0,
        type: "none",
        updates: []
    }, !1);
    let c = {
        version: 0,
        type: "full",
        updates: Object.entries(a.flags).map(([l, d])=>({
                kind: "flag-eval",
                key: l,
                version: d.version,
                object: ha(d)
            }))
    }, u = await _s(t, e, i, r, s);
    return s == null || s.debug("Loaded cached flag evaluations via cache initializer"), ft(c, !1, void 0, u);
}
function pa(n) {
    return {
        isCache: !0,
        create (t) {
            let e, i = new Promise((r)=>{
                e = r;
            });
            return {
                async run () {
                    return Promise.race([
                        i,
                        fa(n)
                    ]);
                },
                close () {
                    e == null || e(X()), e = void 0;
                }
            };
        }
    };
}
function Yi(n, t, e, i, r, s, a, o) {
    let c = b({}, s), u, l = "GET", d;
    return o ? (l = "POST", c["content-type"] = "application/json", u = n, d = e.pathPost(r, n)) : d = e.pathGet(r, n), {
        async poll (f) {
            let m = [
                ...a != null ? a : []
            ];
            f && m.push({
                key: "basis",
                value: f
            });
            let w = an(t, d, m), v = await i.fetch(w, {
                method: l,
                headers: c,
                body: u
            }), h = v.status === 304 ? null : await v.text();
            return {
                status: v.status,
                headers: v.headers,
                body: h
            };
        }
    };
}
function Zi(n) {
    return n;
}
function ma(n) {
    if (n.deleted) return {
        version: n.version,
        flag: {
            version: n.version,
            deleted: !0,
            value: void 0,
            trackEvents: !1
        }
    };
    let t = n.object;
    return {
        version: n.version,
        flag: U(b({}, t), {
            version: n.version
        })
    };
}
function ya(n) {
    let t = {};
    return n.forEach((e)=>{
        e.kind === "flag-eval" && (t[e.key] = ma(e));
    }), t;
}
function ga(n) {
    let t = n.get("x-ld-fd-fallback");
    return t !== null && t.toLowerCase() === "true";
}
function va(n) {
    var t;
    return (t = n.get("x-ld-envid")) != null ? t : void 0;
}
function wa(n, t, e, i) {
    let r = _.createProtocolHandler({
        "flag-eval": Zi
    }, i), s;
    if (n.forEach((o)=>{
        if (s) return;
        let c = r.processEvent(o);
        switch(c.type){
            case "payload":
                s = ft(c.payload, t, e);
                break;
            case "goodbye":
                s = Wi(c.reason, t);
                break;
            case "serverError":
                {
                    let u = bn(c.reason);
                    i == null || i.error(`Server error during polling: ${c.reason}`), s = V(u, t);
                    break;
                }
            case "error":
                if (c.kind === "MISSING_PAYLOAD" || c.kind === "PROTOCOL_ERROR") {
                    let u = pt(c.message);
                    i == null || i.warn(`Protocol error during polling: ${c.message}`), s = V(u, t);
                } else i == null || i.warn(c.message);
                break;
        }
    }), s) return s;
    let a = bn("Unexpected end of polling response");
    return i == null || i.error("Unexpected end of polling response"), V(a, t);
}
async function Fn(n, t, e) {
    var s;
    let i = !1, r;
    try {
        let a = await n.poll(t);
        if (i = ga(a.headers), r = va(a.headers), a.status === 304) return ft({
            version: 0,
            type: "none",
            updates: []
        }, i, r);
        if (a.status < 200 || a.status >= 300) {
            let c = Et(a.status);
            return e == null || e.error(`Polling request failed with HTTP error: ${a.status}`), a.status <= 0 || ht(a.status) ? V(c, i) : Ft(c, i);
        }
        if (!a.body) {
            let c = pt("Empty response body");
            return e == null || e.error("Polling request received empty response body"), V(c, i);
        }
        let o;
        try {
            o = JSON.parse(a.body);
        } catch (c) {
            let u = pt("Malformed JSON data in polling response");
            return e == null || e.error("Polling request received malformed data"), V(u, i);
        }
        if (!Array.isArray(o.events)) {
            let c = pt("Invalid polling response: missing or invalid events array");
            return e == null || e.error("Polling response does not contain a valid events array"), V(c, i);
        }
        return wa(o.events, i, r, e);
    } catch (a) {
        let o = (s = a == null ? void 0 : a.message) != null ? s : String(a);
        e == null || e.error(`Polling request failed with network error: ${o}`);
        let c = ke(o);
        return V(c, i);
    }
}
var ln = Symbol("shutdown");
function Ea(n, t, e) {
    let i, r = new Promise((s)=>{
        i = s;
    });
    return {
        async run () {
            let o = e(), c;
            for(let l = 0; l <= 3; l += 1){
                let d = await Promise.race([
                    r,
                    Fn(n, o, t)
                ]);
                if (d === ln) return X();
                if (d.type === "changeSet" || d.state !== "interrupted") return d;
                if (c = d, l < 3 && (t == null || t.warn(`Recoverable polling error (attempt ${l + 1}/4), retrying in 1000ms...`), await Promise.race([
                    r,
                    Ot(1e3)
                ]) === ln)) return X();
            }
            let u = c;
            return Ft(u.errorInfo, u.fdv1Fallback);
        },
        close () {
            i == null || i(ln), i = void 0;
        }
    };
}
function $n() {
    let n = [], t = [];
    return {
        put (e) {
            let i = t.shift();
            i ? i(e) : n.push(e);
        },
        take () {
            return n.length > 0 ? Promise.resolve(n.shift()) : new Promise((e)=>{
                t.push(e);
            });
        }
    };
}
function ba(n, t, e, i) {
    let r = $n(), s, a = new Promise((l)=>{
        s = l;
    }), o, c = !1;
    async function u() {
        if (c) return;
        let l = Date.now();
        try {
            let d = await Fn(n, e(), t);
            if (c) return;
            let f = !1;
            if (d.type === "status") switch(d.state){
                case "terminal_error":
                    c = !0, f = !0;
                    break;
                case "interrupted":
                case "goodbye":
                    break;
                case "shutdown":
                    break;
                default:
                    break;
            }
            f ? (s == null || s(d), s = void 0) : r.put(d);
        } catch (d) {
            t == null || t.debug(`Polling error: ${d}`);
        }
        if (!c) {
            let d = Date.now() - l, f = Math.min(Math.max(i - d, 0), i);
            o = setTimeout(()=>{
                u();
            }, f);
        }
    }
    return u(), {
        async next () {
            return Promise.race([
                a,
                r.take()
            ]);
        },
        close () {
            c = !0, o !== void 0 && (clearTimeout(o), o = void 0), s == null || s(X()), s = void 0;
        }
    };
}
function Dn(n, t) {
    var r, s;
    let e = (r = t == null ? void 0 : t.isFDv1Fallback) != null ? r : !1, i = (s = t == null ? void 0 : t.initialState) != null ? s : e ? "blocked" : "available";
    return {
        factory: n,
        isFDv1Fallback: e,
        state: i
    };
}
function Da(n, t, e) {
    let i, r = -1, s = -1, a = !1;
    function o() {
        i && (i.close(), i = void 0);
    }
    function c() {
        return t.findIndex((u)=>u.state === "available");
    }
    return {
        get isShutdown () {
            return a;
        },
        getNextInitializerAndSetActive () {
            if (a || (r += 1, r >= n.length)) return;
            o();
            let u = n[r].create(e);
            return i = u, u;
        },
        getNextAvailableSynchronizerAndSetActive () {
            if (a || t.length === 0) return;
            let u = 0;
            for(; u < t.length;){
                s += 1, s >= t.length && (s = 0);
                let l = t[s];
                if (l.state === "available") {
                    o();
                    let d = l.factory.create(e);
                    return i = d, d;
                }
                u += 1;
            }
        },
        blockCurrentSynchronizer () {
            s >= 0 && s < t.length && (t[s].state = "blocked");
        },
        resetSourceIndex () {
            s = -1;
        },
        fdv1Fallback () {
            t.forEach((u)=>{
                u.state = u.isFDv1Fallback ? "available" : "blocked";
            }), s = -1;
        },
        isPrimeSynchronizer () {
            return s === c();
        },
        getAvailableSynchronizerCount () {
            return t.filter((u)=>u.state === "available").length;
        },
        hasFDv1Fallback () {
            return t.some((u)=>u.isFDv1Fallback);
        },
        close () {
            a = !0, o();
        }
    };
}
var Sa = [
    "server-intent",
    "put-object",
    "delete-object",
    "payload-transferred",
    "goodbye",
    "error",
    "heart-beat"
];
function ka(n) {
    let t = $n(), e = _.createProtocolHandler({
        "flag-eval": Zi
    }, n.logger), i = b({}, n.headers);
    function r() {
        var S;
        let h = [
            ...n.parameters
        ], y = (S = n.selectorGetter) == null ? void 0 : S.call(n);
        return y && h.push({
            key: "basis",
            value: encodeURIComponent(y)
        }), sn(n.serviceEndpoints, n.streamUriPath, h);
    }
    let s, a, o = !1, c = !1, u = !1;
    function l() {
        a = Date.now();
    }
    function d(h) {
        a && n.diagnosticsManager && n.diagnosticsManager.recordStreamInit(a, !h, Date.now() - a), a = void 0;
    }
    function f(h) {
        switch(h.type){
            case "payload":
                d(!0), t.put(ft(h.payload, o));
                break;
            case "goodbye":
                t.put(Wi(h.reason, o));
                break;
            case "serverError":
                t.put(V(bn(h.reason), o));
                break;
            case "error":
                (h.kind === "MISSING_PAYLOAD" || h.kind === "PROTOCOL_ERROR") && t.put(V(pt(h.message), o));
                break;
        }
    }
    function m(h) {
        var y, S, k, L, A, E;
        return ((y = h.headers) == null ? void 0 : y["x-ld-fd-fallback"]) === "true" ? (o = !0, d(!1), t.put(Ft(Et((S = h.status) != null ? S : 0), !0)), !1) : At(h) ? ((A = n.logger) == null || A.warn(G(h, "streaming request", "will retry")), d(!1), l(), t.put(V(Et((E = h.status) != null ? E : 0), o)), !0) : ((k = n.logger) == null || k.error(G(h, "streaming request")), d(!1), t.put(Ft(Et((L = h.status) != null ? L : 0), o)), !1);
    }
    function w(h) {
        Sa.forEach((y)=>{
            h.addEventListener(y, (S)=>{
                var A, E, g, C, P;
                if (u) {
                    (A = n.logger) == null || A.debug(`Received ${y} event after processor was closed. Skipping.`);
                    return;
                }
                if (!(S != null && S.data)) {
                    y !== "error" && ((E = n.logger) == null || E.warn(`Event from EventStream missing data for "${y}".`));
                    return;
                }
                (g = n.logger) == null || g.debug(`Received ${y} event`);
                let k;
                try {
                    k = JSON.parse(S.data);
                } catch ($) {
                    (C = n.logger) == null || C.error(`Stream received data that was unable to be parsed in "${y}" message`), (P = n.logger) == null || P.debug(`Data follows: ${S.data}`), t.put(V(pt("Malformed JSON in EventStream"), o));
                    return;
                }
                let L = e.processEvent({
                    event: y,
                    data: k
                });
                f(L);
            });
        });
    }
    function v(h) {
        h.addEventListener("ping", async ()=>{
            var y, S, k, L, A, E, g;
            if (u) {
                (y = n.logger) == null || y.debug("Ping received after processor was closed. Skipping.");
                return;
            }
            if ((S = n.logger) == null || S.debug("Got PING, going to poll LaunchDarkly for feature flag updates"), !n.pingHandler) {
                (k = n.logger) == null || k.warn("Ping event received but no ping handler configured.");
                return;
            }
            try {
                let C = await n.pingHandler.handlePing();
                if (u) {
                    (L = n.logger) == null || L.debug("Ping completed after processor was closed. Skipping processing.");
                    return;
                }
                t.put(C);
            } catch (C) {
                if (u) return;
                (E = n.logger) == null || E.error(`Error handling ping: ${(A = C == null ? void 0 : C.message) != null ? A : C}`), t.put(V(ke((g = C == null ? void 0 : C.message) != null ? g : "Error during ping poll"), o));
            }
        });
    }
    return {
        start () {
            if (c || u) return;
            c = !0, l();
            let h = n.requests.createEventSource(r(), {
                headers: i,
                errorFilter: (y)=>m(y),
                initialRetryDelayMillis: n.initialRetryDelayMillis,
                readTimeoutMillis: 300000,
                retryResetIntervalMillis: 60000,
                urlBuilder: r
            });
            s = h, w(h), v(h), h.onclose = ()=>{
                var y;
                (y = n.logger) == null || y.info("Closed LaunchDarkly stream connection");
            }, h.onerror = (y)=>{
                var S;
                u || y && typeof y.status == "number" || t.put(V(ke((S = y == null ? void 0 : y.message) != null ? S : "IO Error"), o));
            }, h.onopen = ()=>{
                var y;
                (y = n.logger) == null || y.info("Opened LaunchDarkly stream connection"), e.reset();
            }, h.onretrying = (y)=>{
                var S;
                (S = n.logger) == null || S.info(`Will retry stream connection in ${y.delayMillis} milliseconds`);
            };
        },
        close () {
            u || (u = !0, s == null || s.close(), s = void 0, t.put(X()));
        },
        takeResult () {
            return t.take();
        }
    };
}
function Ca(n) {
    let t = !1, e, i = new Promise((r)=>{
        e = r;
    });
    return {
        run () {
            return t ? Promise.resolve(X()) : (n.start(), Promise.race([
                n.takeResult().then((r)=>(n.close(), r)),
                i
            ]));
        },
        close () {
            t || (t = !0, n.close(), e == null || e(X()), e = void 0);
        }
    };
}
function Ia(n) {
    let t = !1, e = !1, i, r = new Promise((s)=>{
        i = s;
    });
    return {
        next () {
            return e ? Promise.resolve(X()) : (t || (t = !0, n.start()), Promise.race([
                n.takeResult(),
                r
            ]));
        },
        close () {
            e || (e = !0, n.close(), i == null || i(X()), i = void 0);
        }
    };
}
function Pa(n, t, e) {
    return {
        handlePing: ()=>Fn(n, t(), e)
    };
}
function Xi(n, t) {
    var e, i;
    return !(t != null && t.pollingBaseUri) && !(t != null && t.streamingBaseUri) ? n.serviceEndpoints : new tt((e = t.streamingBaseUri) != null ? e : n.serviceEndpoints.streaming, (i = t.pollingBaseUri) != null ? i : n.serviceEndpoints.polling, n.serviceEndpoints.events, n.serviceEndpoints.analyticsEventPath, n.serviceEndpoints.diagnosticEventPath, n.serviceEndpoints.includeAuthorizationHeader, n.serviceEndpoints.payloadFilterKey);
}
function Sn(n, t) {
    if (!(t != null && t.pollingBaseUri)) return n.requestor;
    let e = Xi(n, t);
    return Yi(n.plainContextString, e, n.polling.paths, n.requests, n.encoding, n.baseHeaders, n.queryParams);
}
function Si(n, t, e) {
    var a;
    let i = Xi(t, n.endpoints), r = Sn(t, n.endpoints), s = t.streaming.paths.pathGet(t.encoding, t.plainContextString);
    return ka({
        requests: t.requests,
        serviceEndpoints: i,
        streamUriPath: s,
        parameters: t.queryParams,
        selectorGetter: e,
        headers: t.baseHeaders,
        initialRetryDelayMillis: ((a = n.initialReconnectDelay) != null ? a : t.streaming.initialReconnectDelaySeconds) * 1e3,
        logger: t.logger,
        pingHandler: Pa(r, e, t.logger)
    });
}
function Qi() {
    return {
        createInitializerFactory (n, t) {
            switch(n.type){
                case "polling":
                    {
                        let e = Sn(t, n.endpoints);
                        return {
                            create: (i)=>Ea(e, t.logger, i)
                        };
                    }
                case "streaming":
                    return {
                        create: (e)=>Ca(Si(n, t, e))
                    };
                case "cache":
                    return pa({
                        storage: t.storage,
                        crypto: t.crypto,
                        environmentNamespace: t.environmentNamespace,
                        context: t.context,
                        logger: t.logger
                    });
                default:
                    return;
            }
        },
        createSynchronizerSlot (n, t) {
            var e;
            switch(n.type){
                case "polling":
                    {
                        let i = ((e = n.pollInterval) != null ? e : t.polling.intervalSeconds) * 1e3, r = Sn(t, n.endpoints);
                        return Dn({
                            create: (s)=>ba(r, t.logger, s, i)
                        });
                    }
                case "streaming":
                    return Dn({
                        create: (i)=>Ia(Si(n, t, i))
                    });
                default:
                    return;
            }
        }
    };
}
function xa(n) {
    return {
        version: 1,
        type: "full",
        updates: Object.entries(n).map(([e, i])=>{
            var r;
            return {
                kind: "flag-eval",
                key: e,
                version: (r = i.version) != null ? r : 1,
                object: i
            };
        })
    };
}
function La(n, t, e) {
    let i = $n(), r, s = new Promise((d)=>{
        r = d;
    }), a, o = !1, c = !1;
    function u(d) {
        if (!o) {
            let f = Date.now() - d, m = Math.min(Math.max(t - f, 0), t);
            a = setTimeout(l, m);
        }
    }
    async function l() {
        if (o) return;
        e == null || e.debug("Polling FDv1 endpoint for feature flag updates");
        let d = Date.now();
        try {
            let f = await n.requestPayload();
            if (o) return;
            let m;
            try {
                let w = JSON.parse(f);
                m = xa(w);
            } catch (w) {
                e == null || e.error("FDv1 polling received malformed data"), i.put({
                    type: "status",
                    state: "interrupted",
                    errorInfo: pt("Malformed data in FDv1 polling response"),
                    fdv1Fallback: !1
                }), u(d);
                return;
            }
            i.put(ft(m, !1));
        } catch (f) {
            if (o) return;
            let m = f;
            if (m.status !== void 0 && !ht(m.status)) {
                e == null || e.error(G(f, "FDv1 polling request")), o = !0, r == null || r(Ft(Et(m.status), !1)), r = void 0;
                return;
            }
            e == null || e.warn(G(f, "FDv1 polling request", "will retry")), i.put({
                type: "status",
                state: "interrupted",
                errorInfo: m.status ? Et(m.status) : ke(m.message),
                fdv1Fallback: !1
            });
        }
        u(d);
    }
    return {
        next () {
            return c || (c = !0, l()), Promise.race([
                s,
                i.take()
            ]);
        },
        close () {
            o = !0, a !== void 0 && (clearTimeout(a), a = void 0), r == null || r(X()), r = void 0;
        }
    };
}
var tr = 120000, er = 300000;
function Aa(n, t, e) {
    let i = on(n / 1e3, e);
    return {
        promise: i.promise.then(()=>new Promise(()=>{}), ()=>t),
        cancel: i.cancel
    };
}
function nr(n, t, e) {
    let i, r, s = !1, a = new Promise((u)=>{
        i = u;
    });
    function o() {
        !r && !s && (r = Aa(n, t, `${t} condition`), r.promise.then((u)=>{
            r = void 0, i == null || i(u);
        }));
    }
    function c() {
        r == null || r.cancel(), r = void 0;
    }
    return e || o(), {
        promise: a,
        inform (u) {
            s || e == null || e(u, {
                start: o,
                cancel: c
            });
        },
        close () {
            s = !0, c();
        }
    };
}
function ki(n) {
    return nr(n, "fallback", (t, { start: e, cancel: i })=>{
        t.type === "changeSet" ? i() : t.type === "status" && t.state === "interrupted" && e();
    });
}
function Ta(n) {
    return nr(n, "recovery");
}
function dn(n) {
    return {
        promise: n.length === 0 ? void 0 : Promise.race(n.map((t)=>t.promise)),
        inform (t) {
            n.forEach((e)=>e.inform(t));
        },
        close () {
            n.forEach((t)=>t.close());
        }
    };
}
function Oa(n, t, e = tr, i = er) {
    return n <= 1 ? dn([]) : dn(t ? [
        ki(e)
    ] : [
        ki(e),
        Ta(i)
    ]);
}
function Ma(n) {
    let { initializerFactories: t, synchronizerSlots: e, dataCallback: i, statusManager: r, selectorGetter: s, logger: a, fallbackTimeoutMs: o = tr, recoveryTimeoutMs: c = er } = n, u = !1, l = !1, d = !1, f, m, w = t.length > 0 && t.every((g)=>g.isCache === !0) && e.length === 0, v = Da(t, e, s);
    function h() {
        u || (u = !0, f == null || f(), f = void 0, m = void 0);
    }
    function y(g) {
        i(g.payload), r.requestStateUpdate("VALID");
    }
    function S(g) {
        g.errorInfo && r.reportError(g.errorInfo.kind, g.errorInfo.message, g.errorInfo.statusCode, g.state === "interrupted");
    }
    function k(g) {
        return g.fdv1Fallback && v.hasFDv1Fallback() ? (v.fdv1Fallback(), !0) : !1;
    }
    async function L() {
        var C, P;
        let g = !1;
        for(; !l;){
            let $ = v.getNextInitializerAndSetActive();
            if ($ === void 0) break;
            let T = await $.run();
            if (l) return;
            if (T.type === "changeSet" && T.payload.type !== "none") {
                if (y(T), k(T)) {
                    d = !0;
                    break;
                }
                if (T.payload.state) {
                    h();
                    return;
                }
                d = !0;
            } else if (T.type === "status") {
                switch(T.state){
                    case "interrupted":
                    case "terminal_error":
                        a == null || a.warn(`Initializer failed: ${(P = (C = T.errorInfo) == null ? void 0 : C.message) != null ? P : "unknown error"}`), S(T), g = !0;
                        break;
                    case "shutdown":
                        return;
                }
                k(T);
            }
        }
        l || (w ? (!d && !g && r.requestStateUpdate("VALID"), h()) : d && h());
    }
    async function A() {
        var g, C, P, $;
        for(; !l;){
            let T = v.getNextAvailableSynchronizerAndSetActive();
            if (T === void 0) {
                u || (m == null || m(new Error("All data sources exhausted without receiving data.")), f = void 0, m = void 0);
                return;
            }
            let B = Oa(v.getAvailableSynchronizerCount(), v.isPrimeSynchronizer(), o, c);
            B.promise && (a == null || a.debug("Fallback condition active for current synchronizer."));
            let j = !0;
            try {
                for(; !l && j;){
                    let mt = [
                        T.next().then((O)=>({
                                source: "sync",
                                value: O
                            }))
                    ];
                    B.promise !== void 0 && mt.push(B.promise.then((O)=>({
                            source: "condition",
                            value: O
                        })));
                    let ot = await Promise.race(mt);
                    if (l) return;
                    if (ot.source === "condition") {
                        let O = ot.value;
                        O === "fallback" ? a == null || a.warn("Fallback condition fired, moving to next synchronizer.") : O === "recovery" && (a == null || a.info("Recovery condition fired, resetting to primary synchronizer."), v.resetSourceIndex()), j = !1;
                    } else {
                        let O = ot.value;
                        if (B.inform(O), O.type === "changeSet") y(O), u || h();
                        else if (O.type === "status") switch(O.state){
                            case "interrupted":
                                a == null || a.warn(`Synchronizer interrupted: ${(C = (g = O.errorInfo) == null ? void 0 : g.message) != null ? C : "unknown error"}`), S(O);
                                break;
                            case "terminal_error":
                                a == null || a.error(`Synchronizer terminal error: ${($ = (P = O.errorInfo) == null ? void 0 : P.message) != null ? $ : "unknown error"}`), S(O), v.blockCurrentSynchronizer(), j = !1;
                                break;
                            case "shutdown":
                                return;
                            case "goodbye":
                                break;
                            default:
                                break;
                        }
                        k(O) && (j = !1);
                    }
                }
            } finally{
                B.close();
            }
        }
    }
    async function E() {
        if (t.length === 0 && e.length === 0) {
            r.requestStateUpdate("VALID"), h();
            return;
        }
        await L(), l || await A();
    }
    return {
        start () {
            return new Promise((g, C)=>{
                f = g, m = C, r.requestStateUpdate("INITIALIZING"), E().then(()=>{
                    u || (m == null || m(new Error("Data source closed before initialization completed.")), f = void 0, m = void 0);
                }).catch((P)=>{
                    u ? a == null || a.error(`Orchestration error: ${P}`) : (m == null || m(P instanceof Error ? P : new Error(String(P))), f = void 0, m = void 0);
                });
            });
        },
        close () {
            l = !0, v.close();
        }
    };
}
var Fa = 1e3;
function $a(n) {
    let { initialState: t, onReconcile: e, debounceMs: i = Fa } = n, { networkState: r, lifecycleState: s, requestedMode: a } = t, o, c = !1;
    function u() {
        return {
            networkState: r,
            lifecycleState: s,
            requestedMode: a
        };
    }
    function l() {
        c || (o !== void 0 && clearTimeout(o), o = setTimeout(()=>{
            o = void 0, c || e(u());
        }, i));
    }
    return {
        setNetworkState (d) {
            r !== d && (r = d, l());
        },
        setLifecycleState (d) {
            s !== d && (s = d, l());
        },
        setRequestedMode (d) {
            a !== d && (a = d, l());
        },
        close () {
            c = !0, o !== void 0 && (clearTimeout(o), o = void 0);
        }
    };
}
var K = "[FDv2DataManagerBase]";
function ir(n) {
    var Gn;
    let { platform: t, flagManager: e, config: i, baseHeaders: r, emitter: s, transitionTable: a, foregroundMode: o, backgroundMode: c, modeTable: u, sourceFactoryProvider: l, buildQueryParams: d, fdv1Endpoints: f, fallbackTimeoutMs: m, recoveryTimeoutMs: w } = n, { logger: v } = i, h = Ki(s), y = sa(), S = (Gn = i.dataSystem) != null && Gn.connectionModes ? b(b({}, u), i.dataSystem.connectionModes) : u, k, L = o, A = o, E, g, C, P, $ = !1, T = !1, B = !1, j, Te = "fresh", mt, ot, O = !1, R, Q, Zt = "available", Dt = "foreground";
    function Bn(D) {
        return S[D];
    }
    function mr() {
        return {
            lifecycle: Dt,
            networkAvailable: Zt === "available",
            foregroundMode: A,
            backgroundMode: c != null ? c : "offline"
        };
    }
    function Hn() {
        return mt !== void 0 ? mt : da(a, mr());
    }
    function qn() {
        return ot === !0 ? "streaming" : ot === !1 ? o === "streaming" ? "one-shot" : o : O ? "streaming" : o;
    }
    function Oe() {
        A = qn(), g == null || g.setRequestedMode(A);
    }
    function yr(D, I, W) {
        var ct, nt, St, Xt, Qt;
        let N = [];
        W && D.initializers.filter((x)=>!(T && x.type === "cache")).forEach((x)=>{
            let it = l.createInitializerFactory(x, I);
            it ? N.push(it) : v.warn(`${K} Unsupported initializer type '${x.type}'. It will be skipped.`);
        });
        let q = [];
        if (D.synchronizers.forEach((x)=>{
            let it = l.createSynchronizerSlot(x, I);
            it ? q.push(it) : v.warn(`${K} Unsupported synchronizer type '${x.type}'. It will be skipped.`);
        }), f && q.length > 0) {
            let x = D.fdv1Fallback, it = ((ct = x == null ? void 0 : x.pollInterval) != null ? ct : i.pollInterval) * 1e3, wr = (nt = x == null ? void 0 : x.endpoints) != null && nt.pollingBaseUri || (St = x == null ? void 0 : x.endpoints) != null && St.streamingBaseUri ? new tt((Xt = x.endpoints.streamingBaseUri) != null ? Xt : I.serviceEndpoints.streaming, (Qt = x.endpoints.pollingBaseUri) != null ? Qt : I.serviceEndpoints.polling, I.serviceEndpoints.events, I.serviceEndpoints.analyticsEventPath, I.serviceEndpoints.diagnosticEventPath, I.serviceEndpoints.includeAuthorizationHeader, I.serviceEndpoints.payloadFilterKey) : I.serviceEndpoints, Er = ()=>Ce(I.plainContextString, wr, f.polling(), I.requests, I.encoding, I.baseHeaders, I.queryParams, i.withReasons, i.useReport), br = {
                create: ()=>La(Er(), it, v)
            };
            q.push(Dn(br, {
                isFDv1Fallback: !0
            }));
        }
        return {
            initializerFactories: N,
            synchronizerSlots: q
        };
    }
    function gr(D) {
        var N;
        v.debug(`${K} dataCallback: type=${D.type}, updates=${D.updates.length}, state=${D.state}`), k = D.state;
        let I = C;
        if (!I) {
            v.warn(`${K} dataCallback called without an identified context.`);
            return;
        }
        let W = ya((N = D.updates) != null ? N : []);
        e.applyChanges(I, W, D.type).catch((q)=>{
            v.warn(`${K} Failed to persist flag cache: ${q}`);
        }), Te === "cached" && !$ && R && ($ = !0, R(), R = void 0, Q = void 0);
    }
    function Me(D, I) {
        if (!P) {
            v.warn(`${K} Cannot create data source without factory context.`);
            return;
        }
        let W = Bn(D), { initializerFactories: N, synchronizerSlots: q } = yr(W, P, I);
        if (L = D, N.length === 0 && q.length === 0) {
            v.debug(`${K} Mode '${D}' has no sources. No data source created.`), !$ && R && ($ = !0, R(), R = void 0, Q = void 0);
            return;
        }
        E = Ma({
            initializerFactories: N,
            synchronizerSlots: q,
            dataCallback: gr,
            statusManager: h,
            selectorGetter: ()=>k,
            logger: v,
            fallbackTimeoutMs: m,
            recoveryTimeoutMs: w
        }), E.start().then(()=>{
            $ = !0, R && (R(), R = void 0, Q = void 0);
        }).catch((nt)=>{
            Q && (Q(nt instanceof Error ? nt : new Error(String(nt))), R = void 0, Q = void 0);
        });
    }
    function vr(D) {
        if (B || !P) return;
        Zt = D.networkState, Dt = D.lifecycleState, A = D.requestedMode;
        let I = Hn();
        if (I === L) {
            v.debug(`${K} Reconcile: mode unchanged (${I}). No action.`);
            return;
        }
        v.debug(`${K} Reconcile: mode switching from '${L}' to '${I}'.`), E == null || E.close(), E = void 0, Me(I, !k);
    }
    return {
        get configuredForegroundMode () {
            return o;
        },
        async identify (D, I, W, N) {
            if (B) {
                v.debug(`${K} Identify called after close.`);
                return;
            }
            E == null || E.close(), E = void 0, g == null || g.close(), g = void 0, k = void 0, $ = !1, T = !1, Te = N != null && N.waitForNetworkResults ? "fresh" : "cached", C = W, R = D, Q = I;
            let q = JSON.stringify(J.toLDContext(W)), ct = d(N);
            i.withReasons && ct.push({
                key: "withReasons",
                value: "true"
            });
            let nt = y.streaming(), St = y.polling(), Xt = Yi(q, i.serviceEndpoints, St, t.requests, t.encoding, r, ct), Qt = await Fi(t.crypto, n.credential);
            if (B) {
                v.debug(`${K} Identify aborted: closed during async setup.`);
                return;
            }
            P = {
                requestor: Xt,
                requests: t.requests,
                encoding: t.encoding,
                serviceEndpoints: i.serviceEndpoints,
                baseHeaders: r,
                queryParams: ct,
                plainContextString: q,
                logger: v,
                polling: {
                    paths: St,
                    intervalSeconds: i.pollInterval
                },
                streaming: {
                    paths: nt,
                    initialReconnectDelaySeconds: i.streamInitialReconnectDelay
                },
                storage: t.storage,
                crypto: t.crypto,
                environmentNamespace: Qt,
                context: W
            }, A = qn();
            let x = Hn();
            v.debug(`${K} Identify: initial mode resolved to '${x}'.`), T = (N == null ? void 0 : N.bootstrap) !== void 0, T ? ($ = !0, h.requestStateUpdate("VALID"), R == null || R(), R = void 0, Q = void 0, Bn(x).synchronizers.length > 0 && Me(x, !1)) : Me(x, !0), g = $a({
                initialState: {
                    networkState: Zt,
                    lifecycleState: Dt,
                    requestedMode: A
                },
                onReconcile: vr
            });
        },
        close () {
            B = !0, E == null || E.close(), E = void 0, g == null || g.close(), g = void 0, R = void 0, Q = void 0;
        },
        setNetworkState (D) {
            Zt = D, g == null || g.setNetworkState(D);
        },
        setLifecycleState (D) {
            D === "background" && Dt !== "background" && (j == null || j()), Dt = D, g == null || g.setLifecycleState(D);
        },
        setConnectionMode (D) {
            mt = D, D !== void 0 ? g == null || g.setRequestedMode(D) : Oe();
        },
        getCurrentMode () {
            return L;
        },
        setFlushCallback (D) {
            j = D;
        },
        setForcedStreaming (D) {
            ot = D, Oe();
        },
        setAutomaticStreamingState (D) {
            O = D, Oe();
        }
    };
}
function Rn() {
    return typeof document != "undefined";
}
function Pe() {
    return typeof window != "undefined";
}
function xe(n, t, e) {
    return Rn() ? (document.addEventListener(n, t, e), ()=>{
        document.removeEventListener(n, t, e);
    }) : ()=>{};
}
function Le(n, t, e) {
    return Pe() ? (window.addEventListener(n, t, e), ()=>{
        window.removeEventListener(n, t, e);
    }) : ()=>{};
}
function et() {
    return Pe() ? window.location.href : "";
}
function rr() {
    return Pe() ? window.location.search : "";
}
function sr() {
    return Pe() ? window.location.hash : "";
}
function ar() {
    if (typeof crypto != "undefined") return crypto;
    throw Error("Access to a web crypto API is required");
}
function or() {
    return Rn() ? document.visibilityState : "visibile";
}
function cr(n) {
    if (Rn()) return document.querySelectorAll(n);
}
var Ra = "[BrowserDataManager]", zt = class extends Se {
    constructor(e, i, r, s, a, o, c, u, l, d){
        super(e, i, r, s, o, c, u, l, d);
        this.Hn = a;
        this.Z = void 0;
        this.jt = !1;
        this.Z = a.streaming;
    }
    I(e, ...i) {
        this.logger.debug(`${Ra} ${e}`, ...i);
    }
    async identify(e, i, r, s) {
        if (this.closed) {
            this.I("Identify called after data manager was closed.");
            return;
        }
        this.context = r;
        let a = s;
        a != null && a.hash ? this.setConnectionParams({
            queryParameters: [
                {
                    key: "h",
                    value: a.hash
                }
            ]
        }) : this.setConnectionParams(), this._t = a == null ? void 0 : a.hash, a != null && a.bootstrap ? this.Mn(r, a, e) : (await this.flagManager.loadCached(r) && this.I("Identify - Flags loaded from cache. Continuing to initialize via a poll."), await this.Fn(r, e, i)), this.Ie(), this.Vt();
    }
    async $n(e) {
        let i = JSON.stringify(J.toLDContext(e)), r = Ce(i, this.config.serviceEndpoints, this.getPollingPaths(), this.platform.requests, this.platform.encoding, this.baseHeaders, [], this.config.withReasons, this.config.useReport, this._t), s = 3, a;
        for(let o = 0; o <= s; o += 1)try {
            return await r.requestPayload();
        } catch (c) {
            if (!At(c)) throw c;
            a = c, o < s && (this.I(G(c, "initial poll request", "will retry")), await Ot(1e3));
        }
        throw a;
    }
    async Fn(e, i, r) {
        var s, a;
        try {
            this.dataSourceStatusManager.requestStateUpdate(kn.Initializing);
            let o = await this.$n(e);
            try {
                let u = this.createStreamListeners(e, i).get("put");
                u.processJson(u.deserializeData(o));
            } catch (c) {
                this.dataSourceStatusManager.reportError(M.InvalidData, (s = c.message) != null ? s : "Could not parse poll response");
            }
        } catch (o) {
            this.dataSourceStatusManager.reportError(M.NetworkError, (a = o.message) != null ? a : "unexpected network error", o.status), r(o);
        }
    }
    Mn(e, i, r) {
        let { bootstrapParsed: s } = i;
        s || (s = On(this.logger, i.bootstrap)), this.flagManager.setBootstrap(e, s), this.dataSourceStatusManager.requestStateUpdate(kn.Valid), this.I("Identify - Initialization completed from bootstrap"), r();
    }
    setForcedStreaming(e) {
        this.Z = e, this.Vt();
    }
    setAutomaticStreamingState(e) {
        this.jt = e, this.Vt();
    }
    Vt() {
        let e = this.Z || this.jt && this.Z === void 0;
        this.I(`Updating streaming state. forced(${this.Z}) automatic(${this.jt})`), e ? this.Rn() : this.Ie();
    }
    Ie() {
        var e;
        this.updateProcessor && this.I("Stopping update processor."), (e = this.updateProcessor) == null || e.close(), this.updateProcessor = void 0;
    }
    Rn() {
        if (this.updateProcessor) {
            this.I("Update processor already active. Not changing state.");
            return;
        }
        if (!this.context) {
            this.I("Context not set, not starting update processor.");
            return;
        }
        this.I("Starting update processor."), this.Nn(this.context);
    }
    Nn(e, i, r) {
        var c;
        let s = J.toLDContext(e);
        (c = this.updateProcessor) == null || c.close();
        let a = JSON.stringify(J.toLDContext(e)), o = Ce(a, this.config.serviceEndpoints, this.getPollingPaths(), this.platform.requests, this.platform.encoding, this.baseHeaders, [], this.config.withReasons, this.config.useReport, this._t);
        this.createStreamingProcessor(s, e, o, i, r), this.updateProcessor.start();
    }
};
function ur(n) {
    let e = xe("visibilitychange", ()=>{
        or() === "hidden" && n();
    }), i = Le("pagehide", n);
    return ()=>{
        e(), i();
    };
}
function jt(n) {
    if (typeof n != "string") throw new TypeError("Expected a string");
    return n.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function Na(n, t, e, i) {
    let s = ((n.kind === "substring" || n.kind === "regex") && i.includes("/") ? t : t.replace(i, "")).replace(e, "");
    switch(n.kind){
        case "exact":
            return new RegExp(`^${jt(n.url)}/?$`).test(t);
        case "canonical":
            return new RegExp(`^${jt(n.url)}/?$`).test(s);
        case "substring":
            return new RegExp(`.*${jt(n.substring)}.*$`).test(s);
        case "regex":
            return new RegExp(n.pattern).test(s);
        default:
            return !1;
    }
}
function Ua(n, t) {
    let e = [];
    return t.forEach((i)=>{
        let r = n.target, { selector: s } = i, a = cr(s);
        for(; r && a != null && a.length;){
            for(let o = 0; o < a.length; o += 1)if (r === a[o]) {
                e.push(i);
                break;
            }
            r = r.parentNode;
        }
    }), e;
}
var _t = class {
    constructor(t, e){
        let i = t.filter((a)=>{
            var o;
            return (o = a.urls) == null ? void 0 : o.some((c)=>Na(c, et(), rr(), sr()));
        }), r = i.filter((a)=>a.kind === "pageview"), s = i.filter((a)=>a.kind === "click");
        if (r.forEach((a)=>e(a)), s.length) {
            let a = (o)=>{
                Ua(o, s).forEach((c)=>{
                    e(c);
                });
            };
            this.Pe = xe("click", a);
        }
    }
    close() {
        var t;
        (t = this.Pe) == null || t.call(this);
    }
};
var za = 300, Ae = class {
    constructor(t){
        this.Bt = et();
        let e = ()=>{
            let r = et();
            r !== this.Bt && (this.Bt = r, t());
        };
        this.Ht = setInterval(e, za);
        let i = Le("popstate", e);
        this.xe = ()=>{
            i();
        };
    }
    close() {
        var t;
        this.Ht && clearInterval(this.Ht), (t = this.xe) == null || t.call(this);
    }
};
var Vt = class {
    constructor(t, e, i, r, s, a = (o)=>new Ae(o)){
        this.z = e;
        this.jn = r;
        this.zn = s;
        this.pt = [];
        this.Ae = !1;
        this.X = `${i}/sdk/goals/${t}`, this.Le = a(()=>{
            this.Gt();
        });
    }
    async initialize() {
        await this.Un(), this.Gt();
    }
    startTracking() {
        this.Ae = !0, this.Gt();
    }
    Gt() {
        var t;
        this.Ae && ((t = this.qt) == null || t.close(), this.pt && this.pt.length && (this.qt = new _t(this.pt, (e)=>{
            this.zn(et(), e);
        })));
    }
    async Un() {
        try {
            let t = await this.z.fetch(this.X);
            this.pt = await t.json();
        } catch (t) {
            this.jn(new Pt(`Encountered error fetching goals: ${t}`));
        }
    }
    close() {
        var t, e;
        (t = this.Le) == null || t.close(), (e = this.qt) == null || e.close();
    }
};
function lr(n) {
    return n.kind === "click";
}
var ja = 2, dr = {
    fetchGoals: !0,
    eventUrlTransformer: (n)=>n,
    streaming: void 0,
    plugins: [],
    storage: void 0
}, _a = {
    fetchGoals: p.Boolean,
    eventUrlTransformer: p.Function,
    streaming: p.Boolean,
    plugins: p.createTypeArray("LDPlugin", {}),
    storage: p.Object
};
function Va(n) {
    var e;
    let t = b({}, n);
    return (e = t.flushInterval) != null || (t.flushInterval = ja), t;
}
function hr(n) {
    let t = Va(n);
    return Object.keys(dr).forEach((e)=>{
        delete t[e];
    }), t;
}
function Nn(n, t) {
    let e = b({}, dr);
    return Object.entries(_a).forEach((i)=>{
        let [r, s] = i, a = n[r];
        a !== void 0 && (s.is(a) ? e[r] = a : t.warn(F.wrongOptionType(r, s.getType(), typeof a)));
    }), e;
}
var Bt = class {
    constructor(t, e){
        this._n = t;
        this.Te = [];
        switch(e){
            case "sha1":
                this.Kt = "SHA-1";
                break;
            case "sha256":
                this.Kt = "SHA-256";
                break;
            default:
                throw new Error(`Algorithm is not supported ${e}`);
        }
    }
    async asyncDigest(t) {
        let e = this.Te.join(""), i = new TextEncoder().encode(e), r = await this._n.subtle.digest(this.Kt, i);
        switch(t){
            case "base64":
                return btoa(String.fromCharCode(...new Uint8Array(r)));
            case "hex":
                return [
                    ...new Uint8Array(r)
                ].map((s)=>s.toString(16).padStart(2, "0")).join("");
            default:
                throw new Error(`Encoding is not supported ${t}`);
        }
    }
    update(t) {
        return this.Te.push(t), this;
    }
};
var Ba = {
    start: 0,
    end: 3
}, Ha = {
    start: 4,
    end: 5
}, Un = {
    start: 6,
    end: 7
}, zn = {
    start: 8,
    end: 8
}, qa = {
    start: 9,
    end: 9
}, Ga = {
    start: 10,
    end: 15
};
function Ka() {
    if (typeof crypto != "undefined" && crypto.getRandomValues) {
        let t = new Uint8Array(16);
        return crypto.getRandomValues(t), [
            ...t.values()
        ];
    }
    let n = [];
    for(let t = 0; t < 16; t += 1)n.push(Math.floor(Math.random() * 256));
    return n;
}
function bt(n, t) {
    let e = "";
    for(let i = t.start; i <= t.end; i += 1)e += n[i].toString(16).padStart(2, "0");
    return e;
}
function Ja(n) {
    return n[zn.start] = (n[zn.start] | 128) & 191, n[Un.start] = n[Un.start] & 15 | 64, `${bt(n, Ba)}-${bt(n, Ha)}-${bt(n, Un)}-${bt(n, zn)}${bt(n, qa)}-${bt(n, Ga)}`;
}
function Wa() {
    let n = Ka();
    return Ja(n);
}
function jn() {
    return typeof crypto != "undefined" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : Wa();
}
var Ht = class {
    createHash(t) {
        return new Bt(ar(), t);
    }
    randomUUID() {
        return jn();
    }
};
function Ya(n) {
    let t = Array.from(n, (e)=>String.fromCodePoint(e)).join("");
    return btoa(t);
}
var qt = class {
    btoa(t) {
        return Ya(new TextEncoder().encode(t));
    }
};
var Gt = class {
    constructor(t){
        this.e = t;
    }
    platformData() {
        return {
            name: "JS"
        };
    }
    sdkData() {
        let t = {
            name: "@launchdarkly/js-client-sdk",
            version: "4.9.3",
            userAgentBase: "JSClient"
        };
        return this.e.wrapperName && (t.wrapperName = this.e.wrapperName), this.e.wrapperVersion && (t.wrapperVersion = this.e.wrapperVersion), t;
    }
};
var Kt = class {
    constructor(t, e){
        this.X = t;
        this.n = {};
        this.x = new oe(e.initialRetryDelayMillis, e.retryResetIntervalMillis), this.Oe = e.errorFilter, this.Jt = e.urlBuilder, this.Me();
    }
    Me() {
        this.Jt && (this.X = this.Jt()), this.G = new EventSource(this.X), this.G.onopen = ()=>{
            var t;
            this.x.success(), (t = this.onopen) == null || t.call(this);
        }, this.G.onerror = (t)=>{
            var e;
            t instanceof MessageEvent || (this.Vn(t), (e = this.onerror) == null || e.call(this, t));
        }, Object.entries(this.n).forEach(([t, e])=>{
            e.forEach((i)=>{
                var r;
                (r = this.G) == null || r.addEventListener(t, i);
            });
        });
    }
    addEventListener(t, e) {
        var i, r, s;
        (r = (i = this.n)[t]) != null || (i[t] = []), this.n[t].push(e), (s = this.G) == null || s.addEventListener(t, e);
    }
    close() {
        var t, e;
        clearTimeout(this.Wt), this.Wt = void 0, (t = this.G) == null || t.close(), (e = this.onclose) == null || e.call(this);
    }
    Bn(t) {
        var e;
        (e = this.onretrying) == null || e.call(this, {
            delayMillis: t
        }), this.Wt = setTimeout(()=>{
            this.Me();
        }, t);
    }
    Vn(t) {
        this.close(), !(typeof t.status == "number" && !this.Oe(t)) && this.Bn(this.x.fail());
    }
};
var Jt = class {
    fetch(t, e) {
        return fetch(t, e);
    }
    createEventSource(t, e) {
        return new Kt(t, e);
    }
    getEventSourceCapabilities() {
        return {
            customMethod: !1,
            readTimeout: !1,
            headers: !1
        };
    }
};
function _n() {
    return typeof localStorage != "undefined";
}
function fr() {
    if (!_n()) return [];
    let n = [];
    for(let t = 0; t < localStorage.length; t += 1){
        let e = localStorage.key(t);
        e && n.push(e);
    }
    return n;
}
var Wt = class {
    constructor(t){
        this.t = t;
    }
    async clear(t) {
        var e;
        try {
            localStorage.removeItem(t);
        } catch (i) {
            (e = this.t) == null || e.error(`Error clearing key from localStorage: ${t}, reason: ${i}`);
        }
    }
    async get(t) {
        var e;
        try {
            let i = localStorage.getItem(t);
            return i != null ? i : null;
        } catch (i) {
            return (e = this.t) == null || e.error(`Error getting key from localStorage: ${t}, reason: ${i}`), null;
        }
    }
    async set(t, e) {
        var i;
        try {
            localStorage.setItem(t, e);
        } catch (r) {
            (i = this.t) == null || i.error(`Error setting key in localStorage: ${t}, reason: ${r}`);
        }
    }
};
var Yt = class {
    constructor(t, e, i){
        this.encoding = new qt;
        this.crypto = new Ht;
        this.requests = new Jt;
        this.storage = i != null ? i : _n() ? new Wt(t) : void 0, this.info = new Gt(e);
    }
};
var Vn = class extends De {
    constructor(t, e, i, r = {}, s){
        var y, S, k, L, A;
        let { logger: a, debug: o } = r, c = a != null ? a : new dt({
            destination: {
                debug: console.debug,
                info: console.info,
                warn: console.warn,
                error: console.error
            },
            level: o ? "debug" : "info"
        }), u = (y = r.baseUri) != null ? y : "https://clientsdk.launchdarkly.com", l = Nn(r, c), d = l.storage ? qi(l.storage, c) : void 0, f = s != null ? s : new Yt(c, r, d), m = hr(U(b({}, r), {
            logger: c
        })), { eventUrlTransformer: w } = l, v = Mn(t), h = (E, g, C, P, $)=>g.dataSystem ? ir({
                platform: f,
                flagManager: E,
                credential: t,
                config: g,
                baseHeaders: C,
                emitter: P,
                transitionTable: Ji,
                foregroundMode: Li(g.dataSystem, xn),
                backgroundMode: void 0,
                modeTable: $t,
                sourceFactoryProvider: Qi(),
                fdv1Endpoints: Mn(t),
                buildQueryParams: (T)=>{
                    let B = [
                        {
                            key: "auth",
                            value: t
                        }
                    ], j = T;
                    return j != null && j.hash && B.push({
                        key: "h",
                        value: j.hash
                    }), B;
                }
            }) : new zt(f, E, t, g, l, v.polling, v.streaming, C, P, $);
        super(t, i, f, m, h, {
            getLegacyStorageKeys: ()=>fr().filter((E)=>E.startsWith(`ld:${t}:`)),
            analyticsEventPath: `/events/bulk/${t}`,
            diagnosticEventPath: `/events/diagnostic/${t}`,
            includeAuthorizationHeader: !1,
            highTimeoutThreshold: 5,
            userAgentHeaderName: "x-launchdarkly-user-agent",
            dataSystemDefaults: xn,
            trackEventModifier: (E)=>new _.InputCustomEvent(E.context, E.key, E.data, E.metricValue, E.samplingRatio, w(et())),
            getImplementationHooks: (E)=>_.safeGetHooks(c, E, l.plugins),
            registerDebugOverrides: (E)=>Gi(c, E, l.plugins),
            credentialType: "clientSideId",
            requiresStart: !0,
            initialContext: e
        }), this.setEventSendingEnabled(!0, !1), l.streaming !== void 0 && ((k = (S = this.dataManager).setForcedStreaming) == null || k.call(S, l.streaming)), (A = (L = this.dataManager).setFlushCallback) == null || A.call(L, ()=>this.flush()), this.Fe = l.plugins, l.fetchGoals && (this.Yt = new Vt(t, f.requests, u, (E)=>{
            c.error(E.message);
        }, (E, g)=>{
            let C = this.getInternalContext();
            if (!C) return;
            let P = w(E);
            lr(g) ? this.sendEvent({
                kind: "click",
                url: P,
                samplingRatio: 1,
                key: g.key,
                creationDate: Date.now(),
                context: C,
                selector: g.selector
            }) : this.sendEvent({
                kind: "pageview",
                url: P,
                samplingRatio: 1,
                key: g.key,
                creationDate: Date.now(),
                context: C
            });
        }), this.Yt.initialize(), l.automaticBackgroundHandling && ur(()=>this.flush()));
    }
    registerPlugins(t) {
        _.safeRegisterPlugins(this.logger, this.environmentMetadata, t, this.Fe || []);
    }
    async identify(t, e) {
        return super.identify(t, e);
    }
    async identifyResult(t, e) {
        var s;
        let i = (e == null ? void 0 : e.sheddable) === void 0 ? U(b({}, e), {
            sheddable: !0
        }) : b({}, e);
        i.waitForNetworkResults = !0;
        let r = await super.identifyResult(t, i);
        return this.startPromise && ((s = this.Yt) == null || s.startTracking()), r;
    }
    setConnectionMode(t) {
        if (!this.dataManager.setConnectionMode) {
            this.logger.warn("setConnectionMode requires the FDv2 data system (dataSystem option). The call has no effect without it.");
            return;
        }
        if (t !== void 0 && !(t in $t)) {
            this.logger.warn(`setConnectionMode called with invalid mode '${t}'. Valid modes: ${Object.keys($t).join(", ")}.`);
            return;
        }
        this.dataManager.setConnectionMode(t);
    }
    setStreaming(t) {
        var e, i;
        (i = (e = this.dataManager).setForcedStreaming) == null || i.call(e, t);
    }
    $e() {
        var e, i;
        let t = this.emitter.eventNames().some((r)=>r.startsWith("change:") || r === "change");
        (i = (e = this.dataManager).setAutomaticStreamingState) == null || i.call(e, t);
    }
    on(t, e) {
        super.on(t, e), this.$e();
    }
    off(t, e) {
        super.off(t, e), this.$e();
    }
};
function pr(n, t, e, i = {}, r) {
    let s = new Vn(n, t, e, i, r), a = {
        variation: (o, c)=>s.variation(o, c),
        variationDetail: (o, c)=>s.variationDetail(o, c),
        boolVariation: (o, c)=>s.boolVariation(o, c),
        boolVariationDetail: (o, c)=>s.boolVariationDetail(o, c),
        numberVariation: (o, c)=>s.numberVariation(o, c),
        numberVariationDetail: (o, c)=>s.numberVariationDetail(o, c),
        stringVariation: (o, c)=>s.stringVariation(o, c),
        stringVariationDetail: (o, c)=>s.stringVariationDetail(o, c),
        jsonVariation: (o, c)=>s.jsonVariation(o, c),
        jsonVariationDetail: (o, c)=>s.jsonVariationDetail(o, c),
        track: (o, c, u)=>s.track(o, c, u),
        on: (o, c)=>s.on(o, c),
        off: (o, c)=>s.off(o, c),
        flush: ()=>s.flush(),
        setConnectionMode: (o)=>s.setConnectionMode(o),
        setStreaming: (o)=>s.setStreaming(o),
        identify: (o, c)=>s.identifyResult(o, c),
        getContext: ()=>s.getContext(),
        close: ()=>s.close(),
        allFlags: ()=>s.allFlags(),
        addHook: (o)=>s.addHook(o),
        waitForInitialization: (o)=>s.waitForInitialization(o),
        logger: s.logger,
        start: (o)=>s.start(o)
    };
    return s.registerPlugins(a), a;
}
function Bc(n) {
    return new dt(n);
}
function Jc(n, t, e) {
    return pr(n, t, vt.Disabled, e);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["aj62f","4ZGjQ"], "4ZGjQ", "parcelRequirea577", {})

//# sourceMappingURL=launchdarkly-demo.f72d0d54.js.map
