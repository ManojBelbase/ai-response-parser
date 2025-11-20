import React from 'react';
import { parseMarkdown } from './utils/markdownParser';
import { getThemeStyles } from './styles/theme.css';
import type { AIResponseParserProps, ColorTheme } from './types';
import { CodeBlock } from './components';

const defaultColors: Required<ColorTheme> = {
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

const AIResponseParser: React.FC<AIResponseParserProps> = ({
    content,
    darkMode = true,
    colors = {},
    className = '',
}) => {
    const theme = { ...defaultColors, ...colors };

    const parts = content.split(/(```[\w-]*\n[\s\S]*?```)/g);

    return (
        <div className={`ai-parser-root ${className}`}>
            <style dangerouslySetInnerHTML={{ __html: getThemeStyles(theme, darkMode) }} />

            {parts.map((part, i) => {
                const match = part.match(/```(\w*)\n?([\s\S]*?)```/);
                if (match) {
                    const lang = match[1] || 'code';
                    const code = match[2].trim();
                    return (
                        <CodeBlock
                            key={i}
                            language={lang}
                            code={code}
                            theme={theme}
                            darkMode={darkMode}
                        />
                    );
                }

                if (!part.trim()) return null;

                return (
                    <div
                        key={i}
                        className="ai-text"
                        dangerouslySetInnerHTML={{ __html: parseMarkdown(part) }}
                    />
                );
            })}
        </div>
    );
};

export default AIResponseParser;