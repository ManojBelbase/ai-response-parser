import { Theme } from "../types";

export function getThemeStyles(theme: Theme, textColor: string) {
  return `
    /* Root — base font & color */
    .ai-parser-root {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, sans-serif;
      line-height: 1.7;
      color: ${textColor};
      font-size: 15px;
    }

    /* Paragraphs */
    .ai-parser-root p {
      margin: 0 0 16px 0;
    }

    /* Headers */
    .ai-parser-root h1,
    .ai-parser-root h2,
    .ai-parser-root h3 {
      margin: 28px 0 16px 0;
      font-weight: 600;
      line-height: 1.3;
      color: ${textColor === "#000000" ? "#1a1a1a" : "#ffffff"};
    }
    .ai-parser-root h1 { font-size: 1.9em; }
    .ai-parser-root h2 { font-size: 1.55em; }
    .ai-parser-root h3 { font-size: 1.3em; }

    /* Lists — tight & beautiful */
    .ai-parser-root ul,
    .ai-parser-root ol {
      margin: 14px 0;
      padding-left: 28px;
    }
    .ai-parser-root li {
      margin: 6px 0;
    }
    .ai-parser-root ul { list-style: disc; }
    .ai-parser-root ol { list-style: decimal; }

    /* Links */
    .ai-parser-root a {
      color: #58a6ff;
      text-decoration: none;
      border-bottom: 1px dotted #58a6ff;
      transition: border 0.2s;
    }
    .ai-parser-root a:hover {
      border-bottom-style: solid;
    }

    /* Inline code */
    .ai-inline-code {
      padding: 3px 6px;
      background: ${theme.copyBtnBg || "rgba(135, 135, 135, 0.15)"};
      color: ${theme.plain || "#ffab70"};
      border-radius: 5px;
      font-family: 'Fira Code', 'JetBrains Mono', 'Consolas', monospace;
      font-size: 0.92em;
    }

    /* Blockquotes */
    .ai-parser-root blockquote {
      margin: 20px 0;
      padding: 0 18px;
      border-left: 4px solid #58a6ff;
      color: ${textColor === "#000000" ? "#555" : "#b0b8c4"};
      font-style: italic;
    }

/* Tables — clean & pro with responsive scroll */
.ai-parser-root table {
  border-collapse: collapse;
  width: 100%;
  margin: 20px 0;
  overflow: hidden;
  display: block;
  overflow-x: auto;
  white-space: nowrap;
  max-width: 100%;
}

/* Optional: Add a container for better control */
.ai-parser-root .table-container {
  width: 100%;
  overflow-x: auto;
  margin: 20px 0;
}

.ai-parser-root .table-container table {
  margin: 0;
  min-width: 100%;
  white-space: nowrap;
}

.ai-parser-root th,
.ai-parser-root td {
  border: 1px solid ${theme.headerBg || "#444"};
  padding: 12px 16px;
  text-align: left;
  white-space: nowrap;
}

.ai-parser-root th {
  font-weight: 600;
  color: ${textColor};
}

/* Add subtle shadow and rounded corners when scrollable */


/* Custom scrollbar styling */
.ai-parser-root table::-webkit-scrollbar {
  height: 8px;
}

.ai-parser-root table::-webkit-scrollbar-track {
  background: ${theme.scrollTrack || "#f1f1f1"};
  border-radius: 4px;
}

.ai-parser-root table::-webkit-scrollbar-thumb {
  background: ${theme.scrollThumb || "#c1c1c1"};
  border-radius: 4px;
}

.ai-parser-root table::-webkit-scrollbar-thumb:hover {
  background: ${theme.scrollThumbHover || "#a8a8a8"};
}



    /* Horizontal rule */
    .ai-parser-root hr {
      border: none;
      height: 1px;
      background: ${theme.headerBg || "#444"};
      margin: 28px 0;
    }

    /* Your existing code block styles — untouched & perfect */
    .ai-code-block {
      margin: 16px 0;
      border-radius: 8px;
      overflow: hidden;
      background: ${theme.codeBg};
      border: 1px solid ${theme.headerBg};
    }
    .ai-code-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 12px;
      background: ${theme.headerBg};
    }
    .ai-code-lang {
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      color: ${theme.comment};
    }
    .ai-copy-btn {
      padding: 4px 12px;
      font-size: 12px;
      background: ${theme.copyBtnBg};
      color: ${theme.copyBtnText};
      border: 1px solid ${theme.headerBg};
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.2s;
    }
    .ai-copy-btn:hover {
      background: ${theme.copyBtnHover};
    }
    .ai-code-pre {
      margin: 0;
      padding: 16px;
      overflow-x: auto;
      background: ${theme.codeBg};
      scrollbar-width: thin;
      scrollbar-color: ${theme.scrollThumb} ${theme.scrollTrack};
    }
    .ai-code-pre::-webkit-scrollbar {
      height: 6px;
    }
    .ai-code-pre::-webkit-scrollbar-track {
      background: ${theme.scrollTrack};
    }
    .ai-code-pre::-webkit-scrollbar-thumb {
      background: ${theme.scrollThumb};
      border-radius: 4px;
    }
    .ai-code-pre::-webkit-scrollbar-thumb:hover {
      background: ${theme.scrollThumbHover};
    }
    .ai-code-pre code {
      font-family: 'Fira Code', 'Consolas', 'Monaco', monospace;
      font-size: 14px;
      line-height: 1.55;
      display: block;
      color: ${theme.plain};
    }
  `;
}