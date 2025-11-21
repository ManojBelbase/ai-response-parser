import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { parseMarkdown } from './utils/markdownParser';
import { getThemeStyles, defaultTheme, themes } from './styles/theme.css';
import { CodeBlock } from './components/CodeBlock';
export const AIResponseParser = ({ content, darkMode = true, colors = {}, className = "", themeName = "oneDark", }) => {
    const baseTheme = themes[themeName] || defaultTheme;
    const theme = { ...baseTheme, ...colors };
    // Split content into code blocks / text blocks
    const parts = content.split(/(```[\w-]*\n[\s\S]*?```)/g);
    return (_jsxs("div", { className: `ai-parser-root ${className}`, children: [_jsx("style", { dangerouslySetInnerHTML: { __html: getThemeStyles(theme, darkMode) } }), parts.map((part, i) => {
                const match = part.match(/```(\w*)\n?([\s\S]*?)```/);
                if (match) {
                    const lang = (match[1] || "text").trim();
                    const code = match[2].trim();
                    return (_jsx(CodeBlock, { language: lang, code: code, theme: theme, darkMode: darkMode }, i));
                }
                if (!part.trim())
                    return null;
                return (_jsx("div", { className: "ai-text", dangerouslySetInnerHTML: { __html: parseMarkdown(part) } }, i));
            })] }));
};
