import { escapeHtml } from "./escapeHtml";
import { tokenize } from "./tokenize";
export const highlight = (code, theme) => {
    const tokens = tokenize(code);
    let html = "";
    let pos = 0;
    tokens.forEach(token => {
        if (token.start > pos) {
            html += escapeHtml(code.slice(pos, token.start));
        }
        // Ensure token.type exists in theme
        const color = theme[token.type] ?? theme.keyword;
        html += `<span style="color:${color}">${escapeHtml(token.value)}</span>`;
        pos = token.end;
    });
    if (pos < code.length) {
        html += escapeHtml(code.slice(pos));
    }
    return html;
};
