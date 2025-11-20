import React, { useState } from "react";
import type { CodeBlockProps } from "../types";

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
const highlight = (code: string, theme: any) => {
    return code
        // comments
        .replace(/(\/\/.*)/g, `<span style="color:${theme.comment}">$1</span>`)
        // strings
        .replace(/(["'`].*?["'`])/g, `<span style="color:${theme.string}">$1</span>`)
        // keywords
        .replace(
            /\b(const|let|var|function|return|if|else|for|while|import|from|export|class|new|try|catch|await|async|extends|throw)\b/g,
            `<span style="color:${theme.keyword}">$1</span>`
        )
        // numbers
        .replace(/\b([0-9]+)\b/g, `<span style="color:${theme.number}">$1</span>`)
        // function names
        .replace(/([a-zA-Z0-9_]+)(?=\()/g, `<span style="color:${theme.function}">$1</span>`);
};

export const CodeBlock: React.FC<CodeBlockProps> = ({ language, code, theme, darkMode }) => {
    const [copied, setCopied] = useState(false);

    // merge user theme with defaults
    const appliedTheme = { ...defaultTheme, ...(theme || {}) };

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div
            className="ai-code-block"
            style={{
                backgroundColor: darkMode
                    ? appliedTheme.codeBgDark
                    : appliedTheme.codeBgLight,
                borderColor: darkMode
                    ? appliedTheme.codeBorderDark
                    : appliedTheme.codeBorderLight,
            }}
        >
            {/* Header */}
            <div
                className="ai-code-header"
                style={{
                    backgroundColor: darkMode ? "#161b22" : "#f6f8fa",
                }}
            >
                <span className="ai-code-lang">
                    {language ? language.toUpperCase() : "CODE"}
                </span>
                <button
                    onClick={handleCopy}
                    className="ai-copy-btn"
                    style={{
                        backgroundColor: copied
                            ? "#10b981"
                            : appliedTheme.copyButtonBg,
                    }}
                    onMouseEnter={(e) =>
                        !copied &&
                        (e.currentTarget.style.backgroundColor =
                            appliedTheme.copyButtonHover)
                    }
                    onMouseLeave={(e) =>
                        !copied &&
                        (e.currentTarget.style.backgroundColor =
                            appliedTheme.copyButtonBg)
                    }
                >
                    {copied ? "Copied!" : "Copy"}
                </button>
            </div>

            {/* Code Content */}
            <pre className="ai-code-pre">
                <code
                    dangerouslySetInnerHTML={{
                        __html: highlight(code, appliedTheme),
                    }}
                />
            </pre>
        </div>
    );
};
