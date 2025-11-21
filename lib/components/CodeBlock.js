import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { highlight } from "../utils/highlight";
export const CodeBlock = ({ language, code, theme, darkMode = true }) => {
    const [copied, setCopied] = useState(false);
    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    return (_jsxs("div", { className: "ai-code-block", children: [_jsxs("div", { className: "ai-code-header", children: [_jsx("span", { className: "ai-code-lang", children: language || "code" }), _jsx("button", { onClick: handleCopy, className: `ai-copy-btn ${copied ? "copied" : ""}`, children: copied ? "Copied" : "Copy" })] }), _jsx("pre", { className: "ai-code-pre", children: _jsx("code", { dangerouslySetInnerHTML: { __html: highlight(code, theme) } }) })] }));
};
