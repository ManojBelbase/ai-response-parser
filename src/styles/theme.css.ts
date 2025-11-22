import { Theme } from "../types";

export function getThemeStyles(theme: Theme, textColor: string) {
  return `
    /* Root container */
    .ai-parser-root {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.7;
      color: ${textColor};
    }

    /* All text outside code blocks */
    .ai-text, .ai-text * {
      color: ${textColor} !important;
    }

    /* Code block container */
    .ai-code-block {
      margin: 10px 0;
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
      border-bottom: 1px solid ${theme.headerBg};
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

  /* Firefox */
  scrollbar-width: thin;
  scrollbar-color: ${theme.scrollThumb} ${theme.scrollTrack};
}

/* Chrome / Edge / Safari */
.ai-code-pre::-webkit-scrollbar {
  height: 2px;
}

.ai-code-pre::-webkit-scrollbar-track {
  background: ${theme.scrollTrack};
  border-radius: 2px;
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

    .ai-inline-code {
      padding: 2px 4px;
      background: ${theme.copyBtnBg};
      border-radius: 4px;
      font-family: 'Fira Code', 'Consolas', monospace;
      font-size: 0.9em;
      color: ${theme.plain};
    }
  `;
}
