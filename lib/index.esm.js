import require$$0, { useState } from 'react';

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

function escapeHtml(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

const PATTERNS = {
    comment: {
        regex: /(\/\*[\s\S]*?\*\/|\/\/.*$|#.*$|<!--[\s\S]*?-->|\/\*\*[\s\S]*?\*\/)/gm,
        priority: 1
    },
    string: {
        regex: /(["'`])(?:\\.|(?!\1)[^\\\r\n])*\1/g,
        priority: 2
    },
    keyword: {
        regex: /\b(const|let|var|function|return|if|else|for|while|switch|case|break|continue|import|from|export|default|class|new|try|catch|throw|extends|await|async|interface|type|typeof|instanceof|this|super|static|get|set|of|in|do|finally|void|delete|yield|public|private|protected|readonly|abstract|implements|namespace|declare|module|enum|as|fn|def|pub|use|mod|impl|trait|struct|match|package|func|val|var|object|println|echo|puts|print|bool|int|String|main|std|fmt|iostream|using|System|Console|WriteLine|include|namespace|require|require_once|array|foreach|endforeach|endif|endwhile|trait|extends|abstract|final|clone)\b/g,
        priority: 3
    },
    boolean: {
        regex: /\b(true|false|True|False|null|nil|undefined|None|NULL)\b/g,
        priority: 3
    },
    number: {
        regex: /\b(\d+\.?\d*|\.\d+)([eE][+-]?\d+)?\b/g,
        priority: 4
    },
    function: {
        regex: /\b([a-zA-Z_$][\w$]*)\s*(?=\()/g,
        priority: 5
    },
    property: {
        regex: /\.([a-zA-Z_$][\w$]*)/g,
        priority: 6
    },
    operator: {
        regex: /(===|!==|==|!=|<=|>=|&&|\|\||=>|\+\+|--|[+\-*/%=<>!&|^~?:])/g,
        priority: 7
    },
    punctuation: {
        regex: /[{}[\]();,.:]/g,
        priority: 8
    }
};

function tokenize(code) {
    const matches = [];
    Object.entries(PATTERNS).forEach(([type, { regex, priority }]) => {
        const pattern = new RegExp(regex.source, regex.flags);
        let match;
        while ((match = pattern.exec(code)) !== null) {
            matches.push({
                type,
                value: match[0],
                start: match.index,
                end: match.index + match[0].length,
                priority
            });
        }
    });
    matches.sort((a, b) => {
        if (a.start !== b.start)
            return a.start - b.start;
        return a.priority - b.priority;
    });
    const nonOverlapping = [];
    let lastEnd = 0;
    matches.forEach(match => {
        if (match.start >= lastEnd) {
            nonOverlapping.push(match);
            lastEnd = match.end;
        }
    });
    return nonOverlapping;
}

function highlight(code, theme) {
    const tokens = tokenize(code);
    let html = "";
    let pos = 0;
    tokens.forEach(token => {
        if (token.start > pos) {
            html += escapeHtml(code.slice(pos, token.start));
        }
        const color = theme[token.type] ?? theme.keyword;
        html += `<span style="color:${color}">${escapeHtml(token.value)}</span>`;
        pos = token.end;
    });
    if (pos < code.length) {
        html += escapeHtml(code.slice(pos));
    }
    return html;
}

const CodeBlock = ({ language, code, theme }) => {
    const [copied, setCopied] = useState(false);
    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    return (jsxRuntimeExports.jsxs("div", { className: "ai-code-block", children: [jsxRuntimeExports.jsxs("div", { className: "ai-code-header", children: [jsxRuntimeExports.jsx("span", { className: "ai-code-lang", children: language || "code" }), jsxRuntimeExports.jsx("button", { onClick: handleCopy, className: `ai-copy-btn ${copied ? "copied" : ""}`, children: copied ? "Copied" : "Copy" })] }), jsxRuntimeExports.jsx("pre", { className: "ai-code-pre", children: jsxRuntimeExports.jsx("code", { dangerouslySetInnerHTML: { __html: highlight(code, theme) } }) })] }));
};

function getThemeStyles(theme, textColor) {
    return `
    /* Root container - only set base font and color */
    .ai-parser-root {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.7;
      color: ${textColor};
    }

    /* Tables need explicit borders (browsers don't style them by default) */
    .ai-parser-root table {
      border-collapse: collapse;
      width: 100%;
      margin: 16px 0;
    }

    .ai-parser-root th,
    .ai-parser-root td {
      border: 1px solid #e1e4e8;
      padding: 8px 12px;
      text-align: left;
    }

    .ai-parser-root th {
      background-color: #f6f8fa;
      font-weight: 600;
    }

    /* Code blocks need full styling (browsers don't style them well) */
    .ai-code-block {
      margin: 16px 0;
      border-radius: 8px;
      overflow: hidden;
      background: ${theme.codeBg};
      border: 1px solid ${theme.headerBg};
    }

    .ai-code-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 12px;
      background: ${theme.headerBg};
      border-bottom: 1px solid ${theme.headerBg};
    }

    .ai-code-lang {
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      color: ${theme.comment};
    }

    .ai-copy-btn {
      padding: 4px 12px;
      font-size: 12px;
      background: ${theme.copyBtnBg};
      color: ${theme.copyBtnText};
      border: 1px solid ${theme.headerBg};
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.2s;
    }

    .ai-copy-btn:hover {
      background: ${theme.copyBtnHover};
    }

    .ai-code-pre {
      margin: 0;
      padding: 16px;
      overflow-x: auto;
      background: ${theme.codeBg};
      scrollbar-width: thin;
      scrollbar-color: ${theme.scrollThumb} ${theme.scrollTrack};
    }

    .ai-code-pre::-webkit-scrollbar {
      height: 2px;
    }

    .ai-code-pre::-webkit-scrollbar-track {
      background: ${theme.scrollTrack};
      border-radius: 2px;
    }

    .ai-code-pre::-webkit-scrollbar-thumb {
      background: ${theme.scrollThumb};
      border-radius: 4px;
    }

    .ai-code-pre::-webkit-scrollbar-thumb:hover {
      background: ${theme.scrollThumbHover};
    }

    .ai-code-pre code {
      font-family: 'Fira Code', 'Consolas', 'Monaco', monospace;
      font-size: 14px;
      line-height: 1.55;
      display: block;
      color: ${theme.plain};
    }

    .ai-inline-code {
      padding: 2px 4px;
      background: ${theme.copyBtnBg};
      border-radius: 4px;
      font-family: 'Fira Code', 'Consolas', monospace;
      font-size: 0.9em;
      color: ${theme.plain};
    }
  `;
}

const themes = {
    // VSCode Dark+
    vscode: {
        comment: "#6a9955",
        string: "#ce9178",
        keyword: "#569cd6",
        function: "#dcdcaa",
        number: "#b5cea8",
        boolean: "#569cd6",
        operator: "#d4d4d4",
        punctuation: "#d4d4d4",
        property: "#9cdcfe",
        plain: "#d4d4d4",
        codeBg: "#1e1e1e",
        headerBg: "#161b22",
        copyBtnBg: "#21262d",
        copyBtnText: "#c9d1d9",
    },
    // Dracula
    dracula: {
        comment: "#6272a4",
        string: "#f1fa8c",
        keyword: "#ff79c6",
        function: "#50fa7b",
        number: "#bd93f9",
        boolean: "#ff79c6",
        operator: "#ff79c6",
        punctuation: "#f8f8f2",
        property: "#8be9fd",
        plain: "#f8f8f2",
        codeBg: "#282a36",
        headerBg: "#44475a",
        copyBtnBg: "#6272a4",
        copyBtnText: "#f8f8f2",
    },
    // One Dark
    onedark: {
        comment: "#5c6370",
        string: "#98c379",
        keyword: "#c678dd",
        function: "#61afef",
        number: "#d19a66",
        boolean: "#c678dd",
        operator: "#56b6c2",
        punctuation: "#abb2bf",
        property: "#e06c75",
        plain: "#abb2bf",
        codeBg: "#282c34",
        headerBg: "#21252b",
        copyBtnBg: "#3e4451",
        copyBtnText: "#abb2bf",
    },
    // GitHub Dark
    github: {
        comment: "#8b949e",
        string: "#79c0ff",
        keyword: "#ff7b72",
        function: "#d2a8ff",
        number: "#79c0ff",
        boolean: "#ff7b72",
        operator: "#79c0ff",
        punctuation: "#c9d1d9",
        property: "#79c0ff",
        plain: "#c9d1d9",
        codeBg: "#0d1117",
        headerBg: "#161b22",
        copyBtnBg: "#21262d",
        copyBtnText: "#c9d1d9",
    },
    // Monokai
    monokai: {
        comment: "#75715e",
        string: "#e6db74",
        keyword: "#f92672",
        function: "#a6e22e",
        number: "#ae81ff",
        boolean: "#f92672",
        operator: "#f92672",
        punctuation: "#f8f8f2",
        property: "#66d9ef",
        plain: "#f8f8f2",
        codeBg: "#272822",
        headerBg: "#3e3d32",
        copyBtnBg: "#49483e",
        copyBtnText: "#f8f8f2",
    },
    // Solarized Dark
    solarizedDark: {
        comment: "#586e75",
        string: "#2aa198",
        keyword: "#859900",
        function: "#b58900",
        number: "#d33682",
        boolean: "#cb4b16",
        operator: "#93a1a1",
        punctuation: "#93a1a1",
        property: "#268bd2",
        plain: "#839496",
        codeBg: "#002b36",
        headerBg: "#073642",
        copyBtnBg: "#073642",
        copyBtnText: "#839496",
    },
    // Nord
    nord: {
        comment: "#616e88",
        string: "#a3be8c",
        keyword: "#b48ead",
        function: "#88c0d0",
        number: "#d08770",
        boolean: "#b48ead",
        operator: "#81a1c1",
        punctuation: "#81a1c1",
        property: "#8fbcbb",
        plain: "#d8dee9",
        codeBg: "#2e3440",
        headerBg: "#3b4252",
        copyBtnBg: "#434c5e",
        copyBtnText: "#d8dee9",
    },
    // Tomorrow Night
    tomorrowNight: {
        comment: "#99968b",
        string: "#f2777a",
        keyword: "#cc99cc",
        function: "#f99157",
        number: "#ffcc66",
        boolean: "#cc99cc",
        operator: "#66cccc",
        punctuation: "#cccccc",
        property: "#99cc99",
        plain: "#cccccc",
        codeBg: "#1d1f21",
        headerBg: "#2d2f31",
        copyBtnBg: "#2d2f31",
        copyBtnText: "#cccccc",
    },
    // Light theme
    light: {
        comment: "#008000",
        string: "#a31515",
        keyword: "#0000ff",
        function: "#795e26",
        number: "#098658",
        boolean: "#0000ff",
        operator: "#000000",
        punctuation: "#000000",
        property: "#001080",
        plain: "#000000",
        codeBg: "#ffffff",
        headerBg: "#f3f3f3",
        copyBtnBg: "#e0e0e0",
        copyBtnText: "#000000",
    },
};

function parseMarkdown(md) {
    if (!md.trim())
        return '';
    let output = md;
    // 1. Handle CODE BLOCKS first (preserve them)
    const codeBlocks = [];
    output = output.replace(/```([\s\S]*?)```/g, (match, code) => {
        const placeholder = `__CODEBLOCK_${codeBlocks.length}__`;
        codeBlocks.push(`<pre><code>${escapeHtml(code.trim())}</code></pre>`);
        return placeholder;
    });
    // 2. HEADINGS
    output = output.replace(/^######\s+(.+)$/gm, "<h6>$1</h6>");
    output = output.replace(/^#####\s+(.+)$/gm, "<h5>$1</h5>");
    output = output.replace(/^####\s+(.+)$/gm, "<h4>$1</h4>");
    output = output.replace(/^###\s+(.+)$/gm, "<h3>$1</h3>");
    output = output.replace(/^##\s+(.+)$/gm, "<h2>$1</h2>");
    output = output.replace(/^#\s+(.+)$/gm, "<h1>$1</h1>");
    // ------------------------------
    // 3. TABLES (Fixed implementation)
    // ------------------------------
    output = output.replace(/^\|(.+)\|\s*\n\|([-:\s|]+)\|\s*\n((?:^\|.+\|\s*\n?)+)/gm, (match, header, align, rows) => {
        // Process headers
        const headerCells = header
            .split('|')
            .map((h) => h.trim())
            .filter(Boolean)
            .map((h) => `<th>${h}</th>`)
            .join('');
        // Process alignment
        const alignCells = align
            .split('|')
            .map((a) => a.trim())
            .filter(Boolean)
            .map((a) => {
            if (a.startsWith(':') && a.endsWith(':'))
                return 'center';
            if (a.endsWith(':'))
                return 'right';
            return 'left';
        });
        // Process rows
        const rowLines = rows.trim().split('\n');
        const rowCells = rowLines.map((row) => {
            const cells = row
                .split('|')
                .map((c) => c.trim())
                .filter(Boolean)
                .map((cell, index) => `<td style="text-align: ${alignCells[index] || 'left'}">${cell}</td>`)
                .join('');
            return `<tr>${cells}</tr>`;
        }).join('');
        return `<table><thead><tr>${headerCells}</tr></thead><tbody>${rowCells}</tbody></table>`;
    });
    // ------------------------------
    // 4. LISTS (Fixed implementation)
    // ------------------------------
    // Process ordered lists
    output = output.replace(/^(\d+)\.\s+(.+)$/gm, '<li class="ol-item">$2</li>');
    // Process unordered lists
    output = output.replace(/^[-*+]\s+(.+)$/gm, '<li class="ul-item">$1</li>');
    // Wrap ordered lists
    output = output.replace(/(<li class="ol-item">[\s\S]*?<\/li>\s*)+/g, (match) => {
        const cleaned = match.replace(/class="ol-item"/g, '');
        return `<ol>${cleaned}</ol>`;
    });
    // Wrap unordered lists
    output = output.replace(/(<li class="ul-item">[\s\S]*?<\/li>\s*)+/g, (match) => {
        const cleaned = match.replace(/class="ul-item"/g, '');
        return `<ul>${cleaned}</ul>`;
    });
    // ------------------------------
    // 5. INLINE FORMATTING
    // ------------------------------
    output = output.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    output = output.replace(/__([^_]+)__/g, "<strong>$1</strong>");
    output = output.replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, "<em>$1</em>");
    output = output.replace(/_([^_]+)_/g, "<em>$1</em>");
    output = output.replace(/~~([^~]+)~~/g, "<del>$1</del>");
    output = output.replace(/`([^`]+)`/g, "<code class='inline-code'>$1</code>");
    output = output.replace(/\[([^\]]+)\]\(([^)]+)\)/g, `<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>`);
    // ------------------------------
    // 6. BLOCKQUOTES
    // ------------------------------
    output = output.replace(/^>\s+(.+)$/gm, "<blockquote>$1</blockquote>");
    // ------------------------------
    // 7. HORIZONTAL RULE
    // ------------------------------
    output = output.replace(/^\s*---\s*$/gm, "<hr>");
    output = output.replace(/^\s*\*\*\*\s*$/gm, "<hr>");
    output = output.replace(/^\s*___\s*$/gm, "<hr>");
    // ------------------------------
    // 8. PARAGRAPHS (Improved handling)
    // ------------------------------
    const lines = output.split('\n');
    const processedLines = [];
    let currentParagraph = [];
    const isBlockElement = (line) => {
        const trimmed = line.trim();
        return /^<(h[1-6]|ul|ol|li|pre|blockquote|table|hr)/.test(trimmed) ||
            /<\/(h[1-6]|ul|ol|li|pre|blockquote|table|hr)>/.test(trimmed);
    };
    lines.forEach((line) => {
        const trimmed = line.trim();
        if (!trimmed) {
            // Empty line - flush current paragraph
            if (currentParagraph.length > 0) {
                processedLines.push(`<p>${currentParagraph.join(' ')}</p>`);
                currentParagraph = [];
            }
            processedLines.push(''); // Keep empty lines for spacing
            return;
        }
        if (isBlockElement(trimmed)) {
            // Block element - flush current paragraph and add the block
            if (currentParagraph.length > 0) {
                processedLines.push(`<p>${currentParagraph.join(' ')}</p>`);
                currentParagraph = [];
            }
            processedLines.push(trimmed);
        }
        else if (trimmed.startsWith('<li') || trimmed.startsWith('</ul>') || trimmed.startsWith('</ol>')) {
            // List items - flush current paragraph and add list element
            if (currentParagraph.length > 0) {
                processedLines.push(`<p>${currentParagraph.join(' ')}</p>`);
                currentParagraph = [];
            }
            processedLines.push(trimmed);
        }
        else {
            // Regular text - add to current paragraph
            currentParagraph.push(trimmed);
        }
    });
    // Flush any remaining paragraph
    if (currentParagraph.length > 0) {
        processedLines.push(`<p>${currentParagraph.join(' ')}</p>`);
    }
    // Filter out empty lines and join
    output = processedLines.filter(line => line !== '').join('\n');
    // 9. Restore CODE BLOCKS
    codeBlocks.forEach((block, i) => {
        output = output.replace(`__CODEBLOCK_${i}__`, block);
    });
    return output;
}
// Helper

const AIResponseParser = ({ content, themeName = "tomorrowNight", textColor = "#000", className = "", }) => {
    const theme = themes[themeName];
    const parts = content.split(/(```[^\n]*\n[\s\S]*?```)/g);
    return (jsxRuntimeExports.jsxs("div", { className: `ai-parser-root ${className}`, children: [jsxRuntimeExports.jsx("style", { dangerouslySetInnerHTML: { __html: getThemeStyles(theme, textColor) } }), parts.map((part, i) => {
                const match = part.match(/```(\w*)\n?([\s\S]*?)```/);
                if (match) {
                    const lang = (match[1] || "text").trim();
                    const code = match[2].trim();
                    return jsxRuntimeExports.jsx(CodeBlock, { language: lang, code: code, theme: theme }, i);
                }
                if (!part.trim())
                    return null;
                return (jsxRuntimeExports.jsx("div", { className: "ai-parser-root", dangerouslySetInnerHTML: { __html: parseMarkdown(part) } }, i));
            })] }));
};

export { AIResponseParser };
//# sourceMappingURL=index.esm.js.map
