'use strict';

var require$$0 = require('react');

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production = {};

/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production;

function requireReactJsxRuntime_production () {
	if (hasRequiredReactJsxRuntime_production) return reactJsxRuntime_production;
	hasRequiredReactJsxRuntime_production = 1;
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	function jsxProd(type, config, maybeKey) {
	  var key = null;
	  void 0 !== maybeKey && (key = "" + maybeKey);
	  void 0 !== config.key && (key = "" + config.key);
	  if ("key" in config) {
	    maybeKey = {};
	    for (var propName in config)
	      "key" !== propName && (maybeKey[propName] = config[propName]);
	  } else maybeKey = config;
	  config = maybeKey.ref;
	  return {
	    $$typeof: REACT_ELEMENT_TYPE,
	    type: type,
	    key: key,
	    ref: void 0 !== config ? config : null,
	    props: maybeKey
	  };
	}
	reactJsxRuntime_production.Fragment = REACT_FRAGMENT_TYPE;
	reactJsxRuntime_production.jsx = jsxProd;
	reactJsxRuntime_production.jsxs = jsxProd;
	return reactJsxRuntime_production;
}

var reactJsxRuntime_development = {};

/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_development;

function requireReactJsxRuntime_development () {
	if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
	hasRequiredReactJsxRuntime_development = 1;
	"production" !== process.env.NODE_ENV &&
	  (function () {
	    function getComponentNameFromType(type) {
	      if (null == type) return null;
	      if ("function" === typeof type)
	        return type.$$typeof === REACT_CLIENT_REFERENCE
	          ? null
	          : type.displayName || type.name || null;
	      if ("string" === typeof type) return type;
	      switch (type) {
	        case REACT_FRAGMENT_TYPE:
	          return "Fragment";
	        case REACT_PROFILER_TYPE:
	          return "Profiler";
	        case REACT_STRICT_MODE_TYPE:
	          return "StrictMode";
	        case REACT_SUSPENSE_TYPE:
	          return "Suspense";
	        case REACT_SUSPENSE_LIST_TYPE:
	          return "SuspenseList";
	        case REACT_ACTIVITY_TYPE:
	          return "Activity";
	      }
	      if ("object" === typeof type)
	        switch (
	          ("number" === typeof type.tag &&
	            console.error(
	              "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
	            ),
	          type.$$typeof)
	        ) {
	          case REACT_PORTAL_TYPE:
	            return "Portal";
	          case REACT_CONTEXT_TYPE:
	            return type.displayName || "Context";
	          case REACT_CONSUMER_TYPE:
	            return (type._context.displayName || "Context") + ".Consumer";
	          case REACT_FORWARD_REF_TYPE:
	            var innerType = type.render;
	            type = type.displayName;
	            type ||
	              ((type = innerType.displayName || innerType.name || ""),
	              (type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef"));
	            return type;
	          case REACT_MEMO_TYPE:
	            return (
	              (innerType = type.displayName || null),
	              null !== innerType
	                ? innerType
	                : getComponentNameFromType(type.type) || "Memo"
	            );
	          case REACT_LAZY_TYPE:
	            innerType = type._payload;
	            type = type._init;
	            try {
	              return getComponentNameFromType(type(innerType));
	            } catch (x) {}
	        }
	      return null;
	    }
	    function testStringCoercion(value) {
	      return "" + value;
	    }
	    function checkKeyStringCoercion(value) {
	      try {
	        testStringCoercion(value);
	        var JSCompiler_inline_result = !1;
	      } catch (e) {
	        JSCompiler_inline_result = true;
	      }
	      if (JSCompiler_inline_result) {
	        JSCompiler_inline_result = console;
	        var JSCompiler_temp_const = JSCompiler_inline_result.error;
	        var JSCompiler_inline_result$jscomp$0 =
	          ("function" === typeof Symbol &&
	            Symbol.toStringTag &&
	            value[Symbol.toStringTag]) ||
	          value.constructor.name ||
	          "Object";
	        JSCompiler_temp_const.call(
	          JSCompiler_inline_result,
	          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
	          JSCompiler_inline_result$jscomp$0
	        );
	        return testStringCoercion(value);
	      }
	    }
	    function getTaskName(type) {
	      if (type === REACT_FRAGMENT_TYPE) return "<>";
	      if (
	        "object" === typeof type &&
	        null !== type &&
	        type.$$typeof === REACT_LAZY_TYPE
	      )
	        return "<...>";
	      try {
	        var name = getComponentNameFromType(type);
	        return name ? "<" + name + ">" : "<...>";
	      } catch (x) {
	        return "<...>";
	      }
	    }
	    function getOwner() {
	      var dispatcher = ReactSharedInternals.A;
	      return null === dispatcher ? null : dispatcher.getOwner();
	    }
	    function UnknownOwner() {
	      return Error("react-stack-top-frame");
	    }
	    function hasValidKey(config) {
	      if (hasOwnProperty.call(config, "key")) {
	        var getter = Object.getOwnPropertyDescriptor(config, "key").get;
	        if (getter && getter.isReactWarning) return false;
	      }
	      return void 0 !== config.key;
	    }
	    function defineKeyPropWarningGetter(props, displayName) {
	      function warnAboutAccessingKey() {
	        specialPropKeyWarningShown ||
	          ((specialPropKeyWarningShown = true),
	          console.error(
	            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
	            displayName
	          ));
	      }
	      warnAboutAccessingKey.isReactWarning = true;
	      Object.defineProperty(props, "key", {
	        get: warnAboutAccessingKey,
	        configurable: true
	      });
	    }
	    function elementRefGetterWithDeprecationWarning() {
	      var componentName = getComponentNameFromType(this.type);
	      didWarnAboutElementRef[componentName] ||
	        ((didWarnAboutElementRef[componentName] = true),
	        console.error(
	          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
	        ));
	      componentName = this.props.ref;
	      return void 0 !== componentName ? componentName : null;
	    }
	    function ReactElement(type, key, props, owner, debugStack, debugTask) {
	      var refProp = props.ref;
	      type = {
	        $$typeof: REACT_ELEMENT_TYPE,
	        type: type,
	        key: key,
	        props: props,
	        _owner: owner
	      };
	      null !== (void 0 !== refProp ? refProp : null)
	        ? Object.defineProperty(type, "ref", {
	            enumerable: false,
	            get: elementRefGetterWithDeprecationWarning
	          })
	        : Object.defineProperty(type, "ref", { enumerable: false, value: null });
	      type._store = {};
	      Object.defineProperty(type._store, "validated", {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: 0
	      });
	      Object.defineProperty(type, "_debugInfo", {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: null
	      });
	      Object.defineProperty(type, "_debugStack", {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: debugStack
	      });
	      Object.defineProperty(type, "_debugTask", {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: debugTask
	      });
	      Object.freeze && (Object.freeze(type.props), Object.freeze(type));
	      return type;
	    }
	    function jsxDEVImpl(
	      type,
	      config,
	      maybeKey,
	      isStaticChildren,
	      debugStack,
	      debugTask
	    ) {
	      var children = config.children;
	      if (void 0 !== children)
	        if (isStaticChildren)
	          if (isArrayImpl(children)) {
	            for (
	              isStaticChildren = 0;
	              isStaticChildren < children.length;
	              isStaticChildren++
	            )
	              validateChildKeys(children[isStaticChildren]);
	            Object.freeze && Object.freeze(children);
	          } else
	            console.error(
	              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
	            );
	        else validateChildKeys(children);
	      if (hasOwnProperty.call(config, "key")) {
	        children = getComponentNameFromType(type);
	        var keys = Object.keys(config).filter(function (k) {
	          return "key" !== k;
	        });
	        isStaticChildren =
	          0 < keys.length
	            ? "{key: someKey, " + keys.join(": ..., ") + ": ...}"
	            : "{key: someKey}";
	        didWarnAboutKeySpread[children + isStaticChildren] ||
	          ((keys =
	            0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}"),
	          console.error(
	            'A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',
	            isStaticChildren,
	            children,
	            keys,
	            children
	          ),
	          (didWarnAboutKeySpread[children + isStaticChildren] = true));
	      }
	      children = null;
	      void 0 !== maybeKey &&
	        (checkKeyStringCoercion(maybeKey), (children = "" + maybeKey));
	      hasValidKey(config) &&
	        (checkKeyStringCoercion(config.key), (children = "" + config.key));
	      if ("key" in config) {
	        maybeKey = {};
	        for (var propName in config)
	          "key" !== propName && (maybeKey[propName] = config[propName]);
	      } else maybeKey = config;
	      children &&
	        defineKeyPropWarningGetter(
	          maybeKey,
	          "function" === typeof type
	            ? type.displayName || type.name || "Unknown"
	            : type
	        );
	      return ReactElement(
	        type,
	        children,
	        maybeKey,
	        getOwner(),
	        debugStack,
	        debugTask
	      );
	    }
	    function validateChildKeys(node) {
	      isValidElement(node)
	        ? node._store && (node._store.validated = 1)
	        : "object" === typeof node &&
	          null !== node &&
	          node.$$typeof === REACT_LAZY_TYPE &&
	          ("fulfilled" === node._payload.status
	            ? isValidElement(node._payload.value) &&
	              node._payload.value._store &&
	              (node._payload.value._store.validated = 1)
	            : node._store && (node._store.validated = 1));
	    }
	    function isValidElement(object) {
	      return (
	        "object" === typeof object &&
	        null !== object &&
	        object.$$typeof === REACT_ELEMENT_TYPE
	      );
	    }
	    var React = require$$0,
	      REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	      REACT_PORTAL_TYPE = Symbol.for("react.portal"),
	      REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
	      REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
	      REACT_PROFILER_TYPE = Symbol.for("react.profiler"),
	      REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
	      REACT_CONTEXT_TYPE = Symbol.for("react.context"),
	      REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
	      REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
	      REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
	      REACT_MEMO_TYPE = Symbol.for("react.memo"),
	      REACT_LAZY_TYPE = Symbol.for("react.lazy"),
	      REACT_ACTIVITY_TYPE = Symbol.for("react.activity"),
	      REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"),
	      ReactSharedInternals =
	        React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
	      hasOwnProperty = Object.prototype.hasOwnProperty,
	      isArrayImpl = Array.isArray,
	      createTask = console.createTask
	        ? console.createTask
	        : function () {
	            return null;
	          };
	    React = {
	      react_stack_bottom_frame: function (callStackForError) {
	        return callStackForError();
	      }
	    };
	    var specialPropKeyWarningShown;
	    var didWarnAboutElementRef = {};
	    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(
	      React,
	      UnknownOwner
	    )();
	    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
	    var didWarnAboutKeySpread = {};
	    reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
	    reactJsxRuntime_development.jsx = function (type, config, maybeKey) {
	      var trackActualOwner =
	        1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
	      return jsxDEVImpl(
	        type,
	        config,
	        maybeKey,
	        false,
	        trackActualOwner
	          ? Error("react-stack-top-frame")
	          : unknownOwnerDebugStack,
	        trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask
	      );
	    };
	    reactJsxRuntime_development.jsxs = function (type, config, maybeKey) {
	      var trackActualOwner =
	        1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
	      return jsxDEVImpl(
	        type,
	        config,
	        maybeKey,
	        true,
	        trackActualOwner
	          ? Error("react-stack-top-frame")
	          : unknownOwnerDebugStack,
	        trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask
	      );
	    };
	  })();
	return reactJsxRuntime_development;
}

var hasRequiredJsxRuntime;

function requireJsxRuntime () {
	if (hasRequiredJsxRuntime) return jsxRuntime.exports;
	hasRequiredJsxRuntime = 1;

	if (process.env.NODE_ENV === 'production') {
	  jsxRuntime.exports = requireReactJsxRuntime_production();
	} else {
	  jsxRuntime.exports = requireReactJsxRuntime_development();
	}
	return jsxRuntime.exports;
}

var jsxRuntimeExports = requireJsxRuntime();

const parseMarkdown = (text) => {
    return text
        .replace(/\*\*(.*?)\*\*/g, '<strong class="ai-bold">$1</strong>')
        .replace(/\*(.*?)\*/g, '<em class="ai-italic">$1</em>')
        .replace(/`(.*?)`/g, '<code class="ai-inline-code">$1</code>')
        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener" class="ai-link">$1</a>')
        .replace(/^### (.*$)/gm, '<h3 class="ai-h3">$1</h3>')
        .replace(/^## (.*$)/gm, '<h2 class="ai-h2">$1</h2>')
        .replace(/^# (.*$)/gm, '<h1 class="ai-h1">$1</h1>')
        .replace(/^> (.*$)/gm, '<blockquote class="ai-blockquote">$1</blockquote>')
        .replace(/\n/g, '<br>');
};

const getThemeStyles = (theme, darkMode) => `
  .ai-parser-root {
    font-family: system-ui, -apple-system, sans-serif;
    line-height: 1.75;
    font-size: clamp(14px, 1.6vw, 16px);
    color: ${darkMode ? theme.textDark : theme.textLight};
    padding-inline: 12px;       /* Mobile breathing space */
  }

  /* Consistent vertical spacing */
  .ai-text,
  .ai-blockquote,
  .ai-code-block,
  .ai-h1, .ai-h2, .ai-h3 {
    margin-block: 0rem;         /* Same gap for all major elements */
  }

  .ai-bold { font-weight: 700; }

  .ai-italic {
    font-style: italic;
    color: ${darkMode ? "#fff" : "#000"};
  }

  .ai-inline-code {
    background: ${darkMode ? theme.inlineCodeBgDark : theme.inlineCodeBgLight};
    padding: 2px 4px;
    border-radius: 4px;
    font-family: 'Fira Code', monospace;
    font-size: 0.85em;
    color: ${darkMode ? "#ffab70" : "#d73a49"};
  }

  .ai-link {
    color: ${theme.linkColor};
    text-decoration: underline;
  }

  .ai-link:hover { opacity: 0.85; }

  /* Responsive headings */
  .ai-h1 {
    font-size: clamp(24px, 4vw, 32px);
    font-weight: 700;
  }
  .ai-h2 {
    font-size: clamp(20px, 3.3vw, 26px);
    font-weight: 700;
  }
  .ai-h3 {
    font-size: clamp(18px, 2.8vw, 22px);
    font-weight: 700;
  }

  .ai-blockquote {
    border-left: 4px solid ${theme.linkColor};
    padding-left: 16px;
    color: ${darkMode ? "#9ca3af" : "#666"};
    font-style: italic;
  }

  /* Code block container */
  .ai-code-block {
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 6px 28px rgba(0,0,0,0.3);
    border: 1px solid;
    font-family: 'Fira Code', monospace;
  }

  /* Code header */
  .ai-code-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 16px;
    font-size: 12px;
  }

  .ai-code-lang {
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    color: ${darkMode ? "#8b949e" : "#57606a"};
  }

  .ai-copy-btn {
    padding: 6px 14px;
    border-radius: 8px;
    font-weight: 500;
    border: none;
    cursor: pointer;
    transition: background 0.2s;
    color: white;
  }

  /* Code block body */
  .ai-code-pre {
    margin: 0;
    padding: clamp(12px, 4vw, 24px);   /* Responsive padding */
    background: #000;
    color: #fff;
    overflow-x: auto;
    font-size: clamp(12px, 2.8vw, 14px);
  }
`;

// -----------------------
// DEFAULT COLORS
// -----------------------
const defaultTheme = {
    codeBgDark: "#1e1e1e",
    codeBgLight: "#fafafa",
    codeBorderDark: "#2c2c2c",
    codeBorderLight: "#dcdcdc",
    copyButtonBg: "transparent",
    copyButtonHover: "#e0e0e0",
    keyword: "#569CD6",
    string: "#CE9178",
    number: "#B5CEA8",
    comment: "#6A9955",
    function: "#DCDCAA",
};
// -----------------------
// SYNTAX HIGHLIGHTER
// -----------------------
const highlight = (code, theme) => {
    return code
        // comments
        .replace(/(\/\/.*)/g, `<span style="color:${theme.comment}">$1</span>`)
        // strings
        .replace(/(["'`].*?["'`])/g, `<span style="color:${theme.string}">$1</span>`)
        // keywords
        .replace(/\b(const|let|var|function|return|if|else|for|while|import|from|export|class|new|try|catch|await|async|extends|throw)\b/g, `<span style="color:${theme.keyword}">$1</span>`)
        // numbers
        .replace(/\b([0-9]+)\b/g, `<span style="color:${theme.number}">$1</span>`)
        // function names
        .replace(/([a-zA-Z0-9_]+)(?=\()/g, `<span style="color:${theme.function}">$1</span>`);
};
const CodeBlock = ({ language, code, theme, darkMode }) => {
    const [copied, setCopied] = require$$0.useState(false);
    // merge user theme with defaults
    const appliedTheme = { ...defaultTheme, ...(theme || {}) };
    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    return (jsxRuntimeExports.jsxs("div", { className: "ai-code-block", style: {
            backgroundColor: darkMode
                ? appliedTheme.codeBgDark
                : appliedTheme.codeBgLight,
            borderColor: darkMode
                ? appliedTheme.codeBorderDark
                : appliedTheme.codeBorderLight,
        }, children: [jsxRuntimeExports.jsxs("div", { className: "ai-code-header", style: {
                    backgroundColor: darkMode ? "#161b22" : "#f6f8fa",
                }, children: [jsxRuntimeExports.jsx("span", { className: "ai-code-lang", children: language ? language.toUpperCase() : "CODE" }), jsxRuntimeExports.jsx("button", { onClick: handleCopy, className: "ai-copy-btn", style: {
                            backgroundColor: copied
                                ? "#10b981"
                                : appliedTheme.copyButtonBg,
                        }, onMouseEnter: (e) => !copied &&
                            (e.currentTarget.style.backgroundColor =
                                appliedTheme.copyButtonHover), onMouseLeave: (e) => !copied &&
                            (e.currentTarget.style.backgroundColor =
                                appliedTheme.copyButtonBg), children: copied ? "Copied!" : "Copy" })] }), jsxRuntimeExports.jsx("pre", { className: "ai-code-pre", children: jsxRuntimeExports.jsx("code", { dangerouslySetInnerHTML: {
                        __html: highlight(code, appliedTheme),
                    } }) })] }));
};

const defaultColors = {
    codeBgLight: "#f6f8fa",
    codeBgDark: "#0d1117",
    codeBorderLight: "#e1e4e8",
    codeBorderDark: "#303030",
    textLight: "#24292e",
    textDark: "#e0e0e0",
    inlineCodeBgLight: "#f0f0f0",
    inlineCodeBgDark: "#2d2d2d",
    copyButtonBg: "#3b82f6",
    copyButtonHover: "#2563eb",
    linkColor: "#58a6ff",
    headingColor: "#ffffff",
};
const AIResponseParser = ({ content, darkMode = true, colors = {}, className = '', }) => {
    const theme = { ...defaultColors, ...colors };
    const parts = content.split(/(```[\w-]*\n[\s\S]*?```)/g);
    return (jsxRuntimeExports.jsxs("div", { className: `ai-parser-root ${className}`, children: [jsxRuntimeExports.jsx("style", { dangerouslySetInnerHTML: { __html: getThemeStyles(theme, darkMode) } }), parts.map((part, i) => {
                const match = part.match(/```(\w*)\n?([\s\S]*?)```/);
                if (match) {
                    const lang = match[1] || 'code';
                    const code = match[2].trim();
                    return (jsxRuntimeExports.jsx(CodeBlock, { language: lang, code: code, theme: theme, darkMode: darkMode }, i));
                }
                if (!part.trim())
                    return null;
                return (jsxRuntimeExports.jsx("div", { className: "ai-text", dangerouslySetInnerHTML: { __html: parseMarkdown(part) } }, i));
            })] }));
};

exports.AIResponseParser = AIResponseParser;
//# sourceMappingURL=index.js.map
