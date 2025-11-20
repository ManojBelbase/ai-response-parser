import type { ColorTheme } from "../types";

export const getThemeStyles = (theme: Required<ColorTheme>, darkMode: boolean) => `
  .ai-parser-root {
    font-family: system-ui, -apple-system, sans-serif;
    line-height: 1.75;
    font-size: clamp(14px, 1.6vw, 16px);
    color: ${darkMode ? theme.textDark : theme.textLight};
    padding-inline: 12px;       /* Mobile breathing space */
  }

  /* Consistent vertical spacing */
  .ai-text,
  .ai-blockquote,
  .ai-code-block,
  .ai-h1, .ai-h2, .ai-h3 {
    margin-block: 0rem;         /* Same gap for all major elements */
  }

  .ai-bold { font-weight: 700; }

  .ai-italic {
    font-style: italic;
    color: ${darkMode ? "#fff" : "#000"};
  }

  .ai-inline-code {
    background: ${darkMode ? theme.inlineCodeBgDark : theme.inlineCodeBgLight};
    padding: 2px 4px;
    border-radius: 4px;
    font-family: 'Fira Code', monospace;
    font-size: 0.85em;
    color: ${darkMode ? "#ffab70" : "#d73a49"};
  }

  .ai-link {
    color: ${theme.linkColor};
    text-decoration: underline;
  }

  .ai-link:hover { opacity: 0.85; }

  /* Responsive headings */
  .ai-h1 {
    font-size: clamp(24px, 4vw, 32px);
    font-weight: 700;
  }
  .ai-h2 {
    font-size: clamp(20px, 3.3vw, 26px);
    font-weight: 700;
  }
  .ai-h3 {
    font-size: clamp(18px, 2.8vw, 22px);
    font-weight: 700;
  }

  .ai-blockquote {
    border-left: 4px solid ${theme.linkColor};
    padding-left: 16px;
    color: ${darkMode ? "#9ca3af" : "#666"};
    font-style: italic;
  }

  /* Code block container */
  .ai-code-block {
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 6px 28px rgba(0,0,0,0.3);
    border: 1px solid;
    font-family: 'Fira Code', monospace;
  }

  /* Code header */
  .ai-code-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 16px;
    font-size: 12px;
  }

  .ai-code-lang {
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    color: ${darkMode ? "#8b949e" : "#57606a"};
  }

  .ai-copy-btn {
    padding: 6px 14px;
    border-radius: 8px;
    font-weight: 500;
    border: none;
    cursor: pointer;
    transition: background 0.2s;
    color: white;
  }

  /* Code block body */
  .ai-code-pre {
    margin: 0;
    padding: clamp(12px, 4vw, 24px);   /* Responsive padding */
    background: #000;
    color: #fff;
    overflow-x: auto;
    font-size: clamp(12px, 2.8vw, 14px);
  }
`;
