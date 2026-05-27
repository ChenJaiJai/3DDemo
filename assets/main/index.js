System.register("chunks:///_virtual/AbortController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c27caC9hKtDKrHQ+3n0OL3a", "AbortController", undefined);
      // Licensed to the .NET Foundation under one or more agreements.
      // The .NET Foundation licenses this file to you under the MIT license.

      // Rough polyfill of https://developer.mozilla.org/en-US/docs/Web/API/AbortController
      // We don't actually ever use the API being polyfilled, we always use the polyfill because
      // it's a very new API right now.

      // Not exported from index.
      /** @private */
      var AbortController = exports('AbortController', /*#__PURE__*/function () {
        function AbortController() {
          this._isAborted = false;
          this.onabort = null;
        }
        var _proto = AbortController.prototype;
        _proto.abort = function abort() {
          if (!this._isAborted) {
            this._isAborted = true;
            if (this.onabort) {
              this.onabort();
            }
          }
        };
        _createClass(AbortController, [{
          key: "signal",
          get: function get() {
            return this;
          }
        }, {
          key: "aborted",
          get: function get() {
            return this._isAborted;
          }
        }]);
        return AbortController;
      }());

      /** Represents a signal that can be monitored to determine if a request has been aborted. */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AccessTokenHttpClient.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './HeaderNames.ts', './HttpClient.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, HeaderNames, HttpClient;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      HeaderNames = module.HeaderNames;
    }, function (module) {
      HttpClient = module.HttpClient;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d7e25z/2fJD2JzsZ9VcR4aI", "AccessTokenHttpClient", undefined);

      /** @private */
      var AccessTokenHttpClient = exports('AccessTokenHttpClient', /*#__PURE__*/function (_HttpClient) {
        _inheritsLoose(AccessTokenHttpClient, _HttpClient);
        function AccessTokenHttpClient(innerClient, accessTokenFactory) {
          var _this;
          _this = _HttpClient.call(this) || this;
          _this._innerClient = void 0;
          _this._accessToken = void 0;
          _this._accessTokenFactory = void 0;
          _this._innerClient = innerClient;
          _this._accessTokenFactory = accessTokenFactory;
          return _this;
        }
        var _proto = AccessTokenHttpClient.prototype;
        _proto.send = /*#__PURE__*/function () {
          var _send = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
            var allowRetry, response;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  allowRetry = true;
                  if (!(this._accessTokenFactory && (!this._accessToken || request.url && request.url.indexOf("/negotiate?") > 0))) {
                    _context.next = 6;
                    break;
                  }
                  // don't retry if the request is a negotiate or if we just got a potentially new token from the access token factory
                  allowRetry = false;
                  _context.next = 5;
                  return this._accessTokenFactory();
                case 5:
                  this._accessToken = _context.sent;
                case 6:
                  this._setAuthorizationHeader(request);
                  _context.next = 9;
                  return this._innerClient.send(request);
                case 9:
                  response = _context.sent;
                  if (!(allowRetry && response.statusCode === 401 && this._accessTokenFactory)) {
                    _context.next = 18;
                    break;
                  }
                  _context.next = 13;
                  return this._accessTokenFactory();
                case 13:
                  this._accessToken = _context.sent;
                  this._setAuthorizationHeader(request);
                  _context.next = 17;
                  return this._innerClient.send(request);
                case 17:
                  return _context.abrupt("return", _context.sent);
                case 18:
                  return _context.abrupt("return", response);
                case 19:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function send(_x) {
            return _send.apply(this, arguments);
          }
          return send;
        }();
        _proto._setAuthorizationHeader = function _setAuthorizationHeader(request) {
          if (!request.headers) {
            request.headers = {};
          }
          if (this._accessToken) {
            request.headers[HeaderNames.Authorization] = "Bearer " + this._accessToken;
          }
          // don't remove the header if there isn't an access token factory, the user manually added the header in this case
          else if (this._accessTokenFactory) {
            if (request.headers[HeaderNames.Authorization]) {
              delete request.headers[HeaderNames.Authorization];
            }
          }
        };
        _proto.getCookieString = function getCookieString(url) {
          return this._innerClient.getCookieString(url);
        };
        return AccessTokenHttpClient;
      }(HttpClient));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/aniStop.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, SkeletalAnimation, VideoPlayer, Asset, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      SkeletalAnimation = module.SkeletalAnimation;
      VideoPlayer = module.VideoPlayer;
      Asset = module.Asset;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "c32e3RkWCJLVqEWZqTUsHe8", "aniStop", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var aniStop = exports('default', (_dec = ccclass('aniStop'), _dec2 = property(SkeletalAnimation), _dec3 = property(VideoPlayer), _dec4 = property(Asset), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(aniStop, _Component);
        function aniStop() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "animation", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "videoPlayer", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "data", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = aniStop.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          this.videoPlayer.node.on(VideoPlayer.EventType.READY_TO_PLAY, function () {
            _this2.videoPlayer.pause();
          }, this);
        };
        _proto.start = function start() {
          var _this3 = this;
          this.videoPlayer.clip = this.data;
          // setTimeout(() => {
          this.scheduleOnce(function () {
            console.log("蝦");
            _this3.videoPlayer.currentTime = 0;
            _this3.videoPlayer.play();
            _this3.videoPlayer.loop = true;
          }, 2);
          // }, 1000);
          // this.animation.play("B
          // _BW_1")
          // this.scheduleOnce(() => {
          //     this.animation.getState("B_BW_1").setTime(0)
          //     this.scheduleOnce(() => {
          //         this.animation.stop()
          //         // this.animation.getState("B_BW_1").stop()
          //     }, 0)
          // }, 2)
        };

        return aniStop;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "animation", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "videoPlayer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "data", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BasePoker.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CommonValue.ts', './EventMsg.ts', './PokerLayout.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, Tween, instantiate, BoxCollider, RigidBody, Component, GameState, EventMsg, PokerLayout;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Tween = module.Tween;
      instantiate = module.instantiate;
      BoxCollider = module.BoxCollider;
      RigidBody = module.RigidBody;
      Component = module.Component;
    }, function (module) {
      GameState = module.GameState;
    }, function (module) {
      EventMsg = module.EventMsg;
    }, function (module) {
      PokerLayout = module.PokerLayout;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "1b895CeQ4tHharM5mjpPeCz", "BasePoker", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BasePoker = exports('default', (_dec = ccclass('BasePoker'), _dec2 = property(Prefab), _dec3 = property(PokerLayout), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BasePoker, _Component);
        function BasePoker() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "reducePoker", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prefab", _descriptor2, _assertThisInitialized(_this));
          _this.totalPoker = 52 * 8;
          _this.currentCountPoker = 0;
          _initializerDefineProperty(_this, "content", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = BasePoker.prototype;
        _proto.onLoad = function onLoad() {
          EventMsg.on(GameState.ChangeShot, this.reset, this);
          EventMsg.on(GameState.ResetGame, this.reset, this);
          EventMsg.on(GameState.RevertPoker, this.revertPoker, this);
          this.reset();
        };
        _proto.reset = function reset() {};
        _proto.revertPoker = function revertPoker(currentCardIndex) {};
        _proto.removePoker = function removePoker() {
          this.content.clearPoker();
          this._orderedActiveChildren().forEach(function (child) {
            Tween.stopAllByTarget(child);
            child.destroy();
          });
        };
        _proto._orderedActiveChildren = function _orderedActiveChildren() {
          var root = this.content.node;
          var list = [];
          for (var i = 0; i < root.children.length; i++) {
            var c = root.children[i];
            if (c.active && c.isValid) list.push(c);
          }
          return list;
        };
        _proto.createPoker = function createPoker(count) {
          for (var i = 0; i < count; i++) {
            var poker = instantiate(this.prefab);
            poker.name = i.toString();
            poker.getComponent(BoxCollider).enabled = false;
            var rb = poker.getComponent(RigidBody);
            if (rb) {
              rb.type = RigidBody.Type.STATIC;
              rb.enabled = false;
            }
            this.content.node.addChild(poker);
          }
        };
        return BasePoker;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "reducePoker", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "prefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BinaryMessageFormat.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "99c37339bpDGrCVEvxUkCqC", "BinaryMessageFormat", undefined);
      // Licensed to the .NET Foundation under one or more agreements.
      // The .NET Foundation licenses this file to you under the MIT license.

      // Not exported from index.
      /** @private */
      var BinaryMessageFormat = exports('BinaryMessageFormat', /*#__PURE__*/function () {
        function BinaryMessageFormat() {}
        // The length prefix of binary messages is encoded as VarInt. Read the comment in
        // the BinaryMessageParser.TryParseMessage for details.
        BinaryMessageFormat.write = function write(output) {
          var size = output.byteLength || output.length;
          var lenBuffer = [];
          do {
            var sizePart = size & 0x7f;
            size = size >> 7;
            if (size > 0) {
              sizePart |= 0x80;
            }
            lenBuffer.push(sizePart);
          } while (size > 0);
          size = output.byteLength || output.length;
          var buffer = new Uint8Array(lenBuffer.length + size);
          buffer.set(lenBuffer, 0);
          buffer.set(output, lenBuffer.length);
          return buffer.buffer;
        };
        BinaryMessageFormat.parse = function parse(input) {
          var result = [];
          var uint8Array = new Uint8Array(input);
          var maxLengthPrefixSize = 5;
          var numBitsToShift = [0, 7, 14, 21, 28];
          for (var offset = 0; offset < input.byteLength;) {
            var numBytes = 0;
            var size = 0;
            var byteRead = void 0;
            do {
              byteRead = uint8Array[offset + numBytes];
              size = size | (byteRead & 0x7f) << numBitsToShift[numBytes];
              numBytes++;
            } while (numBytes < Math.min(maxLengthPrefixSize, input.byteLength - offset) && (byteRead & 0x80) !== 0);
            if ((byteRead & 0x80) !== 0 && numBytes < maxLengthPrefixSize) {
              throw new Error("Cannot read message size.");
            }
            if (numBytes === maxLengthPrefixSize && byteRead > 7) {
              throw new Error("Messages bigger than 2GB are not supported.");
            }
            if (uint8Array.byteLength >= offset + numBytes + size) {
              // IE does not support .slice() so use subarray
              result.push(uint8Array.slice ? uint8Array.slice(offset + numBytes, offset + numBytes + size) : uint8Array.subarray(offset + numBytes, offset + numBytes + size));
            } else {
              throw new Error("Incomplete message.");
            }
            offset = offset + numBytes + size;
          }
          return result;
        };
        return BinaryMessageFormat;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/browser-index.ts", ['cc', './index3.ts', './pkg-version.ts', './MessagePackHubProtocol.ts'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, null, function (module) {
      exports('VERSION', module.VERSION);
    }, function (module) {
      exports('MessagePackHubProtocol', module.MessagePackHubProtocol);
    }],
    execute: function () {
      cclegacy._RF.push({}, "45d9ew9QB1A9Z6k+mZNGqjN", "browser-index", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/browser-index2.ts", ['cc', './index.ts', './DefaultHttpClient.ts', './Errors.ts', './HttpClient.ts', './HubConnection.ts', './HubConnectionBuilder.ts', './IHubProtocol.ts', './ILogger.ts', './ITransport.ts', './JsonHubProtocol.ts', './Loggers.ts', './Subject.ts', './pkg-version2.ts'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, null, function (module) {
      exports('DefaultHttpClient', module.DefaultHttpClient);
    }, function (module) {
      var _setter = {};
      _setter.AbortError = module.AbortError;
      _setter.HttpError = module.HttpError;
      _setter.TimeoutError = module.TimeoutError;
      exports(_setter);
    }, function (module) {
      var _setter = {};
      _setter.HttpClient = module.HttpClient;
      _setter.HttpResponse = module.HttpResponse;
      exports(_setter);
    }, function (module) {
      var _setter = {};
      _setter.HubConnection = module.HubConnection;
      _setter.HubConnectionState = module.HubConnectionState;
      exports(_setter);
    }, function (module) {
      exports('HubConnectionBuilder', module.HubConnectionBuilder);
    }, function (module) {
      exports('MessageType', module.MessageType);
    }, function (module) {
      exports('LogLevel', module.LogLevel);
    }, function (module) {
      var _setter = {};
      _setter.HttpTransportType = module.HttpTransportType;
      _setter.TransferFormat = module.TransferFormat;
      exports(_setter);
    }, function (module) {
      exports('JsonHubProtocol', module.JsonHubProtocol);
    }, function (module) {
      exports('NullLogger', module.NullLogger);
    }, function (module) {
      exports('Subject', module.Subject);
    }, function (module) {
      exports('VERSION', module.VERSION);
    }],
    execute: function () {
      cclegacy._RF.push({}, "651c8y/HxVFfYkTM0qVVkf6", "browser-index", undefined);
      // Licensed to the .NET Foundation under one or more agreements.
      // The .NET Foundation licenses this file to you under the MIT license.

      // This is where we add any polyfills we'll need for the browser. It is the entry module for browser-specific builds.

      // Copy from Array.prototype into Uint8Array to polyfill on IE. It's OK because the implementations of indexOf and slice use properties
      // that exist on Uint8Array with the same name, and JavaScript is magic.
      // We make them 'writable' because the Buffer polyfill messes with it as well.
      if (!Uint8Array.prototype.indexOf) {
        Object.defineProperty(Uint8Array.prototype, "indexOf", {
          value: Array.prototype.indexOf,
          writable: true
        });
      }
      if (!Uint8Array.prototype.slice) {
        Object.defineProperty(Uint8Array.prototype, "slice", {
          // wrap the slice in Uint8Array so it looks like a Uint8Array.slice call
          // eslint-disable-next-line object-shorthand
          value: function value(start, end) {
            return new Uint8Array(Array.prototype.slice.call(this, start, end));
          },
          writable: true
        });
      }
      if (!Uint8Array.prototype.forEach) {
        Object.defineProperty(Uint8Array.prototype, "forEach", {
          value: Array.prototype.forEach,
          writable: true
        });
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BuildPlayListUseCase.ts", ['cc', './CommonValue.ts'], function (exports) {
  var cclegacy, ProcessState;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ProcessState = module.ProcessState;
    }],
    execute: function () {
      exports('buildPlayList', buildPlayList);
      cclegacy._RF.push({}, "9eb9aSFwYFNzLC+uAB7dDJk", "BuildPlayListUseCase", undefined);
      /**
       * 將「最終結果 ProcessState」轉成 WebM 播放清單。
       * 保持與原 `WEBMMng.createPlayList()` 相同策略，避免行為改變。
       */
      function buildPlayList(finalProcess, deps) {
        var _deps$rng;
        if (deps === void 0) {
          deps = {};
        }
        var rng = (_deps$rng = deps.rng) != null ? _deps$rng : Math.random;
        var list = [];
        if (finalProcess.includes('Stand')) {
          list.push(finalProcess);
          list.push(rng() < 0.5 ? ProcessState.Dance5s_1 : ProcessState.Dance5s_2);
          return list;
        }
        list.push(ProcessState.Draw_1);
        list.push(finalProcess);
        if (finalProcess.includes('PB')) {
          list.push(ProcessState.Dance3s_1);
        } else {
          list.push(rng() < 0.5 ? ProcessState.Dance4s_1 : ProcessState.Dance4s_2);
        }
        return list;
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BundleMng.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, cclegacy, assetManager;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      assetManager = module.assetManager;
    }],
    execute: function () {
      cclegacy._RF.push({}, "524a2rOB51O8rDoKbIkAfDw", "BundleMng", undefined);
      var BundleMng = /*#__PURE__*/function () {
        function BundleMng() {
          this.bundleCache = new Map();
          this.bundleLoading = new Map();
        }
        var _proto = BundleMng.prototype;
        _proto.ensureBundle = /*#__PURE__*/function () {
          var _ensureBundle = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(bundleName) {
            var _this$bundleCache$get,
              _this = this;
            var cached, loading, task;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  cached = (_this$bundleCache$get = this.bundleCache.get(bundleName)) != null ? _this$bundleCache$get : assetManager.getBundle(bundleName);
                  if (!cached) {
                    _context.next = 4;
                    break;
                  }
                  this.bundleCache.set(bundleName, cached);
                  return _context.abrupt("return", cached);
                case 4:
                  loading = this.bundleLoading.get(bundleName);
                  if (!loading) {
                    _context.next = 7;
                    break;
                  }
                  return _context.abrupt("return", loading);
                case 7:
                  task = new Promise(function (resolve, reject) {
                    assetManager.loadBundle(bundleName, function (err, bundle) {
                      _this.bundleLoading["delete"](bundleName);
                      if (err || !bundle) {
                        reject(err != null ? err : new Error("loadBundle \u5931\u6557\uFF1A" + bundleName));
                        return;
                      }
                      _this.bundleCache.set(bundleName, bundle);
                      resolve(bundle);
                    });
                  });
                  this.bundleLoading.set(bundleName, task);
                  return _context.abrupt("return", task);
                case 10:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function ensureBundle(_x) {
            return _ensureBundle.apply(this, arguments);
          }
          return ensureBundle;
        }();
        _proto.load = /*#__PURE__*/function () {
          var _load = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(bundleName, assetPath, type, defaultAssetPath) {
            var bundle, tryLoad;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return this.ensureBundle(bundleName);
                case 2:
                  bundle = _context2.sent;
                  tryLoad = function tryLoad(path) {
                    return new Promise(function (resolve, reject) {
                      bundle.load(path, type, function (err, asset) {
                        if (err || !asset) {
                          reject(err != null ? err : new Error("bundle.load \u5931\u6557\uFF1A" + bundleName + ":" + path));
                          return;
                        }
                        resolve(asset);
                      });
                    });
                  };
                  _context2.prev = 4;
                  _context2.next = 7;
                  return tryLoad(assetPath);
                case 7:
                  return _context2.abrupt("return", _context2.sent);
                case 10:
                  _context2.prev = 10;
                  _context2.t0 = _context2["catch"](4);
                  if (!(!defaultAssetPath || defaultAssetPath === assetPath)) {
                    _context2.next = 14;
                    break;
                  }
                  throw _context2.t0;
                case 14:
                  console.error("[BundleMng] " + bundleName + ":" + assetPath + " \u6C92\u6709\u8CC7\u6E90\uFF0C\u6539\u8F09\u5165\u9810\u8A2D\u8CC7\u6E90 " + defaultAssetPath, _context2.t0);
                  _context2.next = 17;
                  return tryLoad(defaultAssetPath);
                case 17:
                  return _context2.abrupt("return", _context2.sent);
                case 18:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this, [[4, 10]]);
          }));
          function load(_x2, _x3, _x4, _x5) {
            return _load.apply(this, arguments);
          }
          return load;
        }();
        _proto.loadDir = /*#__PURE__*/function () {
          var _loadDir = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(bundleName, dirPath, type, defaultDirPath) {
            var bundle, tryLoadDir, assets;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return this.ensureBundle(bundleName);
                case 2:
                  bundle = _context3.sent;
                  tryLoadDir = function tryLoadDir(path) {
                    return new Promise(function (resolve, reject) {
                      var done = function done(err, assets) {
                        if (err || !assets) {
                          reject(err != null ? err : new Error("bundle.loadDir \u5931\u6557\uFF1A" + bundleName + ":" + path));
                          return;
                        }
                        resolve(assets);
                      };
                      if (type) bundle.loadDir(path, type, done);else bundle.loadDir(path, done);
                    });
                  };
                  _context3.prev = 4;
                  _context3.next = 7;
                  return tryLoadDir(dirPath);
                case 7:
                  assets = _context3.sent;
                  if (!(assets.length === 0 && defaultDirPath && defaultDirPath !== dirPath)) {
                    _context3.next = 13;
                    break;
                  }
                  console.error("[BundleMng] " + bundleName + ":" + dirPath + " \u6C92\u6709\u8CC7\u6E90\uFF0C\u6539\u8F09\u5165\u9810\u8A2D\u8CC7\u6E90 " + defaultDirPath);
                  _context3.next = 12;
                  return tryLoadDir(defaultDirPath);
                case 12:
                  return _context3.abrupt("return", _context3.sent);
                case 13:
                  return _context3.abrupt("return", assets);
                case 16:
                  _context3.prev = 16;
                  _context3.t0 = _context3["catch"](4);
                  if (!(!defaultDirPath || defaultDirPath === dirPath)) {
                    _context3.next = 20;
                    break;
                  }
                  throw _context3.t0;
                case 20:
                  console.error("[BundleMng] " + bundleName + ":" + dirPath + " \u6C92\u6709\u8CC7\u6E90\uFF0C\u6539\u8F09\u5165\u9810\u8A2D\u8CC7\u6E90 " + defaultDirPath, _context3.t0);
                  _context3.next = 23;
                  return tryLoadDir(defaultDirPath);
                case 23:
                  return _context3.abrupt("return", _context3.sent);
                case 24:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this, [[4, 16]]);
          }));
          function loadDir(_x6, _x7, _x8, _x9) {
            return _loadDir.apply(this, arguments);
          }
          return loadDir;
        }();
        return BundleMng;
      }();
      var BundleMng$1 = exports('default', new BundleMng());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CachedKeyDecoder.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './utf8.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy, utf8DecodeJs;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      utf8DecodeJs = module.utf8DecodeJs;
    }],
    execute: function () {
      cclegacy._RF.push({}, "49ca4d/ZVVOj7i2N1McOixa", "CachedKeyDecoder", undefined);
      var DEFAULT_MAX_KEY_LENGTH = 16;
      var DEFAULT_MAX_LENGTH_PER_KEY = 16;
      var CachedKeyDecoder = exports('CachedKeyDecoder', /*#__PURE__*/function () {
        function CachedKeyDecoder(maxKeyLength, maxLengthPerKey) {
          if (maxKeyLength === void 0) {
            maxKeyLength = DEFAULT_MAX_KEY_LENGTH;
          }
          if (maxLengthPerKey === void 0) {
            maxLengthPerKey = DEFAULT_MAX_LENGTH_PER_KEY;
          }
          this.hit = 0;
          this.miss = 0;
          this.caches = void 0;
          this.maxKeyLength = void 0;
          this.maxLengthPerKey = void 0;
          this.maxKeyLength = maxKeyLength;
          this.maxLengthPerKey = maxLengthPerKey;

          // avoid `new Array(N)`, which makes a sparse array,
          // because a sparse array is typically slower than a non-sparse array.
          this.caches = [];
          for (var i = 0; i < this.maxKeyLength; i++) {
            this.caches.push([]);
          }
        }
        var _proto = CachedKeyDecoder.prototype;
        _proto.canBeCached = function canBeCached(byteLength) {
          return byteLength > 0 && byteLength <= this.maxKeyLength;
        };
        _proto.find = function find(bytes, inputOffset, byteLength) {
          var records = this.caches[byteLength - 1];
          FIND_CHUNK: for (var _iterator = _createForOfIteratorHelperLoose(records), _step; !(_step = _iterator()).done;) {
            var record = _step.value;
            var recordBytes = record.bytes;
            for (var j = 0; j < byteLength; j++) {
              if (recordBytes[j] !== bytes[inputOffset + j]) {
                continue FIND_CHUNK;
              }
            }
            return record.str;
          }
          return null;
        };
        _proto.store = function store(bytes, value) {
          var records = this.caches[bytes.length - 1];
          var record = {
            bytes: bytes,
            str: value
          };
          if (records.length >= this.maxLengthPerKey) {
            // `records` are full!
            // Set `record` to an arbitrary position.
            records[Math.random() * records.length | 0] = record;
          } else {
            records.push(record);
          }
        };
        _proto.decode = function decode(bytes, inputOffset, byteLength) {
          var cachedValue = this.find(bytes, inputOffset, byteLength);
          if (cachedValue != null) {
            this.hit++;
            return cachedValue;
          }
          this.miss++;
          var str = utf8DecodeJs(bytes, inputOffset, byteLength);
          // Ensure to copy a slice of bytes because the bytes may be a NodeJS Buffer and Buffer#slice() returns a reference to its internal ArrayBuffer.
          var slicedCopyOfBytes = Uint8Array.prototype.slice.call(bytes, inputOffset, inputOffset + byteLength);
          this.store(slicedCopyOfBytes, str);
          return str;
        };
        return CachedKeyDecoder;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CardBoxWall.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, BoxCollider, Layers, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      BoxCollider = module.BoxCollider;
      Layers = module.Layers;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "0750bFjRjZE8qFoTtYRKB8u", "CardBoxWall", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        executeInEditMode = _decorator.executeInEditMode;
      var CardBoxWall = exports('default', (_dec = ccclass('CardBoxWall'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CardBoxWall, _Component);
        function CardBoxWall() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._collider = null;
          _this.check = false;
          return _this;
        }
        var _proto = CardBoxWall.prototype;
        _proto.onLoad = function onLoad() {
          this._collider = this.node.getComponent(BoxCollider);
          if (this._collider) {
            this._collider.on('onCollisionEnter', this.onCollisionEnter, this);
            this._collider.on('onCollisionStay', this.onCollisionStay, this);
            this._collider.on('onCollisionExit', this.onCollisionExit, this);
          }
        };
        _proto.onDestroy = function onDestroy() {
          if (this._collider) {
            this._collider.off('onCollisionEnter', this.onCollisionEnter, this);
            this._collider.off('onCollisionStay', this.onCollisionStay, this);
            this._collider.off('onCollisionExit', this.onCollisionExit, this);
          }
        };
        /** 碰撞開始時觸發 */
        _proto.onCollisionEnter = function onCollisionEnter(event) {
          var otherNode = event.otherCollider.node;
          // 偵測 Layer 名稱是否為 Poker
          console.log(otherNode.name);
          if (otherNode.layer === 1 << Layers.nameToLayer('Poker')) ;
        }

        /** 碰撞持續時頻繁觸發 */;
        _proto.onCollisionStay = function onCollisionStay(event) {
          // console.log('[updateWall] Collision Stay:', event.otherCollider.node.name);
        }

        /** 碰撞結束時觸發 */;
        _proto.onCollisionExit = function onCollisionExit(event) {
          // console.log('[updateWall] Collision Exit:', event.otherCollider.node.name);
        };
        return CardBoxWall;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CardCodec.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports({
        buildDeskCards: buildDeskCards,
        cardNumberToServerId: cardNumberToServerId
      });
      cclegacy._RF.push({}, "2739dkPolFNlLy382d/v52G", "CardCodec", undefined);
      var SUITS = ['s', 'h', 'd', 'c'];
      var RANKS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

      /** 內部牌號 (1..52) → 後端 Card 字串（例 As、7h、10d） */
      function cardNumberToServerId(card) {
        var rankIndex = (card - 1) % 13;
        var suitIndex = Math.floor((card - 1) / 13);
        return "" + RANKS[rankIndex] + SUITS[suitIndex];
      }

      /** 依伺服器 Position 規則組出 Cards 陣列（閒 P：1,2,5；莊 B：3,4,6） */
      function buildDeskCards(playerHand, bankerHand) {
        var cards = [];
        if (playerHand[0] != null) cards.push({
          Position: 1,
          Side: 'P',
          Card: cardNumberToServerId(playerHand[0])
        });
        if (playerHand[1] != null) cards.push({
          Position: 2,
          Side: 'P',
          Card: cardNumberToServerId(playerHand[1])
        });
        if (bankerHand[0] != null) cards.push({
          Position: 3,
          Side: 'B',
          Card: cardNumberToServerId(bankerHand[0])
        });
        if (bankerHand[1] != null) cards.push({
          Position: 4,
          Side: 'B',
          Card: cardNumberToServerId(bankerHand[1])
        });
        if (playerHand[2] != null) cards.push({
          Position: 5,
          Side: 'P',
          Card: cardNumberToServerId(playerHand[2])
        });
        if (bankerHand[2] != null) cards.push({
          Position: 6,
          Side: 'B',
          Card: cardNumberToServerId(bankerHand[2])
        });
        return cards;
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CommonValue.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports({
        pokerCompressedVisualCount: pokerCompressedVisualCount,
        processStateFromKey: processStateFromKey,
        waitUntil: waitUntil,
        waitUntil_test: waitUntil_test
      });
      cclegacy._RF.push({}, "96ce3PfnL9DRarRxkfPWSyE", "CommonValue", undefined);
      var CommonValue = exports('default', function CommonValue() {});
      CommonValue.winner = void 0;
      CommonValue.dealerPoker = void 0;
      CommonValue.bankerPoker = void 0;
      CommonValue.currentBeauty = 2;
      CommonValue.beautyCount = 0;
      CommonValue.isClick = false;
      CommonValue.isLastRound = false;
      var ProcessState = exports('ProcessState', /*#__PURE__*/function (ProcessState) {
        ProcessState["Open"] = "Open";
        ProcessState["BankerResult"] = "BankerResult";
        ProcessState["DealerResult"] = "DealerResult";
        ProcessState["Draw_1"] = "Draw_1";
        ProcessState["Dance3s_1"] = "Dance3s_1";
        ProcessState["Dance4s_1"] = "Dance4s_1";
        ProcessState["Dance4s_2"] = "Dance4s_2";
        ProcessState["Dance5s_1"] = "Dance5s_1";
        ProcessState["Dance5s_2"] = "Dance5s_2";
        ProcessState["B_BW_1"] = "B_BW_1";
        ProcessState["B_PW_1"] = "B_PW_1";
        ProcessState["B_T_1"] = "B_T_1";
        ProcessState["P_BW_1"] = "P_BW_1";
        ProcessState["P_PW_1"] = "P_PW_1";
        ProcessState["P_T_1"] = "P_T_1";
        ProcessState["PB_BW_1"] = "PB_BW_1";
        ProcessState["PB_PW_1"] = "PB_PW_1";
        ProcessState["PB_T_1"] = "PB_T_1";
        ProcessState["Stand_BW_1"] = "Stand_BW_1";
        ProcessState["Stand_PW_1"] = "Stand_PW_1";
        ProcessState["Stand_T_1"] = "Stand_T_1";
        return ProcessState;
      }({}));
      var PROCESS_STATE_VALUES = new Set(Object.values(ProcessState));

      /** 將字串 key（如 Stand_PW_1）轉為 ProcessState，無效則回傳 null。 */
      function processStateFromKey(key) {
        if (!PROCESS_STATE_VALUES.has(key)) return null;
        return key;
      }
      var Winner = exports('Winner', /*#__PURE__*/function (Winner) {
        Winner["Dealer"] = "Dealer";
        Winner["Banker"] = "Banker";
        Winner["Tie"] = "Tie";
        return Winner;
      }({}));
      var GameState = exports('GameState', /*#__PURE__*/function (GameState) {
        GameState["Init"] = "Init";
        GameState["RandomResult"] = "RandomResult";
        GameState["ReqInit"] = "ReqInit";
        GameState["ReqResult"] = "ReqResult";
        GameState["PlayWebM"] = "PlayWebM";
        GameState["PlayWebMCurrent"] = "PlayWebMCurrent";
        GameState["PlayPoker"] = "PlayPoker";
        GameState["SyncTime"] = "SyncTime";
        GameState["PutPoker"] = "PushPoker";
        GameState["PumpPoker"] = "PumpPoker";
        GameState["RevertPoker"] = "RevertPoker";
        GameState["PokerTriggerEvent"] = "PokerTriggerEvent";
        GameState["ChangeShot"] = "ChangeShot";
        GameState["ResetGame"] = "ResetGame";
        GameState["StartPlay"] = "StartGame";
        GameState["GameCurrentStatus"] = "GameCurrentStatus";
        GameState["LoadingOpen"] = "LoadingOpen";
        GameState["LoadingClose"] = "LoadingClose";
        return GameState;
      }({}));
      /**
       * 壓縮後應有的視覺單位數（與 CardBox reducePoker 規則一致）。
       * L≤0 → 0；L>0 → floor(L/k') + (L % k' !== 0 ? 1 : 0)，k' = max(1, compressionK)
       */
      function pokerCompressedVisualCount(logical, compressionK) {
        if (logical <= 0) return 0;
        var k = Math.max(1, compressionK);
        var q = Math.floor(logical / k);
        var r = logical % k;
        return r === 0 ? q : q + 1;
      }
      function waitUntil(condition, options) {
        var _options$intervalMs, _options$timeoutMs;
        if (options === void 0) {
          options = {};
        }
        var intervalMs = (_options$intervalMs = options.intervalMs) != null ? _options$intervalMs : 16;
        var timeoutMs = (_options$timeoutMs = options.timeoutMs) != null ? _options$timeoutMs : 30000;
        return new Promise(function (resolve, reject) {
          var startedAt = Date.now();
          var check = setInterval(function () {
            if (condition()) {
              clearInterval(check);
              resolve();
              return;
            }
            if (Date.now() - startedAt >= timeoutMs || options.needCancel) {
              clearInterval(check);
              reject(console.error('waitUntil: condition not met before timeout'));
            }
          }, intervalMs);
        });
      }
      function waitUntil_test(condition, options) {
        var _options$intervalMs2, _options$timeoutMs2;
        if (options === void 0) {
          options = {};
        }
        var intervalMs = (_options$intervalMs2 = options.intervalMs) != null ? _options$intervalMs2 : 16;
        var timeoutMs = (_options$timeoutMs2 = options.timeoutMs) != null ? _options$timeoutMs2 : 30000;
        var timer = null;
        var rejectFn = null;
        var done = false;
        var stop = function stop() {
          if (timer) clearInterval(timer);
          timer = null;
        };
        var promise = new Promise(function (resolve, reject) {
          rejectFn = reject;
          var startedAt = Date.now();
          timer = setInterval(function () {
            if (done) return;
            if (condition()) {
              done = true;
              stop();
              resolve();
              return;
            }
            if (Date.now() - startedAt >= timeoutMs) {
              done = true;
              stop();
              reject(new Error('waitUntil: timeout'));
            }
          }, intervalMs);
        });
        var cancel = function cancel() {
          if (done) return;
          done = true;
          stop();
          rejectFn == null || rejectFn(new Error('waitUntil: cancelled'));
        };
        return {
          promise: promise,
          cancel: cancel
        };
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/context.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "517b9UEzX5KUaobJ5eSyTz1", "context", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Deck.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports({
        createArrayDeck: createArrayDeck,
        createShuffledSingleDeck: createShuffledSingleDeck,
        createSingleDeck: createSingleDeck,
        shuffleInPlace: shuffleInPlace
      });
      cclegacy._RF.push({}, "adb00bmknVJ1bBdo11uUmNr", "Deck", undefined);
      function createSingleDeck() {
        return Array.from({
          length: 52
        }, function (_, i) {
          return i + 1;
        });
      }
      function shuffleInPlace(deck, rng) {
        if (rng === void 0) {
          rng = Math.random;
        }
        for (var i = deck.length - 1; i > 0; i--) {
          var j = Math.floor(rng() * (i + 1));
          var _ref = [deck[j], deck[i]];
          deck[i] = _ref[0];
          deck[j] = _ref[1];
        }
      }
      function createShuffledSingleDeck(rng) {
        if (rng === void 0) {
          rng = Math.random;
        }
        var deck = createSingleDeck();
        shuffleInPlace(deck, rng);
        return deck;
      }
      function createArrayDeck(deck, rng) {
        if (rng === void 0) {
          rng = Math.random;
        }
        return {
          draw: function draw() {
            var _deck$pop;
            // 理論上不會空（單局最多 6 張），保底避免未來改成多局共用時踩雷
            return (_deck$pop = deck.pop()) != null ? _deck$pop : Math.floor(rng() * 52) + 1;
          }
        };
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/decode.ts", ['cc', './Decoder.ts'], function (exports) {
  var cclegacy, Decoder;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      Decoder = module.Decoder;
    }],
    execute: function () {
      exports({
        decode: decode,
        decodeMulti: decodeMulti
      });
      cclegacy._RF.push({}, "b3752gqQ6tM4oKPEMcxcXtM", "decode", undefined);
      /**
       * It decodes a single MessagePack object in a buffer.
       *
       * This is a synchronous decoding function.
       * See other variants for asynchronous decoding: {@link decodeAsync}, {@link decodeMultiStream}, or {@link decodeArrayStream}.
       *
       * @throws {@link RangeError} if the buffer is incomplete, including the case where the buffer is empty.
       * @throws {@link DecodeError} if the buffer contains invalid data.
       */
      function decode(buffer, options) {
        var decoder = new Decoder(options);
        return decoder.decode(buffer);
      }

      /**
       * It decodes multiple MessagePack objects in a buffer.
       * This is corresponding to {@link decodeMultiStream}.
       *
       * @throws {@link RangeError} if the buffer is incomplete, including the case where the buffer is empty.
       * @throws {@link DecodeError} if the buffer contains invalid data.
       */
      function decodeMulti(buffer, options) {
        var decoder = new Decoder(options);
        return decoder.decodeMulti(buffer);
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/decodeAsync.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Decoder.ts', './stream.ts'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, cclegacy, Decoder, ensureAsyncIterable;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      Decoder = module.Decoder;
    }, function (module) {
      ensureAsyncIterable = module.ensureAsyncIterable;
    }],
    execute: function () {
      exports({
        decodeArrayStream: decodeArrayStream,
        decodeAsync: decodeAsync,
        decodeMultiStream: decodeMultiStream
      });
      cclegacy._RF.push({}, "b985asJSa1NM64k0KwPFej+", "decodeAsync", undefined);
      /**
       * @throws {@link RangeError} if the buffer is incomplete, including the case where the buffer is empty.
       * @throws {@link DecodeError} if the buffer contains invalid data.
       */
      function decodeAsync(_x, _x2) {
        return _decodeAsync.apply(this, arguments);
      }

      /**
       * @throws {@link RangeError} if the buffer is incomplete, including the case where the buffer is empty.
       * @throws {@link DecodeError} if the buffer contains invalid data.
       */
      function _decodeAsync() {
        _decodeAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(streamLike, options) {
          var stream, decoder;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                stream = ensureAsyncIterable(streamLike);
                decoder = new Decoder(options);
                return _context.abrupt("return", decoder.decodeAsync(stream));
              case 3:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return _decodeAsync.apply(this, arguments);
      }
      function decodeArrayStream(streamLike, options) {
        var stream = ensureAsyncIterable(streamLike);
        var decoder = new Decoder(options);
        return decoder.decodeArrayStream(stream);
      }

      /**
       * @throws {@link RangeError} if the buffer is incomplete, including the case where the buffer is empty.
       * @throws {@link DecodeError} if the buffer contains invalid data.
       */
      function decodeMultiStream(streamLike, options) {
        var stream = ensureAsyncIterable(streamLike);
        var decoder = new Decoder(options);
        return decoder.decodeStream(stream);
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DecodeError.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, _assertThisInitialized, _wrapNativeSuper, cclegacy;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
      _wrapNativeSuper = module.wrapNativeSuper;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "768d9byBXlN+6U6o4Hvl0H2", "DecodeError", undefined);
      var DecodeError = exports('DecodeError', /*#__PURE__*/function (_Error) {
        _inheritsLoose(DecodeError, _Error);
        function DecodeError(message) {
          var _this;
          _this = _Error.call(this, message) || this;

          // fix the prototype chain in a cross-platform way
          var proto = Object.create(DecodeError.prototype);
          Object.setPrototypeOf(_assertThisInitialized(_this), proto);
          Object.defineProperty(_assertThisInitialized(_this), "name", {
            configurable: true,
            enumerable: false,
            value: DecodeError.name
          });
          return _this;
        }
        return DecodeError;
      }( /*#__PURE__*/_wrapNativeSuper(Error)));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Decoder.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './prettyByte.ts', './ExtensionCodec.ts', './int.ts', './utf8.ts', './typedArrays.ts', './CachedKeyDecoder.ts', './DecodeError.ts'], function (exports) {
  var _regeneratorRuntime, _wrapAsyncGenerator, _awaitAsyncGenerator, _asyncIterator, _asyncGeneratorDelegate, _createClass, _asyncToGenerator, cclegacy, prettyByte, ExtensionCodec, getUint64, getInt64, UINT32_MAX, utf8Decode, ensureUint8Array, CachedKeyDecoder, DecodeError;
  return {
    setters: [function (module) {
      _regeneratorRuntime = module.regeneratorRuntime;
      _wrapAsyncGenerator = module.wrapAsyncGenerator;
      _awaitAsyncGenerator = module.awaitAsyncGenerator;
      _asyncIterator = module.asyncIterator;
      _asyncGeneratorDelegate = module.asyncGeneratorDelegate;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      prettyByte = module.prettyByte;
    }, function (module) {
      ExtensionCodec = module.ExtensionCodec;
    }, function (module) {
      getUint64 = module.getUint64;
      getInt64 = module.getInt64;
      UINT32_MAX = module.UINT32_MAX;
    }, function (module) {
      utf8Decode = module.utf8Decode;
    }, function (module) {
      ensureUint8Array = module.ensureUint8Array;
    }, function (module) {
      CachedKeyDecoder = module.CachedKeyDecoder;
    }, function (module) {
      DecodeError = module.DecodeError;
    }],
    execute: function () {
      cclegacy._RF.push({}, "19afdbjHZVBSreOWQlM53QV", "Decoder", undefined);
      var STATE_ARRAY = "array";
      var STATE_MAP_KEY = "map_key";
      var STATE_MAP_VALUE = "map_value";
      var mapKeyConverter = function mapKeyConverter(key) {
        if (typeof key === "string" || typeof key === "number") {
          return key;
        }
        throw new DecodeError("The type of key must be string or number but " + typeof key);
      };
      var StackPool = /*#__PURE__*/function () {
        function StackPool() {
          this.stack = [];
          this.stackHeadPosition = -1;
        }
        var _proto = StackPool.prototype;
        _proto.top = function top() {
          return this.stack[this.stackHeadPosition];
        };
        _proto.pushArrayState = function pushArrayState(size) {
          var state = this.getUninitializedStateFromPool();
          state.type = STATE_ARRAY;
          state.position = 0;
          state.size = size;
          state.array = new Array(size);
        };
        _proto.pushMapState = function pushMapState(size) {
          var state = this.getUninitializedStateFromPool();
          state.type = STATE_MAP_KEY;
          state.readCount = 0;
          state.size = size;
          state.map = {};
        };
        _proto.getUninitializedStateFromPool = function getUninitializedStateFromPool() {
          this.stackHeadPosition++;
          if (this.stackHeadPosition === this.stack.length) {
            var partialState = {
              type: undefined,
              size: 0,
              array: undefined,
              position: 0,
              readCount: 0,
              map: undefined,
              key: null
            };
            this.stack.push(partialState);
          }
          return this.stack[this.stackHeadPosition];
        };
        _proto.release = function release(state) {
          var topStackState = this.stack[this.stackHeadPosition];
          if (topStackState !== state) {
            throw new Error("Invalid stack state. Released state is not on top of the stack.");
          }
          if (state.type === STATE_ARRAY) {
            var partialState = state;
            partialState.size = 0;
            partialState.array = undefined;
            partialState.position = 0;
            partialState.type = undefined;
          }
          if (state.type === STATE_MAP_KEY || state.type === STATE_MAP_VALUE) {
            var _partialState = state;
            _partialState.size = 0;
            _partialState.map = undefined;
            _partialState.readCount = 0;
            _partialState.type = undefined;
          }
          this.stackHeadPosition--;
        };
        _proto.reset = function reset() {
          this.stack.length = 0;
          this.stackHeadPosition = -1;
        };
        _createClass(StackPool, [{
          key: "length",
          get: function get() {
            return this.stackHeadPosition + 1;
          }
        }]);
        return StackPool;
      }();
      var HEAD_BYTE_REQUIRED = -1;
      var EMPTY_VIEW = new DataView(new ArrayBuffer(0));
      var EMPTY_BYTES = new Uint8Array(EMPTY_VIEW.buffer);
      try {
        // IE11: The spec says it should throw RangeError,
        // IE11: but in IE11 it throws TypeError.
        EMPTY_VIEW.getInt8(0);
      } catch (e) {
        if (!(e instanceof RangeError)) {
          throw new Error("This module is not supported in the current JavaScript engine because DataView does not throw RangeError on out-of-bounds access");
        }
      }
      var MORE_DATA = new RangeError("Insufficient data");
      var sharedCachedKeyDecoder = new CachedKeyDecoder();
      var Decoder = exports('Decoder', /*#__PURE__*/function () {
        function Decoder(options) {
          var _options$extensionCod, _options$useBigInt, _options$rawStrings, _options$maxStrLength, _options$maxBinLength, _options$maxArrayLeng, _options$maxMapLength, _options$maxExtLength, _options$mapKeyConver;
          this.extensionCodec = void 0;
          this.context = void 0;
          this.useBigInt64 = void 0;
          this.rawStrings = void 0;
          this.maxStrLength = void 0;
          this.maxBinLength = void 0;
          this.maxArrayLength = void 0;
          this.maxMapLength = void 0;
          this.maxExtLength = void 0;
          this.keyDecoder = void 0;
          this.mapKeyConverter = void 0;
          this.totalPos = 0;
          this.pos = 0;
          this.view = EMPTY_VIEW;
          this.bytes = EMPTY_BYTES;
          this.headByte = HEAD_BYTE_REQUIRED;
          this.stack = new StackPool();
          this.entered = false;
          this.extensionCodec = (_options$extensionCod = options == null ? void 0 : options.extensionCodec) != null ? _options$extensionCod : ExtensionCodec.defaultCodec;
          this.context = options == null ? void 0 : options.context; // needs a type assertion because EncoderOptions has no context property when ContextType is undefined

          this.useBigInt64 = (_options$useBigInt = options == null ? void 0 : options.useBigInt64) != null ? _options$useBigInt : false;
          this.rawStrings = (_options$rawStrings = options == null ? void 0 : options.rawStrings) != null ? _options$rawStrings : false;
          this.maxStrLength = (_options$maxStrLength = options == null ? void 0 : options.maxStrLength) != null ? _options$maxStrLength : UINT32_MAX;
          this.maxBinLength = (_options$maxBinLength = options == null ? void 0 : options.maxBinLength) != null ? _options$maxBinLength : UINT32_MAX;
          this.maxArrayLength = (_options$maxArrayLeng = options == null ? void 0 : options.maxArrayLength) != null ? _options$maxArrayLeng : UINT32_MAX;
          this.maxMapLength = (_options$maxMapLength = options == null ? void 0 : options.maxMapLength) != null ? _options$maxMapLength : UINT32_MAX;
          this.maxExtLength = (_options$maxExtLength = options == null ? void 0 : options.maxExtLength) != null ? _options$maxExtLength : UINT32_MAX;
          this.keyDecoder = (options == null ? void 0 : options.keyDecoder) !== undefined ? options.keyDecoder : sharedCachedKeyDecoder;
          this.mapKeyConverter = (_options$mapKeyConver = options == null ? void 0 : options.mapKeyConverter) != null ? _options$mapKeyConver : mapKeyConverter;
        }
        var _proto2 = Decoder.prototype;
        _proto2.clone = function clone() {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          return new Decoder({
            extensionCodec: this.extensionCodec,
            context: this.context,
            useBigInt64: this.useBigInt64,
            rawStrings: this.rawStrings,
            maxStrLength: this.maxStrLength,
            maxBinLength: this.maxBinLength,
            maxArrayLength: this.maxArrayLength,
            maxMapLength: this.maxMapLength,
            maxExtLength: this.maxExtLength,
            keyDecoder: this.keyDecoder
          });
        };
        _proto2.reinitializeState = function reinitializeState() {
          this.totalPos = 0;
          this.headByte = HEAD_BYTE_REQUIRED;
          this.stack.reset();

          // view, bytes, and pos will be re-initialized in setBuffer()
        };

        _proto2.setBuffer = function setBuffer(buffer) {
          var bytes = ensureUint8Array(buffer);
          this.bytes = bytes;
          this.view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
          this.pos = 0;
        };
        _proto2.appendBuffer = function appendBuffer(buffer) {
          if (this.headByte === HEAD_BYTE_REQUIRED && !this.hasRemaining(1)) {
            this.setBuffer(buffer);
          } else {
            var remainingData = this.bytes.subarray(this.pos);
            var newData = ensureUint8Array(buffer);

            // concat remainingData + newData
            var newBuffer = new Uint8Array(remainingData.length + newData.length);
            newBuffer.set(remainingData);
            newBuffer.set(newData, remainingData.length);
            this.setBuffer(newBuffer);
          }
        };
        _proto2.hasRemaining = function hasRemaining(size) {
          return this.view.byteLength - this.pos >= size;
        };
        _proto2.createExtraByteError = function createExtraByteError(posToShow) {
          var view = this.view,
            pos = this.pos;
          return new RangeError("Extra " + (view.byteLength - pos) + " of " + view.byteLength + " byte(s) found at buffer[" + posToShow + "]");
        }

        /**
         * @throws {@link DecodeError}
         * @throws {@link RangeError}
         */;
        _proto2.decode = function decode(buffer) {
          if (this.entered) {
            var instance = this.clone();
            return instance.decode(buffer);
          }
          try {
            this.entered = true;
            this.reinitializeState();
            this.setBuffer(buffer);
            var object = this.doDecodeSync();
            if (this.hasRemaining(1)) {
              throw this.createExtraByteError(this.pos);
            }
            return object;
          } finally {
            this.entered = false;
          }
        };
        _proto2.decodeMulti = /*#__PURE__*/_regeneratorRuntime().mark(function decodeMulti(buffer) {
          var instance;
          return _regeneratorRuntime().wrap(function decodeMulti$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (!this.entered) {
                  _context.next = 4;
                  break;
                }
                instance = this.clone();
                return _context.delegateYield(instance.decodeMulti(buffer), "t0", 3);
              case 3:
                return _context.abrupt("return");
              case 4:
                _context.prev = 4;
                this.entered = true;
                this.reinitializeState();
                this.setBuffer(buffer);
              case 8:
                if (!this.hasRemaining(1)) {
                  _context.next = 13;
                  break;
                }
                _context.next = 11;
                return this.doDecodeSync();
              case 11:
                _context.next = 8;
                break;
              case 13:
                _context.prev = 13;
                this.entered = false;
                return _context.finish(13);
              case 16:
              case "end":
                return _context.stop();
            }
          }, decodeMulti, this, [[4,, 13, 16]]);
        });
        _proto2.decodeAsync = /*#__PURE__*/function () {
          var _decodeAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(stream) {
            var instance, decoded, object, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, buffer, headByte, pos, totalPos;
            return _regeneratorRuntime().wrap(function _callee$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (!this.entered) {
                    _context2.next = 3;
                    break;
                  }
                  instance = this.clone();
                  return _context2.abrupt("return", instance.decodeAsync(stream));
                case 3:
                  _context2.prev = 3;
                  this.entered = true;
                  decoded = false;
                  _iteratorAbruptCompletion = false;
                  _didIteratorError = false;
                  _context2.prev = 8;
                  _iterator = _asyncIterator(stream);
                case 10:
                  _context2.next = 12;
                  return _iterator.next();
                case 12:
                  if (!(_iteratorAbruptCompletion = !(_step = _context2.sent).done)) {
                    _context2.next = 31;
                    break;
                  }
                  buffer = _step.value;
                  if (!decoded) {
                    _context2.next = 17;
                    break;
                  }
                  this.entered = false;
                  throw this.createExtraByteError(this.totalPos);
                case 17:
                  this.appendBuffer(buffer);
                  _context2.prev = 18;
                  object = this.doDecodeSync();
                  decoded = true;
                  _context2.next = 27;
                  break;
                case 23:
                  _context2.prev = 23;
                  _context2.t0 = _context2["catch"](18);
                  if (_context2.t0 instanceof RangeError) {
                    _context2.next = 27;
                    break;
                  }
                  throw _context2.t0;
                case 27:
                  this.totalPos += this.pos;
                case 28:
                  _iteratorAbruptCompletion = false;
                  _context2.next = 10;
                  break;
                case 31:
                  _context2.next = 37;
                  break;
                case 33:
                  _context2.prev = 33;
                  _context2.t1 = _context2["catch"](8);
                  _didIteratorError = true;
                  _iteratorError = _context2.t1;
                case 37:
                  _context2.prev = 37;
                  _context2.prev = 38;
                  if (!(_iteratorAbruptCompletion && _iterator["return"] != null)) {
                    _context2.next = 42;
                    break;
                  }
                  _context2.next = 42;
                  return _iterator["return"]();
                case 42:
                  _context2.prev = 42;
                  if (!_didIteratorError) {
                    _context2.next = 45;
                    break;
                  }
                  throw _iteratorError;
                case 45:
                  return _context2.finish(42);
                case 46:
                  return _context2.finish(37);
                case 47:
                  if (!decoded) {
                    _context2.next = 51;
                    break;
                  }
                  if (!this.hasRemaining(1)) {
                    _context2.next = 50;
                    break;
                  }
                  throw this.createExtraByteError(this.totalPos);
                case 50:
                  return _context2.abrupt("return", object);
                case 51:
                  headByte = this.headByte, pos = this.pos, totalPos = this.totalPos;
                  throw new RangeError("Insufficient data in parsing " + prettyByte(headByte) + " at " + totalPos + " (" + pos + " in the current buffer)");
                case 53:
                  _context2.prev = 53;
                  this.entered = false;
                  return _context2.finish(53);
                case 56:
                case "end":
                  return _context2.stop();
              }
            }, _callee, this, [[3,, 53, 56], [8, 33, 37, 47], [18, 23], [38,, 42, 46]]);
          }));
          function decodeAsync(_x) {
            return _decodeAsync.apply(this, arguments);
          }
          return decodeAsync;
        }();
        _proto2.decodeArrayStream = function decodeArrayStream(stream) {
          return this.decodeMultiAsync(stream, true);
        };
        _proto2.decodeStream = function decodeStream(stream) {
          return this.decodeMultiAsync(stream, false);
        };
        _proto2.decodeMultiAsync = function decodeMultiAsync(stream, isArray) {
          var _this = this;
          return _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var instance, isArrayHeaderRequired, arrayItemsLeft, _iteratorAbruptCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, buffer;
            return _regeneratorRuntime().wrap(function _callee2$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  if (!_this.entered) {
                    _context3.next = 4;
                    break;
                  }
                  instance = _this.clone();
                  return _context3.delegateYield(_asyncGeneratorDelegate(_asyncIterator(instance.decodeMultiAsync(stream, isArray))), "t0", 3);
                case 3:
                  return _context3.abrupt("return");
                case 4:
                  _context3.prev = 4;
                  _this.entered = true;
                  isArrayHeaderRequired = isArray;
                  arrayItemsLeft = -1;
                  _iteratorAbruptCompletion2 = false;
                  _didIteratorError2 = false;
                  _context3.prev = 10;
                  _iterator2 = _asyncIterator(stream);
                case 12:
                  _context3.next = 14;
                  return _awaitAsyncGenerator(_iterator2.next());
                case 14:
                  if (!(_iteratorAbruptCompletion2 = !(_step2 = _context3.sent).done)) {
                    _context3.next = 38;
                    break;
                  }
                  buffer = _step2.value;
                  if (!(isArray && arrayItemsLeft === 0)) {
                    _context3.next = 18;
                    break;
                  }
                  throw _this.createExtraByteError(_this.totalPos);
                case 18:
                  _this.appendBuffer(buffer);
                  if (isArrayHeaderRequired) {
                    arrayItemsLeft = _this.readArraySize();
                    isArrayHeaderRequired = false;
                    _this.complete();
                  }
                  _context3.prev = 20;
                case 21:
                  _context3.next = 24;
                  return _this.doDecodeSync();
                case 24:
                  if (!(--arrayItemsLeft === 0)) {
                    _context3.next = 26;
                    break;
                  }
                  return _context3.abrupt("break", 28);
                case 26:
                  _context3.next = 21;
                  break;
                case 28:
                  _context3.next = 34;
                  break;
                case 30:
                  _context3.prev = 30;
                  _context3.t1 = _context3["catch"](20);
                  if (_context3.t1 instanceof RangeError) {
                    _context3.next = 34;
                    break;
                  }
                  throw _context3.t1;
                case 34:
                  _this.totalPos += _this.pos;
                case 35:
                  _iteratorAbruptCompletion2 = false;
                  _context3.next = 12;
                  break;
                case 38:
                  _context3.next = 44;
                  break;
                case 40:
                  _context3.prev = 40;
                  _context3.t2 = _context3["catch"](10);
                  _didIteratorError2 = true;
                  _iteratorError2 = _context3.t2;
                case 44:
                  _context3.prev = 44;
                  _context3.prev = 45;
                  if (!(_iteratorAbruptCompletion2 && _iterator2["return"] != null)) {
                    _context3.next = 49;
                    break;
                  }
                  _context3.next = 49;
                  return _awaitAsyncGenerator(_iterator2["return"]());
                case 49:
                  _context3.prev = 49;
                  if (!_didIteratorError2) {
                    _context3.next = 52;
                    break;
                  }
                  throw _iteratorError2;
                case 52:
                  return _context3.finish(49);
                case 53:
                  return _context3.finish(44);
                case 54:
                  _context3.prev = 54;
                  _this.entered = false;
                  return _context3.finish(54);
                case 57:
                case "end":
                  return _context3.stop();
              }
            }, _callee2, null, [[4,, 54, 57], [10, 40, 44, 54], [20, 30], [45,, 49, 53]]);
          }))();
        };
        _proto2.doDecodeSync = function doDecodeSync() {
          DECODE: while (true) {
            var headByte = this.readHeadByte();
            var object = void 0;
            if (headByte >= 0xe0) {
              // negative fixint (111x xxxx) 0xe0 - 0xff
              object = headByte - 0x100;
            } else if (headByte < 0xc0) {
              if (headByte < 0x80) {
                // positive fixint (0xxx xxxx) 0x00 - 0x7f
                object = headByte;
              } else if (headByte < 0x90) {
                // fixmap (1000 xxxx) 0x80 - 0x8f
                var size = headByte - 0x80;
                if (size !== 0) {
                  this.pushMapState(size);
                  this.complete();
                  continue DECODE;
                } else {
                  object = {};
                }
              } else if (headByte < 0xa0) {
                // fixarray (1001 xxxx) 0x90 - 0x9f
                var _size = headByte - 0x90;
                if (_size !== 0) {
                  this.pushArrayState(_size);
                  this.complete();
                  continue DECODE;
                } else {
                  object = [];
                }
              } else {
                // fixstr (101x xxxx) 0xa0 - 0xbf
                var byteLength = headByte - 0xa0;
                object = this.decodeString(byteLength, 0);
              }
            } else if (headByte === 0xc0) {
              // nil
              object = null;
            } else if (headByte === 0xc2) {
              // false
              object = false;
            } else if (headByte === 0xc3) {
              // true
              object = true;
            } else if (headByte === 0xca) {
              // float 32
              object = this.readF32();
            } else if (headByte === 0xcb) {
              // float 64
              object = this.readF64();
            } else if (headByte === 0xcc) {
              // uint 8
              object = this.readU8();
            } else if (headByte === 0xcd) {
              // uint 16
              object = this.readU16();
            } else if (headByte === 0xce) {
              // uint 32
              object = this.readU32();
            } else if (headByte === 0xcf) {
              // uint 64
              if (this.useBigInt64) {
                object = this.readU64AsBigInt();
              } else {
                object = this.readU64();
              }
            } else if (headByte === 0xd0) {
              // int 8
              object = this.readI8();
            } else if (headByte === 0xd1) {
              // int 16
              object = this.readI16();
            } else if (headByte === 0xd2) {
              // int 32
              object = this.readI32();
            } else if (headByte === 0xd3) {
              // int 64
              if (this.useBigInt64) {
                object = this.readI64AsBigInt();
              } else {
                object = this.readI64();
              }
            } else if (headByte === 0xd9) {
              // str 8
              var _byteLength = this.lookU8();
              object = this.decodeString(_byteLength, 1);
            } else if (headByte === 0xda) {
              // str 16
              var _byteLength2 = this.lookU16();
              object = this.decodeString(_byteLength2, 2);
            } else if (headByte === 0xdb) {
              // str 32
              var _byteLength3 = this.lookU32();
              object = this.decodeString(_byteLength3, 4);
            } else if (headByte === 0xdc) {
              // array 16
              var _size2 = this.readU16();
              if (_size2 !== 0) {
                this.pushArrayState(_size2);
                this.complete();
                continue DECODE;
              } else {
                object = [];
              }
            } else if (headByte === 0xdd) {
              // array 32
              var _size3 = this.readU32();
              if (_size3 !== 0) {
                this.pushArrayState(_size3);
                this.complete();
                continue DECODE;
              } else {
                object = [];
              }
            } else if (headByte === 0xde) {
              // map 16
              var _size4 = this.readU16();
              if (_size4 !== 0) {
                this.pushMapState(_size4);
                this.complete();
                continue DECODE;
              } else {
                object = {};
              }
            } else if (headByte === 0xdf) {
              // map 32
              var _size5 = this.readU32();
              if (_size5 !== 0) {
                this.pushMapState(_size5);
                this.complete();
                continue DECODE;
              } else {
                object = {};
              }
            } else if (headByte === 0xc4) {
              // bin 8
              var _size6 = this.lookU8();
              object = this.decodeBinary(_size6, 1);
            } else if (headByte === 0xc5) {
              // bin 16
              var _size7 = this.lookU16();
              object = this.decodeBinary(_size7, 2);
            } else if (headByte === 0xc6) {
              // bin 32
              var _size8 = this.lookU32();
              object = this.decodeBinary(_size8, 4);
            } else if (headByte === 0xd4) {
              // fixext 1
              object = this.decodeExtension(1, 0);
            } else if (headByte === 0xd5) {
              // fixext 2
              object = this.decodeExtension(2, 0);
            } else if (headByte === 0xd6) {
              // fixext 4
              object = this.decodeExtension(4, 0);
            } else if (headByte === 0xd7) {
              // fixext 8
              object = this.decodeExtension(8, 0);
            } else if (headByte === 0xd8) {
              // fixext 16
              object = this.decodeExtension(16, 0);
            } else if (headByte === 0xc7) {
              // ext 8
              var _size9 = this.lookU8();
              object = this.decodeExtension(_size9, 1);
            } else if (headByte === 0xc8) {
              // ext 16
              var _size10 = this.lookU16();
              object = this.decodeExtension(_size10, 2);
            } else if (headByte === 0xc9) {
              // ext 32
              var _size11 = this.lookU32();
              object = this.decodeExtension(_size11, 4);
            } else {
              throw new DecodeError("Unrecognized type byte: " + prettyByte(headByte));
            }
            this.complete();
            var stack = this.stack;
            while (stack.length > 0) {
              // arrays and maps
              var state = stack.top();
              if (state.type === STATE_ARRAY) {
                state.array[state.position] = object;
                state.position++;
                if (state.position === state.size) {
                  object = state.array;
                  stack.release(state);
                } else {
                  continue DECODE;
                }
              } else if (state.type === STATE_MAP_KEY) {
                if (object === "__proto__") {
                  throw new DecodeError("The key __proto__ is not allowed");
                }
                state.key = this.mapKeyConverter(object);
                state.type = STATE_MAP_VALUE;
                continue DECODE;
              } else {
                // it must be `state.type === State.MAP_VALUE` here

                state.map[state.key] = object;
                state.readCount++;
                if (state.readCount === state.size) {
                  object = state.map;
                  stack.release(state);
                } else {
                  state.key = null;
                  state.type = STATE_MAP_KEY;
                  continue DECODE;
                }
              }
            }
            return object;
          }
        };
        _proto2.readHeadByte = function readHeadByte() {
          if (this.headByte === HEAD_BYTE_REQUIRED) {
            this.headByte = this.readU8();
            // console.log("headByte", prettyByte(this.headByte));
          }

          return this.headByte;
        };
        _proto2.complete = function complete() {
          this.headByte = HEAD_BYTE_REQUIRED;
        };
        _proto2.readArraySize = function readArraySize() {
          var headByte = this.readHeadByte();
          switch (headByte) {
            case 0xdc:
              return this.readU16();
            case 0xdd:
              return this.readU32();
            default:
              {
                if (headByte < 0xa0) {
                  return headByte - 0x90;
                } else {
                  throw new DecodeError("Unrecognized array type byte: " + prettyByte(headByte));
                }
              }
          }
        };
        _proto2.pushMapState = function pushMapState(size) {
          if (size > this.maxMapLength) {
            throw new DecodeError("Max length exceeded: map length (" + size + ") > maxMapLengthLength (" + this.maxMapLength + ")");
          }
          this.stack.pushMapState(size);
        };
        _proto2.pushArrayState = function pushArrayState(size) {
          if (size > this.maxArrayLength) {
            throw new DecodeError("Max length exceeded: array length (" + size + ") > maxArrayLength (" + this.maxArrayLength + ")");
          }
          this.stack.pushArrayState(size);
        };
        _proto2.decodeString = function decodeString(byteLength, headerOffset) {
          if (!this.rawStrings || this.stateIsMapKey()) {
            return this.decodeUtf8String(byteLength, headerOffset);
          }
          return this.decodeBinary(byteLength, headerOffset);
        }

        /**
         * @throws {@link RangeError}
         */;
        _proto2.decodeUtf8String = function decodeUtf8String(byteLength, headerOffset) {
          var _this$keyDecoder;
          if (byteLength > this.maxStrLength) {
            throw new DecodeError("Max length exceeded: UTF-8 byte length (" + byteLength + ") > maxStrLength (" + this.maxStrLength + ")");
          }
          if (this.bytes.byteLength < this.pos + headerOffset + byteLength) {
            throw MORE_DATA;
          }
          var offset = this.pos + headerOffset;
          var object;
          if (this.stateIsMapKey() && (_this$keyDecoder = this.keyDecoder) != null && _this$keyDecoder.canBeCached(byteLength)) {
            object = this.keyDecoder.decode(this.bytes, offset, byteLength);
          } else {
            object = utf8Decode(this.bytes, offset, byteLength);
          }
          this.pos += headerOffset + byteLength;
          return object;
        };
        _proto2.stateIsMapKey = function stateIsMapKey() {
          if (this.stack.length > 0) {
            var state = this.stack.top();
            return state.type === STATE_MAP_KEY;
          }
          return false;
        }

        /**
         * @throws {@link RangeError}
         */;
        _proto2.decodeBinary = function decodeBinary(byteLength, headOffset) {
          if (byteLength > this.maxBinLength) {
            throw new DecodeError("Max length exceeded: bin length (" + byteLength + ") > maxBinLength (" + this.maxBinLength + ")");
          }
          if (!this.hasRemaining(byteLength + headOffset)) {
            throw MORE_DATA;
          }
          var offset = this.pos + headOffset;
          var object = this.bytes.subarray(offset, offset + byteLength);
          this.pos += headOffset + byteLength;
          return object;
        };
        _proto2.decodeExtension = function decodeExtension(size, headOffset) {
          if (size > this.maxExtLength) {
            throw new DecodeError("Max length exceeded: ext length (" + size + ") > maxExtLength (" + this.maxExtLength + ")");
          }
          var extType = this.view.getInt8(this.pos + headOffset);
          var data = this.decodeBinary(size, headOffset + 1 /* extType */);
          return this.extensionCodec.decode(data, extType, this.context);
        };
        _proto2.lookU8 = function lookU8() {
          return this.view.getUint8(this.pos);
        };
        _proto2.lookU16 = function lookU16() {
          return this.view.getUint16(this.pos);
        };
        _proto2.lookU32 = function lookU32() {
          return this.view.getUint32(this.pos);
        };
        _proto2.readU8 = function readU8() {
          var value = this.view.getUint8(this.pos);
          this.pos++;
          return value;
        };
        _proto2.readI8 = function readI8() {
          var value = this.view.getInt8(this.pos);
          this.pos++;
          return value;
        };
        _proto2.readU16 = function readU16() {
          var value = this.view.getUint16(this.pos);
          this.pos += 2;
          return value;
        };
        _proto2.readI16 = function readI16() {
          var value = this.view.getInt16(this.pos);
          this.pos += 2;
          return value;
        };
        _proto2.readU32 = function readU32() {
          var value = this.view.getUint32(this.pos);
          this.pos += 4;
          return value;
        };
        _proto2.readI32 = function readI32() {
          var value = this.view.getInt32(this.pos);
          this.pos += 4;
          return value;
        };
        _proto2.readU64 = function readU64() {
          var value = getUint64(this.view, this.pos);
          this.pos += 8;
          return value;
        };
        _proto2.readI64 = function readI64() {
          var value = getInt64(this.view, this.pos);
          this.pos += 8;
          return value;
        };
        _proto2.readU64AsBigInt = function readU64AsBigInt() {
          var value = this.view.getBigUint64(this.pos);
          this.pos += 8;
          return value;
        };
        _proto2.readI64AsBigInt = function readI64AsBigInt() {
          var value = this.view.getBigInt64(this.pos);
          this.pos += 8;
          return value;
        };
        _proto2.readF32 = function readF32() {
          var value = this.view.getFloat32(this.pos);
          this.pos += 4;
          return value;
        };
        _proto2.readF64 = function readF64() {
          var value = this.view.getFloat64(this.pos);
          this.pos += 8;
          return value;
        };
        return Decoder;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DefaultHttpClient.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Errors.ts', './FetchHttpClient.ts', './HttpClient.ts', './Utils2.ts', './XhrHttpClient.ts'], function (exports) {
  var _inheritsLoose, cclegacy, AbortError, FetchHttpClient, HttpClient, Platform, XhrHttpClient;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      AbortError = module.AbortError;
    }, function (module) {
      FetchHttpClient = module.FetchHttpClient;
    }, function (module) {
      HttpClient = module.HttpClient;
    }, function (module) {
      Platform = module.Platform;
    }, function (module) {
      XhrHttpClient = module.XhrHttpClient;
    }],
    execute: function () {
      cclegacy._RF.push({}, "753eb3XkiNLKInpSavMxFzf", "DefaultHttpClient", undefined);

      /** Default implementation of {@link @microsoft/signalr.HttpClient}. */
      var DefaultHttpClient = exports('DefaultHttpClient', /*#__PURE__*/function (_HttpClient) {
        _inheritsLoose(DefaultHttpClient, _HttpClient);
        /** Creates a new instance of the {@link @microsoft/signalr.DefaultHttpClient}, using the provided {@link @microsoft/signalr.ILogger} to log messages. */
        function DefaultHttpClient(logger) {
          var _this;
          _this = _HttpClient.call(this) || this;
          _this._httpClient = void 0;
          if (typeof fetch !== "undefined" || Platform.isNode) {
            _this._httpClient = new FetchHttpClient(logger);
          } else if (typeof XMLHttpRequest !== "undefined") {
            _this._httpClient = new XhrHttpClient(logger);
          } else {
            throw new Error("No usable HttpClient found.");
          }
          return _this;
        }

        /** @inheritDoc */
        var _proto = DefaultHttpClient.prototype;
        _proto.send = function send(request) {
          // Check that abort was not signaled before calling send
          if (request.abortSignal && request.abortSignal.aborted) {
            return Promise.reject(new AbortError());
          }
          if (!request.method) {
            return Promise.reject(new Error("No method defined."));
          }
          if (!request.url) {
            return Promise.reject(new Error("No url defined."));
          }
          return this._httpClient.send(request);
        };
        _proto.getCookieString = function getCookieString(url) {
          return this._httpClient.getCookieString(url);
        };
        return DefaultHttpClient;
      }(HttpClient));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DefaultReconnectPolicy.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7d527/0QNNHb7NuGAoXxTzO", "DefaultReconnectPolicy", undefined); // Licensed to the .NET Foundation under one or more agreements.
      // The .NET Foundation licenses this file to you under the MIT license.
      // 0, 2, 10, 30 second delays before reconnect attempts.
      var DEFAULT_RETRY_DELAYS_IN_MILLISECONDS = [0, 2000, 10000, 30000, null];

      /** @private */
      var DefaultReconnectPolicy = exports('DefaultReconnectPolicy', /*#__PURE__*/function () {
        function DefaultReconnectPolicy(retryDelays) {
          this._retryDelays = void 0;
          this._retryDelays = retryDelays !== undefined ? [].concat(retryDelays, [null]) : DEFAULT_RETRY_DELAYS_IN_MILLISECONDS;
        }
        var _proto = DefaultReconnectPolicy.prototype;
        _proto.nextRetryDelayInMilliseconds = function nextRetryDelayInMilliseconds(retryContext) {
          return this._retryDelays[retryContext.previousRetryCount];
        };
        return DefaultReconnectPolicy;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/encode.ts", ['cc', './Encoder.ts'], function (exports) {
  var cclegacy, Encoder;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      Encoder = module.Encoder;
    }],
    execute: function () {
      exports('encode', encode);
      cclegacy._RF.push({}, "52bfcBQZCBM5pY8WfxFgAYN", "encode", undefined);
      /**
       * It encodes `value` in the MessagePack format and
       * returns a byte buffer.
       *
       * The returned buffer is a slice of a larger `ArrayBuffer`, so you have to use its `#byteOffset` and `#byteLength` in order to convert it to another typed arrays including NodeJS `Buffer`.
       */
      function encode(value, options) {
        var encoder = new Encoder(options);
        return encoder.encodeSharedRef(value);
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Encoder.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './utf8.ts', './ExtensionCodec.ts', './int.ts', './typedArrays.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy, utf8Count, utf8Encode, ExtensionCodec, setUint64, setInt64, ensureUint8Array;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      utf8Count = module.utf8Count;
      utf8Encode = module.utf8Encode;
    }, function (module) {
      ExtensionCodec = module.ExtensionCodec;
    }, function (module) {
      setUint64 = module.setUint64;
      setInt64 = module.setInt64;
    }, function (module) {
      ensureUint8Array = module.ensureUint8Array;
    }],
    execute: function () {
      cclegacy._RF.push({}, "bcb4c0kWjRNPJMQbO04LoWr", "Encoder", undefined);
      var DEFAULT_MAX_DEPTH = exports('DEFAULT_MAX_DEPTH', 100);
      var DEFAULT_INITIAL_BUFFER_SIZE = exports('DEFAULT_INITIAL_BUFFER_SIZE', 2048);
      var Encoder = exports('Encoder', /*#__PURE__*/function () {
        function Encoder(options) {
          var _options$extensionCod, _options$useBigInt, _options$maxDepth, _options$initialBuffe, _options$sortKeys, _options$forceFloat, _options$ignoreUndefi, _options$forceInteger;
          this.extensionCodec = void 0;
          this.context = void 0;
          this.useBigInt64 = void 0;
          this.maxDepth = void 0;
          this.initialBufferSize = void 0;
          this.sortKeys = void 0;
          this.forceFloat32 = void 0;
          this.ignoreUndefined = void 0;
          this.forceIntegerToFloat = void 0;
          this.pos = void 0;
          this.view = void 0;
          this.bytes = void 0;
          this.entered = false;
          this.extensionCodec = (_options$extensionCod = options == null ? void 0 : options.extensionCodec) != null ? _options$extensionCod : ExtensionCodec.defaultCodec;
          this.context = options == null ? void 0 : options.context; // needs a type assertion because EncoderOptions has no context property when ContextType is undefined

          this.useBigInt64 = (_options$useBigInt = options == null ? void 0 : options.useBigInt64) != null ? _options$useBigInt : false;
          this.maxDepth = (_options$maxDepth = options == null ? void 0 : options.maxDepth) != null ? _options$maxDepth : DEFAULT_MAX_DEPTH;
          this.initialBufferSize = (_options$initialBuffe = options == null ? void 0 : options.initialBufferSize) != null ? _options$initialBuffe : DEFAULT_INITIAL_BUFFER_SIZE;
          this.sortKeys = (_options$sortKeys = options == null ? void 0 : options.sortKeys) != null ? _options$sortKeys : false;
          this.forceFloat32 = (_options$forceFloat = options == null ? void 0 : options.forceFloat32) != null ? _options$forceFloat : false;
          this.ignoreUndefined = (_options$ignoreUndefi = options == null ? void 0 : options.ignoreUndefined) != null ? _options$ignoreUndefi : false;
          this.forceIntegerToFloat = (_options$forceInteger = options == null ? void 0 : options.forceIntegerToFloat) != null ? _options$forceInteger : false;
          this.pos = 0;
          this.view = new DataView(new ArrayBuffer(this.initialBufferSize));
          this.bytes = new Uint8Array(this.view.buffer);
        }
        var _proto = Encoder.prototype;
        _proto.clone = function clone() {
          // Because of slightly special argument `context`,
          // type assertion is needed.
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          return new Encoder({
            extensionCodec: this.extensionCodec,
            context: this.context,
            useBigInt64: this.useBigInt64,
            maxDepth: this.maxDepth,
            initialBufferSize: this.initialBufferSize,
            sortKeys: this.sortKeys,
            forceFloat32: this.forceFloat32,
            ignoreUndefined: this.ignoreUndefined,
            forceIntegerToFloat: this.forceIntegerToFloat
          });
        };
        _proto.reinitializeState = function reinitializeState() {
          this.pos = 0;
        }

        /**
         * This is almost equivalent to {@link Encoder#encode}, but it returns an reference of the encoder's internal buffer and thus much faster than {@link Encoder#encode}.
         *
         * @returns Encodes the object and returns a shared reference the encoder's internal buffer.
         */;
        _proto.encodeSharedRef = function encodeSharedRef(object) {
          if (this.entered) {
            var instance = this.clone();
            return instance.encodeSharedRef(object);
          }
          try {
            this.entered = true;
            this.reinitializeState();
            this.doEncode(object, 1);
            return this.bytes.subarray(0, this.pos);
          } finally {
            this.entered = false;
          }
        }

        /**
         * @returns Encodes the object and returns a copy of the encoder's internal buffer.
         */;
        _proto.encode = function encode(object) {
          if (this.entered) {
            var instance = this.clone();
            return instance.encode(object);
          }
          try {
            this.entered = true;
            this.reinitializeState();
            this.doEncode(object, 1);
            return this.bytes.slice(0, this.pos);
          } finally {
            this.entered = false;
          }
        };
        _proto.doEncode = function doEncode(object, depth) {
          if (depth > this.maxDepth) {
            throw new Error("Too deep objects in depth " + depth);
          }
          if (object == null) {
            this.encodeNil();
          } else if (typeof object === "boolean") {
            this.encodeBoolean(object);
          } else if (typeof object === "number") {
            if (!this.forceIntegerToFloat) {
              this.encodeNumber(object);
            } else {
              this.encodeNumberAsFloat(object);
            }
          } else if (typeof object === "string") {
            this.encodeString(object);
          } else if (this.useBigInt64 && typeof object === "bigint") {
            this.encodeBigInt64(object);
          } else {
            this.encodeObject(object, depth);
          }
        };
        _proto.ensureBufferSizeToWrite = function ensureBufferSizeToWrite(sizeToWrite) {
          var requiredSize = this.pos + sizeToWrite;
          if (this.view.byteLength < requiredSize) {
            this.resizeBuffer(requiredSize * 2);
          }
        };
        _proto.resizeBuffer = function resizeBuffer(newSize) {
          var newBuffer = new ArrayBuffer(newSize);
          var newBytes = new Uint8Array(newBuffer);
          var newView = new DataView(newBuffer);
          newBytes.set(this.bytes);
          this.view = newView;
          this.bytes = newBytes;
        };
        _proto.encodeNil = function encodeNil() {
          this.writeU8(0xc0);
        };
        _proto.encodeBoolean = function encodeBoolean(object) {
          if (object === false) {
            this.writeU8(0xc2);
          } else {
            this.writeU8(0xc3);
          }
        };
        _proto.encodeNumber = function encodeNumber(object) {
          if (!this.forceIntegerToFloat && Number.isSafeInteger(object)) {
            if (object >= 0) {
              if (object < 0x80) {
                // positive fixint
                this.writeU8(object);
              } else if (object < 0x100) {
                // uint 8
                this.writeU8(0xcc);
                this.writeU8(object);
              } else if (object < 0x10000) {
                // uint 16
                this.writeU8(0xcd);
                this.writeU16(object);
              } else if (object < 0x100000000) {
                // uint 32
                this.writeU8(0xce);
                this.writeU32(object);
              } else if (!this.useBigInt64) {
                // uint 64
                this.writeU8(0xcf);
                this.writeU64(object);
              } else {
                this.encodeNumberAsFloat(object);
              }
            } else {
              if (object >= -0x20) {
                // negative fixint
                this.writeU8(0xe0 | object + 0x20);
              } else if (object >= -0x80) {
                // int 8
                this.writeU8(0xd0);
                this.writeI8(object);
              } else if (object >= -0x8000) {
                // int 16
                this.writeU8(0xd1);
                this.writeI16(object);
              } else if (object >= -0x80000000) {
                // int 32
                this.writeU8(0xd2);
                this.writeI32(object);
              } else if (!this.useBigInt64) {
                // int 64
                this.writeU8(0xd3);
                this.writeI64(object);
              } else {
                this.encodeNumberAsFloat(object);
              }
            }
          } else {
            this.encodeNumberAsFloat(object);
          }
        };
        _proto.encodeNumberAsFloat = function encodeNumberAsFloat(object) {
          if (this.forceFloat32) {
            // float 32
            this.writeU8(0xca);
            this.writeF32(object);
          } else {
            // float 64
            this.writeU8(0xcb);
            this.writeF64(object);
          }
        };
        _proto.encodeBigInt64 = function encodeBigInt64(object) {
          if (object >= BigInt(0)) {
            // uint 64
            this.writeU8(0xcf);
            this.writeBigUint64(object);
          } else {
            // int 64
            this.writeU8(0xd3);
            this.writeBigInt64(object);
          }
        };
        _proto.writeStringHeader = function writeStringHeader(byteLength) {
          if (byteLength < 32) {
            // fixstr
            this.writeU8(0xa0 + byteLength);
          } else if (byteLength < 0x100) {
            // str 8
            this.writeU8(0xd9);
            this.writeU8(byteLength);
          } else if (byteLength < 0x10000) {
            // str 16
            this.writeU8(0xda);
            this.writeU16(byteLength);
          } else if (byteLength < 0x100000000) {
            // str 32
            this.writeU8(0xdb);
            this.writeU32(byteLength);
          } else {
            throw new Error("Too long string: " + byteLength + " bytes in UTF-8");
          }
        };
        _proto.encodeString = function encodeString(object) {
          var maxHeaderSize = 1 + 4;
          var byteLength = utf8Count(object);
          this.ensureBufferSizeToWrite(maxHeaderSize + byteLength);
          this.writeStringHeader(byteLength);
          utf8Encode(object, this.bytes, this.pos);
          this.pos += byteLength;
        };
        _proto.encodeObject = function encodeObject(object, depth) {
          // try to encode objects with custom codec first of non-primitives
          var ext = this.extensionCodec.tryToEncode(object, this.context);
          if (ext != null) {
            this.encodeExtension(ext);
          } else if (Array.isArray(object)) {
            this.encodeArray(object, depth);
          } else if (ArrayBuffer.isView(object)) {
            this.encodeBinary(object);
          } else if (typeof object === "object") {
            this.encodeMap(object, depth);
          } else {
            // symbol, function and other special object come here unless extensionCodec handles them.
            throw new Error("Unrecognized object: " + Object.prototype.toString.apply(object));
          }
        };
        _proto.encodeBinary = function encodeBinary(object) {
          var size = object.byteLength;
          if (size < 0x100) {
            // bin 8
            this.writeU8(0xc4);
            this.writeU8(size);
          } else if (size < 0x10000) {
            // bin 16
            this.writeU8(0xc5);
            this.writeU16(size);
          } else if (size < 0x100000000) {
            // bin 32
            this.writeU8(0xc6);
            this.writeU32(size);
          } else {
            throw new Error("Too large binary: " + size);
          }
          var bytes = ensureUint8Array(object);
          this.writeU8a(bytes);
        };
        _proto.encodeArray = function encodeArray(object, depth) {
          var size = object.length;
          if (size < 16) {
            // fixarray
            this.writeU8(0x90 + size);
          } else if (size < 0x10000) {
            // array 16
            this.writeU8(0xdc);
            this.writeU16(size);
          } else if (size < 0x100000000) {
            // array 32
            this.writeU8(0xdd);
            this.writeU32(size);
          } else {
            throw new Error("Too large array: " + size);
          }
          for (var _iterator = _createForOfIteratorHelperLoose(object), _step; !(_step = _iterator()).done;) {
            var item = _step.value;
            this.doEncode(item, depth + 1);
          }
        };
        _proto.countWithoutUndefined = function countWithoutUndefined(object, keys) {
          var count = 0;
          for (var _iterator2 = _createForOfIteratorHelperLoose(keys), _step2; !(_step2 = _iterator2()).done;) {
            var key = _step2.value;
            if (object[key] !== undefined) {
              count++;
            }
          }
          return count;
        };
        _proto.encodeMap = function encodeMap(object, depth) {
          var keys = Object.keys(object);
          if (this.sortKeys) {
            keys.sort();
          }
          var size = this.ignoreUndefined ? this.countWithoutUndefined(object, keys) : keys.length;
          if (size < 16) {
            // fixmap
            this.writeU8(0x80 + size);
          } else if (size < 0x10000) {
            // map 16
            this.writeU8(0xde);
            this.writeU16(size);
          } else if (size < 0x100000000) {
            // map 32
            this.writeU8(0xdf);
            this.writeU32(size);
          } else {
            throw new Error("Too large map object: " + size);
          }
          for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
            var key = _keys[_i];
            var value = object[key];
            if (!(this.ignoreUndefined && value === undefined)) {
              this.encodeString(key);
              this.doEncode(value, depth + 1);
            }
          }
        };
        _proto.encodeExtension = function encodeExtension(ext) {
          if (typeof ext.data === "function") {
            var data = ext.data(this.pos + 6);
            var _size = data.length;
            if (_size >= 0x100000000) {
              throw new Error("Too large extension object: " + _size);
            }
            this.writeU8(0xc9);
            this.writeU32(_size);
            this.writeI8(ext.type);
            this.writeU8a(data);
            return;
          }
          var size = ext.data.length;
          if (size === 1) {
            // fixext 1
            this.writeU8(0xd4);
          } else if (size === 2) {
            // fixext 2
            this.writeU8(0xd5);
          } else if (size === 4) {
            // fixext 4
            this.writeU8(0xd6);
          } else if (size === 8) {
            // fixext 8
            this.writeU8(0xd7);
          } else if (size === 16) {
            // fixext 16
            this.writeU8(0xd8);
          } else if (size < 0x100) {
            // ext 8
            this.writeU8(0xc7);
            this.writeU8(size);
          } else if (size < 0x10000) {
            // ext 16
            this.writeU8(0xc8);
            this.writeU16(size);
          } else if (size < 0x100000000) {
            // ext 32
            this.writeU8(0xc9);
            this.writeU32(size);
          } else {
            throw new Error("Too large extension object: " + size);
          }
          this.writeI8(ext.type);
          this.writeU8a(ext.data);
        };
        _proto.writeU8 = function writeU8(value) {
          this.ensureBufferSizeToWrite(1);
          this.view.setUint8(this.pos, value);
          this.pos++;
        };
        _proto.writeU8a = function writeU8a(values) {
          var size = values.length;
          this.ensureBufferSizeToWrite(size);
          this.bytes.set(values, this.pos);
          this.pos += size;
        };
        _proto.writeI8 = function writeI8(value) {
          this.ensureBufferSizeToWrite(1);
          this.view.setInt8(this.pos, value);
          this.pos++;
        };
        _proto.writeU16 = function writeU16(value) {
          this.ensureBufferSizeToWrite(2);
          this.view.setUint16(this.pos, value);
          this.pos += 2;
        };
        _proto.writeI16 = function writeI16(value) {
          this.ensureBufferSizeToWrite(2);
          this.view.setInt16(this.pos, value);
          this.pos += 2;
        };
        _proto.writeU32 = function writeU32(value) {
          this.ensureBufferSizeToWrite(4);
          this.view.setUint32(this.pos, value);
          this.pos += 4;
        };
        _proto.writeI32 = function writeI32(value) {
          this.ensureBufferSizeToWrite(4);
          this.view.setInt32(this.pos, value);
          this.pos += 4;
        };
        _proto.writeF32 = function writeF32(value) {
          this.ensureBufferSizeToWrite(4);
          this.view.setFloat32(this.pos, value);
          this.pos += 4;
        };
        _proto.writeF64 = function writeF64(value) {
          this.ensureBufferSizeToWrite(8);
          this.view.setFloat64(this.pos, value);
          this.pos += 8;
        };
        _proto.writeU64 = function writeU64(value) {
          this.ensureBufferSizeToWrite(8);
          setUint64(this.view, this.pos, value);
          this.pos += 8;
        };
        _proto.writeI64 = function writeI64(value) {
          this.ensureBufferSizeToWrite(8);
          setInt64(this.view, this.pos, value);
          this.pos += 8;
        };
        _proto.writeBigUint64 = function writeBigUint64(value) {
          this.ensureBufferSizeToWrite(8);
          this.view.setBigUint64(this.pos, value);
          this.pos += 8;
        };
        _proto.writeBigInt64 = function writeBigInt64(value) {
          this.ensureBufferSizeToWrite(8);
          this.view.setBigInt64(this.pos, value);
          this.pos += 8;
        };
        return Encoder;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Errors.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, _wrapNativeSuper, cclegacy;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _wrapNativeSuper = module.wrapNativeSuper;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e699apRMXlFCpnU/fPSk0Wf", "Errors", undefined); // Licensed to the .NET Foundation under one or more agreements.
      // The .NET Foundation licenses this file to you under the MIT license.
      /** Error thrown when an HTTP request fails. */
      var HttpError = exports('HttpError', /*#__PURE__*/function (_Error) {
        _inheritsLoose(HttpError, _Error);
        /** Constructs a new instance of {@link @microsoft/signalr.HttpError}.
         *
         * @param {string} errorMessage A descriptive error message.
         * @param {number} statusCode The HTTP status code represented by this error.
         */
        function HttpError(errorMessage, statusCode) {
          var _this;
          var trueProto = (this instanceof HttpError ? this.constructor : void 0).prototype;
          _this = _Error.call(this, errorMessage + ": Status code '" + statusCode + "'") || this;
          // @ts-ignore: Intentionally unused.
          // eslint-disable-next-line @typescript-eslint/naming-convention
          _this.__proto__ = void 0;
          /** The HTTP status code represented by this error. */
          _this.statusCode = void 0;
          _this.statusCode = statusCode;

          // Workaround issue in Typescript compiler
          // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
          _this.__proto__ = trueProto;
          return _this;
        }
        return HttpError;
      }( /*#__PURE__*/_wrapNativeSuper(Error)));

      /** Error thrown when a timeout elapses. */
      var TimeoutError = exports('TimeoutError', /*#__PURE__*/function (_Error2) {
        _inheritsLoose(TimeoutError, _Error2);
        /** Constructs a new instance of {@link @microsoft/signalr.TimeoutError}.
         *
         * @param {string} errorMessage A descriptive error message.
         */
        function TimeoutError(errorMessage) {
          var _this2;
          if (errorMessage === void 0) {
            errorMessage = "A timeout occurred.";
          }
          var trueProto = (this instanceof TimeoutError ? this.constructor : void 0).prototype;
          _this2 = _Error2.call(this, errorMessage) || this;

          // Workaround issue in Typescript compiler
          // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
          // @ts-ignore: Intentionally unused.
          // eslint-disable-next-line @typescript-eslint/naming-convention
          _this2.__proto__ = void 0;
          _this2.__proto__ = trueProto;
          return _this2;
        }
        return TimeoutError;
      }( /*#__PURE__*/_wrapNativeSuper(Error)));

      /** Error thrown when an action is aborted. */
      var AbortError = exports('AbortError', /*#__PURE__*/function (_Error3) {
        _inheritsLoose(AbortError, _Error3);
        /** Constructs a new instance of {@link AbortError}.
         *
         * @param {string} errorMessage A descriptive error message.
         */
        function AbortError(errorMessage) {
          var _this3;
          if (errorMessage === void 0) {
            errorMessage = "An abort occurred.";
          }
          var trueProto = (this instanceof AbortError ? this.constructor : void 0).prototype;
          _this3 = _Error3.call(this, errorMessage) || this;

          // Workaround issue in Typescript compiler
          // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
          // @ts-ignore: Intentionally unused.
          // eslint-disable-next-line @typescript-eslint/naming-convention
          _this3.__proto__ = void 0;
          _this3.__proto__ = trueProto;
          return _this3;
        }
        return AbortError;
      }( /*#__PURE__*/_wrapNativeSuper(Error)));

      /** Error thrown when the selected transport is unsupported by the browser. */
      /** @private */
      var UnsupportedTransportError = exports('UnsupportedTransportError', /*#__PURE__*/function (_Error4) {
        _inheritsLoose(UnsupportedTransportError, _Error4);
        /** Constructs a new instance of {@link @microsoft/signalr.UnsupportedTransportError}.
         *
         * @param {string} message A descriptive error message.
         * @param {HttpTransportType} transport The {@link @microsoft/signalr.HttpTransportType} this error occurred on.
         */
        function UnsupportedTransportError(message, transport) {
          var _this4;
          var trueProto = (this instanceof UnsupportedTransportError ? this.constructor : void 0).prototype;
          _this4 = _Error4.call(this, message) || this;
          // @ts-ignore: Intentionally unused.
          // eslint-disable-next-line @typescript-eslint/naming-convention
          _this4.__proto__ = void 0;
          /** The {@link @microsoft/signalr.HttpTransportType} this error occurred on. */
          _this4.transport = void 0;
          /** The type name of this error. */
          _this4.errorType = void 0;
          _this4.transport = transport;
          _this4.errorType = 'UnsupportedTransportError';

          // Workaround issue in Typescript compiler
          // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
          _this4.__proto__ = trueProto;
          return _this4;
        }
        return UnsupportedTransportError;
      }( /*#__PURE__*/_wrapNativeSuper(Error)));

      /** Error thrown when the selected transport is disabled by the browser. */
      /** @private */
      var DisabledTransportError = exports('DisabledTransportError', /*#__PURE__*/function (_Error5) {
        _inheritsLoose(DisabledTransportError, _Error5);
        /** Constructs a new instance of {@link @microsoft/signalr.DisabledTransportError}.
         *
         * @param {string} message A descriptive error message.
         * @param {HttpTransportType} transport The {@link @microsoft/signalr.HttpTransportType} this error occurred on.
         */
        function DisabledTransportError(message, transport) {
          var _this5;
          var trueProto = (this instanceof DisabledTransportError ? this.constructor : void 0).prototype;
          _this5 = _Error5.call(this, message) || this;
          // @ts-ignore: Intentionally unused.
          // eslint-disable-next-line @typescript-eslint/naming-convention
          _this5.__proto__ = void 0;
          /** The {@link @microsoft/signalr.HttpTransportType} this error occurred on. */
          _this5.transport = void 0;
          /** The type name of this error. */
          _this5.errorType = void 0;
          _this5.transport = transport;
          _this5.errorType = 'DisabledTransportError';

          // Workaround issue in Typescript compiler
          // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
          _this5.__proto__ = trueProto;
          return _this5;
        }
        return DisabledTransportError;
      }( /*#__PURE__*/_wrapNativeSuper(Error)));

      /** Error thrown when the selected transport cannot be started. */
      /** @private */
      var FailedToStartTransportError = exports('FailedToStartTransportError', /*#__PURE__*/function (_Error6) {
        _inheritsLoose(FailedToStartTransportError, _Error6);
        /** Constructs a new instance of {@link @microsoft/signalr.FailedToStartTransportError}.
         *
         * @param {string} message A descriptive error message.
         * @param {HttpTransportType} transport The {@link @microsoft/signalr.HttpTransportType} this error occurred on.
         */
        function FailedToStartTransportError(message, transport) {
          var _this6;
          var trueProto = (this instanceof FailedToStartTransportError ? this.constructor : void 0).prototype;
          _this6 = _Error6.call(this, message) || this;
          // @ts-ignore: Intentionally unused.
          // eslint-disable-next-line @typescript-eslint/naming-convention
          _this6.__proto__ = void 0;
          /** The {@link @microsoft/signalr.HttpTransportType} this error occurred on. */
          _this6.transport = void 0;
          /** The type name of this error. */
          _this6.errorType = void 0;
          _this6.transport = transport;
          _this6.errorType = 'FailedToStartTransportError';

          // Workaround issue in Typescript compiler
          // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
          _this6.__proto__ = trueProto;
          return _this6;
        }
        return FailedToStartTransportError;
      }( /*#__PURE__*/_wrapNativeSuper(Error)));

      /** Error thrown when the negotiation with the server failed to complete. */
      /** @private */
      var FailedToNegotiateWithServerError = exports('FailedToNegotiateWithServerError', /*#__PURE__*/function (_Error7) {
        _inheritsLoose(FailedToNegotiateWithServerError, _Error7);
        /** Constructs a new instance of {@link @microsoft/signalr.FailedToNegotiateWithServerError}.
         *
         * @param {string} message A descriptive error message.
         */
        function FailedToNegotiateWithServerError(message) {
          var _this7;
          var trueProto = (this instanceof FailedToNegotiateWithServerError ? this.constructor : void 0).prototype;
          _this7 = _Error7.call(this, message) || this;
          // @ts-ignore: Intentionally unused.
          // eslint-disable-next-line @typescript-eslint/naming-convention
          _this7.__proto__ = void 0;
          /** The type name of this error. */
          _this7.errorType = void 0;
          _this7.errorType = 'FailedToNegotiateWithServerError';

          // Workaround issue in Typescript compiler
          // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
          _this7.__proto__ = trueProto;
          return _this7;
        }
        return FailedToNegotiateWithServerError;
      }( /*#__PURE__*/_wrapNativeSuper(Error)));

      /** Error thrown when multiple errors have occurred. */
      /** @private */
      var AggregateErrors = exports('AggregateErrors', /*#__PURE__*/function (_Error8) {
        _inheritsLoose(AggregateErrors, _Error8);
        /** Constructs a new instance of {@link @microsoft/signalr.AggregateErrors}.
         *
         * @param {string} message A descriptive error message.
         * @param {Error[]} innerErrors The collection of errors this error is aggregating.
         */
        function AggregateErrors(message, innerErrors) {
          var _this8;
          var trueProto = (this instanceof AggregateErrors ? this.constructor : void 0).prototype;
          _this8 = _Error8.call(this, message) || this;
          // @ts-ignore: Intentionally unused.
          // eslint-disable-next-line @typescript-eslint/naming-convention
          _this8.__proto__ = void 0;
          /** The collection of errors this error is aggregating. */
          _this8.innerErrors = void 0;
          _this8.innerErrors = innerErrors;

          // Workaround issue in Typescript compiler
          // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
          _this8.__proto__ = trueProto;
          return _this8;
        }
        return AggregateErrors;
      }( /*#__PURE__*/_wrapNativeSuper(Error)));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EventMsg.ts", ['cc'], function (exports) {
  var cclegacy, EventTarget;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      EventTarget = module.EventTarget;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b108c1PJtFAAojCVOy/SzMZ", "EventMsg", undefined);
      var EventMsg = exports('EventMsg', new EventTarget());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ExtData.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0a33a+daaJJBYH86+LmGyDE", "ExtData", undefined);
      /**
       * ExtData is used to handle Extension Types that are not registered to ExtensionCodec.
       */
      var ExtData = exports('ExtData', function ExtData(type, data) {
        this.type = void 0;
        this.data = void 0;
        this.type = type;
        this.data = data;
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ExtensionCodec.ts", ['cc', './ExtData.ts', './timestamp.ts'], function (exports) {
  var cclegacy, ExtData, timestampExtension;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ExtData = module.ExtData;
    }, function (module) {
      timestampExtension = module.timestampExtension;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "7e2bfnyLmhLS4HbFflZrXvy", "ExtensionCodec", undefined);

      // immutable interface to ExtensionCodec

      var ExtensionCodec = exports('ExtensionCodec', /*#__PURE__*/function () {
        function ExtensionCodec() {
          // ensures ExtensionCodecType<X> matches ExtensionCodec<X>
          // this will make type errors a lot more clear
          // eslint-disable-next-line @typescript-eslint/naming-convention
          this.__brand = void 0;
          // built-in extensions
          this.builtInEncoders = [];
          this.builtInDecoders = [];
          // custom extensions
          this.encoders = [];
          this.decoders = [];
          this.register(timestampExtension);
        }
        var _proto = ExtensionCodec.prototype;
        _proto.register = function register(_ref) {
          var type = _ref.type,
            encode = _ref.encode,
            decode = _ref.decode;
          if (type >= 0) {
            // custom extensions
            this.encoders[type] = encode;
            this.decoders[type] = decode;
          } else {
            // built-in extensions
            var index = -1 - type;
            this.builtInEncoders[index] = encode;
            this.builtInDecoders[index] = decode;
          }
        };
        _proto.tryToEncode = function tryToEncode(object, context) {
          // built-in extensions
          for (var i = 0; i < this.builtInEncoders.length; i++) {
            var encodeExt = this.builtInEncoders[i];
            if (encodeExt != null) {
              var _data = encodeExt(object, context);
              if (_data != null) {
                var type = -1 - i;
                return new ExtData(type, _data);
              }
            }
          }

          // custom extensions
          for (var _i = 0; _i < this.encoders.length; _i++) {
            var _encodeExt = this.encoders[_i];
            if (_encodeExt != null) {
              var _data2 = _encodeExt(object, context);
              if (_data2 != null) {
                var _type = _i;
                return new ExtData(_type, _data2);
              }
            }
          }
          if (object instanceof ExtData) {
            // to keep ExtData as is
            return object;
          }
          return null;
        };
        _proto.decode = function decode(data, type, context) {
          var decodeExt = type < 0 ? this.builtInDecoders[-1 - type] : this.decoders[type];
          if (decodeExt) {
            return decodeExt(data, type, context);
          } else {
            // decode() does not fail, returns ExtData instead.
            return new ExtData(type, data);
          }
        };
        return ExtensionCodec;
      }());
      _class = ExtensionCodec;
      ExtensionCodec.defaultCodec = new _class();
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FetchHttpClient.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Errors.ts', './HttpClient.ts', './ILogger.ts', './Utils2.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, _extends, cclegacy, HttpError, AbortError, TimeoutError, HttpClient, HttpResponse, LogLevel, Platform, getGlobalThis, isArrayBuffer;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      HttpError = module.HttpError;
      AbortError = module.AbortError;
      TimeoutError = module.TimeoutError;
    }, function (module) {
      HttpClient = module.HttpClient;
      HttpResponse = module.HttpResponse;
    }, function (module) {
      LogLevel = module.LogLevel;
    }, function (module) {
      Platform = module.Platform;
      getGlobalThis = module.getGlobalThis;
      isArrayBuffer = module.isArrayBuffer;
    }],
    execute: function () {
      cclegacy._RF.push({}, "9b1f4cLCR5FRKbGKnF3vCsd", "FetchHttpClient", undefined); // Licensed to the .NET Foundation under one or more agreements.
      var FetchHttpClient = exports('FetchHttpClient', /*#__PURE__*/function (_HttpClient) {
        _inheritsLoose(FetchHttpClient, _HttpClient);
        function FetchHttpClient(logger) {
          var _this;
          _this = _HttpClient.call(this) || this;
          _this._abortControllerType = void 0;
          _this._fetchType = void 0;
          _this._jar = void 0;
          _this._logger = void 0;
          _this._logger = logger;

          // Node added a fetch implementation to the global scope starting in v18.
          // We need to add a cookie jar in node to be able to share cookies with WebSocket
          if (typeof fetch === "undefined" || Platform.isNode) {
            // In order to ignore the dynamic require in webpack builds we need to do this magic
            // @ts-ignore: TS doesn't know about these names
            var requireFunc = typeof __webpack_require__ === "function" ? __non_webpack_require__ : require;

            // Cookies aren't automatically handled in Node so we need to add a CookieJar to preserve cookies across requests
            _this._jar = new (requireFunc("tough-cookie").CookieJar)();
            if (typeof fetch === "undefined") {
              _this._fetchType = requireFunc("node-fetch");
            } else {
              // Use fetch from Node if available
              _this._fetchType = fetch;
            }

            // node-fetch doesn't have a nice API for getting and setting cookies
            // fetch-cookie will wrap a fetch implementation with a default CookieJar or a provided one
            _this._fetchType = requireFunc("fetch-cookie")(_this._fetchType, _this._jar);
          } else {
            _this._fetchType = fetch.bind(getGlobalThis());
          }
          if (typeof AbortController === "undefined") {
            // In order to ignore the dynamic require in webpack builds we need to do this magic
            // @ts-ignore: TS doesn't know about these names
            var _requireFunc = typeof __webpack_require__ === "function" ? __non_webpack_require__ : require;

            // Node needs EventListener methods on AbortController which our custom polyfill doesn't provide
            _this._abortControllerType = _requireFunc("abort-controller");
          } else {
            _this._abortControllerType = AbortController;
          }
          return _this;
        }

        /** @inheritDoc */
        var _proto = FetchHttpClient.prototype;
        _proto.send = /*#__PURE__*/
        function () {
          var _send = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
            var _this2 = this;
            var abortController, error, timeoutId, msTimeout, response, errorMessage, content, payload;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!(request.abortSignal && request.abortSignal.aborted)) {
                    _context.next = 2;
                    break;
                  }
                  throw new AbortError();
                case 2:
                  if (request.method) {
                    _context.next = 4;
                    break;
                  }
                  throw new Error("No method defined.");
                case 4:
                  if (request.url) {
                    _context.next = 6;
                    break;
                  }
                  throw new Error("No url defined.");
                case 6:
                  abortController = new this._abortControllerType();
                  // Hook our abortSignal into the abort controller
                  if (request.abortSignal) {
                    request.abortSignal.onabort = function () {
                      abortController.abort();
                      error = new AbortError();
                    };
                  }

                  // If a timeout has been passed in, setup a timeout to call abort
                  // Type needs to be any to fit window.setTimeout and NodeJS.setTimeout
                  timeoutId = null;
                  if (request.timeout) {
                    msTimeout = request.timeout;
                    timeoutId = setTimeout(function () {
                      abortController.abort();
                      _this2._logger.log(LogLevel.Warning, "Timeout from HTTP request.");
                      error = new TimeoutError();
                    }, msTimeout);
                  }
                  if (request.content === "") {
                    request.content = undefined;
                  }
                  if (request.content) {
                    // Explicitly setting the Content-Type header for React Native on Android platform.
                    request.headers = request.headers || {};
                    if (isArrayBuffer(request.content)) {
                      request.headers["Content-Type"] = "application/octet-stream";
                    } else {
                      request.headers["Content-Type"] = "text/plain;charset=UTF-8";
                    }
                  }
                  _context.prev = 12;
                  _context.next = 15;
                  return this._fetchType(request.url, {
                    body: request.content,
                    cache: "no-cache",
                    credentials: request.withCredentials === true ? "include" : "same-origin",
                    headers: _extends({
                      "X-Requested-With": "XMLHttpRequest"
                    }, request.headers),
                    method: request.method,
                    mode: "cors",
                    redirect: "follow",
                    signal: abortController.signal
                  });
                case 15:
                  response = _context.sent;
                  _context.next = 24;
                  break;
                case 18:
                  _context.prev = 18;
                  _context.t0 = _context["catch"](12);
                  if (!error) {
                    _context.next = 22;
                    break;
                  }
                  throw error;
                case 22:
                  this._logger.log(LogLevel.Warning, "Error from HTTP request. " + _context.t0 + ".");
                  throw _context.t0;
                case 24:
                  _context.prev = 24;
                  if (timeoutId) {
                    clearTimeout(timeoutId);
                  }
                  if (request.abortSignal) {
                    request.abortSignal.onabort = null;
                  }
                  return _context.finish(24);
                case 28:
                  if (response.ok) {
                    _context.next = 33;
                    break;
                  }
                  _context.next = 31;
                  return deserializeContent(response, "text");
                case 31:
                  errorMessage = _context.sent;
                  throw new HttpError(errorMessage || response.statusText, response.status);
                case 33:
                  content = deserializeContent(response, request.responseType);
                  _context.next = 36;
                  return content;
                case 36:
                  payload = _context.sent;
                  return _context.abrupt("return", new HttpResponse(response.status, response.statusText, payload));
                case 38:
                case "end":
                  return _context.stop();
              }
            }, _callee, this, [[12, 18, 24, 28]]);
          }));
          function send(_x) {
            return _send.apply(this, arguments);
          }
          return send;
        }();
        _proto.getCookieString = function getCookieString(url) {
          var cookies = "";
          if (Platform.isNode && this._jar) {
            // @ts-ignore: unused variable
            this._jar.getCookies(url, function (e, c) {
              return cookies = c.join("; ");
            });
          }
          return cookies;
        };
        return FetchHttpClient;
      }(HttpClient));
      function deserializeContent(response, responseType) {
        var content;
        switch (responseType) {
          case "arraybuffer":
            content = response.arrayBuffer();
            break;
          case "text":
            content = response.text();
            break;
          case "blob":
          case "document":
          case "json":
            throw new Error(responseType + " is not supported.");
          default:
            content = response.text();
            break;
        }
        return content;
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameConfig.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "2d348tB0FNIH41gdHQKTu1V", "GameConfig", undefined);
      /**
       * 連線與登入相關設定（由 SignalRMng 讀取，不修改 SignalR/ 目錄）。
       */
      var GameConfig = exports('GameConfig', {
        deskId: '',
        gameTypeCode: 'BBA',
        authUrl: 'https://fe-dealer.aplusmanagetest.com/api/Auth/BbaEGameDeskLogin',
        messageRoomUrl: 'https://fe-dealer.aplusmanagetest.com/MessageRoom',
        tokenRetrySeconds: 60,
        /** 模擬封包預設值（對齊後端範例） */
        simDefaultShoe: 3,
        simDefaultRound: 15,
        simDealerName: 'BBA荷官01'
      });
      var ServerError = exports('ServerError', /*#__PURE__*/function () {
        function ServerError() {}
        var _proto = ServerError.prototype;
        _proto.conver = function conver(error) {
          switch (error) {
            case 4010:
              return "重複連線";
            default:
              return "未知錯誤";
          }
        };
        return ServerError;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameMng.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CommonValue.ts', './BundleMng.ts', './EventMsg.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Button, Sprite, Node, Label, tween, Component, Vec3, v3, SpriteFrame, GameState, BundleMng, EventMsg;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      Sprite = module.Sprite;
      Node = module.Node;
      Label = module.Label;
      tween = module.tween;
      Component = module.Component;
      Vec3 = module.Vec3;
      v3 = module.v3;
      SpriteFrame = module.SpriteFrame;
    }, function (module) {
      GameState = module.GameState;
    }, function (module) {
      BundleMng = module.default;
    }, function (module) {
      EventMsg = module.EventMsg;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "01cf84lRnJGl5aWtSh4+hHi", "GameMng", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GameMng = exports('GameMng', (_dec = ccclass('GameMng'), _dec2 = property(Button), _dec3 = property(Sprite), _dec4 = property(Sprite), _dec5 = property({
        type: Node,
        formerlySerializedAs: 'panelLaoding'
      }), _dec6 = property(Node), _dec7 = property({
        tooltip: '載入動畫：單段放大／縮放時間（秒）'
      }), _dec8 = property(Label), _dec9 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameMng, _Component);
        function GameMng() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "btnStart", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "background", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "table", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "panelLoading", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "loadingContent", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "loadingAniSegmentDuration", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "currentAni", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "currentStatus", _descriptor8, _assertThisInitialized(_this));
          _this.dataBackground = '';
          _this.dataTable = '';
          return _this;
        }
        var _proto = GameMng.prototype;
        _proto.onLoad = function onLoad() {
          EventMsg.on(GameState.Init, this.init, this);
          EventMsg.on(GameState.PlayPoker, this.updateVideoLabel, this);
          EventMsg.on(GameState.GameCurrentStatus, this.updateStatusLabel, this);
          EventMsg.on(GameState.LoadingOpen, this.loadingAni, this);
          EventMsg.on(GameState.LoadingClose, this.stopLoadingAni, this);
          EventMsg.once(GameState.ReqResult, this.stopLoadingAni, this);
          this.loadingAni();
        };
        _proto.init = /*#__PURE__*/function () {
          var _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(login) {
            var defaultBackGround, defaultTable, backgroundPath, defaultBackgroundPath, tablePath, defaultTablePath, background, table, _yield$Promise$all, _background, _table;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!(!this.background || !this.table)) {
                    _context.next = 3;
                    break;
                  }
                  console.error('[GameMng] background 或 table 未綁定 Sprite，請先在 Inspector 指定。');
                  return _context.abrupt("return");
                case 3:
                  defaultBackGround = 'G8_XTA';
                  defaultTable = 'TA1_1';
                  backgroundPath = (login.Data.bbaVideoBackground || defaultBackGround) + "/spriteFrame";
                  defaultBackgroundPath = defaultBackGround + "/spriteFrame";
                  tablePath = (login.Data.bbaTableStyle || defaultTable) + "/spriteFrame";
                  defaultTablePath = defaultTable + "/spriteFrame";
                  background = BundleMng.load('BackGround', backgroundPath, SpriteFrame, defaultBackgroundPath);
                  table = BundleMng.load('Table', tablePath, SpriteFrame, defaultTablePath);
                  _context.next = 13;
                  return Promise.all([background, table]);
                case 13:
                  _yield$Promise$all = _context.sent;
                  _background = _yield$Promise$all[0];
                  _table = _yield$Promise$all[1];
                  this.background.spriteFrame = _background;
                  this.table.spriteFrame = _table;
                  this.dataBackground = backgroundPath;
                  this.dataTable = tablePath;
                  EventMsg.emit(GameState.ReqInit);
                case 21:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function init(_x) {
            return _init.apply(this, arguments);
          }
          return init;
        }();
        _proto.updateVideoLabel = function updateVideoLabel(playName) {
          this.currentAni.string = "\u7576\u524D\u5F71\u7247:\n" + playName;
        };
        _proto.updateStatusLabel = function updateStatusLabel(status) {
          this.currentStatus.string = "\u7576\u524D\u72C0\u614B:\n" + status;
        };
        _proto.loadingAni = function loadingAni(maxIndex) {
          var _this2 = this;
          if (maxIndex === void 0) {
            maxIndex = this.loadingContent.children.length - 1;
          }
          this.panelLoading.active = true;
          var _loop = function _loop(i) {
            var delay = i * (_this2.loadingAniSegmentDuration * 0.35);
            tween(_this2.loadingContent.children[i]).set({
              scale: Vec3.ZERO
            }).delay(delay).to(_this2.loadingAniSegmentDuration, {
              scale: v3(1, 1, 1)
            }).to(_this2.loadingAniSegmentDuration, {
              scale: Vec3.ZERO
            }, {
              onComplete: function onComplete() {
                if (i == maxIndex) _this2.loadingAni(maxIndex);
              }
            }).start();
          };
          for (var i = 0; i < this.loadingContent.children.length; i++) {
            _loop(i);
          }
        };
        _proto.stopLoadingAni = function stopLoadingAni() {
          if (!this.panelLoading.active) return;
          for (var i = 0; i < this.loadingContent.children.length; i++) {
            tween(this.loadingContent.children[i]).stop();
          }
          this.panelLoading.active = false;
        };
        return GameMng;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnStart", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "background", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "table", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "panelLoading", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "loadingContent", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "loadingAniSegmentDuration", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.35;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "currentAni", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "currentStatus", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameViewModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PlayRoundUseCase.ts', './CommonValue.ts'], function (exports) {
  var _extends, _createForOfIteratorHelperLoose, _createClass, cclegacy, playBaccaratRound, CommonValue, Winner;
  return {
    setters: [function (module) {
      _extends = module.extends;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      playBaccaratRound = module.playBaccaratRound;
    }, function (module) {
      CommonValue = module.default;
      Winner = module.Winner;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e2546Ta8sJMiaNipQsoqeYs", "GameViewModel", undefined);
      var GameViewModel = exports('GameViewModel', /*#__PURE__*/function () {
        function GameViewModel() {
          this._state = {
            round: null,
            isReadyToStart: false
          };
          this._listeners = new Set();
        }
        var _proto = GameViewModel.prototype;
        _proto.subscribe = function subscribe(listener) {
          var _this = this;
          this._listeners.add(listener);
          listener(this._state);
          return function () {
            return _this._listeners["delete"](listener);
          };
        };
        _proto.setReadyToStart = function setReadyToStart(ready) {
          if (this._state.isReadyToStart === ready) return;
          this._state = _extends({}, this._state, {
            isReadyToStart: ready
          });
          this._emit();
        }

        /**
         * 產生一局結果並同步到 CommonValue（先維持相容性，讓既有系統仍能讀到）。 
         */;
        _proto.randomizeRound = function randomizeRound() {
          var round = playBaccaratRound();
          this._state = _extends({}, this._state, {
            round: round
          });
          this._syncToCommonValue(round);
          this._emit();
          return round;
        };
        _proto._emit = function _emit() {
          for (var _iterator = _createForOfIteratorHelperLoose(this._listeners), _step; !(_step = _iterator()).done;) {
            var l = _step.value;
            l(this._state);
          }
        };
        _proto._syncToCommonValue = function _syncToCommonValue(round) {
          CommonValue.dealerPoker = [].concat(round.dealerPoker);
          CommonValue.bankerPoker = [].concat(round.bankerPoker);
          CommonValue.winner = round.winner === 'Tie' ? Winner.Tie : round.winner === 'Banker' ? Winner.Banker : Winner.Dealer;
        };
        _createClass(GameViewModel, [{
          key: "state",
          get: function get() {
            return this._state;
          }
        }]);
        return GameViewModel;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Hand.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports({
        cardPoint: cardPoint,
        handPoint: handPoint
      });
      cclegacy._RF.push({}, "d2753ccZHdBsIFdZagx1WqL", "Hand", undefined);
      function cardPoint(card) {
        var rank = (card - 1) % 13 + 1; // 1..13
        if (rank === 1) return 1; // A
        if (rank >= 2 && rank <= 9) return rank;
        return 0; // 10/J/Q/K
      }

      function handPoint(hand) {
        var sum = 0;
        for (var _iterator = _createForOfIteratorHelperLoose(hand), _step; !(_step = _iterator()).done;) {
          var c = _step.value;
          sum += cardPoint(c);
        }
        return sum % 10;
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HandshakeProtocol.ts", ['cc', './TextMessageFormat.ts', './Utils2.ts'], function (exports) {
  var cclegacy, TextMessageFormat, isArrayBuffer;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      TextMessageFormat = module.TextMessageFormat;
    }, function (module) {
      isArrayBuffer = module.isArrayBuffer;
    }],
    execute: function () {
      cclegacy._RF.push({}, "23e2c0iq9VDL5iK7xM7lh3K", "HandshakeProtocol", undefined);

      /** @private */

      /** @private */

      /** @private */
      var HandshakeProtocol = exports('HandshakeProtocol', /*#__PURE__*/function () {
        function HandshakeProtocol() {}
        var _proto = HandshakeProtocol.prototype;
        // Handshake request is always JSON
        _proto.writeHandshakeRequest = function writeHandshakeRequest(handshakeRequest) {
          return TextMessageFormat.write(JSON.stringify(handshakeRequest));
        };
        _proto.parseHandshakeResponse = function parseHandshakeResponse(data) {
          var messageData;
          var remainingData;
          if (isArrayBuffer(data)) {
            // Format is binary but still need to read JSON text from handshake response
            var binaryData = new Uint8Array(data);
            var separatorIndex = binaryData.indexOf(TextMessageFormat.RecordSeparatorCode);
            if (separatorIndex === -1) {
              throw new Error("Message is incomplete.");
            }

            // content before separator is handshake response
            // optional content after is additional messages
            var responseLength = separatorIndex + 1;
            messageData = String.fromCharCode.apply(null, Array.prototype.slice.call(binaryData.slice(0, responseLength)));
            remainingData = binaryData.byteLength > responseLength ? binaryData.slice(responseLength).buffer : null;
          } else {
            var textData = data;
            var _separatorIndex = textData.indexOf(TextMessageFormat.RecordSeparator);
            if (_separatorIndex === -1) {
              throw new Error("Message is incomplete.");
            }

            // content before separator is handshake response
            // optional content after is additional messages
            var _responseLength = _separatorIndex + 1;
            messageData = textData.substring(0, _responseLength);
            remainingData = textData.length > _responseLength ? textData.substring(_responseLength) : null;
          }

          // At this point we should have just the single handshake message
          var messages = TextMessageFormat.parse(messageData);
          var response = JSON.parse(messages[0]);
          if (response.type) {
            throw new Error("Expected a handshake response from the server.");
          }
          var responseMessage = response;

          // multiple messages could have arrived with handshake
          // return additional data to be parsed as usual, or null if all parsed
          return [remainingData, responseMessage];
        };
        return HandshakeProtocol;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HeaderNames.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "98884XagSBLE7ZHAN9fHCQY", "HeaderNames", undefined);
      // Licensed to the .NET Foundation under one or more agreements.
      // The .NET Foundation licenses this file to you under the MIT license.

      var HeaderNames = exports('HeaderNames', function HeaderNames() {});
      HeaderNames.Authorization = "Authorization";
      HeaderNames.Cookie = "Cookie";
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HttpClient.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _extends, cclegacy;
  return {
    setters: [function (module) {
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5fa80eGdu9KjZTiiSC73CyQ", "HttpClient", undefined); // Licensed to the .NET Foundation under one or more agreements.
      // The .NET Foundation licenses this file to you under the MIT license.
      /** Represents an HTTP request. */
      /** Represents an HTTP response. */
      var HttpResponse = exports('HttpResponse', function HttpResponse(statusCode, statusText, content) {
        this.statusCode = statusCode;
        this.statusText = statusText;
        this.content = content;
      });

      /** Abstraction over an HTTP client.
       *
       * This class provides an abstraction over an HTTP client so that a different implementation can be provided on different platforms.
       */
      var HttpClient = exports('HttpClient', /*#__PURE__*/function () {
        function HttpClient() {}
        var _proto = HttpClient.prototype;
        _proto.get = function get(url, options) {
          return this.send(_extends({}, options, {
            method: "GET",
            url: url
          }));
        }

        /** Issues an HTTP POST request to the specified URL, returning a Promise that resolves with an {@link @microsoft/signalr.HttpResponse} representing the result.
         *
         * @param {string} url The URL for the request.
         * @returns {Promise<HttpResponse>} A Promise that resolves with an {@link @microsoft/signalr.HttpResponse} describing the response, or rejects with an Error indicating a failure.
         */;
        _proto.post = function post(url, options) {
          return this.send(_extends({}, options, {
            method: "POST",
            url: url
          }));
        }

        /** Issues an HTTP DELETE request to the specified URL, returning a Promise that resolves with an {@link @microsoft/signalr.HttpResponse} representing the result.
         *
         * @param {string} url The URL for the request.
         * @returns {Promise<HttpResponse>} A Promise that resolves with an {@link @microsoft/signalr.HttpResponse} describing the response, or rejects with an Error indicating a failure.
         */;
        _proto["delete"] = function _delete(url, options) {
          return this.send(_extends({}, options, {
            method: "DELETE",
            url: url
          }));
        }

        /** Issues an HTTP request to the specified URL, returning a {@link Promise} that resolves with an {@link @microsoft/signalr.HttpResponse} representing the result.
         *
         * @param {HttpRequest} request An {@link @microsoft/signalr.HttpRequest} describing the request to send.
         * @returns {Promise<HttpResponse>} A Promise that resolves with an HttpResponse describing the response, or rejects with an Error indicating a failure.
         */;
        /** Gets all cookies that apply to the specified URL.
         *
         * @param url The URL that the cookies are valid for.
         * @returns {string} A string containing all the key-value cookie pairs for the specified URL.
         */
        // @ts-ignore
        _proto.getCookieString = function getCookieString(url) {
          return "";
        };
        return HttpClient;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HttpConnection.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AccessTokenHttpClient.ts', './DefaultHttpClient.ts', './Errors.ts', './ILogger.ts', './ITransport.ts', './LongPollingTransport.ts', './ServerSentEventsTransport.ts', './Utils2.ts', './WebSocketTransport.ts'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, _extends, cclegacy, AccessTokenHttpClient, DefaultHttpClient, UnsupportedTransportError, DisabledTransportError, AbortError, HttpError, FailedToNegotiateWithServerError, FailedToStartTransportError, AggregateErrors, LogLevel, HttpTransportType, TransferFormat, LongPollingTransport, ServerSentEventsTransport, Platform, Arg, createLogger, getUserAgentHeader, WebSocketTransport;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      AccessTokenHttpClient = module.AccessTokenHttpClient;
    }, function (module) {
      DefaultHttpClient = module.DefaultHttpClient;
    }, function (module) {
      UnsupportedTransportError = module.UnsupportedTransportError;
      DisabledTransportError = module.DisabledTransportError;
      AbortError = module.AbortError;
      HttpError = module.HttpError;
      FailedToNegotiateWithServerError = module.FailedToNegotiateWithServerError;
      FailedToStartTransportError = module.FailedToStartTransportError;
      AggregateErrors = module.AggregateErrors;
    }, function (module) {
      LogLevel = module.LogLevel;
    }, function (module) {
      HttpTransportType = module.HttpTransportType;
      TransferFormat = module.TransferFormat;
    }, function (module) {
      LongPollingTransport = module.LongPollingTransport;
    }, function (module) {
      ServerSentEventsTransport = module.ServerSentEventsTransport;
    }, function (module) {
      Platform = module.Platform;
      Arg = module.Arg;
      createLogger = module.createLogger;
      getUserAgentHeader = module.getUserAgentHeader;
    }, function (module) {
      WebSocketTransport = module.WebSocketTransport;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f9105q4NudDGIhuP4NIQOLW", "HttpConnection", undefined);

      /** @private */
      var ConnectionState = {
        Connecting: "Connecting",
        Connected: "Connected",
        Disconnected: "Disconnected",
        Disconnecting: "Disconnecting"
      };
      /** @private */
      /** @private */
      var MAX_REDIRECTS = 100;

      /** @private */
      var HttpConnection = exports('HttpConnection', /*#__PURE__*/function () {
        function HttpConnection(url, options) {
          if (options === void 0) {
            options = {};
          }
          this._connectionState = void 0;
          // connectionStarted is tracked independently from connectionState, so we can check if the
          // connection ever did successfully transition from connecting to connected before disconnecting.
          this._connectionStarted = void 0;
          this._httpClient = void 0;
          this._logger = void 0;
          this._options = void 0;
          // Needs to not start with _ to be available for tests
          // eslint-disable-next-line @typescript-eslint/naming-convention
          this.transport = void 0;
          this._startInternalPromise = void 0;
          this._stopPromise = void 0;
          this._stopPromiseResolver = function () {};
          this._stopError = void 0;
          this._accessTokenFactory = void 0;
          this._sendQueue = void 0;
          this.features = {};
          this.baseUrl = void 0;
          this.connectionId = void 0;
          this.onreceive = void 0;
          this.onclose = void 0;
          this._negotiateVersion = 1;
          Arg.isRequired(url, "url");
          this._logger = createLogger(options.logger);
          this.baseUrl = this._resolveUrl(url);
          options = options || {};
          options.logMessageContent = options.logMessageContent === undefined ? false : options.logMessageContent;
          if (typeof options.withCredentials === "boolean" || options.withCredentials === undefined) {
            options.withCredentials = options.withCredentials === undefined ? true : options.withCredentials;
          } else {
            throw new Error("withCredentials option was not a 'boolean' or 'undefined' value");
          }
          options.timeout = options.timeout === undefined ? 100 * 1000 : options.timeout;
          var webSocketModule = null;
          var eventSourceModule = null;
          if (Platform.isNode && typeof require !== "undefined") {
            // In order to ignore the dynamic require in webpack builds we need to do this magic
            // @ts-ignore: TS doesn't know about these names
            var requireFunc = typeof __webpack_require__ === "function" ? __non_webpack_require__ : require;
            webSocketModule = requireFunc("ws");
            eventSourceModule = requireFunc("eventsource");
          }
          if (!Platform.isNode && typeof WebSocket !== "undefined" && !options.WebSocket) {
            options.WebSocket = WebSocket;
          } else if (Platform.isNode && !options.WebSocket) {
            if (webSocketModule) {
              options.WebSocket = webSocketModule;
            }
          }
          if (!Platform.isNode && typeof EventSource !== "undefined" && !options.EventSource) {
            options.EventSource = EventSource;
          } else if (Platform.isNode && !options.EventSource) {
            if (typeof eventSourceModule !== "undefined") {
              options.EventSource = eventSourceModule;
            }
          }
          this._httpClient = new AccessTokenHttpClient(options.httpClient || new DefaultHttpClient(this._logger), options.accessTokenFactory);
          this._connectionState = ConnectionState.Disconnected;
          this._connectionStarted = false;
          this._options = options;
          this.onreceive = null;
          this.onclose = null;
        }
        var _proto = HttpConnection.prototype;
        _proto.start = /*#__PURE__*/function () {
          var _start = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(transferFormat) {
            var message, _message;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  transferFormat = transferFormat || TransferFormat.Binary;
                  Arg.isIn(transferFormat, TransferFormat, "transferFormat");
                  this._logger.log(LogLevel.Debug, "Starting connection with transfer format '" + TransferFormat[transferFormat] + "'.");
                  if (!(this._connectionState !== ConnectionState.Disconnected)) {
                    _context.next = 5;
                    break;
                  }
                  return _context.abrupt("return", Promise.reject(new Error("Cannot start an HttpConnection that is not in the 'Disconnected' state.")));
                case 5:
                  this._connectionState = ConnectionState.Connecting;
                  this._startInternalPromise = this._startInternal(transferFormat);
                  _context.next = 9;
                  return this._startInternalPromise;
                case 9:
                  if (!(this._connectionState === ConnectionState.Disconnecting)) {
                    _context.next = 17;
                    break;
                  }
                  // stop() was called and transitioned the client into the Disconnecting state.
                  message = "Failed to start the HttpConnection before stop() was called.";
                  this._logger.log(LogLevel.Error, message);

                  // We cannot await stopPromise inside startInternal since stopInternal awaits the startInternalPromise.
                  _context.next = 14;
                  return this._stopPromise;
                case 14:
                  return _context.abrupt("return", Promise.reject(new AbortError(message)));
                case 17:
                  if (!(this._connectionState !== ConnectionState.Connected)) {
                    _context.next = 21;
                    break;
                  }
                  // stop() was called and transitioned the client into the Disconnecting state.
                  _message = "HttpConnection.startInternal completed gracefully but didn't enter the connection into the connected state!";
                  this._logger.log(LogLevel.Error, _message);
                  return _context.abrupt("return", Promise.reject(new AbortError(_message)));
                case 21:
                  this._connectionStarted = true;
                case 22:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function start(_x) {
            return _start.apply(this, arguments);
          }
          return start;
        }();
        _proto.send = function send(data) {
          if (this._connectionState !== ConnectionState.Connected) {
            return Promise.reject(new Error("Cannot send data if the connection is not in the 'Connected' State."));
          }
          if (!this._sendQueue) {
            this._sendQueue = new TransportSendQueue(this.transport);
          }

          // Transport will not be null if state is connected
          return this._sendQueue.send(data);
        };
        _proto.stop = /*#__PURE__*/function () {
          var _stop = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(error) {
            var _this = this;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(this._connectionState === ConnectionState.Disconnected)) {
                    _context2.next = 3;
                    break;
                  }
                  this._logger.log(LogLevel.Debug, "Call to HttpConnection.stop(" + error + ") ignored because the connection is already in the disconnected state.");
                  return _context2.abrupt("return", Promise.resolve());
                case 3:
                  if (!(this._connectionState === ConnectionState.Disconnecting)) {
                    _context2.next = 6;
                    break;
                  }
                  this._logger.log(LogLevel.Debug, "Call to HttpConnection.stop(" + error + ") ignored because the connection is already in the disconnecting state.");
                  return _context2.abrupt("return", this._stopPromise);
                case 6:
                  this._connectionState = ConnectionState.Disconnecting;
                  this._stopPromise = new Promise(function (resolve) {
                    // Don't complete stop() until stopConnection() completes.
                    _this._stopPromiseResolver = resolve;
                  });

                  // stopInternal should never throw so just observe it.
                  _context2.next = 10;
                  return this._stopInternal(error);
                case 10:
                  _context2.next = 12;
                  return this._stopPromise;
                case 12:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function stop(_x2) {
            return _stop.apply(this, arguments);
          }
          return stop;
        }();
        _proto._stopInternal = /*#__PURE__*/function () {
          var _stopInternal2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(error) {
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  // Set error as soon as possible otherwise there is a race between
                  // the transport closing and providing an error and the error from a close message
                  // We would prefer the close message error.
                  this._stopError = error;
                  _context3.prev = 1;
                  _context3.next = 4;
                  return this._startInternalPromise;
                case 4:
                  _context3.next = 8;
                  break;
                case 6:
                  _context3.prev = 6;
                  _context3.t0 = _context3["catch"](1);
                case 8:
                  if (!this.transport) {
                    _context3.next = 21;
                    break;
                  }
                  _context3.prev = 9;
                  _context3.next = 12;
                  return this.transport.stop();
                case 12:
                  _context3.next = 18;
                  break;
                case 14:
                  _context3.prev = 14;
                  _context3.t1 = _context3["catch"](9);
                  this._logger.log(LogLevel.Error, "HttpConnection.transport.stop() threw error '" + _context3.t1 + "'.");
                  this._stopConnection();
                case 18:
                  this.transport = undefined;
                  _context3.next = 22;
                  break;
                case 21:
                  this._logger.log(LogLevel.Debug, "HttpConnection.transport is undefined in HttpConnection.stop() because start() failed.");
                case 22:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this, [[1, 6], [9, 14]]);
          }));
          function _stopInternal(_x3) {
            return _stopInternal2.apply(this, arguments);
          }
          return _stopInternal;
        }();
        _proto._startInternal = /*#__PURE__*/function () {
          var _startInternal2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(transferFormat) {
            var _this2 = this;
            var url, negotiateResponse, redirects, _loop;
            return _regeneratorRuntime().wrap(function _callee4$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  // Store the original base url and the access token factory since they may change
                  // as part of negotiating
                  url = this.baseUrl;
                  this._accessTokenFactory = this._options.accessTokenFactory;
                  this._httpClient._accessTokenFactory = this._accessTokenFactory;
                  _context5.prev = 3;
                  if (!this._options.skipNegotiation) {
                    _context5.next = 14;
                    break;
                  }
                  if (!(this._options.transport === HttpTransportType.WebSockets)) {
                    _context5.next = 11;
                    break;
                  }
                  // No need to add a connection ID in this case
                  this.transport = this._constructTransport(HttpTransportType.WebSockets);
                  // We should just call connect directly in this case.
                  // No fallback or negotiate in this case.
                  _context5.next = 9;
                  return this._startTransport(url, transferFormat);
                case 9:
                  _context5.next = 12;
                  break;
                case 11:
                  throw new Error("Negotiation can only be skipped when using the WebSocket transport directly.");
                case 12:
                  _context5.next = 23;
                  break;
                case 14:
                  negotiateResponse = null;
                  redirects = 0;
                  _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
                    var accessToken;
                    return _regeneratorRuntime().wrap(function _loop$(_context4) {
                      while (1) switch (_context4.prev = _context4.next) {
                        case 0:
                          _context4.next = 2;
                          return _this2._getNegotiationResponse(url);
                        case 2:
                          negotiateResponse = _context4.sent;
                          if (!(_this2._connectionState === ConnectionState.Disconnecting || _this2._connectionState === ConnectionState.Disconnected)) {
                            _context4.next = 5;
                            break;
                          }
                          throw new AbortError("The connection was stopped during negotiation.");
                        case 5:
                          if (!negotiateResponse.error) {
                            _context4.next = 7;
                            break;
                          }
                          throw new Error(negotiateResponse.error);
                        case 7:
                          if (!negotiateResponse.ProtocolVersion) {
                            _context4.next = 9;
                            break;
                          }
                          throw new Error("Detected a connection attempt to an ASP.NET SignalR Server. This client only supports connecting to an ASP.NET Core SignalR Server. See https://aka.ms/signalr-core-differences for details.");
                        case 9:
                          if (negotiateResponse.url) {
                            url = negotiateResponse.url;
                          }
                          if (negotiateResponse.accessToken) {
                            // Replace the current access token factory with one that uses
                            // the returned access token
                            accessToken = negotiateResponse.accessToken;
                            _this2._accessTokenFactory = function () {
                              return accessToken;
                            };
                            // set the factory to undefined so the AccessTokenHttpClient won't retry with the same token, since we know it won't change until a connection restart
                            _this2._httpClient._accessToken = accessToken;
                            _this2._httpClient._accessTokenFactory = undefined;
                          }
                          redirects++;
                        case 12:
                        case "end":
                          return _context4.stop();
                      }
                    }, _loop);
                  });
                case 17:
                  return _context5.delegateYield(_loop(), "t0", 18);
                case 18:
                  if (negotiateResponse.url && redirects < MAX_REDIRECTS) {
                    _context5.next = 17;
                    break;
                  }
                case 19:
                  if (!(redirects === MAX_REDIRECTS && negotiateResponse.url)) {
                    _context5.next = 21;
                    break;
                  }
                  throw new Error("Negotiate redirection limit exceeded.");
                case 21:
                  _context5.next = 23;
                  return this._createTransport(url, this._options.transport, negotiateResponse, transferFormat);
                case 23:
                  if (this.transport instanceof LongPollingTransport) {
                    this.features.inherentKeepAlive = true;
                  }
                  if (this._connectionState === ConnectionState.Connecting) {
                    // Ensure the connection transitions to the connected state prior to completing this.startInternalPromise.
                    // start() will handle the case when stop was called and startInternal exits still in the disconnecting state.
                    this._logger.log(LogLevel.Debug, "The HttpConnection connected successfully.");
                    this._connectionState = ConnectionState.Connected;
                  }

                  // stop() is waiting on us via this.startInternalPromise so keep this.transport around so it can clean up.
                  // This is the only case startInternal can exit in neither the connected nor disconnected state because stopConnection()
                  // will transition to the disconnected state. start() will wait for the transition using the stopPromise.
                  _context5.next = 34;
                  break;
                case 27:
                  _context5.prev = 27;
                  _context5.t1 = _context5["catch"](3);
                  this._logger.log(LogLevel.Error, "Failed to start the connection: " + _context5.t1);
                  this._connectionState = ConnectionState.Disconnected;
                  this.transport = undefined;

                  // if start fails, any active calls to stop assume that start will complete the stop promise
                  this._stopPromiseResolver();
                  return _context5.abrupt("return", Promise.reject(_context5.t1));
                case 34:
                case "end":
                  return _context5.stop();
              }
            }, _callee4, this, [[3, 27]]);
          }));
          function _startInternal(_x4) {
            return _startInternal2.apply(this, arguments);
          }
          return _startInternal;
        }();
        _proto._getNegotiationResponse = /*#__PURE__*/function () {
          var _getNegotiationResponse2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(url) {
            var headers, _getUserAgentHeader, name, value, negotiateUrl, response, negotiateResponse, errorMessage;
            return _regeneratorRuntime().wrap(function _callee5$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  headers = {};
                  _getUserAgentHeader = getUserAgentHeader(), name = _getUserAgentHeader[0], value = _getUserAgentHeader[1];
                  headers[name] = value;
                  negotiateUrl = this._resolveNegotiateUrl(url);
                  this._logger.log(LogLevel.Debug, "Sending negotiation request: " + negotiateUrl + ".");
                  _context6.prev = 5;
                  _context6.next = 8;
                  return this._httpClient.post(negotiateUrl, {
                    content: "",
                    headers: _extends({}, headers, this._options.headers),
                    timeout: this._options.timeout,
                    withCredentials: this._options.withCredentials
                  });
                case 8:
                  response = _context6.sent;
                  if (!(response.statusCode !== 200)) {
                    _context6.next = 11;
                    break;
                  }
                  return _context6.abrupt("return", Promise.reject(new Error("Unexpected status code returned from negotiate '" + response.statusCode + "'")));
                case 11:
                  negotiateResponse = JSON.parse(response.content);
                  if (!negotiateResponse.negotiateVersion || negotiateResponse.negotiateVersion < 1) {
                    // Negotiate version 0 doesn't use connectionToken
                    // So we set it equal to connectionId so all our logic can use connectionToken without being aware of the negotiate version
                    negotiateResponse.connectionToken = negotiateResponse.connectionId;
                  }
                  if (!(negotiateResponse.useStatefulReconnect && this._options._useStatefulReconnect !== true)) {
                    _context6.next = 15;
                    break;
                  }
                  return _context6.abrupt("return", Promise.reject(new FailedToNegotiateWithServerError("Client didn't negotiate Stateful Reconnect but the server did.")));
                case 15:
                  return _context6.abrupt("return", negotiateResponse);
                case 18:
                  _context6.prev = 18;
                  _context6.t0 = _context6["catch"](5);
                  errorMessage = "Failed to complete negotiation with the server: " + _context6.t0;
                  if (_context6.t0 instanceof HttpError) {
                    if (_context6.t0.statusCode === 404) {
                      errorMessage = errorMessage + " Either this is not a SignalR endpoint or there is a proxy blocking the connection.";
                    }
                  }
                  this._logger.log(LogLevel.Error, errorMessage);
                  return _context6.abrupt("return", Promise.reject(new FailedToNegotiateWithServerError(errorMessage)));
                case 24:
                case "end":
                  return _context6.stop();
              }
            }, _callee5, this, [[5, 18]]);
          }));
          function _getNegotiationResponse(_x5) {
            return _getNegotiationResponse2.apply(this, arguments);
          }
          return _getNegotiationResponse;
        }();
        _proto._createConnectUrl = function _createConnectUrl(url, connectionToken) {
          if (!connectionToken) {
            return url;
          }
          return url + (url.indexOf("?") === -1 ? "?" : "&") + ("id=" + connectionToken);
        };
        _proto._createTransport = /*#__PURE__*/function () {
          var _createTransport2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(url, requestedTransport, negotiateResponse, requestedTransferFormat) {
            var connectUrl, transportExceptions, transports, negotiate, _iterator, _step, _negotiate, endpoint, transportOrError, message;
            return _regeneratorRuntime().wrap(function _callee6$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  connectUrl = this._createConnectUrl(url, negotiateResponse.connectionToken);
                  if (!this._isITransport(requestedTransport)) {
                    _context7.next = 8;
                    break;
                  }
                  this._logger.log(LogLevel.Debug, "Connection was provided an instance of ITransport, using that directly.");
                  this.transport = requestedTransport;
                  _context7.next = 6;
                  return this._startTransport(connectUrl, requestedTransferFormat);
                case 6:
                  this.connectionId = negotiateResponse.connectionId;
                  return _context7.abrupt("return");
                case 8:
                  transportExceptions = [];
                  transports = negotiateResponse.availableTransports || [];
                  negotiate = negotiateResponse;
                  _iterator = _createForOfIteratorHelperLoose(transports);
                case 12:
                  if ((_step = _iterator()).done) {
                    _context7.next = 51;
                    break;
                  }
                  endpoint = _step.value;
                  transportOrError = this._resolveTransportOrError(endpoint, requestedTransport, requestedTransferFormat, ((_negotiate = negotiate) == null ? void 0 : _negotiate.useStatefulReconnect) === true);
                  if (!(transportOrError instanceof Error)) {
                    _context7.next = 20;
                    break;
                  }
                  // Store the error and continue, we don't want to cause a re-negotiate in these cases
                  transportExceptions.push(endpoint.transport + " failed:");
                  transportExceptions.push(transportOrError);
                  _context7.next = 49;
                  break;
                case 20:
                  if (!this._isITransport(transportOrError)) {
                    _context7.next = 49;
                    break;
                  }
                  this.transport = transportOrError;
                  if (negotiate) {
                    _context7.next = 33;
                    break;
                  }
                  _context7.prev = 23;
                  _context7.next = 26;
                  return this._getNegotiationResponse(url);
                case 26:
                  negotiate = _context7.sent;
                  _context7.next = 32;
                  break;
                case 29:
                  _context7.prev = 29;
                  _context7.t0 = _context7["catch"](23);
                  return _context7.abrupt("return", Promise.reject(_context7.t0));
                case 32:
                  connectUrl = this._createConnectUrl(url, negotiate.connectionToken);
                case 33:
                  _context7.prev = 33;
                  _context7.next = 36;
                  return this._startTransport(connectUrl, requestedTransferFormat);
                case 36:
                  this.connectionId = negotiate.connectionId;
                  return _context7.abrupt("return");
                case 40:
                  _context7.prev = 40;
                  _context7.t1 = _context7["catch"](33);
                  this._logger.log(LogLevel.Error, "Failed to start the transport '" + endpoint.transport + "': " + _context7.t1);
                  negotiate = undefined;
                  transportExceptions.push(new FailedToStartTransportError(endpoint.transport + " failed: " + _context7.t1, HttpTransportType[endpoint.transport]));
                  if (!(this._connectionState !== ConnectionState.Connecting)) {
                    _context7.next = 49;
                    break;
                  }
                  message = "Failed to select transport before stop() was called.";
                  this._logger.log(LogLevel.Debug, message);
                  return _context7.abrupt("return", Promise.reject(new AbortError(message)));
                case 49:
                  _context7.next = 12;
                  break;
                case 51:
                  if (!(transportExceptions.length > 0)) {
                    _context7.next = 53;
                    break;
                  }
                  return _context7.abrupt("return", Promise.reject(new AggregateErrors("Unable to connect to the server with any of the available transports. " + transportExceptions.join(" "), transportExceptions)));
                case 53:
                  return _context7.abrupt("return", Promise.reject(new Error("None of the transports supported by the client are supported by the server.")));
                case 54:
                case "end":
                  return _context7.stop();
              }
            }, _callee6, this, [[23, 29], [33, 40]]);
          }));
          function _createTransport(_x6, _x7, _x8, _x9) {
            return _createTransport2.apply(this, arguments);
          }
          return _createTransport;
        }();
        _proto._constructTransport = function _constructTransport(transport) {
          switch (transport) {
            case HttpTransportType.WebSockets:
              if (!this._options.WebSocket) {
                throw new Error("'WebSocket' is not supported in your environment.");
              }
              return new WebSocketTransport(this._httpClient, this._accessTokenFactory, this._logger, this._options.logMessageContent, this._options.WebSocket, this._options.headers || {});
            case HttpTransportType.ServerSentEvents:
              if (!this._options.EventSource) {
                throw new Error("'EventSource' is not supported in your environment.");
              }
              return new ServerSentEventsTransport(this._httpClient, this._httpClient._accessToken, this._logger, this._options);
            case HttpTransportType.LongPolling:
              return new LongPollingTransport(this._httpClient, this._logger, this._options);
            default:
              throw new Error("Unknown transport: " + transport + ".");
          }
        };
        _proto._startTransport = function _startTransport(url, transferFormat) {
          var _this3 = this;
          this.transport.onreceive = this.onreceive;
          if (this.features.reconnect) {
            this.transport.onclose = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(e) {
              var callStop;
              return _regeneratorRuntime().wrap(function _callee7$(_context8) {
                while (1) switch (_context8.prev = _context8.next) {
                  case 0:
                    callStop = false;
                    if (!_this3.features.reconnect) {
                      _context8.next = 15;
                      break;
                    }
                    _context8.prev = 2;
                    _this3.features.disconnected();
                    _context8.next = 6;
                    return _this3.transport.connect(url, transferFormat);
                  case 6:
                    _context8.next = 8;
                    return _this3.features.resend();
                  case 8:
                    _context8.next = 13;
                    break;
                  case 10:
                    _context8.prev = 10;
                    _context8.t0 = _context8["catch"](2);
                    callStop = true;
                  case 13:
                    _context8.next = 17;
                    break;
                  case 15:
                    _this3._stopConnection(e);
                    return _context8.abrupt("return");
                  case 17:
                    if (callStop) {
                      _this3._stopConnection(e);
                    }
                  case 18:
                  case "end":
                    return _context8.stop();
                }
              }, _callee7, null, [[2, 10]]);
            }));
          } else {
            this.transport.onclose = function (e) {
              return _this3._stopConnection(e);
            };
          }
          return this.transport.connect(url, transferFormat);
        };
        _proto._resolveTransportOrError = function _resolveTransportOrError(endpoint, requestedTransport, requestedTransferFormat, useStatefulReconnect) {
          var transport = HttpTransportType[endpoint.transport];
          if (transport === null || transport === undefined) {
            this._logger.log(LogLevel.Debug, "Skipping transport '" + endpoint.transport + "' because it is not supported by this client.");
            return new Error("Skipping transport '" + endpoint.transport + "' because it is not supported by this client.");
          } else {
            if (transportMatches(requestedTransport, transport)) {
              var transferFormats = endpoint.transferFormats.map(function (s) {
                return TransferFormat[s];
              });
              if (transferFormats.indexOf(requestedTransferFormat) >= 0) {
                if (transport === HttpTransportType.WebSockets && !this._options.WebSocket || transport === HttpTransportType.ServerSentEvents && !this._options.EventSource) {
                  this._logger.log(LogLevel.Debug, "Skipping transport '" + HttpTransportType[transport] + "' because it is not supported in your environment.'");
                  return new UnsupportedTransportError("'" + HttpTransportType[transport] + "' is not supported in your environment.", transport);
                } else {
                  this._logger.log(LogLevel.Debug, "Selecting transport '" + HttpTransportType[transport] + "'.");
                  try {
                    this.features.reconnect = transport === HttpTransportType.WebSockets ? useStatefulReconnect : undefined;
                    return this._constructTransport(transport);
                  } catch (ex) {
                    return ex;
                  }
                }
              } else {
                this._logger.log(LogLevel.Debug, "Skipping transport '" + HttpTransportType[transport] + "' because it does not support the requested transfer format '" + TransferFormat[requestedTransferFormat] + "'.");
                return new Error("'" + HttpTransportType[transport] + "' does not support " + TransferFormat[requestedTransferFormat] + ".");
              }
            } else {
              this._logger.log(LogLevel.Debug, "Skipping transport '" + HttpTransportType[transport] + "' because it was disabled by the client.");
              return new DisabledTransportError("'" + HttpTransportType[transport] + "' is disabled by the client.", transport);
            }
          }
        };
        _proto._isITransport = function _isITransport(transport) {
          return transport && typeof transport === "object" && "connect" in transport;
        };
        _proto._stopConnection = function _stopConnection(error) {
          var _this4 = this;
          this._logger.log(LogLevel.Debug, "HttpConnection.stopConnection(" + error + ") called while in state " + this._connectionState + ".");
          this.transport = undefined;

          // If we have a stopError, it takes precedence over the error from the transport
          error = this._stopError || error;
          this._stopError = undefined;
          if (this._connectionState === ConnectionState.Disconnected) {
            this._logger.log(LogLevel.Debug, "Call to HttpConnection.stopConnection(" + error + ") was ignored because the connection is already in the disconnected state.");
            return;
          }
          if (this._connectionState === ConnectionState.Connecting) {
            this._logger.log(LogLevel.Warning, "Call to HttpConnection.stopConnection(" + error + ") was ignored because the connection is still in the connecting state.");
            throw new Error("HttpConnection.stopConnection(" + error + ") was called while the connection is still in the connecting state.");
          }
          if (this._connectionState === ConnectionState.Disconnecting) {
            // A call to stop() induced this call to stopConnection and needs to be completed.
            // Any stop() awaiters will be scheduled to continue after the onclose callback fires.
            this._stopPromiseResolver();
          }
          if (error) {
            this._logger.log(LogLevel.Error, "Connection disconnected with error '" + error + "'.");
          } else {
            this._logger.log(LogLevel.Information, "Connection disconnected.");
          }
          if (this._sendQueue) {
            this._sendQueue.stop()["catch"](function (e) {
              _this4._logger.log(LogLevel.Error, "TransportSendQueue.stop() threw error '" + e + "'.");
            });
            this._sendQueue = undefined;
          }
          this.connectionId = undefined;
          this._connectionState = ConnectionState.Disconnected;
          if (this._connectionStarted) {
            this._connectionStarted = false;
            try {
              if (this.onclose) {
                this.onclose(error);
              }
            } catch (e) {
              this._logger.log(LogLevel.Error, "HttpConnection.onclose(" + error + ") threw error '" + e + "'.");
            }
          }
        };
        _proto._resolveUrl = function _resolveUrl(url) {
          // startsWith is not supported in IE
          if (url.lastIndexOf("https://", 0) === 0 || url.lastIndexOf("http://", 0) === 0) {
            return url;
          }
          if (!Platform.isBrowser) {
            throw new Error("Cannot resolve '" + url + "'.");
          }

          // Setting the url to the href propery of an anchor tag handles normalization
          // for us. There are 3 main cases.
          // 1. Relative path normalization e.g "b" -> "http://localhost:5000/a/b"
          // 2. Absolute path normalization e.g "/a/b" -> "http://localhost:5000/a/b"
          // 3. Networkpath reference normalization e.g "//localhost:5000/a/b" -> "http://localhost:5000/a/b"
          var aTag = window.document.createElement("a");
          aTag.href = url;
          this._logger.log(LogLevel.Information, "Normalizing '" + url + "' to '" + aTag.href + "'.");
          return aTag.href;
        };
        _proto._resolveNegotiateUrl = function _resolveNegotiateUrl(url) {
          var negotiateUrl = new URL(url);
          if (negotiateUrl.pathname.endsWith('/')) {
            negotiateUrl.pathname += "negotiate";
          } else {
            negotiateUrl.pathname += "/negotiate";
          }
          var searchParams = new URLSearchParams(negotiateUrl.searchParams);
          if (!searchParams.has("negotiateVersion")) {
            searchParams.append("negotiateVersion", this._negotiateVersion.toString());
          }
          if (searchParams.has("useStatefulReconnect")) {
            if (searchParams.get("useStatefulReconnect") === "true") {
              this._options._useStatefulReconnect = true;
            }
          } else if (this._options._useStatefulReconnect === true) {
            searchParams.append("useStatefulReconnect", "true");
          }
          negotiateUrl.search = searchParams.toString();
          return negotiateUrl.toString();
        };
        return HttpConnection;
      }());
      function transportMatches(requestedTransport, actualTransport) {
        return !requestedTransport || (actualTransport & requestedTransport) !== 0;
      }

      /** @private */
      var TransportSendQueue = exports('TransportSendQueue', /*#__PURE__*/function () {
        function TransportSendQueue(_transport) {
          this._buffer = [];
          this._sendBufferedData = void 0;
          this._executing = true;
          this._transportResult = void 0;
          this._sendLoopPromise = void 0;
          this._transport = _transport;
          this._sendBufferedData = new PromiseSource();
          this._transportResult = new PromiseSource();
          this._sendLoopPromise = this._sendLoop();
        }
        var _proto2 = TransportSendQueue.prototype;
        _proto2.send = function send(data) {
          this._bufferData(data);
          if (!this._transportResult) {
            this._transportResult = new PromiseSource();
          }
          return this._transportResult.promise;
        };
        _proto2.stop = function stop() {
          this._executing = false;
          this._sendBufferedData.resolve();
          return this._sendLoopPromise;
        };
        _proto2._bufferData = function _bufferData(data) {
          if (this._buffer.length && typeof this._buffer[0] !== typeof data) {
            throw new Error("Expected data to be of type " + typeof this._buffer + " but was of type " + typeof data);
          }
          this._buffer.push(data);
          this._sendBufferedData.resolve();
        };
        _proto2._sendLoop = /*#__PURE__*/function () {
          var _sendLoop2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
            var transportResult, _data;
            return _regeneratorRuntime().wrap(function _callee8$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
                case 0:
                  _context9.next = 3;
                  return this._sendBufferedData.promise;
                case 3:
                  if (this._executing) {
                    _context9.next = 6;
                    break;
                  }
                  if (this._transportResult) {
                    this._transportResult.reject("Connection stopped.");
                  }
                  return _context9.abrupt("break", 22);
                case 6:
                  this._sendBufferedData = new PromiseSource();
                  transportResult = this._transportResult;
                  this._transportResult = undefined;
                  _data = typeof this._buffer[0] === "string" ? this._buffer.join("") : TransportSendQueue._concatBuffers(this._buffer);
                  this._buffer.length = 0;
                  _context9.prev = 11;
                  _context9.next = 14;
                  return this._transport.send(_data);
                case 14:
                  transportResult.resolve();
                  _context9.next = 20;
                  break;
                case 17:
                  _context9.prev = 17;
                  _context9.t0 = _context9["catch"](11);
                  transportResult.reject(_context9.t0);
                case 20:
                  _context9.next = 0;
                  break;
                case 22:
                case "end":
                  return _context9.stop();
              }
            }, _callee8, this, [[11, 17]]);
          }));
          function _sendLoop() {
            return _sendLoop2.apply(this, arguments);
          }
          return _sendLoop;
        }();
        TransportSendQueue._concatBuffers = function _concatBuffers(arrayBuffers) {
          var totalLength = arrayBuffers.map(function (b) {
            return b.byteLength;
          }).reduce(function (a, b) {
            return a + b;
          });
          var result = new Uint8Array(totalLength);
          var offset = 0;
          for (var _iterator2 = _createForOfIteratorHelperLoose(arrayBuffers), _step2; !(_step2 = _iterator2()).done;) {
            var item = _step2.value;
            result.set(new Uint8Array(item), offset);
            offset += item.byteLength;
          }
          return result.buffer;
        };
        return TransportSendQueue;
      }());
      var PromiseSource = /*#__PURE__*/function () {
        function PromiseSource() {
          var _this5 = this;
          this._resolver = void 0;
          this._rejecter = void 0;
          this.promise = void 0;
          this.promise = new Promise(function (resolve, reject) {
            var _ref2;
            return _ref2 = [resolve, reject], _this5._resolver = _ref2[0], _this5._rejecter = _ref2[1], _ref2;
          });
        }
        var _proto3 = PromiseSource.prototype;
        _proto3.resolve = function resolve() {
          this._resolver();
        };
        _proto3.reject = function reject(reason) {
          this._rejecter(reason);
        };
        return PromiseSource;
      }();
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HubConnection.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Errors.ts', './HandshakeProtocol.ts', './IHubProtocol.ts', './ILogger.ts', './MessageBuffer.ts', './Subject.ts', './Utils2.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, _createClass, cclegacy, AbortError, HandshakeProtocol, MessageType, LogLevel, MessageBuffer, Subject, getErrorString, Platform, Arg;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      AbortError = module.AbortError;
    }, function (module) {
      HandshakeProtocol = module.HandshakeProtocol;
    }, function (module) {
      MessageType = module.MessageType;
    }, function (module) {
      LogLevel = module.LogLevel;
    }, function (module) {
      MessageBuffer = module.MessageBuffer;
    }, function (module) {
      Subject = module.Subject;
    }, function (module) {
      getErrorString = module.getErrorString;
      Platform = module.Platform;
      Arg = module.Arg;
    }],
    execute: function () {
      cclegacy._RF.push({}, "96382oCImlF2a5WAn3Bj3AM", "HubConnection", undefined);
      var DEFAULT_TIMEOUT_IN_MS = 30 * 1000;
      var DEFAULT_PING_INTERVAL_IN_MS = 15 * 1000;
      var DEFAULT_STATEFUL_RECONNECT_BUFFER_SIZE = 100000;

      /** 描述 {@link HubConnection} 與伺服器連線的當前狀態。 */
      var HubConnectionState = exports('HubConnectionState', /*#__PURE__*/function (HubConnectionState) {
        HubConnectionState["Disconnected"] = "Disconnected";
        HubConnectionState["Connecting"] = "Connecting";
        HubConnectionState["Connected"] = "Connected";
        HubConnectionState["Disconnecting"] = "Disconnecting";
        HubConnectionState["Reconnecting"] = "Reconnecting";
        return HubConnectionState;
      }({}));

      /** 代表到 SignalR Hub 的連線。 */
      var HubConnection = exports('HubConnection', /*#__PURE__*/function () {
        /** @internal */
        // Using a public static factory method means we can have a private constructor and an _internal_
        // create method that can be used by HubConnectionBuilder. An "internal" constructor would just
        // be stripped away and the '.d.ts' file would have no constructor, which is interpreted as a
        // public parameter-less constructor.
        HubConnection.create = function create(connection, logger, protocol, reconnectPolicy, serverTimeoutInMilliseconds, keepAliveIntervalInMilliseconds, statefulReconnectBufferSize) {
          return new HubConnection(connection, logger, protocol, reconnectPolicy, serverTimeoutInMilliseconds, keepAliveIntervalInMilliseconds, statefulReconnectBufferSize);
        };
        function HubConnection(connection, logger, protocol, reconnectPolicy, serverTimeoutInMilliseconds, keepAliveIntervalInMilliseconds, statefulReconnectBufferSize) {
          var _this = this;
          this._cachedPingMessage = void 0;
          // Needs to not start with _ for tests
          // eslint-disable-next-line @typescript-eslint/naming-convention
          this.connection = void 0;
          this._logger = void 0;
          this._reconnectPolicy = void 0;
          this._statefulReconnectBufferSize = void 0;
          this._protocol = void 0;
          this._handshakeProtocol = void 0;
          this._callbacks = void 0;
          this._methods = void 0;
          this._invocationId = void 0;
          this._messageBuffer = void 0;
          this._closedCallbacks = void 0;
          this._reconnectingCallbacks = void 0;
          this._reconnectedCallbacks = void 0;
          this._receivedHandshakeResponse = void 0;
          this._handshakeResolver = void 0;
          this._handshakeRejecter = void 0;
          this._stopDuringStartError = void 0;
          this._connectionState = void 0;
          // connectionStarted is tracked independently from connectionState, so we can check if the
          // connection ever did successfully transition from connecting to connected before disconnecting.
          this._connectionStarted = void 0;
          this._startPromise = void 0;
          this._stopPromise = void 0;
          this._nextKeepAlive = 0;
          // The type of these a) doesn't matter and b) varies when building in browser and node contexts
          // Since we're building the WebPack bundle directly from the TypeScript, this matters (previously
          // we built the bundle from the compiled JavaScript).
          this._reconnectDelayHandle = void 0;
          this._timeoutHandle = void 0;
          this._pingServerHandle = void 0;
          this._freezeEventListener = function () {
            _this._logger.log(LogLevel.Warning, "The page is being frozen, this will likely lead to the connection being closed and messages being lost. For more information see the docs at https://learn.microsoft.com/aspnet/core/signalr/javascript-client#bsleep");
          };
          /** 伺服器逾時（毫秒）。
           *
           * 若在此時間內未接收到伺服器的任何訊息，連線將以錯誤終止。
           * 預設逾時為 30,000 毫秒（30 秒）。
           */
          this.serverTimeoutInMilliseconds = void 0;
          /** 向伺服器發送 ping 的預設間隔（毫秒）。
           *
           * 預設為 15,000 毫秒（15 秒）。
           * 允許伺服器偵測到硬斷線（例如使用者拔除電腦）。
           * ping 的實際頻率不會高於伺服器的 ping 頻率。
           * 若伺服器每 5 秒 ping，設定小於 5 秒仍會以 5 秒為準。
           */
          this.keepAliveIntervalInMilliseconds = void 0;
          Arg.isRequired(connection, "connection");
          Arg.isRequired(logger, "logger");
          Arg.isRequired(protocol, "protocol");
          this.serverTimeoutInMilliseconds = serverTimeoutInMilliseconds != null ? serverTimeoutInMilliseconds : DEFAULT_TIMEOUT_IN_MS;
          this.keepAliveIntervalInMilliseconds = keepAliveIntervalInMilliseconds != null ? keepAliveIntervalInMilliseconds : DEFAULT_PING_INTERVAL_IN_MS;
          this._statefulReconnectBufferSize = statefulReconnectBufferSize != null ? statefulReconnectBufferSize : DEFAULT_STATEFUL_RECONNECT_BUFFER_SIZE;
          this._logger = logger;
          this._protocol = protocol;
          this.connection = connection;
          this._reconnectPolicy = reconnectPolicy;
          this._handshakeProtocol = new HandshakeProtocol();
          this.connection.onreceive = function (data) {
            return _this._processIncomingData(data);
          };
          this.connection.onclose = function (error) {
            return _this._connectionClosed(error);
          };
          this._callbacks = {};
          this._methods = {};
          this._closedCallbacks = [];
          this._reconnectingCallbacks = [];
          this._reconnectedCallbacks = [];
          this._invocationId = 0;
          this._receivedHandshakeResponse = false;
          this._connectionState = HubConnectionState.Disconnected;
          this._connectionStarted = false;
          this._cachedPingMessage = this._protocol.writeMessage({
            type: MessageType.Ping
          });
        }

        /** 表示 {@link HubConnection} 與伺服器的連線狀態。 */
        var _proto = HubConnection.prototype;
        /** 啟動連線。
         *
         * @returns {Promise<void>} 連線成功建立時解析，或發生錯誤時拒絕。
         */
        _proto.start = function start() {
          this._startPromise = this._startWithStateTransitions();
          return this._startPromise;
        };
        _proto._startWithStateTransitions = /*#__PURE__*/function () {
          var _startWithStateTransitions2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!(this._connectionState !== HubConnectionState.Disconnected)) {
                    _context.next = 2;
                    break;
                  }
                  return _context.abrupt("return", Promise.reject(new Error("Cannot start a HubConnection that is not in the 'Disconnected' state.")));
                case 2:
                  this._connectionState = HubConnectionState.Connecting;
                  this._logger.log(LogLevel.Debug, "Starting HubConnection.");
                  _context.prev = 4;
                  _context.next = 7;
                  return this._startInternal();
                case 7:
                  if (Platform.isBrowser) {
                    // Log when the browser freezes the tab so users know why their connection unexpectedly stopped working
                    window.document.addEventListener("freeze", this._freezeEventListener);
                  }
                  this._connectionState = HubConnectionState.Connected;
                  this._connectionStarted = true;
                  this._logger.log(LogLevel.Debug, "HubConnection connected successfully.");
                  _context.next = 18;
                  break;
                case 13:
                  _context.prev = 13;
                  _context.t0 = _context["catch"](4);
                  this._connectionState = HubConnectionState.Disconnected;
                  this._logger.log(LogLevel.Debug, "HubConnection failed to start successfully because of error '" + _context.t0 + "'.");
                  return _context.abrupt("return", Promise.reject(_context.t0));
                case 18:
                case "end":
                  return _context.stop();
              }
            }, _callee, this, [[4, 13]]);
          }));
          function _startWithStateTransitions() {
            return _startWithStateTransitions2.apply(this, arguments);
          }
          return _startWithStateTransitions;
        }();
        _proto._startInternal = /*#__PURE__*/function () {
          var _startInternal2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _this2 = this;
            var handshakePromise, version, handshakeRequest, useStatefulReconnect;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  this._stopDuringStartError = undefined;
                  this._receivedHandshakeResponse = false;
                  // 在連線（或重新連線）開始前先建立 promise，否則可能與接收訊息發生競爭
                  handshakePromise = new Promise(function (resolve, reject) {
                    _this2._handshakeResolver = resolve;
                    _this2._handshakeRejecter = reject;
                  });
                  _context2.next = 5;
                  return this.connection.start(this._protocol.transferFormat);
                case 5:
                  _context2.prev = 5;
                  version = this._protocol.version;
                  if (!this.connection.features.reconnect) {
                    // Stateful Reconnect 從 HubProtocol 版本 2 開始，舊伺服器僅支援版本 1，因此在握手時嘗試發送版本 1 以維持相容性。
                    version = 1;
                  }
                  handshakeRequest = {
                    protocol: this._protocol.name,
                    version: version
                  };
                  this._logger.log(LogLevel.Debug, "Sending handshake request.");
                  _context2.next = 12;
                  return this._sendMessage(this._handshakeProtocol.writeHandshakeRequest(handshakeRequest));
                case 12:
                  this._logger.log(LogLevel.Information, "Using HubProtocol '" + this._protocol.name + "'.");

                  // 防禦性地清除超時，以防在完成 start 之前就收到伺服器訊息
                  this._cleanupTimeout();
                  this._resetTimeoutPeriod();
                  this._resetKeepAliveInterval();
                  _context2.next = 18;
                  return handshakePromise;
                case 18:
                  if (!this._stopDuringStartError) {
                    _context2.next = 20;
                    break;
                  }
                  throw this._stopDuringStartError;
                case 20:
                  useStatefulReconnect = this.connection.features.reconnect || false;
                  if (useStatefulReconnect) {
                    this._messageBuffer = new MessageBuffer(this._protocol, this.connection, this._statefulReconnectBufferSize);
                    this.connection.features.disconnected = this._messageBuffer._disconnected.bind(this._messageBuffer);
                    this.connection.features.resend = function () {
                      if (_this2._messageBuffer) {
                        return _this2._messageBuffer._resend();
                      }
                    };
                  }
                  if (this.connection.features.inherentKeepAlive) {
                    _context2.next = 25;
                    break;
                  }
                  _context2.next = 25;
                  return this._sendMessage(this._cachedPingMessage);
                case 25:
                  _context2.next = 35;
                  break;
                case 27:
                  _context2.prev = 27;
                  _context2.t0 = _context2["catch"](5);
                  this._logger.log(LogLevel.Debug, "Hub handshake failed with error '" + _context2.t0 + "' during start(). Stopping HubConnection.");
                  this._cleanupTimeout();
                  this._cleanupPingTimer();

                  // HttpConnection.stop() 在 onclose callback 被呼叫之後才應完成。
                  // 這會在 HttpConnection.stop() 完成前先將 HubConnection 轉為 disconnected。
                  _context2.next = 34;
                  return this.connection.stop(_context2.t0);
                case 34:
                  throw _context2.t0;
                case 35:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this, [[5, 27]]);
          }));
          function _startInternal() {
            return _startInternal2.apply(this, arguments);
          }
          return _startInternal;
        }()
        /** 停止連線。
         *
         * @returns {Promise<void>} 連線成功終止時解析，或發生錯誤時拒絕。
         */;

        _proto.stop = /*#__PURE__*/
        function () {
          var _stop = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var startPromise;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  // Capture the start promise before the connection might be restarted in an onclose callback.
                  startPromise = this._startPromise;
                  this.connection.features.reconnect = false;
                  this._stopPromise = this._stopInternal();
                  _context3.next = 5;
                  return this._stopPromise;
                case 5:
                  _context3.prev = 5;
                  _context3.next = 8;
                  return startPromise;
                case 8:
                  _context3.next = 12;
                  break;
                case 10:
                  _context3.prev = 10;
                  _context3.t0 = _context3["catch"](5);
                case 12:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this, [[5, 10]]);
          }));
          function stop() {
            return _stop.apply(this, arguments);
          }
          return stop;
        }();
        _proto._stopInternal = function _stopInternal(error) {
          if (this._connectionState === HubConnectionState.Disconnected) {
            this._logger.log(LogLevel.Debug, "Call to HubConnection.stop(" + error + ") ignored because it is already in the disconnected state.");
            return Promise.resolve();
          }
          if (this._connectionState === HubConnectionState.Disconnecting) {
            this._logger.log(LogLevel.Debug, "Call to HttpConnection.stop(" + error + ") ignored because the connection is already in the disconnecting state.");
            return this._stopPromise;
          }
          var state = this._connectionState;
          this._connectionState = HubConnectionState.Disconnecting;
          this._logger.log(LogLevel.Debug, "Stopping HubConnection.");
          if (this._reconnectDelayHandle) {
            // 我們正在等待重新連線延遲，此時底層連線已停止。
            // 只需清除 handle 停止重新連線迴圈，並觸發 onclose callbacks。
            this._logger.log(LogLevel.Debug, "Connection stopped during reconnect delay. Done reconnecting.");
            clearTimeout(this._reconnectDelayHandle);
            this._reconnectDelayHandle = undefined;
            this._completeClose();
            return Promise.resolve();
          }
          if (state === HubConnectionState.Connected) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this._sendCloseMessage();
          }
          this._cleanupTimeout();
          this._cleanupPingTimer();
          this._stopDuringStartError = error || new AbortError("The connection was stopped before the hub handshake could complete.");

          // HttpConnection.stop() 應在 HttpConnection.start() 失敗或 onclose callback 被呼叫後才完成。
          // onclose callback 會在需要時先將 HubConnection 轉為 disconnected，然後 HttpConnection.stop() 再完成。
          return this.connection.stop(error);
        };
        _proto._sendCloseMessage = /*#__PURE__*/function () {
          var _sendCloseMessage2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.prev = 0;
                  _context4.next = 3;
                  return this._sendWithProtocol(this._createCloseMessage());
                case 3:
                  _context4.next = 7;
                  break;
                case 5:
                  _context4.prev = 5;
                  _context4.t0 = _context4["catch"](0);
                case 7:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this, [[0, 5]]);
          }));
          function _sendCloseMessage() {
            return _sendCloseMessage2.apply(this, arguments);
          }
          return _sendCloseMessage;
        }()
        /** 在伺服器上以指定名稱與參數呼叫可串流的 hub 方法。
         *
         * @typeparam T 伺服器回傳項目的型別。
         * @param {string} methodName 要呼叫的伺服器方法名稱。
         * @param {any[]} args 用來呼叫伺服器方法的參數。
         * @returns {IStreamResult<T>} 一個可以隨著伺服器回傳結果逐步取得項目的物件。
         */;

        _proto.stream = function stream(methodName) {
          var _this3 = this;
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          var _this$_replaceStreami = this._replaceStreamingParams(args),
            streams = _this$_replaceStreami[0],
            streamIds = _this$_replaceStreami[1];
          var invocationDescriptor = this._createStreamInvocation(methodName, args, streamIds);

          // eslint-disable-next-line prefer-const
          var promiseQueue;
          var subject = new Subject();
          subject.cancelCallback = function () {
            var cancelInvocation = _this3._createCancelInvocation(invocationDescriptor.invocationId);
            delete _this3._callbacks[invocationDescriptor.invocationId];
            return promiseQueue.then(function () {
              return _this3._sendWithProtocol(cancelInvocation);
            });
          };
          this._callbacks[invocationDescriptor.invocationId] = function (invocationEvent, error) {
            if (error) {
              subject.error(error);
              return;
            } else if (invocationEvent) {
              // invocationEvent 不會是 null 當沒有傳入錯誤給 callback
              if (invocationEvent.type === MessageType.Completion) {
                if (invocationEvent.error) {
                  subject.error(new Error(invocationEvent.error));
                } else {
                  subject.complete();
                }
              } else {
                subject.next(invocationEvent.item);
              }
            }
          };
          promiseQueue = this._sendWithProtocol(invocationDescriptor)["catch"](function (e) {
            subject.error(e);
            delete _this3._callbacks[invocationDescriptor.invocationId];
          });
          this._launchStreams(streams, promiseQueue);
          return subject;
        };
        _proto._sendMessage = function _sendMessage(message) {
          this._resetKeepAliveInterval();
          return this.connection.send(message);
        }

        /**
         * 將一個 JS 物件序列化並傳送到伺服器。
         * @param message 要序列化並傳送的物件。
         */;
        _proto._sendWithProtocol = function _sendWithProtocol(message) {
          if (this._messageBuffer) {
            return this._messageBuffer._send(message);
          } else {
            return this._sendMessage(this._protocol.writeMessage(message));
          }
        }

        /** 在伺服器上以指定名稱與參數呼叫 hub 方法，但不等待伺服器回應。
         *
         * 此方法回傳的 Promise 會在客戶端已將呼叫發送給伺服器時解析。伺服器可能仍在處理該呼叫。
         *
         * @param {string} methodName 要呼叫的伺服器方法名稱。
         * @param {any[]} args 用來呼叫伺服器方法的參數。
         * @returns {Promise<void>} 呼叫已成功發送時解析，或發生錯誤時拒絕。
         */;
        _proto.send = function send(methodName) {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }
          var _this$_replaceStreami2 = this._replaceStreamingParams(args),
            streams = _this$_replaceStreami2[0],
            streamIds = _this$_replaceStreami2[1];
          var sendPromise = this._sendWithProtocol(this._createInvocation(methodName, args, true, streamIds));
          this._launchStreams(streams, sendPromise);
          return sendPromise;
        }

        /** 在伺服器上以指定名稱與參數呼叫 hub 方法。
         *
         * 此方法回傳的 Promise 會在伺服器表示已完成該方法的執行時解析。若方法有回傳值，該值會作為 Promise 的解析結果。
         *
         * @typeparam T 預期的回傳型別。
         * @param {string} methodName 要呼叫的伺服器方法名稱。
         * @param {any[]} args 用來呼叫伺服器方法的參數。
         * @returns {Promise<T>} 解析為伺服器方法的結果，或在錯誤時拒絕。
         */;
        _proto.invoke = function invoke(methodName) {
          var _this4 = this;
          for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            args[_key3 - 1] = arguments[_key3];
          }
          var _this$_replaceStreami3 = this._replaceStreamingParams(args),
            streams = _this$_replaceStreami3[0],
            streamIds = _this$_replaceStreami3[1];
          var invocationDescriptor = this._createInvocation(methodName, args, false, streamIds);
          var p = new Promise(function (resolve, reject) {
            // invocationId 對於非阻塞呼叫總是會有值
            _this4._callbacks[invocationDescriptor.invocationId] = function (invocationEvent, error) {
              if (error) {
                reject(error);
                return;
              } else if (invocationEvent) {
                // invocationEvent 在沒有錯誤傳入 callback 時不會是 null
                if (invocationEvent.type === MessageType.Completion) {
                  if (invocationEvent.error) {
                    reject(new Error(invocationEvent.error));
                  } else {
                    resolve(invocationEvent.result);
                  }
                } else {
                  reject(new Error("Unexpected message type: " + invocationEvent.type));
                }
              }
            };
            var promiseQueue = _this4._sendWithProtocol(invocationDescriptor)["catch"](function (e) {
              reject(e);
              // invocationId 對於非阻塞呼叫總是會有值
              delete _this4._callbacks[invocationDescriptor.invocationId];
            });
            _this4._launchStreams(streams, promiseQueue);
          });
          return p;
        }

        /** 註冊當指定 hub 方法被呼叫時會被觸發的處理函式。
         *
         * @param {string} methodName 要定義的 hub 方法名稱。
         * @param {Function} newMethod 當 hub 方法被呼叫時會被觸發的處理函式。
         */;
        _proto.on = function on(methodName, newMethod) {
          if (!methodName || !newMethod) {
            return;
          }
          methodName = methodName.toLowerCase();
          if (!this._methods[methodName]) {
            this._methods[methodName] = [];
          }

          // 防止重複加入相同的處理函式
          if (this._methods[methodName].indexOf(newMethod) !== -1) {
            return;
          }
          this._methods[methodName].push(newMethod);
        }

        /** 移除指定 hub 方法的所有處理函式。
         *
         * @param {string} methodName 要移除處理函式的方法名稱。
         */;
        _proto.off = function off(methodName, method) {
          if (!methodName) {
            return;
          }
          methodName = methodName.toLowerCase();
          var handlers = this._methods[methodName];
          if (!handlers) {
            return;
          }
          if (method) {
            var removeIdx = handlers.indexOf(method);
            if (removeIdx !== -1) {
              handlers.splice(removeIdx, 1);
              if (handlers.length === 0) {
                delete this._methods[methodName];
              }
            }
          } else {
            delete this._methods[methodName];
          }
        }

        /** 註冊當連線關閉時會被觸發的處理函式。
         *
         * @param {Function} callback 當連線關閉時會被觸發的函式。可選地接受一個參數，包含導致連線關閉的錯誤（如果有）。
         */;
        _proto.onclose = function onclose(callback) {
          if (callback) {
            this._closedCallbacks.push(callback);
          }
        }

        /** 註冊當連線開始重新連線時會被觸發的處理函式。
         *
         * @param {Function} callback 當連線開始重新連線時會被觸發的函式。可選地接受一個參數，包含導致重新連線的錯誤（如果有）。
         */;
        _proto.onreconnecting = function onreconnecting(callback) {
          if (callback) {
            this._reconnectingCallbacks.push(callback);
          }
        }

        /** 註冊當連線成功重新連線時會被觸發的處理函式。
         *
         * @param {Function} callback 當連線成功重新連線時會被觸發的函式。
         */;
        _proto.onreconnected = function onreconnected(callback) {
          if (callback) {
            this._reconnectedCallbacks.push(callback);
          }
        };
        _proto._processIncomingData = function _processIncomingData(data) {
          var _this5 = this;
          this._cleanupTimeout();
          if (!this._receivedHandshakeResponse) {
            data = this._processHandshakeResponse(data);
            this._receivedHandshakeResponse = true;
          }

          // 處理握手回應後可能資料已全部讀取完
          if (data) {
            // 解析訊息
            var messages = this._protocol.parseMessages(data, this._logger);
            for (var _iterator = _createForOfIteratorHelperLoose(messages), _step; !(_step = _iterator()).done;) {
              var message = _step.value;
              if (this._messageBuffer && !this._messageBuffer._shouldProcessMessage(message)) {
                // 不處理該訊息，因為我們要麼在等待 SequenceMessage，要麼收到重複訊息
                continue;
              }
              switch (message.type) {
                case MessageType.Invocation:
                  this._invokeClientMethod(message)["catch"](function (e) {
                    _this5._logger.log(LogLevel.Error, "Invoke client method threw error: " + getErrorString(e));
                  });
                  break;
                case MessageType.StreamItem:
                case MessageType.Completion:
                  {
                    var callback = this._callbacks[message.invocationId];
                    if (callback) {
                      if (message.type === MessageType.Completion) {
                        delete this._callbacks[message.invocationId];
                      }
                      try {
                        callback(message);
                      } catch (e) {
                        this._logger.log(LogLevel.Error, "Stream callback threw error: " + getErrorString(e));
                      }
                    }
                    break;
                  }
                case MessageType.Ping:
                  // 不處理 ping 訊息
                  break;
                case MessageType.Close:
                  {
                    this._logger.log(LogLevel.Information, "Close message received from server.");
                    var _error = message.error ? new Error("Server returned an error on close: " + message.error) : undefined;
                    if (message.allowReconnect === true) {
                      // 雖然在這裡不等待 connection.stop() 看起來怪，但 processIncomingData 是在非 async 的 onreceive callback 中呼叫，
                      // 這已經是 serverTimeout() 的行為，且 HttpConnection.Stop() 應該捕捉並記錄所有可能的例外。
                      // eslint-disable-next-line @typescript-eslint/no-floating-promises
                      this.connection.stop(_error);
                    } else {
                      // 我們無法在此等待 stopInternal()，但後續對 stop() 的呼叫會等待此 stopInternal()（若仍在進行中）
                      this._stopPromise = this._stopInternal(_error);
                    }
                    break;
                  }
                case MessageType.Ack:
                  if (this._messageBuffer) {
                    this._messageBuffer._ack(message);
                  }
                  break;
                case MessageType.Sequence:
                  if (this._messageBuffer) {
                    this._messageBuffer._resetSequence(message);
                  }
                  break;
                default:
                  this._logger.log(LogLevel.Warning, "Invalid message type: " + message.type + ".");
                  break;
              }
            }
          }
          this._resetTimeoutPeriod();
        };
        _proto._processHandshakeResponse = function _processHandshakeResponse(data) {
          var responseMessage;
          var remainingData;
          try {
            var _this$_handshakeProto = this._handshakeProtocol.parseHandshakeResponse(data);
            remainingData = _this$_handshakeProto[0];
            responseMessage = _this$_handshakeProto[1];
          } catch (e) {
            var message = "Error parsing handshake response: " + e;
            this._logger.log(LogLevel.Error, message);
            var _error2 = new Error(message);
            this._handshakeRejecter(_error2);
            throw _error2;
          }
          if (responseMessage.error) {
            var _message = "Server returned handshake error: " + responseMessage.error;
            this._logger.log(LogLevel.Error, _message);
            var _error3 = new Error(_message);
            this._handshakeRejecter(_error3);
            throw _error3;
          } else {
            this._logger.log(LogLevel.Debug, "Server handshake complete.");
          }
          this._handshakeResolver();
          return remainingData;
        };
        _proto._resetKeepAliveInterval = function _resetKeepAliveInterval() {
          if (this.connection.features.inherentKeepAlive) {
            return;
          }

          // 設定下次要發送 keep alive 的時間
          // 計時器會在下一次接收訊息時建立
          this._nextKeepAlive = new Date().getTime() + this.keepAliveIntervalInMilliseconds;
          this._cleanupPingTimer();
        };
        _proto._resetTimeoutPeriod = function _resetTimeoutPeriod() {
          var _this6 = this;
          if (!this.connection.features || !this.connection.features.inherentKeepAlive) {
            // 設定逾時計時器
            this._timeoutHandle = setTimeout(function () {
              return _this6.serverTimeout();
            }, this.serverTimeoutInMilliseconds);

            // 若尚未有 keepAlive 計時器則設定一個
            if (this._pingServerHandle === undefined) {
              var nextPing = this._nextKeepAlive - new Date().getTime();
              if (nextPing < 0) {
                nextPing = 0;
              }

              // 計時器必須從網路回呼中設定，以避免 Chrome 的計時器節流導致定時器每分鐘才執行一次
              this._pingServerHandle = setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
                return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                  while (1) switch (_context5.prev = _context5.next) {
                    case 0:
                      if (!(_this6._connectionState === HubConnectionState.Connected)) {
                        _context5.next = 9;
                        break;
                      }
                      _context5.prev = 1;
                      _context5.next = 4;
                      return _this6._sendMessage(_this6._cachedPingMessage);
                    case 4:
                      _context5.next = 9;
                      break;
                    case 6:
                      _context5.prev = 6;
                      _context5.t0 = _context5["catch"](1);
                      // 我們不在意錯誤，應該會在客戶端其他地方看到。連線可能已處於錯誤或關閉狀態，清理計時器避免繼續觸發
                      _this6._cleanupPingTimer();
                    case 9:
                    case "end":
                      return _context5.stop();
                  }
                }, _callee5, null, [[1, 6]]);
              })), nextPing);
            }
          }
        }

        // eslint-disable-next-line @typescript-eslint/naming-convention
        ;

        _proto.serverTimeout = function serverTimeout() {
          // 伺服器已長時間未與我們通訊。它不喜歡我們了 :(
          // 終止連線，但不需要等待該 Promise。這可能會觸發重新連線。
          // eslint-disable-next-line @typescript-eslint/no-floating-promises
          this.connection.stop(new Error("Server timeout elapsed without receiving a message from the server."));
        };
        _proto._invokeClientMethod = /*#__PURE__*/function () {
          var _invokeClientMethod2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(invocationMessage) {
            var methodName, methods, methodsCopy, expectsResponse, res, exception, completionMessage, _iterator2, _step2, m, prevRes;
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  methodName = invocationMessage.target.toLowerCase();
                  methods = this._methods[methodName];
                  if (methods) {
                    _context6.next = 9;
                    break;
                  }
                  this._logger.log(LogLevel.Warning, "No client method with the name '" + methodName + "' found.");

                  // 客戶端沒有提供 handler，但伺服器仍期待回應，所以我們回傳錯誤
                  if (!invocationMessage.invocationId) {
                    _context6.next = 8;
                    break;
                  }
                  this._logger.log(LogLevel.Warning, "No result given for '" + methodName + "' method and invocation ID '" + invocationMessage.invocationId + "'.");
                  _context6.next = 8;
                  return this._sendWithProtocol(this._createCompletionMessage(invocationMessage.invocationId, "Client didn't provide a result.", null));
                case 8:
                  return _context6.abrupt("return");
                case 9:
                  // 複製 handlers 避免在迭代時被移除而修改陣列
                  methodsCopy = methods.slice(); // 伺服器是否期待回應
                  expectsResponse = invocationMessage.invocationId ? true : false; // 我們保留最後的結果或例外，但仍會呼叫所有 handler
                  _iterator2 = _createForOfIteratorHelperLoose(methodsCopy);
                case 12:
                  if ((_step2 = _iterator2()).done) {
                    _context6.next = 29;
                    break;
                  }
                  m = _step2.value;
                  _context6.prev = 14;
                  prevRes = res;
                  _context6.next = 18;
                  return m.apply(this, invocationMessage.arguments);
                case 18:
                  res = _context6.sent;
                  if (expectsResponse && res && prevRes) {
                    this._logger.log(LogLevel.Error, "Multiple results provided for '" + methodName + "'. Sending error to server.");
                    completionMessage = this._createCompletionMessage(invocationMessage.invocationId, "Client provided multiple results.", null);
                  }
                  // 若之後有結果則忽略先前的例外，例外會被記錄
                  exception = undefined;
                  _context6.next = 27;
                  break;
                case 23:
                  _context6.prev = 23;
                  _context6.t0 = _context6["catch"](14);
                  exception = _context6.t0;
                  this._logger.log(LogLevel.Error, "A callback for the method '" + methodName + "' threw error '" + _context6.t0 + "'.");
                case 27:
                  _context6.next = 12;
                  break;
                case 29:
                  if (!completionMessage) {
                    _context6.next = 34;
                    break;
                  }
                  _context6.next = 32;
                  return this._sendWithProtocol(completionMessage);
                case 32:
                  _context6.next = 41;
                  break;
                case 34:
                  if (!expectsResponse) {
                    _context6.next = 40;
                    break;
                  }
                  // 若有例外代表沒有提供結果或在結果之後 handler 拋出例外
                  if (exception) {
                    completionMessage = this._createCompletionMessage(invocationMessage.invocationId, "" + exception, null);
                  } else if (res !== undefined) {
                    completionMessage = this._createCompletionMessage(invocationMessage.invocationId, null, res);
                  } else {
                    this._logger.log(LogLevel.Warning, "No result given for '" + methodName + "' method and invocation ID '" + invocationMessage.invocationId + "'.");
                    // 客戶端沒有提供結果也沒有拋出例外，但伺服器期待回應，因此回傳錯誤
                    completionMessage = this._createCompletionMessage(invocationMessage.invocationId, "Client didn't provide a result.", null);
                  }
                  _context6.next = 38;
                  return this._sendWithProtocol(completionMessage);
                case 38:
                  _context6.next = 41;
                  break;
                case 40:
                  if (res) {
                    this._logger.log(LogLevel.Error, "Result given for '" + methodName + "' method but server is not expecting a result.");
                  }
                case 41:
                case "end":
                  return _context6.stop();
              }
            }, _callee6, this, [[14, 23]]);
          }));
          function _invokeClientMethod(_x) {
            return _invokeClientMethod2.apply(this, arguments);
          }
          return _invokeClientMethod;
        }();
        _proto._connectionClosed = function _connectionClosed(error) {
          this._logger.log(LogLevel.Debug, "HubConnection.connectionClosed(" + error + ") called while in state " + this._connectionState + ".");

          // 觸發 handshakeRejecter 不一定足夠，因為它可能已解析但續續尚未執行
          this._stopDuringStartError = this._stopDuringStartError || error || new AbortError("The underlying connection was closed before the hub handshake could complete.");

          // 若握手正在進行中，start 會等待握手的 promise，所以我們完成它。
          // 若已完成，這將無作用。
          if (this._handshakeResolver) {
            this._handshakeResolver();
          }
          this._cancelCallbacksWithError(error || new Error("Invocation canceled due to the underlying connection being closed."));
          this._cleanupTimeout();
          this._cleanupPingTimer();
          if (this._connectionState === HubConnectionState.Disconnecting) {
            this._completeClose(error);
          } else if (this._connectionState === HubConnectionState.Connected && this._reconnectPolicy) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this._reconnect(error);
          } else if (this._connectionState === HubConnectionState.Connected) {
            this._completeClose(error);
          }

          // 如果上面的條件都不成立，HubConnection 應該處於以下狀態之一：
          // 1. Connecting：此時 handshakeResolver 會完成並由 stopDuringStartError 拋出錯誤。
          // 2. Reconnecting：handshakeResolver 會完成並讓目前的重連嘗試失敗，可能會繼續重試。
          // 3. Disconnected：已經完成工作。
        };

        _proto._completeClose = function _completeClose(error) {
          var _this7 = this;
          if (this._connectionStarted) {
            this._connectionState = HubConnectionState.Disconnected;
            this._connectionStarted = false;
            if (this._messageBuffer) {
              this._messageBuffer._dispose(error != null ? error : new Error("Connection closed."));
              this._messageBuffer = undefined;
            }
            if (Platform.isBrowser) {
              window.document.removeEventListener("freeze", this._freezeEventListener);
            }
            try {
              this._closedCallbacks.forEach(function (c) {
                return c.apply(_this7, [error]);
              });
            } catch (e) {
              this._logger.log(LogLevel.Error, "An onclose callback called with error '" + error + "' threw error '" + e + "'.");
            }
          }
        };
        _proto._reconnect = /*#__PURE__*/function () {
          var _reconnect2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(error) {
            var _this8 = this;
            var reconnectStartTime, previousReconnectAttempts, retryError, nextRetryDelay;
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  reconnectStartTime = Date.now();
                  previousReconnectAttempts = 0;
                  retryError = error !== undefined ? error : new Error("Attempting to reconnect due to a unknown error.");
                  nextRetryDelay = this._getNextRetryDelay(previousReconnectAttempts++, 0, retryError);
                  if (!(nextRetryDelay === null)) {
                    _context7.next = 8;
                    break;
                  }
                  this._logger.log(LogLevel.Debug, "Connection not reconnecting because the IRetryPolicy returned null on the first reconnect attempt.");
                  this._completeClose(error);
                  return _context7.abrupt("return");
                case 8:
                  this._connectionState = HubConnectionState.Reconnecting;
                  if (error) {
                    this._logger.log(LogLevel.Information, "Connection reconnecting because of error '" + error + "'.");
                  } else {
                    this._logger.log(LogLevel.Information, "Connection reconnecting.");
                  }
                  if (!(this._reconnectingCallbacks.length !== 0)) {
                    _context7.next = 15;
                    break;
                  }
                  try {
                    this._reconnectingCallbacks.forEach(function (c) {
                      return c.apply(_this8, [error]);
                    });
                  } catch (e) {
                    this._logger.log(LogLevel.Error, "An onreconnecting callback called with error '" + error + "' threw error '" + e + "'.");
                  }

                  // 若 onreconnecting callback 呼叫 connection.stop()，則提前結束
                  if (!(this._connectionState !== HubConnectionState.Reconnecting)) {
                    _context7.next = 15;
                    break;
                  }
                  this._logger.log(LogLevel.Debug, "Connection left the reconnecting state in onreconnecting callback. Done reconnecting.");
                  return _context7.abrupt("return");
                case 15:
                  if (!(nextRetryDelay !== null)) {
                    _context7.next = 43;
                    break;
                  }
                  this._logger.log(LogLevel.Information, "Reconnect attempt number " + previousReconnectAttempts + " will start in " + nextRetryDelay + " ms.");
                  _context7.next = 19;
                  return new Promise(function (resolve) {
                    _this8._reconnectDelayHandle = setTimeout(resolve, nextRetryDelay);
                  });
                case 19:
                  this._reconnectDelayHandle = undefined;
                  if (!(this._connectionState !== HubConnectionState.Reconnecting)) {
                    _context7.next = 23;
                    break;
                  }
                  this._logger.log(LogLevel.Debug, "Connection left the reconnecting state during reconnect delay. Done reconnecting.");
                  return _context7.abrupt("return");
                case 23:
                  _context7.prev = 23;
                  _context7.next = 26;
                  return this._startInternal();
                case 26:
                  this._connectionState = HubConnectionState.Connected;
                  this._logger.log(LogLevel.Information, "HubConnection reconnected successfully.");
                  if (this._reconnectedCallbacks.length !== 0) {
                    try {
                      this._reconnectedCallbacks.forEach(function (c) {
                        return c.apply(_this8, [_this8.connection.connectionId]);
                      });
                    } catch (e) {
                      this._logger.log(LogLevel.Error, "An onreconnected callback called with connectionId '" + this.connection.connectionId + "; threw error '" + e + "'.");
                    }
                  }
                  return _context7.abrupt("return");
                case 32:
                  _context7.prev = 32;
                  _context7.t0 = _context7["catch"](23);
                  this._logger.log(LogLevel.Information, "Reconnect attempt failed because of error '" + _context7.t0 + "'.");
                  if (!(this._connectionState !== HubConnectionState.Reconnecting)) {
                    _context7.next = 39;
                    break;
                  }
                  this._logger.log(LogLevel.Debug, "Connection moved to the '" + this._connectionState + "' from the reconnecting state during reconnect attempt. Done reconnecting.");
                  // The TypeScript compiler thinks that connectionState must be Connected here. The TypeScript compiler is wrong.
                  if (this._connectionState === HubConnectionState.Disconnecting) {
                    this._completeClose();
                  }
                  return _context7.abrupt("return");
                case 39:
                  retryError = _context7.t0 instanceof Error ? _context7.t0 : new Error(_context7.t0.toString());
                  nextRetryDelay = this._getNextRetryDelay(previousReconnectAttempts++, Date.now() - reconnectStartTime, retryError);
                case 41:
                  _context7.next = 15;
                  break;
                case 43:
                  this._logger.log(LogLevel.Information, "Reconnect retries have been exhausted after " + (Date.now() - reconnectStartTime) + " ms and " + previousReconnectAttempts + " failed attempts. Connection disconnecting.");
                  this._completeClose();
                case 45:
                case "end":
                  return _context7.stop();
              }
            }, _callee7, this, [[23, 32]]);
          }));
          function _reconnect(_x2) {
            return _reconnect2.apply(this, arguments);
          }
          return _reconnect;
        }();
        _proto._getNextRetryDelay = function _getNextRetryDelay(previousRetryCount, elapsedMilliseconds, retryReason) {
          try {
            return this._reconnectPolicy.nextRetryDelayInMilliseconds({
              elapsedMilliseconds: elapsedMilliseconds,
              previousRetryCount: previousRetryCount,
              retryReason: retryReason
            });
          } catch (e) {
            this._logger.log(LogLevel.Error, "IRetryPolicy.nextRetryDelayInMilliseconds(" + previousRetryCount + ", " + elapsedMilliseconds + ") threw error '" + e + "'.");
            return null;
          }
        };
        _proto._cancelCallbacksWithError = function _cancelCallbacksWithError(error) {
          var _this9 = this;
          var callbacks = this._callbacks;
          this._callbacks = {};
          Object.keys(callbacks).forEach(function (key) {
            var callback = callbacks[key];
            try {
              callback(null, error);
            } catch (e) {
              _this9._logger.log(LogLevel.Error, "Stream 'error' callback called with '" + error + "' threw error: " + getErrorString(e));
            }
          });
        };
        _proto._cleanupPingTimer = function _cleanupPingTimer() {
          if (this._pingServerHandle) {
            clearTimeout(this._pingServerHandle);
            this._pingServerHandle = undefined;
          }
        };
        _proto._cleanupTimeout = function _cleanupTimeout() {
          if (this._timeoutHandle) {
            clearTimeout(this._timeoutHandle);
          }
        };
        _proto._createInvocation = function _createInvocation(methodName, args, nonblocking, streamIds) {
          if (nonblocking) {
            if (streamIds.length !== 0) {
              return {
                target: methodName,
                arguments: args,
                streamIds: streamIds,
                type: MessageType.Invocation
              };
            } else {
              return {
                target: methodName,
                arguments: args,
                type: MessageType.Invocation
              };
            }
          } else {
            var _invocationId = this._invocationId;
            this._invocationId++;
            if (streamIds.length !== 0) {
              return {
                target: methodName,
                arguments: args,
                invocationId: _invocationId.toString(),
                streamIds: streamIds,
                type: MessageType.Invocation
              };
            } else {
              return {
                target: methodName,
                arguments: args,
                invocationId: _invocationId.toString(),
                type: MessageType.Invocation
              };
            }
          }
        };
        _proto._launchStreams = function _launchStreams(streams, promiseQueue) {
          var _this10 = this;
          if (streams.length === 0) {
            return;
          }

          // 同步傳送 stream 資料以保證在伺服器端的順序
          if (!promiseQueue) {
            promiseQueue = Promise.resolve();
          }

          // 我們想對鍵進行迭代，因為鍵是 stream id
          // eslint-disable-next-line guard-for-in
          var _loop = function _loop(streamId) {
            streams[streamId].subscribe({
              complete: function complete() {
                promiseQueue = promiseQueue.then(function () {
                  return _this10._sendWithProtocol(_this10._createCompletionMessage(streamId));
                });
              },
              error: function error(err) {
                var message;
                if (err instanceof Error) {
                  message = err.message;
                } else if (err && err.toString) {
                  message = err.toString();
                } else {
                  message = "Unknown error";
                }
                promiseQueue = promiseQueue.then(function () {
                  return _this10._sendWithProtocol(_this10._createCompletionMessage(streamId, message));
                });
              },
              next: function next(item) {
                promiseQueue = promiseQueue.then(function () {
                  return _this10._sendWithProtocol(_this10._createStreamItemMessage(streamId, item));
                });
              }
            });
          };
          for (var streamId in streams) {
            _loop(streamId);
          }
        };
        _proto._replaceStreamingParams = function _replaceStreamingParams(args) {
          var streams = [];
          var streamIds = [];
          for (var i = 0; i < args.length; i++) {
            var argument = args[i];
            if (this._isObservable(argument)) {
              var streamId = this._invocationId;
              this._invocationId++;
              // 保存 stream 供之後使用
              streams[streamId] = argument;
              streamIds.push(streamId.toString());

              // 從 args 中移除 stream
              args.splice(i, 1);
            }
          }
          return [streams, streamIds];
        };
        _proto._isObservable = function _isObservable(arg) {
          // 允許其他 stream 實作（如 rxjs）也能運作
          return arg && arg.subscribe && typeof arg.subscribe === "function";
        };
        _proto._createStreamInvocation = function _createStreamInvocation(methodName, args, streamIds) {
          var invocationId = this._invocationId;
          this._invocationId++;
          if (streamIds.length !== 0) {
            return {
              target: methodName,
              arguments: args,
              invocationId: invocationId.toString(),
              streamIds: streamIds,
              type: MessageType.StreamInvocation
            };
          } else {
            return {
              target: methodName,
              arguments: args,
              invocationId: invocationId.toString(),
              type: MessageType.StreamInvocation
            };
          }
        };
        _proto._createCancelInvocation = function _createCancelInvocation(id) {
          return {
            invocationId: id,
            type: MessageType.CancelInvocation
          };
        };
        _proto._createStreamItemMessage = function _createStreamItemMessage(id, item) {
          return {
            invocationId: id,
            item: item,
            type: MessageType.StreamItem
          };
        };
        _proto._createCompletionMessage = function _createCompletionMessage(id, error, result) {
          if (error) {
            return {
              error: error,
              invocationId: id,
              type: MessageType.Completion
            };
          }
          return {
            invocationId: id,
            result: result,
            type: MessageType.Completion
          };
        };
        _proto._createCloseMessage = function _createCloseMessage() {
          return {
            type: MessageType.Close
          };
        };
        _createClass(HubConnection, [{
          key: "state",
          get: function get() {
            return this._connectionState;
          }

          /** 表示 {@link HubConnection} 在伺服器端的 connection id。當連線為斷線狀態或跳過協商時，connection id 會是 null。 */
        }, {
          key: "connectionId",
          get: function get() {
            return this.connection ? this.connection.connectionId || null : null;
          }

          /** 表示 {@link HubConnection} 連線的網址。 */
        }, {
          key: "baseUrl",
          get: function get() {
            return this.connection.baseUrl || "";
          }

          /**
           * 為 HubConnection 設定新的 url。注意只有在連線處於 Disconnected 或 Reconnecting 狀態時才能更改 url。
           * @param {string} url 要連線的網址。
           */,
          set: function set(url) {
            if (this._connectionState !== HubConnectionState.Disconnected && this._connectionState !== HubConnectionState.Reconnecting) {
              throw new Error("The HubConnection must be in the Disconnected or Reconnecting state to change the url.");
            }
            if (!url) {
              throw new Error("The HubConnection url must be a valid url.");
            }
            this.connection.baseUrl = url;
          }
        }]);
        return HubConnection;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HubConnectionBuilder.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './DefaultReconnectPolicy.ts', './HttpConnection.ts', './HubConnection.ts', './ILogger.ts', './JsonHubProtocol.ts', './Loggers.ts', './Utils2.ts'], function (exports) {
  var _extends, cclegacy, DefaultReconnectPolicy, HttpConnection, HubConnection, LogLevel, JsonHubProtocol, NullLogger, Arg, ConsoleLogger;
  return {
    setters: [function (module) {
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      DefaultReconnectPolicy = module.DefaultReconnectPolicy;
    }, function (module) {
      HttpConnection = module.HttpConnection;
    }, function (module) {
      HubConnection = module.HubConnection;
    }, function (module) {
      LogLevel = module.LogLevel;
    }, function (module) {
      JsonHubProtocol = module.JsonHubProtocol;
    }, function (module) {
      NullLogger = module.NullLogger;
    }, function (module) {
      Arg = module.Arg;
      ConsoleLogger = module.ConsoleLogger;
    }],
    execute: function () {
      cclegacy._RF.push({}, "da605p0fpxNhICPUE3wGtym", "HubConnectionBuilder", undefined);
      var LogLevelNameMapping = {
        trace: LogLevel.Trace,
        debug: LogLevel.Debug,
        info: LogLevel.Information,
        information: LogLevel.Information,
        warn: LogLevel.Warning,
        warning: LogLevel.Warning,
        error: LogLevel.Error,
        critical: LogLevel.Critical,
        none: LogLevel.None
      };
      function parseLogLevel(name) {
        // Case-insensitive matching via lower-casing
        // Yes, I know case-folding is a complicated problem in Unicode, but we only support
        // the ASCII strings defined in LogLevelNameMapping anyway, so it's fine -anurse.
        var mapping = LogLevelNameMapping[name.toLowerCase()];
        if (typeof mapping !== "undefined") {
          return mapping;
        } else {
          throw new Error("Unknown log level: " + name);
        }
      }

      /** A builder for configuring {@link @microsoft/signalr.HubConnection} instances. */
      var HubConnectionBuilder = exports('HubConnectionBuilder', /*#__PURE__*/function () {
        function HubConnectionBuilder() {
          this._serverTimeoutInMilliseconds = void 0;
          this._keepAliveIntervalInMilliseconds = void 0;
          /** @internal */
          this.protocol = void 0;
          /** @internal */
          this.httpConnectionOptions = void 0;
          /** @internal */
          this.url = void 0;
          /** @internal */
          this.logger = void 0;
          /** If defined, this indicates the client should automatically attempt to reconnect if the connection is lost. */
          /** @internal */
          this.reconnectPolicy = void 0;
          this._statefulReconnectBufferSize = void 0;
        }
        var _proto = HubConnectionBuilder.prototype;
        _proto.configureLogging = function configureLogging(logging) {
          Arg.isRequired(logging, "logging");
          if (isLogger(logging)) {
            this.logger = logging;
          } else if (typeof logging === "string") {
            var _logLevel = parseLogLevel(logging);
            this.logger = new ConsoleLogger(_logLevel);
          } else {
            this.logger = new ConsoleLogger(logging);
          }
          return this;
        }

        /** Configures the {@link @microsoft/signalr.HubConnection} to use HTTP-based transports to connect to the specified URL.
         *
         * The transport will be selected automatically based on what the server and client support.
         *
         * @param {string} url The URL the connection will use.
         * @returns The {@link @microsoft/signalr.HubConnectionBuilder} instance, for chaining.
         */;
        _proto.withUrl = function withUrl(url, transportTypeOrOptions) {
          Arg.isRequired(url, "url");
          Arg.isNotEmpty(url, "url");
          this.url = url;

          // Flow-typing knows where it's at. Since HttpTransportType is a number and IHttpConnectionOptions is guaranteed
          // to be an object, we know (as does TypeScript) this comparison is all we need to figure out which overload was called.
          if (typeof transportTypeOrOptions === "object") {
            this.httpConnectionOptions = _extends({}, this.httpConnectionOptions, transportTypeOrOptions);
          } else {
            this.httpConnectionOptions = _extends({}, this.httpConnectionOptions, {
              transport: transportTypeOrOptions
            });
          }
          return this;
        }

        /** Configures the {@link @microsoft/signalr.HubConnection} to use the specified Hub Protocol.
         *
         * @param {IHubProtocol} protocol The {@link @microsoft/signalr.IHubProtocol} implementation to use.
         */;
        _proto.withHubProtocol = function withHubProtocol(protocol) {
          Arg.isRequired(protocol, "protocol");
          this.protocol = protocol;
          return this;
        }

        /** Configures the {@link @microsoft/signalr.HubConnection} to automatically attempt to reconnect if the connection is lost.
         * By default, the client will wait 0, 2, 10 and 30 seconds respectively before trying up to 4 reconnect attempts.
         */;
        _proto.withAutomaticReconnect = function withAutomaticReconnect(retryDelaysOrReconnectPolicy) {
          if (this.reconnectPolicy) {
            throw new Error("A reconnectPolicy has already been set.");
          }
          if (!retryDelaysOrReconnectPolicy) {
            this.reconnectPolicy = new DefaultReconnectPolicy();
          } else if (Array.isArray(retryDelaysOrReconnectPolicy)) {
            this.reconnectPolicy = new DefaultReconnectPolicy(retryDelaysOrReconnectPolicy);
          } else {
            this.reconnectPolicy = retryDelaysOrReconnectPolicy;
          }
          return this;
        }

        /** Configures {@link @microsoft/signalr.HubConnection.serverTimeoutInMilliseconds} for the {@link @microsoft/signalr.HubConnection}.
         *
         * @returns The {@link @microsoft/signalr.HubConnectionBuilder} instance, for chaining.
         */;
        _proto.withServerTimeout = function withServerTimeout(milliseconds) {
          Arg.isRequired(milliseconds, "milliseconds");
          this._serverTimeoutInMilliseconds = milliseconds;
          return this;
        }

        /** Configures {@link @microsoft/signalr.HubConnection.keepAliveIntervalInMilliseconds} for the {@link @microsoft/signalr.HubConnection}.
         *
         * @returns The {@link @microsoft/signalr.HubConnectionBuilder} instance, for chaining.
         */;
        _proto.withKeepAliveInterval = function withKeepAliveInterval(milliseconds) {
          Arg.isRequired(milliseconds, "milliseconds");
          this._keepAliveIntervalInMilliseconds = milliseconds;
          return this;
        }

        /** Enables and configures options for the Stateful Reconnect feature.
         *
         * @returns The {@link @microsoft/signalr.HubConnectionBuilder} instance, for chaining.
         */;
        _proto.withStatefulReconnect = function withStatefulReconnect(options) {
          if (this.httpConnectionOptions === undefined) {
            this.httpConnectionOptions = {};
          }
          this.httpConnectionOptions._useStatefulReconnect = true;
          this._statefulReconnectBufferSize = options == null ? void 0 : options.bufferSize;
          return this;
        }

        /** Creates a {@link @microsoft/signalr.HubConnection} from the configuration options specified in this builder.
         *
         * @returns {HubConnection} The configured {@link @microsoft/signalr.HubConnection}.
         */;
        _proto.build = function build() {
          // If httpConnectionOptions has a logger, use it. Otherwise, override it with the one
          // provided to configureLogger
          var httpConnectionOptions = this.httpConnectionOptions || {};

          // If it's 'null', the user **explicitly** asked for null, don't mess with it.
          if (httpConnectionOptions.logger === undefined) {
            // If our logger is undefined or null, that's OK, the HttpConnection constructor will handle it.
            httpConnectionOptions.logger = this.logger;
          }

          // Now create the connection
          if (!this.url) {
            throw new Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection.");
          }
          var connection = new HttpConnection(this.url, httpConnectionOptions);
          return HubConnection.create(connection, this.logger || NullLogger.instance, this.protocol || new JsonHubProtocol(), this.reconnectPolicy, this._serverTimeoutInMilliseconds, this._keepAliveIntervalInMilliseconds, this._statefulReconnectBufferSize);
        };
        return HubConnectionBuilder;
      }());
      function isLogger(logger) {
        return logger.log !== undefined;
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IConnection.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "9ce25Q2VltOEZFyvjSHNc5z", "IConnection", undefined); // Licensed to the .NET Foundation under one or more agreements.
      // The .NET Foundation licenses this file to you under the MIT license.
      /** @private */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IHttpConnectionOptions.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6f87b93RblAAr8msh2m5vzH", "IHttpConnectionOptions", undefined); // Licensed to the .NET Foundation under one or more agreements.
      // The .NET Foundation licenses this file to you under the MIT license.
      /** Options provided to the 'withUrl' method on {@link @microsoft/signalr.HubConnectionBuilder} to configure options for the HTTP-based transports. */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IHubProtocol.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "54efducdLFI2pC2jPhtqLLP", "IHubProtocol", undefined); // 已根據一個或多個協議授權給 .NET Foundation。
      // .NET Foundation 以 MIT 授權此檔案給您。
      /** 定義 Hub 訊息的類型。 */
      var MessageType = exports('MessageType', /*#__PURE__*/function (MessageType) {
        MessageType[MessageType["Invocation"] = 1] = "Invocation";
        MessageType[MessageType["StreamItem"] = 2] = "StreamItem";
        MessageType[MessageType["Completion"] = 3] = "Completion";
        MessageType[MessageType["StreamInvocation"] = 4] = "StreamInvocation";
        MessageType[MessageType["CancelInvocation"] = 5] = "CancelInvocation";
        MessageType[MessageType["Ping"] = 6] = "Ping";
        MessageType[MessageType["Close"] = 7] = "Close";
        MessageType[MessageType["Ack"] = 8] = "Ack";
        MessageType[MessageType["Sequence"] = 9] = "Sequence";
        return MessageType;
      }({}));

      /** 定義一個字典，使用字串為鍵和值，代表附加於 Hub 訊息的標頭。 */

      /** 所有已知 Hub 訊息的聯合類型。 */

      /** 定義所有 Hub 訊息共用的屬性。 */

      /** 定義所有與特定呼叫相關的 Hub 訊息共用的屬性。 */

      /** 表示非串流呼叫的 Hub 訊息。 */

      /** 表示串流呼叫的 Hub 訊息。 */

      /** 表示作為結果串流的一部分所產生的單一項目的 Hub 訊息。 */

      /** 表示呼叫結果的 Hub 訊息。 */

      /** 表示傳送者仍處於活動狀態的 Hub 訊息。 */

      /** 表示傳送者正在關閉連線的 Hub 訊息。
       *
       * 若 {@link @microsoft/signalr.CloseMessage.error} 被定義，表示傳送者因錯誤而關閉連線。
       */

      /** 用以請求取消串流呼叫的 Hub 訊息。 */

      /** 用於與 SignalR Hubs 通訊的協定抽象。  */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ILogger.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "81790/v+AhHop8cz+xSZRsW", "ILogger", undefined);
      // Licensed to the .NET Foundation under one or more agreements.
      // The .NET Foundation licenses this file to you under the MIT license.

      // These values are designed to match the ASP.NET Log Levels since that's the pattern we're emulating here.
      /** Indicates the severity of a log message.
       *
       * Log Levels are ordered in increasing severity. So `Debug` is more severe than `Trace`, etc.
       */
      var LogLevel = exports('LogLevel', /*#__PURE__*/function (LogLevel) {
        LogLevel[LogLevel["Trace"] = 0] = "Trace";
        LogLevel[LogLevel["Debug"] = 1] = "Debug";
        LogLevel[LogLevel["Information"] = 2] = "Information";
        LogLevel[LogLevel["Warning"] = 3] = "Warning";
        LogLevel[LogLevel["Error"] = 4] = "Error";
        LogLevel[LogLevel["Critical"] = 5] = "Critical";
        LogLevel[LogLevel["None"] = 6] = "None";
        return LogLevel;
      }({}));

      /** An abstraction that provides a sink for diagnostic messages. */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/index.ts", ['cc', './DefaultHttpClient.ts', './Errors.ts', './HttpClient.ts', './HubConnection.ts', './HubConnectionBuilder.ts', './IHubProtocol.ts', './ILogger.ts', './ITransport.ts', './JsonHubProtocol.ts', './Loggers.ts', './Subject.ts', './Utils2.ts', './pkg-version2.ts'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      exports('DefaultHttpClient', module.DefaultHttpClient);
    }, function (module) {
      var _setter = {};
      _setter.AbortError = module.AbortError;
      _setter.HttpError = module.HttpError;
      _setter.TimeoutError = module.TimeoutError;
      exports(_setter);
    }, function (module) {
      var _setter = {};
      _setter.HttpClient = module.HttpClient;
      _setter.HttpResponse = module.HttpResponse;
      exports(_setter);
    }, function (module) {
      var _setter = {};
      _setter.HubConnection = module.HubConnection;
      _setter.HubConnectionState = module.HubConnectionState;
      exports(_setter);
    }, function (module) {
      exports('HubConnectionBuilder', module.HubConnectionBuilder);
    }, function (module) {
      exports('MessageType', module.MessageType);
    }, function (module) {
      exports('LogLevel', module.LogLevel);
    }, function (module) {
      var _setter = {};
      _setter.HttpTransportType = module.HttpTransportType;
      _setter.TransferFormat = module.TransferFormat;
      exports(_setter);
    }, function (module) {
      exports('JsonHubProtocol', module.JsonHubProtocol);
    }, function (module) {
      exports('NullLogger', module.NullLogger);
    }, function (module) {
      exports('Subject', module.Subject);
    }, null, function (module) {
      exports('VERSION', module.VERSION);
    }],
    execute: function () {
      cclegacy._RF.push({}, "22a14COS8hNuZakKdTaLz0r", "index", undefined); // Licensed to the .NET Foundation under one or more agreements.
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/index2.ts", ['cc', './encode.ts', './decode.ts', './decodeAsync.ts', './Decoder.ts', './DecodeError.ts', './Encoder.ts', './ExtensionCodec.ts', './ExtData.ts', './timestamp.ts'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      exports('encode', module.encode);
    }, function (module) {
      var _setter = {};
      _setter.decode = module.decode;
      _setter.decodeMulti = module.decodeMulti;
      exports(_setter);
    }, function (module) {
      var _setter = {};
      _setter.decodeArrayStream = module.decodeArrayStream;
      _setter.decodeAsync = module.decodeAsync;
      _setter.decodeMultiStream = module.decodeMultiStream;
      exports(_setter);
    }, function (module) {
      exports('Decoder', module.Decoder);
    }, function (module) {
      exports('DecodeError', module.DecodeError);
    }, function (module) {
      exports('Encoder', module.Encoder);
    }, function (module) {
      exports('ExtensionCodec', module.ExtensionCodec);
    }, function (module) {
      exports('ExtData', module.ExtData);
    }, function (module) {
      var _setter = {};
      _setter.EXT_TIMESTAMP = module.EXT_TIMESTAMP;
      _setter.decodeTimestampExtension = module.decodeTimestampExtension;
      _setter.decodeTimestampToTimeSpec = module.decodeTimestampToTimeSpec;
      _setter.encodeDateToTimeSpec = module.encodeDateToTimeSpec;
      _setter.encodeTimeSpecToTimestamp = module.encodeTimeSpecToTimestamp;
      _setter.encodeTimestampExtension = module.encodeTimestampExtension;
      exports(_setter);
    }],
    execute: function () {
      cclegacy._RF.push({}, "b06fa8X721Mc7VoDtNg0m5i", "index", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/index3.ts", ['cc', './pkg-version.ts', './MessagePackHubProtocol.ts'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      exports('VERSION', module.VERSION);
    }, function (module) {
      exports('MessagePackHubProtocol', module.MessagePackHubProtocol);
    }],
    execute: function () {
      cclegacy._RF.push({}, "df210IOOMRGMo3qzgYid12e", "index", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/InitData.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "88225ergSNCzLgaoqBs0+Rv", "InitData", undefined);
      var InitData = exports('InitData', function InitData(data) {
        this.backGround = void 0;
        this.table = void 0;
        this.streamer = void 0;
        this.poker = void 0;
        this.backGround = data.backGround;
        this.table = data.table;
        this.streamer = data.streamer;
        this.poker = data.poker;
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/int.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports({
        getInt64: getInt64,
        getUint64: getUint64,
        setInt64: setInt64,
        setUint64: setUint64
      });
      cclegacy._RF.push({}, "f4b8fnLpDFNFqsCf/xvXxuE", "int", undefined);
      // Integer Utility

      var UINT32_MAX = exports('UINT32_MAX', 0xffffffff);

      // DataView extension to handle int64 / uint64,
      // where the actual range is 53-bits integer (a.k.a. safe integer)

      function setUint64(view, offset, value) {
        var high = value / 0x100000000;
        var low = value; // high bits are truncated by DataView
        view.setUint32(offset, high);
        view.setUint32(offset + 4, low);
      }
      function setInt64(view, offset, value) {
        var high = Math.floor(value / 0x100000000);
        var low = value; // high bits are truncated by DataView
        view.setUint32(offset, high);
        view.setUint32(offset + 4, low);
      }
      function getInt64(view, offset) {
        var high = view.getInt32(offset);
        var low = view.getUint32(offset + 4);
        return high * 0x100000000 + low;
      }
      function getUint64(view, offset) {
        var high = view.getUint32(offset);
        var low = view.getUint32(offset + 4);
        return high * 0x100000000 + low;
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IRetryPolicy.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "2bb1aYTjEBLHqO+z/zXlNQy", "IRetryPolicy", undefined); // Licensed to the .NET Foundation under one or more agreements.
      // The .NET Foundation licenses this file to you under the MIT license.
      /** An abstraction that controls when the client attempts to reconnect and how many times it does so. */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IStatefulReconnectOptions.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "86de4zD9mJLYJZILICuYSBv", "IStatefulReconnectOptions", undefined); // Licensed to the .NET Foundation under one or more agreements.
      // The .NET Foundation licenses this file to you under the MIT license.
      /** Options provided to the 'withStatefulReconnect' method on {@link @microsoft/signalr.HubConnectionBuilder} to configure options for Stateful Reconnect. */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ITransport.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "18d77li9eZGKpi9J8XBSTEC", "ITransport", undefined);
      // Licensed to the .NET Foundation under one or more agreements.
      // The .NET Foundation licenses this file to you under the MIT license.

      // This will be treated as a bit flag in the future, so we keep it using power-of-two values.
      /** Specifies a specific HTTP transport type. */
      var HttpTransportType = exports('HttpTransportType', /*#__PURE__*/function (HttpTransportType) {
        HttpTransportType[HttpTransportType["None"] = 0] = "None";
        HttpTransportType[HttpTransportType["WebSockets"] = 1] = "WebSockets";
        HttpTransportType[HttpTransportType["ServerSentEvents"] = 2] = "ServerSentEvents";
        HttpTransportType[HttpTransportType["LongPolling"] = 4] = "LongPolling";
        return HttpTransportType;
      }({}));

      /** Specifies the transfer format for a connection. */
      var TransferFormat = exports('TransferFormat', /*#__PURE__*/function (TransferFormat) {
        TransferFormat[TransferFormat["Text"] = 1] = "Text";
        TransferFormat[TransferFormat["Binary"] = 2] = "Binary";
        return TransferFormat;
      }({}));

      /** An abstraction over the behavior of transports. This is designed to support the framework and not intended for use by applications. */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/JsonHubProtocol.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './IHubProtocol.ts', './ILogger.ts', './ITransport.ts', './Loggers.ts', './TextMessageFormat.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy, MessageType, LogLevel, TransferFormat, NullLogger, TextMessageFormat;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      MessageType = module.MessageType;
    }, function (module) {
      LogLevel = module.LogLevel;
    }, function (module) {
      TransferFormat = module.TransferFormat;
    }, function (module) {
      NullLogger = module.NullLogger;
    }, function (module) {
      TextMessageFormat = module.TextMessageFormat;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ab17fuKSSpCCLK85a92VpuD", "JsonHubProtocol", undefined);
      var JSON_HUB_PROTOCOL_NAME = "json";

      /** Implements the JSON Hub Protocol. */
      var JsonHubProtocol = exports('JsonHubProtocol', /*#__PURE__*/function () {
        function JsonHubProtocol() {
          /** @inheritDoc */
          this.name = JSON_HUB_PROTOCOL_NAME;
          /** @inheritDoc */
          this.version = 2;
          /** @inheritDoc */
          this.transferFormat = TransferFormat.Text;
        }
        var _proto = JsonHubProtocol.prototype;
        /** Creates an array of {@link @microsoft/signalr.HubMessage} objects from the specified serialized representation.
         *
         * @param {string} input A string containing the serialized representation.
         * @param {ILogger} logger A logger that will be used to log messages that occur during parsing.
         */
        _proto.parseMessages = function parseMessages(input, logger) {
          // The interface does allow "ArrayBuffer" to be passed in, but this implementation does not. So let's throw a useful error.
          if (typeof input !== "string") {
            throw new Error("Invalid input for JSON hub protocol. Expected a string.");
          }
          if (!input) {
            return [];
          }
          if (logger === null) {
            logger = NullLogger.instance;
          }

          // Parse the messages
          var messages = TextMessageFormat.parse(input);
          var hubMessages = [];
          for (var _iterator = _createForOfIteratorHelperLoose(messages), _step; !(_step = _iterator()).done;) {
            var message = _step.value;
            var parsedMessage = JSON.parse(message);
            if (typeof parsedMessage.type !== "number") {
              throw new Error("Invalid payload.");
            }
            switch (parsedMessage.type) {
              case MessageType.Invocation:
                this._isInvocationMessage(parsedMessage);
                break;
              case MessageType.StreamItem:
                this._isStreamItemMessage(parsedMessage);
                break;
              case MessageType.Completion:
                this._isCompletionMessage(parsedMessage);
                break;
              case MessageType.Ping:
                // Single value, no need to validate
                break;
              case MessageType.Close:
                // All optional values, no need to validate
                break;
              case MessageType.Ack:
                this._isAckMessage(parsedMessage);
                break;
              case MessageType.Sequence:
                this._isSequenceMessage(parsedMessage);
                break;
              default:
                // Future protocol changes can add message types, old clients can ignore them
                logger.log(LogLevel.Information, "Unknown message type '" + parsedMessage.type + "' ignored.");
                continue;
            }
            hubMessages.push(parsedMessage);
          }
          return hubMessages;
        }

        /** Writes the specified {@link @microsoft/signalr.HubMessage} to a string and returns it.
         *
         * @param {HubMessage} message The message to write.
         * @returns {string} A string containing the serialized representation of the message.
         */;
        _proto.writeMessage = function writeMessage(message) {
          return TextMessageFormat.write(JSON.stringify(message));
        };
        _proto._isInvocationMessage = function _isInvocationMessage(message) {
          this._assertNotEmptyString(message.target, "Invalid payload for Invocation message.");
          if (message.invocationId !== undefined) {
            this._assertNotEmptyString(message.invocationId, "Invalid payload for Invocation message.");
          }
        };
        _proto._isStreamItemMessage = function _isStreamItemMessage(message) {
          this._assertNotEmptyString(message.invocationId, "Invalid payload for StreamItem message.");
          if (message.item === undefined) {
            throw new Error("Invalid payload for StreamItem message.");
          }
        };
        _proto._isCompletionMessage = function _isCompletionMessage(message) {
          if (message.result && message.error) {
            throw new Error("Invalid payload for Completion message.");
          }
          if (!message.result && message.error) {
            this._assertNotEmptyString(message.error, "Invalid payload for Completion message.");
          }
          this._assertNotEmptyString(message.invocationId, "Invalid payload for Completion message.");
        };
        _proto._isAckMessage = function _isAckMessage(message) {
          if (typeof message.sequenceId !== 'number') {
            throw new Error("Invalid SequenceId for Ack message.");
          }
        };
        _proto._isSequenceMessage = function _isSequenceMessage(message) {
          if (typeof message.sequenceId !== 'number') {
            throw new Error("Invalid SequenceId for Sequence message.");
          }
        };
        _proto._assertNotEmptyString = function _assertNotEmptyString(value, errorMessage) {
          if (typeof value !== "string" || value === "") {
            throw new Error(errorMessage);
          }
        };
        return JsonHubProtocol;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Loggers.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "02429nZXlhLVKQ9P2ytswTT", "Loggers", undefined); // Licensed to the .NET Foundation under one or more agreements.
      // The .NET Foundation licenses this file to you under the MIT license.
      /** A logger that does nothing when log messages are sent to it. */
      var NullLogger = exports('NullLogger', /*#__PURE__*/function () {
        function NullLogger() {}

        /** @inheritDoc */
        // eslint-disable-next-line
        var _proto = NullLogger.prototype;
        _proto.log = function log(_logLevel, _message) {};
        return NullLogger;
      }());
      _class = NullLogger;
      /** The singleton instance of the {@link @microsoft/signalr.NullLogger}. */
      NullLogger.instance = new _class();
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LongPollingTransport.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AbortController.ts', './Errors.ts', './ILogger.ts', './ITransport.ts', './Utils2.ts'], function (exports) {
  var _createClass, _asyncToGenerator, _regeneratorRuntime, _extends, cclegacy, AbortController, HttpError, TimeoutError, LogLevel, TransferFormat, getUserAgentHeader, Arg, getDataDetail, sendMessage;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      AbortController = module.AbortController;
    }, function (module) {
      HttpError = module.HttpError;
      TimeoutError = module.TimeoutError;
    }, function (module) {
      LogLevel = module.LogLevel;
    }, function (module) {
      TransferFormat = module.TransferFormat;
    }, function (module) {
      getUserAgentHeader = module.getUserAgentHeader;
      Arg = module.Arg;
      getDataDetail = module.getDataDetail;
      sendMessage = module.sendMessage;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c6b3bX46rhCHbTVc5akKYBS", "LongPollingTransport", undefined);
      // Not exported from 'index', this type is internal.
      /** @private */
      var LongPollingTransport = exports('LongPollingTransport', /*#__PURE__*/function () {
        function LongPollingTransport(httpClient, logger, options) {
          this._httpClient = void 0;
          this._logger = void 0;
          this._options = void 0;
          this._pollAbort = void 0;
          this._url = void 0;
          this._running = void 0;
          this._receiving = void 0;
          this._closeError = void 0;
          this.onreceive = void 0;
          this.onclose = void 0;
          this._httpClient = httpClient;
          this._logger = logger;
          this._pollAbort = new AbortController();
          this._options = options;
          this._running = false;
          this.onreceive = null;
          this.onclose = null;
        }
        var _proto = LongPollingTransport.prototype;
        _proto.connect = /*#__PURE__*/function () {
          var _connect = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url, transferFormat) {
            var _extends2;
            var _getUserAgentHeader, name, value, headers, pollOptions, pollUrl, response;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  Arg.isRequired(url, "url");
                  Arg.isRequired(transferFormat, "transferFormat");
                  Arg.isIn(transferFormat, TransferFormat, "transferFormat");
                  this._url = url;
                  this._logger.log(LogLevel.Trace, "(LongPolling transport) Connecting.");

                  // Allow binary format on Node and Browsers that support binary content (indicated by the presence of responseType property)
                  if (!(transferFormat === TransferFormat.Binary && typeof XMLHttpRequest !== "undefined" && typeof new XMLHttpRequest().responseType !== "string")) {
                    _context.next = 7;
                    break;
                  }
                  throw new Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");
                case 7:
                  _getUserAgentHeader = getUserAgentHeader(), name = _getUserAgentHeader[0], value = _getUserAgentHeader[1];
                  headers = _extends((_extends2 = {}, _extends2[name] = value, _extends2), this._options.headers);
                  pollOptions = {
                    abortSignal: this._pollAbort.signal,
                    headers: headers,
                    timeout: 100000,
                    withCredentials: this._options.withCredentials
                  };
                  if (transferFormat === TransferFormat.Binary) {
                    pollOptions.responseType = "arraybuffer";
                  }

                  // Make initial long polling request
                  // Server uses first long polling request to finish initializing connection and it returns without data
                  pollUrl = url + "&_=" + Date.now();
                  this._logger.log(LogLevel.Trace, "(LongPolling transport) polling: " + pollUrl + ".");
                  _context.next = 15;
                  return this._httpClient.get(pollUrl, pollOptions);
                case 15:
                  response = _context.sent;
                  if (response.statusCode !== 200) {
                    this._logger.log(LogLevel.Error, "(LongPolling transport) Unexpected response code: " + response.statusCode + ".");

                    // Mark running as false so that the poll immediately ends and runs the close logic
                    this._closeError = new HttpError(response.statusText || "", response.statusCode);
                    this._running = false;
                  } else {
                    this._running = true;
                  }
                  this._receiving = this._poll(this._url, pollOptions);
                case 18:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function connect(_x, _x2) {
            return _connect.apply(this, arguments);
          }
          return connect;
        }();
        _proto._poll = /*#__PURE__*/function () {
          var _poll2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(url, pollOptions) {
            var pollUrl, response;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                case 1:
                  if (!this._running) {
                    _context2.next = 16;
                    break;
                  }
                  _context2.prev = 2;
                  pollUrl = url + "&_=" + Date.now();
                  this._logger.log(LogLevel.Trace, "(LongPolling transport) polling: " + pollUrl + ".");
                  _context2.next = 7;
                  return this._httpClient.get(pollUrl, pollOptions);
                case 7:
                  response = _context2.sent;
                  if (response.statusCode === 204) {
                    this._logger.log(LogLevel.Information, "(LongPolling transport) Poll terminated by server.");
                    this._running = false;
                  } else if (response.statusCode !== 200) {
                    this._logger.log(LogLevel.Error, "(LongPolling transport) Unexpected response code: " + response.statusCode + ".");

                    // Unexpected status code
                    this._closeError = new HttpError(response.statusText || "", response.statusCode);
                    this._running = false;
                  } else {
                    // Process the response
                    if (response.content) {
                      this._logger.log(LogLevel.Trace, "(LongPolling transport) data received. " + getDataDetail(response.content, this._options.logMessageContent) + ".");
                      if (this.onreceive) {
                        this.onreceive(response.content);
                      }
                    } else {
                      // This is another way timeout manifest.
                      this._logger.log(LogLevel.Trace, "(LongPolling transport) Poll timed out, reissuing.");
                    }
                  }
                  _context2.next = 14;
                  break;
                case 11:
                  _context2.prev = 11;
                  _context2.t0 = _context2["catch"](2);
                  if (!this._running) {
                    // Log but disregard errors that occur after stopping
                    this._logger.log(LogLevel.Trace, "(LongPolling transport) Poll errored after shutdown: " + _context2.t0.message);
                  } else {
                    if (_context2.t0 instanceof TimeoutError) {
                      // Ignore timeouts and reissue the poll.
                      this._logger.log(LogLevel.Trace, "(LongPolling transport) Poll timed out, reissuing.");
                    } else {
                      // Close the connection with the error as the result.
                      this._closeError = _context2.t0;
                      this._running = false;
                    }
                  }
                case 14:
                  _context2.next = 1;
                  break;
                case 16:
                  _context2.prev = 16;
                  this._logger.log(LogLevel.Trace, "(LongPolling transport) Polling complete.");

                  // We will reach here with pollAborted==false when the server returned a response causing the transport to stop.
                  // If pollAborted==true then client initiated the stop and the stop method will raise the close event after DELETE is sent.
                  if (!this.pollAborted) {
                    this._raiseOnClose();
                  }
                  return _context2.finish(16);
                case 20:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this, [[0,, 16, 20], [2, 11]]);
          }));
          function _poll(_x3, _x4) {
            return _poll2.apply(this, arguments);
          }
          return _poll;
        }();
        _proto.send = /*#__PURE__*/function () {
          var _send = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(data) {
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  if (this._running) {
                    _context3.next = 2;
                    break;
                  }
                  return _context3.abrupt("return", Promise.reject(new Error("Cannot send until the transport is connected")));
                case 2:
                  return _context3.abrupt("return", sendMessage(this._logger, "LongPolling", this._httpClient, this._url, data, this._options));
                case 3:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function send(_x5) {
            return _send.apply(this, arguments);
          }
          return send;
        }();
        _proto.stop = /*#__PURE__*/function () {
          var _stop = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            var headers, _getUserAgentHeader2, name, value, deleteOptions, _error;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  this._logger.log(LogLevel.Trace, "(LongPolling transport) Stopping polling.");

                  // Tell receiving loop to stop, abort any current request, and then wait for it to finish
                  this._running = false;
                  this._pollAbort.abort();
                  _context4.prev = 3;
                  _context4.next = 6;
                  return this._receiving;
                case 6:
                  // Send DELETE to clean up long polling on the server
                  this._logger.log(LogLevel.Trace, "(LongPolling transport) sending DELETE request to " + this._url + ".");
                  headers = {};
                  _getUserAgentHeader2 = getUserAgentHeader(), name = _getUserAgentHeader2[0], value = _getUserAgentHeader2[1];
                  headers[name] = value;
                  deleteOptions = {
                    headers: _extends({}, headers, this._options.headers),
                    timeout: this._options.timeout,
                    withCredentials: this._options.withCredentials
                  };
                  _context4.prev = 11;
                  _context4.next = 14;
                  return this._httpClient["delete"](this._url, deleteOptions);
                case 14:
                  _context4.next = 19;
                  break;
                case 16:
                  _context4.prev = 16;
                  _context4.t0 = _context4["catch"](11);
                  _error = _context4.t0;
                case 19:
                  if (_error) {
                    if (_error instanceof HttpError) {
                      if (_error.statusCode === 404) {
                        this._logger.log(LogLevel.Trace, "(LongPolling transport) A 404 response was returned from sending a DELETE request.");
                      } else {
                        this._logger.log(LogLevel.Trace, "(LongPolling transport) Error sending a DELETE request: " + _error);
                      }
                    }
                  } else {
                    this._logger.log(LogLevel.Trace, "(LongPolling transport) DELETE request accepted.");
                  }
                case 20:
                  _context4.prev = 20;
                  this._logger.log(LogLevel.Trace, "(LongPolling transport) Stop finished.");

                  // Raise close event here instead of in polling
                  // It needs to happen after the DELETE request is sent
                  this._raiseOnClose();
                  return _context4.finish(20);
                case 24:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this, [[3,, 20, 24], [11, 16]]);
          }));
          function stop() {
            return _stop.apply(this, arguments);
          }
          return stop;
        }();
        _proto._raiseOnClose = function _raiseOnClose() {
          if (this.onclose) {
            var logMessage = "(LongPolling transport) Firing onclose event.";
            if (this._closeError) {
              logMessage += " Error: " + this._closeError;
            }
            this._logger.log(LogLevel.Trace, logMessage);
            this.onclose(this._closeError);
          }
        };
        _createClass(LongPollingTransport, [{
          key: "pollAborted",
          get:
          // This is an internal type, not exported from 'index' so this is really just internal.
          function get() {
            return this._pollAbort.aborted;
          }
        }]);
        return LongPollingTransport;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./Request.ts', './RequestData.ts', './ResponseData.ts', './BuildPlayListUseCase.ts', './PlayRoundUseCase.ts', './CommonValue.ts', './CardCodec.ts', './Deck.ts', './Hand.ts', './ProcessStateResolver.ts', './ReqResultData.ts', './ResultClassifier.ts', './Rules.ts', './SimulatedServerStatus.ts', './types.ts', './BundleMng.ts', './EventMsg.ts', './GameMng.ts', './MusicMng.ts', './PokerMng.ts', './SignalRMng.ts', './WEBMMng.ts', './WebSocketMng.ts', './BasePoker.ts', './CardBoxWall.ts', './PokerAnimationEvent.ts', './PokerBox.ts', './PokerCollider.ts', './PokerLayout.ts', './RecycleWall.ts', './Recycles.ts', './GameConfig.ts', './InitData.ts', './GameViewModel.ts', './VideoComponent.ts', './WebmClipMap.ts', './AbortController.ts', './AccessTokenHttpClient.ts', './DefaultHttpClient.ts', './DefaultReconnectPolicy.ts', './Errors.ts', './FetchHttpClient.ts', './HandshakeProtocol.ts', './HeaderNames.ts', './HttpClient.ts', './HttpConnection.ts', './HubConnection.ts', './HubConnectionBuilder.ts', './IConnection.ts', './IHttpConnectionOptions.ts', './IHubProtocol.ts', './ILogger.ts', './IRetryPolicy.ts', './IStatefulReconnectOptions.ts', './ITransport.ts', './JsonHubProtocol.ts', './Loggers.ts', './LongPollingTransport.ts', './MessageBuffer.ts', './Polyfills.ts', './ServerSentEventsTransport.ts', './Stream2.ts', './Subject.ts', './TextMessageFormat.ts', './Utils2.ts', './WebSocketTransport.ts', './XhrHttpClient.ts', './browser-index2.ts', './index.ts', './pkg-version2.ts', './SignalR.ts', './CachedKeyDecoder.ts', './DecodeError.ts', './Decoder.ts', './Encoder.ts', './ExtData.ts', './ExtensionCodec.ts', './context.ts', './decode.ts', './decodeAsync.ts', './encode.ts', './index2.ts', './timestamp.ts', './int.ts', './prettyByte.ts', './stream.ts', './typedArrays.ts', './utf8.ts', './BinaryMessageFormat.ts', './MessagePackHubProtocol.ts', './MessagePackOptions.ts', './Utils.ts', './browser-index.ts', './index3.ts', './pkg-version.ts', './aniStop.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/MessageBuffer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './IHubProtocol.ts', './Utils2.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, MessageType, isArrayBuffer;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      MessageType = module.MessageType;
    }, function (module) {
      isArrayBuffer = module.isArrayBuffer;
    }],
    execute: function () {
      cclegacy._RF.push({}, "8744cBN6AZKuYYTJOFaJtZj", "MessageBuffer", undefined); // Licensed to the .NET Foundation under one or more agreements.

      /** @private */
      var MessageBuffer = exports('MessageBuffer', /*#__PURE__*/function () {
        function MessageBuffer(protocol, connection, bufferSize) {
          this._protocol = void 0;
          this._connection = void 0;
          this._bufferSize = 100000;
          this._messages = [];
          this._totalMessageCount = 0;
          this._waitForSequenceMessage = false;
          // Message IDs start at 1 and always increment by 1
          this._nextReceivingSequenceId = 1;
          this._latestReceivedSequenceId = 0;
          this._bufferedByteCount = 0;
          this._reconnectInProgress = false;
          this._ackTimerHandle = void 0;
          this._protocol = protocol;
          this._connection = connection;
          this._bufferSize = bufferSize;
        }
        var _proto = MessageBuffer.prototype;
        _proto._send = /*#__PURE__*/function () {
          var _send2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(message) {
            var serializedMessage, backpressurePromise, backpressurePromiseResolver, backpressurePromiseRejector;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  serializedMessage = this._protocol.writeMessage(message);
                  backpressurePromise = Promise.resolve(); // Only count invocation messages. Acks, pings, etc. don't need to be resent on reconnect
                  if (this._isInvocationMessage(message)) {
                    this._totalMessageCount++;
                    backpressurePromiseResolver = function backpressurePromiseResolver() {};
                    backpressurePromiseRejector = function backpressurePromiseRejector() {};
                    if (isArrayBuffer(serializedMessage)) {
                      this._bufferedByteCount += serializedMessage.byteLength;
                    } else {
                      this._bufferedByteCount += serializedMessage.length;
                    }
                    if (this._bufferedByteCount >= this._bufferSize) {
                      backpressurePromise = new Promise(function (resolve, reject) {
                        backpressurePromiseResolver = resolve;
                        backpressurePromiseRejector = reject;
                      });
                    }
                    this._messages.push(new BufferedItem(serializedMessage, this._totalMessageCount, backpressurePromiseResolver, backpressurePromiseRejector));
                  }
                  _context.prev = 3;
                  if (this._reconnectInProgress) {
                    _context.next = 7;
                    break;
                  }
                  _context.next = 7;
                  return this._connection.send(serializedMessage);
                case 7:
                  _context.next = 12;
                  break;
                case 9:
                  _context.prev = 9;
                  _context.t0 = _context["catch"](3);
                  this._disconnected();
                case 12:
                  _context.next = 14;
                  return backpressurePromise;
                case 14:
                case "end":
                  return _context.stop();
              }
            }, _callee, this, [[3, 9]]);
          }));
          function _send(_x) {
            return _send2.apply(this, arguments);
          }
          return _send;
        }();
        _proto._ack = function _ack(ackMessage) {
          var newestAckedMessage = -1;

          // Find index of newest message being acked
          for (var index = 0; index < this._messages.length; index++) {
            var element = this._messages[index];
            if (element._id <= ackMessage.sequenceId) {
              newestAckedMessage = index;
              if (isArrayBuffer(element._message)) {
                this._bufferedByteCount -= element._message.byteLength;
              } else {
                this._bufferedByteCount -= element._message.length;
              }
              // resolve items that have already been sent and acked
              element._resolver();
            } else if (this._bufferedByteCount < this._bufferSize) {
              // resolve items that now fall under the buffer limit but haven't been acked
              element._resolver();
            } else {
              break;
            }
          }
          if (newestAckedMessage !== -1) {
            // We're removing everything including the message pointed to, so add 1
            this._messages = this._messages.slice(newestAckedMessage + 1);
          }
        };
        _proto._shouldProcessMessage = function _shouldProcessMessage(message) {
          if (this._waitForSequenceMessage) {
            if (message.type !== MessageType.Sequence) {
              return false;
            } else {
              this._waitForSequenceMessage = false;
              return true;
            }
          }

          // No special processing for acks, pings, etc.
          if (!this._isInvocationMessage(message)) {
            return true;
          }
          var currentId = this._nextReceivingSequenceId;
          this._nextReceivingSequenceId++;
          if (currentId <= this._latestReceivedSequenceId) {
            if (currentId === this._latestReceivedSequenceId) {
              // Should only hit this if we just reconnected and the server is sending
              // Messages it has buffered, which would mean it hasn't seen an Ack for these messages
              this._ackTimer();
            }
            // Ignore, this is a duplicate message
            return false;
          }
          this._latestReceivedSequenceId = currentId;

          // Only start the timer for sending an Ack message when we have a message to ack. This also conveniently solves
          // timer throttling by not having a recursive timer, and by starting the timer via a network call (recv)
          this._ackTimer();
          return true;
        };
        _proto._resetSequence = function _resetSequence(message) {
          if (message.sequenceId > this._nextReceivingSequenceId) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this._connection.stop(new Error("Sequence ID greater than amount of messages we've received."));
            return;
          }
          this._nextReceivingSequenceId = message.sequenceId;
        };
        _proto._disconnected = function _disconnected() {
          this._reconnectInProgress = true;
          this._waitForSequenceMessage = true;
        };
        _proto._resend = /*#__PURE__*/function () {
          var _resend2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var sequenceId, messages, _iterator, _step, element;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  sequenceId = this._messages.length !== 0 ? this._messages[0]._id : this._totalMessageCount + 1;
                  _context2.next = 3;
                  return this._connection.send(this._protocol.writeMessage({
                    type: MessageType.Sequence,
                    sequenceId: sequenceId
                  }));
                case 3:
                  // Get a local variable to the _messages, just in case messages are acked while resending
                  // Which would slice the _messages array (which creates a new copy)
                  messages = this._messages;
                  _iterator = _createForOfIteratorHelperLoose(messages);
                case 5:
                  if ((_step = _iterator()).done) {
                    _context2.next = 11;
                    break;
                  }
                  element = _step.value;
                  _context2.next = 9;
                  return this._connection.send(element._message);
                case 9:
                  _context2.next = 5;
                  break;
                case 11:
                  this._reconnectInProgress = false;
                case 12:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function _resend() {
            return _resend2.apply(this, arguments);
          }
          return _resend;
        }();
        _proto._dispose = function _dispose(error) {
          var _error;
          (_error = error) != null ? _error : error = new Error("Unable to reconnect to server.");

          // Unblock backpressure if any
          for (var _iterator2 = _createForOfIteratorHelperLoose(this._messages), _step2; !(_step2 = _iterator2()).done;) {
            var element = _step2.value;
            element._rejector(error);
          }
        };
        _proto._isInvocationMessage = function _isInvocationMessage(message) {
          // There is no way to check if something implements an interface.
          // So we individually check the messages in a switch statement.
          // To make sure we don't miss any message types we rely on the compiler
          // seeing the function returns a value and it will do the
          // exhaustive check for us on the switch statement, since we don't use 'case default'
          switch (message.type) {
            case MessageType.Invocation:
            case MessageType.StreamItem:
            case MessageType.Completion:
            case MessageType.StreamInvocation:
            case MessageType.CancelInvocation:
              return true;
            case MessageType.Close:
            case MessageType.Sequence:
            case MessageType.Ping:
            case MessageType.Ack:
              return false;
          }
        };
        _proto._ackTimer = function _ackTimer() {
          var _this = this;
          if (this._ackTimerHandle === undefined) {
            this._ackTimerHandle = setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.prev = 0;
                    if (_this._reconnectInProgress) {
                      _context3.next = 4;
                      break;
                    }
                    _context3.next = 4;
                    return _this._connection.send(_this._protocol.writeMessage({
                      type: MessageType.Ack,
                      sequenceId: _this._latestReceivedSequenceId
                    }));
                  case 4:
                    _context3.next = 8;
                    break;
                  case 6:
                    _context3.prev = 6;
                    _context3.t0 = _context3["catch"](0);
                  case 8:
                    clearTimeout(_this._ackTimerHandle);
                    _this._ackTimerHandle = undefined;
                  // 1 second delay so we don't spam Ack messages if there are many messages being received at once.
                  case 10:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, null, [[0, 6]]);
            })), 1000);
          }
        };
        return MessageBuffer;
      }());
      var BufferedItem = function BufferedItem(message, id, resolver, rejector) {
        this._message = void 0;
        this._id = void 0;
        this._resolver = void 0;
        this._rejector = void 0;
        this._message = message;
        this._id = id;
        this._resolver = resolver;
        this._rejector = rejector;
      };
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MessagePackHubProtocol.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index2.ts', './index.ts', './BinaryMessageFormat.ts', './Utils.ts', './IHubProtocol.ts', './ILogger.ts', './ITransport.ts', './Encoder.ts', './Decoder.ts', './Loggers.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy, BinaryMessageFormat, isArrayBuffer, MessageType, LogLevel, TransferFormat, Encoder, Decoder, NullLogger;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, null, null, function (module) {
      BinaryMessageFormat = module.BinaryMessageFormat;
    }, function (module) {
      isArrayBuffer = module.isArrayBuffer;
    }, function (module) {
      MessageType = module.MessageType;
    }, function (module) {
      LogLevel = module.LogLevel;
    }, function (module) {
      TransferFormat = module.TransferFormat;
    }, function (module) {
      Encoder = module.Encoder;
    }, function (module) {
      Decoder = module.Decoder;
    }, function (module) {
      NullLogger = module.NullLogger;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0f478M+c6NMOIheB/ngC5qW", "MessagePackHubProtocol", undefined);

      // TypeDoc's @inheritDoc and @link don't work across modules :(

      // constant encoding of the ping message
      // see: https://github.com/aspnet/SignalR/blob/dev/specs/HubProtocol.md#ping-message-encoding-1
      // Don't use Uint8Array.from as IE does not support it
      var SERIALIZED_PING_MESSAGE = new Uint8Array([0x91, MessageType.Ping]);

      /** Implements the MessagePack Hub Protocol */
      var MessagePackHubProtocol = exports('MessagePackHubProtocol', /*#__PURE__*/function () {
        /**
         *
         * @param messagePackOptions MessagePack options passed to @msgpack/msgpack
         */
        function MessagePackHubProtocol(messagePackOptions) {
          /** The name of the protocol. This is used by SignalR to resolve the protocol between the client and server. */
          this.name = "messagepack";
          /** The version of the protocol. */
          this.version = 2;
          /** The TransferFormat of the protocol. */
          this.transferFormat = TransferFormat.Binary;
          this._errorResult = 1;
          this._voidResult = 2;
          this._nonVoidResult = 3;
          this._encoder = void 0;
          this._decoder = void 0;
          messagePackOptions = messagePackOptions || {};
          this._encoder = new Encoder(messagePackOptions.extensionCodec, messagePackOptions.context, messagePackOptions.maxDepth, messagePackOptions.initialBufferSize, messagePackOptions.sortKeys, messagePackOptions.forceFloat32, messagePackOptions.ignoreUndefined, messagePackOptions.forceIntegerToFloat);
          this._decoder = new Decoder(messagePackOptions.extensionCodec, messagePackOptions.context, messagePackOptions.maxStrLength, messagePackOptions.maxBinLength, messagePackOptions.maxArrayLength, messagePackOptions.maxMapLength, messagePackOptions.maxExtLength);
        }

        /** Creates an array of HubMessage objects from the specified serialized representation.
         *
         * @param {ArrayBuffer} input An ArrayBuffer containing the serialized representation.
         * @param {ILogger} logger A logger that will be used to log messages that occur during parsing.
         */
        var _proto = MessagePackHubProtocol.prototype;
        _proto.parseMessages = function parseMessages(input, logger) {
          // The interface does allow "string" to be passed in, but this implementation does not. So let's throw a useful error.
          if (!isArrayBuffer(input)) {
            throw new Error("Invalid input for MessagePack hub protocol. Expected an ArrayBuffer.");
          }
          if (logger === null) {
            logger = NullLogger.instance;
          }
          var messages = BinaryMessageFormat.parse(input);
          var hubMessages = [];
          for (var _iterator = _createForOfIteratorHelperLoose(messages), _step; !(_step = _iterator()).done;) {
            var message = _step.value;
            var parsedMessage = this._parseMessage(message, logger);
            // Can be null for an unknown message. Unknown message is logged in parseMessage
            if (parsedMessage) {
              hubMessages.push(parsedMessage);
            }
          }
          return hubMessages;
        }

        /** Writes the specified HubMessage to an ArrayBuffer and returns it.
         *
         * @param {HubMessage} message The message to write.
         * @returns {ArrayBuffer} An ArrayBuffer containing the serialized representation of the message.
         */;
        _proto.writeMessage = function writeMessage(message) {
          switch (message.type) {
            case MessageType.Invocation:
              return this._writeInvocation(message);
            case MessageType.StreamInvocation:
              return this._writeStreamInvocation(message);
            case MessageType.StreamItem:
              return this._writeStreamItem(message);
            case MessageType.Completion:
              return this._writeCompletion(message);
            case MessageType.Ping:
              return BinaryMessageFormat.write(SERIALIZED_PING_MESSAGE);
            case MessageType.CancelInvocation:
              return this._writeCancelInvocation(message);
            case MessageType.Close:
              return this._writeClose();
            case MessageType.Ack:
              return this._writeAck(message);
            case MessageType.Sequence:
              return this._writeSequence(message);
            default:
              throw new Error("Invalid message type.");
          }
        };
        _proto._parseMessage = function _parseMessage(input, logger) {
          if (input.length === 0) {
            throw new Error("Invalid payload.");
          }
          var properties = this._decoder.decode(input);
          if (properties.length === 0 || !(properties instanceof Array)) {
            throw new Error("Invalid payload.");
          }
          var messageType = properties[0];
          switch (messageType) {
            case MessageType.Invocation:
              return this._createInvocationMessage(this._readHeaders(properties), properties);
            case MessageType.StreamItem:
              return this._createStreamItemMessage(this._readHeaders(properties), properties);
            case MessageType.Completion:
              return this._createCompletionMessage(this._readHeaders(properties), properties);
            case MessageType.Ping:
              return this._createPingMessage(properties);
            case MessageType.Close:
              return this._createCloseMessage(properties);
            case MessageType.Ack:
              return this._createAckMessage(properties);
            case MessageType.Sequence:
              return this._createSequenceMessage(properties);
            default:
              // Future protocol changes can add message types, old clients can ignore them
              logger.log(LogLevel.Information, "Unknown message type '" + messageType + "' ignored.");
              return null;
          }
        };
        _proto._createCloseMessage = function _createCloseMessage(properties) {
          // check minimum length to allow protocol to add items to the end of objects in future releases
          if (properties.length < 2) {
            throw new Error("Invalid payload for Close message.");
          }
          return {
            // Close messages have no headers.
            allowReconnect: properties.length >= 3 ? properties[2] : undefined,
            error: properties[1],
            type: MessageType.Close
          };
        };
        _proto._createPingMessage = function _createPingMessage(properties) {
          // check minimum length to allow protocol to add items to the end of objects in future releases
          if (properties.length < 1) {
            throw new Error("Invalid payload for Ping message.");
          }
          return {
            // Ping messages have no headers.
            type: MessageType.Ping
          };
        };
        _proto._createInvocationMessage = function _createInvocationMessage(headers, properties) {
          // check minimum length to allow protocol to add items to the end of objects in future releases
          if (properties.length < 5) {
            throw new Error("Invalid payload for Invocation message.");
          }
          var invocationId = properties[2];
          if (invocationId) {
            return {
              arguments: properties[4],
              headers: headers,
              invocationId: invocationId,
              streamIds: [],
              target: properties[3],
              type: MessageType.Invocation
            };
          } else {
            return {
              arguments: properties[4],
              headers: headers,
              streamIds: [],
              target: properties[3],
              type: MessageType.Invocation
            };
          }
        };
        _proto._createStreamItemMessage = function _createStreamItemMessage(headers, properties) {
          // check minimum length to allow protocol to add items to the end of objects in future releases
          if (properties.length < 4) {
            throw new Error("Invalid payload for StreamItem message.");
          }
          return {
            headers: headers,
            invocationId: properties[2],
            item: properties[3],
            type: MessageType.StreamItem
          };
        };
        _proto._createCompletionMessage = function _createCompletionMessage(headers, properties) {
          // check minimum length to allow protocol to add items to the end of objects in future releases
          if (properties.length < 4) {
            throw new Error("Invalid payload for Completion message.");
          }
          var resultKind = properties[3];
          if (resultKind !== this._voidResult && properties.length < 5) {
            throw new Error("Invalid payload for Completion message.");
          }
          var error;
          var result;
          switch (resultKind) {
            case this._errorResult:
              error = properties[4];
              break;
            case this._nonVoidResult:
              result = properties[4];
              break;
          }
          var completionMessage = {
            error: error,
            headers: headers,
            invocationId: properties[2],
            result: result,
            type: MessageType.Completion
          };
          return completionMessage;
        };
        _proto._createAckMessage = function _createAckMessage(properties) {
          // check minimum length to allow protocol to add items to the end of objects in future releases
          if (properties.length < 1) {
            throw new Error("Invalid payload for Ack message.");
          }
          return {
            sequenceId: properties[1],
            type: MessageType.Ack
          };
        };
        _proto._createSequenceMessage = function _createSequenceMessage(properties) {
          // check minimum length to allow protocol to add items to the end of objects in future releases
          if (properties.length < 1) {
            throw new Error("Invalid payload for Sequence message.");
          }
          return {
            sequenceId: properties[1],
            type: MessageType.Sequence
          };
        };
        _proto._writeInvocation = function _writeInvocation(invocationMessage) {
          var payload;
          if (invocationMessage.streamIds) {
            payload = this._encoder.encode([MessageType.Invocation, invocationMessage.headers || {}, invocationMessage.invocationId || null, invocationMessage.target, invocationMessage.arguments, invocationMessage.streamIds]);
          } else {
            payload = this._encoder.encode([MessageType.Invocation, invocationMessage.headers || {}, invocationMessage.invocationId || null, invocationMessage.target, invocationMessage.arguments]);
          }
          return BinaryMessageFormat.write(payload.slice());
        };
        _proto._writeStreamInvocation = function _writeStreamInvocation(streamInvocationMessage) {
          var payload;
          if (streamInvocationMessage.streamIds) {
            payload = this._encoder.encode([MessageType.StreamInvocation, streamInvocationMessage.headers || {}, streamInvocationMessage.invocationId, streamInvocationMessage.target, streamInvocationMessage.arguments, streamInvocationMessage.streamIds]);
          } else {
            payload = this._encoder.encode([MessageType.StreamInvocation, streamInvocationMessage.headers || {}, streamInvocationMessage.invocationId, streamInvocationMessage.target, streamInvocationMessage.arguments]);
          }
          return BinaryMessageFormat.write(payload.slice());
        };
        _proto._writeStreamItem = function _writeStreamItem(streamItemMessage) {
          var payload = this._encoder.encode([MessageType.StreamItem, streamItemMessage.headers || {}, streamItemMessage.invocationId, streamItemMessage.item]);
          return BinaryMessageFormat.write(payload.slice());
        };
        _proto._writeCompletion = function _writeCompletion(completionMessage) {
          var resultKind = completionMessage.error ? this._errorResult : completionMessage.result !== undefined ? this._nonVoidResult : this._voidResult;
          var payload;
          switch (resultKind) {
            case this._errorResult:
              payload = this._encoder.encode([MessageType.Completion, completionMessage.headers || {}, completionMessage.invocationId, resultKind, completionMessage.error]);
              break;
            case this._voidResult:
              payload = this._encoder.encode([MessageType.Completion, completionMessage.headers || {}, completionMessage.invocationId, resultKind]);
              break;
            case this._nonVoidResult:
              payload = this._encoder.encode([MessageType.Completion, completionMessage.headers || {}, completionMessage.invocationId, resultKind, completionMessage.result]);
              break;
          }
          return BinaryMessageFormat.write(payload.slice());
        };
        _proto._writeCancelInvocation = function _writeCancelInvocation(cancelInvocationMessage) {
          var payload = this._encoder.encode([MessageType.CancelInvocation, cancelInvocationMessage.headers || {}, cancelInvocationMessage.invocationId]);
          return BinaryMessageFormat.write(payload.slice());
        };
        _proto._writeClose = function _writeClose() {
          var payload = this._encoder.encode([MessageType.Close, null]);
          return BinaryMessageFormat.write(payload.slice());
        };
        _proto._writeAck = function _writeAck(ackMessage) {
          var payload = this._encoder.encode([MessageType.Ack, ackMessage.sequenceId]);
          return BinaryMessageFormat.write(payload.slice());
        };
        _proto._writeSequence = function _writeSequence(sequenceMessage) {
          var payload = this._encoder.encode([MessageType.Sequence, sequenceMessage.sequenceId]);
          return BinaryMessageFormat.write(payload.slice());
        };
        _proto._readHeaders = function _readHeaders(properties) {
          var headers = properties[1];
          if (typeof headers !== "object") {
            throw new Error("Invalid headers.");
          }
          return headers;
        };
        return MessagePackHubProtocol;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MessagePackOptions.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "24c87pxEW1NLJeo9YBMJwTJ", "MessagePackOptions", undefined); // Licensed to the .NET Foundation under one or more agreements.
      // The .NET Foundation licenses this file to you under the MIT license.
      /**
       * MessagePack Options per:
       * {@link https://github.com/msgpack/msgpack-javascript#api msgpack-javascript Options}
       */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MusicMng.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, random, AudioSource, Node, NodePool, resources, AudioClip, assetManager;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      random = module.random;
      AudioSource = module.AudioSource;
      Node = module.Node;
      NodePool = module.NodePool;
      resources = module.resources;
      AudioClip = module.AudioClip;
      assetManager = module.assetManager;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d43c9KOHzRI0ZVpHc/gzVYK", "MusicMng", undefined);
      var DataMusic = exports('DataMusic', /*#__PURE__*/function () {
        function DataMusic() {
          this.audioSourcePool = new NodePool();
          this.audio_Music = void 0;
          this.audio_Effect = new Map();
          this._is_open_music = true;
          this._is_open_effect = true;
          this._volMusic = .5;
          this._volEffect = .5;
        }
        _createClass(DataMusic, [{
          key: "is_open_music",
          get: function get() {
            return this._is_open_music;
          },
          set: function set(value) {
            this._is_open_music = value;
            // console.error(value);
          }
        }, {
          key: "is_open_effect",
          get: function get() {
            return this._is_open_effect;
          },
          set: function set(value) {
            this._is_open_effect = value;
          }
        }, {
          key: "volMusic",
          get: function get() {
            return this._volMusic;
          },
          set: function set(value) {
            this._volMusic = value;
          }
        }, {
          key: "volEffect",
          get: function get() {
            return this._volEffect;
          },
          set: function set(value) {
            this._volEffect = value;
          }
        }]);
        return DataMusic;
      }());
      var MusicAsset = /*#__PURE__*/function () {
        function MusicAsset() {
          this.typePath = "Music/";
          this.bundlePath = "Music";
        }
        var _proto = MusicAsset.prototype;
        //本地音樂
        _proto.loadAsset = function loadAsset() {
          var _this = this;
          var data = new Map();
          var checkLoad = [];
          return new Promise(function (resolve, reject) {
            try {
              checkLoad.push(false);
              resources.loadDir(_this.typePath, AudioClip, function (err, clips) {
                clips.forEach(function (_AudioClip) {
                  data.set(_AudioClip.name, _AudioClip);
                });
                checkLoad.shift();
              });
            } catch (error) {
              console.error("本地資源下載有誤", error);
            }
            try {
              checkLoad.push(false);
              assetManager.loadBundle(_this.bundlePath, function (err, bundle) {
                console.log("hola", bundle);
                bundle.loadDir('', AudioClip, function (err, clips) {
                  //自身資料夾
                  // console.error("音樂資源", clips);
                  clips.forEach(function (_AudioClip) {
                    data.set(_AudioClip.name, _AudioClip);
                  });
                  checkLoad.shift();
                });
              });
            } catch (error) {
              console.error("bundle下載有誤", error);
            }
            var loop = setInterval(function () {
              if (checkLoad.length == 0) {
                clearInterval(loop);
                resolve(data);
              }
            }, 32);
          });
        };
        return MusicAsset;
      }();
      var MusicMng = /*#__PURE__*/function (_DataMusic) {
        _inheritsLoose(MusicMng, _DataMusic);
        function MusicMng() {
          var _this2;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this2 = _DataMusic.call.apply(_DataMusic, [this].concat(args)) || this;
          _this2.mapClip = new Map();
          return _this2;
        }
        var _proto2 = MusicMng.prototype;
        _proto2.init = /*#__PURE__*/function () {
          var _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _this3 = this;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  return _context2.abrupt("return", new Promise( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve, reject) {
                    return _regeneratorRuntime().wrap(function _callee$(_context) {
                      while (1) switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return new MusicAsset().loadAsset();
                        case 2:
                          _this3.mapClip = _context.sent;
                          _this3.audio_Music = new Node().addComponent(AudioSource);
                          resolve();
                        case 5:
                        case "end":
                          return _context.stop();
                      }
                    }, _callee);
                  }))));
                case 1:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          function init() {
            return _init.apply(this, arguments);
          }
          return init;
        }();
        _proto2.initValue = function initValue(bgOpen, efxOpen, bgVol, efxVol) {
          this.volMusic = Number(bgVol);
          this.volEffect = Number(efxVol);
          this.is_open_music = bgOpen;
          this.is_open_effect = efxOpen;
          this.switchEffect(this.is_open_effect);
          this.switchMusic(this.is_open_music);
          this.musicVolSet(this.volMusic);
          this.effectVolSet(this.volEffect);
        };
        _proto2.getClip = function getClip(name) {
          if (!this.mapClip.has(name)) throw new Error("\u6C92\u6709\u9019\u9996\u97F3\u6A02" + name);
          return this.mapClip.get(name);
        };
        _proto2.switchMusic = function switchMusic(_boolean) {
          this.is_open_music = _boolean != null ? _boolean : !this.is_open_music;
          this.musicVolSet();
          return this.getMusicState();
        };
        _proto2.musicPlay = function musicPlay(musicName, playLoop) {
          if (playLoop === void 0) {
            playLoop = true;
          }
          if (this.audio_Music.state === 1 && musicName === this.audio_Music.clip.name) return;
          this.musicStop();
          this.audio_Music.clip = this.getClip(musicName);
          this.audio_Music.loop = playLoop;
          this.audio_Music.play();
        };
        _proto2.musicStop = function musicStop() {
          this.audio_Music.stop();
        };
        _proto2.musicVolSet = function musicVolSet(vol) {
          if (vol) {
            this._volMusic = vol;
          }
          this.audio_Music.volume = this.getMusicState() ? this._volMusic : 0;
        };
        _proto2.getMusicState = function getMusicState() {
          return this.is_open_music;
        };
        _proto2.switchEffect = function switchEffect(_boolean) {
          this.is_open_effect = _boolean != null ? _boolean : !this.is_open_effect;
          this.effectVolSet();
          return this.getEffectState();
        };
        _proto2.effectPlay = function effectPlay(effectName, _vol, playLoop) {
          var _this4 = this;
          if (playLoop === void 0) {
            playLoop = false;
          }
          //撥放音樂
          var audio = this.getAudioSourcePool();
          audio.loop = playLoop;
          audio.clip = this.getClip(effectName);
          var vol = _vol ? _vol : this._volEffect;
          audio.volume = this.getEffectState() ? vol : 0;
          audio.play();
          //資料儲存
          var getRandom = this.checkEffectRandom(effectName, random());
          this.audio_Effect.set(effectName + getRandom, audio);
          if (!playLoop) {
            //@ts-ignore為了檢查是否結束回收節點= =
            audio.checkState = setInterval(function () {
              if (audio.state == 0) {
                //@ts-ignore
                clearInterval(audio.checkState); //避免內存洩漏
                _this4.putAudioSourcePool(audio, effectName + getRandom);
              }
            }, 50);
          }
        };
        _proto2.effectStopAll = function effectStopAll() {
          var _this5 = this;
          this.audio_Effect.forEach(function (audioSource, _effectName) {
            _this5.putAudioSourcePool(audioSource, _effectName);
          });
          this.audio_Effect.clear(); //確認清乾淨
        };

        _proto2.effectStop = function effectStop(effectName) {
          var _this6 = this;
          this.audio_Effect.forEach(function (audioSource, _effectName) {
            //為了部分音效不重複，音名後面有新增亂數
            if (_effectName.split("0.")[0] == effectName) {
              _this6.putAudioSourcePool(audioSource, _effectName);
            }
          });
        };
        _proto2.effectVolSet = function effectVolSet(vol) {
          var _this7 = this;
          if (vol) {
            this._volEffect = vol;
          }
          this.audio_Effect.forEach(function (audioSource) {
            audioSource.volume = _this7.getEffectState() ? _this7._volEffect : 0;
          });
        };
        _proto2.getEffectState = function getEffectState() {
          return this.is_open_effect;
        };
        _proto2.checkEffectRandom = function checkEffectRandom(effectName, number) {
          if (this.audio_Effect.has(effectName + number)) return this.checkEffectRandom(effectName, random());else return number;
        };
        _proto2.getAudioSourcePool = function getAudioSourcePool() {
          if (this.audioSourcePool.size() > 0) {
            return this.audioSourcePool.get().getComponent(AudioSource);
          } else {
            return new Node().addComponent(AudioSource);
          }
        };
        _proto2.putAudioSourcePool = function putAudioSourcePool(_audioSource, _effectName) {
          _audioSource.stop();
          this.audioSourcePool.put(_audioSource.node);
          this.audio_Effect["delete"](_effectName);
        };
        return MusicMng;
      }(DataMusic);
      var MusicMng$1 = exports('default', new MusicMng());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/pkg-version.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ddea62gCMBFWr47azkSrV89", "pkg-version", undefined);
      var VERSION = exports('VERSION', '9.0.6');
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/pkg-version2.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ea8d304pHxIkpmf6uMYR/A4", "pkg-version", undefined);
      var VERSION = exports('VERSION', '9.0.6');
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PlayRoundUseCase.ts", ['cc', './CommonValue.ts', './CardCodec.ts', './Deck.ts', './Hand.ts', './Rules.ts', './ResultClassifier.ts'], function (exports) {
  var cclegacy, processStateFromKey, buildDeskCards, createShuffledSingleDeck, createArrayDeck, handPoint, cardPoint, isNatural, shouldBankerDraw, winnerFromPoints, classifyFinalProcessKey;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      processStateFromKey = module.processStateFromKey;
    }, function (module) {
      buildDeskCards = module.buildDeskCards;
    }, function (module) {
      createShuffledSingleDeck = module.createShuffledSingleDeck;
      createArrayDeck = module.createArrayDeck;
    }, function (module) {
      handPoint = module.handPoint;
      cardPoint = module.cardPoint;
    }, function (module) {
      isNatural = module.isNatural;
      shouldBankerDraw = module.shouldBankerDraw;
    }, function (module) {
      winnerFromPoints = module.winnerFromPoints;
      classifyFinalProcessKey = module.classifyFinalProcessKey;
    }],
    execute: function () {
      exports('playBaccaratRound', playBaccaratRound);
      cclegacy._RF.push({}, "099e5NEk0BDmY8qrTi92Nvi", "PlayRoundUseCase", undefined);
      /**
       * 模擬一局百家樂。
       * 內部依後端規則組牌（Cards 字串、補牌位、Winner），回傳 `RoundResult` 供 `ReqResult` 傳遞（與原本測試路徑相同）。
       */
      function playBaccaratRound(deps) {
        var _deps$rng, _processStateFromKey;
        if (deps === void 0) {
          deps = {};
        }
        var rng = (_deps$rng = deps.rng) != null ? _deps$rng : Math.random;
        var deckArr = createShuffledSingleDeck(rng);
        var deck = createArrayDeck(deckArr, rng);
        var playerHand = [deck.draw(), deck.draw()];
        var bankerHand = [deck.draw(), deck.draw()];
        var playerPoint = handPoint(playerHand);
        var bankerPoint = handPoint(bankerHand);
        var playerThirdPoint = null;
        if (!(isNatural(playerPoint) || isNatural(bankerPoint))) {
          var playerDraw = playerPoint <= 5;
          if (playerDraw) {
            var c3 = deck.draw();
            playerHand.push(c3);
            playerThirdPoint = cardPoint(c3);
          }
          var bankerDraw = shouldBankerDraw(bankerPoint, playerThirdPoint);
          if (bankerDraw) bankerHand.push(deck.draw());
          playerPoint = handPoint(playerHand);
          bankerPoint = handPoint(bankerHand);
        }
        var dealerDrewThird = playerHand.length >= 3;
        var bankerDrewThird = bankerHand.length >= 3;
        var winner = winnerFromPoints(bankerPoint, playerPoint);
        var processKey = classifyFinalProcessKey(dealerDrewThird, bankerDrewThird, bankerPoint, playerPoint);
        var finalProcessKey = (_processStateFromKey = processStateFromKey(processKey)) != null ? _processStateFromKey : undefined;
        var cards = buildDeskCards(playerHand, bankerHand);
        var used = cards.length;
        var totalPoker = 52;
        return {
          dealerPoker: [].concat(playerHand),
          bankerPoker: [].concat(bankerHand),
          totalPoker: totalPoker,
          remainPoker: totalPoker - used,
          recyclePoker: used,
          dealerPointFinal: playerPoint,
          bankerPointFinal: bankerPoint,
          dealerDrewThird: dealerDrewThird,
          bankerDrewThird: bankerDrewThird,
          winner: winner,
          finalProcessKey: finalProcessKey,
          cards: cards
        };
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PokerAnimationEvent.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CommonValue.ts', './EventMsg.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Component, GameState, EventMsg;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      GameState = module.GameState;
    }, function (module) {
      EventMsg = module.EventMsg;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "e5a1dL2ED1DW6sc3FqZ3AVD", "PokerAnimationEvent", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PokerAnimationEvent = exports('default', (_dec = ccclass('PokerAnimationEvent'), _dec2 = property({
        type: Node,
        group: {
          name: "PokerNode"
        },
        tooltip: "Poker物件物件"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PokerAnimationEvent, _Component);
        function PokerAnimationEvent() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "pokerNode", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = PokerAnimationEvent.prototype;
        _proto.onLoad = function onLoad() {
          EventMsg.on(GameState.PlayPoker, this.resetPoker, this);
        };
        _proto.resetPoker = function resetPoker(playName) {
          if (playName.includes('Dance')) return console.log("跳舞部關掉");
          for (var index = 0; index < this.pokerNode.length; index++) {
            if (!this.pokerNode[index].active) this.pokerNode[index].active = true;
          }
          if (playName.includes('Draw')) for (var _index = 0; _index < this.pokerNode.length; _index++) {
            if (this.pokerNode[_index].name.includes('final9')) this.pokerNode[_index].active = false;
            if (this.pokerNode[_index].name.includes('final8')) this.pokerNode[_index].active = false;
          }
        }
        /**
         * FBX動畫監聽使用
         * 為什麼呢?自己去問企劃為什麼隱藏要交給程式做
         */;
        _proto.hidePoker = function hidePoker(count) {
          for (var index = 0; index < count; index++) {
            this.pokerNode[index].active = false;
          }
          EventMsg.emit(GameState.PokerTriggerEvent, 'hidePoker');
        };
        _proto.pumpPoker = function pumpPoker() {
          console.log("抽");
          EventMsg.emit(GameState.PumpPoker);
          EventMsg.emit(GameState.PokerTriggerEvent, 'pumpPoker');
        };
        _proto.putPoker = function putPoker(count) {
          console.log("\u653E" + count + "\u5F35\u724C");
          EventMsg.emit(GameState.PutPoker, count);
          EventMsg.emit(GameState.PokerTriggerEvent, 'putPoker');
        };
        return PokerAnimationEvent;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "pokerNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PokerBox.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CommonValue.ts', './types.ts', './EventMsg.ts', './BasePoker.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, Vec3, Tween, tween, easing, instantiate, v3, GameState, pokerCompressedVisualCount, TestPokerDetail, EventMsg, BasePoker;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Vec3 = module.Vec3;
      Tween = module.Tween;
      tween = module.tween;
      easing = module.easing;
      instantiate = module.instantiate;
      v3 = module.v3;
    }, function (module) {
      GameState = module.GameState;
      pokerCompressedVisualCount = module.pokerCompressedVisualCount;
    }, function (module) {
      TestPokerDetail = module.TestPokerDetail;
    }, function (module) {
      EventMsg = module.EventMsg;
    }, function (module) {
      BasePoker = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "f3911OkGKJDCqcmiRewqcSN", "PokerBox", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PokerBox = exports('default', (_dec = ccclass('PokerBox'), _dec2 = property(Prefab), _dec3 = property(Vec3), _dec4 = property(Vec3), _dec5 = property({
        tooltip: '抽牌後其餘牌補位動畫時間（秒）'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_BasePoker) {
        _inheritsLoose(PokerBox, _BasePoker);
        function PokerBox() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BasePoker.call.apply(_BasePoker, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "roller", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "orgPokerPos", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lastPoker", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "drawShiftDuration", _descriptor4, _assertThisInitialized(_this));
          _this._rollerNode = void 0;
          return _this;
        }
        var _proto = PokerBox.prototype;
        _proto.onLoad = function onLoad() {
          _BasePoker.prototype.onLoad.call(this);
          this.content.node.setPosition(this.orgPokerPos);
          EventMsg.on(GameState.PumpPoker, this.pumpPoker, this);
        };
        _proto.start = function start() {
          this.currentCountPoker = 52 * 8;
          this.currentCountPoker = Math.max(0, this.currentCountPoker);
          this.reset();
        };
        _proto.reset = function reset() {
          this.content.activeLayout = true;
          this.removePoker();
          this.currentCountPoker = 52 * 8;
          this.currentCountPoker = Math.max(0, this.currentCountPoker);
          this.createPoker(pokerCompressedVisualCount(this.currentCountPoker, this.reducePoker));
          this.content.node.setPosition(this.lastPoker);
          this._orderedActiveChildren().forEach(function (child) {
            var rota = child.eulerAngles;
            child.setRotationFromEuler(new Vec3(-180, 90, -144.254));
          });
          /**roller一定要等全部的Poker處理好才能進場，不然會被影響 */
          this.createRoller();
          this._resumeLayoutAfterDrawShift();
        };
        _proto.revertPoker = function revertPoker(currentCardIndex) {
          this.currentCountPoker = this.totalPoker - currentCardIndex;
          var check = pokerCompressedVisualCount(this.currentCountPoker, this.reducePoker);
          if (check > this.content.children.length && check === this.content.children.length) return;
          this.content.activeLayout = true;
          this.content.children.forEach(function (child) {
            Tween.stopAllByTarget(child);
          });
          var count = this.content.children.length - check;
          for (var index = 0; index < count; index++) {
            var child = this.content.children.shift();
            if (child) child.destroy();
          }
          this._resumeLayoutAfterDrawShift();
        };
        _proto.pumpPoker = function pumpPoker() {
          var _this$content;
          if (!((_this$content = this.content) != null && (_this$content = _this$content.node) != null && _this$content.isValid) || this.currentCountPoker <= 0) return;
          // 1) 只拿「牌節點」做數量計算（不要把 roller 算進去）
          var pokerNodes = this.getPokerNodes();
          if (pokerNodes.length === 0) return;
          var currentVisual = pokerNodes.length;
          this.currentCountPoker--;
          var targetVisual = pokerCompressedVisualCount(this.currentCountPoker, this.reducePoker);
          var toDestroy = Math.max(0, currentVisual - targetVisual);
          if (toDestroy <= 0) return;
          this.content.suspendAutoLayout(true);
          for (var j = 0; j < toDestroy; j++) pokerNodes[j].destroy();
          var remainingPoker = pokerNodes.slice(toDestroy);
          // 2) 沒牌就收尾
          if (remainingPoker.length === 0) {
            this._resumeLayoutAfterDrawShift();
            return;
          }
          // 3) 動畫節點 = 牌 + roller
          var animNodes = this.collectPokerAndRoller(remainingPoker);
          this.pokerAndRollerAnimation(animNodes);
        };
        _proto.pokerAndRollerAnimation = function pokerAndRollerAnimation(remaining) {
          var _this2 = this;
          var targets = this.content.computeLocalPositionsForChildren(remaining);
          var n = remaining.length;
          var finished = 0;
          var dur = this.drawShiftDuration;
          var onOneDone = function onOneDone() {
            if (++finished >= n) _this2._resumeLayoutAfterDrawShift();
          };
          for (var i = 0; i < n; i++) {
            tween(remaining[i]).to(dur, {
              position: targets[i]
            }, {
              easing: easing.sineOut
            }).call(onOneDone).start();
          }
        };
        _proto.createRoller = function createRoller() {
          var roller = instantiate(this.roller);
          roller.setParent(this.content.node);
          this._rollerNode = roller;
        };
        _proto._resumeLayoutAfterDrawShift = function _resumeLayoutAfterDrawShift() {
          this.content.suspendAutoLayout(false);
          if (this.content.activeLayout) this.content.refreshLayout();
        };
        _proto.getPokerNodes = function getPokerNodes() {
          var _this3 = this;
          // 關鍵：用你專案裡「牌」的辨識方式過濾
          // 例如有 BoxCollider + 不是 roller，或有特定 component/tag/name
          return this._orderedActiveChildren().filter(function (n) {
            return n !== _this3._rollerNode;
          } /* + 其他條件 */);
        };

        _proto.collectPokerAndRoller = function collectPokerAndRoller(remainingPoker) {
          var roller = this._rollerNode;
          return roller && roller.isValid ? [].concat(remainingPoker, [roller]) : remainingPoker;
        };
        _proto.testRever = function testRever() {
          var detail = new TestPokerDetail();
          detail.dealerPoker = [];
          detail.bankerPoker = [];
          detail.totalPoker = 52 * 4;
          detail.remainPoker = 52 * 4;
          detail.recyclePoker = 0;
          this.revertPoker(detail.remainPoker);
          // setInterval(() => {
          //     this.createRound(detail)
          // }, 2000);
        };

        return PokerBox;
      }(BasePoker), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "roller", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "orgPokerPos", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return v3();
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lastPoker", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return v3(18.175, -4.166, -1.33);
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "drawShiftDuration", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.25;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PokerCollider.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, BoxCollider, Layers, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      BoxCollider = module.BoxCollider;
      Layers = module.Layers;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "ed2f3IfmupPhqo5w4NREmFq", "PokerCollider", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PokerCollider = exports('default', (_dec = ccclass('PokerCollider'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PokerCollider, _Component);
        function PokerCollider() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._collider = null;
          _this.check = false;
          return _this;
        }
        var _proto = PokerCollider.prototype;
        _proto.onLoad = function onLoad() {
          this._collider = this.node.getComponent(BoxCollider);
          if (this._collider) {
            this._collider.on('onCollisionEnter', this.onCollisionEnter, this);
            this._collider.on('onCollisionStay', this.onCollisionStay, this);
            this._collider.on('onCollisionExit', this.onCollisionExit, this);
          }
        };
        _proto.onDestroy = function onDestroy() {
          if (this._collider) {
            this._collider.off('onCollisionEnter', this.onCollisionEnter, this);
            this._collider.off('onCollisionStay', this.onCollisionStay, this);
            this._collider.off('onCollisionExit', this.onCollisionExit, this);
          }
        };
        /** 碰撞開始時觸發 */
        _proto.onCollisionEnter = function onCollisionEnter(event) {
          var otherNode = event.otherCollider.node;
          // 偵測 Layer 名稱是否為 Poker
          // console.log(otherNode.name);

          if (otherNode.layer === 1 << Layers.nameToLayer('Poker')) ;
        }

        /** 碰撞持續時頻繁觸發 */;
        _proto.onCollisionStay = function onCollisionStay(event) {
          // console.log('[updateWall] Collision Stay:', event.otherCollider.node.name);
        }

        /** 碰撞結束時觸發 */;
        _proto.onCollisionExit = function onCollisionExit(event) {
          // console.log('[updateWall] Collision Exit:', event.otherCollider.node.name);
        };
        return PokerCollider;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PokerLayout.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Enum, Vec3, Node, BoxCollider, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      Vec3 = module.Vec3;
      Node = module.Node;
      BoxCollider = module.BoxCollider;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "a5ca7PRahpKI68Bf0OrvRuO", "PokerLayout", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        executeInEditMode = _decorator.executeInEditMode;
      //TODO 3D物理引擎必須修改成 PhysX Based Physics System

      /** 排列方向：沿哪個軸排列子節點 */
      var LayoutAxis = exports('LayoutAxis', /*#__PURE__*/function (LayoutAxis) {
        LayoutAxis[LayoutAxis["X"] = 0] = "X";
        LayoutAxis[LayoutAxis["Y"] = 1] = "Y";
        LayoutAxis[LayoutAxis["Z"] = 2] = "Z";
        return LayoutAxis;
      }({}));

      /** 容器尺寸模式：參照 Cocos Layout ResizeMode */
      var LayoutResizeMode = exports('LayoutResizeMode', /*#__PURE__*/function (LayoutResizeMode) {
        LayoutResizeMode[LayoutResizeMode["NONE"] = 0] = "NONE";
        LayoutResizeMode[LayoutResizeMode["CONTAINER"] = 1] = "CONTAINER";
        return LayoutResizeMode;
      }({})); // 容器依子節點總尺寸擴展，子節點置中排列

      /** 排列起點方向：參照 Cocos Layout HorizontalDirection / VerticalDirection */
      var LayoutAlignDirection = exports('LayoutAlignDirection', /*#__PURE__*/function (LayoutAlignDirection) {
        LayoutAlignDirection[LayoutAlignDirection["POSITIVE"] = 0] = "POSITIVE";
        LayoutAlignDirection[LayoutAlignDirection["NEGATIVE"] = 1] = "NEGATIVE";
        return LayoutAlignDirection;
      }({}));

      /**
       * 撲克牌堆疊間距依據：
       * - FullObb：整個 Box 沿排列方向投影（傾斜時常等於「面內長邊」投影 → 間距過大）
       * - ThinAxis：只取碰撞盒最薄一維當牌疊厚度，並換算成父節點本地位移（牌盒內緊密堆疊）
       */
      var CardStackSpacingMode = exports('CardStackSpacingMode', /*#__PURE__*/function (CardStackSpacingMode) {
        CardStackSpacingMode[CardStackSpacingMode["FullObbAlongLayoutAxis"] = 0] = "FullObbAlongLayoutAxis";
        CardStackSpacingMode[CardStackSpacingMode["ThinColliderAxisAlongLayout"] = 1] = "ThinColliderAxisAlongLayout";
        return CardStackSpacingMode;
      }({}));
      var PokerLayout = exports('PokerLayout', (_dec = ccclass('PokerLayout'), _dec2 = property({
        type: Enum(LayoutAxis),
        tooltip: '排列方向'
      }), _dec3 = property({
        type: Enum(LayoutResizeMode),
        tooltip: 'CONTAINER 時子節點置中排列'
      }), _dec4 = property({
        type: Enum(LayoutAlignDirection),
        tooltip: '排列起點方向'
      }), _dec5 = property({
        tooltip: '子節點之間沿排列軸的額外間距'
      }), _dec6 = property({
        tooltip: '開啟後依 BoxCollider 與節點世界旋轉計算沿排列軸的投影長度'
      }), _dec7 = property({
        type: Enum(CardStackSpacingMode),
        tooltip: '撲克牌盒建議用 ThinColliderAxisAlongLayout；若需用完整盒投影再改 FullObb'
      }), _dec8 = property({
        tooltip: '開啟時自動排版；編輯器內改動亦會套用（executeInEditMode）'
      }), _dec(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PokerLayout, _Component);
        function PokerLayout() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "axis", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "resizeMode", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "alignDirection", _descriptor3, _assertThisInitialized(_this));
          /** 每兩張牌之間額外間距（與旋轉後投影尺寸相加；可避免浮點／物理接觸誤差） */
          _initializerDefineProperty(_this, "itemSpacing", _descriptor4, _assertThisInitialized(_this));
          /**
           * 關閉時沿用舊算法：直接用 collider.size * scale 的本地軸長度（不計旋轉，傾斜牌易重疊）
           */
          _initializerDefineProperty(_this, "useRotatedColliderProjection", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "stackSpacingMode", _descriptor6, _assertThisInitialized(_this));
          /** 快取用，避免每幀 new Vec3 */
          _this._vLayoutAxis = new Vec3();
          _this._vLocalX = new Vec3();
          _this._vLocalY = new Vec3();
          _this._vLocalZ = new Vec3();
          _this._vCol = new Vec3();
          _this._vW0 = new Vec3();
          _this._vW1 = new Vec3();
          _this._thinWorldDir = new Vec3();
          _this.children = [];
          /** 為 true 時 update 不呼叫 refreshLayout，避免與手動 tween 搶位置 */
          _this._suspendAutoRefresh = false;
          /** 子節點樹或排版相關屬性變更時為 true，由 lateUpdate 執行一次 refreshLayout */
          _this._layoutDirty = true;
          /** refreshLayout 路徑重用，降低 GC */
          _this._targetsReuse = [];
          _this._sizesReuse = [];
          _this._onChildStructChanged = function () {
            _this._markLayoutDirty();
          };
          _this._activeLayout = true;
          return _this;
        }
        var _proto = PokerLayout.prototype;
        _proto.onLoad = function onLoad() {
          this.refreshLayout();
          this.clearPoker();
        };
        _proto.onEnable = function onEnable() {
          this.node.on(Node.EventType.CHILD_ADDED, this._onChildStructChanged, this);
          this.node.on(Node.EventType.CHILD_REMOVED, this._onChildStructChanged, this);
          this._markLayoutDirty();
        };
        _proto.lateUpdate = function lateUpdate(_dt) {
          {
            if (this._suspendAutoRefresh || !this.activeLayout || !this._layoutDirty) return;
            this.refreshLayout();
          }
        };
        _proto.onDisable = function onDisable() {
          this.node.off(Node.EventType.CHILD_ADDED, this._onChildStructChanged, this);
          this.node.off(Node.EventType.CHILD_REMOVED, this._onChildStructChanged, this);
        }

        /** 抽牌動畫等：暫停每幀自動排版，結束後務必設回 false */;
        _proto.suspendAutoLayout = function suspendAutoLayout(suspend) {
          this._suspendAutoRefresh = suspend;
        };
        _proto.clearPoker = function clearPoker() {
          this.node.children.forEach(function (_node) {
            _node.destroy();
          });
        };
        _proto._markLayoutDirty = function _markLayoutDirty() {
          this._layoutDirty = true;
        };
        _proto.refreshLayout = function refreshLayout() {
          var _this2 = this;
          this._layoutDirty = false;
          if (!this.activeLayout) return;
          if (this.node.children.length === 0) return;
          this.children.length = 0;
          this.node.children.forEach(function (_node) {
            if (_node.active && _node.getComponent(BoxCollider)) _this2.children.push(_node);
          });
          if (this.children.length === 0) return;
          var n = this.children.length;
          while (this._targetsReuse.length < n) {
            this._targetsReuse.push(new Vec3());
          }
          this.computeLayoutPositionsWritable(this.children, this._targetsReuse, n);
          for (var i = 0; i < n; i++) {
            this.children[i].setPosition(this._targetsReuse[i]);
          }
        }

        /**
         * 依目前 axis / spacing / resizeMode 計算子節點應排列的本地座標（不寫入場景）。
         * 順序須與傳入陣列一致，用於抽牌後其餘牌 tween 補位。
         */;
        _proto.computeLocalPositionsForChildren = function computeLocalPositionsForChildren(childNodes) {
          var n = childNodes.length;
          if (n === 0) return [];
          var out = [];
          for (var i = 0; i < n; i++) {
            out.push(new Vec3());
          }
          this.computeLayoutPositionsWritable(childNodes, out, n);
          return out;
        }

        /**
         * 與 computeLocalPositionsForChildren / refreshLayout 共用；out[i] 須已存在且長度 >= count。
         */;
        _proto.computeLayoutPositionsWritable = function computeLayoutPositionsWritable(childNodes, out, count) {
          if (count === 0) return;
          while (this._sizesReuse.length < count) {
            this._sizesReuse.push(0);
          }
          for (var i = 0; i < count; i++) {
            this._sizesReuse[i] = this.getLayoutAxisExtent(childNodes[i], this.axis);
          }
          var gapTotal = count > 1 ? this.itemSpacing * (count - 1) : 0;
          var total = 0;
          for (var _i = 0; _i < count; _i++) {
            total += this._sizesReuse[_i];
          }
          total += gapTotal;
          var isPositive = this.alignDirection === LayoutAlignDirection.POSITIVE;
          var offset;
          if (this.resizeMode === LayoutResizeMode.CONTAINER) {
            offset = isPositive ? -total / 2 : total / 2;
          } else {
            offset = isPositive ? 0 : total;
          }
          for (var _i2 = 0; _i2 < count; _i2++) {
            var size = this._sizesReuse[_i2];
            var pos = childNodes[_i2].getPosition();
            var center = isPositive ? offset + size / 2 : offset - size / 2;
            out[_i2].set(pos.x, pos.y, pos.z);
            this.applyAxisCenterToVec3(out[_i2], center);
            var step = size + (_i2 < count - 1 ? this.itemSpacing : 0);
            offset += isPositive ? step : -step;
          }
        }

        /**
         * 回傳沿「父節點本地排列軸」上，兩張牌中心應相隔的距離（單位＝與 setPosition 相同）。
         * 旋轉模式會先在世界上算幾何，再除以父 worldMatrix 該軸欄位長度換回本地（避免與位移單位不一致）。
         */;
        _proto.getLayoutAxisExtent = function getLayoutAxisExtent(node, axis) {
          var collider = node.getComponent(BoxCollider);
          if (!collider) return 0;
          var s = collider.size;
          var sc = node.scale;
          if (!this.useRotatedColliderProjection) {
            if (axis === LayoutAxis.X) return Math.abs(s.x * sc.x);
            if (axis === LayoutAxis.Y) return Math.abs(s.y * sc.y);
            return Math.abs(s.z * sc.z);
          }
          if (this.stackSpacingMode === CardStackSpacingMode.ThinColliderAxisAlongLayout) {
            return this.getThinStackLocalExtent(node, axis, s, sc);
          }
          return this.getFullObbLocalExtent(node, axis, s, sc);
        }

        /**
         * 牌盒堆疊：相鄰兩張牌中心在「最薄邊的世界方向」上應相距 t。
         * 僅沿父本地排列軸位移 d 時，世界位移為 d * col（col 為 worldMatrix 該軸欄位），
         * 需 dot(d * col, thinHat) = t ⇒ d = t / dot(col, thinHat)。
         */;
        _proto.getThinStackLocalExtent = function getThinStackLocalExtent(node, axis, s, sc) {
          var dx = Math.abs(s.x * sc.x);
          var dy = Math.abs(s.y * sc.y);
          var dz = Math.abs(s.z * sc.z);
          var t = dx;
          var thinAxis = LayoutAxis.X;
          if (dy <= t) {
            t = dy;
            thinAxis = LayoutAxis.Y;
          }
          if (dz <= t) {
            t = dz;
            thinAxis = LayoutAxis.Z;
          }
          this.getColliderLocalAxisWorldDir(node, thinAxis, this._thinWorldDir);
          this.getParentLayoutAxisWorldColumn(axis, this._vCol);
          var dot = Vec3.dot(this._vCol, this._thinWorldDir);
          var eps = 1e-5;
          if (Math.abs(dot) < eps) {
            return this.getFullObbLocalExtent(node, axis, s, sc);
          }
          return t / Math.abs(dot);
        }

        /** 完整 OBB 沿排列方向的世界投影長度，再換算為父本地位移長度 */;
        _proto.getFullObbLocalExtent = function getFullObbLocalExtent(node, axis, s, sc) {
          var hx = Math.abs(s.x * sc.x) * 0.5;
          var hy = Math.abs(s.y * sc.y) * 0.5;
          var hz = Math.abs(s.z * sc.z) * 0.5;
          this.getParentLayoutAxisWorldColumn(axis, this._vCol);
          var colLen = Math.max(this._vCol.length(), 1e-8);
          Vec3.normalize(this._vLayoutAxis, this._vCol);
          var q = node.worldRotation;
          Vec3.transformQuat(this._vLocalX, Vec3.UNIT_X, q);
          Vec3.transformQuat(this._vLocalY, Vec3.UNIT_Y, q);
          Vec3.transformQuat(this._vLocalZ, Vec3.UNIT_Z, q);
          var halfProj = Math.abs(Vec3.dot(this._vLayoutAxis, this._vLocalX)) * hx + Math.abs(Vec3.dot(this._vLayoutAxis, this._vLocalY)) * hy + Math.abs(Vec3.dot(this._vLayoutAxis, this._vLocalZ)) * hz;
          var worldExtent = 2 * halfProj;
          return worldExtent / colLen;
        }

        /** 子節點本地 X/Y/Z 單位向量在世界的方向（單位長） */;
        _proto.getColliderLocalAxisWorldDir = function getColliderLocalAxisWorldDir(node, localAxis, out) {
          var q = node.worldRotation;
          switch (localAxis) {
            case LayoutAxis.X:
              Vec3.transformQuat(out, Vec3.UNIT_X, q);
              break;
            case LayoutAxis.Y:
              Vec3.transformQuat(out, Vec3.UNIT_Y, q);
              break;
            default:
              Vec3.transformQuat(out, Vec3.UNIT_Z, q);
          }
          Vec3.normalize(out, out);
        }

        /**
         * 父節點在本地排列軸上 +1 時，子節點世界座標的增量向量（含縮放／旋轉，與 setPosition 一致）。
         */;
        _proto.getParentLayoutAxisWorldColumn = function getParentLayoutAxisWorldColumn(axis, out) {
          var p = this.node;
          this._vW0.set(0, 0, 0);
          if (axis === LayoutAxis.X) this._vW1.set(1, 0, 0);else if (axis === LayoutAxis.Y) this._vW1.set(0, 1, 0);else this._vW1.set(0, 0, 1);
          Vec3.transformMat4(this._vLayoutAxis, this._vW0, p.worldMatrix);
          Vec3.transformMat4(out, this._vW1, p.worldMatrix);
          Vec3.subtract(out, out, this._vLayoutAxis);
        };
        _proto.applyAxisCenterToVec3 = function applyAxisCenterToVec3(pos, center) {
          if (this.axis === LayoutAxis.X) pos.x = center;else if (this.axis === LayoutAxis.Y) pos.y = center;else pos.z = center;
        };
        _createClass(PokerLayout, [{
          key: "activeLayout",
          get: function get() {
            return this._activeLayout;
          },
          set: function set(value) {
            this._activeLayout = value;
            if (value) {
              this.refreshLayout();
            }
          }
        }]);
        return PokerLayout;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "axis", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return LayoutAxis.Y;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "resizeMode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return LayoutResizeMode.CONTAINER;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "alignDirection", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return LayoutAlignDirection.POSITIVE;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "itemSpacing", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "useRotatedColliderProjection", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "stackSpacingMode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return CardStackSpacingMode.ThinColliderAxisAlongLayout;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "activeLayout", [_dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "activeLayout"), _class2.prototype)), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PokerMng.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CommonValue.ts', './ReqResultData.ts', './PokerAnimationEvent.ts', './BundleMng.ts', './EventMsg.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, SkeletalAnimation, Material, Component, SpriteFrame, GameState, ProcessState, isGameStatusData, isRoundResult, PokerAnimationEvent, BundleMng, EventMsg;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      SkeletalAnimation = module.SkeletalAnimation;
      Material = module.Material;
      Component = module.Component;
      SpriteFrame = module.SpriteFrame;
    }, function (module) {
      GameState = module.GameState;
      ProcessState = module.ProcessState;
    }, function (module) {
      isGameStatusData = module.isGameStatusData;
      isRoundResult = module.isRoundResult;
    }, function (module) {
      PokerAnimationEvent = module.default;
    }, function (module) {
      BundleMng = module.default;
    }, function (module) {
      EventMsg = module.EventMsg;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "99b5fvWC1NNi5L59X4mKQje", "PokerMng", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        executeInEditMode = _decorator.executeInEditMode;
      var PokerMng = exports('default', (_dec = ccclass('PokerMng'), _dec2 = property(SkeletalAnimation), _dec3 = property(PokerAnimationEvent), _dec4 = property({
        type: Material,
        group: {
          name: "PokerMat"
        },
        tooltip: "答案為0~4"
      }), _dec(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PokerMng, _Component);
        function PokerMng() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "aniPoker", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pokerAniEvent", _descriptor2, _assertThisInitialized(_this));
          _this.currentAniName = '';
          _this.sfPokers = [];
          _initializerDefineProperty(_this, "pokerMaterial", _descriptor3, _assertThisInitialized(_this));
          _this.pokerMap = new Map();
          _this.aniMap = new Map();
          _this.eventList = [];
          _this.lastSyncTime = 0;
          _this.firedEventIdx = new Set();
          _this.canSync = false;
          _this.dataPoker = '';
          return _this;
        }
        var _proto = PokerMng.prototype;
        _proto.onLoad = function onLoad() {
          EventMsg.on(GameState.ReqResult, this.renderPokerMaterials, this);
          EventMsg.on(GameState.PlayPoker, this.playAni, this);
          EventMsg.on(GameState.SyncTime, this.checkTime, this);
          EventMsg.on(GameState.Init, this.init, this);
          EventMsg.on(GameState.PokerTriggerEvent, this.triggerEvent, this);
          EventMsg.on(GameState.ResetGame, this.reset, this);
        };
        _proto.start = function start() {
          var _this2 = this;
          this.aniPoker.clips.forEach(function (clip) {
            _this2.aniMap.set(clip.name, clip);
          });
          this.reset();
        };
        _proto.init = /*#__PURE__*/function () {
          var _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(login) {
            var _this3 = this;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  this.reset();
                  if (!(this.dataPoker != login.Data.bbaPokerStyle)) {
                    _context.next = 4;
                    break;
                  }
                  _context.next = 4;
                  return this.loadAsset(login);
                case 4:
                  this.renderPokerMaterials();
                  /**撲克牌重製狀態 */
                  this.playAni(ProcessState.Draw_1);
                  this.scheduleOnce(function () {
                    _this3.eventList = [];
                    _this3.aniPoker.stop();
                    EventMsg.emit(GameState.ReqInit);
                  }, 0);
                case 7:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function init(_x) {
            return _init.apply(this, arguments);
          }
          return init;
        }();
        _proto.loadAsset = /*#__PURE__*/function () {
          var _loadAsset = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(login) {
            var defaultPoker, poker;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  defaultPoker = '8NA_T';
                  _context2.next = 3;
                  return BundleMng.loadDir('Poker', "" + login.Data.bbaPokerStyle, SpriteFrame, defaultPoker);
                case 3:
                  poker = _context2.sent;
                  this.sfPokers = poker;
                  this.createPokerMap();
                  this.dataPoker = login.Data.bbaPokerStyle;
                case 7:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function loadAsset(_x2) {
            return _loadAsset.apply(this, arguments);
          }
          return loadAsset;
        }();
        _proto.reset = /*#__PURE__*/function () {
          var _reset = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var _this4 = this;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  // if (login) {
                  //     if (login.Data.bbaPokerStyle != this.dataPoker) {
                  //         await this.loadAsset(login);
                  //     }
                  //     EventMsg.emit(GameState.ReqInit);
                  // }

                  this.eventList = [];
                  this.lastSyncTime = 0;
                  this.firedEventIdx.clear();
                  this.canSync = false;
                  this.currentAniName = 'Draw_1';
                  this.aniPoker.play(this.currentAniName);
                  this.aniPoker.getState(this.currentAniName).setTime(0);
                  this.scheduleOnce(function () {
                    return _this4.aniPoker.stop();
                  });
                case 8:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function reset() {
            return _reset.apply(this, arguments);
          }
          return reset;
        }();
        _proto.playAni = function playAni(playName) {
          var _this5 = this;
          this.canSync = false;
          console.log("播放:", playName);

          // if (this.aniPoker!.getState(this.currentAniName) && this.aniPoker.getState(this.currentAniName).isPlaying) {
          //     console.log("近來重製");
          //     this.aniPoker.getState(this.currentAniName).pause()
          //     this.aniPoker.getState(this.currentAniName).stop()
          //     this.aniPoker.pause()
          //     this.aniPoker.getState(this.currentAniName).setTime(0)
          //     this.aniPoker.stop()
          // }
          if (!this.aniMap.has(playName)) return console.error("找不到撲克牌動畫", playName);
          // console.log("當前撥放", this.nextAniName);

          this.currentAniName = playName;
          this.aniPoker.play(playName);
          this.scheduleOnce(function () {
            // this.aniPoker.getState(playName).wrapMode = AnimationClip.WrapMode.Normal
            _this5.aniPoker.getState(playName).setTime(0);
            _this5.canSync = true;
            // this.nextAniName = next;
            /**關閉下一個 */
            // console.log("下一個撥放", this.nextAniName);
          }, 0);
          this.eventList = [];
          this.eventList = [].concat(this.aniPoker.getState(playName).clip.events);
          this.lastSyncTime = 0;
          this.firedEventIdx.clear();
        };
        _proto.checkEventWithRange = function checkEventWithRange(currentTime) {
          var from = this.lastSyncTime;
          var to = currentTime;
          // 正常前進
          if (to >= from) {
            for (var i = 0; i < this.eventList.length; i++) {
              var e = this.eventList[i];
              if (this.firedEventIdx.has(i)) continue;
              if (e.func && e.frame > from && e.frame <= to) {
                var _this$pokerAniEvent$e, _this$pokerAniEvent, _e$params;
                (_this$pokerAniEvent$e = (_this$pokerAniEvent = this.pokerAniEvent)[e.func]) == null || _this$pokerAniEvent$e.call(_this$pokerAniEvent, (_e$params = e.params) == null ? void 0 : _e$params[0]);
                this.firedEventIdx.add(i);
              }
            }
          } else {
            // 若時間回跳（seek/重播），重建 fired 狀態
            this.firedEventIdx.clear();
          }
          this.lastSyncTime = to;
        };
        _proto.checkTime = function checkTime(time) {
          if (!this.canSync) return;
          // console.warn("同步時間");

          if (this.aniPoker.getState(this.currentAniName).time != time) this.aniPoker.getState(this.currentAniName).setTime(time);
          this.checkEventWithRange(time);
        };
        _proto.triggerEvent = function triggerEvent(event) {
          for (var index = 0; index < this.eventList.length; index++) {
            var element = this.eventList[index];
            if (element.func == event) {
              this.eventList.splice(index, 1);
              break;
            }
          }
        };
        _proto.renderPokerMaterials = function renderPokerMaterials(data) {
          var _data$cards,
            _this6 = this,
            _this$pokerMaterial,
            _this$pokerMaterial2,
            _this$pokerMaterial3,
            _this$pokerMaterial4,
            _this$pokerMaterial5,
            _this$pokerMaterial6,
            _this$pokerMaterial7;
          console.log('材質近來', data);
          var dealer = [];
          var banker = [];
          if (isGameStatusData(data)) {
            dealer = this.sortByPosition(data.Cards.filter(function (c) {
              return c.Side === "P";
            })).map(function (c) {
              return c.Card;
            });
            banker = this.sortByPosition(data.Cards.filter(function (c) {
              return c.Side === "B";
            })).map(function (c) {
              return c.Card;
            });
          } else if (isRoundResult(data) && (_data$cards = data.cards) != null && _data$cards.length) {
            dealer = this.sortByPosition(data.cards.filter(function (c) {
              return c.Side === "P";
            })).map(function (c) {
              return c.Card;
            });
            banker = this.sortByPosition(data.cards.filter(function (c) {
              return c.Side === "B";
            })).map(function (c) {
              return c.Card;
            });
          } else {
            // 空陣列直接 fill 不會改 length，須先給長度或改用 push / 索引賦值
            dealer.length = 2;
            banker.length = 2;
            dealer.fill("As", 0, 2);
            banker.fill("As", 0, 2);
          }
          console.log(dealer, banker);
          var tex = function tex(cardId) {
            var _this6$pokerMap$get$t, _this6$pokerMap$get;
            return cardId ? (_this6$pokerMap$get$t = (_this6$pokerMap$get = _this6.pokerMap.get(cardId)) == null ? void 0 : _this6$pokerMap$get.texture) != null ? _this6$pokerMap$get$t : null : null;
          };
          console.log((_this$pokerMaterial = this.pokerMaterial) == null ? void 0 : _this$pokerMaterial[0]);
          if ((_this$pokerMaterial2 = this.pokerMaterial) != null && _this$pokerMaterial2[0]) this.pokerMaterial[0].setProperty('albedoMap', tex(dealer[0]));
          if ((_this$pokerMaterial3 = this.pokerMaterial) != null && _this$pokerMaterial3[1]) this.pokerMaterial[1].setProperty('albedoMap', tex(dealer[1]));
          if ((_this$pokerMaterial4 = this.pokerMaterial) != null && _this$pokerMaterial4[2]) this.pokerMaterial[2].setProperty('albedoMap', tex(banker[0]));
          if ((_this$pokerMaterial5 = this.pokerMaterial) != null && _this$pokerMaterial5[3]) this.pokerMaterial[3].setProperty('albedoMap', tex(banker[1]));

          // 第三張（若場景有對應 slot 才顯示）
          if ((_this$pokerMaterial6 = this.pokerMaterial) != null && _this$pokerMaterial6[4]) {
            var dealer3 = dealer[2];
            var banker3 = banker[2];
            console.log(dealer3, banker3);
            if (dealer3 != null && banker3 == null) this.pokerMaterial[4].setProperty('albedoMap', tex(dealer3));else if (dealer3 == null && banker3 != null) this.pokerMaterial[4].setProperty('albedoMap', tex(banker3));else if (dealer3 != null && banker3 != null) this.pokerMaterial[4].setProperty('albedoMap', tex(dealer3));
          }
          if ((_this$pokerMaterial7 = this.pokerMaterial) != null && _this$pokerMaterial7[5]) {
            var _banker = banker[2];
            console.log(_banker);
            if (_banker != null) this.pokerMaterial[5].setProperty('albedoMap', tex(_banker));
          }
          var countPoker = dealer.length + banker.length;
          for (var index = countPoker; index < this.pokerMaterial.length; index++) {
            var _this$pokerMaterial8;
            if ((_this$pokerMaterial8 = this.pokerMaterial) != null && _this$pokerMaterial8[index]) this.pokerMaterial[index].setProperty('albedoMap', tex("10c"));
          }
        };
        _proto.createPokerMap = function createPokerMap() {
          var _this7 = this;
          // 企劃規則：牌點 + 花色（花色小寫），例：As, 10h, Kd, Qc
          // 檔名規則：花色 + 牌點（通常為 "C 10_v1" / "S A_v1" 之類）
          var suitToKey = {
            'S': 's',
            // ♠
            'H': 'h',
            // ♥
            'D': 'd',
            // ♦
            'C': 'c' // ♣
          };

          var ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

          // 遍歷所有 SpriteFrame，解析檔案名稱並分類
          var _loop = function _loop() {
              var spriteFrame = _step.value;
              var fileName = spriteFrame.name.toUpperCase();

              // 識別花色
              var suit = null;
              for (var _i = 0, _arr = ['C', 'D', 'H', 'S']; _i < _arr.length; _i++) {
                var s = _arr[_i];
                // 避免誤判：檔名開頭通常就是花色（例： "C 10_V1"）
                if (fileName.startsWith(s) || fileName.includes(s + " ") || fileName.includes(s + "_")) {
                  suit = s;
                  break;
                }
              }
              if (!suit) {
                console.warn("\u7121\u6CD5\u8B58\u5225\u82B1\u8272: " + spriteFrame.name);
                return 0; // continue
              }

              // 識別點數
              var rankIndex = -1;
              for (var i = 0; i < ranks.length; i++) {
                var _rank = ranks[i].toUpperCase();
                // 嘗試多種匹配模式
                var patterns = [" " + _rank + "_",
                // " 2_" 或 " A_"
                "" + suit + _rank + "_",
                // "C2_" 或 "CA_"
                suit + " " + _rank + "_",
                // "C 2_" 或 "C A_"
                " " + _rank + " ",
                // " 2 " 或 " A "
                "_" + _rank + "_" // "_2_" 或 "_A_"
                ];

                if (patterns.some(function (pattern) {
                  return fileName.includes(pattern);
                })) {
                  rankIndex = i;
                  break;
                }
              }
              if (rankIndex === -1) {
                console.warn("\u7121\u6CD5\u8B58\u5225\u9EDE\u6578: " + spriteFrame.name);
                return 0; // continue
              }

              var rank = ranks[rankIndex];
              var suitKey = suitToKey[suit];
              var cardKey = "" + rank + suitKey; // 例：As, 10h, Kd, Qc

              // 存入 pokerMap
              _this7.pokerMap.set(cardKey, spriteFrame);
              // console.log(`分類完成: ${spriteFrame.name} -> ${cardKey}`);
            },
            _ret;
          for (var _iterator = _createForOfIteratorHelperLoose(this.sfPokers), _step; !(_step = _iterator()).done;) {
            _ret = _loop();
            if (_ret === 0) continue;
          }

          // 驗證映射是否完整
          if (this.pokerMap.size === 52) {
            console.log('撲克牌映射建立完成，共 52 張 (key: 牌點+花色，如 As/10h)');
            console.log(this.pokerMap);
          } else {
            console.warn("\u64B2\u514B\u724C\u6620\u5C04\u4E0D\u5B8C\u6574\uFF0C\u50C5\u627E\u5230 " + this.pokerMap.size + "/52 \u5F35");
            // 列出缺失的 key
            var missing = [];
            for (var _iterator2 = _createForOfIteratorHelperLoose(['s', 'h', 'd', 'c']), _step2; !(_step2 = _iterator2()).done;) {
              var suitKey = _step2.value;
              for (var _iterator3 = _createForOfIteratorHelperLoose(ranks), _step3; !(_step3 = _iterator3()).done;) {
                var rank = _step3.value;
                var key = "" + rank + suitKey;
                if (!this.pokerMap.has(key)) missing.push(key);
              }
            }
            if (missing.length > 0) console.warn("\u7F3A\u5931\u7684 key: " + missing.join(', '));
          }
        };
        _proto.sortByPosition = function sortByPosition(items) {
          return [].concat(items).sort(function (a, b) {
            return a.Position - b.Position;
          });
        };
        return PokerMng;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "aniPoker", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pokerAniEvent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "pokerMaterial", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Polyfills.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6b643D2IuNIDL+wOywr0dtn", "Polyfills", undefined); // Licensed to the .NET Foundation under one or more agreements.
      // The .NET Foundation licenses this file to you under the MIT license.
      // Not exported from index
      /** @private */
      /** @private */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/prettyByte.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('prettyByte', prettyByte);
      cclegacy._RF.push({}, "290c0hhdNxFKpcVFIUGatLJ", "prettyByte", undefined);
      function prettyByte(_byte) {
        return (_byte < 0 ? "-" : "") + "0x" + Math.abs(_byte).toString(16).padStart(2, "0");
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ProcessStateResolver.ts", ['cc', './CommonValue.ts'], function (exports) {
  var cclegacy, processStateFromKey;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      processStateFromKey = module.processStateFromKey;
    }],
    execute: function () {
      exports('inferProcessStateFromGameStatus', inferProcessStateFromGameStatus);
      cclegacy._RF.push({}, "e64f18EuZNJmKH9AhRKM3t9", "ProcessStateResolver", undefined);
      function suffixFromWinner(winner) {
        var normalized = (winner != null ? winner : '').trim().toLowerCase();
        if (['banker', 'b', '莊', '庄'].includes(normalized)) return 'BW_1';
        if (['dealer', 'player', 'p', '閒', '闲'].includes(normalized)) return 'PW_1';
        if (['tie', 't', '和'].includes(normalized)) return 'T_1';
        return null;
      }
      function prefixFromThirdCards(cards) {
        var _cards$some, _cards$some2;
        var hasPlayerThird = (_cards$some = cards == null ? void 0 : cards.some(function (card) {
          return card.Position === 5;
        })) != null ? _cards$some : false;
        var hasBankerThird = (_cards$some2 = cards == null ? void 0 : cards.some(function (card) {
          return card.Position === 6;
        })) != null ? _cards$some2 : false;
        if (hasPlayerThird && hasBankerThird) return 'PB';
        if (hasPlayerThird) return 'P';
        if (hasBankerThird) return 'B';
        return 'Stand';
      }

      /**
       * 由伺服器 `GameStatusData`（補牌位 + Winner）推導對應 WebM `ProcessState`。
       */
      function inferProcessStateFromGameStatus(data) {
        var prefix = prefixFromThirdCards(data.Cards);
        var suffix = suffixFromWinner(data.Winner);
        if (!suffix) return null;
        return processStateFromKey(prefix + "_" + suffix);
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Recycles.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CommonValue.ts', './types.ts', './EventMsg.ts', './BasePoker.ts', './RecycleWall.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, v3, BoxCollider, instantiate, RigidBody, GameState, pokerCompressedVisualCount, TestPokerDetail, EventMsg, BasePoker, RecycleWall;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      v3 = module.v3;
      BoxCollider = module.BoxCollider;
      instantiate = module.instantiate;
      RigidBody = module.RigidBody;
    }, function (module) {
      GameState = module.GameState;
      pokerCompressedVisualCount = module.pokerCompressedVisualCount;
    }, function (module) {
      TestPokerDetail = module.TestPokerDetail;
    }, function (module) {
      EventMsg = module.EventMsg;
    }, function (module) {
      BasePoker = module.default;
    }, function (module) {
      RecycleWall = module.default;
    }],
    execute: function () {
      var _dec, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "2debb4EN+hCUos4LC99uTBk", "Recycles", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Recycles = exports('Recycles', (_dec = ccclass('Recycles'), _dec(_class = (_class2 = /*#__PURE__*/function (_BasePoker) {
        _inheritsLoose(Recycles, _BasePoker);
        function Recycles() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BasePoker.call.apply(_BasePoker, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "setPut", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Recycles.prototype;
        _proto.onLoad = function onLoad() {
          _BasePoker.prototype.onLoad.call(this);
          EventMsg.on(GameState.PutPoker, this.putPoker, this);
          this.content.activeLayout = false;
          this.content.enabled = true;
        }
        // protected start(): void {
        //     // setInterval(() => {
        //     //     this.testPut()
        //     // }, 2000);
        // }
        ;

        _proto.reset = function reset() {
          this.currentCountPoker = 0;
          this.removePoker();
        };
        _proto.revertPoker = function revertPoker(currentCardIndex) {
          var _this2 = this;
          this.content.activeLayout = true;
          var reduce = this.reducePoker;
          var check = pokerCompressedVisualCount(currentCardIndex, reduce);
          if (check < this.content.children.length && check === this.content.children.length) return;
          var count = check - this.content.children.length;
          this.createPoker(count);
          this._orderedActiveChildren().forEach(function (child) {
            if (child.rotation.z !== -180) {
              child.setRotationFromEuler(v3(0, 0, -180));
            }
          });
          this.scheduleOnce(function () {
            _this2.content.activeLayout = false;
          }, 0);
        };
        _proto.putPoker = function putPoker(putCount) {
          var _this3 = this;
          var _nodes = [];
          var _loop = function _loop() {
            var prevVisual = pokerCompressedVisualCount(_this3.currentCountPoker, _this3.reducePoker);
            _this3.currentCountPoker++;
            var newVisual = pokerCompressedVisualCount(_this3.currentCountPoker, _this3.reducePoker);
            // 每張邏輯牌都生成一個實體；壓縮層未增加者 name=""，供他處依名稱清除；層級上升者保留非空名（預製體預設名亦可）
            var _node = instantiate(_this3.prefab);
            _nodes.push(_node);
            _node.getComponent(RecycleWall).enabled = true;
            var rigi = _node.getComponent(RigidBody);
            if (rigi) {
              rigi.linearFactor = v3(0, 1, 0);
              rigi.type = RigidBody.Type.STATIC;
            }
            if (newVisual <= prevVisual) {
              _node.name = '';
            }
            _this3.scheduleOnce(function () {
              // let temp = this.content.node.position
              _node.setPosition(0, 0.060286, 0);
              _node.setParent(_this3.content.node);
              _node.setRotationFromEuler(v3(0, 0, -180));
              var rigi = _node.getComponent(RigidBody);
              if (rigi) {
                rigi.type = RigidBody.Type.DYNAMIC;
                rigi.useCCD = true;
                rigi.setLinearVelocity(v3(0, -_this3.setPut, 0));
              }
            }, i * 0.1);
          };
          for (var i = 0; i < putCount; i++) {
            _loop();
          }
          this.scheduleOnce(function () {
            _this3.content.activeLayout = true;
            _this3.scheduleOnce(function () {
              return _this3.content.activeLayout = false;
            }, 0);
            _nodes.forEach(function (node) {
              if (node.isValid) node.getComponent(BoxCollider).enabled = false;
            });
          }, putCount * 0.1 + 0.2);
        };
        _proto.testRever = function testRever() {
          var detail = new TestPokerDetail();
          detail.dealerPoker = [];
          detail.bankerPoker = [];
          detail.totalPoker = 52 * 4;
          detail.remainPoker = 52 * 4;
          detail.recyclePoker = 40;
          this.revertPoker(detail.recyclePoker);
        };
        _proto.testPut = function testPut() {
          _BasePoker.prototype.revertPoker.call(this, null);
          EventMsg.emit(GameState.PutPoker, 5);
        };
        return Recycles;
      }(BasePoker), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "setPut", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return -5;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RecycleWall.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, BoxCollider, Layers, RigidBody, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      BoxCollider = module.BoxCollider;
      Layers = module.Layers;
      RigidBody = module.RigidBody;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "92cd1YN3qFOlZExlOvjKdll", "RecycleWall", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var RecycleWall = exports('default', (_dec = ccclass('RecycleWall'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RecycleWall, _Component);
        function RecycleWall() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._collider = null;
          _this.check = false;
          return _this;
        }
        var _proto = RecycleWall.prototype;
        _proto.onLoad = function onLoad() {
          this._collider = this.node.getComponent(BoxCollider);
          if (this._collider) {
            this._collider.on('onCollisionEnter', this.onCollisionEnter, this);
            this._collider.on('onCollisionStay', this.onCollisionStay, this);
            this._collider.on('onCollisionExit', this.onCollisionExit, this);
          }
        };
        _proto.onDestroy = function onDestroy() {
          if (this._collider) {
            this._collider.off('onCollisionEnter', this.onCollisionEnter, this);
            this._collider.off('onCollisionStay', this.onCollisionStay, this);
            this._collider.off('onCollisionExit', this.onCollisionExit, this);
          }
        };
        /** 碰撞開始時觸發 */
        _proto.onCollisionEnter = function onCollisionEnter(event) {
          var otherNode = event.otherCollider.node;
          // 偵測 Layer 名稱是否為 Poker
          // console.log(otherNode.name);

          if (otherNode.name === '') otherNode.destroy();else if (otherNode.layer === 1 << Layers.nameToLayer('Poker')) {
            otherNode.getComponent(RigidBody).type = RigidBody.Type.STATIC;
            otherNode.getComponent(RigidBody).enabled = false;
            // otherNode.getComponent(BoxCollider)!.enabled = false
            // console.log('[updateWall] Poker Layer 碰撞 Enter:', otherNode.name);
          }
        }

        /** 碰撞持續時頻繁觸發 */;
        _proto.onCollisionStay = function onCollisionStay(event) {
          // console.log('[updateWall] Collision Stay:', event.otherCollider.node.name);
        }

        /** 碰撞結束時觸發 */;
        _proto.onCollisionExit = function onCollisionExit(event) {
          // console.log('[updateWall] Collision Exit:', event.otherCollider.node.name);
        };
        return RecycleWall;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ReqResultData.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports({
        isGameStatusData: isGameStatusData,
        isRoundResult: isRoundResult
      });
      cclegacy._RF.push({}, "b4145eSBM9OE5zUJO8KIhST", "ReqResultData", undefined);
      /** `GameState.ReqResult` 事件 payload：正式線路為 Server 狀態，測試線路為 RoundResult */
      function isGameStatusData(data) {
        return data != null && 'GameStatusCode' in data;
      }
      function isRoundResult(data) {
        return data != null && 'dealerPoker' in data && !('GameStatusCode' in data);
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Request.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, cclegacy;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "393b2LvnKtF/oVHiM22+ER5", "Request", undefined);
      var Request = exports('default', /*#__PURE__*/function () {
        /**避免傳遞過長，因此在初始化時就先記錄app狀況 */
        function Request(appBool) {
          if (appBool === void 0) {
            appBool = false;
          }
          this.method = Method.GET;
          this.headers = new Headers();
          this.body = void 0;
          this.isApp = false;
          this.isApp = appBool;
        }
        var _proto = Request.prototype;
        _proto.setMethod = function setMethod(_method) {
          this.method = _method;
          return this;
        };
        _proto.setHeaders = function setHeaders(_headers) {
          this.headers = _headers;
          return this;
        };
        _proto.setToken = function setToken(str) {
          this.headers.Authorization = "Bearer " + str;
          return this;
        };
        _proto.setBody = function setBody(_body) {
          this.body = _body;
          return this;
        };
        _proto.deletother = function deletother() {
          delete this.headers.Accept;
          delete this.headers.Authorization;
          return this;
        };
        _proto.deletContentType = function deletContentType() {
          delete this.headers["Content-Type"];
          return this;
        };
        _proto.setContentType = function setContentType(type) {
          this.headers["Content-Type"] = type;
          return this;
        };
        _proto.fetchData = function fetchData(_url, callback) {
          var _this = this;
          // console.log(_url);
          // console.log(_url.split("?"));
          // console.log(_url.split("?")[0].split("/"));
          // console.log(_url.split("?")[0].split("/")[_url.split("?")[0].split("/").length]);
          console.log(this);
          return new Promise(function (resolve, reject) {
            var data;
            fetch(_url, _this).then(function (response) {
              /**避免轉json有時候會因為沒資料直接錯誤 */
              try {
                return response.json();
              } catch (error) {
                return null;
              }
            })
            // .then(response => response.json())
            ["catch"](function (err) {
              return console.error(err);
            }).then(function (response) {
              return data = response;
            }) /**必定會接，所以先接成區域變數，好做後面的流程 */.then(function (response) {
              return console.log("\u8CC7\u6599\u540D\u7A31\uFF1A" + _url.split("?")[0].split("/")[_url.split("?")[0].split("/").length - 1]);
            }).then(function (response) {
              try {
                console.log("\u8CC7\u6599\u5167\u5BB9", data);
                if (callback) callback(data);
                resolve(data);
              } catch (error) {
                resolve(new PacketData(new Status("999")));
                console.log(error);
              }
            });
          });
        };
        _proto.XMLData = function XMLData(url, callback) {
          var _this2 = this;
          console.log("開始", url);
          return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            // console.error(this.method);
            // console.error(this.headers["Content-Type"]);
            xhr.setRequestHeader("Content-Type", _this2.headers["Content-Type"]);
            xhr.setRequestHeader("Accept", _this2.headers["Accept"]);
            xhr.setRequestHeader("Authorization", _this2.headers["Authorization"]);
            if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
            xhr.onload = function () {
              console.log(xhr);
              if (xhr.readyState === 4 && xhr.status === 200) {
                try {
                  console.warn(JSON.parse(xhr.response));
                  if (callback) callback(JSON.parse(xhr.response));
                  resolve(JSON.parse(xhr.response));
                } catch (error) {
                  resolve(new PacketData(new Status("999")));
                  console.error("Format error", xhr);
                }
              } else {
                resolve(new PacketData(new Status(xhr.status.toString())));
                console.error("connet error", xhr);
              }
            };
            xhr.open(_this2.method, url, true);
            if (_this2.method == Method.POST) xhr.send(_this2.body);else xhr.send();
          });
        };
        _proto.SwitchGetData = /*#__PURE__*/function () {
          var _SwitchGetData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(url, callback) {
            var _this3 = this;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  return _context2.abrupt("return", new Promise( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve, reject) {
                    return _regeneratorRuntime().wrap(function _callee$(_context) {
                      while (1) switch (_context.prev = _context.next) {
                        case 0:
                          if (!_this3.isApp) {
                            _context.next = 8;
                            break;
                          }
                          _context.t0 = resolve;
                          _context.next = 4;
                          return _this3.XMLData(url, callback);
                        case 4:
                          _context.t1 = _context.sent;
                          (0, _context.t0)(_context.t1);
                          _context.next = 13;
                          break;
                        case 8:
                          _context.t2 = resolve;
                          _context.next = 11;
                          return _this3.fetchData(url, callback);
                        case 11:
                          _context.t3 = _context.sent;
                          (0, _context.t2)(_context.t3);
                        case 13:
                        case "end":
                          return _context.stop();
                      }
                    }, _callee);
                  }))));
                case 1:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          function SwitchGetData(_x, _x2) {
            return _SwitchGetData.apply(this, arguments);
          }
          return SwitchGetData;
        }();
        return Request;
      }());
      var Method = exports('Method', /*#__PURE__*/function (Method) {
        Method["GET"] = "GET";
        Method["POST"] = "POST";
        return Method;
      }({}));
      var ContentType = exports('ContentType', /*#__PURE__*/function (ContentType) {
        ContentType["Default"] = "";
        ContentType["Json"] = "application/json, text/plain, */*";
        ContentType["FormData"] = "multipart/form-data";
        ContentType["Form"] = "application/x-www-form-urlencoded";
        return ContentType;
      }({}));
      var Headers = function Headers() {
        this["Content-Type"] = ContentType.Json;
        this["Accept"] = "application/json;charset=UTF-8";
        this["Authorization"] = "";
      };
      var PacketData = function PacketData(_state) {
        this.Status = void 0;
        this.Status = _state;
      };
      var Status = function Status(_code, _message) {
        this.Code = void 0;
        this.Message = void 0;
        this.Timestamp = void 0;
        this.TraceCode = void 0;
        this.Code = _code;
        this.Message = _message;
      };
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RequestData.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports({
        APIKey: void 0,
        APIUrl: void 0,
        Body: void 0
      });
      cclegacy._RF.push({}, "d7535nicR9Mkptj9sLvf5EN", "RequestData", undefined);
      var Body;
      (function (_Body) {
        var NoMemberID;
        (function (_NoMemberID) {
          var base = function base() {
            this.sign = void 0;
          };
          _NoMemberID.base = base;
        })(NoMemberID || (NoMemberID = _Body.NoMemberID || (_Body.NoMemberID = {})));
        var NeedToken;
        (function (_NeedToken) {
          var base = function base() {
            this.sign = void 0;
            this.memberId = void 0;
          };
          _NeedToken.base = base;
        })(NeedToken || (NeedToken = _Body.NeedToken || (_Body.NeedToken = {})));
      })(Body || (Body = exports('Body', {})));
      var APIUrl;
      (function (_APIUrl) {
        var GPG = function GPG() {
          this.PlayAPI = "";
          this.QAPlayAPI = "";
        };
        _APIUrl.GPG = GPG;
      })(APIUrl || (APIUrl = exports('APIUrl', {})));
      var API = exports('API', /*#__PURE__*/function (API) {
        API["test"] = "www.google.com";
        return API;
      }({}));
      var APIKey;
      (function (_APIKey) {
        var GPG = function GPG() {
          this.QA = "";
          this.Online = "";
        };
        _APIKey.GPG = GPG;
      })(APIKey || (APIKey = exports('APIKey', {})));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ResponseData.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "2212dRQUl9DpLwmb3QEOock", "ResponseData", undefined);
      /**只有純訊息沒有資料 */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ResultClassifier.ts", ['cc', './CommonValue.ts'], function (exports) {
  var cclegacy, Winner;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      Winner = module.Winner;
    }],
    execute: function () {
      exports({
        classifyFinalProcessKey: classifyFinalProcessKey,
        winnerFromPoints: winnerFromPoints
      });
      cclegacy._RF.push({}, "498cbwvjlVBb7EkCyfL3J2M", "ResultClassifier", undefined);
      function winnerFromPoints(bankerPointFinal, dealerPointFinal) {
        if (bankerPointFinal === dealerPointFinal) return Winner.Tie;
        return bankerPointFinal > dealerPointFinal ? Winner.Banker : Winner.Dealer;
      }

      /**
       * 依「是否補牌」與「勝負」分類成對應 WebM 檔名關鍵字。
       * - Stand_*：雙方都不補牌
       * - P_*：只有閒家(Player=Dealer)補牌
       * - B_*：只有莊家補牌
       * - PB_*：雙方都補牌
       */
      function classifyFinalProcessKey(dealerDrew, bankerDrew, bankerPointFinal, dealerPointFinal) {
        var prefix = dealerDrew && bankerDrew ? 'PB' : dealerDrew ? 'P' : bankerDrew ? 'B' : 'Stand';
        var suffix = bankerPointFinal === dealerPointFinal ? 'T_1' : bankerPointFinal > dealerPointFinal ? 'BW_1' : 'PW_1';
        return prefix + "_" + suffix;
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Rules.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports({
        isNatural: isNatural,
        shouldBankerDraw: shouldBankerDraw
      });
      cclegacy._RF.push({}, "6db61FN9SxMHr7slFi3bH8G", "Rules", undefined);
      function isNatural(point) {
        return point === 8 || point === 9;
      }

      /**
       * 百家樂莊家補牌規則。
       * @param bankerPoint2 莊家前兩張點數（0-9）
       * @param dealerThirdPoint 閒家第三張牌點數（0-9），若閒家未補牌則為 null
       */
      function shouldBankerDraw(bankerPoint2, dealerThirdPoint) {
        // 閒家不補：莊家 0-5 補，6-7 不補
        if (dealerThirdPoint == null) return bankerPoint2 <= 5;

        // 閒家有補：依莊家點數 + 閒家第三張決定
        if (bankerPoint2 <= 2) return true;
        if (bankerPoint2 === 3) return dealerThirdPoint !== 8;
        if (bankerPoint2 === 4) return dealerThirdPoint >= 2 && dealerThirdPoint <= 7;
        if (bankerPoint2 === 5) return dealerThirdPoint >= 4 && dealerThirdPoint <= 7;
        if (bankerPoint2 === 6) return dealerThirdPoint === 6 || dealerThirdPoint === 7;
        return false; // 7 不補；8/9 自然局前面已擋
      }

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ServerSentEventsTransport.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ILogger.ts', './ITransport.ts', './Utils2.ts'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, _extends, cclegacy, LogLevel, TransferFormat, Arg, Platform, getUserAgentHeader, getDataDetail, sendMessage;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      LogLevel = module.LogLevel;
    }, function (module) {
      TransferFormat = module.TransferFormat;
    }, function (module) {
      Arg = module.Arg;
      Platform = module.Platform;
      getUserAgentHeader = module.getUserAgentHeader;
      getDataDetail = module.getDataDetail;
      sendMessage = module.sendMessage;
    }],
    execute: function () {
      cclegacy._RF.push({}, "11098XhU4tEFrHk3kZC8ooU", "ServerSentEventsTransport", undefined); // Licensed to the .NET Foundation under one or more agreements.
      /** @private */
      var ServerSentEventsTransport = exports('ServerSentEventsTransport', /*#__PURE__*/function () {
        function ServerSentEventsTransport(httpClient, accessToken, logger, options) {
          this._httpClient = void 0;
          this._accessToken = void 0;
          this._logger = void 0;
          this._options = void 0;
          this._eventSource = void 0;
          this._url = void 0;
          this.onreceive = void 0;
          this.onclose = void 0;
          this._httpClient = httpClient;
          this._accessToken = accessToken;
          this._logger = logger;
          this._options = options;
          this.onreceive = null;
          this.onclose = null;
        }
        var _proto = ServerSentEventsTransport.prototype;
        _proto.connect = /*#__PURE__*/function () {
          var _connect = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url, transferFormat) {
            var _this = this;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  Arg.isRequired(url, "url");
                  Arg.isRequired(transferFormat, "transferFormat");
                  Arg.isIn(transferFormat, TransferFormat, "transferFormat");
                  this._logger.log(LogLevel.Trace, "(SSE transport) Connecting.");

                  // set url before accessTokenFactory because this._url is only for send and we set the auth header instead of the query string for send
                  this._url = url;
                  if (this._accessToken) {
                    url += (url.indexOf("?") < 0 ? "?" : "&") + ("access_token=" + encodeURIComponent(this._accessToken));
                  }
                  return _context.abrupt("return", new Promise(function (resolve, reject) {
                    var opened = false;
                    if (transferFormat !== TransferFormat.Text) {
                      reject(new Error("The Server-Sent Events transport only supports the 'Text' transfer format"));
                      return;
                    }
                    var eventSource;
                    if (Platform.isBrowser || Platform.isWebWorker) {
                      eventSource = new _this._options.EventSource(url, {
                        withCredentials: _this._options.withCredentials
                      });
                    } else {
                      // Non-browser passes cookies via the dictionary
                      var cookies = _this._httpClient.getCookieString(url);
                      var headers = {};
                      headers.Cookie = cookies;
                      var _getUserAgentHeader = getUserAgentHeader(),
                        name = _getUserAgentHeader[0],
                        value = _getUserAgentHeader[1];
                      headers[name] = value;
                      eventSource = new _this._options.EventSource(url, {
                        withCredentials: _this._options.withCredentials,
                        headers: _extends({}, headers, _this._options.headers)
                      });
                    }
                    try {
                      eventSource.onmessage = function (e) {
                        if (_this.onreceive) {
                          try {
                            _this._logger.log(LogLevel.Trace, "(SSE transport) data received. " + getDataDetail(e.data, _this._options.logMessageContent) + ".");
                            _this.onreceive(e.data);
                          } catch (error) {
                            _this._close(error);
                            return;
                          }
                        }
                      };

                      // @ts-ignore: not using event on purpose
                      eventSource.onerror = function (e) {
                        // EventSource doesn't give any useful information about server side closes.
                        if (opened) {
                          _this._close();
                        } else {
                          reject(new Error("EventSource failed to connect. The connection could not be found on the server," + " either the connection ID is not present on the server, or a proxy is refusing/buffering the connection." + " If you have multiple servers check that sticky sessions are enabled."));
                        }
                      };
                      eventSource.onopen = function () {
                        _this._logger.log(LogLevel.Information, "SSE connected to " + _this._url);
                        _this._eventSource = eventSource;
                        opened = true;
                        resolve();
                      };
                    } catch (e) {
                      reject(e);
                      return;
                    }
                  }));
                case 7:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function connect(_x, _x2) {
            return _connect.apply(this, arguments);
          }
          return connect;
        }();
        _proto.send = /*#__PURE__*/function () {
          var _send = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(data) {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (this._eventSource) {
                    _context2.next = 2;
                    break;
                  }
                  return _context2.abrupt("return", Promise.reject(new Error("Cannot send until the transport is connected")));
                case 2:
                  return _context2.abrupt("return", sendMessage(this._logger, "SSE", this._httpClient, this._url, data, this._options));
                case 3:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function send(_x3) {
            return _send.apply(this, arguments);
          }
          return send;
        }();
        _proto.stop = function stop() {
          this._close();
          return Promise.resolve();
        };
        _proto._close = function _close(e) {
          if (this._eventSource) {
            this._eventSource.close();
            this._eventSource = undefined;
            if (this.onclose) {
              this.onclose(e);
            }
          }
        };
        return ServerSentEventsTransport;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SignalR.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './index3.ts', './ILogger.ts', './HubConnectionBuilder.ts', './ITransport.ts'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, cclegacy, LogLevel, HubConnectionBuilder, HttpTransportType;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, null, null, function (module) {
      LogLevel = module.LogLevel;
    }, function (module) {
      HubConnectionBuilder = module.HubConnectionBuilder;
    }, function (module) {
      HttpTransportType = module.HttpTransportType;
    }],
    execute: function () {
      cclegacy._RF.push({}, "593227Ak3FAu4hJ9mKjGVKM", "SignalR", undefined);
      var _signalR = exports('_signalR', /*#__PURE__*/function () {
        function _signalR() {
          this.connection = void 0;
          this.logger = LogLevel.Error;
          this.reconnectRetryDelays = [0, 1000, 1000, 2000, 2000];
          /**心跳機制 */
          this.keepAliveIntervalInMilliseconds = 1000;
          /**伺服器逾時（毫秒）。
          若在此時間內未接收到伺服器的任何訊息，連線將以錯誤終止。 預設逾時為 30,000 毫秒（30 秒） */
          this.serverTimeoutInMilliseconds = 99999999;
          this.heartbeatId = null;
          this.started = null;
        }
        var _proto = _signalR.prototype;
        _proto.init = /*#__PURE__*/function () {
          var _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url, token) {
            var signalrBuilder;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (this.keepAliveIntervalInMilliseconds > 10000) console.error("心跳超過10秒以上可能會跟Server段連");

                  // 每次建立新 Hub 前先釋放舊連線，否則 this.started 仍指向上一條 Promise，重連時不會真正 start()
                  _context.next = 3;
                  return this.stopConnection();
                case 3:
                  signalrBuilder = new HubConnectionBuilder().withAutomaticReconnect(this.reconnectRetryDelays).configureLogging(this.logger)
                  //@ts-ignore
                  .withUrl("" + url, {
                    //@ts-ignore
                    accessTokenFactory: function accessTokenFactory() {
                      return token;
                    },
                    skipNegotiation: true,
                    transport: HttpTransportType.WebSockets
                  });
                  this.connection = signalrBuilder.build();
                  this.connection.keepAliveIntervalInMilliseconds = this.keepAliveIntervalInMilliseconds;
                  this.connection.serverTimeoutInMilliseconds = this.serverTimeoutInMilliseconds;
                  _context.next = 10;
                  return this.startConnection();
                case 10:
                  this.connection.on('Receive', this.onReceive);

                // await this.connection.send('Send', {});
                // this.connection.invoke('Send', {});
                // this.connection.start();
                // console.log(this.connection);
                case 11:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function init(_x, _x2) {
            return _init.apply(this, arguments);
          }
          return init;
        }();
        _proto.onReceive = function onReceive(data) {
          // console.log(data);
        };
        /**
         *  - on(event, cb): void
         *   - 註冊內部事件監聽器。支援事件: 'open'|'close'|'message'|'error'|'reconnecting'|'reconnected'。
         *   - cb 為任何接收參數的 callback。可用於監控連線生命週期與收到的訊息 metadata。
         */
        _proto.onReconnecting = function onReconnecting(cb) {
          this.connection.onreconnecting(cb);
        };
        _proto.onReconnected = function onReconnected(cb) {
          this.connection.onreconnected(cb);
        };
        _proto.onClose = function onClose(error) {
          console.error('close', error);
        };
        _proto.attachConnectionLifecycleHandlers = function attachConnectionLifecycleHandlers() {
          if (!this.connection) return;
          this.connection.onreconnecting(function (error) {
            console.error('--------reconnecting-------', error);
          });
          this.connection.onreconnected(function (connectionId) {
            console.error('--------reconnected-------', connectionId);
          });
          this.connection.onclose(function (error) {
            console.error('close', error);
          });
        }

        /**
         * - startConnection(): Promise<void>
         *   - 安全的啟動連線（可多次呼叫但僅實際執行一次啟動流程）。
         *   - 內部會先 attachConnectionLifecycleHandlers()（將 Hub 的 onreconnecting/onreconnected/onclose 綁回本地事件）。
         *   - 啟動成功會 emit('open') 並啟動 startHeartbeat()；若失敗會 emit('error') 並重設 started 為 null 以利重試。
         *   - 回傳代表啟動完成或失敗的 Promise。
         */;
        _proto.startConnection = /*#__PURE__*/
        function () {
          var _startConnection = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var _this = this;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  if (this.connection) {
                    _context3.next = 2;
                    break;
                  }
                  throw new Error('SignalR connection not initialized. Call init() first.');
                case 2:
                  if (!this.started) {
                    this.attachConnectionLifecycleHandlers();
                    this.started = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                        while (1) switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.prev = 0;
                            _context2.next = 3;
                            return _this.connection.start();
                          case 3:
                            _this.startHeartbeat();
                            _context2.next = 11;
                            break;
                          case 6:
                            _context2.prev = 6;
                            _context2.t0 = _context2["catch"](0);
                            console.error('error', _context2.t0);
                            // clear started so caller can retry
                            _this.started = null;
                            throw _context2.t0;
                          case 11:
                          case "end":
                            return _context2.stop();
                        }
                      }, _callee2, null, [[0, 6]]);
                    }))();
                  }
                  return _context3.abrupt("return", this.started);
                case 4:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function startConnection() {
            return _startConnection.apply(this, arguments);
          }
          return startConnection;
        }()
        /**
         * - stopConnection(): Promise<void>
         *   - 停止心跳並呼叫 connection.stop()；無論是否成功都會重設 started 為 null。
         */;

        _proto.stopConnection = /*#__PURE__*/
        function () {
          var _stopConnection = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  if (this.connection) {
                    _context4.next = 2;
                    break;
                  }
                  return _context4.abrupt("return");
                case 2:
                  this.stopHeartbeat();
                  _context4.prev = 3;
                  _context4.next = 6;
                  return this.connection.stop();
                case 6:
                  _context4.prev = 6;
                  this.started = null;
                  return _context4.finish(6);
                case 9:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this, [[3,, 6, 9]]);
          }));
          function stopConnection() {
            return _stopConnection.apply(this, arguments);
          }
          return stopConnection;
        }()
        /**
         * - startHeartbeat(method: string = 'Ping'): void
         *   - 啟動一個輕量心跳，定期用 connection.send(method) 單向呼叫伺服器（不等待回應）。
         *   - 心跳間隔使用 keepAliveIntervalInMilliseconds（至少 1000ms）。
         *   - 與 SignalR 內建 keepalive 不同，此心跳為額外的應用層心跳，可用於自定義 Ping 演算法或觸發伺服器端狀態更新。
         */;

        _proto.startHeartbeat = function startHeartbeat(method) {
          var _this2 = this;
          if (method === void 0) {
            method = 'Ping';
          }
          this.stopHeartbeat();
          if (!this.connection) return;
          var interval = Math.max(1000, this.keepAliveIntervalInMilliseconds || 10000);
          this.heartbeatId = window.setInterval(function () {
            // fire-and-forget; server can implement Ping/Heartbeat
            try {
              void _this2.connection.send(method)["catch"](function () {});
            } catch (_unused) {}
          }, interval);
        }
        /**
         * - stopHeartbeat(): void
         *   - 停止先前啟動的心跳 interval（若存在）。
         */;
        _proto.stopHeartbeat = function stopHeartbeat() {
          if (this.heartbeatId != null) {
            clearInterval(this.heartbeatId);
            this.heartbeatId = null;
          }
        }

        /**
         *   - 嘗試確保連線已啟動，會呼叫 startConnection() 並在 timeoutMs 到時候拒絕（預設 10s）。
         *   - 傳入 timeoutMs <= 0 時會直接回傳 startConnection() 的 Promise（不額外套超時）。
         */;
        _proto.ensureStarted = /*#__PURE__*/
        function () {
          var _ensureStarted = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(timeoutMs) {
            var startPromise;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  if (timeoutMs === void 0) {
                    timeoutMs = 10000;
                  }
                  startPromise = this.startConnection();
                  if (!(!timeoutMs || timeoutMs <= 0)) {
                    _context5.next = 4;
                    break;
                  }
                  return _context5.abrupt("return", startPromise);
                case 4:
                  return _context5.abrupt("return", new Promise(function (resolve, reject) {
                    var to = setTimeout(function () {
                      return reject(new Error('SignalR start timeout'));
                    }, timeoutMs);
                    startPromise.then(function () {
                      clearTimeout(to);
                      resolve();
                    })["catch"](function (err) {
                      clearTimeout(to);
                      reject(err);
                    });
                  }));
                case 5:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this);
          }));
          function ensureStarted(_x3) {
            return _ensureStarted.apply(this, arguments);
          }
          return ensureStarted;
        }()
        /**
         * - getConnection(): HubConnection | undefined
         *   - 回傳底層 HubConnection 實例（可用於需要直接存取底層 API 的情況）。
         */;

        _proto.getConnection = function getConnection() {
          if (!this.connection) return Promise.reject(new Error('Connection not initialized'));
          return this.connection;
        };
        return _signalR;
      }());
      var SignalR = exports('default', new _signalR());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SignalRMng.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Request.ts', './PlayRoundUseCase.ts', './CommonValue.ts', './types.ts', './GameConfig.ts', './InitData.ts', './index.ts', './SignalR.ts', './EventMsg.ts', './HubConnection.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Component, Request, Method, playBaccaratRound, GameState, CommonValue, GameStatusCode, TestPokerDetail, GameConfig, ServerError, InitData, _signalR, EventMsg, HubConnectionState;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      Request = module.default;
      Method = module.Method;
    }, function (module) {
      playBaccaratRound = module.playBaccaratRound;
    }, function (module) {
      GameState = module.GameState;
      CommonValue = module.default;
    }, function (module) {
      GameStatusCode = module.GameStatusCode;
      TestPokerDetail = module.TestPokerDetail;
    }, function (module) {
      GameConfig = module.GameConfig;
      ServerError = module.ServerError;
    }, function (module) {
      InitData = module.InitData;
    }, null, function (module) {
      _signalR = module._signalR;
    }, function (module) {
      EventMsg = module.EventMsg;
    }, function (module) {
      HubConnectionState = module.HubConnectionState;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "a9616p8y2NCbqVh+wObi4R/", "SignalRMng", undefined);
      var ccclass = _decorator.ccclass;

      /** 須完成 Init 的模組數：GameMng、WEBMMng、PokerMng 各 emit 一次 ReqInit */
      var REQUIRED_INIT_ACKS = 3;
      function safeJsonParse(raw, label) {
        try {
          return JSON.parse(raw);
        } catch (error) {
          console.error("[SignalRMng] " + label + " JSON.parse \u5931\u6557", error);
          return null;
        }
      }
      var SignalRMng = exports('SignalRMng', (_dec = ccclass('SignalRMng'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SignalRMng, _Component);
        function SignalRMng() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.initAckCount = 0;
          _this.isInitOK = false;
          _this.testRound = 0;
          _this.signal = new _signalR();
          _this.isGetResult = false;
          _this.disksId = [/**Billy */
          '1E6C7341-B598-4759-BA94-41384EECABA9', /**一桌 */
          /**本地測試 */
          'AB8DCC75-89C7-46C7-B9CF-5AE3B6BF8853' /**二桌 */];
          return _this;
        }
        var _proto = SignalRMng.prototype;
        _proto.onLoad = function onLoad() {
          EventMsg.on(GameState.RandomResult, this.randomResult, this);
          EventMsg.on(GameState.ReqInit, this.reqInit, this);
        };
        _proto.start = /*#__PURE__*/function () {
          var _start = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var deskId, loginToken, parsed;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  deskId = localStorage.getItem('deskId');
                  /**因為不同桌，因此需要重新取得token */
                  if (deskId !== this.getDeskId()) {
                    localStorage.setItem('deskId', this.getDeskId());
                    localStorage.removeItem('loginToken');
                  }
                  loginToken = localStorage.getItem('loginToken');
                  parsed = null;
                  /**如果本地紀錄的token是空的，就取token */
                  if (!(!loginToken || loginToken === 'undefined' || loginToken === 'null')) {
                    _context.next = 10;
                    break;
                  }
                  _context.next = 7;
                  return this.getToken();
                case 7:
                  parsed = _context.sent;
                  _context.next = 15;
                  break;
                case 10:
                  /**資料轉換 */
                  parsed = safeJsonParse(loginToken, 'loginToken');
                  /**如果轉換失敗，就重新取得token */
                  if (parsed) {
                    _context.next = 15;
                    break;
                  }
                  _context.next = 14;
                  return this.getToken();
                case 14:
                  parsed = _context.sent;
                case 15:
                  this.login(parsed);
                case 16:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function start() {
            return _start.apply(this, arguments);
          }
          return start;
        }();
        _proto.reset = function reset() {
          this.isInitOK = false;
          this.initAckCount = 0;
          this.unschedule(this.reLogin.bind(this));
          localStorage.removeItem('loginToken');
          /**整個重新來 */
          this.signal = new _signalR();
        };
        _proto.getToken = /*#__PURE__*/function () {
          var _getToken = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var deskId, body, _login;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  deskId = this.getDeskId();
                  body = {
                    DeskId: deskId
                  };
                  _context2.next = 4;
                  return new Request().setMethod(Method.POST).setBody(JSON.stringify(body)).deletother().fetchData(GameConfig.authUrl);
                case 4:
                  _login = _context2.sent;
                  // if (!_login) return console.error("------取得token失敗：-----", _login.ErrMsg);
                  localStorage.setItem('loginToken', JSON.stringify(_login));
                  return _context2.abrupt("return", _login);
                case 7:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function getToken() {
            return _getToken.apply(this, arguments);
          }
          return getToken;
        }() /** init 為 async：必須 await，否則連線失敗會變成未處理的 Promise rejection，try/catch 抓不到 */;
        _proto.login = /*#__PURE__*/
        function () {
          var _login2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(data) {
            var reTrySignal, reTryLogin;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.prev = 0;
                  _context3.next = 3;
                  return this.signal.init(GameConfig.messageRoomUrl, data.Data.token);
                case 3:
                  reTrySignal = this.signal.connection.keepAliveIntervalInMilliseconds;
                  this.signal.connection.on('OnDeskChangeEGame', this.reqStatus.bind(this));
                  this.signal.connection.on('OnStopConnection', this.stopConnection.bind(this));
                  this.signal.onReconnecting(function () {
                    console.error("\u91CD\u65B0\u9023\u7DDAing....." + reTrySignal);
                    EventMsg.emit(GameState.LoadingOpen);
                    EventMsg.emit(GameState.ResetGame);
                  });
                  // this.signal.onReconnected(() => {
                  // })
                  EventMsg.emit(GameState.Init, data);
                  _context3.next = 17;
                  break;
                case 11:
                  _context3.prev = 11;
                  _context3.t0 = _context3["catch"](0);
                  console.table({
                    "斷線編號": data.ErrCode,
                    "斷線訊息": new ServerError().conver(data.ErrCode),
                    "錯誤內容": _context3.t0.message
                  });
                  reTryLogin = GameConfig.tokenRetrySeconds;
                  this.scheduleOnce(this.reLogin.bind(this), reTryLogin);
                case 17:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this, [[0, 11]]);
          }));
          function login(_x) {
            return _login2.apply(this, arguments);
          }
          return login;
        }();
        _proto.stopConnection = /*#__PURE__*/function () {
          var _stopConnection = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            var reTryLogin;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  console.log('通知斷線');
                  EventMsg.emit(GameState.LoadingOpen);
                  _context4.next = 4;
                  return this.signal.stopConnection();
                case 4:
                  this.reset();
                  reTryLogin = GameConfig.tokenRetrySeconds;
                  this.scheduleOnce(this.reLogin.bind(this), reTryLogin);
                case 7:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
          function stopConnection() {
            return _stopConnection.apply(this, arguments);
          }
          return stopConnection;
        }();
        _proto.reLogin = /*#__PURE__*/function () {
          var _reLogin = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
            var data;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return this.getToken();
                case 2:
                  data = _context5.sent;
                  this.login(data);
                case 4:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this);
          }));
          function reLogin() {
            return _reLogin.apply(this, arguments);
          }
          return reLogin;
        }();
        _proto.reqStatus = function reqStatus(data) {
          if (!this.isInitOK || this.signal.connection.state !== HubConnectionState.Connected) return;
          var converData = safeJsonParse(data, 'OnDeskChangeEGame');
          if (!converData) return;
          if (!converData.IsSuccess) {
            console.error('[SignalRMng] 牌桌狀態 IsSuccess=false', converData.ErrCode, converData.ErrMsg);
            return;
          }
          var status = converData.Data;
          console.log("\u72C0\u614B\uFF1A" + status.GameStatus, status);
          EventMsg.emit(GameState.GameCurrentStatus, status.GameStatus);
          EventMsg.emit(GameState.RevertPoker, status.CurrentCardIndex);
          switch (status.GameStatusCode) {
            case GameStatusCode.NewGame:
              console.warn('。。。。。。。新局。。。。。。。');
              if (!this.isGetResult) return;
              break;
            case GameStatusCode.Countdown:
              break;
            case GameStatusCode.Dealing:
              if (status.Cards.length > 0 && !this.isGetResult) {
                console.warn('。。。。。。。送封包。。。。。。。');
                EventMsg.emit(GameState.LoadingClose);
                this.isGetResult = true;
                EventMsg.emit(GameState.ReqResult, status);
              }
              break;
            case GameStatusCode.Settling:
              break;
            case GameStatusCode.SettleFinish:
              if (!this.isGetResult) return;
              console.warn('。。。。。。。結算。。。。。。。');
              this.isGetResult = false;
              break;
            case GameStatusCode.ChangeShoe:
              console.warn("。。。。。。。換薛。。。。。。。");
              EventMsg.emit(GameState.ChangeShot);
              // this.createPoker();
              break;
          }
        };
        _proto.reqInit = function reqInit() {
          console.warn('好');
          this.initAckCount++;
          if (this.initAckCount < REQUIRED_INIT_ACKS) return;
          console.warn('載入完成');
          this.isInitOK = true;
        };
        _proto.getDeskId = function getDeskId() {
          return window.location.origin === "https://chenjaijai.github.io" ? this.disksId[0] : this.disksId[1];
        };
        _proto.createPoker = function createPoker() {
          var detail = new TestPokerDetail();
          detail.totalPoker = 52 * 4;
          detail.remainPoker = 52 * 4;
          detail.recyclePoker = 0;
          // EventMsg.emit(GameState.CreatorPoker, detail);
        }

        /** 隨機產生一局，並派發給既有 WebM 播放流程。 */;
        _proto.randomResult = function randomResult() {
          this.testRound++;
          if (this.testRound >= 10) {
            this.testRound = 0;
            CommonValue.isLastRound = true;
          }
          var round = playBaccaratRound();
          if (round.finalProcessKey != null) {
            EventMsg.emit(GameState.ReqResult, round);
          }
        };
        _proto.testInit = /*#__PURE__*/function () {
          var _testInit = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
            var style, data;
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  style = [{
                    streamer: 'Qing_O1H1',
                    backGround: 'G8_XTA',
                    table: 'TA1_1',
                    poker: '8NA_T'
                  }, {
                    streamer: 'Victoria_O1H1',
                    backGround: 'G6_XTA',
                    table: 'TA1_1',
                    poker: '8NA_T'
                  }];
                  data = new InitData(style[Math.floor(Math.random() * style.length)]);
                  data.streamer = Math.random() < 0.5 ? 'Qing_O1H1' : 'Victoria_O1H1';
                  data.backGround = Math.random() < 0.5 ? 'G8_XTA' : 'G6_XTA';
                  data.table = 'TA1_1';
                  data.poker = '8NA_T';
                  EventMsg.emit(GameState.Init, data);
                case 7:
                case "end":
                  return _context6.stop();
              }
            }, _callee6);
          }));
          function testInit() {
            return _testInit.apply(this, arguments);
          }
          return testInit;
        }();
        _proto.testStop = function testStop() {
          this.stopConnection();
        };
        return SignalRMng;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SimulatedServerStatus.ts", ['cc', './CommonValue.ts', './GameConfig.ts', './CardCodec.ts', './types.ts'], function (exports) {
  var cclegacy, Winner, GameConfig, buildDeskCards, GameStatusCode;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      Winner = module.Winner;
    }, function (module) {
      GameConfig = module.GameConfig;
    }, function (module) {
      buildDeskCards = module.buildDeskCards;
    }, function (module) {
      GameStatusCode = module.GameStatusCode;
    }],
    execute: function () {
      exports({
        buildSimulatedDealingPacket: buildSimulatedDealingPacket,
        winnerToServerCode: winnerToServerCode
      });
      cclegacy._RF.push({}, "50a65JrowBGerDCNlYo5XrG", "SimulatedServerStatus", undefined);
      function randomPackageId() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          var r = Math.random() * 16 | 0;
          var v = c === 'x' ? r : r & 0x3 | 0x8;
          return v.toString(16);
        });
      }

      /** Domain Winner → 後端 Winner 字串（P=閒、B=莊、T=和） */
      function winnerToServerCode(winner) {
        if (winner === Winner.Banker) return 'B';
        if (winner === Winner.Tie) return 'T';
        return 'P';
      }
      /**
       * 組出與 SignalR `OnDeskChangeEGame` 相同外層的封包（Dealing 狀態）。
       */
      function buildSimulatedDealingPacket(input) {
        var _input$shoe, _input$round, _input$packageId;
        var data = {
          DeskId: GameConfig.deskId,
          LocationId: GameConfig.locationId,
          GameTypeCode: GameConfig.gameTypeCode,
          Shoe: (_input$shoe = input.shoe) != null ? _input$shoe : GameConfig.simDefaultShoe,
          Round: (_input$round = input.round) != null ? _input$round : GameConfig.simDefaultRound,
          GameStatusCode: GameStatusCode.Dealing,
          GameStatus: 'DEALING',
          Status: true,
          IsMaintaining: false,
          Countdown: 0,
          CountdownEndTime: null,
          PauseStatusCode: 0,
          DealerName: GameConfig.simDealerName,
          Cards: buildDeskCards(input.playerHand, input.bankerHand),
          Winner: winnerToServerCode(input.winner),
          PlayerPoint: input.playerPoint,
          BankerPoint: input.bankerPoint
        };
        return {
          PackageId: (_input$packageId = input.packageId) != null ? _input$packageId : randomPackageId(),
          ErrCode: 0,
          ErrMsg: '',
          NeedAck: false,
          IsSuccess: true,
          Data: data
        };
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/stream.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _wrapAsyncGenerator, _regeneratorRuntime, _awaitAsyncGenerator, cclegacy;
  return {
    setters: [function (module) {
      _wrapAsyncGenerator = module.wrapAsyncGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _awaitAsyncGenerator = module.awaitAsyncGenerator;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports({
        asyncIterableFromStream: asyncIterableFromStream,
        ensureAsyncIterable: ensureAsyncIterable,
        isAsyncIterable: isAsyncIterable
      });
      cclegacy._RF.push({}, "f3e6aDVkV5IHLeZKvDjUO2R", "stream", undefined); // utility for whatwg streams
      // The living standard of whatwg streams says
      // ReadableStream is also AsyncIterable, but
      // as of June 2019, no browser implements it.
      // See https://streams.spec.whatwg.org/ for details
      function isAsyncIterable(object) {
        return object[Symbol.asyncIterator] != null;
      }
      function asyncIterableFromStream(_x) {
        return _asyncIterableFromStream.apply(this, arguments);
      }
      function _asyncIterableFromStream() {
        _asyncIterableFromStream = _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(stream) {
          var reader, _yield$_awaitAsyncGen, done, value;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                reader = stream.getReader();
                _context.prev = 1;
              case 2:
                _context.next = 5;
                return _awaitAsyncGenerator(reader.read());
              case 5:
                _yield$_awaitAsyncGen = _context.sent;
                done = _yield$_awaitAsyncGen.done;
                value = _yield$_awaitAsyncGen.value;
                if (!done) {
                  _context.next = 10;
                  break;
                }
                return _context.abrupt("return");
              case 10:
                _context.next = 12;
                return value;
              case 12:
                _context.next = 2;
                break;
              case 14:
                _context.prev = 14;
                reader.releaseLock();
                return _context.finish(14);
              case 17:
              case "end":
                return _context.stop();
            }
          }, _callee, null, [[1,, 14, 17]]);
        }));
        return _asyncIterableFromStream.apply(this, arguments);
      }
      function ensureAsyncIterable(streamLike) {
        if (isAsyncIterable(streamLike)) {
          return streamLike;
        } else {
          return asyncIterableFromStream(streamLike);
        }
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Stream2.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "104ccwofV5GHrvqXX6siJk2", "Stream", undefined); // Licensed to the .NET Foundation under one or more agreements.
      // The .NET Foundation licenses this file to you under the MIT license.
      // This is an API that is similar to Observable, but we don't want users to confuse it for that so we rename things. Someone could
      // easily adapt it into the Rx interface if they wanted to. Unlike in C#, we can't just implement an "interface" and get extension
      // methods for free. The methods have to actually be added to the object (there are no extension methods in JS!). We don't want to
      // depend on RxJS in the core library, so instead we duplicate the minimum logic needed and then users can easily adapt these into
      // proper RxJS observables if they want.
      /** Defines the expected type for a receiver of results streamed by the server.
       *
       * @typeparam T The type of the items being sent by the server.
       */
      /** Defines the result of a streaming hub method.
       *
       * @typeparam T The type of the items being sent by the server.
       */
      /** An interface that allows an {@link @microsoft/signalr.IStreamSubscriber} to be disconnected from a stream.
       *
       * @typeparam T The type of the items being sent by the server.
       */
      // @ts-ignore: We can't remove this, it's a breaking change, but it's not used.
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Subject.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Utils2.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy, SubjectSubscription;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      SubjectSubscription = module.SubjectSubscription;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7b4e6gj14dJAICcu3hchjHd", "Subject", undefined); // Licensed to the .NET Foundation under one or more agreements.

      /** Stream implementation to stream items to the server. */
      var Subject = exports('Subject', /*#__PURE__*/function () {
        function Subject() {
          /** @internal */
          this.observers = void 0;
          /** @internal */
          this.cancelCallback = void 0;
          this.observers = [];
        }
        var _proto = Subject.prototype;
        _proto.next = function next(item) {
          for (var _iterator = _createForOfIteratorHelperLoose(this.observers), _step; !(_step = _iterator()).done;) {
            var observer = _step.value;
            observer.next(item);
          }
        };
        _proto.error = function error(err) {
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.observers), _step2; !(_step2 = _iterator2()).done;) {
            var observer = _step2.value;
            if (observer.error) {
              observer.error(err);
            }
          }
        };
        _proto.complete = function complete() {
          for (var _iterator3 = _createForOfIteratorHelperLoose(this.observers), _step3; !(_step3 = _iterator3()).done;) {
            var observer = _step3.value;
            if (observer.complete) {
              observer.complete();
            }
          }
        };
        _proto.subscribe = function subscribe(observer) {
          this.observers.push(observer);
          return new SubjectSubscription(this, observer);
        };
        return Subject;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TextMessageFormat.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "8184fiURNRC/aFg1Rc8JxBc", "TextMessageFormat", undefined);
      // Licensed to the .NET Foundation under one or more agreements.
      // The .NET Foundation licenses this file to you under the MIT license.

      // Not exported from index
      /** @private */
      var TextMessageFormat = exports('TextMessageFormat', /*#__PURE__*/function () {
        function TextMessageFormat() {}
        TextMessageFormat.write = function write(output) {
          return "" + output + TextMessageFormat.RecordSeparator;
        };
        TextMessageFormat.parse = function parse(input) {
          if (input[input.length - 1] !== TextMessageFormat.RecordSeparator) {
            throw new Error("Message is incomplete.");
          }
          var messages = input.split(TextMessageFormat.RecordSeparator);
          messages.pop();
          return messages;
        };
        return TextMessageFormat;
      }());
      _class = TextMessageFormat;
      TextMessageFormat.RecordSeparatorCode = 0x1e;
      TextMessageFormat.RecordSeparator = String.fromCharCode(_class.RecordSeparatorCode);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/timestamp.ts", ['cc', './DecodeError.ts', './int.ts'], function (exports) {
  var cclegacy, DecodeError, setInt64, getInt64;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      DecodeError = module.DecodeError;
    }, function (module) {
      setInt64 = module.setInt64;
      getInt64 = module.getInt64;
    }],
    execute: function () {
      exports({
        decodeTimestampExtension: decodeTimestampExtension,
        decodeTimestampToTimeSpec: decodeTimestampToTimeSpec,
        encodeDateToTimeSpec: encodeDateToTimeSpec,
        encodeTimeSpecToTimestamp: encodeTimeSpecToTimestamp,
        encodeTimestampExtension: encodeTimestampExtension
      });
      cclegacy._RF.push({}, "379c2zMlVlIdbZv1cNbKwIj", "timestamp", undefined);
      var EXT_TIMESTAMP = exports('EXT_TIMESTAMP', -1);
      var TIMESTAMP32_MAX_SEC = 0x100000000 - 1; // 32-bit unsigned int
      var TIMESTAMP64_MAX_SEC = 0x400000000 - 1; // 34-bit unsigned int

      function encodeTimeSpecToTimestamp(_ref) {
        var sec = _ref.sec,
          nsec = _ref.nsec;
        if (sec >= 0 && nsec >= 0 && sec <= TIMESTAMP64_MAX_SEC) {
          // Here sec >= 0 && nsec >= 0
          if (nsec === 0 && sec <= TIMESTAMP32_MAX_SEC) {
            // timestamp 32 = { sec32 (unsigned) }
            var rv = new Uint8Array(4);
            var view = new DataView(rv.buffer);
            view.setUint32(0, sec);
            return rv;
          } else {
            // timestamp 64 = { nsec30 (unsigned), sec34 (unsigned) }
            var secHigh = sec / 0x100000000;
            var secLow = sec & 0xffffffff;
            var _rv = new Uint8Array(8);
            var _view = new DataView(_rv.buffer);
            // nsec30 | secHigh2
            _view.setUint32(0, nsec << 2 | secHigh & 0x3);
            // secLow32
            _view.setUint32(4, secLow);
            return _rv;
          }
        } else {
          // timestamp 96 = { nsec32 (unsigned), sec64 (signed) }
          var _rv2 = new Uint8Array(12);
          var _view2 = new DataView(_rv2.buffer);
          _view2.setUint32(0, nsec);
          setInt64(_view2, 4, sec);
          return _rv2;
        }
      }
      function encodeDateToTimeSpec(date) {
        var msec = date.getTime();
        var sec = Math.floor(msec / 1e3);
        var nsec = (msec - sec * 1e3) * 1e6;

        // Normalizes { sec, nsec } to ensure nsec is unsigned.
        var nsecInSec = Math.floor(nsec / 1e9);
        return {
          sec: sec + nsecInSec,
          nsec: nsec - nsecInSec * 1e9
        };
      }
      function encodeTimestampExtension(object) {
        if (object instanceof Date) {
          var timeSpec = encodeDateToTimeSpec(object);
          return encodeTimeSpecToTimestamp(timeSpec);
        } else {
          return null;
        }
      }
      function decodeTimestampToTimeSpec(data) {
        var view = new DataView(data.buffer, data.byteOffset, data.byteLength);

        // data may be 32, 64, or 96 bits
        switch (data.byteLength) {
          case 4:
            {
              // timestamp 32 = { sec32 }
              var sec = view.getUint32(0);
              var nsec = 0;
              return {
                sec: sec,
                nsec: nsec
              };
            }
          case 8:
            {
              // timestamp 64 = { nsec30, sec34 }
              var nsec30AndSecHigh2 = view.getUint32(0);
              var secLow32 = view.getUint32(4);
              var _sec = (nsec30AndSecHigh2 & 0x3) * 0x100000000 + secLow32;
              var _nsec = nsec30AndSecHigh2 >>> 2;
              return {
                sec: _sec,
                nsec: _nsec
              };
            }
          case 12:
            {
              // timestamp 96 = { nsec32 (unsigned), sec64 (signed) }

              var _sec2 = getInt64(view, 4);
              var _nsec2 = view.getUint32(0);
              return {
                sec: _sec2,
                nsec: _nsec2
              };
            }
          default:
            throw new DecodeError("Unrecognized data size for timestamp (expected 4, 8, or 12): " + data.length);
        }
      }
      function decodeTimestampExtension(data) {
        var timeSpec = decodeTimestampToTimeSpec(data);
        return new Date(timeSpec.sec * 1e3 + timeSpec.nsec / 1e6);
      }
      var timestampExtension = exports('timestampExtension', {
        type: EXT_TIMESTAMP,
        encode: encodeTimestampExtension,
        decode: decodeTimestampExtension
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/typedArrays.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('ensureUint8Array', ensureUint8Array);
      cclegacy._RF.push({}, "0abd8pFwyNITYdDni+kqS8G", "typedArrays", undefined);
      function isArrayBufferLike(buffer) {
        return buffer instanceof ArrayBuffer || typeof SharedArrayBuffer !== "undefined" && buffer instanceof SharedArrayBuffer;
      }
      function ensureUint8Array(buffer) {
        if (buffer instanceof Uint8Array) {
          return buffer;
        } else if (ArrayBuffer.isView(buffer)) {
          return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
        } else if (isArrayBufferLike(buffer)) {
          return new Uint8Array(buffer);
        } else {
          // ArrayLike<number>
          return Uint8Array.from(buffer);
        }
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/types.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "8d06fTfFXBDTrXm5HzvOy3T", "types", undefined);
      /**
       * 專案目前統一的百家樂資料結構。
       * - 當作牌靴資訊（舊 PokerDetail）時，只會用到牌組與 total/remain/recycle。
       * - 當作單局結果（RoundResult）時，會另外帶點數、補牌旗標、winner、finalProcessKey。
       */
      var TestPokerDetail = exports('TestPokerDetail', function TestPokerDetail() {
        this.dealerPoker = void 0;
        this.bankerPoker = void 0;
        this.totalPoker = void 0;
        this.remainPoker = void 0;
        this.recyclePoker = void 0;
        this.dealerPointFinal = void 0;
        this.bankerPointFinal = void 0;
        this.dealerDrewThird = void 0;
        this.bankerDrewThird = void 0;
        this.winner = void 0;
        this.finalProcessKey = void 0;
      });
      /**
       * 後端 `GameStatusCode` 字串對照。
       *
       * - `"1"` — NewGame，新局
       * - `"2"` — Countdown，倒數
       * - `"3"` — Dealing，開牌中（第一次收到為最終結果，後續收到可不理）
       * - `"4"` — Settling，結算
       * - `"5"` — SettleFinish，結算完成
       * - `"6"` — ChangeShoe，換靴
       */
      var GameStatusCode = exports('GameStatusCode', /*#__PURE__*/function (GameStatusCode) {
        GameStatusCode["NewGame"] = "1";
        GameStatusCode["Countdown"] = "2";
        GameStatusCode["Dealing"] = "3";
        GameStatusCode["Settling"] = "4";
        GameStatusCode["SettleFinish"] = "5";
        GameStatusCode["ChangeShoe"] = "6";
        return GameStatusCode;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/utf8.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports({
        utf8Count: utf8Count,
        utf8Decode: utf8Decode,
        utf8DecodeJs: utf8DecodeJs,
        utf8DecodeTD: utf8DecodeTD,
        utf8Encode: utf8Encode,
        utf8EncodeJs: utf8EncodeJs,
        utf8EncodeTE: utf8EncodeTE
      });
      cclegacy._RF.push({}, "2d31djQq2xMCbBTvaFyWswB", "utf8", undefined);
      function utf8Count(str) {
        var strLength = str.length;
        var byteLength = 0;
        var pos = 0;
        while (pos < strLength) {
          var value = str.charCodeAt(pos++);
          if ((value & 0xffffff80) === 0) {
            // 1-byte
            byteLength++;
            continue;
          } else if ((value & 0xfffff800) === 0) {
            // 2-bytes
            byteLength += 2;
          } else {
            // handle surrogate pair
            if (value >= 0xd800 && value <= 0xdbff) {
              // high surrogate
              if (pos < strLength) {
                var extra = str.charCodeAt(pos);
                if ((extra & 0xfc00) === 0xdc00) {
                  ++pos;
                  value = ((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000;
                }
              }
            }
            if ((value & 0xffff0000) === 0) {
              // 3-byte
              byteLength += 3;
            } else {
              // 4-byte
              byteLength += 4;
            }
          }
        }
        return byteLength;
      }
      function utf8EncodeJs(str, output, outputOffset) {
        var strLength = str.length;
        var offset = outputOffset;
        var pos = 0;
        while (pos < strLength) {
          var value = str.charCodeAt(pos++);
          if ((value & 0xffffff80) === 0) {
            // 1-byte
            output[offset++] = value;
            continue;
          } else if ((value & 0xfffff800) === 0) {
            // 2-bytes
            output[offset++] = value >> 6 & 0x1f | 0xc0;
          } else {
            // handle surrogate pair
            if (value >= 0xd800 && value <= 0xdbff) {
              // high surrogate
              if (pos < strLength) {
                var extra = str.charCodeAt(pos);
                if ((extra & 0xfc00) === 0xdc00) {
                  ++pos;
                  value = ((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000;
                }
              }
            }
            if ((value & 0xffff0000) === 0) {
              // 3-byte
              output[offset++] = value >> 12 & 0x0f | 0xe0;
              output[offset++] = value >> 6 & 0x3f | 0x80;
            } else {
              // 4-byte
              output[offset++] = value >> 18 & 0x07 | 0xf0;
              output[offset++] = value >> 12 & 0x3f | 0x80;
              output[offset++] = value >> 6 & 0x3f | 0x80;
            }
          }
          output[offset++] = value & 0x3f | 0x80;
        }
      }

      // TextEncoder and TextDecoder are standardized in whatwg encoding:
      // https://encoding.spec.whatwg.org/
      // and available in all the modern browsers:
      // https://caniuse.com/textencoder
      // They are available in Node.js since v12 LTS as well:
      // https://nodejs.org/api/globals.html#textencoder

      var sharedTextEncoder = new TextEncoder();

      // This threshold should be determined by benchmarking, which might vary in engines and input data.
      // Run `npx ts-node benchmark/encode-string.ts` for details.
      var TEXT_ENCODER_THRESHOLD = 50;
      function utf8EncodeTE(str, output, outputOffset) {
        sharedTextEncoder.encodeInto(str, output.subarray(outputOffset));
      }
      function utf8Encode(str, output, outputOffset) {
        if (str.length > TEXT_ENCODER_THRESHOLD) {
          utf8EncodeTE(str, output, outputOffset);
        } else {
          utf8EncodeJs(str, output, outputOffset);
        }
      }
      var CHUNK_SIZE = 0x1000;
      function utf8DecodeJs(bytes, inputOffset, byteLength) {
        var offset = inputOffset;
        var end = offset + byteLength;
        var units = [];
        var result = "";
        while (offset < end) {
          var byte1 = bytes[offset++];
          if ((byte1 & 0x80) === 0) {
            // 1 byte
            units.push(byte1);
          } else if ((byte1 & 0xe0) === 0xc0) {
            // 2 bytes
            var byte2 = bytes[offset++] & 0x3f;
            units.push((byte1 & 0x1f) << 6 | byte2);
          } else if ((byte1 & 0xf0) === 0xe0) {
            // 3 bytes
            var _byte = bytes[offset++] & 0x3f;
            var byte3 = bytes[offset++] & 0x3f;
            units.push((byte1 & 0x1f) << 12 | _byte << 6 | byte3);
          } else if ((byte1 & 0xf8) === 0xf0) {
            // 4 bytes
            var _byte2 = bytes[offset++] & 0x3f;
            var _byte3 = bytes[offset++] & 0x3f;
            var byte4 = bytes[offset++] & 0x3f;
            var unit = (byte1 & 0x07) << 0x12 | _byte2 << 0x0c | _byte3 << 0x06 | byte4;
            if (unit > 0xffff) {
              unit -= 0x10000;
              units.push(unit >>> 10 & 0x3ff | 0xd800);
              unit = 0xdc00 | unit & 0x3ff;
            }
            units.push(unit);
          } else {
            units.push(byte1);
          }
          if (units.length >= CHUNK_SIZE) {
            result += String.fromCharCode.apply(String, units);
            units.length = 0;
          }
        }
        if (units.length > 0) {
          result += String.fromCharCode.apply(String, units);
        }
        return result;
      }
      var sharedTextDecoder = new TextDecoder();

      // This threshold should be determined by benchmarking, which might vary in engines and input data.
      // Run `npx ts-node benchmark/decode-string.ts` for details.
      var TEXT_DECODER_THRESHOLD = 200;
      function utf8DecodeTD(bytes, inputOffset, byteLength) {
        var stringBytes = bytes.subarray(inputOffset, inputOffset + byteLength);
        return sharedTextDecoder.decode(stringBytes);
      }
      function utf8Decode(bytes, inputOffset, byteLength) {
        if (byteLength > TEXT_DECODER_THRESHOLD) {
          return utf8DecodeTD(bytes, inputOffset, byteLength);
        } else {
          return utf8DecodeJs(bytes, inputOffset, byteLength);
        }
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Utils.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('isArrayBuffer', isArrayBuffer);
      cclegacy._RF.push({}, "244e7FK4N1Fmp5qWQb47o26", "Utils", undefined);
      // Licensed to the .NET Foundation under one or more agreements.
      // The .NET Foundation licenses this file to you under the MIT license.

      // Copied from signalr/Utils.ts
      /** @private */
      function isArrayBuffer(val) {
        return val && typeof ArrayBuffer !== "undefined" && (val instanceof ArrayBuffer ||
        // Sometimes we get an ArrayBuffer that doesn't satisfy instanceof
        val.constructor && val.constructor.name === "ArrayBuffer");
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Utils2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ILogger.ts', './Loggers.ts', './pkg-version2.ts'], function (exports) {
  var _createClass, _asyncToGenerator, _regeneratorRuntime, _extends, cclegacy, LogLevel, NullLogger, VERSION;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      LogLevel = module.LogLevel;
    }, function (module) {
      NullLogger = module.NullLogger;
    }, function (module) {
      VERSION = module.VERSION;
      exports('VERSION', module.VERSION);
    }],
    execute: function () {
      exports({
        constructUserAgent: constructUserAgent,
        createLogger: createLogger,
        formatArrayBuffer: formatArrayBuffer,
        getDataDetail: getDataDetail,
        getErrorString: getErrorString,
        getGlobalThis: getGlobalThis,
        getUserAgentHeader: getUserAgentHeader,
        isArrayBuffer: isArrayBuffer,
        sendMessage: sendMessage
      });
      cclegacy._RF.push({}, "b7cb3RBZERMOaWpJn0kekzh", "Utils", undefined); // Licensed to the .NET Foundation under one or more agreements.
      /** @private */
      var Arg = exports('Arg', /*#__PURE__*/function () {
        function Arg() {}
        Arg.isRequired = function isRequired(val, name) {
          if (val === null || val === undefined) {
            throw new Error("The '" + name + "' argument is required.");
          }
        };
        Arg.isNotEmpty = function isNotEmpty(val, name) {
          if (!val || val.match(/^\s*$/)) {
            throw new Error("The '" + name + "' argument should not be empty.");
          }
        };
        Arg.isIn = function isIn(val, values, name) {
          // TypeScript enums have keys for **both** the name and the value of each enum member on the type itself.
          if (!(val in values)) {
            throw new Error("Unknown " + name + " value: " + val + ".");
          }
        };
        return Arg;
      }());

      /** @private */
      var Platform = exports('Platform', /*#__PURE__*/function () {
        function Platform() {}
        _createClass(Platform, null, [{
          key: "isBrowser",
          get:
          // react-native has a window but no document so we should check both
          function get() {
            return !Platform.isNode && typeof window === "object" && typeof window.document === "object";
          }

          // WebWorkers don't have a window object so the isBrowser check would fail
        }, {
          key: "isWebWorker",
          get: function get() {
            return !Platform.isNode && typeof self === "object" && "importScripts" in self;
          }

          // react-native has a window but no document
        }, {
          key: "isReactNative",
          get: function get() {
            return !Platform.isNode && typeof window === "object" && typeof window.document === "undefined";
          }

          // Node apps shouldn't have a window object, but WebWorkers don't either
          // so we need to check for both WebWorker and window
        }, {
          key: "isNode",
          get: function get() {
            // Cocos Creator's in-editor preview runs in Electron: it exposes Node globals,
            // but SignalR should still use the browser WebSocket implementation there.
            if (typeof WebSocket !== "undefined") {
              return false;
            }
            return typeof process !== "undefined" && process.release && process.release.name === "node";
          }
        }]);
        return Platform;
      }());

      /** @private */
      function getDataDetail(data, includeContent) {
        var detail = "";
        if (isArrayBuffer(data)) {
          detail = "Binary data of length " + data.byteLength;
          if (includeContent) {
            detail += ". Content: '" + formatArrayBuffer(data) + "'";
          }
        } else if (typeof data === "string") {
          detail = "String data of length " + data.length;
          if (includeContent) {
            detail += ". Content: '" + data + "'";
          }
        }
        return detail;
      }

      /** @private */
      function formatArrayBuffer(data) {
        var view = new Uint8Array(data);

        // Uint8Array.map only supports returning another Uint8Array?
        var str = "";
        view.forEach(function (num) {
          var pad = num < 16 ? "0" : "";
          str += "0x" + pad + num.toString(16) + " ";
        });

        // Trim of trailing space.
        return str.substr(0, str.length - 1);
      }

      // Also in signalr-protocol-msgpack/Utils.ts
      /** @private */
      function isArrayBuffer(val) {
        return val && typeof ArrayBuffer !== "undefined" && (val instanceof ArrayBuffer ||
        // Sometimes we get an ArrayBuffer that doesn't satisfy instanceof
        val.constructor && val.constructor.name === "ArrayBuffer");
      }

      /** @private */
      function sendMessage(_x, _x2, _x3, _x4, _x5, _x6) {
        return _sendMessage.apply(this, arguments);
      }

      /** @private */
      function _sendMessage() {
        _sendMessage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(logger, transportName, httpClient, url, content, options) {
          var headers, _getUserAgentHeader, name, value, responseType, response;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                headers = {};
                _getUserAgentHeader = getUserAgentHeader(), name = _getUserAgentHeader[0], value = _getUserAgentHeader[1];
                headers[name] = value;
                logger.log(LogLevel.Trace, "(" + transportName + " transport) sending data. " + getDataDetail(content, options.logMessageContent) + ".");
                responseType = isArrayBuffer(content) ? "arraybuffer" : "text";
                _context.next = 7;
                return httpClient.post(url, {
                  content: content,
                  headers: _extends({}, headers, options.headers),
                  responseType: responseType,
                  timeout: options.timeout,
                  withCredentials: options.withCredentials
                });
              case 7:
                response = _context.sent;
                logger.log(LogLevel.Trace, "(" + transportName + " transport) request complete. Response status: " + response.statusCode + ".");
              case 9:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return _sendMessage.apply(this, arguments);
      }
      function createLogger(logger) {
        if (logger === undefined) {
          return new ConsoleLogger(LogLevel.Information);
        }
        if (logger === null) {
          return NullLogger.instance;
        }
        if (logger.log !== undefined) {
          return logger;
        }
        return new ConsoleLogger(logger);
      }

      /** @private */
      var SubjectSubscription = exports('SubjectSubscription', /*#__PURE__*/function () {
        function SubjectSubscription(subject, observer) {
          this._subject = void 0;
          this._observer = void 0;
          this._subject = subject;
          this._observer = observer;
        }
        var _proto = SubjectSubscription.prototype;
        _proto.dispose = function dispose() {
          var index = this._subject.observers.indexOf(this._observer);
          if (index > -1) {
            this._subject.observers.splice(index, 1);
          }
          if (this._subject.observers.length === 0 && this._subject.cancelCallback) {
            this._subject.cancelCallback()["catch"](function (_) {});
          }
        };
        return SubjectSubscription;
      }());

      /** @private */
      var ConsoleLogger = exports('ConsoleLogger', /*#__PURE__*/function () {
        function ConsoleLogger(minimumLogLevel) {
          this._minLevel = void 0;
          // Public for testing purposes.
          this.out = void 0;
          this._minLevel = minimumLogLevel;
          this.out = console;
        }
        var _proto2 = ConsoleLogger.prototype;
        _proto2.log = function log(logLevel, message) {
          if (logLevel >= this._minLevel) {
            var msg = "[" + new Date().toISOString() + "] " + LogLevel[logLevel] + ": " + message;
            switch (logLevel) {
              case LogLevel.Critical:
              case LogLevel.Error:
                this.out.error(msg);
                break;
              case LogLevel.Warning:
                this.out.warn(msg);
                break;
              case LogLevel.Information:
                this.out.info(msg);
                break;
              default:
                // console.debug only goes to attached debuggers in Node, so we use console.log for Trace and Debug
                this.out.log(msg);
                break;
            }
          }
        };
        return ConsoleLogger;
      }());

      /** @private */
      function getUserAgentHeader() {
        var userAgentHeaderName = "X-SignalR-User-Agent";
        if (Platform.isNode) {
          userAgentHeaderName = "User-Agent";
        }
        return [userAgentHeaderName, constructUserAgent(VERSION, getOsName(), getRuntime(), getRuntimeVersion())];
      }

      /** @private */
      function constructUserAgent(version, os, runtime, runtimeVersion) {
        // Microsoft SignalR/[Version] ([Detailed Version]; [Operating System]; [Runtime]; [Runtime Version])
        var userAgent = "Microsoft SignalR/";
        var majorAndMinor = version.split(".");
        userAgent += majorAndMinor[0] + "." + majorAndMinor[1];
        userAgent += " (" + version + "; ";
        if (os && os !== "") {
          userAgent += os + "; ";
        } else {
          userAgent += "Unknown OS; ";
        }
        userAgent += "" + runtime;
        if (runtimeVersion) {
          userAgent += "; " + runtimeVersion;
        } else {
          userAgent += "; Unknown Runtime Version";
        }
        userAgent += ")";
        return userAgent;
      }

      // eslint-disable-next-line spaced-comment
      /*#__PURE__*/
      function getOsName() {
        if (Platform.isNode) {
          switch (process.platform) {
            case "win32":
              return "Windows NT";
            case "darwin":
              return "macOS";
            case "linux":
              return "Linux";
            default:
              return process.platform;
          }
        } else {
          return "";
        }
      }

      // eslint-disable-next-line spaced-comment
      /*#__PURE__*/
      function getRuntimeVersion() {
        if (Platform.isNode) {
          return process.versions.node;
        }
        return undefined;
      }
      function getRuntime() {
        if (Platform.isNode) {
          return "NodeJS";
        } else {
          return "Browser";
        }
      }

      /** @private */
      function getErrorString(e) {
        if (e.stack) {
          return e.stack;
        } else if (e.message) {
          return e.message;
        }
        return "" + e;
      }

      /** @private */
      function getGlobalThis() {
        // globalThis is semi-new and not available in Node until v12
        if (typeof globalThis !== "undefined") {
          return globalThis;
        }
        if (typeof self !== "undefined") {
          return self;
        }
        if (typeof window !== "undefined") {
          return window;
        }
        if (typeof global !== "undefined") {
          return global;
        }
        throw new Error("could not find global");
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/VideoComponent.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CommonValue.ts', './EventMsg.ts'], function (exports) {
  var _createClass, cclegacy, VideoPlayer, GameState, EventMsg;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      VideoPlayer = module.VideoPlayer;
    }, function (module) {
      GameState = module.GameState;
    }, function (module) {
      EventMsg = module.EventMsg;
    }],
    execute: function () {
      cclegacy._RF.push({}, "19ed9GR3b1EypPYOn4naIqg", "VideoComponent", undefined);
      var VideoComponent = exports('VideoComponent', /*#__PURE__*/function () {
        function VideoComponent(videoPlayer) {
          this.videoPlayer = null;
          this.canSync = false;
          this.ready = false;
          this.isEnd = false;
          this.videoPlayer = videoPlayer;
        }
        var _proto = VideoComponent.prototype;
        _proto.init = function init() {
          var _this = this;
          /**思考一下load影片紀錄 */
          this.reset();
          this.videoPlayer.node.on(VideoPlayer.EventType.ERROR, function () {}, this);
          this.videoPlayer.node.on(VideoPlayer.EventType.READY_TO_PLAY, function () {
            _this.videoPlayer.pause();
            _this.ready = true;
          }, this);
          this.videoPlayer.node.on(VideoPlayer.EventType.COMPLETED, function () {
            _this.ready = _this.canSync = false;
            if (_this.isEnd) {
              console.error("你該結束了八，不可能還要偷送?");
              return;
            }
            if (!_this.videoPlayer.loop) EventMsg.emit(GameState.PlayWebM);
          }, this);
        };
        _proto.reset = function reset() {
          this.videoPlayer.currentTime = 0;
          this.videoPlayer.clip = null;
          this.active = this.isEnd = this.ready = this.canSync = this.videoPlayer.loop = false;
        };
        _proto.play = function play(isLoop) {
          if (isLoop === void 0) {
            isLoop = false;
          }
          this.videoPlayer.loop = isLoop;
          this.videoPlayer.play();
          this.active = true;
        };
        _proto.show = function show(canSync) {
          if (canSync === void 0) {
            canSync = false;
          }
          this.videoPlayer.stayOnBottom = false;
          this.videoPlayer.currentTime = 0;
          this.canSync = canSync;
        };
        _proto.close = function close() {
          this.videoPlayer.stayOnBottom = true;
          this.reset();
        };
        _createClass(VideoComponent, [{
          key: "active",
          get: function get() {
            return this.videoPlayer.node.active;
          },
          set: function set(v) {
            this.videoPlayer.node.active = v;
          }
        }]);
        return VideoComponent;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WebmClipMap.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('buildWebmClipMap', buildWebmClipMap);
      cclegacy._RF.push({}, "6304fmp9dxBNZQXqX0JrrhG", "WebmClipMap", undefined);
      /** 由 WebM 資源目錄建立檔名 → VideoClip 對照表。 */
      function buildWebmClipMap(assets) {
        var map = new Map();
        for (var _iterator = _createForOfIteratorHelperLoose(assets), _step; !(_step = _iterator()).done;) {
          var asset = _step.value;
          map.set(asset.name, asset);
        }
        return map;
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WEBMMng.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BuildPlayListUseCase.ts', './CommonValue.ts', './ProcessStateResolver.ts', './ReqResultData.ts', './VideoComponent.ts', './WebmClipMap.ts', './BundleMng.ts', './EventMsg.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Asset, VideoPlayer, Component, buildPlayList, GameState, ProcessState, waitUntil, waitUntil_test, inferProcessStateFromGameStatus, isRoundResult, isGameStatusData, VideoComponent, buildWebmClipMap, BundleMng, EventMsg;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Asset = module.Asset;
      VideoPlayer = module.VideoPlayer;
      Component = module.Component;
    }, function (module) {
      buildPlayList = module.buildPlayList;
    }, function (module) {
      GameState = module.GameState;
      ProcessState = module.ProcessState;
      waitUntil = module.waitUntil;
      waitUntil_test = module.waitUntil_test;
    }, function (module) {
      inferProcessStateFromGameStatus = module.inferProcessStateFromGameStatus;
    }, function (module) {
      isRoundResult = module.isRoundResult;
      isGameStatusData = module.isGameStatusData;
    }, function (module) {
      VideoComponent = module.VideoComponent;
    }, function (module) {
      buildWebmClipMap = module.buildWebmClipMap;
    }, function (module) {
      BundleMng = module.default;
    }, function (module) {
      EventMsg = module.EventMsg;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "23acby+Er9DqoiYZ9U2h6bF", "WEBMMng", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**等待影片載入時間 */
      var WAIT_VIDEO_READY_MS = 60000;
      var WEBM = exports('WEBM', (_dec = ccclass('WEBM'), _dec2 = property({
        type: [Asset]
      }), _dec3 = property(VideoPlayer), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(WEBM, _Component);
        function WEBM() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.dataWebM = '';
          _initializerDefineProperty(_this, "webm", _descriptor, _assertThisInitialized(_this));
          _this.webmMap = new Map();
          _this.currentIndex = 0;
          _initializerDefineProperty(_this, "videoPlayers", _descriptor2, _assertThisInitialized(_this));
          _this.videoComponentList = [];
          _this.playList = [];
          _this.currentPlay = null;
          _this.isEnd = false;
          _this.isPlayProcess = false;
          _this.isCreatrList = false;
          _this.isWait = false;
          _this.wait = null;
          return _this;
        }
        var _proto = WEBM.prototype;
        _proto.onLoad = /*#__PURE__*/function () {
          var _onLoad = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var index;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  EventMsg.on(GameState.Init, this.init, this);
                  EventMsg.on(GameState.PlayWebM, this.playAni, this);
                  EventMsg.on(GameState.StartPlay, this.startFirstPlay, this);
                  EventMsg.on(GameState.PlayWebMCurrent, this.playAniCurrent, this);
                  EventMsg.on(GameState.ReqResult, this.createPlayList, this);
                  EventMsg.on(GameState.ResetGame, this.reset, this);
                  for (index = 0; index < this.videoPlayers.length; index++) {
                    this.videoComponentList[index] = new VideoComponent(this.videoPlayers[index]);
                    this.videoComponentList[index].active = false;
                  }
                case 7:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function onLoad() {
            return _onLoad.apply(this, arguments);
          }
          return onLoad;
        }();
        _proto.update = function update(dt) {
          for (var index = 0; index < this.videoComponentList.length; index++) {
            if (this.videoComponentList[index].canSync) {
              EventMsg.emit(GameState.SyncTime, this.videoComponentList[index].videoPlayer.currentTime);
            }
          }
        };
        _proto.init = /*#__PURE__*/function () {
          var _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(login) {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  this.reset();
                  this.videoComponentList.forEach(function (element) {
                    return element.init();
                  });
                  this.currentIndex = 0;
                  if (!(this.dataWebM != login.Data.bbaDealerStyle)) {
                    _context2.next = 6;
                    break;
                  }
                  _context2.next = 6;
                  return this.loadAsset(login);
                case 6:
                  EventMsg.emit(GameState.ReqInit);
                case 7:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function init(_x) {
            return _init.apply(this, arguments);
          }
          return init;
        }();
        _proto.loadAsset = /*#__PURE__*/function () {
          var _loadAsset = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(login) {
            var defaultStreamer, streamer, _asset;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  defaultStreamer = 'Qing_O1H1';
                  streamer = login.Data.bbaDealerStyle || defaultStreamer;
                  _context3.next = 4;
                  return BundleMng.loadDir('WebM', streamer, Asset, defaultStreamer);
                case 4:
                  _asset = _context3.sent;
                  console.log('下載完成', _asset);
                  this.dataWebM = streamer;
                  this.webm = _asset;
                  this.webmMap = buildWebmClipMap(_asset);
                case 9:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function loadAsset(_x2) {
            return _loadAsset.apply(this, arguments);
          }
          return loadAsset;
        }();
        _proto.startFirstPlay = function startFirstPlay() {
          this.advanceToNextPlay(this.currentIndex);
          this.playAni();
        };
        _proto.reset = /*#__PURE__*/function () {
          var _reset = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  // if (login) {
                  //     if (login.Data.bbaDealerStyle != this.dataWebM) {
                  //         await this.loadAsset(login);
                  //     }
                  //     EventMsg.emit(GameState.ReqInit);
                  // }
                  this.playList = [];
                  this.videoComponentList.forEach(function (element) {
                    element.videoPlayer.stayOnBottom = true;
                    element.reset();
                  });
                  this.currentIndex = 0;
                  this.currentPlay = null;
                  this.isEnd = false;
                  this.isPlayProcess = false;
                case 6:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
          function reset() {
            return _reset.apply(this, arguments);
          }
          return reset;
        }();
        _proto.resolveClipByKeyword = function resolveClipByKeyword(keyword) {
          if (!keyword) return null;
          var clip = this.webmMap.get(keyword);
          if (!clip) {
            console.error("\u627E\u4E0D\u5230\u8981\u64AD\u653E\u7684 WebM\uFF1A" + keyword);
            return null;
          }
          return clip;
        };
        _proto.advanceToNextPlay = /*#__PURE__*/function () {
          var _advanceToNextPlay = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(targetIndex) {
            var foundNextItem;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  if (this.playList.length > 0) {
                    this.currentPlay = this.playList.shift();
                    foundNextItem = this.resolveClipByKeyword(this.currentPlay);
                    if (foundNextItem) this.videoComponentList[targetIndex].videoPlayer.clip = foundNextItem;
                    console.log('播放下一個', this.currentPlay);
                  }
                case 1:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this);
          }));
          function advanceToNextPlay(_x3) {
            return _advanceToNextPlay.apply(this, arguments);
          }
          return advanceToNextPlay;
        }();
        _proto.test = /*#__PURE__*/function () {
          var _test = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
            var data;
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return BundleMng.loadDir('WebM', 'Jade', Asset);
                case 2:
                  data = _context6.sent;
                  this.webm = data;
                  this.webmMap = buildWebmClipMap(data);
                case 5:
                case "end":
                  return _context6.stop();
              }
            }, _callee6, this);
          }));
          function test() {
            return _test.apply(this, arguments);
          }
          return test;
        }();
        _proto.test1 = /*#__PURE__*/function () {
          var _test2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
            var values, randomProcess;
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  values = Object.values(ProcessState);
                  randomProcess = values[Math.floor(Math.random() * values.length)];
                  if (!(randomProcess === ProcessState.Open || randomProcess === ProcessState.BankerResult || randomProcess === ProcessState.DealerResult)) {
                    _context7.next = 4;
                    break;
                  }
                  return _context7.abrupt("return", this.test1());
                case 4:
                  this.playAniCurrent(randomProcess);
                  console.log('Ene');
                case 6:
                case "end":
                  return _context7.stop();
              }
            }, _callee7, this);
          }));
          function test1() {
            return _test2.apply(this, arguments);
          }
          return test1;
        }();
        _proto.createPlayList = /*#__PURE__*/function () {
          var _createPlayList = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(data) {
            var _this2 = this;
            var finalProcess, lastIndex;
            return _regeneratorRuntime().wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
                case 0:
                  this.isCreatrList = true;
                  _context8.next = 3;
                  return waitUntil(function () {
                    return !_this2.isPlayProcess;
                  });
                case 3:
                  console.log('-------建立播放單-------', this.isPlayProcess);
                  finalProcess = isRoundResult(data) && data.finalProcessKey ? data.finalProcessKey : isGameStatusData(data) ? inferProcessStateFromGameStatus(data) : null;
                  if (finalProcess) {
                    _context8.next = 9;
                    break;
                  }
                  console.error('無法推導 ProcessState', data);
                  this.playList = [];
                  return _context8.abrupt("return");
                case 9:
                  // this.videoComponentList[this.currentIndex].videoPlayer.stayOnBottom = true;
                  this.playList = buildPlayList(finalProcess);
                  console.log('有人在撥放插播：', this.currentIndex);
                  this.videoComponentList[this.currentIndex].reset();
                  this.advanceToNextPlay(this.currentIndex);
                  _context8.next = 15;
                  return waitUntil(function () {
                    return _this2.videoComponentList[_this2.currentIndex].ready;
                  }, {
                    timeoutMs: WAIT_VIDEO_READY_MS
                  });
                case 15:
                  this.videoComponentList.forEach(function (element) {
                    element.videoPlayer.loop = false;
                  });
                  console.log('-----------------中指他的撥放-----------------');
                  lastIndex = this.currentIndex === 0 ? 1 : 0; // this.videoComponentList[lastIndex].close()
                  this.videoComponentList[lastIndex].canSync = this.videoComponentList[lastIndex].ready = false;
                  this.playAni();
                  this.isCreatrList = false;
                case 21:
                case "end":
                  return _context8.stop();
              }
            }, _callee8, this);
          }));
          function createPlayList(_x4) {
            return _createPlayList.apply(this, arguments);
          }
          return createPlayList;
        }();
        _proto.playAni = /*#__PURE__*/function () {
          var _playAni = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
            var _this3 = this;
            var lastIndex;
            return _regeneratorRuntime().wrap(function _callee9$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
                case 0:
                  if (!this.isPlayProcess) {
                    _context9.next = 4;
                    break;
                  }
                  console.warn("!@#$$%%^^&&*()誰偷跑近來!@#$%^&*()_");
                  _context9.next = 4;
                  return waitUntil(function () {
                    return !_this3.isPlayProcess;
                  });
                case 4:
                  this.isPlayProcess = true;
                  // const reIndex = this.currentIndex
                  if (this.videoComponentList[this.currentIndex].ready) {
                    _context9.next = 13;
                    break;
                  }
                  _context9.next = 8;
                  return waitUntil(function () {
                    return _this3.videoComponentList[_this3.currentIndex].ready;
                  }, {
                    timeoutMs: WAIT_VIDEO_READY_MS
                  });
                case 8:
                  if (!this.isCreatrList) {
                    _context9.next = 12;
                    break;
                  }
                  this.isPlayProcess = false;
                  console.warn('影片載入衝突');
                  return _context9.abrupt("return");
                case 12:
                  console.warn('影片 ready');
                case 13:
                  EventMsg.emit(GameState.PlayPoker, this.currentPlay);
                  console.log('----------------現在-----------：', this.currentIndex);
                  console.log(this.playList);
                  this.videoComponentList[this.currentIndex].play(this.currentPlay.includes('Dance'));
                  lastIndex = this.currentIndex === 0 ? 1 : 0;
                  this.videoComponentList[lastIndex].isEnd = true;
                  this.scheduleOnce(function () {
                    _this3.videoComponentList[_this3.currentIndex].show(!_this3.currentPlay.includes('Dance'));
                    _this3.videoComponentList[lastIndex].close();
                    _this3.currentIndex = lastIndex;
                    if (_this3.playList.length === 0) {
                      // this.videoComponentList[this.currentIndex].isEnd = true;
                      console.log('----------------最後一影片-----------------');
                    } else if (_this3.isCreatrList) {
                      console.warn('準備建立下一個影片，不需要切換下一個');
                    } else {
                      console.log('下一個：', lastIndex);
                      _this3.advanceToNextPlay(lastIndex);
                      console.log('----------------末端-----------------');
                    }
                    _this3.isPlayProcess = false;
                  }, 0);
                case 20:
                case "end":
                  return _context9.stop();
              }
            }, _callee9, this);
          }));
          function playAni() {
            return _playAni.apply(this, arguments);
          }
          return playAni;
        }();
        _proto.playAniCurrent = /*#__PURE__*/function () {
          var _playAniCurrent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(current) {
            var vc, foundItem;
            return _regeneratorRuntime().wrap(function _callee10$(_context10) {
              while (1) switch (_context10.prev = _context10.next) {
                case 0:
                  vc = this.videoComponentList[this.currentIndex];
                  if (vc) {
                    _context10.next = 3;
                    break;
                  }
                  return _context10.abrupt("return");
                case 3:
                  foundItem = this.resolveClipByKeyword(current);
                  if (foundItem) {
                    _context10.next = 7;
                    break;
                  }
                  console.error("\u627E\u4E0D\u5230\u8981\u64AD\u653E\u7684 WebM\uFF1A" + current);
                  return _context10.abrupt("return");
                case 7:
                  vc.ready = false;
                  vc.canSync = false;
                  vc.videoPlayer.clip = foundItem;
                  if (vc.ready) {
                    _context10.next = 13;
                    break;
                  }
                  _context10.next = 13;
                  return waitUntil_test(function () {
                    return vc.ready;
                  }, {
                    timeoutMs: WAIT_VIDEO_READY_MS
                  });
                case 13:
                  vc.videoPlayer.node.active = true;
                  vc.videoPlayer.stayOnBottom = false;
                  vc.videoPlayer.play();
                  this.scheduleOnce(function () {
                    vc.videoPlayer.currentTime = 0;
                    vc.canSync = true;
                  }, 0);
                case 17:
                case "end":
                  return _context10.stop();
              }
            }, _callee10, this);
          }));
          function playAniCurrent(_x5) {
            return _playAniCurrent.apply(this, arguments);
          }
          return playAniCurrent;
        }();
        return WEBM;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "webm", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "videoPlayers", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WebSocketMng.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "003f4HyMNNGzLt4QEAHoFqc", "WebSocketMng", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var WebSocketMng = exports('default', (_dec = ccclass('WebSocketMng'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(WebSocketMng, _Component);
        function WebSocketMng() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "url", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        return WebSocketMng;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "url", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'ws://localhost:8080';
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WebSocketTransport.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './HeaderNames.ts', './ILogger.ts', './ITransport.ts', './Utils2.ts'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, _extends, cclegacy, HeaderNames, LogLevel, TransferFormat, getDataDetail, Platform, getUserAgentHeader, Arg;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      HeaderNames = module.HeaderNames;
    }, function (module) {
      LogLevel = module.LogLevel;
    }, function (module) {
      TransferFormat = module.TransferFormat;
    }, function (module) {
      getDataDetail = module.getDataDetail;
      Platform = module.Platform;
      getUserAgentHeader = module.getUserAgentHeader;
      Arg = module.Arg;
    }],
    execute: function () {
      cclegacy._RF.push({}, "59670sbm5VGjrxQgCpxVqCM", "WebSocketTransport", undefined);

      /** @private */
      var WebSocketTransport = exports('WebSocketTransport', /*#__PURE__*/function () {
        function WebSocketTransport(httpClient, accessTokenFactory, logger, logMessageContent, webSocketConstructor, headers) {
          this._logger = void 0;
          this._accessTokenFactory = void 0;
          this._logMessageContent = void 0;
          this._webSocketConstructor = void 0;
          this._httpClient = void 0;
          this._webSocket = void 0;
          this._headers = void 0;
          this.onreceive = void 0;
          this.onclose = void 0;
          this._logger = logger;
          this._accessTokenFactory = accessTokenFactory;
          this._logMessageContent = logMessageContent;
          this._webSocketConstructor = webSocketConstructor;
          this._httpClient = httpClient;
          this.onreceive = null;
          this.onclose = null;
          this._headers = headers;
        }
        var _proto = WebSocketTransport.prototype;
        _proto.connect = /*#__PURE__*/function () {
          var _connect = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url, transferFormat) {
            var _this = this;
            var token;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  Arg.isRequired(url, "url");
                  Arg.isRequired(transferFormat, "transferFormat");
                  Arg.isIn(transferFormat, TransferFormat, "transferFormat");
                  this._logger.log(LogLevel.Trace, "(WebSockets transport) Connecting.");
                  if (!this._accessTokenFactory) {
                    _context.next = 8;
                    break;
                  }
                  _context.next = 7;
                  return this._accessTokenFactory();
                case 7:
                  token = _context.sent;
                case 8:
                  return _context.abrupt("return", new Promise(function (resolve, reject) {
                    url = url.replace(/^http/, "ws");
                    var webSocket;
                    var cookies = _this._httpClient.getCookieString(url);
                    var opened = false;
                    if (Platform.isNode || Platform.isReactNative) {
                      var headers = {};
                      var _getUserAgentHeader = getUserAgentHeader(),
                        name = _getUserAgentHeader[0],
                        value = _getUserAgentHeader[1];
                      headers[name] = value;
                      if (token) {
                        headers[HeaderNames.Authorization] = "Bearer " + token;
                      }
                      if (cookies) {
                        headers[HeaderNames.Cookie] = cookies;
                      }

                      // Only pass headers when in non-browser environments
                      webSocket = new _this._webSocketConstructor(url, undefined, {
                        headers: _extends({}, headers, _this._headers)
                      });
                    } else {
                      if (token) {
                        url += (url.indexOf("?") < 0 ? "?" : "&") + ("access_token=" + encodeURIComponent(token));
                      }
                    }
                    if (!webSocket) {
                      // Chrome is not happy with passing 'undefined' as protocol
                      webSocket = new _this._webSocketConstructor(url);
                    }
                    if (transferFormat === TransferFormat.Binary) {
                      webSocket.binaryType = "arraybuffer";
                    }
                    webSocket.onopen = function (_event) {
                      _this._logger.log(LogLevel.Information, "WebSocket connected to " + url + ".");
                      _this._webSocket = webSocket;
                      opened = true;
                      resolve();
                    };
                    webSocket.onerror = function (event) {
                      var error = null;
                      // ErrorEvent is a browser only type we need to check if the type exists before using it
                      if (typeof ErrorEvent !== "undefined" && event instanceof ErrorEvent) {
                        error = event.error;
                      } else {
                        error = "There was an error with the transport";
                      }
                      _this._logger.log(LogLevel.Information, "(WebSockets transport) " + error + ".");
                    };
                    webSocket.onmessage = function (message) {
                      _this._logger.log(LogLevel.Trace, "(WebSockets transport) data received. " + getDataDetail(message.data, _this._logMessageContent) + ".");
                      if (_this.onreceive) {
                        try {
                          _this.onreceive(message.data);
                        } catch (error) {
                          _this._close(error);
                          return;
                        }
                      }
                    };
                    webSocket.onclose = function (event) {
                      // Don't call close handler if connection was never established
                      // We'll reject the connect call instead
                      if (opened) {
                        _this._close(event);
                      } else {
                        var _error = null;
                        // ErrorEvent is a browser only type we need to check if the type exists before using it
                        if (typeof ErrorEvent !== "undefined" && event instanceof ErrorEvent) {
                          _error = event.error;
                        } else {
                          _error = "WebSocket failed to connect. The connection could not be found on the server," + " either the endpoint may not be a SignalR endpoint," + " the connection ID is not present on the server, or there is a proxy blocking WebSockets." + " If you have multiple servers check that sticky sessions are enabled.";
                        }
                        reject(new Error(_error));
                      }
                    };
                  }));
                case 9:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function connect(_x, _x2) {
            return _connect.apply(this, arguments);
          }
          return connect;
        }();
        _proto.send = function send(data) {
          if (this._webSocket && this._webSocket.readyState === this._webSocketConstructor.OPEN) {
            this._logger.log(LogLevel.Trace, "(WebSockets transport) sending data. " + getDataDetail(data, this._logMessageContent) + ".");
            this._webSocket.send(data);
            return Promise.resolve();
          }
          return Promise.reject("WebSocket is not in the OPEN state");
        };
        _proto.stop = function stop() {
          if (this._webSocket) {
            // Manually invoke onclose callback inline so we know the HttpConnection was closed properly before returning
            // This also solves an issue where websocket.onclose could take 18+ seconds to trigger during network disconnects
            this._close(undefined);
          }
          return Promise.resolve();
        };
        _proto._close = function _close(event) {
          // webSocket will be null if the transport did not start successfully
          if (this._webSocket) {
            // Clear websocket handlers because we are considering the socket closed now
            this._webSocket.onclose = function () {};
            this._webSocket.onmessage = function () {};
            this._webSocket.onerror = function () {};
            this._webSocket.close();
            this._webSocket = undefined;
          }
          this._logger.log(LogLevel.Trace, "(WebSockets transport) socket closed.");
          if (this.onclose) {
            if (this._isCloseEvent(event) && (event.wasClean === false || event.code !== 1000)) {
              this.onclose(new Error("WebSocket closed with status code: " + event.code + " (" + (event.reason || "no reason given") + ")."));
            } else if (event instanceof Error) {
              this.onclose(event);
            } else {
              this.onclose();
            }
          }
        };
        _proto._isCloseEvent = function _isCloseEvent(event) {
          return event && typeof event.wasClean === "boolean" && typeof event.code === "number";
        };
        return WebSocketTransport;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/XhrHttpClient.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Errors.ts', './HttpClient.ts', './ILogger.ts', './Utils2.ts'], function (exports) {
  var _inheritsLoose, cclegacy, AbortError, HttpError, TimeoutError, HttpResponse, HttpClient, LogLevel, isArrayBuffer;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      AbortError = module.AbortError;
      HttpError = module.HttpError;
      TimeoutError = module.TimeoutError;
    }, function (module) {
      HttpResponse = module.HttpResponse;
      HttpClient = module.HttpClient;
    }, function (module) {
      LogLevel = module.LogLevel;
    }, function (module) {
      isArrayBuffer = module.isArrayBuffer;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6d607LHA+hGT76g0AsD9UMy", "XhrHttpClient", undefined);
      var XhrHttpClient = exports('XhrHttpClient', /*#__PURE__*/function (_HttpClient) {
        _inheritsLoose(XhrHttpClient, _HttpClient);
        function XhrHttpClient(logger) {
          var _this;
          _this = _HttpClient.call(this) || this;
          _this._logger = void 0;
          _this._logger = logger;
          return _this;
        }

        /** @inheritDoc */
        var _proto = XhrHttpClient.prototype;
        _proto.send = function send(request) {
          var _this2 = this;
          // Check that abort was not signaled before calling send
          if (request.abortSignal && request.abortSignal.aborted) {
            return Promise.reject(new AbortError());
          }
          if (!request.method) {
            return Promise.reject(new Error("No method defined."));
          }
          if (!request.url) {
            return Promise.reject(new Error("No url defined."));
          }
          return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open(request.method, request.url, true);
            xhr.withCredentials = request.withCredentials === undefined ? true : request.withCredentials;
            xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            if (request.content === "") {
              request.content = undefined;
            }
            if (request.content) {
              // Explicitly setting the Content-Type header for React Native on Android platform.
              if (isArrayBuffer(request.content)) {
                xhr.setRequestHeader("Content-Type", "application/octet-stream");
              } else {
                xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
              }
            }
            var headers = request.headers;
            if (headers) {
              Object.keys(headers).forEach(function (header) {
                xhr.setRequestHeader(header, headers[header]);
              });
            }
            if (request.responseType) {
              xhr.responseType = request.responseType;
            }
            if (request.abortSignal) {
              request.abortSignal.onabort = function () {
                xhr.abort();
                reject(new AbortError());
              };
            }
            if (request.timeout) {
              xhr.timeout = request.timeout;
            }
            xhr.onload = function () {
              if (request.abortSignal) {
                request.abortSignal.onabort = null;
              }
              if (xhr.status >= 200 && xhr.status < 300) {
                resolve(new HttpResponse(xhr.status, xhr.statusText, xhr.response || xhr.responseText));
              } else {
                reject(new HttpError(xhr.response || xhr.responseText || xhr.statusText, xhr.status));
              }
            };
            xhr.onerror = function () {
              _this2._logger.log(LogLevel.Warning, "Error from HTTP request. " + xhr.status + ": " + xhr.statusText + ".");
              reject(new HttpError(xhr.statusText, xhr.status));
            };
            xhr.ontimeout = function () {
              _this2._logger.log(LogLevel.Warning, "Timeout from HTTP request.");
              reject(new TimeoutError());
            };
            xhr.send(request.content);
          });
        };
        return XhrHttpClient;
      }(HttpClient));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});