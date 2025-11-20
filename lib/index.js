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
    text = text.replace(/(^[*\-•] .+(?:\n[*\-•] .+)*)/gm, match => {
        const items = match
            .split("\n")
            .map(line => line.replace(/^[*\-•] /, "").trim())
            .map(item => `<li>${item}</li>`)
            .join("");
        return `<ul class="ai-ul">${items}</ul>`;
    });
    // Convert markdown styles
    let html = text
        // Headers
        .replace(/^### (.*$)/gm, '<h3 class="ai-h3">$1</h3>')
        .replace(/^## (.*$)/gm, '<h2 class="ai-h2">$1</h2>')
        .replace(/^# (.*$)/gm, '<h1 class="ai-h1">$1</h1>')
        // Bold
        .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
        .replace(/__([^_]+)__/g, "<strong>$1</strong>")
        // Italic
        .replace(/\*([^*]+)\*/g, "<em>$1</em>")
        .replace(/_([^_]+)_/g, "<em>$1</em>")
        // Inline code
        .replace(/`([^`]+)`/g, '<span class="ai-inline-code">$1</span>')
        // Links
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="ai-link" target="_blank" rel="noopener">$1</a>')
        // Blockquotes
        .replace(/^> (.*$)/gm, '<div class="ai-blockquote">$1</div>');
    html = html
        .split(/\n\n+/)
        .map(para => {
        if (para.startsWith("<ul") || para.startsWith("<h"))
            return para;
        return `<div class="ai-text">${para.trim()}</div>`;
    })
        .join("");
    return html.replace(/\n/g, "<br>");
};

const defaultTheme = {
    // Syntax highlighting colors
    comment: '#6a9955', // Green for comments
    string: '#ce9178', // Orange for strings
    keyword: '#569cd6', // Blue for keywords (if, else, const, let, etc.)
    number: '#b5cea8', // Light green for numbers
    function: '#dcdcaa', // Yellow for function names
    operator: '#d4d4d4', // Light gray for operators (+, -, =, etc.)
    punctuation: '#d4d4d4', // Light gray for punctuation ({, }, [, ], etc.)
    property: '#9cdcfe', // Light blue for properties (.map, .filter, etc.)
    // UI colors
    background: '#1e1e1e',
    text: '#d4d4d4',
    // ... other UI colors
};
// Popular theme presets
const themes = {
    // VSCode Dark+ (default)
    vscode: {
        comment: '#6a9955',
        string: '#ce9178',
        keyword: '#569cd6',
        number: '#b5cea8',
        function: '#dcdcaa',
        operator: '#d4d4d4',
        punctuation: '#d4d4d4',
        property: '#9cdcfe',
    },
    // Monokai
    monokai: {
        comment: '#75715e',
        string: '#e6db74',
        keyword: '#f92672',
        number: '#ae81ff',
        function: '#a6e22e',
        operator: '#f92672',
        punctuation: '#f8f8f2',
        property: '#66d9ef',
    },
    // Dracula
    dracula: {
        comment: '#6272a4',
        string: '#f1fa8c',
        keyword: '#ff79c6',
        number: '#bd93f9',
        function: '#50fa7b',
        operator: '#ff79c6',
        punctuation: '#f8f8f2',
        property: '#8be9fd',
    },
    // GitHub Dark
    github: {
        comment: '#8b949e',
        string: '#a5d6ff',
        keyword: '#ff7b72',
        number: '#79c0ff',
        function: '#d2a8ff',
        operator: '#ff7b72',
        punctuation: '#c9d1d9',
        property: '#7ee787',
    },
    // One Dark
    oneDark: {
        comment: '#5c6370',
        string: '#98c379',
        keyword: '#c678dd',
        number: '#d19a66',
        function: '#61afef',
        operator: '#56b6c2',
        punctuation: '#abb2bf',
        property: '#e06c75',
    },
};
function getThemeStyles(theme, darkMode) {
    return `
    .ai-parser-root {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: ${darkMode ? '#d4d4d4' : '#000000'};
    }

    .ai-code-block {
      margin: 16px 0;
      border-radius: 8px;
      overflow: hidden;
      background: ${darkMode ? '#1e1e1e' : '#f6f8fa'};
      border: 1px solid ${darkMode ? '#30363d' : '#d0d7de'};
    }

    .ai-code-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 12px;
      background: ${darkMode ? '#161b22' : '#eaeef2'};
      border-bottom: 1px solid ${darkMode ? '#30363d' : '#d0d7de'};
    }

    .ai-code-lang {
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      color: ${darkMode ? '#8b949e' : '#57606a'};
    }

    .ai-copy-btn {
      padding: 4px 12px;
      font-size: 12px;
      background: ${darkMode ? '#21262d' : '#ffffff'};
      color: ${darkMode ? '#c9d1d9' : '#24292f'};
      border: 1px solid ${darkMode ? '#30363d' : '#d0d7de'};
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.2s;
    }

    .ai-copy-btn:hover {
      background: ${darkMode ? '#30363d' : '#f6f8fa'};
    }

    .ai-copy-btn.copied {
      background: #238636;
      color: white;
      border-color: #238636;
    }

    .ai-code-pre {
      margin: 0;
      padding: 16px;
      overflow-x: auto;
      background: ${darkMode ? '#0d1117' : '#ffffff'};
    }

    .ai-code-pre code {
      font-family: 'Fira Code', 'Consolas', 'Monaco', monospace;
      font-size: 14px;
      line-height: 1.5;
      display: block;
    }

    .ai-inline-code {
      padding: 2px 6px;
      background: ${darkMode ? '#30363d' : '#f6f8fa'};
      border-radius: 4px;
      font-family: 'Fira Code', 'Consolas', monospace;
      font-size: 0.9em;
    }

    .ai-text {
      margin: 12px 0;
    }

    .ai-ul {
      margin: 12px 0;
      padding-left: 24px;
    }

    .ai-ul li {
      margin: 8px 0;
    }

    .ai-link {
      color: ${darkMode ? '#58a6ff' : '#0969da'};
      text-decoration: none;
    }

    .ai-link:hover {
      text-decoration: underline;
    }

    .ai-blockquote {
      padding: 8px 16px;
      margin: 12px 0;
      border-left: 4px solid ${darkMode ? '#30363d' : '#d0d7de'};
      background: ${darkMode ? '#161b22' : '#f6f8fa'};
    }

    .ai-h1 { font-size: 2em; margin: 20px 0 10px; }
    .ai-h2 { font-size: 1.5em; margin: 18px 0 8px; }
    .ai-h3 { font-size: 1.25em; margin: 16px 0 6px; }
  `;
}

function escapeHtml(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

const PATTERNS = {
    comment: { regex: /(\/\*[\s\S]*?\*\/|\/\/.*$)/gm, priority: 1 },
    string: { regex: /(["'`])(?:\\.|(?!\1)[^\\\r\n])*\1/g, priority: 2 },
    keyword: {
        regex: /\b(const|let|var|function|return|if|else|for|while|switch|case|break|continue|import|from|export|default|class|new|try|catch|throw|extends|await|async|interface|type|typeof|instanceof|this|super|static|get|set|of|in|do|finally|void|delete|yield|public|private|protected|readonly|abstract|implements|namespace|declare|module|enum|as)\b/g,
        priority: 3
    },
    boolean: { regex: /\b(true|false|null|undefined)\b/g, priority: 3 },
    number: { regex: /\b(\d+\.?\d*|\.\d+)([eE][+-]?\d+)?\b/g, priority: 4 },
    function: { regex: /\b([a-zA-Z_$][\w$]*)\s*(?=\()/g, priority: 5 },
    property: { regex: /\.([a-zA-Z_$][\w$]*)/g, priority: 6 },
    operator: { regex: /(===|!==|==|!=|<=|>=|&&|\|\||=>|\+\+|--|[+\-*/%=<>!&|^~?:])/g, priority: 7 },
    punctuation: { regex: /[{}[\]();,.:]/g, priority: 8 }
};

function tokenize(code) {
    const matches = [];
    // Find all matches for all patterns
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
    // Sort by position, then by priority
    matches.sort((a, b) => {
        if (a.start !== b.start)
            return a.start - b.start;
        return a.priority - b.priority;
    });
    // Remove overlapping matches (keep higher priority)
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

const highlight = (code, theme) => {
    // Tokenize the ORIGINAL code (before escaping)
    const tokens = tokenize(code);
    // Build highlighted HTML
    let html = '';
    let position = 0;
    tokens.forEach(token => {
        // Add text before this token (escaped)
        if (token.start > position) {
            html += escapeHtml(code.slice(position, token.start));
        }
        // Add the token with styling
        const color = theme[token.type] || theme.keyword;
        html += `<span style="color:${color}">${escapeHtml(token.value)}</span>`;
        position = token.end;
    });
    // Add remaining text
    if (position < code.length) {
        html += escapeHtml(code.slice(position));
    }
    return html;
};

const CodeBlock = ({ language, code, theme, darkMode = true }) => {
    const [copied, setCopied] = require$$0.useState(false);
    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    return (jsxRuntimeExports.jsxs("div", { className: "ai-code-block", children: [jsxRuntimeExports.jsxs("div", { className: "ai-code-header", children: [jsxRuntimeExports.jsx("span", { className: "ai-code-lang", children: language || "code" }), jsxRuntimeExports.jsx("button", { onClick: handleCopy, className: `ai-copy-btn ${copied ? "copied" : ""}`, children: copied ? "Copied" : "Copy" })] }), jsxRuntimeExports.jsx("pre", { className: "ai-code-pre", children: jsxRuntimeExports.jsx("code", { dangerouslySetInnerHTML: { __html: highlight(code, theme) } }) })] }));
};

const AIResponseParser = ({ content, darkMode = true, colors = {}, className = '', themeName = 'oneDark', }) => {
    const baseTheme = themes[themeName] || defaultTheme;
    const theme = { ...baseTheme, ...colors };
    const parts = content.split(/(```[\w-]*\n[\s\S]*?```)/g);
    return (jsxRuntimeExports.jsxs("div", { className: `ai-parser-root ${className}`, children: [jsxRuntimeExports.jsx("style", { dangerouslySetInnerHTML: { __html: getThemeStyles(theme, darkMode) } }), parts.map((part, i) => {
                const match = part.match(/```(\w*)\n?([\s\S]*?)```/);
                if (match) {
                    const lang = (match[1] || 'text').trim();
                    const code = match[2].trim();
                    return jsxRuntimeExports.jsx(CodeBlock, { language: lang, code: code, theme: theme, darkMode: darkMode }, i);
                }
                if (!part.trim())
                    return null;
                return jsxRuntimeExports.jsx("div", { className: "ai-text", dangerouslySetInnerHTML: { __html: parseMarkdown(part) } }, i);
            })] }));
};

exports.AIResponseParser = AIResponseParser;
//# sourceMappingURL=index.js.map
