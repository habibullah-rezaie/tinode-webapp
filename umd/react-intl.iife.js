var ReactIntl = (function () {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = function (target) {
    return __defProp(target, "__esModule", { value: true });
  };
  var __require = /* @__PURE__ */ (function (x) {
    return typeof require !== "undefined"
      ? require
      : typeof Proxy !== "undefined"
      ? new Proxy(x, {
          get: function (a, b) {
            return (typeof require !== "undefined" ? require : a)[b];
          },
        })
      : x;
  })(function (x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = function (cb, mod) {
    return function __require2() {
      return (
        mod ||
          (0, cb[__getOwnPropNames(cb)[0]])(
            (mod = { exports: {} }).exports,
            mod
          ),
        mod.exports
      );
    };
  };
  var __export = function (target, all) {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __reExport = function (target, module, copyDefault, desc) {
    if ((module && typeof module === "object") || typeof module === "function")
      for (
        var keys = __getOwnPropNames(module), i = 0, n = keys.length, key;
        i < n;
        i++
      ) {
        key = keys[i];
        if (
          !__hasOwnProp.call(target, key) &&
          (copyDefault || key !== "default")
        )
          __defProp(target, key, {
            get: function (k) {
              return module[k];
            }.bind(null, key),
            enumerable:
              !(desc = __getOwnPropDesc(module, key)) || desc.enumerable,
          });
      }
    return target;
  };
  var __toESM = function (module, isNodeMode) {
    return __reExport(
      __markAsModule(
        __defProp(
          module != null ? __create(__getProtoOf(module)) : {},
          "default",
          !isNodeMode && module && module.__esModule
            ? {
                get: function () {
                  return module.default;
                },
                enumerable: true,
              }
            : { value: module, enumerable: true }
        )
      ),
      module
    );
  };
  var __toCommonJS = /* @__PURE__ */ (function (cache) {
    return function (module, temp) {
      return (
        (cache && cache.get(module)) ||
        ((temp = __reExport(__markAsModule({}), module, 1)),
        cache && cache.set(module, temp),
        temp)
      );
    };
  })(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

  // node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js
  var require_react_is_development = __commonJS({
    "node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js":
      function (exports) {
        "use strict";
        if (true) {
          (function () {
            "use strict";
            var hasSymbol = typeof Symbol === "function" && Symbol.for;
            var REACT_ELEMENT_TYPE = hasSymbol
              ? Symbol.for("react.element")
              : 60103;
            var REACT_PORTAL_TYPE = hasSymbol
              ? Symbol.for("react.portal")
              : 60106;
            var REACT_FRAGMENT_TYPE = hasSymbol
              ? Symbol.for("react.fragment")
              : 60107;
            var REACT_STRICT_MODE_TYPE = hasSymbol
              ? Symbol.for("react.strict_mode")
              : 60108;
            var REACT_PROFILER_TYPE = hasSymbol
              ? Symbol.for("react.profiler")
              : 60114;
            var REACT_PROVIDER_TYPE = hasSymbol
              ? Symbol.for("react.provider")
              : 60109;
            var REACT_CONTEXT_TYPE = hasSymbol
              ? Symbol.for("react.context")
              : 60110;
            var REACT_ASYNC_MODE_TYPE = hasSymbol
              ? Symbol.for("react.async_mode")
              : 60111;
            var REACT_CONCURRENT_MODE_TYPE = hasSymbol
              ? Symbol.for("react.concurrent_mode")
              : 60111;
            var REACT_FORWARD_REF_TYPE = hasSymbol
              ? Symbol.for("react.forward_ref")
              : 60112;
            var REACT_SUSPENSE_TYPE = hasSymbol
              ? Symbol.for("react.suspense")
              : 60113;
            var REACT_SUSPENSE_LIST_TYPE = hasSymbol
              ? Symbol.for("react.suspense_list")
              : 60120;
            var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
            var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
            var REACT_BLOCK_TYPE = hasSymbol
              ? Symbol.for("react.block")
              : 60121;
            var REACT_FUNDAMENTAL_TYPE = hasSymbol
              ? Symbol.for("react.fundamental")
              : 60117;
            var REACT_RESPONDER_TYPE = hasSymbol
              ? Symbol.for("react.responder")
              : 60118;
            var REACT_SCOPE_TYPE = hasSymbol
              ? Symbol.for("react.scope")
              : 60119;
            function isValidElementType(type) {
              return (
                typeof type === "string" ||
                typeof type === "function" ||
                type === REACT_FRAGMENT_TYPE ||
                type === REACT_CONCURRENT_MODE_TYPE ||
                type === REACT_PROFILER_TYPE ||
                type === REACT_STRICT_MODE_TYPE ||
                type === REACT_SUSPENSE_TYPE ||
                type === REACT_SUSPENSE_LIST_TYPE ||
                (typeof type === "object" &&
                  type !== null &&
                  (type.$$typeof === REACT_LAZY_TYPE ||
                    type.$$typeof === REACT_MEMO_TYPE ||
                    type.$$typeof === REACT_PROVIDER_TYPE ||
                    type.$$typeof === REACT_CONTEXT_TYPE ||
                    type.$$typeof === REACT_FORWARD_REF_TYPE ||
                    type.$$typeof === REACT_FUNDAMENTAL_TYPE ||
                    type.$$typeof === REACT_RESPONDER_TYPE ||
                    type.$$typeof === REACT_SCOPE_TYPE ||
                    type.$$typeof === REACT_BLOCK_TYPE))
              );
            }
            function typeOf(object) {
              if (typeof object === "object" && object !== null) {
                var $$typeof = object.$$typeof;
                switch ($$typeof) {
                  case REACT_ELEMENT_TYPE:
                    var type = object.type;
                    switch (type) {
                      case REACT_ASYNC_MODE_TYPE:
                      case REACT_CONCURRENT_MODE_TYPE:
                      case REACT_FRAGMENT_TYPE:
                      case REACT_PROFILER_TYPE:
                      case REACT_STRICT_MODE_TYPE:
                      case REACT_SUSPENSE_TYPE:
                        return type;
                      default:
                        var $$typeofType = type && type.$$typeof;
                        switch ($$typeofType) {
                          case REACT_CONTEXT_TYPE:
                          case REACT_FORWARD_REF_TYPE:
                          case REACT_LAZY_TYPE:
                          case REACT_MEMO_TYPE:
                          case REACT_PROVIDER_TYPE:
                            return $$typeofType;
                          default:
                            return $$typeof;
                        }
                    }
                  case REACT_PORTAL_TYPE:
                    return $$typeof;
                }
              }
              return void 0;
            }
            var AsyncMode = REACT_ASYNC_MODE_TYPE;
            var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
            var ContextConsumer = REACT_CONTEXT_TYPE;
            var ContextProvider = REACT_PROVIDER_TYPE;
            var Element = REACT_ELEMENT_TYPE;
            var ForwardRef = REACT_FORWARD_REF_TYPE;
            var Fragment6 = REACT_FRAGMENT_TYPE;
            var Lazy = REACT_LAZY_TYPE;
            var Memo = REACT_MEMO_TYPE;
            var Portal = REACT_PORTAL_TYPE;
            var Profiler = REACT_PROFILER_TYPE;
            var StrictMode = REACT_STRICT_MODE_TYPE;
            var Suspense = REACT_SUSPENSE_TYPE;
            var hasWarnedAboutDeprecatedIsAsyncMode = false;
            function isAsyncMode(object) {
              {
                if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                  hasWarnedAboutDeprecatedIsAsyncMode = true;
                  console["warn"](
                    "The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API."
                  );
                }
              }
              return (
                isConcurrentMode(object) ||
                typeOf(object) === REACT_ASYNC_MODE_TYPE
              );
            }
            function isConcurrentMode(object) {
              return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
            }
            function isContextConsumer(object) {
              return typeOf(object) === REACT_CONTEXT_TYPE;
            }
            function isContextProvider(object) {
              return typeOf(object) === REACT_PROVIDER_TYPE;
            }
            function isElement(object) {
              return (
                typeof object === "object" &&
                object !== null &&
                object.$$typeof === REACT_ELEMENT_TYPE
              );
            }
            function isForwardRef(object) {
              return typeOf(object) === REACT_FORWARD_REF_TYPE;
            }
            function isFragment(object) {
              return typeOf(object) === REACT_FRAGMENT_TYPE;
            }
            function isLazy(object) {
              return typeOf(object) === REACT_LAZY_TYPE;
            }
            function isMemo(object) {
              return typeOf(object) === REACT_MEMO_TYPE;
            }
            function isPortal(object) {
              return typeOf(object) === REACT_PORTAL_TYPE;
            }
            function isProfiler(object) {
              return typeOf(object) === REACT_PROFILER_TYPE;
            }
            function isStrictMode(object) {
              return typeOf(object) === REACT_STRICT_MODE_TYPE;
            }
            function isSuspense(object) {
              return typeOf(object) === REACT_SUSPENSE_TYPE;
            }
            exports.AsyncMode = AsyncMode;
            exports.ConcurrentMode = ConcurrentMode;
            exports.ContextConsumer = ContextConsumer;
            exports.ContextProvider = ContextProvider;
            exports.Element = Element;
            exports.ForwardRef = ForwardRef;
            exports.Fragment = Fragment6;
            exports.Lazy = Lazy;
            exports.Memo = Memo;
            exports.Portal = Portal;
            exports.Profiler = Profiler;
            exports.StrictMode = StrictMode;
            exports.Suspense = Suspense;
            exports.isAsyncMode = isAsyncMode;
            exports.isConcurrentMode = isConcurrentMode;
            exports.isContextConsumer = isContextConsumer;
            exports.isContextProvider = isContextProvider;
            exports.isElement = isElement;
            exports.isForwardRef = isForwardRef;
            exports.isFragment = isFragment;
            exports.isLazy = isLazy;
            exports.isMemo = isMemo;
            exports.isPortal = isPortal;
            exports.isProfiler = isProfiler;
            exports.isStrictMode = isStrictMode;
            exports.isSuspense = isSuspense;
            exports.isValidElementType = isValidElementType;
            exports.typeOf = typeOf;
          })();
        }
      },
  });

  // node_modules/hoist-non-react-statics/node_modules/react-is/index.js
  var require_react_is = __commonJS({
    "node_modules/hoist-non-react-statics/node_modules/react-is/index.js":
      function (exports, module) {
        "use strict";
        if (false) {
          module.exports = null;
        } else {
          module.exports = require_react_is_development();
        }
      },
  });

  // node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
  var require_hoist_non_react_statics_cjs = __commonJS({
    "node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
      function (exports, module) {
        "use strict";
        var reactIs = require_react_is();
        var REACT_STATICS = {
          childContextTypes: true,
          contextType: true,
          contextTypes: true,
          defaultProps: true,
          displayName: true,
          getDefaultProps: true,
          getDerivedStateFromError: true,
          getDerivedStateFromProps: true,
          mixins: true,
          propTypes: true,
          type: true,
        };
        var KNOWN_STATICS = {
          name: true,
          length: true,
          prototype: true,
          caller: true,
          callee: true,
          arguments: true,
          arity: true,
        };
        var FORWARD_REF_STATICS = {
          $$typeof: true,
          render: true,
          defaultProps: true,
          displayName: true,
          propTypes: true,
        };
        var MEMO_STATICS = {
          $$typeof: true,
          compare: true,
          defaultProps: true,
          displayName: true,
          propTypes: true,
          type: true,
        };
        var TYPE_STATICS = {};
        TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
        TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
        function getStatics(component) {
          if (reactIs.isMemo(component)) {
            return MEMO_STATICS;
          }
          return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
        }
        var defineProperty = Object.defineProperty;
        var getOwnPropertyNames = Object.getOwnPropertyNames;
        var getOwnPropertySymbols = Object.getOwnPropertySymbols;
        var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        var getPrototypeOf = Object.getPrototypeOf;
        var objectPrototype = Object.prototype;
        function hoistNonReactStatics2(
          targetComponent,
          sourceComponent,
          blacklist
        ) {
          if (typeof sourceComponent !== "string") {
            if (objectPrototype) {
              var inheritedComponent = getPrototypeOf(sourceComponent);
              if (
                inheritedComponent &&
                inheritedComponent !== objectPrototype
              ) {
                hoistNonReactStatics2(
                  targetComponent,
                  inheritedComponent,
                  blacklist
                );
              }
            }
            var keys = getOwnPropertyNames(sourceComponent);
            if (getOwnPropertySymbols) {
              keys = keys.concat(getOwnPropertySymbols(sourceComponent));
            }
            var targetStatics = getStatics(targetComponent);
            var sourceStatics = getStatics(sourceComponent);
            for (var i = 0; i < keys.length; ++i) {
              var key = keys[i];
              if (
                !KNOWN_STATICS[key] &&
                !(blacklist && blacklist[key]) &&
                !(sourceStatics && sourceStatics[key]) &&
                !(targetStatics && targetStatics[key])
              ) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                  defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
              }
            }
          }
          return targetComponent;
        }
        module.exports = hoistNonReactStatics2;
      },
  });

  // bazel-out/darwin-fastbuild/bin/packages/react-intl/lib/index.js
  var lib_exports = {};
  __export(lib_exports, {
    FormattedDate: function () {
      return FormattedDate;
    },
    FormattedDateParts: function () {
      return FormattedDateParts;
    },
    FormattedDateTimeRange: function () {
      return dateTimeRange_default;
    },
    FormattedDisplayName: function () {
      return FormattedDisplayName;
    },
    FormattedList: function () {
      return FormattedList;
    },
    FormattedListParts: function () {
      return FormattedListParts;
    },
    FormattedMessage: function () {
      return message_default;
    },
    FormattedNumber: function () {
      return FormattedNumber;
    },
    FormattedNumberParts: function () {
      return FormattedNumberParts;
    },
    FormattedPlural: function () {
      return plural_default;
    },
    FormattedRelativeTime: function () {
      return relative_default;
    },
    FormattedTime: function () {
      return FormattedTime;
    },
    FormattedTimeParts: function () {
      return FormattedTimeParts;
    },
    IntlContext: function () {
      return Context;
    },
    IntlProvider: function () {
      return provider_default;
    },
    InvalidConfigError: function () {
      return InvalidConfigError;
    },
    MessageFormatError: function () {
      return MessageFormatError;
    },
    MissingDataError: function () {
      return MissingDataError;
    },
    MissingTranslationError: function () {
      return MissingTranslationError;
    },
    RawIntlProvider: function () {
      return Provider;
    },
    ReactIntlError: function () {
      return IntlError;
    },
    ReactIntlErrorCode: function () {
      return IntlErrorCode;
    },
    UnsupportedFormatterError: function () {
      return UnsupportedFormatterError;
    },
    createIntl: function () {
      return createIntl2;
    },
    createIntlCache: function () {
      return createIntlCache;
    },
    defineMessage: function () {
      return defineMessage;
    },
    defineMessages: function () {
      return defineMessages;
    },
    injectIntl: function () {
      return injectIntl;
    },
    useIntl: function () {
      return useIntl;
    },
  });

  // node_modules/tslib/tslib.es6.js
  var extendStatics = function (d, b) {
    extendStatics =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (d2, b2) {
          d2.__proto__ = b2;
        }) ||
      function (d2, b2) {
        for (var p in b2)
          if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
      };
    return extendStatics(d, b);
  };
  function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError(
        "Class extends value " + String(b) + " is not a constructor or null"
      );
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype =
      b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
  }
  var __assign = function () {
    __assign =
      Object.assign ||
      function __assign2(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
  function __rest(s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]];
      }
    return t;
  }
  function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  }

  // bazel-out/darwin-fastbuild/bin/packages/react-intl/lib/src/components/createFormattedComponent.js
  var React4 = __toESM(window.React);

  // bazel-out/darwin-fastbuild/bin/packages/react-intl/lib/src/components/useIntl.js
  var React3 = __toESM(window.React);

  // bazel-out/darwin-fastbuild/bin/packages/react-intl/lib/src/components/injectIntl.js
  var React2 = __toESM(window.React);
  var import_hoist_non_react_statics = __toESM(
    require_hoist_non_react_statics_cjs()
  );

  // bazel-out/darwin-fastbuild/bin/packages/react-intl/lib/src/utils.js
  var React = __toESM(window.React);

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/utils.js
  function invariant(condition, message, Err) {
    if (Err === void 0) {
      Err = Error;
    }
    if (!condition) {
      throw new Err(message);
    }
  }

  // bazel-out/darwin-fastbuild/bin/packages/icu-messageformat-parser/lib/error.js
  var ErrorKind;
  (function (ErrorKind2) {
    ErrorKind2[(ErrorKind2["EXPECT_ARGUMENT_CLOSING_BRACE"] = 1)] =
      "EXPECT_ARGUMENT_CLOSING_BRACE";
    ErrorKind2[(ErrorKind2["EMPTY_ARGUMENT"] = 2)] = "EMPTY_ARGUMENT";
    ErrorKind2[(ErrorKind2["MALFORMED_ARGUMENT"] = 3)] = "MALFORMED_ARGUMENT";
    ErrorKind2[(ErrorKind2["EXPECT_ARGUMENT_TYPE"] = 4)] =
      "EXPECT_ARGUMENT_TYPE";
    ErrorKind2[(ErrorKind2["INVALID_ARGUMENT_TYPE"] = 5)] =
      "INVALID_ARGUMENT_TYPE";
    ErrorKind2[(ErrorKind2["EXPECT_ARGUMENT_STYLE"] = 6)] =
      "EXPECT_ARGUMENT_STYLE";
    ErrorKind2[(ErrorKind2["INVALID_NUMBER_SKELETON"] = 7)] =
      "INVALID_NUMBER_SKELETON";
    ErrorKind2[(ErrorKind2["INVALID_DATE_TIME_SKELETON"] = 8)] =
      "INVALID_DATE_TIME_SKELETON";
    ErrorKind2[(ErrorKind2["EXPECT_NUMBER_SKELETON"] = 9)] =
      "EXPECT_NUMBER_SKELETON";
    ErrorKind2[(ErrorKind2["EXPECT_DATE_TIME_SKELETON"] = 10)] =
      "EXPECT_DATE_TIME_SKELETON";
    ErrorKind2[(ErrorKind2["UNCLOSED_QUOTE_IN_ARGUMENT_STYLE"] = 11)] =
      "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE";
    ErrorKind2[(ErrorKind2["EXPECT_SELECT_ARGUMENT_OPTIONS"] = 12)] =
      "EXPECT_SELECT_ARGUMENT_OPTIONS";
    ErrorKind2[(ErrorKind2["EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE"] = 13)] =
      "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE";
    ErrorKind2[(ErrorKind2["INVALID_PLURAL_ARGUMENT_OFFSET_VALUE"] = 14)] =
      "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE";
    ErrorKind2[(ErrorKind2["EXPECT_SELECT_ARGUMENT_SELECTOR"] = 15)] =
      "EXPECT_SELECT_ARGUMENT_SELECTOR";
    ErrorKind2[(ErrorKind2["EXPECT_PLURAL_ARGUMENT_SELECTOR"] = 16)] =
      "EXPECT_PLURAL_ARGUMENT_SELECTOR";
    ErrorKind2[(ErrorKind2["EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT"] = 17)] =
      "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT";
    ErrorKind2[(ErrorKind2["EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT"] = 18)] =
      "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT";
    ErrorKind2[(ErrorKind2["INVALID_PLURAL_ARGUMENT_SELECTOR"] = 19)] =
      "INVALID_PLURAL_ARGUMENT_SELECTOR";
    ErrorKind2[(ErrorKind2["DUPLICATE_PLURAL_ARGUMENT_SELECTOR"] = 20)] =
      "DUPLICATE_PLURAL_ARGUMENT_SELECTOR";
    ErrorKind2[(ErrorKind2["DUPLICATE_SELECT_ARGUMENT_SELECTOR"] = 21)] =
      "DUPLICATE_SELECT_ARGUMENT_SELECTOR";
    ErrorKind2[(ErrorKind2["MISSING_OTHER_CLAUSE"] = 22)] =
      "MISSING_OTHER_CLAUSE";
    ErrorKind2[(ErrorKind2["INVALID_TAG"] = 23)] = "INVALID_TAG";
    ErrorKind2[(ErrorKind2["INVALID_TAG_NAME"] = 25)] = "INVALID_TAG_NAME";
    ErrorKind2[(ErrorKind2["UNMATCHED_CLOSING_TAG"] = 26)] =
      "UNMATCHED_CLOSING_TAG";
    ErrorKind2[(ErrorKind2["UNCLOSED_TAG"] = 27)] = "UNCLOSED_TAG";
  })(ErrorKind || (ErrorKind = {}));

  // bazel-out/darwin-fastbuild/bin/packages/icu-messageformat-parser/lib/types.js
  var TYPE;
  (function (TYPE2) {
    TYPE2[(TYPE2["literal"] = 0)] = "literal";
    TYPE2[(TYPE2["argument"] = 1)] = "argument";
    TYPE2[(TYPE2["number"] = 2)] = "number";
    TYPE2[(TYPE2["date"] = 3)] = "date";
    TYPE2[(TYPE2["time"] = 4)] = "time";
    TYPE2[(TYPE2["select"] = 5)] = "select";
    TYPE2[(TYPE2["plural"] = 6)] = "plural";
    TYPE2[(TYPE2["pound"] = 7)] = "pound";
    TYPE2[(TYPE2["tag"] = 8)] = "tag";
  })(TYPE || (TYPE = {}));
  var SKELETON_TYPE;
  (function (SKELETON_TYPE2) {
    SKELETON_TYPE2[(SKELETON_TYPE2["number"] = 0)] = "number";
    SKELETON_TYPE2[(SKELETON_TYPE2["dateTime"] = 1)] = "dateTime";
  })(SKELETON_TYPE || (SKELETON_TYPE = {}));
  function isLiteralElement(el) {
    return el.type === TYPE.literal;
  }
  function isArgumentElement(el) {
    return el.type === TYPE.argument;
  }
  function isNumberElement(el) {
    return el.type === TYPE.number;
  }
  function isDateElement(el) {
    return el.type === TYPE.date;
  }
  function isTimeElement(el) {
    return el.type === TYPE.time;
  }
  function isSelectElement(el) {
    return el.type === TYPE.select;
  }
  function isPluralElement(el) {
    return el.type === TYPE.plural;
  }
  function isPoundElement(el) {
    return el.type === TYPE.pound;
  }
  function isTagElement(el) {
    return el.type === TYPE.tag;
  }
  function isNumberSkeleton(el) {
    return !!(el && typeof el === "object" && el.type === SKELETON_TYPE.number);
  }
  function isDateTimeSkeleton(el) {
    return !!(
      el &&
      typeof el === "object" &&
      el.type === SKELETON_TYPE.dateTime
    );
  }

  // bazel-out/darwin-fastbuild/bin/packages/icu-messageformat-parser/lib/regex.generated.js
  var SPACE_SEPARATOR_REGEX = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/;

  // bazel-out/darwin-fastbuild/bin/packages/icu-skeleton-parser/lib/date-time.js
  var DATE_TIME_REGEX =
    /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
  function parseDateTimeSkeleton(skeleton) {
    var result = {};
    skeleton.replace(DATE_TIME_REGEX, function (match) {
      var len = match.length;
      switch (match[0]) {
        case "G":
          result.era = len === 4 ? "long" : len === 5 ? "narrow" : "short";
          break;
        case "y":
          result.year = len === 2 ? "2-digit" : "numeric";
          break;
        case "Y":
        case "u":
        case "U":
        case "r":
          throw new RangeError(
            "`Y/u/U/r` (year) patterns are not supported, use `y` instead"
          );
        case "q":
        case "Q":
          throw new RangeError("`q/Q` (quarter) patterns are not supported");
        case "M":
        case "L":
          result.month = ["numeric", "2-digit", "short", "long", "narrow"][
            len - 1
          ];
          break;
        case "w":
        case "W":
          throw new RangeError("`w/W` (week) patterns are not supported");
        case "d":
          result.day = ["numeric", "2-digit"][len - 1];
          break;
        case "D":
        case "F":
        case "g":
          throw new RangeError(
            "`D/F/g` (day) patterns are not supported, use `d` instead"
          );
        case "E":
          result.weekday = len === 4 ? "short" : len === 5 ? "narrow" : "short";
          break;
        case "e":
          if (len < 4) {
            throw new RangeError(
              "`e..eee` (weekday) patterns are not supported"
            );
          }
          result.weekday = ["short", "long", "narrow", "short"][len - 4];
          break;
        case "c":
          if (len < 4) {
            throw new RangeError(
              "`c..ccc` (weekday) patterns are not supported"
            );
          }
          result.weekday = ["short", "long", "narrow", "short"][len - 4];
          break;
        case "a":
          result.hour12 = true;
          break;
        case "b":
        case "B":
          throw new RangeError(
            "`b/B` (period) patterns are not supported, use `a` instead"
          );
        case "h":
          result.hourCycle = "h12";
          result.hour = ["numeric", "2-digit"][len - 1];
          break;
        case "H":
          result.hourCycle = "h23";
          result.hour = ["numeric", "2-digit"][len - 1];
          break;
        case "K":
          result.hourCycle = "h11";
          result.hour = ["numeric", "2-digit"][len - 1];
          break;
        case "k":
          result.hourCycle = "h24";
          result.hour = ["numeric", "2-digit"][len - 1];
          break;
        case "j":
        case "J":
        case "C":
          throw new RangeError(
            "`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead"
          );
        case "m":
          result.minute = ["numeric", "2-digit"][len - 1];
          break;
        case "s":
          result.second = ["numeric", "2-digit"][len - 1];
          break;
        case "S":
        case "A":
          throw new RangeError(
            "`S/A` (second) patterns are not supported, use `s` instead"
          );
        case "z":
          result.timeZoneName = len < 4 ? "short" : "long";
          break;
        case "Z":
        case "O":
        case "v":
        case "V":
        case "X":
        case "x":
          throw new RangeError(
            "`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead"
          );
      }
      return "";
    });
    return result;
  }

  // bazel-out/darwin-fastbuild/bin/packages/icu-skeleton-parser/lib/regex.generated.js
  var WHITE_SPACE_REGEX = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;

  // bazel-out/darwin-fastbuild/bin/packages/icu-skeleton-parser/lib/number.js
  function parseNumberSkeletonFromString(skeleton) {
    if (skeleton.length === 0) {
      throw new Error("Number skeleton cannot be empty");
    }
    var stringTokens = skeleton.split(WHITE_SPACE_REGEX).filter(function (x) {
      return x.length > 0;
    });
    var tokens = [];
    for (
      var _i = 0, stringTokens_1 = stringTokens;
      _i < stringTokens_1.length;
      _i++
    ) {
      var stringToken = stringTokens_1[_i];
      var stemAndOptions = stringToken.split("/");
      if (stemAndOptions.length === 0) {
        throw new Error("Invalid number skeleton");
      }
      var stem = stemAndOptions[0],
        options = stemAndOptions.slice(1);
      for (var _a2 = 0, options_1 = options; _a2 < options_1.length; _a2++) {
        var option = options_1[_a2];
        if (option.length === 0) {
          throw new Error("Invalid number skeleton");
        }
      }
      tokens.push({ stem: stem, options: options });
    }
    return tokens;
  }
  function icuUnitToEcma(unit) {
    return unit.replace(/^(.*?)-/, "");
  }
  var FRACTION_PRECISION_REGEX = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g;
  var SIGNIFICANT_PRECISION_REGEX = /^(@+)?(\+|#+)?[rs]?$/g;
  var INTEGER_WIDTH_REGEX = /(\*)(0+)|(#+)(0+)|(0+)/g;
  var CONCISE_INTEGER_WIDTH_REGEX = /^(0+)$/;
  function parseSignificantPrecision(str) {
    var result = {};
    if (str[str.length - 1] === "r") {
      result.roundingPriority = "morePrecision";
    } else if (str[str.length - 1] === "s") {
      result.roundingPriority = "lessPrecision";
    }
    str.replace(SIGNIFICANT_PRECISION_REGEX, function (_, g1, g2) {
      if (typeof g2 !== "string") {
        result.minimumSignificantDigits = g1.length;
        result.maximumSignificantDigits = g1.length;
      } else if (g2 === "+") {
        result.minimumSignificantDigits = g1.length;
      } else if (g1[0] === "#") {
        result.maximumSignificantDigits = g1.length;
      } else {
        result.minimumSignificantDigits = g1.length;
        result.maximumSignificantDigits =
          g1.length + (typeof g2 === "string" ? g2.length : 0);
      }
      return "";
    });
    return result;
  }
  function parseSign(str) {
    switch (str) {
      case "sign-auto":
        return {
          signDisplay: "auto",
        };
      case "sign-accounting":
      case "()":
        return {
          currencySign: "accounting",
        };
      case "sign-always":
      case "+!":
        return {
          signDisplay: "always",
        };
      case "sign-accounting-always":
      case "()!":
        return {
          signDisplay: "always",
          currencySign: "accounting",
        };
      case "sign-except-zero":
      case "+?":
        return {
          signDisplay: "exceptZero",
        };
      case "sign-accounting-except-zero":
      case "()?":
        return {
          signDisplay: "exceptZero",
          currencySign: "accounting",
        };
      case "sign-never":
      case "+_":
        return {
          signDisplay: "never",
        };
    }
  }
  function parseConciseScientificAndEngineeringStem(stem) {
    var result;
    if (stem[0] === "E" && stem[1] === "E") {
      result = {
        notation: "engineering",
      };
      stem = stem.slice(2);
    } else if (stem[0] === "E") {
      result = {
        notation: "scientific",
      };
      stem = stem.slice(1);
    }
    if (result) {
      var signDisplay = stem.slice(0, 2);
      if (signDisplay === "+!") {
        result.signDisplay = "always";
        stem = stem.slice(2);
      } else if (signDisplay === "+?") {
        result.signDisplay = "exceptZero";
        stem = stem.slice(2);
      }
      if (!CONCISE_INTEGER_WIDTH_REGEX.test(stem)) {
        throw new Error("Malformed concise eng/scientific notation");
      }
      result.minimumIntegerDigits = stem.length;
    }
    return result;
  }
  function parseNotationOptions(opt) {
    var result = {};
    var signOpts = parseSign(opt);
    if (signOpts) {
      return signOpts;
    }
    return result;
  }
  function parseNumberSkeleton(tokens) {
    var result = {};
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
      var token = tokens_1[_i];
      switch (token.stem) {
        case "percent":
        case "%":
          result.style = "percent";
          continue;
        case "%x100":
          result.style = "percent";
          result.scale = 100;
          continue;
        case "currency":
          result.style = "currency";
          result.currency = token.options[0];
          continue;
        case "group-off":
        case ",_":
          result.useGrouping = false;
          continue;
        case "precision-integer":
        case ".":
          result.maximumFractionDigits = 0;
          continue;
        case "measure-unit":
        case "unit":
          result.style = "unit";
          result.unit = icuUnitToEcma(token.options[0]);
          continue;
        case "compact-short":
        case "K":
          result.notation = "compact";
          result.compactDisplay = "short";
          continue;
        case "compact-long":
        case "KK":
          result.notation = "compact";
          result.compactDisplay = "long";
          continue;
        case "scientific":
          result = __assign(
            __assign(__assign({}, result), { notation: "scientific" }),
            token.options.reduce(function (all, opt2) {
              return __assign(__assign({}, all), parseNotationOptions(opt2));
            }, {})
          );
          continue;
        case "engineering":
          result = __assign(
            __assign(__assign({}, result), { notation: "engineering" }),
            token.options.reduce(function (all, opt2) {
              return __assign(__assign({}, all), parseNotationOptions(opt2));
            }, {})
          );
          continue;
        case "notation-simple":
          result.notation = "standard";
          continue;
        case "unit-width-narrow":
          result.currencyDisplay = "narrowSymbol";
          result.unitDisplay = "narrow";
          continue;
        case "unit-width-short":
          result.currencyDisplay = "code";
          result.unitDisplay = "short";
          continue;
        case "unit-width-full-name":
          result.currencyDisplay = "name";
          result.unitDisplay = "long";
          continue;
        case "unit-width-iso-code":
          result.currencyDisplay = "symbol";
          continue;
        case "scale":
          result.scale = parseFloat(token.options[0]);
          continue;
        case "integer-width":
          if (token.options.length > 1) {
            throw new RangeError(
              "integer-width stems only accept a single optional option"
            );
          }
          token.options[0].replace(
            INTEGER_WIDTH_REGEX,
            function (_, g1, g2, g3, g4, g5) {
              if (g1) {
                result.minimumIntegerDigits = g2.length;
              } else if (g3 && g4) {
                throw new Error(
                  "We currently do not support maximum integer digits"
                );
              } else if (g5) {
                throw new Error(
                  "We currently do not support exact integer digits"
                );
              }
              return "";
            }
          );
          continue;
      }
      if (CONCISE_INTEGER_WIDTH_REGEX.test(token.stem)) {
        result.minimumIntegerDigits = token.stem.length;
        continue;
      }
      if (FRACTION_PRECISION_REGEX.test(token.stem)) {
        if (token.options.length > 1) {
          throw new RangeError(
            "Fraction-precision stems only accept a single optional option"
          );
        }
        token.stem.replace(
          FRACTION_PRECISION_REGEX,
          function (_, g1, g2, g3, g4, g5) {
            if (g2 === "*") {
              result.minimumFractionDigits = g1.length;
            } else if (g3 && g3[0] === "#") {
              result.maximumFractionDigits = g3.length;
            } else if (g4 && g5) {
              result.minimumFractionDigits = g4.length;
              result.maximumFractionDigits = g4.length + g5.length;
            } else {
              result.minimumFractionDigits = g1.length;
              result.maximumFractionDigits = g1.length;
            }
            return "";
          }
        );
        var opt = token.options[0];
        if (opt === "w") {
          result = __assign(__assign({}, result), {
            trailingZeroDisplay: "stripIfInteger",
          });
        } else if (opt) {
          result = __assign(
            __assign({}, result),
            parseSignificantPrecision(opt)
          );
        }
        continue;
      }
      if (SIGNIFICANT_PRECISION_REGEX.test(token.stem)) {
        result = __assign(
          __assign({}, result),
          parseSignificantPrecision(token.stem)
        );
        continue;
      }
      var signOpts = parseSign(token.stem);
      if (signOpts) {
        result = __assign(__assign({}, result), signOpts);
      }
      var conciseScientificAndEngineeringOpts =
        parseConciseScientificAndEngineeringStem(token.stem);
      if (conciseScientificAndEngineeringOpts) {
        result = __assign(
          __assign({}, result),
          conciseScientificAndEngineeringOpts
        );
      }
    }
    return result;
  }

  // bazel-out/darwin-fastbuild/bin/packages/icu-messageformat-parser/lib/time-data.generated.js
  var timeData = {
    AX: ["H"],
    BQ: ["H"],
    CP: ["H"],
    CZ: ["H"],
    DK: ["H"],
    FI: ["H"],
    ID: ["H"],
    IS: ["H"],
    ML: ["H"],
    NE: ["H"],
    RU: ["H"],
    SE: ["H"],
    SJ: ["H"],
    SK: ["H"],
    AS: ["h", "H"],
    BT: ["h", "H"],
    DJ: ["h", "H"],
    ER: ["h", "H"],
    GH: ["h", "H"],
    IN: ["h", "H"],
    LS: ["h", "H"],
    PG: ["h", "H"],
    PW: ["h", "H"],
    SO: ["h", "H"],
    TO: ["h", "H"],
    VU: ["h", "H"],
    WS: ["h", "H"],
    "001": ["H", "h"],
    AL: ["h", "H", "hB"],
    TD: ["h", "H", "hB"],
    "ca-ES": ["H", "h", "hB"],
    CF: ["H", "h", "hB"],
    CM: ["H", "h", "hB"],
    "fr-CA": ["H", "h", "hB"],
    "gl-ES": ["H", "h", "hB"],
    "it-CH": ["H", "h", "hB"],
    "it-IT": ["H", "h", "hB"],
    LU: ["H", "h", "hB"],
    NP: ["H", "h", "hB"],
    PF: ["H", "h", "hB"],
    SC: ["H", "h", "hB"],
    SM: ["H", "h", "hB"],
    SN: ["H", "h", "hB"],
    TF: ["H", "h", "hB"],
    VA: ["H", "h", "hB"],
    CY: ["h", "H", "hb", "hB"],
    GR: ["h", "H", "hb", "hB"],
    CO: ["h", "H", "hB", "hb"],
    DO: ["h", "H", "hB", "hb"],
    KP: ["h", "H", "hB", "hb"],
    KR: ["h", "H", "hB", "hb"],
    NA: ["h", "H", "hB", "hb"],
    PA: ["h", "H", "hB", "hb"],
    PR: ["h", "H", "hB", "hb"],
    VE: ["h", "H", "hB", "hb"],
    AC: ["H", "h", "hb", "hB"],
    AI: ["H", "h", "hb", "hB"],
    BW: ["H", "h", "hb", "hB"],
    BZ: ["H", "h", "hb", "hB"],
    CC: ["H", "h", "hb", "hB"],
    CK: ["H", "h", "hb", "hB"],
    CX: ["H", "h", "hb", "hB"],
    DG: ["H", "h", "hb", "hB"],
    FK: ["H", "h", "hb", "hB"],
    GB: ["H", "h", "hb", "hB"],
    GG: ["H", "h", "hb", "hB"],
    GI: ["H", "h", "hb", "hB"],
    IE: ["H", "h", "hb", "hB"],
    IM: ["H", "h", "hb", "hB"],
    IO: ["H", "h", "hb", "hB"],
    JE: ["H", "h", "hb", "hB"],
    LT: ["H", "h", "hb", "hB"],
    MK: ["H", "h", "hb", "hB"],
    MN: ["H", "h", "hb", "hB"],
    MS: ["H", "h", "hb", "hB"],
    NF: ["H", "h", "hb", "hB"],
    NG: ["H", "h", "hb", "hB"],
    NR: ["H", "h", "hb", "hB"],
    NU: ["H", "h", "hb", "hB"],
    PN: ["H", "h", "hb", "hB"],
    SH: ["H", "h", "hb", "hB"],
    SX: ["H", "h", "hb", "hB"],
    TA: ["H", "h", "hb", "hB"],
    ZA: ["H", "h", "hb", "hB"],
    "af-ZA": ["H", "h", "hB", "hb"],
    AR: ["H", "h", "hB", "hb"],
    CL: ["H", "h", "hB", "hb"],
    CR: ["H", "h", "hB", "hb"],
    CU: ["H", "h", "hB", "hb"],
    EA: ["H", "h", "hB", "hb"],
    "es-BO": ["H", "h", "hB", "hb"],
    "es-BR": ["H", "h", "hB", "hb"],
    "es-EC": ["H", "h", "hB", "hb"],
    "es-ES": ["H", "h", "hB", "hb"],
    "es-GQ": ["H", "h", "hB", "hb"],
    "es-PE": ["H", "h", "hB", "hb"],
    GT: ["H", "h", "hB", "hb"],
    HN: ["H", "h", "hB", "hb"],
    IC: ["H", "h", "hB", "hb"],
    KG: ["H", "h", "hB", "hb"],
    KM: ["H", "h", "hB", "hb"],
    LK: ["H", "h", "hB", "hb"],
    MA: ["H", "h", "hB", "hb"],
    MX: ["H", "h", "hB", "hb"],
    NI: ["H", "h", "hB", "hb"],
    PY: ["H", "h", "hB", "hb"],
    SV: ["H", "h", "hB", "hb"],
    UY: ["H", "h", "hB", "hb"],
    JP: ["H", "h", "K"],
    AD: ["H", "hB"],
    AM: ["H", "hB"],
    AO: ["H", "hB"],
    AT: ["H", "hB"],
    AW: ["H", "hB"],
    BE: ["H", "hB"],
    BF: ["H", "hB"],
    BJ: ["H", "hB"],
    BL: ["H", "hB"],
    BR: ["H", "hB"],
    CG: ["H", "hB"],
    CI: ["H", "hB"],
    CV: ["H", "hB"],
    DE: ["H", "hB"],
    EE: ["H", "hB"],
    FR: ["H", "hB"],
    GA: ["H", "hB"],
    GF: ["H", "hB"],
    GN: ["H", "hB"],
    GP: ["H", "hB"],
    GW: ["H", "hB"],
    HR: ["H", "hB"],
    IL: ["H", "hB"],
    IT: ["H", "hB"],
    KZ: ["H", "hB"],
    MC: ["H", "hB"],
    MD: ["H", "hB"],
    MF: ["H", "hB"],
    MQ: ["H", "hB"],
    MZ: ["H", "hB"],
    NC: ["H", "hB"],
    NL: ["H", "hB"],
    PM: ["H", "hB"],
    PT: ["H", "hB"],
    RE: ["H", "hB"],
    RO: ["H", "hB"],
    SI: ["H", "hB"],
    SR: ["H", "hB"],
    ST: ["H", "hB"],
    TG: ["H", "hB"],
    TR: ["H", "hB"],
    WF: ["H", "hB"],
    YT: ["H", "hB"],
    BD: ["h", "hB", "H"],
    PK: ["h", "hB", "H"],
    AZ: ["H", "hB", "h"],
    BA: ["H", "hB", "h"],
    BG: ["H", "hB", "h"],
    CH: ["H", "hB", "h"],
    GE: ["H", "hB", "h"],
    LI: ["H", "hB", "h"],
    ME: ["H", "hB", "h"],
    RS: ["H", "hB", "h"],
    UA: ["H", "hB", "h"],
    UZ: ["H", "hB", "h"],
    XK: ["H", "hB", "h"],
    AG: ["h", "hb", "H", "hB"],
    AU: ["h", "hb", "H", "hB"],
    BB: ["h", "hb", "H", "hB"],
    BM: ["h", "hb", "H", "hB"],
    BS: ["h", "hb", "H", "hB"],
    CA: ["h", "hb", "H", "hB"],
    DM: ["h", "hb", "H", "hB"],
    "en-001": ["h", "hb", "H", "hB"],
    FJ: ["h", "hb", "H", "hB"],
    FM: ["h", "hb", "H", "hB"],
    GD: ["h", "hb", "H", "hB"],
    GM: ["h", "hb", "H", "hB"],
    GU: ["h", "hb", "H", "hB"],
    GY: ["h", "hb", "H", "hB"],
    JM: ["h", "hb", "H", "hB"],
    KI: ["h", "hb", "H", "hB"],
    KN: ["h", "hb", "H", "hB"],
    KY: ["h", "hb", "H", "hB"],
    LC: ["h", "hb", "H", "hB"],
    LR: ["h", "hb", "H", "hB"],
    MH: ["h", "hb", "H", "hB"],
    MP: ["h", "hb", "H", "hB"],
    MW: ["h", "hb", "H", "hB"],
    NZ: ["h", "hb", "H", "hB"],
    SB: ["h", "hb", "H", "hB"],
    SG: ["h", "hb", "H", "hB"],
    SL: ["h", "hb", "H", "hB"],
    SS: ["h", "hb", "H", "hB"],
    SZ: ["h", "hb", "H", "hB"],
    TC: ["h", "hb", "H", "hB"],
    TT: ["h", "hb", "H", "hB"],
    UM: ["h", "hb", "H", "hB"],
    US: ["h", "hb", "H", "hB"],
    VC: ["h", "hb", "H", "hB"],
    VG: ["h", "hb", "H", "hB"],
    VI: ["h", "hb", "H", "hB"],
    ZM: ["h", "hb", "H", "hB"],
    BO: ["H", "hB", "h", "hb"],
    EC: ["H", "hB", "h", "hb"],
    ES: ["H", "hB", "h", "hb"],
    GQ: ["H", "hB", "h", "hb"],
    PE: ["H", "hB", "h", "hb"],
    AE: ["h", "hB", "hb", "H"],
    "ar-001": ["h", "hB", "hb", "H"],
    BH: ["h", "hB", "hb", "H"],
    DZ: ["h", "hB", "hb", "H"],
    EG: ["h", "hB", "hb", "H"],
    EH: ["h", "hB", "hb", "H"],
    HK: ["h", "hB", "hb", "H"],
    IQ: ["h", "hB", "hb", "H"],
    JO: ["h", "hB", "hb", "H"],
    KW: ["h", "hB", "hb", "H"],
    LB: ["h", "hB", "hb", "H"],
    LY: ["h", "hB", "hb", "H"],
    MO: ["h", "hB", "hb", "H"],
    MR: ["h", "hB", "hb", "H"],
    OM: ["h", "hB", "hb", "H"],
    PH: ["h", "hB", "hb", "H"],
    PS: ["h", "hB", "hb", "H"],
    QA: ["h", "hB", "hb", "H"],
    SA: ["h", "hB", "hb", "H"],
    SD: ["h", "hB", "hb", "H"],
    SY: ["h", "hB", "hb", "H"],
    TN: ["h", "hB", "hb", "H"],
    YE: ["h", "hB", "hb", "H"],
    AF: ["H", "hb", "hB", "h"],
    LA: ["H", "hb", "hB", "h"],
    CN: ["H", "hB", "hb", "h"],
    LV: ["H", "hB", "hb", "h"],
    TL: ["H", "hB", "hb", "h"],
    "zu-ZA": ["H", "hB", "hb", "h"],
    CD: ["hB", "H"],
    IR: ["hB", "H"],
    "hi-IN": ["hB", "h", "H"],
    "kn-IN": ["hB", "h", "H"],
    "ml-IN": ["hB", "h", "H"],
    "te-IN": ["hB", "h", "H"],
    KH: ["hB", "h", "H", "hb"],
    "ta-IN": ["hB", "h", "hb", "H"],
    BN: ["hb", "hB", "h", "H"],
    MY: ["hb", "hB", "h", "H"],
    ET: ["hB", "hb", "h", "H"],
    "gu-IN": ["hB", "hb", "h", "H"],
    "mr-IN": ["hB", "hb", "h", "H"],
    "pa-IN": ["hB", "hb", "h", "H"],
    TW: ["hB", "hb", "h", "H"],
    KE: ["hB", "hb", "H", "h"],
    MM: ["hB", "hb", "H", "h"],
    TZ: ["hB", "hb", "H", "h"],
    UG: ["hB", "hb", "H", "h"],
  };

  // bazel-out/darwin-fastbuild/bin/packages/icu-messageformat-parser/lib/date-time-pattern-generator.js
  function getBestPattern(skeleton, locale) {
    var skeletonCopy = "";
    for (var patternPos = 0; patternPos < skeleton.length; patternPos++) {
      var patternChar = skeleton.charAt(patternPos);
      if (patternChar === "j") {
        var extraLength = 0;
        while (
          patternPos + 1 < skeleton.length &&
          skeleton.charAt(patternPos + 1) === patternChar
        ) {
          extraLength++;
          patternPos++;
        }
        var hourLen = 1 + (extraLength & 1);
        var dayPeriodLen = extraLength < 2 ? 1 : 3 + (extraLength >> 1);
        var dayPeriodChar = "a";
        var hourChar = getDefaultHourSymbolFromLocale(locale);
        if (hourChar == "H" || hourChar == "k") {
          dayPeriodLen = 0;
        }
        while (dayPeriodLen-- > 0) {
          skeletonCopy += dayPeriodChar;
        }
        while (hourLen-- > 0) {
          skeletonCopy = hourChar + skeletonCopy;
        }
      } else if (patternChar === "J") {
        skeletonCopy += "H";
      } else {
        skeletonCopy += patternChar;
      }
    }
    return skeletonCopy;
  }
  function getDefaultHourSymbolFromLocale(locale) {
    var hourCycle = locale.hourCycle;
    if (hourCycle === void 0 && locale.hourCycles && locale.hourCycles.length) {
      hourCycle = locale.hourCycles[0];
    }
    if (hourCycle) {
      switch (hourCycle) {
        case "h24":
          return "k";
        case "h23":
          return "H";
        case "h12":
          return "h";
        case "h11":
          return "K";
        default:
          throw new Error("Invalid hourCycle");
      }
    }
    var languageTag = locale.language;
    var regionTag;
    if (languageTag !== "root") {
      regionTag = locale.maximize().region;
    }
    var hourCycles =
      timeData[regionTag || ""] ||
      timeData[languageTag || ""] ||
      timeData["".concat(languageTag, "-001")] ||
      timeData["001"];
    return hourCycles[0];
  }

  // bazel-out/darwin-fastbuild/bin/packages/icu-messageformat-parser/lib/parser.js
  var _a;
  var SPACE_SEPARATOR_START_REGEX = new RegExp(
    "^".concat(SPACE_SEPARATOR_REGEX.source, "*")
  );
  var SPACE_SEPARATOR_END_REGEX = new RegExp(
    "".concat(SPACE_SEPARATOR_REGEX.source, "*$")
  );
  function createLocation(start, end) {
    return { start: start, end: end };
  }
  var hasNativeStartsWith = !!String.prototype.startsWith;
  var hasNativeFromCodePoint = !!String.fromCodePoint;
  var hasNativeFromEntries = !!Object.fromEntries;
  var hasNativeCodePointAt = !!String.prototype.codePointAt;
  var hasTrimStart = !!String.prototype.trimStart;
  var hasTrimEnd = !!String.prototype.trimEnd;
  var hasNativeIsSafeInteger = !!Number.isSafeInteger;
  var isSafeInteger = hasNativeIsSafeInteger
    ? Number.isSafeInteger
    : function (n) {
        return (
          typeof n === "number" &&
          isFinite(n) &&
          Math.floor(n) === n &&
          Math.abs(n) <= 9007199254740991
        );
      };
  var REGEX_SUPPORTS_U_AND_Y = true;
  try {
    re = RE("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
    REGEX_SUPPORTS_U_AND_Y =
      ((_a = re.exec("a")) === null || _a === void 0 ? void 0 : _a[0]) === "a";
  } catch (_) {
    REGEX_SUPPORTS_U_AND_Y = false;
  }
  var re;
  var startsWith = hasNativeStartsWith
    ? function startsWith2(s, search, position) {
        return s.startsWith(search, position);
      }
    : function startsWith3(s, search, position) {
        return s.slice(position, position + search.length) === search;
      };
  var fromCodePoint = hasNativeFromCodePoint
    ? String.fromCodePoint
    : function fromCodePoint2() {
        var codePoints = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          codePoints[_i] = arguments[_i];
        }
        var elements = "";
        var length = codePoints.length;
        var i = 0;
        var code;
        while (length > i) {
          code = codePoints[i++];
          if (code > 1114111)
            throw RangeError(code + " is not a valid code point");
          elements +=
            code < 65536
              ? String.fromCharCode(code)
              : String.fromCharCode(
                  ((code -= 65536) >> 10) + 55296,
                  (code % 1024) + 56320
                );
        }
        return elements;
      };
  var fromEntries = hasNativeFromEntries
    ? Object.fromEntries
    : function fromEntries2(entries) {
        var obj = {};
        for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
          var _a2 = entries_1[_i],
            k = _a2[0],
            v = _a2[1];
          obj[k] = v;
        }
        return obj;
      };
  var codePointAt = hasNativeCodePointAt
    ? function codePointAt2(s, index) {
        return s.codePointAt(index);
      }
    : function codePointAt3(s, index) {
        var size = s.length;
        if (index < 0 || index >= size) {
          return void 0;
        }
        var first = s.charCodeAt(index);
        var second;
        return first < 55296 ||
          first > 56319 ||
          index + 1 === size ||
          (second = s.charCodeAt(index + 1)) < 56320 ||
          second > 57343
          ? first
          : ((first - 55296) << 10) + (second - 56320) + 65536;
      };
  var trimStart = hasTrimStart
    ? function trimStart2(s) {
        return s.trimStart();
      }
    : function trimStart3(s) {
        return s.replace(SPACE_SEPARATOR_START_REGEX, "");
      };
  var trimEnd = hasTrimEnd
    ? function trimEnd2(s) {
        return s.trimEnd();
      }
    : function trimEnd3(s) {
        return s.replace(SPACE_SEPARATOR_END_REGEX, "");
      };
  function RE(s, flag) {
    return new RegExp(s, flag);
  }
  var matchIdentifierAtIndex;
  if (REGEX_SUPPORTS_U_AND_Y) {
    IDENTIFIER_PREFIX_RE_1 = RE(
      "([^\\p{White_Space}\\p{Pattern_Syntax}]*)",
      "yu"
    );
    matchIdentifierAtIndex = function matchIdentifierAtIndex2(s, index) {
      var _a2;
      IDENTIFIER_PREFIX_RE_1.lastIndex = index;
      var match = IDENTIFIER_PREFIX_RE_1.exec(s);
      return (_a2 = match[1]) !== null && _a2 !== void 0 ? _a2 : "";
    };
  } else {
    matchIdentifierAtIndex = function matchIdentifierAtIndex2(s, index) {
      var match = [];
      while (true) {
        var c = codePointAt(s, index);
        if (c === void 0 || _isWhiteSpace(c) || _isPatternSyntax(c)) {
          break;
        }
        match.push(c);
        index += c >= 65536 ? 2 : 1;
      }
      return fromCodePoint.apply(void 0, match);
    };
  }
  var IDENTIFIER_PREFIX_RE_1;
  var Parser = (function () {
    function Parser2(message, options) {
      if (options === void 0) {
        options = {};
      }
      this.message = message;
      this.position = { offset: 0, line: 1, column: 1 };
      this.ignoreTag = !!options.ignoreTag;
      this.locale = options.locale;
      this.requiresOtherClause = !!options.requiresOtherClause;
      this.shouldParseSkeletons = !!options.shouldParseSkeletons;
    }
    Parser2.prototype.parse = function () {
      if (this.offset() !== 0) {
        throw Error("parser can only be used once");
      }
      return this.parseMessage(0, "", false);
    };
    Parser2.prototype.parseMessage = function (
      nestingLevel,
      parentArgType,
      expectingCloseTag
    ) {
      var elements = [];
      while (!this.isEOF()) {
        var char = this.char();
        if (char === 123) {
          var result = this.parseArgument(nestingLevel, expectingCloseTag);
          if (result.err) {
            return result;
          }
          elements.push(result.val);
        } else if (char === 125 && nestingLevel > 0) {
          break;
        } else if (
          char === 35 &&
          (parentArgType === "plural" || parentArgType === "selectordinal")
        ) {
          var position = this.clonePosition();
          this.bump();
          elements.push({
            type: TYPE.pound,
            location: createLocation(position, this.clonePosition()),
          });
        } else if (char === 60 && !this.ignoreTag && this.peek() === 47) {
          if (expectingCloseTag) {
            break;
          } else {
            return this.error(
              ErrorKind.UNMATCHED_CLOSING_TAG,
              createLocation(this.clonePosition(), this.clonePosition())
            );
          }
        } else if (
          char === 60 &&
          !this.ignoreTag &&
          _isAlpha(this.peek() || 0)
        ) {
          var result = this.parseTag(nestingLevel, parentArgType);
          if (result.err) {
            return result;
          }
          elements.push(result.val);
        } else {
          var result = this.parseLiteral(nestingLevel, parentArgType);
          if (result.err) {
            return result;
          }
          elements.push(result.val);
        }
      }
      return { val: elements, err: null };
    };
    Parser2.prototype.parseTag = function (nestingLevel, parentArgType) {
      var startPosition = this.clonePosition();
      this.bump();
      var tagName = this.parseTagName();
      this.bumpSpace();
      if (this.bumpIf("/>")) {
        return {
          val: {
            type: TYPE.literal,
            value: "<".concat(tagName, "/>"),
            location: createLocation(startPosition, this.clonePosition()),
          },
          err: null,
        };
      } else if (this.bumpIf(">")) {
        var childrenResult = this.parseMessage(
          nestingLevel + 1,
          parentArgType,
          true
        );
        if (childrenResult.err) {
          return childrenResult;
        }
        var children = childrenResult.val;
        var endTagStartPosition = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !_isAlpha(this.char())) {
            return this.error(
              ErrorKind.INVALID_TAG,
              createLocation(endTagStartPosition, this.clonePosition())
            );
          }
          var closingTagNameStartPosition = this.clonePosition();
          var closingTagName = this.parseTagName();
          if (tagName !== closingTagName) {
            return this.error(
              ErrorKind.UNMATCHED_CLOSING_TAG,
              createLocation(closingTagNameStartPosition, this.clonePosition())
            );
          }
          this.bumpSpace();
          if (!this.bumpIf(">")) {
            return this.error(
              ErrorKind.INVALID_TAG,
              createLocation(endTagStartPosition, this.clonePosition())
            );
          }
          return {
            val: {
              type: TYPE.tag,
              value: tagName,
              children: children,
              location: createLocation(startPosition, this.clonePosition()),
            },
            err: null,
          };
        } else {
          return this.error(
            ErrorKind.UNCLOSED_TAG,
            createLocation(startPosition, this.clonePosition())
          );
        }
      } else {
        return this.error(
          ErrorKind.INVALID_TAG,
          createLocation(startPosition, this.clonePosition())
        );
      }
    };
    Parser2.prototype.parseTagName = function () {
      var startOffset = this.offset();
      this.bump();
      while (!this.isEOF() && _isPotentialElementNameChar(this.char())) {
        this.bump();
      }
      return this.message.slice(startOffset, this.offset());
    };
    Parser2.prototype.parseLiteral = function (nestingLevel, parentArgType) {
      var start = this.clonePosition();
      var value = "";
      while (true) {
        var parseQuoteResult = this.tryParseQuote(parentArgType);
        if (parseQuoteResult) {
          value += parseQuoteResult;
          continue;
        }
        var parseUnquotedResult = this.tryParseUnquoted(
          nestingLevel,
          parentArgType
        );
        if (parseUnquotedResult) {
          value += parseUnquotedResult;
          continue;
        }
        var parseLeftAngleResult = this.tryParseLeftAngleBracket();
        if (parseLeftAngleResult) {
          value += parseLeftAngleResult;
          continue;
        }
        break;
      }
      var location = createLocation(start, this.clonePosition());
      return {
        val: { type: TYPE.literal, value: value, location: location },
        err: null,
      };
    };
    Parser2.prototype.tryParseLeftAngleBracket = function () {
      if (
        !this.isEOF() &&
        this.char() === 60 &&
        (this.ignoreTag || !_isAlphaOrSlash(this.peek() || 0))
      ) {
        this.bump();
        return "<";
      }
      return null;
    };
    Parser2.prototype.tryParseQuote = function (parentArgType) {
      if (this.isEOF() || this.char() !== 39) {
        return null;
      }
      switch (this.peek()) {
        case 39:
          this.bump();
          this.bump();
          return "'";
        case 123:
        case 60:
        case 62:
        case 125:
          break;
        case 35:
          if (parentArgType === "plural" || parentArgType === "selectordinal") {
            break;
          }
          return null;
        default:
          return null;
      }
      this.bump();
      var codePoints = [this.char()];
      this.bump();
      while (!this.isEOF()) {
        var ch = this.char();
        if (ch === 39) {
          if (this.peek() === 39) {
            codePoints.push(39);
            this.bump();
          } else {
            this.bump();
            break;
          }
        } else {
          codePoints.push(ch);
        }
        this.bump();
      }
      return fromCodePoint.apply(void 0, codePoints);
    };
    Parser2.prototype.tryParseUnquoted = function (
      nestingLevel,
      parentArgType
    ) {
      if (this.isEOF()) {
        return null;
      }
      var ch = this.char();
      if (
        ch === 60 ||
        ch === 123 ||
        (ch === 35 &&
          (parentArgType === "plural" || parentArgType === "selectordinal")) ||
        (ch === 125 && nestingLevel > 0)
      ) {
        return null;
      } else {
        this.bump();
        return fromCodePoint(ch);
      }
    };
    Parser2.prototype.parseArgument = function (
      nestingLevel,
      expectingCloseTag
    ) {
      var openingBracePosition = this.clonePosition();
      this.bump();
      this.bumpSpace();
      if (this.isEOF()) {
        return this.error(
          ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE,
          createLocation(openingBracePosition, this.clonePosition())
        );
      }
      if (this.char() === 125) {
        this.bump();
        return this.error(
          ErrorKind.EMPTY_ARGUMENT,
          createLocation(openingBracePosition, this.clonePosition())
        );
      }
      var value = this.parseIdentifierIfPossible().value;
      if (!value) {
        return this.error(
          ErrorKind.MALFORMED_ARGUMENT,
          createLocation(openingBracePosition, this.clonePosition())
        );
      }
      this.bumpSpace();
      if (this.isEOF()) {
        return this.error(
          ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE,
          createLocation(openingBracePosition, this.clonePosition())
        );
      }
      switch (this.char()) {
        case 125: {
          this.bump();
          return {
            val: {
              type: TYPE.argument,
              value: value,
              location: createLocation(
                openingBracePosition,
                this.clonePosition()
              ),
            },
            err: null,
          };
        }
        case 44: {
          this.bump();
          this.bumpSpace();
          if (this.isEOF()) {
            return this.error(
              ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE,
              createLocation(openingBracePosition, this.clonePosition())
            );
          }
          return this.parseArgumentOptions(
            nestingLevel,
            expectingCloseTag,
            value,
            openingBracePosition
          );
        }
        default:
          return this.error(
            ErrorKind.MALFORMED_ARGUMENT,
            createLocation(openingBracePosition, this.clonePosition())
          );
      }
    };
    Parser2.prototype.parseIdentifierIfPossible = function () {
      var startingPosition = this.clonePosition();
      var startOffset = this.offset();
      var value = matchIdentifierAtIndex(this.message, startOffset);
      var endOffset = startOffset + value.length;
      this.bumpTo(endOffset);
      var endPosition = this.clonePosition();
      var location = createLocation(startingPosition, endPosition);
      return { value: value, location: location };
    };
    Parser2.prototype.parseArgumentOptions = function (
      nestingLevel,
      expectingCloseTag,
      value,
      openingBracePosition
    ) {
      var _a2;
      var typeStartPosition = this.clonePosition();
      var argType = this.parseIdentifierIfPossible().value;
      var typeEndPosition = this.clonePosition();
      switch (argType) {
        case "":
          return this.error(
            ErrorKind.EXPECT_ARGUMENT_TYPE,
            createLocation(typeStartPosition, typeEndPosition)
          );
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var styleAndLocation = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var styleStartPosition = this.clonePosition();
            var result = this.parseSimpleArgStyleIfPossible();
            if (result.err) {
              return result;
            }
            var style = trimEnd(result.val);
            if (style.length === 0) {
              return this.error(
                ErrorKind.EXPECT_ARGUMENT_STYLE,
                createLocation(this.clonePosition(), this.clonePosition())
              );
            }
            var styleLocation = createLocation(
              styleStartPosition,
              this.clonePosition()
            );
            styleAndLocation = { style: style, styleLocation: styleLocation };
          }
          var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
          if (argCloseResult.err) {
            return argCloseResult;
          }
          var location_1 = createLocation(
            openingBracePosition,
            this.clonePosition()
          );
          if (
            styleAndLocation &&
            startsWith(
              styleAndLocation === null || styleAndLocation === void 0
                ? void 0
                : styleAndLocation.style,
              "::",
              0
            )
          ) {
            var skeleton = trimStart(styleAndLocation.style.slice(2));
            if (argType === "number") {
              var result = this.parseNumberSkeletonFromString(
                skeleton,
                styleAndLocation.styleLocation
              );
              if (result.err) {
                return result;
              }
              return {
                val: {
                  type: TYPE.number,
                  value: value,
                  location: location_1,
                  style: result.val,
                },
                err: null,
              };
            } else {
              if (skeleton.length === 0) {
                return this.error(
                  ErrorKind.EXPECT_DATE_TIME_SKELETON,
                  location_1
                );
              }
              var dateTimePattern = skeleton;
              if (this.locale) {
                dateTimePattern = getBestPattern(skeleton, this.locale);
              }
              var style = {
                type: SKELETON_TYPE.dateTime,
                pattern: dateTimePattern,
                location: styleAndLocation.styleLocation,
                parsedOptions: this.shouldParseSkeletons
                  ? parseDateTimeSkeleton(dateTimePattern)
                  : {},
              };
              var type = argType === "date" ? TYPE.date : TYPE.time;
              return {
                val: {
                  type: type,
                  value: value,
                  location: location_1,
                  style: style,
                },
                err: null,
              };
            }
          }
          return {
            val: {
              type:
                argType === "number"
                  ? TYPE.number
                  : argType === "date"
                  ? TYPE.date
                  : TYPE.time,
              value: value,
              location: location_1,
              style:
                (_a2 =
                  styleAndLocation === null || styleAndLocation === void 0
                    ? void 0
                    : styleAndLocation.style) !== null && _a2 !== void 0
                  ? _a2
                  : null,
            },
            err: null,
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var typeEndPosition_1 = this.clonePosition();
          this.bumpSpace();
          if (!this.bumpIf(",")) {
            return this.error(
              ErrorKind.EXPECT_SELECT_ARGUMENT_OPTIONS,
              createLocation(typeEndPosition_1, __assign({}, typeEndPosition_1))
            );
          }
          this.bumpSpace();
          var identifierAndLocation = this.parseIdentifierIfPossible();
          var pluralOffset = 0;
          if (
            argType !== "select" &&
            identifierAndLocation.value === "offset"
          ) {
            if (!this.bumpIf(":")) {
              return this.error(
                ErrorKind.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
                createLocation(this.clonePosition(), this.clonePosition())
              );
            }
            this.bumpSpace();
            var result = this.tryParseDecimalInteger(
              ErrorKind.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
              ErrorKind.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE
            );
            if (result.err) {
              return result;
            }
            this.bumpSpace();
            identifierAndLocation = this.parseIdentifierIfPossible();
            pluralOffset = result.val;
          }
          var optionsResult = this.tryParsePluralOrSelectOptions(
            nestingLevel,
            argType,
            expectingCloseTag,
            identifierAndLocation
          );
          if (optionsResult.err) {
            return optionsResult;
          }
          var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
          if (argCloseResult.err) {
            return argCloseResult;
          }
          var location_2 = createLocation(
            openingBracePosition,
            this.clonePosition()
          );
          if (argType === "select") {
            return {
              val: {
                type: TYPE.select,
                value: value,
                options: fromEntries(optionsResult.val),
                location: location_2,
              },
              err: null,
            };
          } else {
            return {
              val: {
                type: TYPE.plural,
                value: value,
                options: fromEntries(optionsResult.val),
                offset: pluralOffset,
                pluralType: argType === "plural" ? "cardinal" : "ordinal",
                location: location_2,
              },
              err: null,
            };
          }
        }
        default:
          return this.error(
            ErrorKind.INVALID_ARGUMENT_TYPE,
            createLocation(typeStartPosition, typeEndPosition)
          );
      }
    };
    Parser2.prototype.tryParseArgumentClose = function (openingBracePosition) {
      if (this.isEOF() || this.char() !== 125) {
        return this.error(
          ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE,
          createLocation(openingBracePosition, this.clonePosition())
        );
      }
      this.bump();
      return { val: true, err: null };
    };
    Parser2.prototype.parseSimpleArgStyleIfPossible = function () {
      var nestedBraces = 0;
      var startPosition = this.clonePosition();
      while (!this.isEOF()) {
        var ch = this.char();
        switch (ch) {
          case 39: {
            this.bump();
            var apostrophePosition = this.clonePosition();
            if (!this.bumpUntil("'")) {
              return this.error(
                ErrorKind.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,
                createLocation(apostrophePosition, this.clonePosition())
              );
            }
            this.bump();
            break;
          }
          case 123: {
            nestedBraces += 1;
            this.bump();
            break;
          }
          case 125: {
            if (nestedBraces > 0) {
              nestedBraces -= 1;
            } else {
              return {
                val: this.message.slice(startPosition.offset, this.offset()),
                err: null,
              };
            }
            break;
          }
          default:
            this.bump();
            break;
        }
      }
      return {
        val: this.message.slice(startPosition.offset, this.offset()),
        err: null,
      };
    };
    Parser2.prototype.parseNumberSkeletonFromString = function (
      skeleton,
      location
    ) {
      var tokens = [];
      try {
        tokens = parseNumberSkeletonFromString(skeleton);
      } catch (e) {
        return this.error(ErrorKind.INVALID_NUMBER_SKELETON, location);
      }
      return {
        val: {
          type: SKELETON_TYPE.number,
          tokens: tokens,
          location: location,
          parsedOptions: this.shouldParseSkeletons
            ? parseNumberSkeleton(tokens)
            : {},
        },
        err: null,
      };
    };
    Parser2.prototype.tryParsePluralOrSelectOptions = function (
      nestingLevel,
      parentArgType,
      expectCloseTag,
      parsedFirstIdentifier
    ) {
      var _a2;
      var hasOtherClause = false;
      var options = [];
      var parsedSelectors = /* @__PURE__ */ new Set();
      var selector = parsedFirstIdentifier.value,
        selectorLocation = parsedFirstIdentifier.location;
      while (true) {
        if (selector.length === 0) {
          var startPosition = this.clonePosition();
          if (parentArgType !== "select" && this.bumpIf("=")) {
            var result = this.tryParseDecimalInteger(
              ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR,
              ErrorKind.INVALID_PLURAL_ARGUMENT_SELECTOR
            );
            if (result.err) {
              return result;
            }
            selectorLocation = createLocation(
              startPosition,
              this.clonePosition()
            );
            selector = this.message.slice(startPosition.offset, this.offset());
          } else {
            break;
          }
        }
        if (parsedSelectors.has(selector)) {
          return this.error(
            parentArgType === "select"
              ? ErrorKind.DUPLICATE_SELECT_ARGUMENT_SELECTOR
              : ErrorKind.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,
            selectorLocation
          );
        }
        if (selector === "other") {
          hasOtherClause = true;
        }
        this.bumpSpace();
        var openingBracePosition = this.clonePosition();
        if (!this.bumpIf("{")) {
          return this.error(
            parentArgType === "select"
              ? ErrorKind.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT
              : ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,
            createLocation(this.clonePosition(), this.clonePosition())
          );
        }
        var fragmentResult = this.parseMessage(
          nestingLevel + 1,
          parentArgType,
          expectCloseTag
        );
        if (fragmentResult.err) {
          return fragmentResult;
        }
        var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
        if (argCloseResult.err) {
          return argCloseResult;
        }
        options.push([
          selector,
          {
            value: fragmentResult.val,
            location: createLocation(
              openingBracePosition,
              this.clonePosition()
            ),
          },
        ]);
        parsedSelectors.add(selector);
        this.bumpSpace();
        (_a2 = this.parseIdentifierIfPossible()),
          (selector = _a2.value),
          (selectorLocation = _a2.location);
      }
      if (options.length === 0) {
        return this.error(
          parentArgType === "select"
            ? ErrorKind.EXPECT_SELECT_ARGUMENT_SELECTOR
            : ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR,
          createLocation(this.clonePosition(), this.clonePosition())
        );
      }
      if (this.requiresOtherClause && !hasOtherClause) {
        return this.error(
          ErrorKind.MISSING_OTHER_CLAUSE,
          createLocation(this.clonePosition(), this.clonePosition())
        );
      }
      return { val: options, err: null };
    };
    Parser2.prototype.tryParseDecimalInteger = function (
      expectNumberError,
      invalidNumberError
    ) {
      var sign = 1;
      var startingPosition = this.clonePosition();
      if (this.bumpIf("+")) {
      } else if (this.bumpIf("-")) {
        sign = -1;
      }
      var hasDigits = false;
      var decimal = 0;
      while (!this.isEOF()) {
        var ch = this.char();
        if (ch >= 48 && ch <= 57) {
          hasDigits = true;
          decimal = decimal * 10 + (ch - 48);
          this.bump();
        } else {
          break;
        }
      }
      var location = createLocation(startingPosition, this.clonePosition());
      if (!hasDigits) {
        return this.error(expectNumberError, location);
      }
      decimal *= sign;
      if (!isSafeInteger(decimal)) {
        return this.error(invalidNumberError, location);
      }
      return { val: decimal, err: null };
    };
    Parser2.prototype.offset = function () {
      return this.position.offset;
    };
    Parser2.prototype.isEOF = function () {
      return this.offset() === this.message.length;
    };
    Parser2.prototype.clonePosition = function () {
      return {
        offset: this.position.offset,
        line: this.position.line,
        column: this.position.column,
      };
    };
    Parser2.prototype.char = function () {
      var offset = this.position.offset;
      if (offset >= this.message.length) {
        throw Error("out of bound");
      }
      var code = codePointAt(this.message, offset);
      if (code === void 0) {
        throw Error(
          "Offset ".concat(offset, " is at invalid UTF-16 code unit boundary")
        );
      }
      return code;
    };
    Parser2.prototype.error = function (kind, location) {
      return {
        val: null,
        err: {
          kind: kind,
          message: this.message,
          location: location,
        },
      };
    };
    Parser2.prototype.bump = function () {
      if (this.isEOF()) {
        return;
      }
      var code = this.char();
      if (code === 10) {
        this.position.line += 1;
        this.position.column = 1;
        this.position.offset += 1;
      } else {
        this.position.column += 1;
        this.position.offset += code < 65536 ? 1 : 2;
      }
    };
    Parser2.prototype.bumpIf = function (prefix) {
      if (startsWith(this.message, prefix, this.offset())) {
        for (var i = 0; i < prefix.length; i++) {
          this.bump();
        }
        return true;
      }
      return false;
    };
    Parser2.prototype.bumpUntil = function (pattern) {
      var currentOffset = this.offset();
      var index = this.message.indexOf(pattern, currentOffset);
      if (index >= 0) {
        this.bumpTo(index);
        return true;
      } else {
        this.bumpTo(this.message.length);
        return false;
      }
    };
    Parser2.prototype.bumpTo = function (targetOffset) {
      if (this.offset() > targetOffset) {
        throw Error(
          "targetOffset "
            .concat(
              targetOffset,
              " must be greater than or equal to the current offset "
            )
            .concat(this.offset())
        );
      }
      targetOffset = Math.min(targetOffset, this.message.length);
      while (true) {
        var offset = this.offset();
        if (offset === targetOffset) {
          break;
        }
        if (offset > targetOffset) {
          throw Error(
            "targetOffset ".concat(
              targetOffset,
              " is at invalid UTF-16 code unit boundary"
            )
          );
        }
        this.bump();
        if (this.isEOF()) {
          break;
        }
      }
    };
    Parser2.prototype.bumpSpace = function () {
      while (!this.isEOF() && _isWhiteSpace(this.char())) {
        this.bump();
      }
    };
    Parser2.prototype.peek = function () {
      if (this.isEOF()) {
        return null;
      }
      var code = this.char();
      var offset = this.offset();
      var nextCode = this.message.charCodeAt(offset + (code >= 65536 ? 2 : 1));
      return nextCode !== null && nextCode !== void 0 ? nextCode : null;
    };
    return Parser2;
  })();
  function _isAlpha(codepoint) {
    return (
      (codepoint >= 97 && codepoint <= 122) ||
      (codepoint >= 65 && codepoint <= 90)
    );
  }
  function _isAlphaOrSlash(codepoint) {
    return _isAlpha(codepoint) || codepoint === 47;
  }
  function _isPotentialElementNameChar(c) {
    return (
      c === 45 ||
      c === 46 ||
      (c >= 48 && c <= 57) ||
      c === 95 ||
      (c >= 97 && c <= 122) ||
      (c >= 65 && c <= 90) ||
      c == 183 ||
      (c >= 192 && c <= 214) ||
      (c >= 216 && c <= 246) ||
      (c >= 248 && c <= 893) ||
      (c >= 895 && c <= 8191) ||
      (c >= 8204 && c <= 8205) ||
      (c >= 8255 && c <= 8256) ||
      (c >= 8304 && c <= 8591) ||
      (c >= 11264 && c <= 12271) ||
      (c >= 12289 && c <= 55295) ||
      (c >= 63744 && c <= 64975) ||
      (c >= 65008 && c <= 65533) ||
      (c >= 65536 && c <= 983039)
    );
  }
  function _isWhiteSpace(c) {
    return (
      (c >= 9 && c <= 13) ||
      c === 32 ||
      c === 133 ||
      (c >= 8206 && c <= 8207) ||
      c === 8232 ||
      c === 8233
    );
  }
  function _isPatternSyntax(c) {
    return (
      (c >= 33 && c <= 35) ||
      c === 36 ||
      (c >= 37 && c <= 39) ||
      c === 40 ||
      c === 41 ||
      c === 42 ||
      c === 43 ||
      c === 44 ||
      c === 45 ||
      (c >= 46 && c <= 47) ||
      (c >= 58 && c <= 59) ||
      (c >= 60 && c <= 62) ||
      (c >= 63 && c <= 64) ||
      c === 91 ||
      c === 92 ||
      c === 93 ||
      c === 94 ||
      c === 96 ||
      c === 123 ||
      c === 124 ||
      c === 125 ||
      c === 126 ||
      c === 161 ||
      (c >= 162 && c <= 165) ||
      c === 166 ||
      c === 167 ||
      c === 169 ||
      c === 171 ||
      c === 172 ||
      c === 174 ||
      c === 176 ||
      c === 177 ||
      c === 182 ||
      c === 187 ||
      c === 191 ||
      c === 215 ||
      c === 247 ||
      (c >= 8208 && c <= 8213) ||
      (c >= 8214 && c <= 8215) ||
      c === 8216 ||
      c === 8217 ||
      c === 8218 ||
      (c >= 8219 && c <= 8220) ||
      c === 8221 ||
      c === 8222 ||
      c === 8223 ||
      (c >= 8224 && c <= 8231) ||
      (c >= 8240 && c <= 8248) ||
      c === 8249 ||
      c === 8250 ||
      (c >= 8251 && c <= 8254) ||
      (c >= 8257 && c <= 8259) ||
      c === 8260 ||
      c === 8261 ||
      c === 8262 ||
      (c >= 8263 && c <= 8273) ||
      c === 8274 ||
      c === 8275 ||
      (c >= 8277 && c <= 8286) ||
      (c >= 8592 && c <= 8596) ||
      (c >= 8597 && c <= 8601) ||
      (c >= 8602 && c <= 8603) ||
      (c >= 8604 && c <= 8607) ||
      c === 8608 ||
      (c >= 8609 && c <= 8610) ||
      c === 8611 ||
      (c >= 8612 && c <= 8613) ||
      c === 8614 ||
      (c >= 8615 && c <= 8621) ||
      c === 8622 ||
      (c >= 8623 && c <= 8653) ||
      (c >= 8654 && c <= 8655) ||
      (c >= 8656 && c <= 8657) ||
      c === 8658 ||
      c === 8659 ||
      c === 8660 ||
      (c >= 8661 && c <= 8691) ||
      (c >= 8692 && c <= 8959) ||
      (c >= 8960 && c <= 8967) ||
      c === 8968 ||
      c === 8969 ||
      c === 8970 ||
      c === 8971 ||
      (c >= 8972 && c <= 8991) ||
      (c >= 8992 && c <= 8993) ||
      (c >= 8994 && c <= 9e3) ||
      c === 9001 ||
      c === 9002 ||
      (c >= 9003 && c <= 9083) ||
      c === 9084 ||
      (c >= 9085 && c <= 9114) ||
      (c >= 9115 && c <= 9139) ||
      (c >= 9140 && c <= 9179) ||
      (c >= 9180 && c <= 9185) ||
      (c >= 9186 && c <= 9254) ||
      (c >= 9255 && c <= 9279) ||
      (c >= 9280 && c <= 9290) ||
      (c >= 9291 && c <= 9311) ||
      (c >= 9472 && c <= 9654) ||
      c === 9655 ||
      (c >= 9656 && c <= 9664) ||
      c === 9665 ||
      (c >= 9666 && c <= 9719) ||
      (c >= 9720 && c <= 9727) ||
      (c >= 9728 && c <= 9838) ||
      c === 9839 ||
      (c >= 9840 && c <= 10087) ||
      c === 10088 ||
      c === 10089 ||
      c === 10090 ||
      c === 10091 ||
      c === 10092 ||
      c === 10093 ||
      c === 10094 ||
      c === 10095 ||
      c === 10096 ||
      c === 10097 ||
      c === 10098 ||
      c === 10099 ||
      c === 10100 ||
      c === 10101 ||
      (c >= 10132 && c <= 10175) ||
      (c >= 10176 && c <= 10180) ||
      c === 10181 ||
      c === 10182 ||
      (c >= 10183 && c <= 10213) ||
      c === 10214 ||
      c === 10215 ||
      c === 10216 ||
      c === 10217 ||
      c === 10218 ||
      c === 10219 ||
      c === 10220 ||
      c === 10221 ||
      c === 10222 ||
      c === 10223 ||
      (c >= 10224 && c <= 10239) ||
      (c >= 10240 && c <= 10495) ||
      (c >= 10496 && c <= 10626) ||
      c === 10627 ||
      c === 10628 ||
      c === 10629 ||
      c === 10630 ||
      c === 10631 ||
      c === 10632 ||
      c === 10633 ||
      c === 10634 ||
      c === 10635 ||
      c === 10636 ||
      c === 10637 ||
      c === 10638 ||
      c === 10639 ||
      c === 10640 ||
      c === 10641 ||
      c === 10642 ||
      c === 10643 ||
      c === 10644 ||
      c === 10645 ||
      c === 10646 ||
      c === 10647 ||
      c === 10648 ||
      (c >= 10649 && c <= 10711) ||
      c === 10712 ||
      c === 10713 ||
      c === 10714 ||
      c === 10715 ||
      (c >= 10716 && c <= 10747) ||
      c === 10748 ||
      c === 10749 ||
      (c >= 10750 && c <= 11007) ||
      (c >= 11008 && c <= 11055) ||
      (c >= 11056 && c <= 11076) ||
      (c >= 11077 && c <= 11078) ||
      (c >= 11079 && c <= 11084) ||
      (c >= 11085 && c <= 11123) ||
      (c >= 11124 && c <= 11125) ||
      (c >= 11126 && c <= 11157) ||
      c === 11158 ||
      (c >= 11159 && c <= 11263) ||
      (c >= 11776 && c <= 11777) ||
      c === 11778 ||
      c === 11779 ||
      c === 11780 ||
      c === 11781 ||
      (c >= 11782 && c <= 11784) ||
      c === 11785 ||
      c === 11786 ||
      c === 11787 ||
      c === 11788 ||
      c === 11789 ||
      (c >= 11790 && c <= 11798) ||
      c === 11799 ||
      (c >= 11800 && c <= 11801) ||
      c === 11802 ||
      c === 11803 ||
      c === 11804 ||
      c === 11805 ||
      (c >= 11806 && c <= 11807) ||
      c === 11808 ||
      c === 11809 ||
      c === 11810 ||
      c === 11811 ||
      c === 11812 ||
      c === 11813 ||
      c === 11814 ||
      c === 11815 ||
      c === 11816 ||
      c === 11817 ||
      (c >= 11818 && c <= 11822) ||
      c === 11823 ||
      (c >= 11824 && c <= 11833) ||
      (c >= 11834 && c <= 11835) ||
      (c >= 11836 && c <= 11839) ||
      c === 11840 ||
      c === 11841 ||
      c === 11842 ||
      (c >= 11843 && c <= 11855) ||
      (c >= 11856 && c <= 11857) ||
      c === 11858 ||
      (c >= 11859 && c <= 11903) ||
      (c >= 12289 && c <= 12291) ||
      c === 12296 ||
      c === 12297 ||
      c === 12298 ||
      c === 12299 ||
      c === 12300 ||
      c === 12301 ||
      c === 12302 ||
      c === 12303 ||
      c === 12304 ||
      c === 12305 ||
      (c >= 12306 && c <= 12307) ||
      c === 12308 ||
      c === 12309 ||
      c === 12310 ||
      c === 12311 ||
      c === 12312 ||
      c === 12313 ||
      c === 12314 ||
      c === 12315 ||
      c === 12316 ||
      c === 12317 ||
      (c >= 12318 && c <= 12319) ||
      c === 12320 ||
      c === 12336 ||
      c === 64830 ||
      c === 64831 ||
      (c >= 65093 && c <= 65094)
    );
  }

  // bazel-out/darwin-fastbuild/bin/packages/icu-messageformat-parser/lib/index.js
  function pruneLocation(els) {
    els.forEach(function (el) {
      delete el.location;
      if (isSelectElement(el) || isPluralElement(el)) {
        for (var k in el.options) {
          delete el.options[k].location;
          pruneLocation(el.options[k].value);
        }
      } else if (isNumberElement(el) && isNumberSkeleton(el.style)) {
        delete el.style.location;
      } else if (
        (isDateElement(el) || isTimeElement(el)) &&
        isDateTimeSkeleton(el.style)
      ) {
        delete el.style.location;
      } else if (isTagElement(el)) {
        pruneLocation(el.children);
      }
    });
  }
  function parse(message, opts) {
    if (opts === void 0) {
      opts = {};
    }
    opts = __assign(
      { shouldParseSkeletons: true, requiresOtherClause: true },
      opts
    );
    var result = new Parser(message, opts).parse();
    if (result.err) {
      var error = SyntaxError(ErrorKind[result.err.kind]);
      error.location = result.err.location;
      error.originalMessage = result.err.message;
      throw error;
    }
    if (!(opts === null || opts === void 0 ? void 0 : opts.captureLocation)) {
      pruneLocation(result.val);
    }
    return result.val;
  }

  // bazel-out/darwin-fastbuild/bin/packages/fast-memoize/lib/index.js
  function memoize(fn, options) {
    var cache = options && options.cache ? options.cache : cacheDefault;
    var serializer =
      options && options.serializer ? options.serializer : serializerDefault;
    var strategy =
      options && options.strategy ? options.strategy : strategyDefault;
    return strategy(fn, {
      cache: cache,
      serializer: serializer,
    });
  }
  function isPrimitive(value) {
    return (
      value == null || typeof value === "number" || typeof value === "boolean"
    );
  }
  function monadic(fn, cache, serializer, arg) {
    var cacheKey = isPrimitive(arg) ? arg : serializer(arg);
    var computedValue = cache.get(cacheKey);
    if (typeof computedValue === "undefined") {
      computedValue = fn.call(this, arg);
      cache.set(cacheKey, computedValue);
    }
    return computedValue;
  }
  function variadic(fn, cache, serializer) {
    var args = Array.prototype.slice.call(arguments, 3);
    var cacheKey = serializer(args);
    var computedValue = cache.get(cacheKey);
    if (typeof computedValue === "undefined") {
      computedValue = fn.apply(this, args);
      cache.set(cacheKey, computedValue);
    }
    return computedValue;
  }
  function assemble(fn, context, strategy, cache, serialize) {
    return strategy.bind(context, fn, cache, serialize);
  }
  function strategyDefault(fn, options) {
    var strategy = fn.length === 1 ? monadic : variadic;
    return assemble(
      fn,
      this,
      strategy,
      options.cache.create(),
      options.serializer
    );
  }
  function strategyVariadic(fn, options) {
    return assemble(
      fn,
      this,
      variadic,
      options.cache.create(),
      options.serializer
    );
  }
  function strategyMonadic(fn, options) {
    return assemble(
      fn,
      this,
      monadic,
      options.cache.create(),
      options.serializer
    );
  }
  var serializerDefault = function () {
    return JSON.stringify(arguments);
  };
  function ObjectWithoutPrototypeCache() {
    this.cache = /* @__PURE__ */ Object.create(null);
  }
  ObjectWithoutPrototypeCache.prototype.get = function (key) {
    return this.cache[key];
  };
  ObjectWithoutPrototypeCache.prototype.set = function (key, value) {
    this.cache[key] = value;
  };
  var cacheDefault = {
    create: function create() {
      return new ObjectWithoutPrototypeCache();
    },
  };
  var strategies = {
    variadic: strategyVariadic,
    monadic: strategyMonadic,
  };

  // bazel-out/darwin-fastbuild/bin/packages/intl-messageformat/lib/src/error.js
  var ErrorCode;
  (function (ErrorCode2) {
    ErrorCode2["MISSING_VALUE"] = "MISSING_VALUE";
    ErrorCode2["INVALID_VALUE"] = "INVALID_VALUE";
    ErrorCode2["MISSING_INTL_API"] = "MISSING_INTL_API";
  })(ErrorCode || (ErrorCode = {}));
  var FormatError = (function (_super) {
    __extends(FormatError2, _super);
    function FormatError2(msg, code, originalMessage) {
      var _this = _super.call(this, msg) || this;
      _this.code = code;
      _this.originalMessage = originalMessage;
      return _this;
    }
    FormatError2.prototype.toString = function () {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    };
    return FormatError2;
  })(Error);
  var InvalidValueError = (function (_super) {
    __extends(InvalidValueError2, _super);
    function InvalidValueError2(variableId, value, options, originalMessage) {
      return (
        _super.call(
          this,
          'Invalid values for "'
            .concat(variableId, '": "')
            .concat(value, '". Options are "')
            .concat(Object.keys(options).join('", "'), '"'),
          ErrorCode.INVALID_VALUE,
          originalMessage
        ) || this
      );
    }
    return InvalidValueError2;
  })(FormatError);
  var InvalidValueTypeError = (function (_super) {
    __extends(InvalidValueTypeError2, _super);
    function InvalidValueTypeError2(value, type, originalMessage) {
      return (
        _super.call(
          this,
          'Value for "'.concat(value, '" must be of type ').concat(type),
          ErrorCode.INVALID_VALUE,
          originalMessage
        ) || this
      );
    }
    return InvalidValueTypeError2;
  })(FormatError);
  var MissingValueError = (function (_super) {
    __extends(MissingValueError2, _super);
    function MissingValueError2(variableId, originalMessage) {
      return (
        _super.call(
          this,
          'The intl string context variable "'
            .concat(variableId, '" was not provided to the string "')
            .concat(originalMessage, '"'),
          ErrorCode.MISSING_VALUE,
          originalMessage
        ) || this
      );
    }
    return MissingValueError2;
  })(FormatError);

  // bazel-out/darwin-fastbuild/bin/packages/intl-messageformat/lib/src/formatters.js
  var PART_TYPE;
  (function (PART_TYPE2) {
    PART_TYPE2[(PART_TYPE2["literal"] = 0)] = "literal";
    PART_TYPE2[(PART_TYPE2["object"] = 1)] = "object";
  })(PART_TYPE || (PART_TYPE = {}));
  function mergeLiteral(parts) {
    if (parts.length < 2) {
      return parts;
    }
    return parts.reduce(function (all, part) {
      var lastPart = all[all.length - 1];
      if (
        !lastPart ||
        lastPart.type !== PART_TYPE.literal ||
        part.type !== PART_TYPE.literal
      ) {
        all.push(part);
      } else {
        lastPart.value += part.value;
      }
      return all;
    }, []);
  }
  function isFormatXMLElementFn(el) {
    return typeof el === "function";
  }
  function formatToParts(
    els,
    locales,
    formatters,
    formats,
    values,
    currentPluralValue,
    originalMessage
  ) {
    if (els.length === 1 && isLiteralElement(els[0])) {
      return [
        {
          type: PART_TYPE.literal,
          value: els[0].value,
        },
      ];
    }
    var result = [];
    for (var _i = 0, els_1 = els; _i < els_1.length; _i++) {
      var el = els_1[_i];
      if (isLiteralElement(el)) {
        result.push({
          type: PART_TYPE.literal,
          value: el.value,
        });
        continue;
      }
      if (isPoundElement(el)) {
        if (typeof currentPluralValue === "number") {
          result.push({
            type: PART_TYPE.literal,
            value: formatters
              .getNumberFormat(locales)
              .format(currentPluralValue),
          });
        }
        continue;
      }
      var varName = el.value;
      if (!(values && varName in values)) {
        throw new MissingValueError(varName, originalMessage);
      }
      var value = values[varName];
      if (isArgumentElement(el)) {
        if (!value || typeof value === "string" || typeof value === "number") {
          value =
            typeof value === "string" || typeof value === "number"
              ? String(value)
              : "";
        }
        result.push({
          type:
            typeof value === "string" ? PART_TYPE.literal : PART_TYPE.object,
          value: value,
        });
        continue;
      }
      if (isDateElement(el)) {
        var style =
          typeof el.style === "string"
            ? formats.date[el.style]
            : isDateTimeSkeleton(el.style)
            ? el.style.parsedOptions
            : void 0;
        result.push({
          type: PART_TYPE.literal,
          value: formatters.getDateTimeFormat(locales, style).format(value),
        });
        continue;
      }
      if (isTimeElement(el)) {
        var style =
          typeof el.style === "string"
            ? formats.time[el.style]
            : isDateTimeSkeleton(el.style)
            ? el.style.parsedOptions
            : formats.time.medium;
        result.push({
          type: PART_TYPE.literal,
          value: formatters.getDateTimeFormat(locales, style).format(value),
        });
        continue;
      }
      if (isNumberElement(el)) {
        var style =
          typeof el.style === "string"
            ? formats.number[el.style]
            : isNumberSkeleton(el.style)
            ? el.style.parsedOptions
            : void 0;
        if (style && style.scale) {
          value = value * (style.scale || 1);
        }
        result.push({
          type: PART_TYPE.literal,
          value: formatters.getNumberFormat(locales, style).format(value),
        });
        continue;
      }
      if (isTagElement(el)) {
        var children = el.children,
          value_1 = el.value;
        var formatFn = values[value_1];
        if (!isFormatXMLElementFn(formatFn)) {
          throw new InvalidValueTypeError(value_1, "function", originalMessage);
        }
        var parts = formatToParts(
          children,
          locales,
          formatters,
          formats,
          values,
          currentPluralValue
        );
        var chunks = formatFn(
          parts.map(function (p) {
            return p.value;
          })
        );
        if (!Array.isArray(chunks)) {
          chunks = [chunks];
        }
        result.push.apply(
          result,
          chunks.map(function (c) {
            return {
              type:
                typeof c === "string" ? PART_TYPE.literal : PART_TYPE.object,
              value: c,
            };
          })
        );
      }
      if (isSelectElement(el)) {
        var opt = el.options[value] || el.options.other;
        if (!opt) {
          throw new InvalidValueError(
            el.value,
            value,
            Object.keys(el.options),
            originalMessage
          );
        }
        result.push.apply(
          result,
          formatToParts(opt.value, locales, formatters, formats, values)
        );
        continue;
      }
      if (isPluralElement(el)) {
        var opt = el.options["=".concat(value)];
        if (!opt) {
          if (!Intl.PluralRules) {
            throw new FormatError(
              'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
              ErrorCode.MISSING_INTL_API,
              originalMessage
            );
          }
          var rule = formatters
            .getPluralRules(locales, { type: el.pluralType })
            .select(value - (el.offset || 0));
          opt = el.options[rule] || el.options.other;
        }
        if (!opt) {
          throw new InvalidValueError(
            el.value,
            value,
            Object.keys(el.options),
            originalMessage
          );
        }
        result.push.apply(
          result,
          formatToParts(
            opt.value,
            locales,
            formatters,
            formats,
            values,
            value - (el.offset || 0)
          )
        );
        continue;
      }
    }
    return mergeLiteral(result);
  }

  // bazel-out/darwin-fastbuild/bin/packages/intl-messageformat/lib/src/core.js
  function mergeConfig(c1, c2) {
    if (!c2) {
      return c1;
    }
    return __assign(
      __assign(__assign({}, c1 || {}), c2 || {}),
      Object.keys(c1).reduce(function (all, k) {
        all[k] = __assign(__assign({}, c1[k]), c2[k] || {});
        return all;
      }, {})
    );
  }
  function mergeConfigs(defaultConfig, configs) {
    if (!configs) {
      return defaultConfig;
    }
    return Object.keys(defaultConfig).reduce(function (all, k) {
      all[k] = mergeConfig(defaultConfig[k], configs[k]);
      return all;
    }, __assign({}, defaultConfig));
  }
  function createFastMemoizeCache(store) {
    return {
      create: function () {
        return {
          get: function (key) {
            return store[key];
          },
          set: function (key, value) {
            store[key] = value;
          },
        };
      },
    };
  }
  function createDefaultFormatters(cache) {
    if (cache === void 0) {
      cache = {
        number: {},
        dateTime: {},
        pluralRules: {},
      };
    }
    return {
      getNumberFormat: memoize(
        function () {
          var _a2;
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          return new ((_a2 = Intl.NumberFormat).bind.apply(
            _a2,
            __spreadArray([void 0], args, false)
          ))();
        },
        {
          cache: createFastMemoizeCache(cache.number),
          strategy: strategies.variadic,
        }
      ),
      getDateTimeFormat: memoize(
        function () {
          var _a2;
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          return new ((_a2 = Intl.DateTimeFormat).bind.apply(
            _a2,
            __spreadArray([void 0], args, false)
          ))();
        },
        {
          cache: createFastMemoizeCache(cache.dateTime),
          strategy: strategies.variadic,
        }
      ),
      getPluralRules: memoize(
        function () {
          var _a2;
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          return new ((_a2 = Intl.PluralRules).bind.apply(
            _a2,
            __spreadArray([void 0], args, false)
          ))();
        },
        {
          cache: createFastMemoizeCache(cache.pluralRules),
          strategy: strategies.variadic,
        }
      ),
    };
  }
  var IntlMessageFormat = (function () {
    function IntlMessageFormat2(message, locales, overrideFormats, opts) {
      var _this = this;
      if (locales === void 0) {
        locales = IntlMessageFormat2.defaultLocale;
      }
      this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {},
      };
      this.format = function (values) {
        var parts = _this.formatToParts(values);
        if (parts.length === 1) {
          return parts[0].value;
        }
        var result = parts.reduce(function (all, part) {
          if (
            !all.length ||
            part.type !== PART_TYPE.literal ||
            typeof all[all.length - 1] !== "string"
          ) {
            all.push(part.value);
          } else {
            all[all.length - 1] += part.value;
          }
          return all;
        }, []);
        if (result.length <= 1) {
          return result[0] || "";
        }
        return result;
      };
      this.formatToParts = function (values) {
        return formatToParts(
          _this.ast,
          _this.locales,
          _this.formatters,
          _this.formats,
          values,
          void 0,
          _this.message
        );
      };
      this.resolvedOptions = function () {
        return {
          locale: _this.resolvedLocale.toString(),
        };
      };
      this.getAst = function () {
        return _this.ast;
      };
      this.locales = locales;
      this.resolvedLocale = IntlMessageFormat2.resolveLocale(locales);
      if (typeof message === "string") {
        this.message = message;
        if (!IntlMessageFormat2.__parse) {
          throw new TypeError(
            "IntlMessageFormat.__parse must be set to process `message` of type `string`"
          );
        }
        this.ast = IntlMessageFormat2.__parse(message, {
          ignoreTag: opts === null || opts === void 0 ? void 0 : opts.ignoreTag,
          locale: this.resolvedLocale,
        });
      } else {
        this.ast = message;
      }
      if (!Array.isArray(this.ast)) {
        throw new TypeError("A message must be provided as a String or AST.");
      }
      this.formats = mergeConfigs(IntlMessageFormat2.formats, overrideFormats);
      this.formatters =
        (opts && opts.formatters) ||
        createDefaultFormatters(this.formatterCache);
    }
    Object.defineProperty(IntlMessageFormat2, "defaultLocale", {
      get: function () {
        if (!IntlMessageFormat2.memoizedDefaultLocale) {
          IntlMessageFormat2.memoizedDefaultLocale =
            new Intl.NumberFormat().resolvedOptions().locale;
        }
        return IntlMessageFormat2.memoizedDefaultLocale;
      },
      enumerable: false,
      configurable: true,
    });
    IntlMessageFormat2.memoizedDefaultLocale = null;
    IntlMessageFormat2.resolveLocale = function (locales) {
      var supportedLocales = Intl.NumberFormat.supportedLocalesOf(locales);
      if (supportedLocales.length > 0) {
        return new Intl.Locale(supportedLocales[0]);
      }
      return new Intl.Locale(
        typeof locales === "string" ? locales : locales[0]
      );
    };
    IntlMessageFormat2.__parse = parse;
    IntlMessageFormat2.formats = {
      number: {
        integer: {
          maximumFractionDigits: 0,
        },
        currency: {
          style: "currency",
        },
        percent: {
          style: "percent",
        },
      },
      date: {
        short: {
          month: "numeric",
          day: "numeric",
          year: "2-digit",
        },
        medium: {
          month: "short",
          day: "numeric",
          year: "numeric",
        },
        long: {
          month: "long",
          day: "numeric",
          year: "numeric",
        },
        full: {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric",
        },
      },
      time: {
        short: {
          hour: "numeric",
          minute: "numeric",
        },
        medium: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        },
        long: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short",
        },
        full: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short",
        },
      },
    };
    return IntlMessageFormat2;
  })();

  // bazel-out/darwin-fastbuild/bin/packages/intl/lib/src/error.js
  var IntlErrorCode;
  (function (IntlErrorCode2) {
    IntlErrorCode2["FORMAT_ERROR"] = "FORMAT_ERROR";
    IntlErrorCode2["UNSUPPORTED_FORMATTER"] = "UNSUPPORTED_FORMATTER";
    IntlErrorCode2["INVALID_CONFIG"] = "INVALID_CONFIG";
    IntlErrorCode2["MISSING_DATA"] = "MISSING_DATA";
    IntlErrorCode2["MISSING_TRANSLATION"] = "MISSING_TRANSLATION";
  })(IntlErrorCode || (IntlErrorCode = {}));
  var IntlError = (function (_super) {
    __extends(IntlError2, _super);
    function IntlError2(code, message, exception) {
      var _this = this;
      var err = exception
        ? exception instanceof Error
          ? exception
          : new Error(String(exception))
        : void 0;
      _this =
        _super.call(
          this,
          "[@formatjs/intl Error "
            .concat(code, "] ")
            .concat(message, " \n")
            .concat(err ? "\n".concat(err.message, "\n").concat(err.stack) : "")
        ) || this;
      _this.code = code;
      if (typeof Error.captureStackTrace === "function") {
        Error.captureStackTrace(_this, IntlError2);
      }
      return _this;
    }
    return IntlError2;
  })(Error);
  var UnsupportedFormatterError = (function (_super) {
    __extends(UnsupportedFormatterError2, _super);
    function UnsupportedFormatterError2(message, exception) {
      return (
        _super.call(
          this,
          IntlErrorCode.UNSUPPORTED_FORMATTER,
          message,
          exception
        ) || this
      );
    }
    return UnsupportedFormatterError2;
  })(IntlError);
  var InvalidConfigError = (function (_super) {
    __extends(InvalidConfigError2, _super);
    function InvalidConfigError2(message, exception) {
      return (
        _super.call(this, IntlErrorCode.INVALID_CONFIG, message, exception) ||
        this
      );
    }
    return InvalidConfigError2;
  })(IntlError);
  var MissingDataError = (function (_super) {
    __extends(MissingDataError2, _super);
    function MissingDataError2(message, exception) {
      return (
        _super.call(this, IntlErrorCode.MISSING_DATA, message, exception) ||
        this
      );
    }
    return MissingDataError2;
  })(IntlError);
  var IntlFormatError = (function (_super) {
    __extends(IntlFormatError2, _super);
    function IntlFormatError2(message, locale, exception) {
      return (
        _super.call(
          this,
          IntlErrorCode.FORMAT_ERROR,
          "".concat(message, " \nLocale: ").concat(locale, "\n"),
          exception
        ) || this
      );
    }
    return IntlFormatError2;
  })(IntlError);
  var MessageFormatError = (function (_super) {
    __extends(MessageFormatError2, _super);
    function MessageFormatError2(message, locale, descriptor, exception) {
      var _this =
        _super.call(
          this,
          ""
            .concat(message, " \nMessageID: ")
            .concat(
              descriptor === null || descriptor === void 0
                ? void 0
                : descriptor.id,
              "\nDefault Message: "
            )
            .concat(
              descriptor === null || descriptor === void 0
                ? void 0
                : descriptor.defaultMessage,
              "\nDescription: "
            )
            .concat(
              descriptor === null || descriptor === void 0
                ? void 0
                : descriptor.description,
              " \n"
            ),
          locale,
          exception
        ) || this;
      _this.descriptor = descriptor;
      return _this;
    }
    return MessageFormatError2;
  })(IntlFormatError);
  var MissingTranslationError = (function (_super) {
    __extends(MissingTranslationError2, _super);
    function MissingTranslationError2(descriptor, locale) {
      var _this =
        _super.call(
          this,
          IntlErrorCode.MISSING_TRANSLATION,
          'Missing message: "'
            .concat(descriptor.id, '" for locale "')
            .concat(locale, '", using ')
            .concat(
              descriptor.defaultMessage ? "default message" : "id",
              " as fallback."
            )
        ) || this;
      _this.descriptor = descriptor;
      return _this;
    }
    return MissingTranslationError2;
  })(IntlError);

  // bazel-out/darwin-fastbuild/bin/packages/intl/lib/src/utils.js
  function filterProps(props, allowlist, defaults) {
    if (defaults === void 0) {
      defaults = {};
    }
    return allowlist.reduce(function (filtered, name) {
      if (name in props) {
        filtered[name] = props[name];
      } else if (name in defaults) {
        filtered[name] = defaults[name];
      }
      return filtered;
    }, {});
  }
  var defaultErrorHandler = function (error) {
    if (true) {
      console.error(error);
    }
  };
  var defaultWarnHandler = function (warning) {
    if (true) {
      console.warn(warning);
    }
  };
  var DEFAULT_INTL_CONFIG = {
    formats: {},
    messages: {},
    timeZone: void 0,
    defaultLocale: "en",
    defaultFormats: {},
    fallbackOnEmptyString: true,
    onError: defaultErrorHandler,
    onWarn: defaultWarnHandler,
  };
  function createIntlCache() {
    return {
      dateTime: {},
      number: {},
      message: {},
      relativeTime: {},
      pluralRules: {},
      list: {},
      displayNames: {},
    };
  }
  function createFastMemoizeCache2(store) {
    return {
      create: function () {
        return {
          get: function (key) {
            return store[key];
          },
          set: function (key, value) {
            store[key] = value;
          },
        };
      },
    };
  }
  function createFormatters(cache) {
    if (cache === void 0) {
      cache = createIntlCache();
    }
    var RelativeTimeFormat = Intl.RelativeTimeFormat;
    var ListFormat = Intl.ListFormat;
    var DisplayNames = Intl.DisplayNames;
    var getDateTimeFormat = memoize(
      function () {
        var _a2;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return new ((_a2 = Intl.DateTimeFormat).bind.apply(
          _a2,
          __spreadArray([void 0], args, false)
        ))();
      },
      {
        cache: createFastMemoizeCache2(cache.dateTime),
        strategy: strategies.variadic,
      }
    );
    var getNumberFormat = memoize(
      function () {
        var _a2;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return new ((_a2 = Intl.NumberFormat).bind.apply(
          _a2,
          __spreadArray([void 0], args, false)
        ))();
      },
      {
        cache: createFastMemoizeCache2(cache.number),
        strategy: strategies.variadic,
      }
    );
    var getPluralRules = memoize(
      function () {
        var _a2;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return new ((_a2 = Intl.PluralRules).bind.apply(
          _a2,
          __spreadArray([void 0], args, false)
        ))();
      },
      {
        cache: createFastMemoizeCache2(cache.pluralRules),
        strategy: strategies.variadic,
      }
    );
    return {
      getDateTimeFormat: getDateTimeFormat,
      getNumberFormat: getNumberFormat,
      getMessageFormat: memoize(
        function (message, locales, overrideFormats, opts) {
          return new IntlMessageFormat(
            message,
            locales,
            overrideFormats,
            __assign(
              {
                formatters: {
                  getNumberFormat: getNumberFormat,
                  getDateTimeFormat: getDateTimeFormat,
                  getPluralRules: getPluralRules,
                },
              },
              opts || {}
            )
          );
        },
        {
          cache: createFastMemoizeCache2(cache.message),
          strategy: strategies.variadic,
        }
      ),
      getRelativeTimeFormat: memoize(
        function () {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          return new (RelativeTimeFormat.bind.apply(
            RelativeTimeFormat,
            __spreadArray([void 0], args, false)
          ))();
        },
        {
          cache: createFastMemoizeCache2(cache.relativeTime),
          strategy: strategies.variadic,
        }
      ),
      getPluralRules: getPluralRules,
      getListFormat: memoize(
        function () {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          return new (ListFormat.bind.apply(
            ListFormat,
            __spreadArray([void 0], args, false)
          ))();
        },
        {
          cache: createFastMemoizeCache2(cache.list),
          strategy: strategies.variadic,
        }
      ),
      getDisplayNames: memoize(
        function () {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          return new (DisplayNames.bind.apply(
            DisplayNames,
            __spreadArray([void 0], args, false)
          ))();
        },
        {
          cache: createFastMemoizeCache2(cache.displayNames),
          strategy: strategies.variadic,
        }
      ),
    };
  }
  function getNamedFormat(formats, type, name, onError) {
    var formatType = formats && formats[type];
    var format;
    if (formatType) {
      format = formatType[name];
    }
    if (format) {
      return format;
    }
    onError(
      new UnsupportedFormatterError(
        "No ".concat(type, " format named: ").concat(name)
      )
    );
  }

  // bazel-out/darwin-fastbuild/bin/packages/intl/lib/src/message.js
  function setTimeZoneInOptions(opts, timeZone) {
    return Object.keys(opts).reduce(function (all, k) {
      all[k] = __assign({ timeZone: timeZone }, opts[k]);
      return all;
    }, {});
  }
  function deepMergeOptions(opts1, opts2) {
    var keys = Object.keys(__assign(__assign({}, opts1), opts2));
    return keys.reduce(function (all, k) {
      all[k] = __assign(__assign({}, opts1[k] || {}), opts2[k] || {});
      return all;
    }, {});
  }
  function deepMergeFormatsAndSetTimeZone(f1, timeZone) {
    if (!timeZone) {
      return f1;
    }
    var mfFormats = IntlMessageFormat.formats;
    return __assign(__assign(__assign({}, mfFormats), f1), {
      date: deepMergeOptions(
        setTimeZoneInOptions(mfFormats.date, timeZone),
        setTimeZoneInOptions(f1.date || {}, timeZone)
      ),
      time: deepMergeOptions(
        setTimeZoneInOptions(mfFormats.time, timeZone),
        setTimeZoneInOptions(f1.time || {}, timeZone)
      ),
    });
  }
  function formatMessage(_a2, state, messageDescriptor, values, opts) {
    var locale = _a2.locale,
      formats = _a2.formats,
      messages = _a2.messages,
      defaultLocale = _a2.defaultLocale,
      defaultFormats = _a2.defaultFormats,
      fallbackOnEmptyString = _a2.fallbackOnEmptyString,
      onError = _a2.onError,
      timeZone = _a2.timeZone,
      defaultRichTextElements = _a2.defaultRichTextElements;
    if (messageDescriptor === void 0) {
      messageDescriptor = { id: "" };
    }
    var msgId = messageDescriptor.id,
      defaultMessage = messageDescriptor.defaultMessage;
    invariant(
      !!msgId,
      "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue"
    );
    var id = String(msgId);
    var message =
      messages &&
      Object.prototype.hasOwnProperty.call(messages, id) &&
      messages[id];
    if (
      Array.isArray(message) &&
      message.length === 1 &&
      message[0].type === TYPE.literal
    ) {
      return message[0].value;
    }
    if (
      !values &&
      message &&
      typeof message === "string" &&
      !defaultRichTextElements
    ) {
      return message.replace(/'\{(.*?)\}'/gi, "{$1}");
    }
    values = __assign(__assign({}, defaultRichTextElements), values || {});
    formats = deepMergeFormatsAndSetTimeZone(formats, timeZone);
    defaultFormats = deepMergeFormatsAndSetTimeZone(defaultFormats, timeZone);
    if (!message) {
      if (fallbackOnEmptyString === false && message === "") {
        return message;
      }
      if (
        !defaultMessage ||
        (locale && locale.toLowerCase() !== defaultLocale.toLowerCase())
      ) {
        onError(new MissingTranslationError(messageDescriptor, locale));
      }
      if (defaultMessage) {
        try {
          var formatter = state.getMessageFormat(
            defaultMessage,
            defaultLocale,
            defaultFormats,
            opts
          );
          return formatter.format(values);
        } catch (e) {
          onError(
            new MessageFormatError(
              'Error formatting default message for: "'.concat(
                id,
                '", rendering default message verbatim'
              ),
              locale,
              messageDescriptor,
              e
            )
          );
          return typeof defaultMessage === "string" ? defaultMessage : id;
        }
      }
      return id;
    }
    try {
      var formatter = state.getMessageFormat(
        message,
        locale,
        formats,
        __assign({ formatters: state }, opts || {})
      );
      return formatter.format(values);
    } catch (e) {
      onError(
        new MessageFormatError(
          'Error formatting message: "'
            .concat(id, '", using ')
            .concat(defaultMessage ? "default message" : "id", " as fallback."),
          locale,
          messageDescriptor,
          e
        )
      );
    }
    if (defaultMessage) {
      try {
        var formatter = state.getMessageFormat(
          defaultMessage,
          defaultLocale,
          defaultFormats,
          opts
        );
        return formatter.format(values);
      } catch (e) {
        onError(
          new MessageFormatError(
            'Error formatting the default message for: "'.concat(
              id,
              '", rendering message verbatim'
            ),
            locale,
            messageDescriptor,
            e
          )
        );
      }
    }
    if (typeof message === "string") {
      return message;
    }
    if (typeof defaultMessage === "string") {
      return defaultMessage;
    }
    return id;
  }

  // bazel-out/darwin-fastbuild/bin/packages/intl/lib/src/dateTime.js
  var DATE_TIME_FORMAT_OPTIONS = [
    "localeMatcher",
    "formatMatcher",
    "timeZone",
    "hour12",
    "weekday",
    "era",
    "year",
    "month",
    "day",
    "hour",
    "minute",
    "second",
    "timeZoneName",
    "hourCycle",
    "dateStyle",
    "timeStyle",
    "calendar",
    "numberingSystem",
  ];
  function getFormatter(_a2, type, getDateTimeFormat, options) {
    var locale = _a2.locale,
      formats = _a2.formats,
      onError = _a2.onError,
      timeZone = _a2.timeZone;
    if (options === void 0) {
      options = {};
    }
    var format = options.format;
    var defaults = __assign(
      __assign({}, timeZone && { timeZone: timeZone }),
      format && getNamedFormat(formats, type, format, onError)
    );
    var filteredOptions = filterProps(
      options,
      DATE_TIME_FORMAT_OPTIONS,
      defaults
    );
    if (
      type === "time" &&
      !filteredOptions.hour &&
      !filteredOptions.minute &&
      !filteredOptions.second &&
      !filteredOptions.timeStyle &&
      !filteredOptions.dateStyle
    ) {
      filteredOptions = __assign(__assign({}, filteredOptions), {
        hour: "numeric",
        minute: "numeric",
      });
    }
    return getDateTimeFormat(locale, filteredOptions);
  }
  function formatDate(config, getDateTimeFormat) {
    var _a2 = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      _a2[_i - 2] = arguments[_i];
    }
    var value = _a2[0],
      _b = _a2[1],
      options = _b === void 0 ? {} : _b;
    var date = typeof value === "string" ? new Date(value || 0) : value;
    try {
      return getFormatter(config, "date", getDateTimeFormat, options).format(
        date
      );
    } catch (e) {
      config.onError(
        new IntlError(IntlErrorCode.FORMAT_ERROR, "Error formatting date.", e)
      );
    }
    return String(date);
  }
  function formatTime(config, getDateTimeFormat) {
    var _a2 = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      _a2[_i - 2] = arguments[_i];
    }
    var value = _a2[0],
      _b = _a2[1],
      options = _b === void 0 ? {} : _b;
    var date = typeof value === "string" ? new Date(value || 0) : value;
    try {
      return getFormatter(config, "time", getDateTimeFormat, options).format(
        date
      );
    } catch (e) {
      config.onError(
        new IntlError(IntlErrorCode.FORMAT_ERROR, "Error formatting time.", e)
      );
    }
    return String(date);
  }
  function formatDateTimeRange(config, getDateTimeFormat) {
    var _a2 = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      _a2[_i - 2] = arguments[_i];
    }
    var from = _a2[0],
      to = _a2[1],
      _b = _a2[2],
      options = _b === void 0 ? {} : _b;
    var timeZone = config.timeZone,
      locale = config.locale,
      onError = config.onError;
    var filteredOptions = filterProps(
      options,
      DATE_TIME_FORMAT_OPTIONS,
      timeZone ? { timeZone: timeZone } : {}
    );
    try {
      return getDateTimeFormat(locale, filteredOptions).formatRange(from, to);
    } catch (e) {
      onError(
        new IntlError(
          IntlErrorCode.FORMAT_ERROR,
          "Error formatting date time range.",
          e
        )
      );
    }
    return String(from);
  }
  function formatDateToParts(config, getDateTimeFormat) {
    var _a2 = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      _a2[_i - 2] = arguments[_i];
    }
    var value = _a2[0],
      _b = _a2[1],
      options = _b === void 0 ? {} : _b;
    var date = typeof value === "string" ? new Date(value || 0) : value;
    try {
      return getFormatter(
        config,
        "date",
        getDateTimeFormat,
        options
      ).formatToParts(date);
    } catch (e) {
      config.onError(
        new IntlError(IntlErrorCode.FORMAT_ERROR, "Error formatting date.", e)
      );
    }
    return [];
  }
  function formatTimeToParts(config, getDateTimeFormat) {
    var _a2 = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      _a2[_i - 2] = arguments[_i];
    }
    var value = _a2[0],
      _b = _a2[1],
      options = _b === void 0 ? {} : _b;
    var date = typeof value === "string" ? new Date(value || 0) : value;
    try {
      return getFormatter(
        config,
        "time",
        getDateTimeFormat,
        options
      ).formatToParts(date);
    } catch (e) {
      config.onError(
        new IntlError(IntlErrorCode.FORMAT_ERROR, "Error formatting time.", e)
      );
    }
    return [];
  }

  // bazel-out/darwin-fastbuild/bin/packages/intl/lib/src/displayName.js
  var DISPLAY_NAMES_OPTONS = ["localeMatcher", "style", "type", "fallback"];
  function formatDisplayName(_a2, getDisplayNames, value, options) {
    var locale = _a2.locale,
      onError = _a2.onError;
    var DisplayNames = Intl.DisplayNames;
    if (!DisplayNames) {
      onError(
        new FormatError(
          'Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n',
          ErrorCode.MISSING_INTL_API
        )
      );
    }
    var filteredOptions = filterProps(options, DISPLAY_NAMES_OPTONS);
    try {
      return getDisplayNames(locale, filteredOptions).of(value);
    } catch (e) {
      onError(
        new IntlError(
          IntlErrorCode.FORMAT_ERROR,
          "Error formatting display name.",
          e
        )
      );
    }
  }

  // bazel-out/darwin-fastbuild/bin/packages/intl/lib/src/list.js
  var LIST_FORMAT_OPTIONS = ["localeMatcher", "type", "style"];
  var now = Date.now();
  function generateToken(i) {
    return "".concat(now, "_").concat(i, "_").concat(now);
  }
  function formatList(opts, getListFormat, values, options) {
    if (options === void 0) {
      options = {};
    }
    var results = formatListToParts(
      opts,
      getListFormat,
      values,
      options
    ).reduce(function (all, el) {
      var val = el.value;
      if (typeof val !== "string") {
        all.push(val);
      } else if (typeof all[all.length - 1] === "string") {
        all[all.length - 1] += val;
      } else {
        all.push(val);
      }
      return all;
    }, []);
    return results.length === 1 ? results[0] : results;
  }
  function formatListToParts(_a2, getListFormat, values, options) {
    var locale = _a2.locale,
      onError = _a2.onError;
    if (options === void 0) {
      options = {};
    }
    var ListFormat = Intl.ListFormat;
    if (!ListFormat) {
      onError(
        new FormatError(
          'Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n',
          ErrorCode.MISSING_INTL_API
        )
      );
    }
    var filteredOptions = filterProps(options, LIST_FORMAT_OPTIONS);
    try {
      var richValues_1 = {};
      var serializedValues = values.map(function (v, i) {
        if (typeof v === "object") {
          var id = generateToken(i);
          richValues_1[id] = v;
          return id;
        }
        return String(v);
      });
      return getListFormat(locale, filteredOptions)
        .formatToParts(serializedValues)
        .map(function (part) {
          return part.type === "literal"
            ? part
            : __assign(__assign({}, part), {
                value: richValues_1[part.value] || part.value,
              });
        });
    } catch (e) {
      onError(
        new IntlError(IntlErrorCode.FORMAT_ERROR, "Error formatting list.", e)
      );
    }
    return values;
  }

  // bazel-out/darwin-fastbuild/bin/packages/intl/lib/src/plural.js
  var PLURAL_FORMAT_OPTIONS = ["localeMatcher", "type"];
  function formatPlural(_a2, getPluralRules, value, options) {
    var locale = _a2.locale,
      onError = _a2.onError;
    if (options === void 0) {
      options = {};
    }
    if (!Intl.PluralRules) {
      onError(
        new FormatError(
          'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
          ErrorCode.MISSING_INTL_API
        )
      );
    }
    var filteredOptions = filterProps(options, PLURAL_FORMAT_OPTIONS);
    try {
      return getPluralRules(locale, filteredOptions).select(value);
    } catch (e) {
      onError(new IntlFormatError("Error formatting plural.", locale, e));
    }
    return "other";
  }

  // bazel-out/darwin-fastbuild/bin/packages/intl/lib/src/relativeTime.js
  var RELATIVE_TIME_FORMAT_OPTIONS = ["numeric", "style"];
  function getFormatter2(_a2, getRelativeTimeFormat, options) {
    var locale = _a2.locale,
      formats = _a2.formats,
      onError = _a2.onError;
    if (options === void 0) {
      options = {};
    }
    var format = options.format;
    var defaults =
      (!!format && getNamedFormat(formats, "relative", format, onError)) || {};
    var filteredOptions = filterProps(
      options,
      RELATIVE_TIME_FORMAT_OPTIONS,
      defaults
    );
    return getRelativeTimeFormat(locale, filteredOptions);
  }
  function formatRelativeTime(
    config,
    getRelativeTimeFormat,
    value,
    unit,
    options
  ) {
    if (options === void 0) {
      options = {};
    }
    if (!unit) {
      unit = "second";
    }
    var RelativeTimeFormat = Intl.RelativeTimeFormat;
    if (!RelativeTimeFormat) {
      config.onError(
        new FormatError(
          'Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n',
          ErrorCode.MISSING_INTL_API
        )
      );
    }
    try {
      return getFormatter2(config, getRelativeTimeFormat, options).format(
        value,
        unit
      );
    } catch (e) {
      config.onError(
        new IntlFormatError("Error formatting relative time.", config.locale, e)
      );
    }
    return String(value);
  }

  // bazel-out/darwin-fastbuild/bin/packages/intl/lib/src/number.js
  var NUMBER_FORMAT_OPTIONS = [
    "localeMatcher",
    "style",
    "currency",
    "currencyDisplay",
    "unit",
    "unitDisplay",
    "useGrouping",
    "minimumIntegerDigits",
    "minimumFractionDigits",
    "maximumFractionDigits",
    "minimumSignificantDigits",
    "maximumSignificantDigits",
    "compactDisplay",
    "currencyDisplay",
    "currencySign",
    "notation",
    "signDisplay",
    "unit",
    "unitDisplay",
    "numberingSystem",
  ];
  function getFormatter3(_a2, getNumberFormat, options) {
    var locale = _a2.locale,
      formats = _a2.formats,
      onError = _a2.onError;
    if (options === void 0) {
      options = {};
    }
    var format = options.format;
    var defaults =
      (format && getNamedFormat(formats, "number", format, onError)) || {};
    var filteredOptions = filterProps(options, NUMBER_FORMAT_OPTIONS, defaults);
    return getNumberFormat(locale, filteredOptions);
  }
  function formatNumber(config, getNumberFormat, value, options) {
    if (options === void 0) {
      options = {};
    }
    try {
      return getFormatter3(config, getNumberFormat, options).format(value);
    } catch (e) {
      config.onError(
        new IntlError(IntlErrorCode.FORMAT_ERROR, "Error formatting number.", e)
      );
    }
    return String(value);
  }
  function formatNumberToParts(config, getNumberFormat, value, options) {
    if (options === void 0) {
      options = {};
    }
    try {
      return getFormatter3(config, getNumberFormat, options).formatToParts(
        value
      );
    } catch (e) {
      config.onError(
        new IntlError(IntlErrorCode.FORMAT_ERROR, "Error formatting number.", e)
      );
    }
    return [];
  }

  // bazel-out/darwin-fastbuild/bin/packages/intl/lib/src/create-intl.js
  function messagesContainString(messages) {
    var firstMessage = messages ? messages[Object.keys(messages)[0]] : void 0;
    return typeof firstMessage === "string";
  }
  function verifyConfigMessages(config) {
    if (
      config.onWarn &&
      config.defaultRichTextElements &&
      messagesContainString(config.messages || {})
    ) {
      config.onWarn(
        '[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution'
      );
    }
  }
  function createIntl(config, cache) {
    var formatters = createFormatters(cache);
    var resolvedConfig = __assign(__assign({}, DEFAULT_INTL_CONFIG), config);
    var locale = resolvedConfig.locale,
      defaultLocale = resolvedConfig.defaultLocale,
      onError = resolvedConfig.onError;
    if (!locale) {
      if (onError) {
        onError(
          new InvalidConfigError(
            '"locale" was not configured, using "'.concat(
              defaultLocale,
              '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'
            )
          )
        );
      }
      resolvedConfig.locale = resolvedConfig.defaultLocale || "en";
    } else if (
      !Intl.NumberFormat.supportedLocalesOf(locale).length &&
      onError
    ) {
      onError(
        new MissingDataError(
          'Missing locale data for locale: "'
            .concat(locale, '" in Intl.NumberFormat. Using default locale: "')
            .concat(
              defaultLocale,
              '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'
            )
        )
      );
    } else if (
      !Intl.DateTimeFormat.supportedLocalesOf(locale).length &&
      onError
    ) {
      onError(
        new MissingDataError(
          'Missing locale data for locale: "'
            .concat(locale, '" in Intl.DateTimeFormat. Using default locale: "')
            .concat(
              defaultLocale,
              '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'
            )
        )
      );
    }
    verifyConfigMessages(resolvedConfig);
    return __assign(__assign({}, resolvedConfig), {
      formatters: formatters,
      formatNumber: formatNumber.bind(
        null,
        resolvedConfig,
        formatters.getNumberFormat
      ),
      formatNumberToParts: formatNumberToParts.bind(
        null,
        resolvedConfig,
        formatters.getNumberFormat
      ),
      formatRelativeTime: formatRelativeTime.bind(
        null,
        resolvedConfig,
        formatters.getRelativeTimeFormat
      ),
      formatDate: formatDate.bind(
        null,
        resolvedConfig,
        formatters.getDateTimeFormat
      ),
      formatDateToParts: formatDateToParts.bind(
        null,
        resolvedConfig,
        formatters.getDateTimeFormat
      ),
      formatTime: formatTime.bind(
        null,
        resolvedConfig,
        formatters.getDateTimeFormat
      ),
      formatDateTimeRange: formatDateTimeRange.bind(
        null,
        resolvedConfig,
        formatters.getDateTimeFormat
      ),
      formatTimeToParts: formatTimeToParts.bind(
        null,
        resolvedConfig,
        formatters.getDateTimeFormat
      ),
      formatPlural: formatPlural.bind(
        null,
        resolvedConfig,
        formatters.getPluralRules
      ),
      formatMessage: formatMessage.bind(null, resolvedConfig, formatters),
      $t: formatMessage.bind(null, resolvedConfig, formatters),
      formatList: formatList.bind(
        null,
        resolvedConfig,
        formatters.getListFormat
      ),
      formatListToParts: formatListToParts.bind(
        null,
        resolvedConfig,
        formatters.getListFormat
      ),
      formatDisplayName: formatDisplayName.bind(
        null,
        resolvedConfig,
        formatters.getDisplayNames
      ),
    });
  }

  // bazel-out/darwin-fastbuild/bin/packages/react-intl/lib/src/utils.js
  function invariantIntlContext(intl) {
    invariant(
      intl,
      "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry."
    );
  }
  var DEFAULT_INTL_CONFIG2 = __assign(__assign({}, DEFAULT_INTL_CONFIG), {
    textComponent: React.Fragment,
  });
  function assignUniqueKeysToParts(formatXMLElementFn) {
    return function (parts) {
      return formatXMLElementFn(React.Children.toArray(parts));
    };
  }
  function shallowEqual(objA, objB) {
    if (objA === objB) {
      return true;
    }
    if (!objA || !objB) {
      return false;
    }
    var aKeys = Object.keys(objA);
    var bKeys = Object.keys(objB);
    var len = aKeys.length;
    if (bKeys.length !== len) {
      return false;
    }
    for (var i = 0; i < len; i++) {
      var key = aKeys[i];
      if (
        objA[key] !== objB[key] ||
        !Object.prototype.hasOwnProperty.call(objB, key)
      ) {
        return false;
      }
    }
    return true;
  }

  // bazel-out/darwin-fastbuild/bin/packages/react-intl/lib/src/components/injectIntl.js
  function getDisplayName(Component) {
    return Component.displayName || Component.name || "Component";
  }
  var IntlContext = React2.createContext(null);
  var IntlConsumer = IntlContext.Consumer;
  var IntlProvider = IntlContext.Provider;
  var Provider = IntlProvider;
  var Context = IntlContext;
  function injectIntl(WrappedComponent, options) {
    var _a2 = options || {},
      _b = _a2.intlPropName,
      intlPropName = _b === void 0 ? "intl" : _b,
      _c = _a2.forwardRef,
      forwardRef2 = _c === void 0 ? false : _c,
      _d = _a2.enforceContext,
      enforceContext = _d === void 0 ? true : _d;
    var WithIntl = function (props) {
      return React2.createElement(IntlConsumer, null, function (intl) {
        var _a3;
        if (enforceContext) {
          invariantIntlContext(intl);
        }
        var intlProp = ((_a3 = {}), (_a3[intlPropName] = intl), _a3);
        return React2.createElement(
          WrappedComponent,
          __assign({}, props, intlProp, {
            ref: forwardRef2 ? props.forwardedRef : null,
          })
        );
      });
    };
    WithIntl.displayName = "injectIntl(".concat(
      getDisplayName(WrappedComponent),
      ")"
    );
    WithIntl.WrappedComponent = WrappedComponent;
    if (forwardRef2) {
      return (0, import_hoist_non_react_statics.default)(
        React2.forwardRef(function (props, ref) {
          return React2.createElement(
            WithIntl,
            __assign({}, props, { forwardedRef: ref })
          );
        }),
        WrappedComponent
      );
    }
    return (0, import_hoist_non_react_statics.default)(
      WithIntl,
      WrappedComponent
    );
  }

  // bazel-out/darwin-fastbuild/bin/packages/react-intl/lib/src/components/useIntl.js
  function useIntl() {
    var intl = React3.useContext(Context);
    invariantIntlContext(intl);
    return intl;
  }

  // bazel-out/darwin-fastbuild/bin/packages/react-intl/lib/src/components/createFormattedComponent.js
  var DisplayName;
  (function (DisplayName2) {
    DisplayName2["formatDate"] = "FormattedDate";
    DisplayName2["formatTime"] = "FormattedTime";
    DisplayName2["formatNumber"] = "FormattedNumber";
    DisplayName2["formatList"] = "FormattedList";
    DisplayName2["formatDisplayName"] = "FormattedDisplayName";
  })(DisplayName || (DisplayName = {}));
  var DisplayNameParts;
  (function (DisplayNameParts2) {
    DisplayNameParts2["formatDate"] = "FormattedDateParts";
    DisplayNameParts2["formatTime"] = "FormattedTimeParts";
    DisplayNameParts2["formatNumber"] = "FormattedNumberParts";
    DisplayNameParts2["formatList"] = "FormattedListParts";
  })(DisplayNameParts || (DisplayNameParts = {}));
  var FormattedNumberParts = function (props) {
    var intl = useIntl();
    var value = props.value,
      children = props.children,
      formatProps = __rest(props, ["value", "children"]);
    return children(intl.formatNumberToParts(value, formatProps));
  };
  FormattedNumberParts.displayName = "FormattedNumberParts";
  var FormattedListParts = function (props) {
    var intl = useIntl();
    var value = props.value,
      children = props.children,
      formatProps = __rest(props, ["value", "children"]);
    return children(intl.formatListToParts(value, formatProps));
  };
  FormattedNumberParts.displayName = "FormattedNumberParts";
  function createFormattedDateTimePartsComponent(name) {
    var ComponentParts = function (props) {
      var intl = useIntl();
      var value = props.value,
        children = props.children,
        formatProps = __rest(props, ["value", "children"]);
      var date = typeof value === "string" ? new Date(value || 0) : value;
      var formattedParts =
        name === "formatDate"
          ? intl.formatDateToParts(date, formatProps)
          : intl.formatTimeToParts(date, formatProps);
      return children(formattedParts);
    };
    ComponentParts.displayName = DisplayNameParts[name];
    return ComponentParts;
  }
  function createFormattedComponent(name) {
    var Component = function (props) {
      var intl = useIntl();
      var value = props.value,
        children = props.children,
        formatProps = __rest(props, ["value", "children"]);
      var formattedValue = intl[name](value, formatProps);
      if (typeof children === "function") {
        return children(formattedValue);
      }
      var Text = intl.textComponent || React4.Fragment;
      return React4.createElement(Text, null, formattedValue);
    };
    Component.displayName = DisplayName[name];
    return Component;
  }

  // bazel-out/darwin-fastbuild/bin/packages/react-intl/lib/src/components/provider.js
  var React5 = __toESM(window.React);
  function processIntlConfig(config) {
    return {
      locale: config.locale,
      timeZone: config.timeZone,
      fallbackOnEmptyString: config.fallbackOnEmptyString,
      formats: config.formats,
      textComponent: config.textComponent,
      messages: config.messages,
      defaultLocale: config.defaultLocale,
      defaultFormats: config.defaultFormats,
      onError: config.onError,
      onWarn: config.onWarn,
      wrapRichTextChunksInFragment: config.wrapRichTextChunksInFragment,
      defaultRichTextElements: config.defaultRichTextElements,
    };
  }
  function assignUniqueKeysToFormatXMLElementFnArgument(values) {
    if (!values) {
      return values;
    }
    return Object.keys(values).reduce(function (acc, k) {
      var v = values[k];
      acc[k] = isFormatXMLElementFn(v) ? assignUniqueKeysToParts(v) : v;
      return acc;
    }, {});
  }
  var formatMessage2 = function (config, formatters, descriptor, rawValues) {
    var rest = [];
    for (var _i = 4; _i < arguments.length; _i++) {
      rest[_i - 4] = arguments[_i];
    }
    var values = assignUniqueKeysToFormatXMLElementFnArgument(rawValues);
    var chunks = formatMessage.apply(
      void 0,
      __spreadArray([config, formatters, descriptor, values], rest, false)
    );
    if (Array.isArray(chunks)) {
      return React5.Children.toArray(chunks);
    }
    return chunks;
  };
  var createIntl2 = function (_a2, cache) {
    var rawDefaultRichTextElements = _a2.defaultRichTextElements,
      config = __rest(_a2, ["defaultRichTextElements"]);
    var defaultRichTextElements = assignUniqueKeysToFormatXMLElementFnArgument(
      rawDefaultRichTextElements
    );
    var coreIntl = createIntl(
      __assign(__assign(__assign({}, DEFAULT_INTL_CONFIG2), config), {
        defaultRichTextElements: defaultRichTextElements,
      }),
      cache
    );
    return __assign(__assign({}, coreIntl), {
      formatMessage: formatMessage2.bind(
        null,
        {
          locale: coreIntl.locale,
          timeZone: coreIntl.timeZone,
          fallbackOnEmptyString: coreIntl.fallbackOnEmptyString,
          formats: coreIntl.formats,
          defaultLocale: coreIntl.defaultLocale,
          defaultFormats: coreIntl.defaultFormats,
          messages: coreIntl.messages,
          onError: coreIntl.onError,
          defaultRichTextElements: defaultRichTextElements,
        },
        coreIntl.formatters
      ),
    });
  };
  var IntlProvider2 = (function (_super) {
    __extends(IntlProvider3, _super);
    function IntlProvider3() {
      var _this = (_super !== null && _super.apply(this, arguments)) || this;
      _this.cache = createIntlCache();
      _this.state = {
        cache: _this.cache,
        intl: createIntl2(processIntlConfig(_this.props), _this.cache),
        prevConfig: processIntlConfig(_this.props),
      };
      return _this;
    }
    IntlProvider3.getDerivedStateFromProps = function (props, _a2) {
      var prevConfig = _a2.prevConfig,
        cache = _a2.cache;
      var config = processIntlConfig(props);
      if (!shallowEqual(prevConfig, config)) {
        return {
          intl: createIntl2(config, cache),
          prevConfig: config,
        };
      }
      return null;
    };
    IntlProvider3.prototype.render = function () {
      invariantIntlContext(this.state.intl);
      return React5.createElement(
        Provider,
        { value: this.state.intl },
        this.props.children
      );
    };
    IntlProvider3.displayName = "IntlProvider";
    IntlProvider3.defaultProps = DEFAULT_INTL_CONFIG2;
    return IntlProvider3;
  })(React5.PureComponent);
  var provider_default = IntlProvider2;

  // bazel-out/darwin-fastbuild/bin/packages/react-intl/lib/src/components/relative.js
  var React6 = __toESM(window.React);
  var MINUTE = 60;
  var HOUR = 60 * 60;
  var DAY = 60 * 60 * 24;
  function selectUnit(seconds) {
    var absValue = Math.abs(seconds);
    if (absValue < MINUTE) {
      return "second";
    }
    if (absValue < HOUR) {
      return "minute";
    }
    if (absValue < DAY) {
      return "hour";
    }
    return "day";
  }
  function getDurationInSeconds(unit) {
    switch (unit) {
      case "second":
        return 1;
      case "minute":
        return MINUTE;
      case "hour":
        return HOUR;
      default:
        return DAY;
    }
  }
  function valueToSeconds(value, unit) {
    if (!value) {
      return 0;
    }
    switch (unit) {
      case "second":
        return value;
      case "minute":
        return value * MINUTE;
      default:
        return value * HOUR;
    }
  }
  var INCREMENTABLE_UNITS = ["second", "minute", "hour"];
  function canIncrement(unit) {
    if (unit === void 0) {
      unit = "second";
    }
    return INCREMENTABLE_UNITS.indexOf(unit) > -1;
  }
  var SimpleFormattedRelativeTime = function (props) {
    var _a2 = useIntl(),
      formatRelativeTime2 = _a2.formatRelativeTime,
      Text = _a2.textComponent;
    var children = props.children,
      value = props.value,
      unit = props.unit,
      otherProps = __rest(props, ["children", "value", "unit"]);
    var formattedRelativeTime = formatRelativeTime2(
      value || 0,
      unit,
      otherProps
    );
    if (typeof children === "function") {
      return children(formattedRelativeTime);
    }
    if (Text) {
      return React6.createElement(Text, null, formattedRelativeTime);
    }
    return React6.createElement(React6.Fragment, null, formattedRelativeTime);
  };
  var FormattedRelativeTime = function (_a2) {
    var value = _a2.value,
      unit = _a2.unit,
      updateIntervalInSeconds = _a2.updateIntervalInSeconds,
      otherProps = __rest(_a2, ["value", "unit", "updateIntervalInSeconds"]);
    invariant(
      !updateIntervalInSeconds ||
        !!(updateIntervalInSeconds && canIncrement(unit)),
      "Cannot schedule update with unit longer than hour"
    );
    var _b = React6.useState(),
      prevUnit = _b[0],
      setPrevUnit = _b[1];
    var _c = React6.useState(0),
      prevValue = _c[0],
      setPrevValue = _c[1];
    var _d = React6.useState(0),
      currentValueInSeconds = _d[0],
      setCurrentValueInSeconds = _d[1];
    var updateTimer;
    if (unit !== prevUnit || value !== prevValue) {
      setPrevValue(value || 0);
      setPrevUnit(unit);
      setCurrentValueInSeconds(
        canIncrement(unit) ? valueToSeconds(value, unit) : 0
      );
    }
    React6.useEffect(
      function () {
        function clearUpdateTimer() {
          clearTimeout(updateTimer);
        }
        clearUpdateTimer();
        if (!updateIntervalInSeconds || !canIncrement(unit)) {
          return clearUpdateTimer;
        }
        var nextValueInSeconds =
          currentValueInSeconds - updateIntervalInSeconds;
        var nextUnit = selectUnit(nextValueInSeconds);
        if (nextUnit === "day") {
          return clearUpdateTimer;
        }
        var unitDuration2 = getDurationInSeconds(nextUnit);
        var remainder = nextValueInSeconds % unitDuration2;
        var prevInterestingValueInSeconds = nextValueInSeconds - remainder;
        var nextInterestingValueInSeconds =
          prevInterestingValueInSeconds >= currentValueInSeconds
            ? prevInterestingValueInSeconds - unitDuration2
            : prevInterestingValueInSeconds;
        var delayInSeconds = Math.abs(
          nextInterestingValueInSeconds - currentValueInSeconds
        );
        if (currentValueInSeconds !== nextInterestingValueInSeconds) {
          updateTimer = setTimeout(function () {
            return setCurrentValueInSeconds(nextInterestingValueInSeconds);
          }, delayInSeconds * 1e3);
        }
        return clearUpdateTimer;
      },
      [currentValueInSeconds, updateIntervalInSeconds, unit]
    );
    var currentValue = value || 0;
    var currentUnit = unit;
    if (
      canIncrement(unit) &&
      typeof currentValueInSeconds === "number" &&
      updateIntervalInSeconds
    ) {
      currentUnit = selectUnit(currentValueInSeconds);
      var unitDuration = getDurationInSeconds(currentUnit);
      currentValue = Math.round(currentValueInSeconds / unitDuration);
    }
    return React6.createElement(
      SimpleFormattedRelativeTime,
      __assign({ value: currentValue, unit: currentUnit }, otherProps)
    );
  };
  FormattedRelativeTime.displayName = "FormattedRelativeTime";
  FormattedRelativeTime.defaultProps = {
    value: 0,
    unit: "second",
  };
  var relative_default = FormattedRelativeTime;

  // bazel-out/darwin-fastbuild/bin/packages/react-intl/lib/src/components/plural.js
  var React7 = __toESM(window.React);
  var FormattedPlural = function (props) {
    var _a2 = useIntl(),
      formatPlural2 = _a2.formatPlural,
      Text = _a2.textComponent;
    var value = props.value,
      other = props.other,
      children = props.children;
    var pluralCategory = formatPlural2(value, props);
    var formattedPlural = props[pluralCategory] || other;
    if (typeof children === "function") {
      return children(formattedPlural);
    }
    if (Text) {
      return React7.createElement(Text, null, formattedPlural);
    }
    return formattedPlural;
  };
  FormattedPlural.defaultProps = {
    type: "cardinal",
  };
  FormattedPlural.displayName = "FormattedPlural";
  var plural_default = FormattedPlural;

  // bazel-out/darwin-fastbuild/bin/packages/react-intl/lib/src/components/message.js
  var React8 = __toESM(window.React);
  function areEqual(prevProps, nextProps) {
    var values = prevProps.values,
      otherProps = __rest(prevProps, ["values"]);
    var nextValues = nextProps.values,
      nextOtherProps = __rest(nextProps, ["values"]);
    return (
      shallowEqual(nextValues, values) &&
      shallowEqual(otherProps, nextOtherProps)
    );
  }
  function FormattedMessage(props) {
    var intl = useIntl();
    var formatMessage3 = intl.formatMessage,
      _a2 = intl.textComponent,
      Text = _a2 === void 0 ? React8.Fragment : _a2;
    var id = props.id,
      description = props.description,
      defaultMessage = props.defaultMessage,
      values = props.values,
      children = props.children,
      _b = props.tagName,
      Component = _b === void 0 ? Text : _b,
      ignoreTag = props.ignoreTag;
    var descriptor = {
      id: id,
      description: description,
      defaultMessage: defaultMessage,
    };
    var nodes = formatMessage3(descriptor, values, {
      ignoreTag: ignoreTag,
    });
    if (typeof children === "function") {
      return children(Array.isArray(nodes) ? nodes : [nodes]);
    }
    if (Component) {
      return React8.createElement(
        Component,
        null,
        React8.Children.toArray(nodes)
      );
    }
    return React8.createElement(React8.Fragment, null, nodes);
  }
  FormattedMessage.displayName = "FormattedMessage";
  var MemoizedFormattedMessage = React8.memo(FormattedMessage, areEqual);
  MemoizedFormattedMessage.displayName = "MemoizedFormattedMessage";
  var message_default = MemoizedFormattedMessage;

  // bazel-out/darwin-fastbuild/bin/packages/react-intl/lib/src/components/dateTimeRange.js
  var React9 = __toESM(window.React);
  var FormattedDateTimeRange = function (props) {
    var intl = useIntl();
    var from = props.from,
      to = props.to,
      children = props.children,
      formatProps = __rest(props, ["from", "to", "children"]);
    var formattedValue = intl.formatDateTimeRange(from, to, formatProps);
    if (typeof children === "function") {
      return children(formattedValue);
    }
    var Text = intl.textComponent || React9.Fragment;
    return React9.createElement(Text, null, formattedValue);
  };
  FormattedDateTimeRange.displayName = "FormattedDateTimeRange";
  var dateTimeRange_default = FormattedDateTimeRange;

  // bazel-out/darwin-fastbuild/bin/packages/react-intl/lib/index.js
  function defineMessages(msgs) {
    return msgs;
  }
  function defineMessage(msg) {
    return msg;
  }
  var FormattedDate = createFormattedComponent("formatDate");
  var FormattedTime = createFormattedComponent("formatTime");
  var FormattedNumber = createFormattedComponent("formatNumber");
  var FormattedList = createFormattedComponent("formatList");
  var FormattedDisplayName = createFormattedComponent("formatDisplayName");
  var FormattedDateParts = createFormattedDateTimePartsComponent("formatDate");
  var FormattedTimeParts = createFormattedDateTimePartsComponent("formatTime");
  return __toCommonJS(lib_exports);
})();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
//# sourceMappingURL=react-intl.esbuild.iife.js.map
