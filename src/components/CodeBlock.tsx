import { useState } from "react";
import { Theme } from "../types";
import { highlight } from "../utils";

export const CodeBlock: React.FC<{
    language: string;
    code: string;
    theme: Theme;
}> = ({ language, code, theme }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div style={{
            marginBottom: '1.5rem',
            borderRadius: '8px',
            overflow: 'hidden',
            border: '1px solid #444'
        }}>
            <div style={{
                background: '#1e1e1e',
                padding: '8px 16px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid #444'
            }}>
                <span style={{ color: '#888', fontSize: '0.875rem' }}>
                    {language || 'code'}
                </span>
                <button
                    onClick={handleCopy}
                    style={{
                        background: copied ? '#10b981' : '#374151',
                        color: 'white',
                        border: 'none',
                        padding: '4px 12px',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '0.875rem',
                        transition: 'background 0.2s'
                    }}
                >
                    {copied ? 'Copied!' : 'Copy'}
                </button>
            </div>
            <pre style={{
                margin: 0,
                padding: '16px',
                background: '#1e1e1e',
                overflow: 'auto',
                fontSize: '0.9rem',
                lineHeight: '1.5'
            }}>
                <code dangerouslySetInnerHTML={{ __html: highlight(code, theme) }} />
            </pre>
        </div>
    );
};