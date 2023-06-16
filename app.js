"use strict";

var a = 1;
console.log(a);
"use strict";

function _typeof2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _defineProperty(e, t, i) {
  return t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i, e;
}

var _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
  return _typeof2(e);
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof2(e);
};

!function () {
  for (var e = ["DocumentType", "Element", "CharacterData"], t = function t() {
    null != this.parentNode && this.parentNode.removeChild(this);
  }, i = 0; i < e.length; i++) {
    var r = e[i];
    window[r] && !window[r].prototype.remove && (window[r].prototype.remove = t);
  }
}(), function (e) {
  function t() {}

  function i(e, t) {
    return function () {
      e.apply(t, arguments);
    };
  }

  function r(e) {
    if ("object" !== _typeof(this)) throw new TypeError("Promises must be constructed via new");
    if ("function" != typeof e) throw new TypeError("not a function");
    this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], u(e, this);
  }

  function n(e, t) {
    for (; 3 === e._state;) {
      e = e._value;
    }

    return 0 === e._state ? void e._deferreds.push(t) : (e._handled = !0, void r._immediateFn(function () {
      var i = 1 === e._state ? t.onFulfilled : t.onRejected;
      if (null === i) return void (1 === e._state ? o : s)(t.promise, e._value);
      var r;

      try {
        r = i(e._value);
      } catch (n) {
        return void s(t.promise, n);
      }

      o(t.promise, r);
    }));
  }

  function o(e, t) {
    try {
      if (t === e) throw new TypeError("A promise cannot be resolved with itself.");

      if (t && ("object" === ("undefined" == typeof t ? "undefined" : _typeof(t)) || "function" == typeof t)) {
        var n = t.then;
        if (t instanceof r) return e._state = 3, e._value = t, void a(e);
        if ("function" == typeof n) return void u(i(n, t), e);
      }

      e._state = 1, e._value = t, a(e);
    } catch (o) {
      s(e, o);
    }
  }

  function s(e, t) {
    e._state = 2, e._value = t, a(e);
  }

  function a(e) {
    2 === e._state && 0 === e._deferreds.length && r._immediateFn(function () {
      e._handled || r._unhandledRejectionFn(e._value);
    });

    for (var t = 0, i = e._deferreds.length; t < i; t++) {
      n(e, e._deferreds[t]);
    }

    e._deferreds = null;
  }

  function l(e, t, i) {
    this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = i;
  }

  function u(e, t) {
    var i = !1;

    try {
      e(function (e) {
        i || (i = !0, o(t, e));
      }, function (e) {
        i || (i = !0, s(t, e));
      });
    } catch (r) {
      if (i) return;
      i = !0, s(t, r);
    }
  }

  var d = setTimeout;
  r.prototype["catch"] = function (e) {
    return this.then(null, e);
  }, r.prototype.then = function (e, i) {
    var r = new this.constructor(t);
    return n(this, new l(e, i, r)), r;
  }, r.all = function (e) {
    var t = Array.prototype.slice.call(e);
    return new r(function (e, i) {
      function r(o, s) {
        try {
          if (s && ("object" === ("undefined" == typeof s ? "undefined" : _typeof(s)) || "function" == typeof s)) {
            var a = s.then;
            if ("function" == typeof a) return void a.call(s, function (e) {
              r(o, e);
            }, i);
          }

          t[o] = s, 0 === --n && e(t);
        } catch (l) {
          i(l);
        }
      }

      if (0 === t.length) return e([]);

      for (var n = t.length, o = 0; o < t.length; o++) {
        r(o, t[o]);
      }
    });
  }, r.resolve = function (e) {
    return e && "object" === ("undefined" == typeof e ? "undefined" : _typeof(e)) && e.constructor === r ? e : new r(function (t) {
      t(e);
    });
  }, r.reject = function (e) {
    return new r(function (t, i) {
      i(e);
    });
  }, r.race = function (e) {
    return new r(function (t, i) {
      for (var r = 0, n = e.length; r < n; r++) {
        e[r].then(t, i);
      }
    });
  }, r._immediateFn = "function" == typeof setImmediate && function (e) {
    setImmediate(e);
  } || function (e) {
    d(e, 0);
  }, r._unhandledRejectionFn = function (e) {
    "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e);
  }, r._setImmediateFn = function (e) {
    r._immediateFn = e;
  }, r._setUnhandledRejectionFn = function (e) {
    r._unhandledRejectionFn = e;
  }, "undefined" != typeof module && module.exports ? module.exports = r : e.Promise || (e.Promise = r);
}(window), function (e) {
  e.Promise || (e.Promise = Promise);

  var t = "required",
      i = "email",
      r = "minLength",
      n = "maxLength",
      o = "password",
      s = "zip",
      a = "phone",
      l = "remote",
      u = "strength",
      d = "function",
      c = function c(e, t) {
    if ("string" == typeof e) return e;
    var i = "post" === t.toLowerCase() ? "" : "?";
    return Array.isArray(e) ? i + e.map(function (e) {
      return e.name + "=" + e.value;
    }).join("&") : i + Object.keys(e).map(function (t) {
      return t + "=" + e[t];
    }).join("&");
  },
      h = function h(e) {
    var t = e.url,
        i = e.method,
        r = e.data,
        n = e.debug,
        o = e.callback,
        s = e.error;
    if (n) return void o("test");
    var a = e.async !== !1,
        l = new XMLHttpRequest(),
        u = c(r, "get"),
        d = null;
    "post" === i.toLowerCase() && (d = c(r, "post"), u = ""), l.open(i, t + u, a), l.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), l.onreadystatechange = function () {
      4 === this.readyState && (200 === this.status ? o(this.responseText) : s && s(this.responseText));
    }, l.send(d);
  },
      f = function f(e, t) {
    this.options = t || {}, this.rules = this.options.rules || {}, this.messages = this.options.messages || void 0, this.colorWrong = this.options.colorWrong || "#FF3030", this.result = {}, this.elements = [], this.tooltip = this.options.tooltip || {}, this.tooltipFadeOutTime = this.tooltip.fadeOutTime || 5e3, this.tooltipFadeOutClass = this.tooltip.fadeOutClass || "just-validate-tooltip-hide", this.tooltipSelectorWrap = document.querySelectorAll(this.tooltip.selectorWrap).length ? document.querySelectorAll(this.tooltip.selectorWrap) : document.querySelectorAll(".just-validate-tooltip-container"), this.bindHandlerKeyup = this.handlerKeyup.bind(this), this.submitHandler = this.options.submitHandler || void 0, this.invalidFormCallback = this.options.invalidFormCallback || void 0, this.promisesRemote = [], this.isValidationSuccess = !1, this.focusWrongField = this.options.focusWrongField || !1, this.REGEXP = {
      email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      zip: /^\d{5}(-\d{4})?$/,
      phone: /^([0-9]( |-)?)?(\(?[0-9]{3}\)?|[0-9]{3})( |-)?([0-9]{3}( |-)?[0-9]{4}|[a-zA-Z0-9]{7})$/,
      password: /[^\w\d]*(([0-9]+.*[A-Za-z]+.*)|[A-Za-z]+.*([0-9]+.*))/,
      strengthPass: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/
    }, this.DEFAULT_REMOTE_ERROR = "Error", this.state = {
      tooltipsTimer: null
    }, this.setForm(document.querySelector(e));
  };

  f.prototype = {
    defaultRules: {
      email: {
        required: !0,
        email: !0
      },
      name: {
        required: !0,
        minLength: 3,
        maxLength: 15
      },
      text: {
        required: !0,
        maxLength: 300,
        minLength: 5
      },
      password: {
        required: !0,
        password: !0,
        minLength: 4,
        maxLength: 8
      },
      zip: {
        required: !0,
        zip: !0
      },
      phone: {
        phone: !0
      }
    },
    defaultMessages: {
      required: "The field is required",
      email: "Please, type a valid email",
      maxLength: "The field must contain a maximum of :value characters",
      minLength: "The field must contain a minimum of :value characters",
      password: "Password is not valid",
      remote: "Email already exists",
      strength: "Password must contents at least one uppercase letter, one lowercase letter and one number",
      "function": "Function returned false"
    },
    handlerKeyup: function handlerKeyup(e) {
      var t = e.target,
          i = {
        name: t.getAttribute("data-validate-field"),
        value: t.value
      };
      delete this.result[i.name], this.validateItem({
        name: i.name,
        value: i.value,
        group: [],
        isKeyupChange: !0
      }), this.renderErrors();
    },
    setterEventListener: function setterEventListener(e, t, i, r) {
      switch ("keyup" === t && (i = this.bindHandlerKeyup), r) {
        case "add":
          e.addEventListener(t, i);
          break;

        case "remove":
          e.removeEventListener(t, i);
      }
    },
    getElementsRealValue: function getElementsRealValue() {
      for (var e = this.$form.querySelectorAll("*"), t = void 0, i = {}, r = 0, n = e.length; r < n; ++r) {
        if (t = e[r].getAttribute("name")) {
          if ("checkbox" === e[r].type) {
            i[t] = e[r].checked;
            continue;
          }

          i[t] = e[r].value;
        }
      }

      return i;
    },
    validationFailed: function validationFailed() {
      this.invalidFormCallback && this.invalidFormCallback(this.result);
      var e = document.querySelector(".js-validate-error-field");
      this.focusWrongField && e && e.focus && e.focus();
    },
    validationSuccess: function validationSuccess() {
      if (0 === Object.keys(this.result).length) {
        if (this.isValidationSuccess = !1, this.submitHandler) {
          var e = this.getElementsRealValue();
          return void this.submitHandler(this.$form, e, h);
        }

        this.$form.submit();
      }
    },
    setForm: function setForm(e) {
      var t = this;
      this.$form = e, this.$form.setAttribute("novalidate", "novalidate"), this.$form.addEventListener("submit", function (e) {
        return e.preventDefault(), t.result = [], t.getElements(), t.promisesRemote.length ? void Promise.all(t.promisesRemote).then(function () {
          t.promisesRemote = [], t.isValidationSuccess ? t.validationSuccess() : t.validationFailed();
        }) : void (t.isValidationSuccess ? t.validationSuccess() : t.validationFailed());
      });
    },
    isEmail: function isEmail(e) {
      return this.REGEXP.email.test(e);
    },
    isZip: function isZip(e) {
      return this.REGEXP.zip.test(e);
    },
    isPhone: function isPhone(e) {
      return this.REGEXP.phone.test(e);
    },
    isPassword: function isPassword(e) {
      return this.REGEXP.password.test(e);
    },
    isEmpty: function isEmpty(e) {
      var t = e;
      return e.trim && (t = e.trim()), !t;
    },
    checkLengthMax: function checkLengthMax(e, t) {
      return e.length <= t;
    },
    checkLengthMin: function checkLengthMin(e, t) {
      return e.length >= t;
    },
    checkStrengthPass: function checkStrengthPass(e) {
      return this.REGEXP.strengthPass.test(e);
    },
    getElements: function getElements() {
      var e = this,
          t = this.$form.querySelectorAll("[data-validate-field]");
      this.elements = [];

      for (var i = function i(_i, r) {
        var n = t[_i],
            o = n.getAttribute("data-validate-field"),
            s = n.value,
            a = !1,
            l = [];

        if ("checkbox" === n.type && (s = n.checked || "", n.addEventListener("change", function (t) {
          var i = t.target,
              r = {
            name: i.getAttribute("data-validate-field"),
            value: i.checked
          };
          delete e.result[r.name], e.validateItem({
            name: r.name,
            value: r.value,
            group: []
          }), e.renderErrors();
        })), "radio" === n.type) {
          var u = e.elements.filter(function (e) {
            if (e.name === o) return e;
          })[0];
          u ? (u.group.push(n.checked), a = !0) : l.push(n.checked), n.addEventListener("change", function (t) {
            var i = t.target,
                r = {
              name: i.getAttribute("data-validate-field"),
              value: i.checked
            };
            delete e.result[r.name], e.validateItem({
              name: r.name,
              value: r.value,
              group: []
            }), e.renderErrors();
          });
        }

        e.setterEventListener(n, "keyup", e.handlerKeyup, "add"), a || e.elements.push({
          name: o,
          value: s,
          group: l
        });
      }, r = 0, n = t.length; r < n; ++r) {
        i(r, n);
      }

      this.validateElements();
    },
    validateRequired: function validateRequired(e) {
      return !this.isEmpty(e);
    },
    validateEmail: function validateEmail(e) {
      return this.isEmail(e);
    },
    validatePhone: function validatePhone(e) {
      return this.isPhone(e);
    },
    validateMinLength: function validateMinLength(e, t) {
      return this.checkLengthMin(e, t);
    },
    validateMaxLength: function validateMaxLength(e, t) {
      return this.checkLengthMax(e, t);
    },
    validateStrengthPass: function validateStrengthPass(e) {
      return this.checkStrengthPass(e);
    },
    validatePassword: function validatePassword(e) {
      return this.isPassword(e);
    },
    validateZip: function validateZip(e) {
      return this.isZip(e);
    },
    validateRemote: function validateRemote(e) {
      var t = e.value,
          i = e.name,
          r = e.url,
          n = e.successAnswer,
          o = e.sendParam,
          s = e.method;
      return new Promise(function (e) {
        h({
          url: r,
          method: s,
          data: _defineProperty({}, o, t),
          async: !0,
          callback: function callback(t) {
            t.toLowerCase() === n.toLowerCase() && e("ok"), e({
              type: "incorrect",
              name: i
            });
          },
          error: function error() {
            e({
              type: "error",
              name: i
            });
          }
        });
      });
    },
    generateMessage: function generateMessage(e, t, i) {
      var r = this.messages || this.defaultMessages,
          n = r[t] && r[t][e] || this.messages && "string" == typeof this.messages[t] && r[t] || this.defaultMessages[e] || this.DEFAULT_REMOTE_ERROR;
      i && (n = n.replace(":value", i.toString())), this.result[t] = {
        message: n
      };
    },
    validateElements: function validateElements() {
      var e = this;
      return this.lockForm(), this.elements.forEach(function (t) {
        e.validateItem({
          name: t.name,
          value: t.value,
          group: t.group
        });
      }), this.promisesRemote.length ? void Promise.all(this.promisesRemote).then(function (t) {
        t.forEach(function (t) {
          return "ok" === t ? void e.renderErrors() : ("error" === t.type && alert("Server error occured. Please try later."), e.generateMessage(l, t.name), void e.renderErrors());
        });
      }) : void this.renderErrors();
    },
    validateItem: function validateItem(e) {
      var c = this,
          h = e.name,
          f = e.group,
          m = e.value,
          v = e.isKeyupChange,
          p = this.rules[h] || this.defaultRules[h] || !1;
      if (p) for (var g in p) {
        var y = p[g];
        if (g !== t && g !== d && "" == m) return;

        switch (g) {
          case d:
            if ("function" != typeof y) break;
            if (y(h, m)) break;
            return void this.generateMessage(d, h, y);

          case t:
            if (!y) break;

            if (f.length) {
              var b = !1;
              if (f.forEach(function (e) {
                c.validateRequired(e) && (b = !0);
              }), b) break;
            } else if (this.validateRequired(m)) break;

            return void this.generateMessage(t, h);

          case i:
            if (!y) break;
            if (this.validateEmail(m)) break;
            return void this.generateMessage(i, h);

          case r:
            if (!y) break;
            if (this.validateMinLength(m, y)) break;
            return void this.generateMessage(r, h, y);

          case n:
            if (!y) break;
            if (this.validateMaxLength(m, y)) break;
            return void this.generateMessage(n, h, y);

          case a:
            if (!y) break;
            if (this.validatePhone(m)) break;
            return void this.generateMessage(a, h);

          case o:
            if (!y) break;
            if (this.validatePassword(m)) break;
            return void this.generateMessage(o, h);

          case u:
            if (!y || "object" !== ("undefined" == typeof y ? "undefined" : _typeof(y))) break;
            if (y["default"] && this.validateStrengthPass(m)) break;

            if (y.custom) {
              var E = void 0;

              try {
                E = new RegExp(y.custom);
              } catch (w) {
                E = this.REGEXP.strengthPass, console.error("Custom regexp for strength rule is not valid. Default regexp was used.");
              }

              if (E.test(m)) break;
            }

            return void this.generateMessage(u, h);

          case s:
            if (!y) break;
            if (this.validateZip(m)) break;
            return void this.generateMessage(s, h);

          case l:
            if (v) break;
            if (!y) break;
            var k = y.url,
                _ = y.successAnswer,
                P = y.method,
                R = y.sendParam,
                S = this.$form.querySelector('input[data-validate-field="' + h + '"]');
            return this.setterEventListener(S, "keyup", this.handlerKeyup, "remove"), void this.promisesRemote.push(this.validateRemote({
              name: h,
              value: m,
              url: k,
              method: P,
              sendParam: R,
              successAnswer: _
            }));
        }
      }
    },
    clearErrors: function clearErrors() {
      for (var e = document.querySelectorAll(".js-validate-error-label"), t = 0, i = e.length; t < i; ++t) {
        e[t].remove();
      }

      e = document.querySelectorAll(".js-validate-error-field");

      for (var r = 0, n = e.length; r < n; ++r) {
        e[r].classList.remove("js-validate-error-field"), e[r].style.border = "", e[r].style.color = "";
      }
    },
    renderErrors: function renderErrors() {
      var e = this;
      if (this.clearErrors(), this.unlockForm(), this.isValidationSuccess = !1, 0 === Object.keys(this.result).length) return void (this.isValidationSuccess = !0);

      for (var t in this.result) {
        var i = this.result[t].message,
            r = this.$form.querySelectorAll('[data-validate-field="' + t + '"]'),
            n = r[r.length - 1],
            o = document.createElement("div");

        if (o.innerHTML = i, o.className = "js-validate-error-label", o.setAttribute("style", "color: " + this.colorWrong), n.style.border = "1px solid " + this.colorWrong, n.style.color = "" + this.colorWrong, n.classList.add("js-validate-error-field"), "checkbox" === n.type || "radio" === n.type) {
          var s = document.querySelector('label[for="' + n.getAttribute("id") + '"]');
          "label" === n.parentNode.tagName.toLowerCase() ? n.parentNode.parentNode.insertBefore(o, null) : s ? s.parentNode.insertBefore(o, s.nextSibling) : n.parentNode.insertBefore(o, n.nextSibling);
        } else n.parentNode.insertBefore(o, n.nextSibling);
      }

      this.tooltipSelectorWrap.length && (this.state.tooltipsTimer = setTimeout(function () {
        e.hideTooltips();
      }, this.tooltipFadeOutTime));
    },
    hideTooltips: function hideTooltips() {
      var e = this,
          t = document.querySelectorAll(".js-validate-error-label");
      t.forEach(function (t) {
        t.classList.add(e.tooltipFadeOutClass);
      }), this.state.tooltipsTimer = null;
    },
    lockForm: function lockForm() {
      for (var e = this.$form.querySelectorAll("input, textarea, button, select"), t = 0, i = e.length; t < i; ++t) {
        e[t].setAttribute("disabled", "disabled"), e[t].style.pointerEvents = "none", e[t].style.webitFilter = "grayscale(100%)", e[t].style.filter = "grayscale(100%)";
      }
    },
    unlockForm: function unlockForm() {
      for (var e = this.$form.querySelectorAll("input, textarea, button, select"), t = 0, i = e.length; t < i; ++t) {
        e[t].removeAttribute("disabled"), e[t].style.pointerEvents = "", e[t].style.webitFilter = "", e[t].style.filter = "";
      }
    }
  }, e.JustValidate = f;
}(window);
console.log('gh');
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMxLmpzIiwianVzdC12YWxpZGF0ZS5taW4uanMiXSwibmFtZXMiOlsiYSIsImNvbnNvbGUiLCJsb2ciLCJfZGVmaW5lUHJvcGVydHkiLCJlIiwidCIsImkiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiX3R5cGVvZiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJsZW5ndGgiLCJyIiwid2luZG93IiwicmVtb3ZlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJUeXBlRXJyb3IiLCJfc3RhdGUiLCJfaGFuZGxlZCIsIl92YWx1ZSIsIl9kZWZlcnJlZHMiLCJ1IiwibiIsInB1c2giLCJfaW1tZWRpYXRlRm4iLCJvbkZ1bGZpbGxlZCIsIm9uUmVqZWN0ZWQiLCJvIiwicyIsInByb21pc2UiLCJ0aGVuIiwiX3VuaGFuZGxlZFJlamVjdGlvbkZuIiwibCIsImQiLCJzZXRUaW1lb3V0IiwiYWxsIiwiQXJyYXkiLCJzbGljZSIsImNhbGwiLCJyZXNvbHZlIiwicmVqZWN0IiwicmFjZSIsInNldEltbWVkaWF0ZSIsIndhcm4iLCJfc2V0SW1tZWRpYXRlRm4iLCJfc2V0VW5oYW5kbGVkUmVqZWN0aW9uRm4iLCJtb2R1bGUiLCJleHBvcnRzIiwiUHJvbWlzZSIsImMiLCJ0b0xvd2VyQ2FzZSIsImlzQXJyYXkiLCJtYXAiLCJuYW1lIiwiam9pbiIsImtleXMiLCJoIiwidXJsIiwibWV0aG9kIiwiZGF0YSIsImRlYnVnIiwiY2FsbGJhY2siLCJlcnJvciIsImFzeW5jIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwic2V0UmVxdWVzdEhlYWRlciIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJyZXNwb25zZVRleHQiLCJzZW5kIiwiZiIsIm9wdGlvbnMiLCJydWxlcyIsIm1lc3NhZ2VzIiwiY29sb3JXcm9uZyIsInJlc3VsdCIsImVsZW1lbnRzIiwidG9vbHRpcCIsInRvb2x0aXBGYWRlT3V0VGltZSIsImZhZGVPdXRUaW1lIiwidG9vbHRpcEZhZGVPdXRDbGFzcyIsImZhZGVPdXRDbGFzcyIsInRvb2x0aXBTZWxlY3RvcldyYXAiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzZWxlY3RvcldyYXAiLCJiaW5kSGFuZGxlcktleXVwIiwiaGFuZGxlcktleXVwIiwiYmluZCIsInN1Ym1pdEhhbmRsZXIiLCJpbnZhbGlkRm9ybUNhbGxiYWNrIiwicHJvbWlzZXNSZW1vdGUiLCJpc1ZhbGlkYXRpb25TdWNjZXNzIiwiZm9jdXNXcm9uZ0ZpZWxkIiwiUkVHRVhQIiwiZW1haWwiLCJ6aXAiLCJwaG9uZSIsInBhc3N3b3JkIiwic3RyZW5ndGhQYXNzIiwiREVGQVVMVF9SRU1PVEVfRVJST1IiLCJzdGF0ZSIsInRvb2x0aXBzVGltZXIiLCJzZXRGb3JtIiwicXVlcnlTZWxlY3RvciIsImRlZmF1bHRSdWxlcyIsInJlcXVpcmVkIiwibWluTGVuZ3RoIiwibWF4TGVuZ3RoIiwidGV4dCIsImRlZmF1bHRNZXNzYWdlcyIsInJlbW90ZSIsInN0cmVuZ3RoIiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwidmFsaWRhdGVJdGVtIiwiZ3JvdXAiLCJpc0tleXVwQ2hhbmdlIiwicmVuZGVyRXJyb3JzIiwic2V0dGVyRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZ2V0RWxlbWVudHNSZWFsVmFsdWUiLCIkZm9ybSIsInR5cGUiLCJjaGVja2VkIiwidmFsaWRhdGlvbkZhaWxlZCIsImZvY3VzIiwidmFsaWRhdGlvblN1Y2Nlc3MiLCJzdWJtaXQiLCJzZXRBdHRyaWJ1dGUiLCJwcmV2ZW50RGVmYXVsdCIsImdldEVsZW1lbnRzIiwiaXNFbWFpbCIsInRlc3QiLCJpc1ppcCIsImlzUGhvbmUiLCJpc1Bhc3N3b3JkIiwiaXNFbXB0eSIsInRyaW0iLCJjaGVja0xlbmd0aE1heCIsImNoZWNrTGVuZ3RoTWluIiwiY2hlY2tTdHJlbmd0aFBhc3MiLCJmaWx0ZXIiLCJ2YWxpZGF0ZUVsZW1lbnRzIiwidmFsaWRhdGVSZXF1aXJlZCIsInZhbGlkYXRlRW1haWwiLCJ2YWxpZGF0ZVBob25lIiwidmFsaWRhdGVNaW5MZW5ndGgiLCJ2YWxpZGF0ZU1heExlbmd0aCIsInZhbGlkYXRlU3RyZW5ndGhQYXNzIiwidmFsaWRhdGVQYXNzd29yZCIsInZhbGlkYXRlWmlwIiwidmFsaWRhdGVSZW1vdGUiLCJzdWNjZXNzQW5zd2VyIiwic2VuZFBhcmFtIiwiZ2VuZXJhdGVNZXNzYWdlIiwicmVwbGFjZSIsInRvU3RyaW5nIiwibWVzc2FnZSIsImxvY2tGb3JtIiwiZm9yRWFjaCIsImFsZXJ0IiwibSIsInYiLCJwIiwiZyIsInkiLCJiIiwiY3VzdG9tIiwiRSIsIlJlZ0V4cCIsInciLCJrIiwiXyIsIlAiLCJSIiwiUyIsImNsZWFyRXJyb3JzIiwiY2xhc3NMaXN0Iiwic3R5bGUiLCJib3JkZXIiLCJjb2xvciIsInVubG9ja0Zvcm0iLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiY2xhc3NOYW1lIiwiYWRkIiwidGFnTmFtZSIsImluc2VydEJlZm9yZSIsIm5leHRTaWJsaW5nIiwiaGlkZVRvb2x0aXBzIiwicG9pbnRlckV2ZW50cyIsIndlYml0RmlsdGVyIiwicmVtb3ZlQXR0cmlidXRlIiwiSnVzdFZhbGlkYXRlIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLENBQUMsR0FBRyxDQUFWO0FBQ0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFaO0FDREE7Ozs7QUFFQSxTQUFTRyxlQUFULENBQXlCQyxDQUF6QixFQUE0QkMsQ0FBNUIsRUFBK0JDLENBQS9CLEVBQWtDO0FBQUUsU0FBT0QsQ0FBQyxJQUFJRCxDQUFMLEdBQVNHLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkosQ0FBdEIsRUFBeUJDLENBQXpCLEVBQTRCO0FBQUVJLElBQUFBLEtBQUssRUFBRUgsQ0FBVDtBQUFZSSxJQUFBQSxVQUFVLEVBQUUsQ0FBQyxDQUF6QjtBQUE0QkMsSUFBQUEsWUFBWSxFQUFFLENBQUMsQ0FBM0M7QUFBOENDLElBQUFBLFFBQVEsRUFBRSxDQUFDO0FBQXpELEdBQTVCLENBQVQsR0FBcUdSLENBQUMsQ0FBQ0MsQ0FBRCxDQUFELEdBQU9DLENBQTVHLEVBQStHRixDQUF0SDtBQUF5SDs7QUFDN0osSUFBSVMsT0FBTyxHQUFHLGNBQWMsT0FBT0MsTUFBckIsSUFBK0IscUJBQW1CQSxNQUFNLENBQUNDLFFBQTFCLENBQS9CLEdBQW9FLFVBQVNYLENBQVQsRUFBWTtBQUFFLGtCQUFjQSxDQUFkO0FBQWlCLENBQW5HLEdBQXNHLFVBQVNBLENBQVQsRUFBWTtBQUFFLFNBQU9BLENBQUMsSUFBSSxjQUFjLE9BQU9VLE1BQTFCLElBQW9DVixDQUFDLENBQUNZLFdBQUYsS0FBa0JGLE1BQXRELElBQWdFVixDQUFDLEtBQUtVLE1BQU0sQ0FBQ0csU0FBN0UsR0FBeUYsUUFBekYsWUFBMkdiLENBQTNHLENBQVA7QUFBcUgsQ0FBdlA7O0FBQ0EsQ0FBRSxZQUFXO0FBQ1QsT0FBSyxJQUFJQSxDQUFDLEdBQUcsQ0FBQyxjQUFELEVBQWlCLFNBQWpCLEVBQTRCLGVBQTVCLENBQVIsRUFBc0RDLENBQUMsR0FBRyxTQUFKQSxDQUFJLEdBQVc7QUFBRSxZQUFRLEtBQUthLFVBQWIsSUFBMkIsS0FBS0EsVUFBTCxDQUFnQkMsV0FBaEIsQ0FBNEIsSUFBNUIsQ0FBM0I7QUFBOEQsR0FBckksRUFBdUliLENBQUMsR0FBRyxDQUFoSixFQUFtSkEsQ0FBQyxHQUFHRixDQUFDLENBQUNnQixNQUF6SixFQUFpS2QsQ0FBQyxFQUFsSyxFQUFzSztBQUNsSyxRQUFJZSxDQUFDLEdBQUdqQixDQUFDLENBQUNFLENBQUQsQ0FBVDtBQUNBZ0IsSUFBQUEsTUFBTSxDQUFDRCxDQUFELENBQU4sSUFBYSxDQUFDQyxNQUFNLENBQUNELENBQUQsQ0FBTixDQUFVSixTQUFWLENBQW9CTSxNQUFsQyxLQUE2Q0QsTUFBTSxDQUFDRCxDQUFELENBQU4sQ0FBVUosU0FBVixDQUFvQk0sTUFBcEIsR0FBNkJsQixDQUExRTtBQUNIO0FBQ0osQ0FMQyxFQUFGLEVBTUEsVUFBU0QsQ0FBVCxFQUFZO0FBQ1IsV0FBU0MsQ0FBVCxHQUFhLENBQUU7O0FBRWYsV0FBU0MsQ0FBVCxDQUFXRixDQUFYLEVBQWNDLENBQWQsRUFBaUI7QUFBRSxXQUFPLFlBQVc7QUFBRUQsTUFBQUEsQ0FBQyxDQUFDb0IsS0FBRixDQUFRbkIsQ0FBUixFQUFXb0IsU0FBWDtBQUF1QixLQUEzQztBQUE2Qzs7QUFFaEUsV0FBU0osQ0FBVCxDQUFXakIsQ0FBWCxFQUFjO0FBQ1YsUUFBSSxhQUFhUyxPQUFPLENBQUMsSUFBRCxDQUF4QixFQUFnQyxNQUFNLElBQUlhLFNBQUosQ0FBYyxzQ0FBZCxDQUFOO0FBQ2hDLFFBQUksY0FBYyxPQUFPdEIsQ0FBekIsRUFBNEIsTUFBTSxJQUFJc0IsU0FBSixDQUFjLGdCQUFkLENBQU47QUFDNUIsU0FBS0MsTUFBTCxHQUFjLENBQWQsRUFBaUIsS0FBS0MsUUFBTCxHQUFnQixDQUFDLENBQWxDLEVBQXFDLEtBQUtDLE1BQUwsR0FBYyxLQUFLLENBQXhELEVBQTJELEtBQUtDLFVBQUwsR0FBa0IsRUFBN0UsRUFBaUZDLENBQUMsQ0FBQzNCLENBQUQsRUFBSSxJQUFKLENBQWxGO0FBQ0g7O0FBRUQsV0FBUzRCLENBQVQsQ0FBVzVCLENBQVgsRUFBY0MsQ0FBZCxFQUFpQjtBQUNiLFdBQU8sTUFBTUQsQ0FBQyxDQUFDdUIsTUFBZjtBQUF3QnZCLE1BQUFBLENBQUMsR0FBR0EsQ0FBQyxDQUFDeUIsTUFBTjtBQUF4Qjs7QUFDQSxXQUFPLE1BQU16QixDQUFDLENBQUN1QixNQUFSLEdBQWlCLEtBQUt2QixDQUFDLENBQUMwQixVQUFGLENBQWFHLElBQWIsQ0FBa0I1QixDQUFsQixDQUF0QixJQUE4Q0QsQ0FBQyxDQUFDd0IsUUFBRixHQUFhLENBQUMsQ0FBZCxFQUFpQixLQUFLUCxDQUFDLENBQUNhLFlBQUYsQ0FBZSxZQUFXO0FBQ2pHLFVBQUk1QixDQUFDLEdBQUcsTUFBTUYsQ0FBQyxDQUFDdUIsTUFBUixHQUFpQnRCLENBQUMsQ0FBQzhCLFdBQW5CLEdBQWlDOUIsQ0FBQyxDQUFDK0IsVUFBM0M7QUFDQSxVQUFJLFNBQVM5QixDQUFiLEVBQWdCLE9BQU8sS0FBSSxDQUFDLE1BQU1GLENBQUMsQ0FBQ3VCLE1BQVIsR0FBaUJVLENBQWpCLEdBQXFCQyxDQUF0QixFQUF5QmpDLENBQUMsQ0FBQ2tDLE9BQTNCLEVBQW9DbkMsQ0FBQyxDQUFDeUIsTUFBdEMsQ0FBWDtBQUNoQixVQUFJUixDQUFKOztBQUNBLFVBQUk7QUFBRUEsUUFBQUEsQ0FBQyxHQUFHZixDQUFDLENBQUNGLENBQUMsQ0FBQ3lCLE1BQUgsQ0FBTDtBQUFpQixPQUF2QixDQUF3QixPQUFPRyxDQUFQLEVBQVU7QUFBRSxlQUFPLEtBQUtNLENBQUMsQ0FBQ2pDLENBQUMsQ0FBQ2tDLE9BQUgsRUFBWVAsQ0FBWixDQUFiO0FBQTZCOztBQUNqRUssTUFBQUEsQ0FBQyxDQUFDaEMsQ0FBQyxDQUFDa0MsT0FBSCxFQUFZbEIsQ0FBWixDQUFEO0FBQ0gsS0FOMEUsQ0FBcEUsQ0FBUDtBQU9IOztBQUVELFdBQVNnQixDQUFULENBQVdqQyxDQUFYLEVBQWNDLENBQWQsRUFBaUI7QUFDYixRQUFJO0FBQ0EsVUFBSUEsQ0FBQyxLQUFLRCxDQUFWLEVBQWEsTUFBTSxJQUFJc0IsU0FBSixDQUFjLDJDQUFkLENBQU47O0FBQ2IsVUFBSXJCLENBQUMsS0FBSyxjQUFjLGVBQWUsT0FBT0EsQ0FBdEIsR0FBMEIsV0FBMUIsR0FBd0NRLE9BQU8sQ0FBQ1IsQ0FBRCxDQUE3RCxLQUFxRSxjQUFjLE9BQU9BLENBQS9GLENBQUwsRUFBd0c7QUFBRSxZQUFJMkIsQ0FBQyxHQUFHM0IsQ0FBQyxDQUFDbUMsSUFBVjtBQUFnQixZQUFJbkMsQ0FBQyxZQUFZZ0IsQ0FBakIsRUFBb0IsT0FBT2pCLENBQUMsQ0FBQ3VCLE1BQUYsR0FBVyxDQUFYLEVBQWN2QixDQUFDLENBQUN5QixNQUFGLEdBQVd4QixDQUF6QixFQUE0QixLQUFLTCxDQUFDLENBQUNJLENBQUQsQ0FBekM7QUFBOEMsWUFBSSxjQUFjLE9BQU80QixDQUF6QixFQUE0QixPQUFPLEtBQUtELENBQUMsQ0FBQ3pCLENBQUMsQ0FBQzBCLENBQUQsRUFBSTNCLENBQUosQ0FBRixFQUFVRCxDQUFWLENBQWI7QUFBMkI7O0FBQ25QQSxNQUFBQSxDQUFDLENBQUN1QixNQUFGLEdBQVcsQ0FBWCxFQUFjdkIsQ0FBQyxDQUFDeUIsTUFBRixHQUFXeEIsQ0FBekIsRUFBNEJMLENBQUMsQ0FBQ0ksQ0FBRCxDQUE3QjtBQUNILEtBSkQsQ0FJRSxPQUFPaUMsQ0FBUCxFQUFVO0FBQUVDLE1BQUFBLENBQUMsQ0FBQ2xDLENBQUQsRUFBSWlDLENBQUosQ0FBRDtBQUFTO0FBQzFCOztBQUVELFdBQVNDLENBQVQsQ0FBV2xDLENBQVgsRUFBY0MsQ0FBZCxFQUFpQjtBQUFFRCxJQUFBQSxDQUFDLENBQUN1QixNQUFGLEdBQVcsQ0FBWCxFQUFjdkIsQ0FBQyxDQUFDeUIsTUFBRixHQUFXeEIsQ0FBekIsRUFBNEJMLENBQUMsQ0FBQ0ksQ0FBRCxDQUE3QjtBQUFrQzs7QUFFckQsV0FBU0osQ0FBVCxDQUFXSSxDQUFYLEVBQWM7QUFDVixVQUFNQSxDQUFDLENBQUN1QixNQUFSLElBQWtCLE1BQU12QixDQUFDLENBQUMwQixVQUFGLENBQWFWLE1BQXJDLElBQStDQyxDQUFDLENBQUNhLFlBQUYsQ0FBZSxZQUFXO0FBQUU5QixNQUFBQSxDQUFDLENBQUN3QixRQUFGLElBQWNQLENBQUMsQ0FBQ29CLHFCQUFGLENBQXdCckMsQ0FBQyxDQUFDeUIsTUFBMUIsQ0FBZDtBQUFpRCxLQUE3RSxDQUEvQzs7QUFDQSxTQUFLLElBQUl4QixDQUFDLEdBQUcsQ0FBUixFQUFXQyxDQUFDLEdBQUdGLENBQUMsQ0FBQzBCLFVBQUYsQ0FBYVYsTUFBakMsRUFBeUNmLENBQUMsR0FBR0MsQ0FBN0MsRUFBZ0RELENBQUMsRUFBakQ7QUFBcUQyQixNQUFBQSxDQUFDLENBQUM1QixDQUFELEVBQUlBLENBQUMsQ0FBQzBCLFVBQUYsQ0FBYXpCLENBQWIsQ0FBSixDQUFEO0FBQXJEOztBQUNBRCxJQUFBQSxDQUFDLENBQUMwQixVQUFGLEdBQWUsSUFBZjtBQUNIOztBQUVELFdBQVNZLENBQVQsQ0FBV3RDLENBQVgsRUFBY0MsQ0FBZCxFQUFpQkMsQ0FBakIsRUFBb0I7QUFBRSxTQUFLNkIsV0FBTCxHQUFtQixjQUFjLE9BQU8vQixDQUFyQixHQUF5QkEsQ0FBekIsR0FBNkIsSUFBaEQsRUFBc0QsS0FBS2dDLFVBQUwsR0FBa0IsY0FBYyxPQUFPL0IsQ0FBckIsR0FBeUJBLENBQXpCLEdBQTZCLElBQXJHLEVBQTJHLEtBQUtrQyxPQUFMLEdBQWVqQyxDQUExSDtBQUE2SDs7QUFFbkosV0FBU3lCLENBQVQsQ0FBVzNCLENBQVgsRUFBY0MsQ0FBZCxFQUFpQjtBQUNiLFFBQUlDLENBQUMsR0FBRyxDQUFDLENBQVQ7O0FBQ0EsUUFBSTtBQUFFRixNQUFBQSxDQUFDLENBQUMsVUFBU0EsQ0FBVCxFQUFZO0FBQUVFLFFBQUFBLENBQUMsS0FBS0EsQ0FBQyxHQUFHLENBQUMsQ0FBTCxFQUFRK0IsQ0FBQyxDQUFDaEMsQ0FBRCxFQUFJRCxDQUFKLENBQWQsQ0FBRDtBQUF3QixPQUF2QyxFQUF5QyxVQUFTQSxDQUFULEVBQVk7QUFBRUUsUUFBQUEsQ0FBQyxLQUFLQSxDQUFDLEdBQUcsQ0FBQyxDQUFMLEVBQVFnQyxDQUFDLENBQUNqQyxDQUFELEVBQUlELENBQUosQ0FBZCxDQUFEO0FBQXdCLE9BQS9FLENBQUQ7QUFBbUYsS0FBekYsQ0FBMEYsT0FBT2lCLENBQVAsRUFBVTtBQUNoRyxVQUFJZixDQUFKLEVBQU87QUFDUEEsTUFBQUEsQ0FBQyxHQUFHLENBQUMsQ0FBTCxFQUFRZ0MsQ0FBQyxDQUFDakMsQ0FBRCxFQUFJZ0IsQ0FBSixDQUFUO0FBQ0g7QUFDSjs7QUFDRCxNQUFJc0IsQ0FBQyxHQUFHQyxVQUFSO0FBQ0F2QixFQUFBQSxDQUFDLENBQUNKLFNBQUYsQ0FBWSxPQUFaLElBQXVCLFVBQVNiLENBQVQsRUFBWTtBQUFFLFdBQU8sS0FBS29DLElBQUwsQ0FBVSxJQUFWLEVBQWdCcEMsQ0FBaEIsQ0FBUDtBQUEyQixHQUFoRSxFQUFrRWlCLENBQUMsQ0FBQ0osU0FBRixDQUFZdUIsSUFBWixHQUFtQixVQUFTcEMsQ0FBVCxFQUFZRSxDQUFaLEVBQWU7QUFBRSxRQUFJZSxDQUFDLEdBQUcsSUFBSSxLQUFLTCxXQUFULENBQXFCWCxDQUFyQixDQUFSO0FBQWlDLFdBQU8yQixDQUFDLENBQUMsSUFBRCxFQUFPLElBQUlVLENBQUosQ0FBTXRDLENBQU4sRUFBU0UsQ0FBVCxFQUFZZSxDQUFaLENBQVAsQ0FBRCxFQUF5QkEsQ0FBaEM7QUFBbUMsR0FBMUssRUFBNEtBLENBQUMsQ0FBQ3dCLEdBQUYsR0FBUSxVQUFTekMsQ0FBVCxFQUFZO0FBQzVMLFFBQUlDLENBQUMsR0FBR3lDLEtBQUssQ0FBQzdCLFNBQU4sQ0FBZ0I4QixLQUFoQixDQUFzQkMsSUFBdEIsQ0FBMkI1QyxDQUEzQixDQUFSO0FBQ0EsV0FBTyxJQUFJaUIsQ0FBSixDQUFNLFVBQVNqQixDQUFULEVBQVlFLENBQVosRUFBZTtBQUN4QixlQUFTZSxDQUFULENBQVdnQixDQUFYLEVBQWNDLENBQWQsRUFBaUI7QUFDYixZQUFJO0FBQ0EsY0FBSUEsQ0FBQyxLQUFLLGNBQWMsZUFBZSxPQUFPQSxDQUF0QixHQUEwQixXQUExQixHQUF3Q3pCLE9BQU8sQ0FBQ3lCLENBQUQsQ0FBN0QsS0FBcUUsY0FBYyxPQUFPQSxDQUEvRixDQUFMLEVBQXdHO0FBQUUsZ0JBQUl0QyxDQUFDLEdBQUdzQyxDQUFDLENBQUNFLElBQVY7QUFBZ0IsZ0JBQUksY0FBYyxPQUFPeEMsQ0FBekIsRUFBNEIsT0FBTyxLQUFLQSxDQUFDLENBQUNnRCxJQUFGLENBQU9WLENBQVAsRUFBVSxVQUFTbEMsQ0FBVCxFQUFZO0FBQUVpQixjQUFBQSxDQUFDLENBQUNnQixDQUFELEVBQUlqQyxDQUFKLENBQUQ7QUFBUyxhQUFqQyxFQUFtQ0UsQ0FBbkMsQ0FBWjtBQUFtRDs7QUFDek1ELFVBQUFBLENBQUMsQ0FBQ2dDLENBQUQsQ0FBRCxHQUFPQyxDQUFQLEVBQVUsTUFBTSxFQUFFTixDQUFSLElBQWE1QixDQUFDLENBQUNDLENBQUQsQ0FBeEI7QUFDSCxTQUhELENBR0UsT0FBT3FDLENBQVAsRUFBVTtBQUFFcEMsVUFBQUEsQ0FBQyxDQUFDb0MsQ0FBRCxDQUFEO0FBQU07QUFDdkI7O0FBQ0QsVUFBSSxNQUFNckMsQ0FBQyxDQUFDZSxNQUFaLEVBQW9CLE9BQU9oQixDQUFDLENBQUMsRUFBRCxDQUFSOztBQUNwQixXQUFLLElBQUk0QixDQUFDLEdBQUczQixDQUFDLENBQUNlLE1BQVYsRUFBa0JpQixDQUFDLEdBQUcsQ0FBM0IsRUFBOEJBLENBQUMsR0FBR2hDLENBQUMsQ0FBQ2UsTUFBcEMsRUFBNENpQixDQUFDLEVBQTdDO0FBQWlEaEIsUUFBQUEsQ0FBQyxDQUFDZ0IsQ0FBRCxFQUFJaEMsQ0FBQyxDQUFDZ0MsQ0FBRCxDQUFMLENBQUQ7QUFBakQ7QUFDSCxLQVRNLENBQVA7QUFVSCxHQVpELEVBWUdoQixDQUFDLENBQUM0QixPQUFGLEdBQVksVUFBUzdDLENBQVQsRUFBWTtBQUFFLFdBQU9BLENBQUMsSUFBSSxjQUFjLGVBQWUsT0FBT0EsQ0FBdEIsR0FBMEIsV0FBMUIsR0FBd0NTLE9BQU8sQ0FBQ1QsQ0FBRCxDQUE3RCxDQUFMLElBQTBFQSxDQUFDLENBQUNZLFdBQUYsS0FBa0JLLENBQTVGLEdBQWdHakIsQ0FBaEcsR0FBb0csSUFBSWlCLENBQUosQ0FBTSxVQUFTaEIsQ0FBVCxFQUFZO0FBQUVBLE1BQUFBLENBQUMsQ0FBQ0QsQ0FBRCxDQUFEO0FBQU0sS0FBMUIsQ0FBM0c7QUFBd0ksR0FackssRUFZdUtpQixDQUFDLENBQUM2QixNQUFGLEdBQVcsVUFBUzlDLENBQVQsRUFBWTtBQUFFLFdBQU8sSUFBSWlCLENBQUosQ0FBTSxVQUFTaEIsQ0FBVCxFQUFZQyxDQUFaLEVBQWU7QUFBRUEsTUFBQUEsQ0FBQyxDQUFDRixDQUFELENBQUQ7QUFBTSxLQUE3QixDQUFQO0FBQXVDLEdBWnZPLEVBWXlPaUIsQ0FBQyxDQUFDOEIsSUFBRixHQUFTLFVBQVMvQyxDQUFULEVBQVk7QUFBRSxXQUFPLElBQUlpQixDQUFKLENBQU0sVUFBU2hCLENBQVQsRUFBWUMsQ0FBWixFQUFlO0FBQUUsV0FBSyxJQUFJZSxDQUFDLEdBQUcsQ0FBUixFQUFXVyxDQUFDLEdBQUc1QixDQUFDLENBQUNnQixNQUF0QixFQUE4QkMsQ0FBQyxHQUFHVyxDQUFsQyxFQUFxQ1gsQ0FBQyxFQUF0QztBQUEwQ2pCLFFBQUFBLENBQUMsQ0FBQ2lCLENBQUQsQ0FBRCxDQUFLbUIsSUFBTCxDQUFVbkMsQ0FBVixFQUFhQyxDQUFiO0FBQTFDO0FBQTJELEtBQWxGLENBQVA7QUFBNEYsR0FaNVYsRUFZOFZlLENBQUMsQ0FBQ2EsWUFBRixHQUFpQixjQUFjLE9BQU9rQixZQUFyQixJQUFxQyxVQUFTaEQsQ0FBVCxFQUFZO0FBQUVnRCxJQUFBQSxZQUFZLENBQUNoRCxDQUFELENBQVo7QUFBaUIsR0FBcEUsSUFBd0UsVUFBU0EsQ0FBVCxFQUFZO0FBQUV1QyxJQUFBQSxDQUFDLENBQUN2QyxDQUFELEVBQUksQ0FBSixDQUFEO0FBQVMsR0FaOWMsRUFZZ2RpQixDQUFDLENBQUNvQixxQkFBRixHQUEwQixVQUFTckMsQ0FBVCxFQUFZO0FBQUUsbUJBQWUsT0FBT0gsT0FBdEIsSUFBaUNBLE9BQWpDLElBQTRDQSxPQUFPLENBQUNvRCxJQUFSLENBQWEsdUNBQWIsRUFBc0RqRCxDQUF0RCxDQUE1QztBQUFzRyxHQVo5bEIsRUFZZ21CaUIsQ0FBQyxDQUFDaUMsZUFBRixHQUFvQixVQUFTbEQsQ0FBVCxFQUFZO0FBQUVpQixJQUFBQSxDQUFDLENBQUNhLFlBQUYsR0FBaUI5QixDQUFqQjtBQUFvQixHQVp0cEIsRUFZd3BCaUIsQ0FBQyxDQUFDa0Msd0JBQUYsR0FBNkIsVUFBU25ELENBQVQsRUFBWTtBQUFFaUIsSUFBQUEsQ0FBQyxDQUFDb0IscUJBQUYsR0FBMEJyQyxDQUExQjtBQUE2QixHQVpodUIsRUFZa3VCLGVBQWUsT0FBT29ELE1BQXRCLElBQWdDQSxNQUFNLENBQUNDLE9BQXZDLEdBQWlERCxNQUFNLENBQUNDLE9BQVAsR0FBaUJwQyxDQUFsRSxHQUFzRWpCLENBQUMsQ0FBQ3NELE9BQUYsS0FBY3RELENBQUMsQ0FBQ3NELE9BQUYsR0FBWXJDLENBQTFCLENBWnh5QjtBQWFILENBN0RELENBNkRFQyxNQTdERixDQU5BLEVBb0VBLFVBQVNsQixDQUFULEVBQVk7QUFDUkEsRUFBQUEsQ0FBQyxDQUFDc0QsT0FBRixLQUFjdEQsQ0FBQyxDQUFDc0QsT0FBRixHQUFZQSxPQUExQjs7QUFDQSxNQUFJckQsQ0FBQyxHQUFHLFVBQVI7QUFBQSxNQUNJQyxDQUFDLEdBQUcsT0FEUjtBQUFBLE1BRUllLENBQUMsR0FBRyxXQUZSO0FBQUEsTUFHSVcsQ0FBQyxHQUFHLFdBSFI7QUFBQSxNQUlJSyxDQUFDLEdBQUcsVUFKUjtBQUFBLE1BS0lDLENBQUMsR0FBRyxLQUxSO0FBQUEsTUFNSXRDLENBQUMsR0FBRyxPQU5SO0FBQUEsTUFPSTBDLENBQUMsR0FBRyxRQVBSO0FBQUEsTUFRSVgsQ0FBQyxHQUFHLFVBUlI7QUFBQSxNQVNJWSxDQUFDLEdBQUcsVUFUUjtBQUFBLE1BVUlnQixDQUFDLEdBQUcsU0FBSkEsQ0FBSSxDQUFTdkQsQ0FBVCxFQUFZQyxDQUFaLEVBQWU7QUFBRSxRQUFJLFlBQVksT0FBT0QsQ0FBdkIsRUFBMEIsT0FBT0EsQ0FBUDtBQUFVLFFBQUlFLENBQUMsR0FBRyxXQUFXRCxDQUFDLENBQUN1RCxXQUFGLEVBQVgsR0FBNkIsRUFBN0IsR0FBa0MsR0FBMUM7QUFBK0MsV0FBT2QsS0FBSyxDQUFDZSxPQUFOLENBQWN6RCxDQUFkLElBQW1CRSxDQUFDLEdBQUdGLENBQUMsQ0FBQzBELEdBQUYsQ0FBTSxVQUFTMUQsQ0FBVCxFQUFZO0FBQUUsYUFBT0EsQ0FBQyxDQUFDMkQsSUFBRixHQUFTLEdBQVQsR0FBZTNELENBQUMsQ0FBQ0ssS0FBeEI7QUFBK0IsS0FBbkQsRUFBcUR1RCxJQUFyRCxDQUEwRCxHQUExRCxDQUF2QixHQUF3RjFELENBQUMsR0FBR0MsTUFBTSxDQUFDMEQsSUFBUCxDQUFZN0QsQ0FBWixFQUFlMEQsR0FBZixDQUFtQixVQUFTekQsQ0FBVCxFQUFZO0FBQUUsYUFBT0EsQ0FBQyxHQUFHLEdBQUosR0FBVUQsQ0FBQyxDQUFDQyxDQUFELENBQWxCO0FBQXVCLEtBQXhELEVBQTBEMkQsSUFBMUQsQ0FBK0QsR0FBL0QsQ0FBbkc7QUFBd0ssR0FWcFI7QUFBQSxNQVdJRSxDQUFDLEdBQUcsU0FBSkEsQ0FBSSxDQUFTOUQsQ0FBVCxFQUFZO0FBQ1osUUFBSUMsQ0FBQyxHQUFHRCxDQUFDLENBQUMrRCxHQUFWO0FBQUEsUUFDSTdELENBQUMsR0FBR0YsQ0FBQyxDQUFDZ0UsTUFEVjtBQUFBLFFBRUkvQyxDQUFDLEdBQUdqQixDQUFDLENBQUNpRSxJQUZWO0FBQUEsUUFHSXJDLENBQUMsR0FBRzVCLENBQUMsQ0FBQ2tFLEtBSFY7QUFBQSxRQUlJakMsQ0FBQyxHQUFHakMsQ0FBQyxDQUFDbUUsUUFKVjtBQUFBLFFBS0lqQyxDQUFDLEdBQUdsQyxDQUFDLENBQUNvRSxLQUxWO0FBTUEsUUFBSXhDLENBQUosRUFBTyxPQUFPLEtBQUtLLENBQUMsQ0FBQyxNQUFELENBQWI7QUFDUCxRQUFJckMsQ0FBQyxHQUFHSSxDQUFDLENBQUNxRSxLQUFGLEtBQVksQ0FBQyxDQUFyQjtBQUFBLFFBQ0kvQixDQUFDLEdBQUcsSUFBSWdDLGNBQUosRUFEUjtBQUFBLFFBRUkzQyxDQUFDLEdBQUc0QixDQUFDLENBQUN0QyxDQUFELEVBQUksS0FBSixDQUZUO0FBQUEsUUFHSXNCLENBQUMsR0FBRyxJQUhSO0FBSUEsZUFBV3JDLENBQUMsQ0FBQ3NELFdBQUYsRUFBWCxLQUErQmpCLENBQUMsR0FBR2dCLENBQUMsQ0FBQ3RDLENBQUQsRUFBSSxNQUFKLENBQUwsRUFBa0JVLENBQUMsR0FBRyxFQUFyRCxHQUEwRFcsQ0FBQyxDQUFDaUMsSUFBRixDQUFPckUsQ0FBUCxFQUFVRCxDQUFDLEdBQUcwQixDQUFkLEVBQWlCL0IsQ0FBakIsQ0FBMUQsRUFBK0UwQyxDQUFDLENBQUNrQyxnQkFBRixDQUFtQixjQUFuQixFQUFtQyxtQ0FBbkMsQ0FBL0UsRUFBd0psQyxDQUFDLENBQUNtQyxrQkFBRixHQUF1QixZQUFXO0FBQUUsWUFBTSxLQUFLQyxVQUFYLEtBQTBCLFFBQVEsS0FBS0MsTUFBYixHQUFzQjFDLENBQUMsQ0FBQyxLQUFLMkMsWUFBTixDQUF2QixHQUE2QzFDLENBQUMsSUFBSUEsQ0FBQyxDQUFDLEtBQUswQyxZQUFOLENBQTdFO0FBQW1HLEtBQS9SLEVBQWlTdEMsQ0FBQyxDQUFDdUMsSUFBRixDQUFPdEMsQ0FBUCxDQUFqUztBQUNILEdBeEJMO0FBQUEsTUF5Qkl1QyxDQUFDLEdBQUcsU0FBSkEsQ0FBSSxDQUFTOUUsQ0FBVCxFQUFZQyxDQUFaLEVBQWU7QUFBRSxTQUFLOEUsT0FBTCxHQUFlOUUsQ0FBQyxJQUFJLEVBQXBCLEVBQXdCLEtBQUsrRSxLQUFMLEdBQWEsS0FBS0QsT0FBTCxDQUFhQyxLQUFiLElBQXNCLEVBQTNELEVBQStELEtBQUtDLFFBQUwsR0FBZ0IsS0FBS0YsT0FBTCxDQUFhRSxRQUFiLElBQXlCLEtBQUssQ0FBN0csRUFBZ0gsS0FBS0MsVUFBTCxHQUFrQixLQUFLSCxPQUFMLENBQWFHLFVBQWIsSUFBMkIsU0FBN0osRUFBd0ssS0FBS0MsTUFBTCxHQUFjLEVBQXRMLEVBQTBMLEtBQUtDLFFBQUwsR0FBZ0IsRUFBMU0sRUFBOE0sS0FBS0MsT0FBTCxHQUFlLEtBQUtOLE9BQUwsQ0FBYU0sT0FBYixJQUF3QixFQUFyUCxFQUF5UCxLQUFLQyxrQkFBTCxHQUEwQixLQUFLRCxPQUFMLENBQWFFLFdBQWIsSUFBNEIsR0FBL1MsRUFBb1QsS0FBS0MsbUJBQUwsR0FBMkIsS0FBS0gsT0FBTCxDQUFhSSxZQUFiLElBQTZCLDRCQUE1VyxFQUEwWSxLQUFLQyxtQkFBTCxHQUEyQkMsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixLQUFLUCxPQUFMLENBQWFRLFlBQXZDLEVBQXFEN0UsTUFBckQsR0FBOEQyRSxRQUFRLENBQUNDLGdCQUFULENBQTBCLEtBQUtQLE9BQUwsQ0FBYVEsWUFBdkMsQ0FBOUQsR0FBcUhGLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0NBQTFCLENBQTFoQixFQUF5bEIsS0FBS0UsZ0JBQUwsR0FBd0IsS0FBS0MsWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBam5CLEVBQStvQixLQUFLQyxhQUFMLEdBQXFCLEtBQUtsQixPQUFMLENBQWFrQixhQUFiLElBQThCLEtBQUssQ0FBdnNCLEVBQTBzQixLQUFLQyxtQkFBTCxHQUEyQixLQUFLbkIsT0FBTCxDQUFhbUIsbUJBQWIsSUFBb0MsS0FBSyxDQUE5d0IsRUFBaXhCLEtBQUtDLGNBQUwsR0FBc0IsRUFBdnlCLEVBQTJ5QixLQUFLQyxtQkFBTCxHQUEyQixDQUFDLENBQXYwQixFQUEwMEIsS0FBS0MsZUFBTCxHQUF1QixLQUFLdEIsT0FBTCxDQUFhc0IsZUFBYixJQUFnQyxDQUFDLENBQWw0QixFQUFxNEIsS0FBS0MsTUFBTCxHQUFjO0FBQUVDLE1BQUFBLEtBQUssRUFBRSx3SkFBVDtBQUFtS0MsTUFBQUEsR0FBRyxFQUFFLGtCQUF4SztBQUE0TEMsTUFBQUEsS0FBSyxFQUFFLHdGQUFuTTtBQUE2UkMsTUFBQUEsUUFBUSxFQUFFLHVEQUF2UztBQUFnV0MsTUFBQUEsWUFBWSxFQUFFO0FBQTlXLEtBQW41QixFQUFnekMsS0FBS0Msb0JBQUwsR0FBNEIsT0FBNTBDLEVBQXExQyxLQUFLQyxLQUFMLEdBQWE7QUFBRUMsTUFBQUEsYUFBYSxFQUFFO0FBQWpCLEtBQWwyQyxFQUEyM0MsS0FBS0MsT0FBTCxDQUFhcEIsUUFBUSxDQUFDcUIsYUFBVCxDQUF1QmhILENBQXZCLENBQWIsQ0FBMzNDO0FBQW82QyxHQXpCNzdDOztBQTBCQThFLEVBQUFBLENBQUMsQ0FBQ2pFLFNBQUYsR0FBYztBQUNWb0csSUFBQUEsWUFBWSxFQUFFO0FBQUVWLE1BQUFBLEtBQUssRUFBRTtBQUFFVyxRQUFBQSxRQUFRLEVBQUUsQ0FBQyxDQUFiO0FBQWdCWCxRQUFBQSxLQUFLLEVBQUUsQ0FBQztBQUF4QixPQUFUO0FBQXNDNUMsTUFBQUEsSUFBSSxFQUFFO0FBQUV1RCxRQUFBQSxRQUFRLEVBQUUsQ0FBQyxDQUFiO0FBQWdCQyxRQUFBQSxTQUFTLEVBQUUsQ0FBM0I7QUFBOEJDLFFBQUFBLFNBQVMsRUFBRTtBQUF6QyxPQUE1QztBQUEyRkMsTUFBQUEsSUFBSSxFQUFFO0FBQUVILFFBQUFBLFFBQVEsRUFBRSxDQUFDLENBQWI7QUFBZ0JFLFFBQUFBLFNBQVMsRUFBRSxHQUEzQjtBQUFnQ0QsUUFBQUEsU0FBUyxFQUFFO0FBQTNDLE9BQWpHO0FBQWlKVCxNQUFBQSxRQUFRLEVBQUU7QUFBRVEsUUFBQUEsUUFBUSxFQUFFLENBQUMsQ0FBYjtBQUFnQlIsUUFBQUEsUUFBUSxFQUFFLENBQUMsQ0FBM0I7QUFBOEJTLFFBQUFBLFNBQVMsRUFBRSxDQUF6QztBQUE0Q0MsUUFBQUEsU0FBUyxFQUFFO0FBQXZELE9BQTNKO0FBQXVOWixNQUFBQSxHQUFHLEVBQUU7QUFBRVUsUUFBQUEsUUFBUSxFQUFFLENBQUMsQ0FBYjtBQUFnQlYsUUFBQUEsR0FBRyxFQUFFLENBQUM7QUFBdEIsT0FBNU47QUFBdVBDLE1BQUFBLEtBQUssRUFBRTtBQUFFQSxRQUFBQSxLQUFLLEVBQUUsQ0FBQztBQUFWO0FBQTlQLEtBREo7QUFFVmEsSUFBQUEsZUFBZSxFQUFFO0FBQUVKLE1BQUFBLFFBQVEsRUFBRSx1QkFBWjtBQUFxQ1gsTUFBQUEsS0FBSyxFQUFFLDRCQUE1QztBQUEwRWEsTUFBQUEsU0FBUyxFQUFFLHVEQUFyRjtBQUE4SUQsTUFBQUEsU0FBUyxFQUFFLHVEQUF6SjtBQUFrTlQsTUFBQUEsUUFBUSxFQUFFLHVCQUE1TjtBQUFxUGEsTUFBQUEsTUFBTSxFQUFFLHNCQUE3UDtBQUFxUkMsTUFBQUEsUUFBUSxFQUFFLDJGQUEvUjtBQUE0WCxrQkFBWTtBQUF4WSxLQUZQO0FBR1Z6QixJQUFBQSxZQUFZLEVBQUUsc0JBQVMvRixDQUFULEVBQVk7QUFDdEIsVUFBSUMsQ0FBQyxHQUFHRCxDQUFDLENBQUN5SCxNQUFWO0FBQUEsVUFDSXZILENBQUMsR0FBRztBQUFFeUQsUUFBQUEsSUFBSSxFQUFFMUQsQ0FBQyxDQUFDeUgsWUFBRixDQUFlLHFCQUFmLENBQVI7QUFBK0NySCxRQUFBQSxLQUFLLEVBQUVKLENBQUMsQ0FBQ0k7QUFBeEQsT0FEUjtBQUVBLGFBQU8sS0FBSzhFLE1BQUwsQ0FBWWpGLENBQUMsQ0FBQ3lELElBQWQsQ0FBUCxFQUE0QixLQUFLZ0UsWUFBTCxDQUFrQjtBQUFFaEUsUUFBQUEsSUFBSSxFQUFFekQsQ0FBQyxDQUFDeUQsSUFBVjtBQUFnQnRELFFBQUFBLEtBQUssRUFBRUgsQ0FBQyxDQUFDRyxLQUF6QjtBQUFnQ3VILFFBQUFBLEtBQUssRUFBRSxFQUF2QztBQUEyQ0MsUUFBQUEsYUFBYSxFQUFFLENBQUM7QUFBM0QsT0FBbEIsQ0FBNUIsRUFBK0csS0FBS0MsWUFBTCxFQUEvRztBQUNILEtBUFM7QUFRVkMsSUFBQUEsbUJBQW1CLEVBQUUsNkJBQVMvSCxDQUFULEVBQVlDLENBQVosRUFBZUMsQ0FBZixFQUFrQmUsQ0FBbEIsRUFBcUI7QUFDdEMsY0FBUSxZQUFZaEIsQ0FBWixLQUFrQkMsQ0FBQyxHQUFHLEtBQUs0RixnQkFBM0IsR0FBOEM3RSxDQUF0RDtBQUNJLGFBQUssS0FBTDtBQUNJakIsVUFBQUEsQ0FBQyxDQUFDZ0ksZ0JBQUYsQ0FBbUIvSCxDQUFuQixFQUFzQkMsQ0FBdEI7QUFDQTs7QUFDSixhQUFLLFFBQUw7QUFDSUYsVUFBQUEsQ0FBQyxDQUFDaUksbUJBQUYsQ0FBc0JoSSxDQUF0QixFQUF5QkMsQ0FBekI7QUFMUjtBQU9ILEtBaEJTO0FBaUJWZ0ksSUFBQUEsb0JBQW9CLEVBQUUsZ0NBQVc7QUFDN0IsV0FBSyxJQUFJbEksQ0FBQyxHQUFHLEtBQUttSSxLQUFMLENBQVd2QyxnQkFBWCxDQUE0QixHQUE1QixDQUFSLEVBQTBDM0YsQ0FBQyxHQUFHLEtBQUssQ0FBbkQsRUFBc0RDLENBQUMsR0FBRyxFQUExRCxFQUE4RGUsQ0FBQyxHQUFHLENBQWxFLEVBQXFFVyxDQUFDLEdBQUc1QixDQUFDLENBQUNnQixNQUFoRixFQUF3RkMsQ0FBQyxHQUFHVyxDQUE1RixFQUErRixFQUFFWCxDQUFqRztBQUNJLFlBQUloQixDQUFDLEdBQUdELENBQUMsQ0FBQ2lCLENBQUQsQ0FBRCxDQUFLeUcsWUFBTCxDQUFrQixNQUFsQixDQUFSLEVBQW1DO0FBQy9CLGNBQUksZUFBZTFILENBQUMsQ0FBQ2lCLENBQUQsQ0FBRCxDQUFLbUgsSUFBeEIsRUFBOEI7QUFBRWxJLFlBQUFBLENBQUMsQ0FBQ0QsQ0FBRCxDQUFELEdBQU9ELENBQUMsQ0FBQ2lCLENBQUQsQ0FBRCxDQUFLb0gsT0FBWjtBQUFxQjtBQUFVOztBQUMvRG5JLFVBQUFBLENBQUMsQ0FBQ0QsQ0FBRCxDQUFELEdBQU9ELENBQUMsQ0FBQ2lCLENBQUQsQ0FBRCxDQUFLWixLQUFaO0FBQ0g7QUFKTDs7QUFLQSxhQUFPSCxDQUFQO0FBQ0gsS0F4QlM7QUF5QlZvSSxJQUFBQSxnQkFBZ0IsRUFBRSw0QkFBVztBQUN6QixXQUFLcEMsbUJBQUwsSUFBNEIsS0FBS0EsbUJBQUwsQ0FBeUIsS0FBS2YsTUFBOUIsQ0FBNUI7QUFDQSxVQUFJbkYsQ0FBQyxHQUFHMkYsUUFBUSxDQUFDcUIsYUFBVCxDQUF1QiwwQkFBdkIsQ0FBUjtBQUNBLFdBQUtYLGVBQUwsSUFBd0JyRyxDQUF4QixJQUE2QkEsQ0FBQyxDQUFDdUksS0FBL0IsSUFBd0N2SSxDQUFDLENBQUN1SSxLQUFGLEVBQXhDO0FBQ0gsS0E3QlM7QUE4QlZDLElBQUFBLGlCQUFpQixFQUFFLDZCQUFXO0FBQzFCLFVBQUksTUFBTXJJLE1BQU0sQ0FBQzBELElBQVAsQ0FBWSxLQUFLc0IsTUFBakIsRUFBeUJuRSxNQUFuQyxFQUEyQztBQUN2QyxZQUFJLEtBQUtvRixtQkFBTCxHQUEyQixDQUFDLENBQTVCLEVBQStCLEtBQUtILGFBQXhDLEVBQXVEO0FBQUUsY0FBSWpHLENBQUMsR0FBRyxLQUFLa0ksb0JBQUwsRUFBUjtBQUFxQyxpQkFBTyxLQUFLLEtBQUtqQyxhQUFMLENBQW1CLEtBQUtrQyxLQUF4QixFQUErQm5JLENBQS9CLEVBQWtDOEQsQ0FBbEMsQ0FBWjtBQUFrRDs7QUFDaEosYUFBS3FFLEtBQUwsQ0FBV00sTUFBWDtBQUNIO0FBQ0osS0FuQ1M7QUFvQ1YxQixJQUFBQSxPQUFPLEVBQUUsaUJBQVMvRyxDQUFULEVBQVk7QUFDakIsVUFBSUMsQ0FBQyxHQUFHLElBQVI7QUFDQSxXQUFLa0ksS0FBTCxHQUFhbkksQ0FBYixFQUFnQixLQUFLbUksS0FBTCxDQUFXTyxZQUFYLENBQXdCLFlBQXhCLEVBQXNDLFlBQXRDLENBQWhCLEVBQXFFLEtBQUtQLEtBQUwsQ0FBV0gsZ0JBQVgsQ0FBNEIsUUFBNUIsRUFBc0MsVUFBU2hJLENBQVQsRUFBWTtBQUFFLGVBQU9BLENBQUMsQ0FBQzJJLGNBQUYsSUFBb0IxSSxDQUFDLENBQUNrRixNQUFGLEdBQVcsRUFBL0IsRUFBbUNsRixDQUFDLENBQUMySSxXQUFGLEVBQW5DLEVBQW9EM0ksQ0FBQyxDQUFDa0csY0FBRixDQUFpQm5GLE1BQWpCLEdBQTBCLEtBQUtzQyxPQUFPLENBQUNiLEdBQVIsQ0FBWXhDLENBQUMsQ0FBQ2tHLGNBQWQsRUFBOEIvRCxJQUE5QixDQUFtQyxZQUFXO0FBQUVuQyxVQUFBQSxDQUFDLENBQUNrRyxjQUFGLEdBQW1CLEVBQW5CLEVBQXVCbEcsQ0FBQyxDQUFDbUcsbUJBQUYsR0FBd0JuRyxDQUFDLENBQUN1SSxpQkFBRixFQUF4QixHQUFnRHZJLENBQUMsQ0FBQ3FJLGdCQUFGLEVBQXZFO0FBQTZGLFNBQTdJLENBQS9CLEdBQWdMLE1BQUtySSxDQUFDLENBQUNtRyxtQkFBRixHQUF3Qm5HLENBQUMsQ0FBQ3VJLGlCQUFGLEVBQXhCLEdBQWdEdkksQ0FBQyxDQUFDcUksZ0JBQUYsRUFBckQsQ0FBM087QUFBdVQsT0FBM1csQ0FBckU7QUFDSCxLQXZDUztBQXdDVk8sSUFBQUEsT0FBTyxFQUFFLGlCQUFTN0ksQ0FBVCxFQUFZO0FBQUUsYUFBTyxLQUFLc0csTUFBTCxDQUFZQyxLQUFaLENBQWtCdUMsSUFBbEIsQ0FBdUI5SSxDQUF2QixDQUFQO0FBQWtDLEtBeEMvQztBQXlDVitJLElBQUFBLEtBQUssRUFBRSxlQUFTL0ksQ0FBVCxFQUFZO0FBQUUsYUFBTyxLQUFLc0csTUFBTCxDQUFZRSxHQUFaLENBQWdCc0MsSUFBaEIsQ0FBcUI5SSxDQUFyQixDQUFQO0FBQWdDLEtBekMzQztBQTBDVmdKLElBQUFBLE9BQU8sRUFBRSxpQkFBU2hKLENBQVQsRUFBWTtBQUFFLGFBQU8sS0FBS3NHLE1BQUwsQ0FBWUcsS0FBWixDQUFrQnFDLElBQWxCLENBQXVCOUksQ0FBdkIsQ0FBUDtBQUFrQyxLQTFDL0M7QUEyQ1ZpSixJQUFBQSxVQUFVLEVBQUUsb0JBQVNqSixDQUFULEVBQVk7QUFBRSxhQUFPLEtBQUtzRyxNQUFMLENBQVlJLFFBQVosQ0FBcUJvQyxJQUFyQixDQUEwQjlJLENBQTFCLENBQVA7QUFBcUMsS0EzQ3JEO0FBNENWa0osSUFBQUEsT0FBTyxFQUFFLGlCQUFTbEosQ0FBVCxFQUFZO0FBQUUsVUFBSUMsQ0FBQyxHQUFHRCxDQUFSO0FBQVcsYUFBT0EsQ0FBQyxDQUFDbUosSUFBRixLQUFXbEosQ0FBQyxHQUFHRCxDQUFDLENBQUNtSixJQUFGLEVBQWYsR0FBMEIsQ0FBQ2xKLENBQWxDO0FBQXFDLEtBNUM3RDtBQTZDVm1KLElBQUFBLGNBQWMsRUFBRSx3QkFBU3BKLENBQVQsRUFBWUMsQ0FBWixFQUFlO0FBQUUsYUFBT0QsQ0FBQyxDQUFDZ0IsTUFBRixJQUFZZixDQUFuQjtBQUFzQixLQTdDN0M7QUE4Q1ZvSixJQUFBQSxjQUFjLEVBQUUsd0JBQVNySixDQUFULEVBQVlDLENBQVosRUFBZTtBQUFFLGFBQU9ELENBQUMsQ0FBQ2dCLE1BQUYsSUFBWWYsQ0FBbkI7QUFBc0IsS0E5QzdDO0FBK0NWcUosSUFBQUEsaUJBQWlCLEVBQUUsMkJBQVN0SixDQUFULEVBQVk7QUFBRSxhQUFPLEtBQUtzRyxNQUFMLENBQVlLLFlBQVosQ0FBeUJtQyxJQUF6QixDQUE4QjlJLENBQTlCLENBQVA7QUFBeUMsS0EvQ2hFO0FBZ0RWNEksSUFBQUEsV0FBVyxFQUFFLHVCQUFXO0FBQ3BCLFVBQUk1SSxDQUFDLEdBQUcsSUFBUjtBQUFBLFVBQ0lDLENBQUMsR0FBRyxLQUFLa0ksS0FBTCxDQUFXdkMsZ0JBQVgsQ0FBNEIsdUJBQTVCLENBRFI7QUFFQSxXQUFLUixRQUFMLEdBQWdCLEVBQWhCOztBQUNBLFdBQUssSUFBSWxGLENBQUMsR0FBRyxXQUFTQSxFQUFULEVBQVllLENBQVosRUFBZTtBQUNwQixZQUFJVyxDQUFDLEdBQUczQixDQUFDLENBQUNDLEVBQUQsQ0FBVDtBQUFBLFlBQ0krQixDQUFDLEdBQUdMLENBQUMsQ0FBQzhGLFlBQUYsQ0FBZSxxQkFBZixDQURSO0FBQUEsWUFFSXhGLENBQUMsR0FBR04sQ0FBQyxDQUFDdkIsS0FGVjtBQUFBLFlBR0lULENBQUMsR0FBRyxDQUFDLENBSFQ7QUFBQSxZQUlJMEMsQ0FBQyxHQUFHLEVBSlI7O0FBS0EsWUFBSSxlQUFlVixDQUFDLENBQUN3RyxJQUFqQixLQUEwQmxHLENBQUMsR0FBR04sQ0FBQyxDQUFDeUcsT0FBRixJQUFhLEVBQWpCLEVBQXFCekcsQ0FBQyxDQUFDb0csZ0JBQUYsQ0FBbUIsUUFBbkIsRUFBNkIsVUFBUy9ILENBQVQsRUFBWTtBQUNwRixjQUFJQyxDQUFDLEdBQUdELENBQUMsQ0FBQ3dILE1BQVY7QUFBQSxjQUNJeEcsQ0FBQyxHQUFHO0FBQUUwQyxZQUFBQSxJQUFJLEVBQUV6RCxDQUFDLENBQUN3SCxZQUFGLENBQWUscUJBQWYsQ0FBUjtBQUErQ3JILFlBQUFBLEtBQUssRUFBRUgsQ0FBQyxDQUFDbUk7QUFBeEQsV0FEUjtBQUVBLGlCQUFPckksQ0FBQyxDQUFDbUYsTUFBRixDQUFTbEUsQ0FBQyxDQUFDMEMsSUFBWCxDQUFQLEVBQXlCM0QsQ0FBQyxDQUFDMkgsWUFBRixDQUFlO0FBQUVoRSxZQUFBQSxJQUFJLEVBQUUxQyxDQUFDLENBQUMwQyxJQUFWO0FBQWdCdEQsWUFBQUEsS0FBSyxFQUFFWSxDQUFDLENBQUNaLEtBQXpCO0FBQWdDdUgsWUFBQUEsS0FBSyxFQUFFO0FBQXZDLFdBQWYsQ0FBekIsRUFBc0Y1SCxDQUFDLENBQUM4SCxZQUFGLEVBQXRGO0FBQ0gsU0FKOEMsQ0FBL0MsR0FJSyxZQUFZbEcsQ0FBQyxDQUFDd0csSUFKdkIsRUFJNkI7QUFDekIsY0FBSXpHLENBQUMsR0FBRzNCLENBQUMsQ0FBQ29GLFFBQUYsQ0FBV21FLE1BQVgsQ0FBa0IsVUFBU3ZKLENBQVQsRUFBWTtBQUFFLGdCQUFJQSxDQUFDLENBQUMyRCxJQUFGLEtBQVcxQixDQUFmLEVBQWtCLE9BQU9qQyxDQUFQO0FBQVUsV0FBNUQsRUFBOEQsQ0FBOUQsQ0FBUjtBQUNBMkIsVUFBQUEsQ0FBQyxJQUFJQSxDQUFDLENBQUNpRyxLQUFGLENBQVEvRixJQUFSLENBQWFELENBQUMsQ0FBQ3lHLE9BQWYsR0FBeUJ6SSxDQUFDLEdBQUcsQ0FBQyxDQUFsQyxJQUF1QzBDLENBQUMsQ0FBQ1QsSUFBRixDQUFPRCxDQUFDLENBQUN5RyxPQUFULENBQXhDLEVBQTJEekcsQ0FBQyxDQUFDb0csZ0JBQUYsQ0FBbUIsUUFBbkIsRUFBNkIsVUFBUy9ILENBQVQsRUFBWTtBQUNoRyxnQkFBSUMsQ0FBQyxHQUFHRCxDQUFDLENBQUN3SCxNQUFWO0FBQUEsZ0JBQ0l4RyxDQUFDLEdBQUc7QUFBRTBDLGNBQUFBLElBQUksRUFBRXpELENBQUMsQ0FBQ3dILFlBQUYsQ0FBZSxxQkFBZixDQUFSO0FBQStDckgsY0FBQUEsS0FBSyxFQUFFSCxDQUFDLENBQUNtSTtBQUF4RCxhQURSO0FBRUEsbUJBQU9ySSxDQUFDLENBQUNtRixNQUFGLENBQVNsRSxDQUFDLENBQUMwQyxJQUFYLENBQVAsRUFBeUIzRCxDQUFDLENBQUMySCxZQUFGLENBQWU7QUFBRWhFLGNBQUFBLElBQUksRUFBRTFDLENBQUMsQ0FBQzBDLElBQVY7QUFBZ0J0RCxjQUFBQSxLQUFLLEVBQUVZLENBQUMsQ0FBQ1osS0FBekI7QUFBZ0N1SCxjQUFBQSxLQUFLLEVBQUU7QUFBdkMsYUFBZixDQUF6QixFQUFzRjVILENBQUMsQ0FBQzhILFlBQUYsRUFBdEY7QUFDSCxXQUowRCxDQUEzRDtBQUtIOztBQUNEOUgsUUFBQUEsQ0FBQyxDQUFDK0gsbUJBQUYsQ0FBc0JuRyxDQUF0QixFQUF5QixPQUF6QixFQUFrQzVCLENBQUMsQ0FBQytGLFlBQXBDLEVBQWtELEtBQWxELEdBQTBEbkcsQ0FBQyxJQUFJSSxDQUFDLENBQUNvRixRQUFGLENBQVd2RCxJQUFYLENBQWdCO0FBQUU4QixVQUFBQSxJQUFJLEVBQUUxQixDQUFSO0FBQVc1QixVQUFBQSxLQUFLLEVBQUU2QixDQUFsQjtBQUFxQjBGLFVBQUFBLEtBQUssRUFBRXRGO0FBQTVCLFNBQWhCLENBQS9EO0FBQ0gsT0FuQkEsRUFtQkVyQixDQUFDLEdBQUcsQ0FuQk4sRUFtQlNXLENBQUMsR0FBRzNCLENBQUMsQ0FBQ2UsTUFuQnBCLEVBbUI0QkMsQ0FBQyxHQUFHVyxDQW5CaEMsRUFtQm1DLEVBQUVYLENBbkJyQztBQW1Cd0NmLFFBQUFBLENBQUMsQ0FBQ2UsQ0FBRCxFQUFJVyxDQUFKLENBQUQ7QUFuQnhDOztBQW9CQSxXQUFLNEgsZ0JBQUw7QUFDSCxLQXpFUztBQTBFVkMsSUFBQUEsZ0JBQWdCLEVBQUUsMEJBQVN6SixDQUFULEVBQVk7QUFBRSxhQUFPLENBQUMsS0FBS2tKLE9BQUwsQ0FBYWxKLENBQWIsQ0FBUjtBQUF5QixLQTFFL0M7QUEyRVYwSixJQUFBQSxhQUFhLEVBQUUsdUJBQVMxSixDQUFULEVBQVk7QUFBRSxhQUFPLEtBQUs2SSxPQUFMLENBQWE3SSxDQUFiLENBQVA7QUFBd0IsS0EzRTNDO0FBNEVWMkosSUFBQUEsYUFBYSxFQUFFLHVCQUFTM0osQ0FBVCxFQUFZO0FBQUUsYUFBTyxLQUFLZ0osT0FBTCxDQUFhaEosQ0FBYixDQUFQO0FBQXdCLEtBNUUzQztBQTZFVjRKLElBQUFBLGlCQUFpQixFQUFFLDJCQUFTNUosQ0FBVCxFQUFZQyxDQUFaLEVBQWU7QUFBRSxhQUFPLEtBQUtvSixjQUFMLENBQW9CckosQ0FBcEIsRUFBdUJDLENBQXZCLENBQVA7QUFBa0MsS0E3RTVEO0FBOEVWNEosSUFBQUEsaUJBQWlCLEVBQUUsMkJBQVM3SixDQUFULEVBQVlDLENBQVosRUFBZTtBQUFFLGFBQU8sS0FBS21KLGNBQUwsQ0FBb0JwSixDQUFwQixFQUF1QkMsQ0FBdkIsQ0FBUDtBQUFrQyxLQTlFNUQ7QUErRVY2SixJQUFBQSxvQkFBb0IsRUFBRSw4QkFBUzlKLENBQVQsRUFBWTtBQUFFLGFBQU8sS0FBS3NKLGlCQUFMLENBQXVCdEosQ0FBdkIsQ0FBUDtBQUFrQyxLQS9FNUQ7QUFnRlYrSixJQUFBQSxnQkFBZ0IsRUFBRSwwQkFBUy9KLENBQVQsRUFBWTtBQUFFLGFBQU8sS0FBS2lKLFVBQUwsQ0FBZ0JqSixDQUFoQixDQUFQO0FBQTJCLEtBaEZqRDtBQWlGVmdLLElBQUFBLFdBQVcsRUFBRSxxQkFBU2hLLENBQVQsRUFBWTtBQUFFLGFBQU8sS0FBSytJLEtBQUwsQ0FBVy9JLENBQVgsQ0FBUDtBQUFzQixLQWpGdkM7QUFrRlZpSyxJQUFBQSxjQUFjLEVBQUUsd0JBQVNqSyxDQUFULEVBQVk7QUFDeEIsVUFBSUMsQ0FBQyxHQUFHRCxDQUFDLENBQUNLLEtBQVY7QUFBQSxVQUNJSCxDQUFDLEdBQUdGLENBQUMsQ0FBQzJELElBRFY7QUFBQSxVQUVJMUMsQ0FBQyxHQUFHakIsQ0FBQyxDQUFDK0QsR0FGVjtBQUFBLFVBR0luQyxDQUFDLEdBQUc1QixDQUFDLENBQUNrSyxhQUhWO0FBQUEsVUFJSWpJLENBQUMsR0FBR2pDLENBQUMsQ0FBQ21LLFNBSlY7QUFBQSxVQUtJakksQ0FBQyxHQUFHbEMsQ0FBQyxDQUFDZ0UsTUFMVjtBQU1BLGFBQU8sSUFBSVYsT0FBSixDQUFZLFVBQVN0RCxDQUFULEVBQVk7QUFBRThELFFBQUFBLENBQUMsQ0FBQztBQUFFQyxVQUFBQSxHQUFHLEVBQUU5QyxDQUFQO0FBQVUrQyxVQUFBQSxNQUFNLEVBQUU5QixDQUFsQjtBQUFxQitCLFVBQUFBLElBQUksRUFBRWxFLGVBQWUsQ0FBQyxFQUFELEVBQUtrQyxDQUFMLEVBQVFoQyxDQUFSLENBQTFDO0FBQXNEb0UsVUFBQUEsS0FBSyxFQUFFLENBQUMsQ0FBOUQ7QUFBaUVGLFVBQUFBLFFBQVEsRUFBRSxrQkFBU2xFLENBQVQsRUFBWTtBQUFFQSxZQUFBQSxDQUFDLENBQUN1RCxXQUFGLE9BQW9CNUIsQ0FBQyxDQUFDNEIsV0FBRixFQUFwQixJQUF1Q3hELENBQUMsQ0FBQyxJQUFELENBQXhDLEVBQWdEQSxDQUFDLENBQUM7QUFBRW9JLGNBQUFBLElBQUksRUFBRSxXQUFSO0FBQXFCekUsY0FBQUEsSUFBSSxFQUFFekQ7QUFBM0IsYUFBRCxDQUFqRDtBQUFtRixXQUE1SztBQUE4S2tFLFVBQUFBLEtBQUssRUFBRSxpQkFBVztBQUFFcEUsWUFBQUEsQ0FBQyxDQUFDO0FBQUVvSSxjQUFBQSxJQUFJLEVBQUUsT0FBUjtBQUFpQnpFLGNBQUFBLElBQUksRUFBRXpEO0FBQXZCLGFBQUQsQ0FBRDtBQUErQjtBQUFqTyxTQUFELENBQUQ7QUFBd08sT0FBbFEsQ0FBUDtBQUNILEtBMUZTO0FBMkZWa0ssSUFBQUEsZUFBZSxFQUFFLHlCQUFTcEssQ0FBVCxFQUFZQyxDQUFaLEVBQWVDLENBQWYsRUFBa0I7QUFDL0IsVUFBSWUsQ0FBQyxHQUFHLEtBQUtnRSxRQUFMLElBQWlCLEtBQUtxQyxlQUE5QjtBQUFBLFVBQ0kxRixDQUFDLEdBQUdYLENBQUMsQ0FBQ2hCLENBQUQsQ0FBRCxJQUFRZ0IsQ0FBQyxDQUFDaEIsQ0FBRCxDQUFELENBQUtELENBQUwsQ0FBUixJQUFtQixLQUFLaUYsUUFBTCxJQUFpQixZQUFZLE9BQU8sS0FBS0EsUUFBTCxDQUFjaEYsQ0FBZCxDQUFwQyxJQUF3RGdCLENBQUMsQ0FBQ2hCLENBQUQsQ0FBNUUsSUFBbUYsS0FBS3FILGVBQUwsQ0FBcUJ0SCxDQUFyQixDQUFuRixJQUE4RyxLQUFLNEcsb0JBRDNIO0FBRUExRyxNQUFBQSxDQUFDLEtBQUswQixDQUFDLEdBQUdBLENBQUMsQ0FBQ3lJLE9BQUYsQ0FBVSxRQUFWLEVBQW9CbkssQ0FBQyxDQUFDb0ssUUFBRixFQUFwQixDQUFULENBQUQsRUFBOEMsS0FBS25GLE1BQUwsQ0FBWWxGLENBQVosSUFBaUI7QUFBRXNLLFFBQUFBLE9BQU8sRUFBRTNJO0FBQVgsT0FBL0Q7QUFDSCxLQS9GUztBQWdHVjRILElBQUFBLGdCQUFnQixFQUFFLDRCQUFXO0FBQUUsVUFBSXhKLENBQUMsR0FBRyxJQUFSO0FBQWMsYUFBTyxLQUFLd0ssUUFBTCxJQUFpQixLQUFLcEYsUUFBTCxDQUFjcUYsT0FBZCxDQUFzQixVQUFTeEssQ0FBVCxFQUFZO0FBQUVELFFBQUFBLENBQUMsQ0FBQzJILFlBQUYsQ0FBZTtBQUFFaEUsVUFBQUEsSUFBSSxFQUFFMUQsQ0FBQyxDQUFDMEQsSUFBVjtBQUFnQnRELFVBQUFBLEtBQUssRUFBRUosQ0FBQyxDQUFDSSxLQUF6QjtBQUFnQ3VILFVBQUFBLEtBQUssRUFBRTNILENBQUMsQ0FBQzJIO0FBQXpDLFNBQWY7QUFBa0UsT0FBdEcsQ0FBakIsRUFBMEgsS0FBS3pCLGNBQUwsQ0FBb0JuRixNQUFwQixHQUE2QixLQUFLc0MsT0FBTyxDQUFDYixHQUFSLENBQVksS0FBSzBELGNBQWpCLEVBQWlDL0QsSUFBakMsQ0FBc0MsVUFBU25DLENBQVQsRUFBWTtBQUFFQSxRQUFBQSxDQUFDLENBQUN3SyxPQUFGLENBQVUsVUFBU3hLLENBQVQsRUFBWTtBQUFFLGlCQUFPLFNBQVNBLENBQVQsR0FBYSxLQUFLRCxDQUFDLENBQUM4SCxZQUFGLEVBQWxCLElBQXNDLFlBQVk3SCxDQUFDLENBQUNtSSxJQUFkLElBQXNCc0MsS0FBSyxDQUFDLHlDQUFELENBQTNCLEVBQXdFMUssQ0FBQyxDQUFDb0ssZUFBRixDQUFrQjlILENBQWxCLEVBQXFCckMsQ0FBQyxDQUFDMEQsSUFBdkIsQ0FBeEUsRUFBc0csS0FBSzNELENBQUMsQ0FBQzhILFlBQUYsRUFBakosQ0FBUDtBQUEySyxTQUFuTTtBQUFzTSxPQUExUCxDQUFsQyxHQUFnUyxLQUFLLEtBQUtBLFlBQUwsRUFBdGE7QUFBMmIsS0FoRzlkO0FBaUdWSCxJQUFBQSxZQUFZLEVBQUUsc0JBQVMzSCxDQUFULEVBQVk7QUFDdEIsVUFBSXVELENBQUMsR0FBRyxJQUFSO0FBQUEsVUFDSU8sQ0FBQyxHQUFHOUQsQ0FBQyxDQUFDMkQsSUFEVjtBQUFBLFVBRUltQixDQUFDLEdBQUc5RSxDQUFDLENBQUM0SCxLQUZWO0FBQUEsVUFHSStDLENBQUMsR0FBRzNLLENBQUMsQ0FBQ0ssS0FIVjtBQUFBLFVBSUl1SyxDQUFDLEdBQUc1SyxDQUFDLENBQUM2SCxhQUpWO0FBQUEsVUFLSWdELENBQUMsR0FBRyxLQUFLN0YsS0FBTCxDQUFXbEIsQ0FBWCxLQUFpQixLQUFLbUQsWUFBTCxDQUFrQm5ELENBQWxCLENBQWpCLElBQXlDLENBQUMsQ0FMbEQ7QUFNQSxVQUFJK0csQ0FBSixFQUNJLEtBQUssSUFBSUMsQ0FBVCxJQUFjRCxDQUFkLEVBQWlCO0FBQ2IsWUFBSUUsQ0FBQyxHQUFHRixDQUFDLENBQUNDLENBQUQsQ0FBVDtBQUNBLFlBQUlBLENBQUMsS0FBSzdLLENBQU4sSUFBVzZLLENBQUMsS0FBS3ZJLENBQWpCLElBQXNCLE1BQU1vSSxDQUFoQyxFQUFtQzs7QUFDbkMsZ0JBQVFHLENBQVI7QUFDSSxlQUFLdkksQ0FBTDtBQUNJLGdCQUFJLGNBQWMsT0FBT3dJLENBQXpCLEVBQTRCO0FBQzVCLGdCQUFJQSxDQUFDLENBQUNqSCxDQUFELEVBQUk2RyxDQUFKLENBQUwsRUFBYTtBQUNiLG1CQUFPLEtBQUssS0FBS1AsZUFBTCxDQUFxQjdILENBQXJCLEVBQXdCdUIsQ0FBeEIsRUFBMkJpSCxDQUEzQixDQUFaOztBQUNKLGVBQUs5SyxDQUFMO0FBQ0ksZ0JBQUksQ0FBQzhLLENBQUwsRUFBUTs7QUFDUixnQkFBSWpHLENBQUMsQ0FBQzlELE1BQU4sRUFBYztBQUFFLGtCQUFJZ0ssQ0FBQyxHQUFHLENBQUMsQ0FBVDtBQUFZLGtCQUFJbEcsQ0FBQyxDQUFDMkYsT0FBRixDQUFVLFVBQVN6SyxDQUFULEVBQVk7QUFBRXVELGdCQUFBQSxDQUFDLENBQUNrRyxnQkFBRixDQUFtQnpKLENBQW5CLE1BQTBCZ0wsQ0FBQyxHQUFHLENBQUMsQ0FBL0I7QUFBbUMsZUFBM0QsR0FBOERBLENBQWxFLEVBQXFFO0FBQU8sYUFBeEcsTUFBOEcsSUFBSSxLQUFLdkIsZ0JBQUwsQ0FBc0JrQixDQUF0QixDQUFKLEVBQThCOztBQUM1SSxtQkFBTyxLQUFLLEtBQUtQLGVBQUwsQ0FBcUJuSyxDQUFyQixFQUF3QjZELENBQXhCLENBQVo7O0FBQ0osZUFBSzVELENBQUw7QUFDSSxnQkFBSSxDQUFDNkssQ0FBTCxFQUFRO0FBQ1IsZ0JBQUksS0FBS3JCLGFBQUwsQ0FBbUJpQixDQUFuQixDQUFKLEVBQTJCO0FBQzNCLG1CQUFPLEtBQUssS0FBS1AsZUFBTCxDQUFxQmxLLENBQXJCLEVBQXdCNEQsQ0FBeEIsQ0FBWjs7QUFDSixlQUFLN0MsQ0FBTDtBQUNJLGdCQUFJLENBQUM4SixDQUFMLEVBQVE7QUFDUixnQkFBSSxLQUFLbkIsaUJBQUwsQ0FBdUJlLENBQXZCLEVBQTBCSSxDQUExQixDQUFKLEVBQWtDO0FBQ2xDLG1CQUFPLEtBQUssS0FBS1gsZUFBTCxDQUFxQm5KLENBQXJCLEVBQXdCNkMsQ0FBeEIsRUFBMkJpSCxDQUEzQixDQUFaOztBQUNKLGVBQUtuSixDQUFMO0FBQ0ksZ0JBQUksQ0FBQ21KLENBQUwsRUFBUTtBQUNSLGdCQUFJLEtBQUtsQixpQkFBTCxDQUF1QmMsQ0FBdkIsRUFBMEJJLENBQTFCLENBQUosRUFBa0M7QUFDbEMsbUJBQU8sS0FBSyxLQUFLWCxlQUFMLENBQXFCeEksQ0FBckIsRUFBd0JrQyxDQUF4QixFQUEyQmlILENBQTNCLENBQVo7O0FBQ0osZUFBS25MLENBQUw7QUFDSSxnQkFBSSxDQUFDbUwsQ0FBTCxFQUFRO0FBQ1IsZ0JBQUksS0FBS3BCLGFBQUwsQ0FBbUJnQixDQUFuQixDQUFKLEVBQTJCO0FBQzNCLG1CQUFPLEtBQUssS0FBS1AsZUFBTCxDQUFxQnhLLENBQXJCLEVBQXdCa0UsQ0FBeEIsQ0FBWjs7QUFDSixlQUFLN0IsQ0FBTDtBQUNJLGdCQUFJLENBQUM4SSxDQUFMLEVBQVE7QUFDUixnQkFBSSxLQUFLaEIsZ0JBQUwsQ0FBc0JZLENBQXRCLENBQUosRUFBOEI7QUFDOUIsbUJBQU8sS0FBSyxLQUFLUCxlQUFMLENBQXFCbkksQ0FBckIsRUFBd0I2QixDQUF4QixDQUFaOztBQUNKLGVBQUtuQyxDQUFMO0FBQ0ksZ0JBQUksQ0FBQ29KLENBQUQsSUFBTSxjQUFjLGVBQWUsT0FBT0EsQ0FBdEIsR0FBMEIsV0FBMUIsR0FBd0N0SyxPQUFPLENBQUNzSyxDQUFELENBQTdELENBQVYsRUFBNkU7QUFDN0UsZ0JBQUlBLENBQUMsQ0FBQyxTQUFELENBQUQsSUFBZ0IsS0FBS2pCLG9CQUFMLENBQTBCYSxDQUExQixDQUFwQixFQUFrRDs7QUFDbEQsZ0JBQUlJLENBQUMsQ0FBQ0UsTUFBTixFQUFjO0FBQUUsa0JBQUlDLENBQUMsR0FBRyxLQUFLLENBQWI7O0FBQWdCLGtCQUFJO0FBQUVBLGdCQUFBQSxDQUFDLEdBQUcsSUFBSUMsTUFBSixDQUFXSixDQUFDLENBQUNFLE1BQWIsQ0FBSjtBQUEwQixlQUFoQyxDQUFpQyxPQUFPRyxDQUFQLEVBQVU7QUFBRUYsZ0JBQUFBLENBQUMsR0FBRyxLQUFLNUUsTUFBTCxDQUFZSyxZQUFoQixFQUE4QjlHLE9BQU8sQ0FBQ3VFLEtBQVIsQ0FBYyx3RUFBZCxDQUE5QjtBQUF1SDs7QUFBQyxrQkFBSThHLENBQUMsQ0FBQ3BDLElBQUYsQ0FBTzZCLENBQVAsQ0FBSixFQUFlO0FBQU87O0FBQzNOLG1CQUFPLEtBQUssS0FBS1AsZUFBTCxDQUFxQnpJLENBQXJCLEVBQXdCbUMsQ0FBeEIsQ0FBWjs7QUFDSixlQUFLNUIsQ0FBTDtBQUNJLGdCQUFJLENBQUM2SSxDQUFMLEVBQVE7QUFDUixnQkFBSSxLQUFLZixXQUFMLENBQWlCVyxDQUFqQixDQUFKLEVBQXlCO0FBQ3pCLG1CQUFPLEtBQUssS0FBS1AsZUFBTCxDQUFxQmxJLENBQXJCLEVBQXdCNEIsQ0FBeEIsQ0FBWjs7QUFDSixlQUFLeEIsQ0FBTDtBQUNJLGdCQUFJc0ksQ0FBSixFQUFPO0FBQ1AsZ0JBQUksQ0FBQ0csQ0FBTCxFQUFRO0FBQ1IsZ0JBQUlNLENBQUMsR0FBR04sQ0FBQyxDQUFDaEgsR0FBVjtBQUFBLGdCQUNJdUgsQ0FBQyxHQUFHUCxDQUFDLENBQUNiLGFBRFY7QUFBQSxnQkFFSXFCLENBQUMsR0FBR1IsQ0FBQyxDQUFDL0csTUFGVjtBQUFBLGdCQUdJd0gsQ0FBQyxHQUFHVCxDQUFDLENBQUNaLFNBSFY7QUFBQSxnQkFJSXNCLENBQUMsR0FBRyxLQUFLdEQsS0FBTCxDQUFXbkIsYUFBWCxDQUF5QixnQ0FBZ0NsRCxDQUFoQyxHQUFvQyxJQUE3RCxDQUpSO0FBS0EsbUJBQU8sS0FBS2lFLG1CQUFMLENBQXlCMEQsQ0FBekIsRUFBNEIsT0FBNUIsRUFBcUMsS0FBSzFGLFlBQTFDLEVBQXdELFFBQXhELEdBQW1FLEtBQUssS0FBS0ksY0FBTCxDQUFvQnRFLElBQXBCLENBQXlCLEtBQUtvSSxjQUFMLENBQW9CO0FBQUV0RyxjQUFBQSxJQUFJLEVBQUVHLENBQVI7QUFBV3pELGNBQUFBLEtBQUssRUFBRXNLLENBQWxCO0FBQXFCNUcsY0FBQUEsR0FBRyxFQUFFc0gsQ0FBMUI7QUFBNkJySCxjQUFBQSxNQUFNLEVBQUV1SCxDQUFyQztBQUF3Q3BCLGNBQUFBLFNBQVMsRUFBRXFCLENBQW5EO0FBQXNEdEIsY0FBQUEsYUFBYSxFQUFFb0I7QUFBckUsYUFBcEIsQ0FBekIsQ0FBL0U7QUE5Q1I7QUFnREg7QUFDUixLQTdKUztBQThKVkksSUFBQUEsV0FBVyxFQUFFLHVCQUFXO0FBQ3BCLFdBQUssSUFBSTFMLENBQUMsR0FBRzJGLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsMEJBQTFCLENBQVIsRUFBK0QzRixDQUFDLEdBQUcsQ0FBbkUsRUFBc0VDLENBQUMsR0FBR0YsQ0FBQyxDQUFDZ0IsTUFBakYsRUFBeUZmLENBQUMsR0FBR0MsQ0FBN0YsRUFBZ0csRUFBRUQsQ0FBbEc7QUFBcUdELFFBQUFBLENBQUMsQ0FBQ0MsQ0FBRCxDQUFELENBQUtrQixNQUFMO0FBQXJHOztBQUNBbkIsTUFBQUEsQ0FBQyxHQUFHMkYsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQiwwQkFBMUIsQ0FBSjs7QUFDQSxXQUFLLElBQUkzRSxDQUFDLEdBQUcsQ0FBUixFQUFXVyxDQUFDLEdBQUc1QixDQUFDLENBQUNnQixNQUF0QixFQUE4QkMsQ0FBQyxHQUFHVyxDQUFsQyxFQUFxQyxFQUFFWCxDQUF2QztBQUEwQ2pCLFFBQUFBLENBQUMsQ0FBQ2lCLENBQUQsQ0FBRCxDQUFLMEssU0FBTCxDQUFleEssTUFBZixDQUFzQix5QkFBdEIsR0FBa0RuQixDQUFDLENBQUNpQixDQUFELENBQUQsQ0FBSzJLLEtBQUwsQ0FBV0MsTUFBWCxHQUFvQixFQUF0RSxFQUEwRTdMLENBQUMsQ0FBQ2lCLENBQUQsQ0FBRCxDQUFLMkssS0FBTCxDQUFXRSxLQUFYLEdBQW1CLEVBQTdGO0FBQTFDO0FBQ0gsS0FsS1M7QUFtS1ZoRSxJQUFBQSxZQUFZLEVBQUUsd0JBQVc7QUFDckIsVUFBSTlILENBQUMsR0FBRyxJQUFSO0FBQ0EsVUFBSSxLQUFLMEwsV0FBTCxJQUFvQixLQUFLSyxVQUFMLEVBQXBCLEVBQXVDLEtBQUszRixtQkFBTCxHQUEyQixDQUFDLENBQW5FLEVBQXNFLE1BQU1qRyxNQUFNLENBQUMwRCxJQUFQLENBQVksS0FBS3NCLE1BQWpCLEVBQXlCbkUsTUFBekcsRUFBaUgsT0FBTyxNQUFLLEtBQUtvRixtQkFBTCxHQUEyQixDQUFDLENBQWpDLENBQVA7O0FBQ2pILFdBQUssSUFBSW5HLENBQVQsSUFBYyxLQUFLa0YsTUFBbkIsRUFBMkI7QUFDdkIsWUFBSWpGLENBQUMsR0FBRyxLQUFLaUYsTUFBTCxDQUFZbEYsQ0FBWixFQUFlc0ssT0FBdkI7QUFBQSxZQUNJdEosQ0FBQyxHQUFHLEtBQUtrSCxLQUFMLENBQVd2QyxnQkFBWCxDQUE0QiwyQkFBMkIzRixDQUEzQixHQUErQixJQUEzRCxDQURSO0FBQUEsWUFFSTJCLENBQUMsR0FBR1gsQ0FBQyxDQUFDQSxDQUFDLENBQUNELE1BQUYsR0FBVyxDQUFaLENBRlQ7QUFBQSxZQUdJaUIsQ0FBQyxHQUFHMEQsUUFBUSxDQUFDcUcsYUFBVCxDQUF1QixLQUF2QixDQUhSOztBQUlBLFlBQUkvSixDQUFDLENBQUNnSyxTQUFGLEdBQWMvTCxDQUFkLEVBQWlCK0IsQ0FBQyxDQUFDaUssU0FBRixHQUFjLHlCQUEvQixFQUEwRGpLLENBQUMsQ0FBQ3lHLFlBQUYsQ0FBZSxPQUFmLEVBQXdCLFlBQVksS0FBS3hELFVBQXpDLENBQTFELEVBQWdIdEQsQ0FBQyxDQUFDZ0ssS0FBRixDQUFRQyxNQUFSLEdBQWlCLGVBQWUsS0FBSzNHLFVBQXJKLEVBQWlLdEQsQ0FBQyxDQUFDZ0ssS0FBRixDQUFRRSxLQUFSLEdBQWdCLEtBQUssS0FBSzVHLFVBQTNMLEVBQXVNdEQsQ0FBQyxDQUFDK0osU0FBRixDQUFZUSxHQUFaLENBQWdCLHlCQUFoQixDQUF2TSxFQUFtUCxlQUFldkssQ0FBQyxDQUFDd0csSUFBakIsSUFBeUIsWUFBWXhHLENBQUMsQ0FBQ3dHLElBQTlSLEVBQW9TO0FBQUUsY0FBSWxHLENBQUMsR0FBR3lELFFBQVEsQ0FBQ3FCLGFBQVQsQ0FBdUIsZ0JBQWdCcEYsQ0FBQyxDQUFDOEYsWUFBRixDQUFlLElBQWYsQ0FBaEIsR0FBdUMsSUFBOUQsQ0FBUjtBQUE2RSxzQkFBWTlGLENBQUMsQ0FBQ2QsVUFBRixDQUFhc0wsT0FBYixDQUFxQjVJLFdBQXJCLEVBQVosR0FBaUQ1QixDQUFDLENBQUNkLFVBQUYsQ0FBYUEsVUFBYixDQUF3QnVMLFlBQXhCLENBQXFDcEssQ0FBckMsRUFBd0MsSUFBeEMsQ0FBakQsR0FBaUdDLENBQUMsR0FBR0EsQ0FBQyxDQUFDcEIsVUFBRixDQUFhdUwsWUFBYixDQUEwQnBLLENBQTFCLEVBQTZCQyxDQUFDLENBQUNvSyxXQUEvQixDQUFILEdBQWlEMUssQ0FBQyxDQUFDZCxVQUFGLENBQWF1TCxZQUFiLENBQTBCcEssQ0FBMUIsRUFBNkJMLENBQUMsQ0FBQzBLLFdBQS9CLENBQW5KO0FBQWdNLFNBQW5qQixNQUF5akIxSyxDQUFDLENBQUNkLFVBQUYsQ0FBYXVMLFlBQWIsQ0FBMEJwSyxDQUExQixFQUE2QkwsQ0FBQyxDQUFDMEssV0FBL0I7QUFDNWpCOztBQUNELFdBQUs1RyxtQkFBTCxDQUF5QjFFLE1BQXpCLEtBQW9DLEtBQUs2RixLQUFMLENBQVdDLGFBQVgsR0FBMkJ0RSxVQUFVLENBQUMsWUFBVztBQUFFeEMsUUFBQUEsQ0FBQyxDQUFDdU0sWUFBRjtBQUFrQixPQUFoQyxFQUFrQyxLQUFLakgsa0JBQXZDLENBQXpFO0FBQ0gsS0E5S1M7QUErS1ZpSCxJQUFBQSxZQUFZLEVBQUUsd0JBQVc7QUFDckIsVUFBSXZNLENBQUMsR0FBRyxJQUFSO0FBQUEsVUFDSUMsQ0FBQyxHQUFHMEYsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQiwwQkFBMUIsQ0FEUjtBQUVBM0YsTUFBQUEsQ0FBQyxDQUFDd0ssT0FBRixDQUFVLFVBQVN4SyxDQUFULEVBQVk7QUFBRUEsUUFBQUEsQ0FBQyxDQUFDMEwsU0FBRixDQUFZUSxHQUFaLENBQWdCbk0sQ0FBQyxDQUFDd0YsbUJBQWxCO0FBQXdDLE9BQWhFLEdBQW1FLEtBQUtxQixLQUFMLENBQVdDLGFBQVgsR0FBMkIsSUFBOUY7QUFDSCxLQW5MUztBQW9MVjBELElBQUFBLFFBQVEsRUFBRSxvQkFBVztBQUFFLFdBQUssSUFBSXhLLENBQUMsR0FBRyxLQUFLbUksS0FBTCxDQUFXdkMsZ0JBQVgsQ0FBNEIsaUNBQTVCLENBQVIsRUFBd0UzRixDQUFDLEdBQUcsQ0FBNUUsRUFBK0VDLENBQUMsR0FBR0YsQ0FBQyxDQUFDZ0IsTUFBMUYsRUFBa0dmLENBQUMsR0FBR0MsQ0FBdEcsRUFBeUcsRUFBRUQsQ0FBM0c7QUFBOEdELFFBQUFBLENBQUMsQ0FBQ0MsQ0FBRCxDQUFELENBQUt5SSxZQUFMLENBQWtCLFVBQWxCLEVBQThCLFVBQTlCLEdBQTJDMUksQ0FBQyxDQUFDQyxDQUFELENBQUQsQ0FBSzJMLEtBQUwsQ0FBV1ksYUFBWCxHQUEyQixNQUF0RSxFQUE4RXhNLENBQUMsQ0FBQ0MsQ0FBRCxDQUFELENBQUsyTCxLQUFMLENBQVdhLFdBQVgsR0FBeUIsaUJBQXZHLEVBQTBIek0sQ0FBQyxDQUFDQyxDQUFELENBQUQsQ0FBSzJMLEtBQUwsQ0FBV3JDLE1BQVgsR0FBb0IsaUJBQTlJO0FBQTlHO0FBQStRLEtBcEw1UjtBQXFMVndDLElBQUFBLFVBQVUsRUFBRSxzQkFBVztBQUFFLFdBQUssSUFBSS9MLENBQUMsR0FBRyxLQUFLbUksS0FBTCxDQUFXdkMsZ0JBQVgsQ0FBNEIsaUNBQTVCLENBQVIsRUFBd0UzRixDQUFDLEdBQUcsQ0FBNUUsRUFBK0VDLENBQUMsR0FBR0YsQ0FBQyxDQUFDZ0IsTUFBMUYsRUFBa0dmLENBQUMsR0FBR0MsQ0FBdEcsRUFBeUcsRUFBRUQsQ0FBM0c7QUFBOEdELFFBQUFBLENBQUMsQ0FBQ0MsQ0FBRCxDQUFELENBQUt5TSxlQUFMLENBQXFCLFVBQXJCLEdBQWtDMU0sQ0FBQyxDQUFDQyxDQUFELENBQUQsQ0FBSzJMLEtBQUwsQ0FBV1ksYUFBWCxHQUEyQixFQUE3RCxFQUFpRXhNLENBQUMsQ0FBQ0MsQ0FBRCxDQUFELENBQUsyTCxLQUFMLENBQVdhLFdBQVgsR0FBeUIsRUFBMUYsRUFBOEZ6TSxDQUFDLENBQUNDLENBQUQsQ0FBRCxDQUFLMkwsS0FBTCxDQUFXckMsTUFBWCxHQUFvQixFQUFsSDtBQUE5RztBQUFvTztBQXJMblAsR0FBZCxFQXNMR3ZKLENBQUMsQ0FBQzJNLFlBQUYsR0FBaUI3SCxDQXRMcEI7QUF1TEgsQ0FuTkQsQ0FtTkU1RCxNQW5ORixDQXBFQTtBQXlSQXJCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLElBQVoiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYSA9IDFcclxuY29uc29sZS5sb2coYSkiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShlLCB0LCBpKSB7IHJldHVybiB0IGluIGUgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgdCwgeyB2YWx1ZTogaSwgZW51bWVyYWJsZTogITAsIGNvbmZpZ3VyYWJsZTogITAsIHdyaXRhYmxlOiAhMCB9KSA6IGVbdF0gPSBpLCBlIH1cclxudmFyIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbihlKSB7IHJldHVybiB0eXBlb2YgZSB9IDogZnVuY3Rpb24oZSkgeyByZXR1cm4gZSAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBlLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgZSAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgZSB9O1xyXG4hIGZ1bmN0aW9uKCkge1xyXG4gICAgZm9yICh2YXIgZSA9IFtcIkRvY3VtZW50VHlwZVwiLCBcIkVsZW1lbnRcIiwgXCJDaGFyYWN0ZXJEYXRhXCJdLCB0ID0gZnVuY3Rpb24oKSB7IG51bGwgIT0gdGhpcy5wYXJlbnROb2RlICYmIHRoaXMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzKSB9LCBpID0gMDsgaSA8IGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB2YXIgciA9IGVbaV07XHJcbiAgICAgICAgd2luZG93W3JdICYmICF3aW5kb3dbcl0ucHJvdG90eXBlLnJlbW92ZSAmJiAod2luZG93W3JdLnByb3RvdHlwZS5yZW1vdmUgPSB0KVxyXG4gICAgfVxyXG59KCksXHJcbmZ1bmN0aW9uKGUpIHtcclxuICAgIGZ1bmN0aW9uIHQoKSB7fVxyXG5cclxuICAgIGZ1bmN0aW9uIGkoZSwgdCkgeyByZXR1cm4gZnVuY3Rpb24oKSB7IGUuYXBwbHkodCwgYXJndW1lbnRzKSB9IH1cclxuXHJcbiAgICBmdW5jdGlvbiByKGUpIHtcclxuICAgICAgICBpZiAoXCJvYmplY3RcIiAhPT0gX3R5cGVvZih0aGlzKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByb21pc2VzIG11c3QgYmUgY29uc3RydWN0ZWQgdmlhIG5ld1wiKTtcclxuICAgICAgICBpZiAoXCJmdW5jdGlvblwiICE9IHR5cGVvZiBlKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwibm90IGEgZnVuY3Rpb25cIik7XHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSAwLCB0aGlzLl9oYW5kbGVkID0gITEsIHRoaXMuX3ZhbHVlID0gdm9pZCAwLCB0aGlzLl9kZWZlcnJlZHMgPSBbXSwgdShlLCB0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG4oZSwgdCkge1xyXG4gICAgICAgIGZvciAoOyAzID09PSBlLl9zdGF0ZTspIGUgPSBlLl92YWx1ZTtcclxuICAgICAgICByZXR1cm4gMCA9PT0gZS5fc3RhdGUgPyB2b2lkIGUuX2RlZmVycmVkcy5wdXNoKHQpIDogKGUuX2hhbmRsZWQgPSAhMCwgdm9pZCByLl9pbW1lZGlhdGVGbihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGkgPSAxID09PSBlLl9zdGF0ZSA/IHQub25GdWxmaWxsZWQgOiB0Lm9uUmVqZWN0ZWQ7XHJcbiAgICAgICAgICAgIGlmIChudWxsID09PSBpKSByZXR1cm4gdm9pZCgxID09PSBlLl9zdGF0ZSA/IG8gOiBzKSh0LnByb21pc2UsIGUuX3ZhbHVlKTtcclxuICAgICAgICAgICAgdmFyIHI7XHJcbiAgICAgICAgICAgIHRyeSB7IHIgPSBpKGUuX3ZhbHVlKSB9IGNhdGNoIChuKSB7IHJldHVybiB2b2lkIHModC5wcm9taXNlLCBuKSB9XHJcbiAgICAgICAgICAgIG8odC5wcm9taXNlLCByKVxyXG4gICAgICAgIH0pKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG8oZSwgdCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICh0ID09PSBlKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQSBwcm9taXNlIGNhbm5vdCBiZSByZXNvbHZlZCB3aXRoIGl0c2VsZi5cIik7XHJcbiAgICAgICAgICAgIGlmICh0ICYmIChcIm9iamVjdFwiID09PSAoXCJ1bmRlZmluZWRcIiA9PSB0eXBlb2YgdCA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKHQpKSB8fCBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHQpKSB7IHZhciBuID0gdC50aGVuOyBpZiAodCBpbnN0YW5jZW9mIHIpIHJldHVybiBlLl9zdGF0ZSA9IDMsIGUuX3ZhbHVlID0gdCwgdm9pZCBhKGUpOyBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiBuKSByZXR1cm4gdm9pZCB1KGkobiwgdCksIGUpIH1cclxuICAgICAgICAgICAgZS5fc3RhdGUgPSAxLCBlLl92YWx1ZSA9IHQsIGEoZSlcclxuICAgICAgICB9IGNhdGNoIChvKSB7IHMoZSwgbykgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHMoZSwgdCkgeyBlLl9zdGF0ZSA9IDIsIGUuX3ZhbHVlID0gdCwgYShlKSB9XHJcblxyXG4gICAgZnVuY3Rpb24gYShlKSB7XHJcbiAgICAgICAgMiA9PT0gZS5fc3RhdGUgJiYgMCA9PT0gZS5fZGVmZXJyZWRzLmxlbmd0aCAmJiByLl9pbW1lZGlhdGVGbihmdW5jdGlvbigpIHsgZS5faGFuZGxlZCB8fCByLl91bmhhbmRsZWRSZWplY3Rpb25GbihlLl92YWx1ZSkgfSk7XHJcbiAgICAgICAgZm9yICh2YXIgdCA9IDAsIGkgPSBlLl9kZWZlcnJlZHMubGVuZ3RoOyB0IDwgaTsgdCsrKSBuKGUsIGUuX2RlZmVycmVkc1t0XSk7XHJcbiAgICAgICAgZS5fZGVmZXJyZWRzID0gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGwoZSwgdCwgaSkgeyB0aGlzLm9uRnVsZmlsbGVkID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBlID8gZSA6IG51bGwsIHRoaXMub25SZWplY3RlZCA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgdCA/IHQgOiBudWxsLCB0aGlzLnByb21pc2UgPSBpIH1cclxuXHJcbiAgICBmdW5jdGlvbiB1KGUsIHQpIHtcclxuICAgICAgICB2YXIgaSA9ICExO1xyXG4gICAgICAgIHRyeSB7IGUoZnVuY3Rpb24oZSkgeyBpIHx8IChpID0gITAsIG8odCwgZSkpIH0sIGZ1bmN0aW9uKGUpIHsgaSB8fCAoaSA9ICEwLCBzKHQsIGUpKSB9KSB9IGNhdGNoIChyKSB7XHJcbiAgICAgICAgICAgIGlmIChpKSByZXR1cm47XHJcbiAgICAgICAgICAgIGkgPSAhMCwgcyh0LCByKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHZhciBkID0gc2V0VGltZW91dDtcclxuICAgIHIucHJvdG90eXBlW1wiY2F0Y2hcIl0gPSBmdW5jdGlvbihlKSB7IHJldHVybiB0aGlzLnRoZW4obnVsbCwgZSkgfSwgci5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uKGUsIGkpIHsgdmFyIHIgPSBuZXcgdGhpcy5jb25zdHJ1Y3Rvcih0KTsgcmV0dXJuIG4odGhpcywgbmV3IGwoZSwgaSwgcikpLCByIH0sIHIuYWxsID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIHZhciB0ID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyByKGZ1bmN0aW9uKGUsIGkpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gcihvLCBzKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzICYmIChcIm9iamVjdFwiID09PSAoXCJ1bmRlZmluZWRcIiA9PSB0eXBlb2YgcyA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKHMpKSB8fCBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHMpKSB7IHZhciBhID0gcy50aGVuOyBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiBhKSByZXR1cm4gdm9pZCBhLmNhbGwocywgZnVuY3Rpb24oZSkgeyByKG8sIGUpIH0sIGkpIH1cclxuICAgICAgICAgICAgICAgICAgICB0W29dID0gcywgMCA9PT0gLS1uICYmIGUodClcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGwpIHsgaShsKSB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKDAgPT09IHQubGVuZ3RoKSByZXR1cm4gZShbXSk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIG4gPSB0Lmxlbmd0aCwgbyA9IDA7IG8gPCB0Lmxlbmd0aDsgbysrKSByKG8sIHRbb10pXHJcbiAgICAgICAgfSlcclxuICAgIH0sIHIucmVzb2x2ZSA9IGZ1bmN0aW9uKGUpIHsgcmV0dXJuIGUgJiYgXCJvYmplY3RcIiA9PT0gKFwidW5kZWZpbmVkXCIgPT0gdHlwZW9mIGUgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihlKSkgJiYgZS5jb25zdHJ1Y3RvciA9PT0gciA/IGUgOiBuZXcgcihmdW5jdGlvbih0KSB7IHQoZSkgfSkgfSwgci5yZWplY3QgPSBmdW5jdGlvbihlKSB7IHJldHVybiBuZXcgcihmdW5jdGlvbih0LCBpKSB7IGkoZSkgfSkgfSwgci5yYWNlID0gZnVuY3Rpb24oZSkgeyByZXR1cm4gbmV3IHIoZnVuY3Rpb24odCwgaSkgeyBmb3IgKHZhciByID0gMCwgbiA9IGUubGVuZ3RoOyByIDwgbjsgcisrKSBlW3JdLnRoZW4odCwgaSkgfSkgfSwgci5faW1tZWRpYXRlRm4gPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHNldEltbWVkaWF0ZSAmJiBmdW5jdGlvbihlKSB7IHNldEltbWVkaWF0ZShlKSB9IHx8IGZ1bmN0aW9uKGUpIHsgZChlLCAwKSB9LCByLl91bmhhbmRsZWRSZWplY3Rpb25GbiA9IGZ1bmN0aW9uKGUpIHsgXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgY29uc29sZSAmJiBjb25zb2xlICYmIGNvbnNvbGUud2FybihcIlBvc3NpYmxlIFVuaGFuZGxlZCBQcm9taXNlIFJlamVjdGlvbjpcIiwgZSkgfSwgci5fc2V0SW1tZWRpYXRlRm4gPSBmdW5jdGlvbihlKSB7IHIuX2ltbWVkaWF0ZUZuID0gZSB9LCByLl9zZXRVbmhhbmRsZWRSZWplY3Rpb25GbiA9IGZ1bmN0aW9uKGUpIHsgci5fdW5oYW5kbGVkUmVqZWN0aW9uRm4gPSBlIH0sIFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cyA/IG1vZHVsZS5leHBvcnRzID0gciA6IGUuUHJvbWlzZSB8fCAoZS5Qcm9taXNlID0gcilcclxufSh3aW5kb3cpLFxyXG5mdW5jdGlvbihlKSB7XHJcbiAgICBlLlByb21pc2UgfHwgKGUuUHJvbWlzZSA9IFByb21pc2UpO1xyXG4gICAgdmFyIHQgPSBcInJlcXVpcmVkXCIsXHJcbiAgICAgICAgaSA9IFwiZW1haWxcIixcclxuICAgICAgICByID0gXCJtaW5MZW5ndGhcIixcclxuICAgICAgICBuID0gXCJtYXhMZW5ndGhcIixcclxuICAgICAgICBvID0gXCJwYXNzd29yZFwiLFxyXG4gICAgICAgIHMgPSBcInppcFwiLFxyXG4gICAgICAgIGEgPSBcInBob25lXCIsXHJcbiAgICAgICAgbCA9IFwicmVtb3RlXCIsXHJcbiAgICAgICAgdSA9IFwic3RyZW5ndGhcIixcclxuICAgICAgICBkID0gXCJmdW5jdGlvblwiLFxyXG4gICAgICAgIGMgPSBmdW5jdGlvbihlLCB0KSB7IGlmIChcInN0cmluZ1wiID09IHR5cGVvZiBlKSByZXR1cm4gZTsgdmFyIGkgPSBcInBvc3RcIiA9PT0gdC50b0xvd2VyQ2FzZSgpID8gXCJcIiA6IFwiP1wiOyByZXR1cm4gQXJyYXkuaXNBcnJheShlKSA/IGkgKyBlLm1hcChmdW5jdGlvbihlKSB7IHJldHVybiBlLm5hbWUgKyBcIj1cIiArIGUudmFsdWUgfSkuam9pbihcIiZcIikgOiBpICsgT2JqZWN0LmtleXMoZSkubWFwKGZ1bmN0aW9uKHQpIHsgcmV0dXJuIHQgKyBcIj1cIiArIGVbdF0gfSkuam9pbihcIiZcIikgfSxcclxuICAgICAgICBoID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICB2YXIgdCA9IGUudXJsLFxyXG4gICAgICAgICAgICAgICAgaSA9IGUubWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgciA9IGUuZGF0YSxcclxuICAgICAgICAgICAgICAgIG4gPSBlLmRlYnVnLFxyXG4gICAgICAgICAgICAgICAgbyA9IGUuY2FsbGJhY2ssXHJcbiAgICAgICAgICAgICAgICBzID0gZS5lcnJvcjtcclxuICAgICAgICAgICAgaWYgKG4pIHJldHVybiB2b2lkIG8oXCJ0ZXN0XCIpO1xyXG4gICAgICAgICAgICB2YXIgYSA9IGUuYXN5bmMgIT09ICExLFxyXG4gICAgICAgICAgICAgICAgbCA9IG5ldyBYTUxIdHRwUmVxdWVzdCxcclxuICAgICAgICAgICAgICAgIHUgPSBjKHIsIFwiZ2V0XCIpLFxyXG4gICAgICAgICAgICAgICAgZCA9IG51bGw7XHJcbiAgICAgICAgICAgIFwicG9zdFwiID09PSBpLnRvTG93ZXJDYXNlKCkgJiYgKGQgPSBjKHIsIFwicG9zdFwiKSwgdSA9IFwiXCIpLCBsLm9wZW4oaSwgdCArIHUsIGEpLCBsLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIiksIGwub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7IDQgPT09IHRoaXMucmVhZHlTdGF0ZSAmJiAoMjAwID09PSB0aGlzLnN0YXR1cyA/IG8odGhpcy5yZXNwb25zZVRleHQpIDogcyAmJiBzKHRoaXMucmVzcG9uc2VUZXh0KSkgfSwgbC5zZW5kKGQpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmID0gZnVuY3Rpb24oZSwgdCkgeyB0aGlzLm9wdGlvbnMgPSB0IHx8IHt9LCB0aGlzLnJ1bGVzID0gdGhpcy5vcHRpb25zLnJ1bGVzIHx8IHt9LCB0aGlzLm1lc3NhZ2VzID0gdGhpcy5vcHRpb25zLm1lc3NhZ2VzIHx8IHZvaWQgMCwgdGhpcy5jb2xvcldyb25nID0gdGhpcy5vcHRpb25zLmNvbG9yV3JvbmcgfHwgXCIjRkYzMDMwXCIsIHRoaXMucmVzdWx0ID0ge30sIHRoaXMuZWxlbWVudHMgPSBbXSwgdGhpcy50b29sdGlwID0gdGhpcy5vcHRpb25zLnRvb2x0aXAgfHwge30sIHRoaXMudG9vbHRpcEZhZGVPdXRUaW1lID0gdGhpcy50b29sdGlwLmZhZGVPdXRUaW1lIHx8IDVlMywgdGhpcy50b29sdGlwRmFkZU91dENsYXNzID0gdGhpcy50b29sdGlwLmZhZGVPdXRDbGFzcyB8fCBcImp1c3QtdmFsaWRhdGUtdG9vbHRpcC1oaWRlXCIsIHRoaXMudG9vbHRpcFNlbGVjdG9yV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy50b29sdGlwLnNlbGVjdG9yV3JhcCkubGVuZ3RoID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLnRvb2x0aXAuc2VsZWN0b3JXcmFwKSA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuanVzdC12YWxpZGF0ZS10b29sdGlwLWNvbnRhaW5lclwiKSwgdGhpcy5iaW5kSGFuZGxlcktleXVwID0gdGhpcy5oYW5kbGVyS2V5dXAuYmluZCh0aGlzKSwgdGhpcy5zdWJtaXRIYW5kbGVyID0gdGhpcy5vcHRpb25zLnN1Ym1pdEhhbmRsZXIgfHwgdm9pZCAwLCB0aGlzLmludmFsaWRGb3JtQ2FsbGJhY2sgPSB0aGlzLm9wdGlvbnMuaW52YWxpZEZvcm1DYWxsYmFjayB8fCB2b2lkIDAsIHRoaXMucHJvbWlzZXNSZW1vdGUgPSBbXSwgdGhpcy5pc1ZhbGlkYXRpb25TdWNjZXNzID0gITEsIHRoaXMuZm9jdXNXcm9uZ0ZpZWxkID0gdGhpcy5vcHRpb25zLmZvY3VzV3JvbmdGaWVsZCB8fCAhMSwgdGhpcy5SRUdFWFAgPSB7IGVtYWlsOiAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLywgemlwOiAvXlxcZHs1fSgtXFxkezR9KT8kLywgcGhvbmU6IC9eKFswLTldKCB8LSk/KT8oXFwoP1swLTldezN9XFwpP3xbMC05XXszfSkoIHwtKT8oWzAtOV17M30oIHwtKT9bMC05XXs0fXxbYS16QS1aMC05XXs3fSkkLywgcGFzc3dvcmQ6IC9bXlxcd1xcZF0qKChbMC05XSsuKltBLVphLXpdKy4qKXxbQS1aYS16XSsuKihbMC05XSsuKikpLywgc3RyZW5ndGhQYXNzOiAvXig/PS4qW2Etel0pKD89LipbQS1aXSkoPz0uKlxcZClbYS16QS1aXFxkXS8gfSwgdGhpcy5ERUZBVUxUX1JFTU9URV9FUlJPUiA9IFwiRXJyb3JcIiwgdGhpcy5zdGF0ZSA9IHsgdG9vbHRpcHNUaW1lcjogbnVsbCB9LCB0aGlzLnNldEZvcm0oZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlKSkgfTtcclxuICAgIGYucHJvdG90eXBlID0ge1xyXG4gICAgICAgIGRlZmF1bHRSdWxlczogeyBlbWFpbDogeyByZXF1aXJlZDogITAsIGVtYWlsOiAhMCB9LCBuYW1lOiB7IHJlcXVpcmVkOiAhMCwgbWluTGVuZ3RoOiAzLCBtYXhMZW5ndGg6IDE1IH0sIHRleHQ6IHsgcmVxdWlyZWQ6ICEwLCBtYXhMZW5ndGg6IDMwMCwgbWluTGVuZ3RoOiA1IH0sIHBhc3N3b3JkOiB7IHJlcXVpcmVkOiAhMCwgcGFzc3dvcmQ6ICEwLCBtaW5MZW5ndGg6IDQsIG1heExlbmd0aDogOCB9LCB6aXA6IHsgcmVxdWlyZWQ6ICEwLCB6aXA6ICEwIH0sIHBob25lOiB7IHBob25lOiAhMCB9IH0sXHJcbiAgICAgICAgZGVmYXVsdE1lc3NhZ2VzOiB7IHJlcXVpcmVkOiBcIlRoZSBmaWVsZCBpcyByZXF1aXJlZFwiLCBlbWFpbDogXCJQbGVhc2UsIHR5cGUgYSB2YWxpZCBlbWFpbFwiLCBtYXhMZW5ndGg6IFwiVGhlIGZpZWxkIG11c3QgY29udGFpbiBhIG1heGltdW0gb2YgOnZhbHVlIGNoYXJhY3RlcnNcIiwgbWluTGVuZ3RoOiBcIlRoZSBmaWVsZCBtdXN0IGNvbnRhaW4gYSBtaW5pbXVtIG9mIDp2YWx1ZSBjaGFyYWN0ZXJzXCIsIHBhc3N3b3JkOiBcIlBhc3N3b3JkIGlzIG5vdCB2YWxpZFwiLCByZW1vdGU6IFwiRW1haWwgYWxyZWFkeSBleGlzdHNcIiwgc3RyZW5ndGg6IFwiUGFzc3dvcmQgbXVzdCBjb250ZW50cyBhdCBsZWFzdCBvbmUgdXBwZXJjYXNlIGxldHRlciwgb25lIGxvd2VyY2FzZSBsZXR0ZXIgYW5kIG9uZSBudW1iZXJcIiwgXCJmdW5jdGlvblwiOiBcIkZ1bmN0aW9uIHJldHVybmVkIGZhbHNlXCIgfSxcclxuICAgICAgICBoYW5kbGVyS2V5dXA6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgdmFyIHQgPSBlLnRhcmdldCxcclxuICAgICAgICAgICAgICAgIGkgPSB7IG5hbWU6IHQuZ2V0QXR0cmlidXRlKFwiZGF0YS12YWxpZGF0ZS1maWVsZFwiKSwgdmFsdWU6IHQudmFsdWUgfTtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMucmVzdWx0W2kubmFtZV0sIHRoaXMudmFsaWRhdGVJdGVtKHsgbmFtZTogaS5uYW1lLCB2YWx1ZTogaS52YWx1ZSwgZ3JvdXA6IFtdLCBpc0tleXVwQ2hhbmdlOiAhMCB9KSwgdGhpcy5yZW5kZXJFcnJvcnMoKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0dGVyRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24oZSwgdCwgaSwgcikge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKFwia2V5dXBcIiA9PT0gdCAmJiAoaSA9IHRoaXMuYmluZEhhbmRsZXJLZXl1cCksIHIpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJhZGRcIjpcclxuICAgICAgICAgICAgICAgICAgICBlLmFkZEV2ZW50TGlzdGVuZXIodCwgaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwicmVtb3ZlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgZS5yZW1vdmVFdmVudExpc3RlbmVyKHQsIGkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldEVsZW1lbnRzUmVhbFZhbHVlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgZSA9IHRoaXMuJGZvcm0ucXVlcnlTZWxlY3RvckFsbChcIipcIiksIHQgPSB2b2lkIDAsIGkgPSB7fSwgciA9IDAsIG4gPSBlLmxlbmd0aDsgciA8IG47ICsrcilcclxuICAgICAgICAgICAgICAgIGlmICh0ID0gZVtyXS5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFwiY2hlY2tib3hcIiA9PT0gZVtyXS50eXBlKSB7IGlbdF0gPSBlW3JdLmNoZWNrZWQ7IGNvbnRpbnVlIH1cclxuICAgICAgICAgICAgICAgICAgICBpW3RdID0gZVtyXS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gaVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsaWRhdGlvbkZhaWxlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW52YWxpZEZvcm1DYWxsYmFjayAmJiB0aGlzLmludmFsaWRGb3JtQ2FsbGJhY2sodGhpcy5yZXN1bHQpO1xyXG4gICAgICAgICAgICB2YXIgZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtdmFsaWRhdGUtZXJyb3ItZmllbGRcIik7XHJcbiAgICAgICAgICAgIHRoaXMuZm9jdXNXcm9uZ0ZpZWxkICYmIGUgJiYgZS5mb2N1cyAmJiBlLmZvY3VzKClcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbGlkYXRpb25TdWNjZXNzOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKDAgPT09IE9iamVjdC5rZXlzKHRoaXMucmVzdWx0KS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVmFsaWRhdGlvblN1Y2Nlc3MgPSAhMSwgdGhpcy5zdWJtaXRIYW5kbGVyKSB7IHZhciBlID0gdGhpcy5nZXRFbGVtZW50c1JlYWxWYWx1ZSgpOyByZXR1cm4gdm9pZCB0aGlzLnN1Ym1pdEhhbmRsZXIodGhpcy4kZm9ybSwgZSwgaCkgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy4kZm9ybS5zdWJtaXQoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRGb3JtOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHZhciB0ID0gdGhpcztcclxuICAgICAgICAgICAgdGhpcy4kZm9ybSA9IGUsIHRoaXMuJGZvcm0uc2V0QXR0cmlidXRlKFwibm92YWxpZGF0ZVwiLCBcIm5vdmFsaWRhdGVcIiksIHRoaXMuJGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbihlKSB7IHJldHVybiBlLnByZXZlbnREZWZhdWx0KCksIHQucmVzdWx0ID0gW10sIHQuZ2V0RWxlbWVudHMoKSwgdC5wcm9taXNlc1JlbW90ZS5sZW5ndGggPyB2b2lkIFByb21pc2UuYWxsKHQucHJvbWlzZXNSZW1vdGUpLnRoZW4oZnVuY3Rpb24oKSB7IHQucHJvbWlzZXNSZW1vdGUgPSBbXSwgdC5pc1ZhbGlkYXRpb25TdWNjZXNzID8gdC52YWxpZGF0aW9uU3VjY2VzcygpIDogdC52YWxpZGF0aW9uRmFpbGVkKCkgfSkgOiB2b2lkKHQuaXNWYWxpZGF0aW9uU3VjY2VzcyA/IHQudmFsaWRhdGlvblN1Y2Nlc3MoKSA6IHQudmFsaWRhdGlvbkZhaWxlZCgpKSB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaXNFbWFpbDogZnVuY3Rpb24oZSkgeyByZXR1cm4gdGhpcy5SRUdFWFAuZW1haWwudGVzdChlKSB9LFxyXG4gICAgICAgIGlzWmlwOiBmdW5jdGlvbihlKSB7IHJldHVybiB0aGlzLlJFR0VYUC56aXAudGVzdChlKSB9LFxyXG4gICAgICAgIGlzUGhvbmU6IGZ1bmN0aW9uKGUpIHsgcmV0dXJuIHRoaXMuUkVHRVhQLnBob25lLnRlc3QoZSkgfSxcclxuICAgICAgICBpc1Bhc3N3b3JkOiBmdW5jdGlvbihlKSB7IHJldHVybiB0aGlzLlJFR0VYUC5wYXNzd29yZC50ZXN0KGUpIH0sXHJcbiAgICAgICAgaXNFbXB0eTogZnVuY3Rpb24oZSkgeyB2YXIgdCA9IGU7IHJldHVybiBlLnRyaW0gJiYgKHQgPSBlLnRyaW0oKSksICF0IH0sXHJcbiAgICAgICAgY2hlY2tMZW5ndGhNYXg6IGZ1bmN0aW9uKGUsIHQpIHsgcmV0dXJuIGUubGVuZ3RoIDw9IHQgfSxcclxuICAgICAgICBjaGVja0xlbmd0aE1pbjogZnVuY3Rpb24oZSwgdCkgeyByZXR1cm4gZS5sZW5ndGggPj0gdCB9LFxyXG4gICAgICAgIGNoZWNrU3RyZW5ndGhQYXNzOiBmdW5jdGlvbihlKSB7IHJldHVybiB0aGlzLlJFR0VYUC5zdHJlbmd0aFBhc3MudGVzdChlKSB9LFxyXG4gICAgICAgIGdldEVsZW1lbnRzOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGUgPSB0aGlzLFxyXG4gICAgICAgICAgICAgICAgdCA9IHRoaXMuJGZvcm0ucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXZhbGlkYXRlLWZpZWxkXVwiKTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50cyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gZnVuY3Rpb24oaSwgcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuID0gdFtpXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbyA9IG4uZ2V0QXR0cmlidXRlKFwiZGF0YS12YWxpZGF0ZS1maWVsZFwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcyA9IG4udmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGEgPSAhMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcImNoZWNrYm94XCIgPT09IG4udHlwZSAmJiAocyA9IG4uY2hlY2tlZCB8fCBcIlwiLCBuLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSB0LnRhcmdldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByID0geyBuYW1lOiBpLmdldEF0dHJpYnV0ZShcImRhdGEtdmFsaWRhdGUtZmllbGRcIiksIHZhbHVlOiBpLmNoZWNrZWQgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBlLnJlc3VsdFtyLm5hbWVdLCBlLnZhbGlkYXRlSXRlbSh7IG5hbWU6IHIubmFtZSwgdmFsdWU6IHIudmFsdWUsIGdyb3VwOiBbXSB9KSwgZS5yZW5kZXJFcnJvcnMoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSksIFwicmFkaW9cIiA9PT0gbi50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1ID0gZS5lbGVtZW50cy5maWx0ZXIoZnVuY3Rpb24oZSkgeyBpZiAoZS5uYW1lID09PSBvKSByZXR1cm4gZSB9KVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdSA/ICh1Lmdyb3VwLnB1c2gobi5jaGVja2VkKSwgYSA9ICEwKSA6IGwucHVzaChuLmNoZWNrZWQpLCBuLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSB0LnRhcmdldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByID0geyBuYW1lOiBpLmdldEF0dHJpYnV0ZShcImRhdGEtdmFsaWRhdGUtZmllbGRcIiksIHZhbHVlOiBpLmNoZWNrZWQgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBlLnJlc3VsdFtyLm5hbWVdLCBlLnZhbGlkYXRlSXRlbSh7IG5hbWU6IHIubmFtZSwgdmFsdWU6IHIudmFsdWUsIGdyb3VwOiBbXSB9KSwgZS5yZW5kZXJFcnJvcnMoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlLnNldHRlckV2ZW50TGlzdGVuZXIobiwgXCJrZXl1cFwiLCBlLmhhbmRsZXJLZXl1cCwgXCJhZGRcIiksIGEgfHwgZS5lbGVtZW50cy5wdXNoKHsgbmFtZTogbywgdmFsdWU6IHMsIGdyb3VwOiBsIH0pXHJcbiAgICAgICAgICAgICAgICB9LCByID0gMCwgbiA9IHQubGVuZ3RoOyByIDwgbjsgKytyKSBpKHIsIG4pO1xyXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRlRWxlbWVudHMoKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsaWRhdGVSZXF1aXJlZDogZnVuY3Rpb24oZSkgeyByZXR1cm4gIXRoaXMuaXNFbXB0eShlKSB9LFxyXG4gICAgICAgIHZhbGlkYXRlRW1haWw6IGZ1bmN0aW9uKGUpIHsgcmV0dXJuIHRoaXMuaXNFbWFpbChlKSB9LFxyXG4gICAgICAgIHZhbGlkYXRlUGhvbmU6IGZ1bmN0aW9uKGUpIHsgcmV0dXJuIHRoaXMuaXNQaG9uZShlKSB9LFxyXG4gICAgICAgIHZhbGlkYXRlTWluTGVuZ3RoOiBmdW5jdGlvbihlLCB0KSB7IHJldHVybiB0aGlzLmNoZWNrTGVuZ3RoTWluKGUsIHQpIH0sXHJcbiAgICAgICAgdmFsaWRhdGVNYXhMZW5ndGg6IGZ1bmN0aW9uKGUsIHQpIHsgcmV0dXJuIHRoaXMuY2hlY2tMZW5ndGhNYXgoZSwgdCkgfSxcclxuICAgICAgICB2YWxpZGF0ZVN0cmVuZ3RoUGFzczogZnVuY3Rpb24oZSkgeyByZXR1cm4gdGhpcy5jaGVja1N0cmVuZ3RoUGFzcyhlKSB9LFxyXG4gICAgICAgIHZhbGlkYXRlUGFzc3dvcmQ6IGZ1bmN0aW9uKGUpIHsgcmV0dXJuIHRoaXMuaXNQYXNzd29yZChlKSB9LFxyXG4gICAgICAgIHZhbGlkYXRlWmlwOiBmdW5jdGlvbihlKSB7IHJldHVybiB0aGlzLmlzWmlwKGUpIH0sXHJcbiAgICAgICAgdmFsaWRhdGVSZW1vdGU6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgdmFyIHQgPSBlLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgaSA9IGUubmFtZSxcclxuICAgICAgICAgICAgICAgIHIgPSBlLnVybCxcclxuICAgICAgICAgICAgICAgIG4gPSBlLnN1Y2Nlc3NBbnN3ZXIsXHJcbiAgICAgICAgICAgICAgICBvID0gZS5zZW5kUGFyYW0sXHJcbiAgICAgICAgICAgICAgICBzID0gZS5tZXRob2Q7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihlKSB7IGgoeyB1cmw6IHIsIG1ldGhvZDogcywgZGF0YTogX2RlZmluZVByb3BlcnR5KHt9LCBvLCB0KSwgYXN5bmM6ICEwLCBjYWxsYmFjazogZnVuY3Rpb24odCkgeyB0LnRvTG93ZXJDYXNlKCkgPT09IG4udG9Mb3dlckNhc2UoKSAmJiBlKFwib2tcIiksIGUoeyB0eXBlOiBcImluY29ycmVjdFwiLCBuYW1lOiBpIH0pIH0sIGVycm9yOiBmdW5jdGlvbigpIHsgZSh7IHR5cGU6IFwiZXJyb3JcIiwgbmFtZTogaSB9KSB9IH0pIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZW5lcmF0ZU1lc3NhZ2U6IGZ1bmN0aW9uKGUsIHQsIGkpIHtcclxuICAgICAgICAgICAgdmFyIHIgPSB0aGlzLm1lc3NhZ2VzIHx8IHRoaXMuZGVmYXVsdE1lc3NhZ2VzLFxyXG4gICAgICAgICAgICAgICAgbiA9IHJbdF0gJiYgclt0XVtlXSB8fCB0aGlzLm1lc3NhZ2VzICYmIFwic3RyaW5nXCIgPT0gdHlwZW9mIHRoaXMubWVzc2FnZXNbdF0gJiYgclt0XSB8fCB0aGlzLmRlZmF1bHRNZXNzYWdlc1tlXSB8fCB0aGlzLkRFRkFVTFRfUkVNT1RFX0VSUk9SO1xyXG4gICAgICAgICAgICBpICYmIChuID0gbi5yZXBsYWNlKFwiOnZhbHVlXCIsIGkudG9TdHJpbmcoKSkpLCB0aGlzLnJlc3VsdFt0XSA9IHsgbWVzc2FnZTogbiB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWxpZGF0ZUVsZW1lbnRzOiBmdW5jdGlvbigpIHsgdmFyIGUgPSB0aGlzOyByZXR1cm4gdGhpcy5sb2NrRm9ybSgpLCB0aGlzLmVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24odCkgeyBlLnZhbGlkYXRlSXRlbSh7IG5hbWU6IHQubmFtZSwgdmFsdWU6IHQudmFsdWUsIGdyb3VwOiB0Lmdyb3VwIH0pIH0pLCB0aGlzLnByb21pc2VzUmVtb3RlLmxlbmd0aCA/IHZvaWQgUHJvbWlzZS5hbGwodGhpcy5wcm9taXNlc1JlbW90ZSkudGhlbihmdW5jdGlvbih0KSB7IHQuZm9yRWFjaChmdW5jdGlvbih0KSB7IHJldHVybiBcIm9rXCIgPT09IHQgPyB2b2lkIGUucmVuZGVyRXJyb3JzKCkgOiAoXCJlcnJvclwiID09PSB0LnR5cGUgJiYgYWxlcnQoXCJTZXJ2ZXIgZXJyb3Igb2NjdXJlZC4gUGxlYXNlIHRyeSBsYXRlci5cIiksIGUuZ2VuZXJhdGVNZXNzYWdlKGwsIHQubmFtZSksIHZvaWQgZS5yZW5kZXJFcnJvcnMoKSkgfSkgfSkgOiB2b2lkIHRoaXMucmVuZGVyRXJyb3JzKCkgfSxcclxuICAgICAgICB2YWxpZGF0ZUl0ZW06IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgdmFyIGMgPSB0aGlzLFxyXG4gICAgICAgICAgICAgICAgaCA9IGUubmFtZSxcclxuICAgICAgICAgICAgICAgIGYgPSBlLmdyb3VwLFxyXG4gICAgICAgICAgICAgICAgbSA9IGUudmFsdWUsXHJcbiAgICAgICAgICAgICAgICB2ID0gZS5pc0tleXVwQ2hhbmdlLFxyXG4gICAgICAgICAgICAgICAgcCA9IHRoaXMucnVsZXNbaF0gfHwgdGhpcy5kZWZhdWx0UnVsZXNbaF0gfHwgITE7XHJcbiAgICAgICAgICAgIGlmIChwKVxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgZyBpbiBwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHkgPSBwW2ddO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChnICE9PSB0ICYmIGcgIT09IGQgJiYgXCJcIiA9PSBtKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgZDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIHkpIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHkoaCwgbSkpIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZvaWQgdGhpcy5nZW5lcmF0ZU1lc3NhZ2UoZCwgaCwgeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgheSkgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZi5sZW5ndGgpIHsgdmFyIGIgPSAhMTsgaWYgKGYuZm9yRWFjaChmdW5jdGlvbihlKSB7IGMudmFsaWRhdGVSZXF1aXJlZChlKSAmJiAoYiA9ICEwKSB9KSwgYikgYnJlYWsgfSBlbHNlIGlmICh0aGlzLnZhbGlkYXRlUmVxdWlyZWQobSkpIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZvaWQgdGhpcy5nZW5lcmF0ZU1lc3NhZ2UodCwgaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgaTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgheSkgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy52YWxpZGF0ZUVtYWlsKG0pKSBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2b2lkIHRoaXMuZ2VuZXJhdGVNZXNzYWdlKGksIGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXkpIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsaWRhdGVNaW5MZW5ndGgobSwgeSkpIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZvaWQgdGhpcy5nZW5lcmF0ZU1lc3NhZ2UociwgaCwgeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgbjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgheSkgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy52YWxpZGF0ZU1heExlbmd0aChtLCB5KSkgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdm9pZCB0aGlzLmdlbmVyYXRlTWVzc2FnZShuLCBoLCB5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBhOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF5KSBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnZhbGlkYXRlUGhvbmUobSkpIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZvaWQgdGhpcy5nZW5lcmF0ZU1lc3NhZ2UoYSwgaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgbzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgheSkgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy52YWxpZGF0ZVBhc3N3b3JkKG0pKSBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2b2lkIHRoaXMuZ2VuZXJhdGVNZXNzYWdlKG8sIGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXkgfHwgXCJvYmplY3RcIiAhPT0gKFwidW5kZWZpbmVkXCIgPT0gdHlwZW9mIHkgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZih5KSkpIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHlbXCJkZWZhdWx0XCJdICYmIHRoaXMudmFsaWRhdGVTdHJlbmd0aFBhc3MobSkpIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHkuY3VzdG9tKSB7IHZhciBFID0gdm9pZCAwOyB0cnkgeyBFID0gbmV3IFJlZ0V4cCh5LmN1c3RvbSkgfSBjYXRjaCAodykgeyBFID0gdGhpcy5SRUdFWFAuc3RyZW5ndGhQYXNzLCBjb25zb2xlLmVycm9yKFwiQ3VzdG9tIHJlZ2V4cCBmb3Igc3RyZW5ndGggcnVsZSBpcyBub3QgdmFsaWQuIERlZmF1bHQgcmVnZXhwIHdhcyB1c2VkLlwiKSB9IGlmIChFLnRlc3QobSkpIGJyZWFrIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2b2lkIHRoaXMuZ2VuZXJhdGVNZXNzYWdlKHUsIGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXkpIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsaWRhdGVaaXAobSkpIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZvaWQgdGhpcy5nZW5lcmF0ZU1lc3NhZ2UocywgaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgbDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2KSBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgheSkgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgayA9IHkudXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8gPSB5LnN1Y2Nlc3NBbnN3ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUCA9IHkubWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFIgPSB5LnNlbmRQYXJhbSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTID0gdGhpcy4kZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtkYXRhLXZhbGlkYXRlLWZpZWxkPVwiJyArIGggKyAnXCJdJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXR0ZXJFdmVudExpc3RlbmVyKFMsIFwia2V5dXBcIiwgdGhpcy5oYW5kbGVyS2V5dXAsIFwicmVtb3ZlXCIpLCB2b2lkIHRoaXMucHJvbWlzZXNSZW1vdGUucHVzaCh0aGlzLnZhbGlkYXRlUmVtb3RlKHsgbmFtZTogaCwgdmFsdWU6IG0sIHVybDogaywgbWV0aG9kOiBQLCBzZW5kUGFyYW06IFIsIHN1Y2Nlc3NBbnN3ZXI6IF8gfSkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2xlYXJFcnJvcnM6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5qcy12YWxpZGF0ZS1lcnJvci1sYWJlbFwiKSwgdCA9IDAsIGkgPSBlLmxlbmd0aDsgdCA8IGk7ICsrdCkgZVt0XS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuanMtdmFsaWRhdGUtZXJyb3ItZmllbGRcIik7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHIgPSAwLCBuID0gZS5sZW5ndGg7IHIgPCBuOyArK3IpIGVbcl0uY2xhc3NMaXN0LnJlbW92ZShcImpzLXZhbGlkYXRlLWVycm9yLWZpZWxkXCIpLCBlW3JdLnN0eWxlLmJvcmRlciA9IFwiXCIsIGVbcl0uc3R5bGUuY29sb3IgPSBcIlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZW5kZXJFcnJvcnM6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgZSA9IHRoaXM7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNsZWFyRXJyb3JzKCksIHRoaXMudW5sb2NrRm9ybSgpLCB0aGlzLmlzVmFsaWRhdGlvblN1Y2Nlc3MgPSAhMSwgMCA9PT0gT2JqZWN0LmtleXModGhpcy5yZXN1bHQpLmxlbmd0aCkgcmV0dXJuIHZvaWQodGhpcy5pc1ZhbGlkYXRpb25TdWNjZXNzID0gITApO1xyXG4gICAgICAgICAgICBmb3IgKHZhciB0IGluIHRoaXMucmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaSA9IHRoaXMucmVzdWx0W3RdLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgciA9IHRoaXMuJGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdmFsaWRhdGUtZmllbGQ9XCInICsgdCArICdcIl0nKSxcclxuICAgICAgICAgICAgICAgICAgICBuID0gcltyLmxlbmd0aCAtIDFdLFxyXG4gICAgICAgICAgICAgICAgICAgIG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG8uaW5uZXJIVE1MID0gaSwgby5jbGFzc05hbWUgPSBcImpzLXZhbGlkYXRlLWVycm9yLWxhYmVsXCIsIG8uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJjb2xvcjogXCIgKyB0aGlzLmNvbG9yV3JvbmcpLCBuLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIFwiICsgdGhpcy5jb2xvcldyb25nLCBuLnN0eWxlLmNvbG9yID0gXCJcIiArIHRoaXMuY29sb3JXcm9uZywgbi5jbGFzc0xpc3QuYWRkKFwianMtdmFsaWRhdGUtZXJyb3ItZmllbGRcIiksIFwiY2hlY2tib3hcIiA9PT0gbi50eXBlIHx8IFwicmFkaW9cIiA9PT0gbi50eXBlKSB7IHZhciBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGFiZWxbZm9yPVwiJyArIG4uZ2V0QXR0cmlidXRlKFwiaWRcIikgKyAnXCJdJyk7IFwibGFiZWxcIiA9PT0gbi5wYXJlbnROb2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA/IG4ucGFyZW50Tm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShvLCBudWxsKSA6IHMgPyBzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG8sIHMubmV4dFNpYmxpbmcpIDogbi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShvLCBuLm5leHRTaWJsaW5nKSB9IGVsc2Ugbi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShvLCBuLm5leHRTaWJsaW5nKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudG9vbHRpcFNlbGVjdG9yV3JhcC5sZW5ndGggJiYgKHRoaXMuc3RhdGUudG9vbHRpcHNUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IGUuaGlkZVRvb2x0aXBzKCkgfSwgdGhpcy50b29sdGlwRmFkZU91dFRpbWUpKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGlkZVRvb2x0aXBzOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGUgPSB0aGlzLFxyXG4gICAgICAgICAgICAgICAgdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuanMtdmFsaWRhdGUtZXJyb3ItbGFiZWxcIik7XHJcbiAgICAgICAgICAgIHQuZm9yRWFjaChmdW5jdGlvbih0KSB7IHQuY2xhc3NMaXN0LmFkZChlLnRvb2x0aXBGYWRlT3V0Q2xhc3MpIH0pLCB0aGlzLnN0YXRlLnRvb2x0aXBzVGltZXIgPSBudWxsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsb2NrRm9ybTogZnVuY3Rpb24oKSB7IGZvciAodmFyIGUgPSB0aGlzLiRmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dCwgdGV4dGFyZWEsIGJ1dHRvbiwgc2VsZWN0XCIpLCB0ID0gMCwgaSA9IGUubGVuZ3RoOyB0IDwgaTsgKyt0KSBlW3RdLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIiksIGVbdF0uc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiLCBlW3RdLnN0eWxlLndlYml0RmlsdGVyID0gXCJncmF5c2NhbGUoMTAwJSlcIiwgZVt0XS5zdHlsZS5maWx0ZXIgPSBcImdyYXlzY2FsZSgxMDAlKVwiIH0sXHJcbiAgICAgICAgdW5sb2NrRm9ybTogZnVuY3Rpb24oKSB7IGZvciAodmFyIGUgPSB0aGlzLiRmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dCwgdGV4dGFyZWEsIGJ1dHRvbiwgc2VsZWN0XCIpLCB0ID0gMCwgaSA9IGUubGVuZ3RoOyB0IDwgaTsgKyt0KSBlW3RdLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpLCBlW3RdLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIlwiLCBlW3RdLnN0eWxlLndlYml0RmlsdGVyID0gXCJcIiwgZVt0XS5zdHlsZS5maWx0ZXIgPSBcIlwiIH1cclxuICAgIH0sIGUuSnVzdFZhbGlkYXRlID0gZlxyXG59KHdpbmRvdyk7XHJcblxyXG5jb25zb2xlLmxvZygnZ2gnKSJdfQ==
