
interface Token {
    type: string;
    value: string;
    start: number;
    end: number;
    priority: number;
}

interface Theme {
    comment: string;
    string: string;
    keyword: string;
    number: string;
    function: string;
    operator: string;
    punctuation?: string;
    property?: string;
}

// Language patterns with priorities (lower = higher priority)
const PATTERNS = {
    comment: { regex: /(\/\*[\s\S]*?\*\/|\/\/.*$)/gm, priority: 1 },
    string: { regex: /(["'`])(?:\\.|(?!\1)[^\\\r\n])*\1/g, priority: 2 },
    keyword: {
        regex: /\b(const|let|var|function|return|if|else|for|while|switch|case|break|continue|import|from|export|default|class|new|try|catch|throw|extends|await|async|interface|type|typeof|instanceof|this|super|static|get|set|of|in|do|finally|void|delete|yield|public|private|protected|readonly|abstract|implements|namespace|declare|module|enum|as)\b/g,
        priority: 3
    },
    boolean: { regex: /\b(true|false|null|undefined)\b/g, priority: 3 },
    number: { regex: /\b(\d+\.?\d*|\.\d+)([eE][+-]?\d+)?\b/g, priority: 4 },
    function: { regex: /\b([a-zA-Z_$][\w$]*)\s*(?=\()/g, priority: 5 },
    property: { regex: /\.([a-zA-Z_$][\w$]*)/g, priority: 6 },
    operator: { regex: /(===|!==|==|!=|<=|>=|&&|\|\||=>|\+\+|--|[+\-*/%=<>!&|^~?:])/g, priority: 7 },
    punctuation: { regex: /[{}[\]();,.:]/g, priority: 8 }
};

/**
 * Tokenize code into syntax tokens
 */
function tokenize(code: string): Token[] {
    const matches: Token[] = [];

    // Find all matches for all patterns
    Object.entries(PATTERNS).forEach(([type, { regex, priority }]) => {
        const pattern = new RegExp(regex.source, regex.flags);
        let match;

        while ((match = pattern.exec(code)) !== null) {
            matches.push({
                type,
                value: match[0],
                start: match.index,
                end: match.index + match[0].length,
                priority
            });
        }
    });

    // Sort by position, then by priority
    matches.sort((a, b) => {
        if (a.start !== b.start) return a.start - b.start;
        return a.priority - b.priority;
    });

    // Remove overlapping matches (keep higher priority)
    const nonOverlapping: Token[] = [];
    let lastEnd = 0;

    matches.forEach(match => {
        if (match.start >= lastEnd) {
            nonOverlapping.push(match);
            lastEnd = match.end;
        }
    });

    return nonOverlapping;
}

/**
 * Escape HTML special characters
 */
function escapeHtml(text: string): string {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

/**
 * Highlight code with syntax colors
 */
export const highlight = (code: string, theme: Theme): string => {
    // Tokenize the ORIGINAL code (before escaping)
    const tokens = tokenize(code);

    // Build highlighted HTML
    let html = '';
    let position = 0;

    tokens.forEach(token => {
        // Add text before this token (escaped)
        if (token.start > position) {
            html += escapeHtml(code.slice(position, token.start));
        }

        // Add the token with styling
        const color = theme[token.type as keyof Theme] || theme.keyword;
        html += `<span style="color:${color}">${escapeHtml(token.value)}</span>`;

        position = token.end;
    });

    // Add remaining text
    if (position < code.length) {
        html += escapeHtml(code.slice(position));
    }

    return html;
};
