import React, { useState } from "react";
import { highlight } from "../utils/highlight";

export const CodeBlock: React.FC<{
    language: string;
    code: string;
    theme: any;
    darkMode?: boolean;
}> = ({ language, code, theme, darkMode = true }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="ai-code-block">
            <div className="ai-code-header">
                <span className="ai-code-lang">{language || "code"}</span>
                <button
                    onClick={handleCopy}
                    className={`ai-copy-btn ${copied ? "copied" : ""}`}
                >
                    {copied ? "Copied!" : "Copy"}
                </button>
            </div>
            <pre className="ai-code-pre">
                <code dangerouslySetInnerHTML={{ __html: highlight(code, theme) }} />
            </pre>
        </div>
    );
};