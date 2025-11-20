// styles/theme.css.ts
import type { ColorTheme } from "../types";

export const defaultTheme: Required<ColorTheme> = {
  codeBgLight: "#ffffff",
  codeBgDark: "#0d1117",
  codeBorderLight: "#d0d7de",
  codeBorderDark: "#30363d",
  textLight: "#24292e",
  textDark: "#e0e0e0",
  inlineCodeBgLight: "#f0f0f0",
  inlineCodeBgDark: "#2d2d2d",

  // ← No more blue button! Transparent/minimal as you asked
  copyButtonBg: "transparent",
  copyButtonHover: "rgba(255, 255, 255, 0.1)",

  linkColor: "#58a6ff",
  headingColor: "#ffffff",

  // GitHub syntax colors (keep them, they’re perfect)
  keyword: "#ff7b72",
  string: "#a5d6ff",
  number: "#79c0ff",
  comment: "#8b949e",
  function: "#d2a8ff",
  operator: "#79c0ff",
};

export const getThemeStyles = (theme: Required<ColorTheme>, darkMode: boolean) => `
  .ai-parser-root {
    font-family: system-ui, -apple-system, sans-serif;
    line-height: 1.8;
    font-size: clamp(14.5px, 1.8vw, 16.5px);
    color: ${darkMode ? theme.textDark : theme.textLight};
    padding-inline: 12px;
  }

  .ai-text > * + * { margin-top: 1.4em; }

  .ai-inline-code {
    background: ${darkMode ? theme.inlineCodeBgDark : theme.inlineCodeBgLight};
    color: ${darkMode ? "#ffb4a2" : "#d73a49"};
    padding: 0.15em 0.4em;
    border-radius: 6px;
    font-family: 'Fira Code', ui-monospace, monospace;
    font-size: 0.88em;
  }

  .ai-link { color: ${theme.linkColor}; text-decoration: underline; text-underline-offset: 3px; }
  .ai-link:hover { opacity: 0.8; }

  .ai-h1, .ai-h2, .ai-h3 { font-weight: 700; margin: 1.6em 0 0.8em; }
  .ai-h1 { font-size: clamp(28px, 5vw, 36px); }
  .ai-h2 { font-size: clamp(22px, 4vw, 28px); }
  .ai-h3 { font-size: clamp(18px, 3vw, 22px); }

  .ai-blockquote {
    border-left: 4px solid ${theme.linkColor};
    padding-left: 16px;
    margin: 1.6em 0;
    color: ${darkMode ? "#9ca3af" : "#666"};
    font-style: italic;
  }

  /* Code block – exactly GitHub but with transparent copy button */
  .ai-code-block {
    margin: 1.6em 0;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid ${darkMode ? "#30363d" : "#d0d7de"};
    box-shadow: 0 8px 32px rgba(0,0,0,0.25);
    font-family: 'Fira Code', ui-monospace, monospace;
  }

  .ai-code-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 16px;
    background: ${darkMode ? "#161b22" : "#f6f8fa"};
    border-bottom: 1px solid ${darkMode ? "#30363d" : "#d0d7de"};
  }

  .ai-code-lang {
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    color: ${darkMode ? "#8b949e" : "#57606a"};
  }

  /* Transparent copy button – super minimal */
  .ai-copy-btn {
    padding: 6px 16px;
    border-radius: 8px;
    font-size: 12.5px;
    font-weight: 500;
    border: none;
    cursor: pointer;
    color: ${darkMode ? "#e0e0e0" : "#24292e"};
    background: ${theme.copyButtonBg};
    transition: all 0.2s ease;
  }

  .ai-copy-btn:hover {
    background: ${theme.copyButtonHover};
    color: white;
  }

  .ai-copy-btn.copied {
    background: ${theme.copyButtonHover};
    color: white;
  }

  .ai-code-pre {
    margin: 0;
    padding: 20px;
    background: ${darkMode ? "#0d1117" : "#ffffff"};
    color: ${darkMode ? "#e0e0e0" : "#24292e"};
    overflow-x: auto;
  }

  .ai-code-pre code {
    font-size: 13.8px;
    line-height: 1.65;
  }
`;