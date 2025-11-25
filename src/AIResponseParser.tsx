import { CodeBlock } from "./components";
import { getThemeStyles } from "./styles";
import { themes } from "./themes";
import { parseMarkdown } from "./utils";

interface Props {
    content: string;
    themeName?: keyof typeof themes;
    textColor?: string;
    className?: string;
}

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

            {parts.map((part: string, i: number) => {
                const match = part.match(/```(\w*)\n?([\s\S]*?)```/);
                if (match) {
                    const lang = (match[1] || "text").trim();
                    const code = match[2].trim();
                    return <CodeBlock key={i} language={lang} code={code} theme={theme} />;
                }

                if (!part.trim()) return null;

                return (
                    <div
                        key={i}
                        className="ai-parser-root"
                        dangerouslySetInnerHTML={{ __html: parseMarkdown(part) }}
                    />
                );
            })}
        </div>
    );
};