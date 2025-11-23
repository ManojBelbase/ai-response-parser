import React from "react";
import { parseMarkdown } from "./utils/markdownParser";
import { themes, ThemeName } from "./themes/themes";
import { CodeBlock } from "./components/CodeBlock";
import { getThemeStyles } from "./styles/theme.css";

type Props = {
    content: string;
    themeName?: ThemeName;
    textColor?: string;
    className?: string;
};

export const AIResponseParser: React.FC<Props> = ({
    content,
    themeName = "tomorrowNight",
    textColor = "#000",
    className = "",
}) => {
    const theme = themes[themeName];

    const parts = content.split(/(```[^\n]*\n[\s\S]*?```)/g);
    return (
        <div className={`ai-parser-root ${className}`}>
            <style dangerouslySetInnerHTML={{ __html: getThemeStyles(theme, textColor) }} />

            {parts.map((part, i) => {
                const match = part.match(/```(\w*)\n?([\s\S]*?)```/); if (match) {
                    const lang = (match[1] || "text").trim();
                    const code = match[2].trim();
                    return <CodeBlock key={i} language={lang} code={code} theme={theme} />;
                }

                if (!part.trim()) return null;
                return (
                    <div
                        key={i}
                        className={className}
                        dangerouslySetInnerHTML={{ __html: parseMarkdown(part) }}
                    />
                );
            })}
        </div>
    );
};
