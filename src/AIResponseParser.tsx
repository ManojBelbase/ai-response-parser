import React from 'react';
import { parseMarkdown } from './utils/markdownParser';
import { getThemeStyles, defaultTheme } from './styles/theme.css';
import type { AIResponseParserProps } from './types';
import { CodeBlock } from './components/CodeBlock';

const AIResponseParser: React.FC<AIResponseParserProps> = ({
    content,
    darkMode = true,
    colors = {},
    className = '',
}) => {
    const theme = { ...defaultTheme, ...colors };

    const parts = content.split(/(```[\w-]*\n[\s\S]*?```)/g);

    return (
        <div className={`ai-parser-root ${className}`}>
            <style dangerouslySetInnerHTML={{ __html: getThemeStyles(theme, darkMode) }} />

            {parts.map((part, i) => {
                const match = part.match(/```(\w*)\n?([\s\S]*?)```/);
                if (match) {
                    const lang = (match[1] || 'text').trim();
                    const code = match[2].trim();
                    return <CodeBlock key={i} language={lang} code={code} theme={theme} darkMode={darkMode} />;
                }
                if (!part.trim()) return null;
                return <div key={i} className="ai-text" dangerouslySetInnerHTML={{ __html: parseMarkdown(part) }} />;
            })}
        </div>
    );
};

export default AIResponseParser;
