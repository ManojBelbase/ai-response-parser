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

function parseAiResponseToPlainText(rawContent) {
    if (!rawContent?.trim())
        return "";
    let text = rawContent;
    text = text
        .replace(/\\n/g, "\n")
        .replace(/\\\*/g, "*")
        .replace(/\\_/g, "_")
        .replace(/\\`/g, "`")
        .replace(/\\\[/g, "[")
        .replace(/\\\]/g, "]");
    text = text.replace(/```[\s\S]*?```/g, (match) => {
        return "";
    });
    text = text.replace(/(\|.*\|.*\n)((?:\|.*\|.*\n)*)(?=\n|$)/g, (match, headerRow, bodyRows) => {
        if (!headerRow.includes("|"))
            return match;
        const headers = headerRow
            .split("|")
            .slice(1, -1)
            .map((h) => h.trim())
            .filter(Boolean);
        const rows = [];
        if (bodyRows) {
            bodyRows.split("\n").forEach((row) => {
                if (row.trim() && row.includes("|")) {
                    const cells = row
                        .split("|")
                        .slice(1, -1)
                        .map((cell) => cell.trim())
                        .filter(Boolean);
                    rows.push(cells.join(" | "));
                }
            });
        }
        // Format as simple plain text
        let result = headers.join(" | ") + "\n";
        result += "-".repeat(40) + "\n";
        result += rows.join("\n");
        return result;
    });
    text = text
        // Headers → just the text
        .replace(/^#{1,6}\s+/gm, "")
        // Blockquotes → remove >
        .replace(/^>\s*/gm, "")
        // Lists → remove bullets/numbers
        .replace(/^\s*[-*+]\s+/gm, "")
        .replace(/^\s*\d+\.\s+/gm, "")
        // Horizontal rules → remove
        .replace(/^(---|\*\*\*|\*\*\*\*)$/gm, "")
        // Remove extra blank lines
        .replace(/\n{3,}/g, "\n\n");
    // === Inline formatting: keep the text, remove markup ===
    text = text
        .replace(/\*\*([^*]+?)\*\*/g, "$1")
        .replace(/__([^_]+?)__/g, "$1")
        .replace(/\*([^*]+?)\*/g, "$1")
        .replace(/_([^_]+?)_/g, "$1")
        .replace(/~~([^~]+?)~~/g, "$1")
        .replace(/`([^`]+?)`/g, "$1")
        .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, "$1 ($2)");
    // Trim and normalize whitespace
    text = text
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line.length > 0)
        .join("\n");
    return text.trim();
}

function parseAiResponseToHtml(text) {
    if (!text?.trim())
        return "";
    let html = escapeHtml(text);
    // === Clean up AI artifacts ===
    html = html
        .replace(/\\n/g, "\n")
        .replace(/\\\*/g, "*")
        .replace(/\\_/g, "_")
        .replace(/\\`/g, "`")
        .replace(/\\$$ /g, "[")
        .replace(/\\ $$/g, "]");
    // === Headers ===
    html = html.replace(/^### (.*$)/gim, "<h3>$1</h3>");
    html = html.replace(/^## (.*$)/gim, "<h2>$1</h2>");
    html = html.replace(/^# (.*$)/gim, "<h1>$1</h1>");
    // === Horizontal rules ===
    html = html.replace(/^(---|\*\*\*|\*\*\*\*)$/gm, "<hr>");
    // === Blockquotes ===
    html = html.replace(/^> (.*$)/gim, "<blockquote>$1</blockquote>");
    // === Tables – improved inline formatting ===
    const tableRegex = /(\|.*\|.*\n)((?:\|.*\|.*\n)*)(?=\n|$)/g;
    html = html.replace(tableRegex, (match, headerRow, bodyRows) => {
        if (!headerRow.includes("|"))
            return match;
        const applyInline = (str) => str
            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
            .replace(/\*(.*?)\*/g, "<em>$1</em>")
            .replace(/~~(.*?)~~/g, "<del>$1</del>")
            .replace(/`([^`]+?)`/g, "<code>$1</code>");
        const headers = headerRow
            .split("|")
            .slice(1, -1)
            .map((h) => `<th>${applyInline(h.trim())}</th>`)
            .join("");
        const rows = [];
        if (bodyRows) {
            bodyRows.split("\n").forEach((row) => {
                if (row.trim() && row.includes("|")) {
                    const cells = row
                        .split("|")
                        .slice(1, -1)
                        .map((cell) => `<td>${applyInline(cell.trim())}</td>`)
                        .join("");
                    rows.push(`<tr>${cells}</tr>`);
                }
            });
        }
        return `<table><thead><tr>${headers}</tr></thead><tbody>${rows.join("")}</tbody></table>`;
    });
    // === Lists – improved with task list support ===
    const lines = html.split("\n");
    const result = [];
    let inUl = false;
    let inOl = false;
    let inCodeBlock = false;
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        const trimmed = line.trim();
        if (trimmed.startsWith("```")) {
            inCodeBlock = !inCodeBlock;
            if (inCodeBlock) {
                // Start of code block – clean the opening line
                const lang = trimmed.slice(3).trim() || "text";
                result.push(`<pre class="code-block" data-lang="${lang}"><code>`);
            }
            else {
                // End of code block
                result.push("</code></pre>");
            }
            continue;
        }
        if (inCodeBlock) {
            result.push(line); // keep raw code
            continue;
        }
        // Task list
        if (/^[-*+]\s+\[([ x])\]\s+/.test(trimmed)) {
            if (inOl) {
                result.push("</ol>");
                inOl = false;
            }
            if (!inUl) {
                result.push("<ul>");
                inUl = true;
            }
            const checked = trimmed.includes("[x]");
            const content = trimmed.replace(/^[-*+]\s+\[([ x])\]\s+/, "");
            result.push(`<li class="task-item"><input type="checkbox" ${checked ? "checked" : ""} disabled /> ${processInlineFormatting(content)}</li>`);
        }
        // Unordered list
        else if (/^[-*+]\s+/.test(trimmed)) {
            if (inOl) {
                result.push("</ol>");
                inOl = false;
            }
            if (!inUl) {
                result.push("<ul>");
                inUl = true;
            }
            const content = trimmed.replace(/^[-*+]\s+/, "");
            result.push(`<li>${processInlineFormatting(content)}</li>`);
        }
        // Ordered list
        else if (/^\d+\.\s+/.test(trimmed)) {
            if (inUl) {
                result.push("</ul>");
                inUl = false;
            }
            if (!inOl) {
                result.push("<ol>");
                inOl = true;
            }
            const content = trimmed.replace(/^\d+\.\s+/, "");
            result.push(`<li>${processInlineFormatting(content)}</li>`);
        }
        // Normal line
        else {
            if (inUl) {
                result.push("</ul>");
                inUl = false;
            }
            if (inOl) {
                result.push("</ol>");
                inOl = false;
            }
            if (trimmed) {
                result.push(processInlineFormatting(line));
            }
            else {
                result.push("");
            }
        }
    }
    if (inUl)
        result.push("</ul>");
    if (inOl)
        result.push("</ol>");
    html = result.join("\n");
    // === Paragraph wrapping ===
    html = html
        .split(/\n\n+/)
        .map((block) => {
        const trimmed = block.trim();
        if (!trimmed)
            return "";
        if (trimmed.startsWith("<h") ||
            trimmed.startsWith("<ul") ||
            trimmed.startsWith("<ol") ||
            trimmed.startsWith("<li") ||
            trimmed.startsWith("<blockquote") ||
            trimmed.startsWith("<hr") ||
            trimmed.startsWith("<table") ||
            trimmed.startsWith("<pre")) {
            return block;
        }
        return `<p>${trimmed}</p>`;
    })
        .join("\n\n");
    return html.trim();
}
// Inline formatting helper
function processInlineFormatting(text) {
    return text
        .replace(/\*\*([^*]+?)\*\*/g, "<strong>$1</strong>")
        .replace(/__([^_]+?)__/g, "<strong>$1</strong>")
        .replace(/\*([^*]+?)\*/g, "<em>$1</em>")
        .replace(/_([^_]+?)_/g, "<em>$1</em>")
        .replace(/~~([^~]+?)~~/g, "<del>$1</del>")
        .replace(/`([^`]+?)`/g, "<code>$1</code>")
        .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
}

function getThemeStyles(theme, textColor) {
    return `
    /* Root — base font & color */
    .ai-parser-root {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, sans-serif;
      line-height: 1.7;
      color: ${textColor};
      font-size: 15px;
    }

    /* Paragraphs */
    .ai-parser-root p {
      margin: 0 0 0 0;
    }

    /* Headers */
    .ai-parser-root h1,
    .ai-parser-root h2,
    .ai-parser-root h3 {
      margin: 28px 0 16px 0;
      font-weight: 600;
      line-height: 1.3;
      color: ${textColor === "#000000" ? "#1a1a1a" : "#ffffff"};
    }
    .ai-parser-root h1 { font-size: 1.9em; }
    .ai-parser-root h2 { font-size: 1.55em; }
    .ai-parser-root h3 { font-size: 1.3em; }

    /* Lists — tight & beautiful */
    .ai-parser-root ul,
    .ai-parser-root ol {
      margin: 14px 0;
      padding-left: 28px;
    }
    .ai-parser-root li {
      margin: 6px 0;
    }
    .ai-parser-root ul { list-style: disc; }
    .ai-parser-root ol { list-style: decimal; }

    /* Links */
    .ai-parser-root a {
      color: #58a6ff;
      text-decoration: none;
      border-bottom: 1px dotted #58a6ff;
      transition: border 0.2s;
    }
    .ai-parser-root a:hover {
      border-bottom-style: solid;
    }

    /* Inline code */
    .ai-inline-code {
      padding: 3px 6px;
      background: ${theme.copyBtnBg || "rgba(135, 135, 135, 0.15)"};
      color: ${theme.plain || "#ffab70"};
      border-radius: 5px;
      font-family: 'Fira Code', 'JetBrains Mono', 'Consolas', monospace;
      font-size: 0.92em;
    }

    /* Blockquotes */
    .ai-parser-root blockquote {
      margin: 20px 0;
      padding: 0 18px;
      border-left: 4px solid #58a6ff;
      color: ${textColor === "#000000" ? "#555" : "#b0b8c4"};
      font-style: italic;
    }

/* Tables — clean & pro with responsive scroll */
.ai-parser-root table {
border-collapse: collapse;
  width: 100%;
  margin: 16px 0; /* Reduced from 20px to match paragraph rhythm */
  display: block;
  overflow-x: auto;
}

/* Optional: Add a container for better control */
.ai-parser-root .table-container {
  width: 100%;
  overflow-x: auto;
  margin: 20px 0;
}

.ai-parser-root .table-container table {
  margin: 0;
  min-width: 100%;
  white-space: nowrap;
}

.ai-parser-root th,
.ai-parser-root td {
  border: 1px solid ${theme.headerBg || "#444"};
  padding: 12px 16px;
  text-align: left;
  white-space: nowrap;
}

.ai-parser-root th {
  font-weight: 600;
  color: ${textColor};
}

/* Add subtle shadow and rounded corners when scrollable */


/* Custom scrollbar styling */
.ai-parser-root table::-webkit-scrollbar {
  height: 8px;
}

.ai-parser-root table::-webkit-scrollbar-track {
  background: ${theme.scrollTrack || "#f1f1f1"};
  border-radius: 4px;
}

.ai-parser-root table::-webkit-scrollbar-thumb {
  background: ${theme.scrollThumb || "#c1c1c1"};
  border-radius: 4px;
}

.ai-parser-root table::-webkit-scrollbar-thumb:hover {
  background: ${theme.scrollThumbHover || "#a8a8a8"};
}



    /* Horizontal rule */
    .ai-parser-root hr {
      border: none;
      height: 1px;
      background: ${theme.headerBg || "#444"};
      margin: 28px 0;
    }

    /* Your existing code block styles — untouched & perfect */
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
      height: 6px;
    }
    .ai-code-pre::-webkit-scrollbar-track {
      background: ${theme.scrollTrack};
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

const AIResponseParser = ({ content, themeName = "light", textColor = "#000000", className = "", }) => {
    const theme = themes[themeName];
    const safeContent = typeof content === "string"
        ? content.trim()
        : JSON.stringify(content, null, 2);
    const parts = safeContent.split(/(```[^\n]*\n[\s\S]*?```)/g);
    return (jsxRuntimeExports.jsxs("div", { className: `ai-parser-root ${className}`, children: [jsxRuntimeExports.jsx("style", { dangerouslySetInnerHTML: { __html: getThemeStyles(theme, textColor) } }), parts.map((part, i) => {
                const match = part.match(/```(\w*)\n?([\s\S]*?)```/);
                if (match) {
                    const lang = (match[1] || "text").trim();
                    const code = match[2].trim();
                    return jsxRuntimeExports.jsx(CodeBlock, { language: lang, code: code, theme: theme }, i);
                }
                if (!part.trim())
                    return null;
                return (jsxRuntimeExports.jsx("div", { className: "ai-parser-root", dangerouslySetInnerHTML: { __html: parseAiResponseToHtml(part) } }, i));
            })] }));
};

export { AIResponseParser, parseAiResponseToHtml, parseAiResponseToPlainText };
//# sourceMappingURL=index.esm.js.map
