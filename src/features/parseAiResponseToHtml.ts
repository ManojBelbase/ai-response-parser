
import { escapeHtml } from "../utils";

export function parseAiResponseToHtml(text: string): string {
    if (!text?.trim()) return "";

    let html = escapeHtml(text);

    // === Clean up AI artifacts ===
    html = html
        .replace(/\\n/g, "\n")
        .replace(/\\\*/g, "*")
        .replace(/\\_/g, "_")
        .replace(/\\`/g, "`")
        .replace(/\\$$ /g, "[")
        .replace(/\\ $$/g, "]");

    // === Headers ===
    html = html.replace(/^### (.*$)/gim, "<h3>$1</h3>");
    html = html.replace(/^## (.*$)/gim, "<h2>$1</h2>");
    html = html.replace(/^# (.*$)/gim, "<h1>$1</h1>");

    // === Horizontal rules ===
    html = html.replace(/^(---|\*\*\*|\*\*\*\*)$/gm, "<hr>");

    // === Blockquotes ===
    html = html.replace(/^> (.*$)/gim, "<blockquote>$1</blockquote>");

    // === Tables – improved inline formatting ===
    const tableRegex = /(\|.*\|.*\n)((?:\|.*\|.*\n)*)(?=\n|$)/g;
    html = html.replace(tableRegex, (match, headerRow, bodyRows) => {
        if (!headerRow.includes("|")) return match;

        const applyInline = (str: string) =>
            str
                .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                .replace(/\*(.*?)\*/g, "<em>$1</em>")
                .replace(/~~(.*?)~~/g, "<del>$1</del>")
                .replace(/`([^`]+?)`/g, "<code>$1</code>");

        const headers = headerRow
            .split("|")
            .slice(1, -1)
            .map((h: string) => `<th>${applyInline(h.trim())}</th>`)
            .join("");

        const rows: string[] = [];
        if (bodyRows) {
            bodyRows.split("\n").forEach((row: string) => {
                if (row.trim() && row.includes("|")) {
                    const cells = row
                        .split("|")
                        .slice(1, -1)
                        .map((cell: string) => `<td>${applyInline(cell.trim())}</td>`)
                        .join("");
                    rows.push(`<tr>${cells}</tr>`);
                }
            });
        }

        return `<table><thead><tr>${headers}</tr></thead><tbody>${rows.join("")}</tbody></table>`;
    });

    // === Lists – improved with task list support ===
    const lines = html.split("\n");
    const result: string[] = [];
    let inUl = false;
    let inOl = false;
    let inCodeBlock = false;

    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        const trimmed = line.trim();

        if (trimmed.startsWith("```")) {
            inCodeBlock = !inCodeBlock;
            if (inCodeBlock) {
                // Start of code block – clean the opening line
                const lang = trimmed.slice(3).trim() || "text";
                result.push(`<pre class="code-block" data-lang="${lang}"><code>`);
            } else {
                // End of code block
                result.push("</code></pre>");
            }
            continue;
        }

        if (inCodeBlock) {
            result.push(line); // keep raw code
            continue;
        }

        // Task list
        if (/^[-*+]\s+\[([ x])\]\s+/.test(trimmed)) {
            if (inOl) {
                result.push("</ol>");
                inOl = false;
            }
            if (!inUl) {
                result.push("<ul>");
                inUl = true;
            }
            const checked = trimmed.includes("[x]");
            const content = trimmed.replace(/^[-*+]\s+\[([ x])\]\s+/, "");
            result.push(
                `<li class="task-item"><input type="checkbox" ${checked ? "checked" : ""} disabled /> ${processInlineFormatting(content)}</li>`
            );
        }
        // Unordered list
        else if (/^[-*+]\s+/.test(trimmed)) {
            if (inOl) {
                result.push("</ol>");
                inOl = false;
            }
            if (!inUl) {
                result.push("<ul>");
                inUl = true;
            }
            const content = trimmed.replace(/^[-*+]\s+/, "");
            result.push(`<li>${processInlineFormatting(content)}</li>`);
        }
        // Ordered list
        else if (/^\d+\.\s+/.test(trimmed)) {
            if (inUl) {
                result.push("</ul>");
                inUl = false;
            }
            if (!inOl) {
                result.push("<ol>");
                inOl = true;
            }
            const content = trimmed.replace(/^\d+\.\s+/, "");
            result.push(`<li>${processInlineFormatting(content)}</li>`);
        }
        // Normal line
        else {
            if (inUl) {
                result.push("</ul>");
                inUl = false;
            }
            if (inOl) {
                result.push("</ol>");
                inOl = false;
            }
            if (trimmed) {
                result.push(processInlineFormatting(line));
            } else {
                result.push("");
            }
        }
    }

    if (inUl) result.push("</ul>");
    if (inOl) result.push("</ol>");

    html = result.join("\n");

    // === Paragraph wrapping ===
    html = html
        .split(/\n\n+/)
        .map((block) => {
            const trimmed = block.trim();
            if (!trimmed) return "";

            if (
                trimmed.startsWith("<h") ||
                trimmed.startsWith("<ul") ||
                trimmed.startsWith("<ol") ||
                trimmed.startsWith("<li") ||
                trimmed.startsWith("<blockquote") ||
                trimmed.startsWith("<hr") ||
                trimmed.startsWith("<table") ||
                trimmed.startsWith("<pre")
            ) {
                return block;
            }

            return `<p>${trimmed}</p>`;
        })
        .join("\n\n");

    return html.trim();
}

// Inline formatting helper
function processInlineFormatting(text: string): string {
    return text
        .replace(/\*\*([^*]+?)\*\*/g, "<strong>$1</strong>")
        .replace(/__([^_]+?)__/g, "<strong>$1</strong>")
        .replace(/\*([^*]+?)\*/g, "<em>$1</em>")
        .replace(/_([^_]+?)_/g, "<em>$1</em>")
        .replace(/~~([^~]+?)~~/g, "<del>$1</del>")
        .replace(/`([^`]+?)`/g, "<code>$1</code>")
        .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
}