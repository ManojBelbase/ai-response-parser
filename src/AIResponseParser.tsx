import React from 'react';
import { parseMarkdown } from './utils/markdownParser';
import { getThemeStyles, defaultTheme, themes } from './styles/theme.css';
import { AIResponseParserPropsExtended } from './types';
import { CodeBlock } from './components/CodeBlock';

export const AIResponseParser: React.FC<AIResponseParserPropsExtended> = ({
    content,
    darkMode = true,
    colors = {},
    className = "",
    themeName = "oneDark",
}) => {
    const baseTheme = themes[themeName] || defaultTheme;
    const theme = { ...baseTheme, ...colors };

    // Split content into code blocks / text blocks
    const parts = content.split(/(```[\w-]*\n[\s\S]*?```)/g);

    return (
        <div className={`ai-parser-root ${className}`}>
            <style dangerouslySetInnerHTML={{ __html: getThemeStyles(theme, darkMode) }} />

            {parts.map((part, i) => {
                const match = part.match(/```(\w*)\n?([\s\S]*?)```/);
                if (match) {
                    const lang = (match[1] || "text").trim();
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
