import { Theme } from "../types";
import { escapeHtml } from "./escapeHtml";
import { tokenize } from "./tokenize";

export function highlight(code: string, theme: Theme): string {
    const tokens = tokenize(code);
    let html = "";
    let pos = 0;

    tokens.forEach(token => {
        if (token.start > pos) {
            html += escapeHtml(code.slice(pos, token.start));
        }

        const color = theme[token.type as keyof Theme] ?? theme.keyword;
        html += `<span style="color:${color}">${escapeHtml(token.value)}</span>`;

        pos = token.end;
    });

    if (pos < code.length) {
        html += escapeHtml(code.slice(pos));
    }

    return html;
}