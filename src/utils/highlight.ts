import { Theme } from "../types";
import { escapeHtml } from "./escapeHtml";
import { tokenize } from "./tokenize";

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
