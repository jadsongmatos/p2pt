"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
/**
 * Peer 2 Peer WebRTC connections with WebTorrent Trackers as signalling server
 * Copyright Subin Siby <mail@subinsb.com>, 2020
 * Licensed under MIT
 */

var WebSocketTracker = require('bittorrent-tracker/lib/client/websocket-tracker.js');
var EventEmitter = require('events');
var Debug = require('debug');
var _require = require('uint8-util'),
  randomBytes = _require.randomBytes,
  arr2hex = _require.arr2hex,
  hex2bin = _require.hex2bin,
  hex2arr = _require.hex2arr,
  hash = _require.hash,
  arr2text = _require.arr2text;
var debug = Debug('p2pt');

/**
 * This character would be prepended to easily identify JSON msgs
 */
var JSON_MESSAGE_IDENTIFIER = '^';

/**
 * WebRTC data channel limit beyond which data is split into chunks
 * Chose 16KB considering Chromium
 * https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Using_data_channels#Concerns_with_large_messages
 */
var MAX_MESSAGE_LENGTH = 16000;
module.exports = /*#__PURE__*/function (_EventEmitter) {
  /**
   *
   * @param array announceURLs List of announce tracker URLs
   * @param string identifierString Identifier used to discover peers in the network
   * @param array iceServers List of STUN/TURN server configurations
   */
  function P2PT() {
    var _this;
    var announceURLs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var identifierString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var iceServers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    _classCallCheck(this, P2PT);
    _this = _callSuper(this, P2PT);
    _this.iceServers = iceServers;
    _this.announceURLs = announceURLs;
    _this.trackers = {};
    _this.peers = {};
    _this.msgChunks = {};
    _this.responseWaiting = {};
    if (identifierString) {
      _this.setIdentifier(identifierString);
    }
    _this._peerIdBuffer = randomBytes(20);
    _this._peerId = arr2hex(_this._peerIdBuffer);
    _this._peerIdBinary = hex2bin(_this._peerId);
    debug('my peer id: ' + _this._peerId);
    return _this;
  }

  /**
   * Set the identifier string used to discover peers in the network
   * @param string identifierString
   */
  _inherits(P2PT, _EventEmitter);
  return _createClass(P2PT, [{
    key: "setIdentifier",
    value: (function () {
      var _setIdentifier = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(identifierString) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              this.identifierString = identifierString;
              this.infoHash = hash(identifierString, 'hex');
              _context.t0 = hex2arr;
              _context.next = 5;
              return this.infoHash;
            case 5:
              _context.t1 = _context.sent.toLowerCase();
              this._infoHashBuffer = (0, _context.t0)(_context.t1);
              _context.t2 = hex2bin;
              _context.next = 10;
              return this.infoHash;
            case 10:
              _context.t3 = _context.sent.toLowerCase();
              this._infoHashBinary = (0, _context.t2)(_context.t3);
            case 12:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function setIdentifier(_x) {
        return _setIdentifier.apply(this, arguments);
      }
      return setIdentifier;
    }()
    /**
     * Connect to network and start discovering peers
     */
    )
  }, {
    key: "start",
    value: (function () {
      var _start = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _this2 = this;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.infoHash;
            case 2:
              this.on('peer', function (peer) {
                var newpeer = false;
                if (!_this2.peers[peer.id]) {
                  newpeer = true;
                  _this2.peers[peer.id] = {};
                  _this2.responseWaiting[peer.id] = {};
                  peer.config = {
                    iceServers: _this2.iceServers
                  };
                }
                peer.on('connect', function () {
                  /**
                   * Multiple data channels to one peer is possible
                   * The `peer` object actually refers to a peer with a data channel. Even though it may have same `id` (peerID) property, the data channel will be different. Different trackers giving the same "peer" will give the `peer` object with different channels.
                   * We will store all channels as backups in case any one of them fails
                   * A peer is removed if all data channels become unavailable
                   */
                  _this2.peers[peer.id][peer.channelName] = peer;
                  if (newpeer) {
                    _this2.emit('peerconnect', peer);
                  }
                });
                peer.on('data', function (data) {
                  _this2.emit('data', peer, data);
                  if (ArrayBuffer.isView(data)) data = arr2text(data);
                  debug('got a message from ' + peer.id);
                  if (data[0] === JSON_MESSAGE_IDENTIFIER) {
                    try {
                      data = JSON.parse(data.slice(1));

                      // A respond function
                      peer.respond = _this2._peerRespond(peer, data.id);
                      var msg = _this2._chunkHandler(data);

                      // msg fully retrieved
                      if (msg !== false) {
                        if (data.o) {
                          msg = JSON.parse(msg);
                        }

                        /**
                         * If there's someone waiting for a response, call them
                         */
                        if (_this2.responseWaiting[peer.id][data.id]) {
                          _this2.responseWaiting[peer.id][data.id]([peer, msg]);
                          delete _this2.responseWaiting[peer.id][data.id];
                        } else {
                          _this2.emit('msg', peer, msg);
                        }
                        _this2._destroyChunks(data.id);
                      }
                    } catch (e) {
                      console.log(e);
                    }
                  }
                });
                peer.on('error', function (err) {
                  _this2._removePeer(peer);
                  debug('Error in connection : ' + err);
                });
                peer.on('close', function () {
                  _this2._removePeer(peer);
                  debug('Connection closed with ' + peer.id);
                });
              });

              // Tracker responded to the announce request
              this.on('update', function (response) {
                var tracker = _this2.trackers[_this2.announceURLs.indexOf(response.announce)];
                _this2.emit('trackerconnect', tracker, _this2.getTrackerStats());
              });

              // Errors in tracker connection
              this.on('warning', function (err) {
                _this2.emit('trackerwarning', err, _this2.getTrackerStats());
              });
              this._fetchPeers();
            case 6:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function start() {
        return _start.apply(this, arguments);
      }
      return start;
    }()
    /**
     * Add a tracker
     * @param string announceURL Tracker Announce URL
     */
    )
  }, {
    key: "addTracker",
    value: function addTracker(announceURL) {
      if (this.announceURLs.indexOf(announceURL) !== -1) {
        throw new Error('Tracker already added');
      }
      var key = this.announceURLs.push(announceURL);
      this.trackers[key] = new WebSocketTracker(this, announceURL);
      this.trackers[key].announce(this._defaultAnnounceOpts());
    }

    /**
     * Remove a tracker without destroying peers
     */
  }, {
    key: "removeTracker",
    value: function removeTracker(announceURL) {
      var key = this.announceURLs.indexOf(announceURL);
      if (key === -1) {
        throw new Error('Tracker does not exist');
      }

      // hack to not destroy peers
      this.trackers[key].peers = [];
      this.trackers[key].destroy();
      delete this.trackers[key];
      delete this.announceURLs[key];
    }

    /**
     * Remove a peer from the list if all channels are closed
     * @param integer id Peer ID
     */
  }, {
    key: "_removePeer",
    value: function _removePeer(peer) {
      if (!this.peers[peer.id]) {
        return false;
      }
      delete this.peers[peer.id][peer.channelName];

      // All data channels are gone. Peer lost
      if (Object.keys(this.peers[peer.id]).length === 0) {
        this.emit('peerclose', peer);
        delete this.responseWaiting[peer.id];
        delete this.peers[peer.id];
      }
    }

    /**
     * Send a msg and get response for it
     * @param Peer peer simple-peer object to send msg to
     * @param string msg Message to send
     * @param integer msgID ID of message if it's a response to a previous message
     */
  }, {
    key: "send",
    value: function send(peer, msg) {
      var _this3 = this;
      var msgID = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      return new Promise(function (resolve, reject) {
        var data = {
          id: msgID !== '' ? msgID : Math.floor(Math.random() * 100000 + 100000),
          msg: msg
        };
        if (_typeof(msg) === 'object') {
          data.msg = JSON.stringify(msg);
          data.o = 1; // indicating object
        }
        try {
          /**
           * Maybe peer channel is closed, so use a different channel if available
           * Array should atleast have one channel, otherwise peer connection is closed
           */
          if (!peer.connected) {
            for (var index in _this3.peers[peer.id]) {
              peer = _this3.peers[peer.id][index];
              if (peer.connected) break;
            }
          }
          if (!_this3.responseWaiting[peer.id]) {
            _this3.responseWaiting[peer.id] = {};
          }
          _this3.responseWaiting[peer.id][data.id] = resolve;
        } catch (e) {
          return reject(Error('Connection to peer closed' + e));
        }
        var chunks = 0;
        var remaining = '';
        while (data.msg.length > 0) {
          data.c = chunks;
          remaining = data.msg.slice(MAX_MESSAGE_LENGTH);
          data.msg = data.msg.slice(0, MAX_MESSAGE_LENGTH);
          if (!remaining) {
            data.last = true;
          }
          peer.send(JSON_MESSAGE_IDENTIFIER + JSON.stringify(data));
          data.msg = remaining;
          chunks++;
        }
        debug('sent a message to ' + peer.id);
      });
    }

    /**
     * Request more peers
     */
  }, {
    key: "requestMorePeers",
    value: function requestMorePeers() {
      var _this4 = this;
      return new Promise(function (resolve) {
        for (var key in _this4.trackers) {
          _this4.trackers[key].announce(_this4._defaultAnnounceOpts());
        }
        resolve(_this4.peers);
      });
    }

    /**
     * Get basic stats about tracker connections
     */
  }, {
    key: "getTrackerStats",
    value: function getTrackerStats() {
      var connectedCount = 0;
      for (var key in this.trackers) {
        if (this.trackers[key].socket && this.trackers[key].socket.connected) {
          connectedCount++;
        }
      }
      return {
        connected: connectedCount,
        total: this.announceURLs.length
      };
    }

    /**
     * Destroy object
     */
  }, {
    key: "destroy",
    value: function destroy() {
      var key;
      for (key in this.peers) {
        for (var key2 in this.peers[key]) {
          this.peers[key][key2].destroy();
        }
      }
      for (key in this.trackers) {
        this.trackers[key].destroy();
      }
    }

    /**
     * A custom function binded on Peer object to easily respond back to message
     * @param Peer peer Peer to send msg to
     * @param integer msgID Message ID
     */
  }, {
    key: "_peerRespond",
    value: function _peerRespond(peer, msgID) {
      var _this5 = this;
      return function (msg) {
        return _this5.send(peer, msg, msgID);
      };
    }

    /**
     * Handle msg chunks. Returns false until the last chunk is received. Finally returns the entire msg
     * @param object data
     */
  }, {
    key: "_chunkHandler",
    value: function _chunkHandler(data) {
      if (!this.msgChunks[data.id]) {
        this.msgChunks[data.id] = [];
      }
      this.msgChunks[data.id][data.c] = data.msg;
      if (data.last) {
        var completeMsg = this.msgChunks[data.id].join('');
        return completeMsg;
      } else {
        return false;
      }
    }

    /**
     * Remove all stored chunks of a particular message
     * @param integer msgID Message ID
     */
  }, {
    key: "_destroyChunks",
    value: function _destroyChunks(msgID) {
      delete this.msgChunks[msgID];
    }

    /**
     * Default announce options
     * @param object opts Options
     */
  }, {
    key: "_defaultAnnounceOpts",
    value: function _defaultAnnounceOpts() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (opts.numwant == null) opts.numwant = 50;
      if (opts.uploaded == null) opts.uploaded = 0;
      if (opts.downloaded == null) opts.downloaded = 0;
      return opts;
    }

    /**
     * Initialize trackers and fetch peers
     */
  }, {
    key: "_fetchPeers",
    value: function _fetchPeers() {
      for (var key in this.announceURLs) {
        this.trackers[key] = new WebSocketTracker(this, this.announceURLs[key]);
        this.trackers[key].announce(this._defaultAnnounceOpts());
      }
    }
  }]);
}(EventEmitter);
