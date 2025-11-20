export const defaultTheme = {
  // Syntax highlighting colors
  comment: '#6a9955',      // Green for comments
  string: '#ce9178',       // Orange for strings
  keyword: '#569cd6',      // Blue for keywords (if, else, const, let, etc.)
  number: '#b5cea8',       // Light green for numbers
  function: '#dcdcaa',     // Yellow for function names
  operator: '#d4d4d4',     // Light gray for operators (+, -, =, etc.)
  punctuation: '#d4d4d4',  // Light gray for punctuation ({, }, [, ], etc.)
  property: '#9cdcfe',     // Light blue for properties (.map, .filter, etc.)

  // UI colors
  background: '#1e1e1e',
  text: '#d4d4d4',
  // ... other UI colors
};

// Light theme variant
export const lightTheme = {
  comment: '#008000',      // Dark green
  string: '#a31515',       // Dark red
  keyword: '#0000ff',      // Blue
  number: '#098658',       // Teal
  function: '#795e26',     // Brown
  operator: '#000000',     // Black
  punctuation: '#000000',  // Black
  property: '#001080',     // Dark blue

  background: '#ffffff',
  text: '#000000',
};

// Popular theme presets
export const themes = {
  // VSCode Dark+ (default)
  vscode: {
    comment: '#6a9955',
    string: '#ce9178',
    keyword: '#569cd6',
    number: '#b5cea8',
    function: '#dcdcaa',
    operator: '#d4d4d4',
    punctuation: '#d4d4d4',
    property: '#9cdcfe',
  },

  // Monokai
  monokai: {
    comment: '#75715e',
    string: '#e6db74',
    keyword: '#f92672',
    number: '#ae81ff',
    function: '#a6e22e',
    operator: '#f92672',
    punctuation: '#f8f8f2',
    property: '#66d9ef',
  },

  // Dracula
  dracula: {
    comment: '#6272a4',
    string: '#f1fa8c',
    keyword: '#ff79c6',
    number: '#bd93f9',
    function: '#50fa7b',
    operator: '#ff79c6',
    punctuation: '#f8f8f2',
    property: '#8be9fd',
  },

  // GitHub Dark
  github: {
    comment: '#8b949e',
    string: '#a5d6ff',
    keyword: '#ff7b72',
    number: '#79c0ff',
    function: '#d2a8ff',
    operator: '#ff7b72',
    punctuation: '#c9d1d9',
    property: '#7ee787',
  },

  // One Dark
  oneDark: {
    comment: '#5c6370',
    string: '#98c379',
    keyword: '#c678dd',
    number: '#d19a66',
    function: '#61afef',
    operator: '#56b6c2',
    punctuation: '#abb2bf',
    property: '#e06c75',
  },
};

export function getThemeStyles(theme: any, darkMode: boolean): string {
  return `
    .ai-parser-root {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: ${darkMode ? '#d4d4d4' : '#000000'};
    }

    .ai-code-block {
      margin: 16px 0;
      border-radius: 8px;
      overflow: hidden;
      background: ${darkMode ? '#1e1e1e' : '#f6f8fa'};
      border: 1px solid ${darkMode ? '#30363d' : '#d0d7de'};
    }

    .ai-code-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 12px;
      background: ${darkMode ? '#161b22' : '#eaeef2'};
      border-bottom: 1px solid ${darkMode ? '#30363d' : '#d0d7de'};
    }

    .ai-code-lang {
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      color: ${darkMode ? '#8b949e' : '#57606a'};
    }

    .ai-copy-btn {
      padding: 4px 12px;
      font-size: 12px;
      background: ${darkMode ? '#21262d' : '#ffffff'};
      color: ${darkMode ? '#c9d1d9' : '#24292f'};
      border: 1px solid ${darkMode ? '#30363d' : '#d0d7de'};
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.2s;
    }

    .ai-copy-btn:hover {
      background: ${darkMode ? '#30363d' : '#f6f8fa'};
    }

    .ai-copy-btn.copied {
      background: #238636;
      color: white;
      border-color: #238636;
    }

    .ai-code-pre {
      margin: 0;
      padding: 16px;
      overflow-x: auto;
      background: ${darkMode ? '#0d1117' : '#ffffff'};
    }

    .ai-code-pre code {
      font-family: 'Fira Code', 'Consolas', 'Monaco', monospace;
      font-size: 14px;
      line-height: 1.5;
      display: block;
    }

    .ai-inline-code {
      padding: 2px 6px;
      background: ${darkMode ? '#30363d' : '#f6f8fa'};
      border-radius: 4px;
      font-family: 'Fira Code', 'Consolas', monospace;
      font-size: 0.9em;
    }

    .ai-text {
      margin: 12px 0;
    }

    .ai-ul {
      margin: 12px 0;
      padding-left: 24px;
    }

    .ai-ul li {
      margin: 8px 0;
    }

    .ai-link {
      color: ${darkMode ? '#58a6ff' : '#0969da'};
      text-decoration: none;
    }

    .ai-link:hover {
      text-decoration: underline;
    }

    .ai-blockquote {
      padding: 8px 16px;
      margin: 12px 0;
      border-left: 4px solid ${darkMode ? '#30363d' : '#d0d7de'};
      background: ${darkMode ? '#161b22' : '#f6f8fa'};
    }

    .ai-h1 { font-size: 2em; margin: 20px 0 10px; }
    .ai-h2 { font-size: 1.5em; margin: 18px 0 8px; }
    .ai-h3 { font-size: 1.25em; margin: 16px 0 6px; }
  `;
}
