// utils/parseMarkdown.ts
import { escapeHtml } from "./escapeHtml";

export function parseMarkdown(text: string): string {
    if (!text?.trim()) return "";

    let html = escapeHtml(text);

    // === Clean up common AI response artifacts ===
    html = html
        .replace(/\\n/g, '\n')
        .replace(/\\\*/g, '*')
        .replace(/\\_/g, '_')
        .replace(/\\`/g, '`')
        .replace(/\\\[/g, '[')
        .replace(/\\\]/g, ']');

    // === Headers ===
    html = html.replace(/^### (.*$)/gim, "<h3>$1</h3>");
    html = html.replace(/^## (.*$)/gim, "<h2>$1</h2>");
    html = html.replace(/^# (.*$)/gim, "<h1>$1</h1>");

    // === Horizontal Rule ===
    html = html.replace(/^---$/gim, "<hr>");
    html = html.replace(/^\*\*\*$/gim, "<hr>");

    // === Blockquotes ===
    html = html.replace(/^> (.*$)/gim, "<blockquote>$1</blockquote>");

    // === Tables - Enhanced detection ===
    const tableRegex = /(\|.*\|.*\n)((?:\|.*\|.*\n)*)(?=\n|$)/g;
    html = html.replace(tableRegex, (match, headerRow, bodyRows) => {
        if (!headerRow.includes('|')) return match;

        const headers = headerRow.split('|').slice(1, -1).map((h: string) =>
            `<th>${h.trim().replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</th>`
        ).join('');

        const rows: string[] = [];
        if (bodyRows) {
            bodyRows.split('\n').forEach((row: string) => {
                if (row.includes('|')) {
                    const cells = row.split('|').slice(1, -1).map((cell: string) =>
                        `<td>${cell.trim().replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</td>`
                    ).join('');
                    rows.push(`<tr>${cells}</tr>`);
                }
            });
        }

        return `<table><thead><tr>${headers}</tr></thead><tbody>${rows.join('')}</tbody></table>`;
    });

    // === Lists - Improved parsing ===
    const lines = html.split('\n');
    const result: string[] = [];
    let inUl = false;
    let inOl = false;
    let inCodeBlock = false;

    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        const trimmed = line.trim();

        // Skip code blocks
        if (trimmed.startsWith('```')) {
            inCodeBlock = !inCodeBlock;
            result.push(line);
            continue;
        }

        if (inCodeBlock) {
            result.push(line);
            continue;
        }

        // Unordered list items
        if (/^[-*+]\s+/.test(trimmed)) {
            if (inOl) {
                result.push('</ol>');
                inOl = false;
            }
            if (!inUl) {
                result.push('<ul>');
                inUl = true;
            }
            const content = trimmed.replace(/^[-*+]\s+/, '');
            result.push(`<li>${processInlineFormatting(content)}</li>`);
        }
        // Ordered list items
        else if (/^\d+\.\s+/.test(trimmed)) {
            if (inUl) {
                result.push('</ul>');
                inUl = false;
            }
            if (!inOl) {
                result.push('<ol>');
                inOl = true;
            }
            const content = trimmed.replace(/^\d+\.\s+/, '');
            result.push(`<li>${processInlineFormatting(content)}</li>`);
        }
        // End of lists
        else {
            if (inUl) {
                result.push('</ul>');
                inUl = false;
            }
            if (inOl) {
                result.push('</ol>');
                inOl = false;
            }

            // Process non-list lines with inline formatting
            if (trimmed && !trimmed.startsWith('<table') && !trimmed.startsWith('<h')) {
                result.push(processInlineFormatting(line));
            } else {
                result.push(line);
            }
        }
    }

    // Close any open lists
    if (inUl) result.push('</ul>');
    if (inOl) result.push('</ol>');

    html = result.join('\n');

    // === Final paragraph wrapping ===
    return html
        .split(/\n\n+/)
        .map(block => {
            const trimmed = block.trim();
            if (!trimmed) return '';

            // Don't wrap these block elements
            if (
                trimmed.startsWith('<h') ||
                trimmed.startsWith('<ul') ||
                trimmed.startsWith('<ol') ||
                trimmed.startsWith('<li') ||
                trimmed.startsWith('<blockquote') ||
                trimmed.startsWith('<hr') ||
                trimmed.startsWith('<table') ||
                trimmed.startsWith('<pre') ||
                trimmed.startsWith('<p>') ||
                /^<(ul|ol|li|table|thead|tbody|tr|th|td|blockquote|hr|pre)/.test(trimmed)
            ) {
                return block;
            }

            return `<p>${block.trim()}</p>`;
        })
        .join('\n\n');
}

// Helper function for inline formatting
function processInlineFormatting(text: string): string {
    return text
        .replace(/\*\*([^*]+?)\*\*/g, '<strong>$1</strong>')
        .replace(/__([^_]+?)__/g, '<strong>$1</strong>')
        .replace(/\*([^*]+?)\*/g, '<em>$1</em>')
        .replace(/_([^_]+?)_/g, '<em>$1</em>')
        .replace(/~~([^~]+?)~~/g, '<del>$1</del>')
        .replace(/`([^`]+?)`/g, '<code class="ai-inline-code">$1</code>')
        .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
}