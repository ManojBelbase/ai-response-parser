import { escapeHtml } from "./escapeHtml";

export function parseMarkdown(text: string): string {
    let html = escapeHtml(text);

    // Headers (must come early)
    html = html.replace(/^### (.+)$/gm, '<h3 style="font-size:1.25rem;font-weight:600;margin:1.5rem 0 0.75rem">$1</h3>');
    html = html.replace(/^## (.+)$/gm, '<h2 style="font-size:1.5rem;font-weight:600;margin:2rem 0 1rem">$1</h2>');
    html = html.replace(/^# (.+)$/gm, '<h1 style="font-size:2rem;font-weight:700;margin:2rem 0 1rem">$1</h1>');

    // Bold (before italic)
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

    // Italic
    html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');

    // Strikethrough
    html = html.replace(/~~(.+?)~~/g, '<del style="text-decoration:line-through">$1</del>');

    // Links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" style="color:#58a6ff;text-decoration:none" target="_blank" rel="noopener">$1</a>');

    // Images
    html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" style="max-width:100%;height:auto;border-radius:6px;margin:1rem 0">');

    // Inline code
    html = html.replace(/`([^`]+)`/g, '<code style="background:#2d2d2d;padding:2px 6px;border-radius:3px;color:#7ec699;font-size:0.9em">$1</code>');

    // Horizontal rules
    html = html.replace(/^---$/gm, '<hr style="border:none;border-top:1px solid #444;margin:2rem 0">');

    // Blockquotes
    html = html.replace(/^> (.+)$/gm, '<blockquote style="border-left:4px solid #58a6ff;padding-left:1rem;margin:1rem 0;color:#8b949e">$1</blockquote>');

    // Process lists line by line
    const lines = html.split('\n');
    const processed: string[] = [];
    let inUnorderedList = false;
    let inOrderedList = false;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        // Unordered list
        const unorderedMatch = line.match(/^\* (.+)$/);
        // Ordered list
        const orderedMatch = line.match(/^\d+\.\s+(.+)$/);
        // Task list
        const taskMatch = line.match(/^- \[([ x])\] (.+)$/);

        if (taskMatch) {
            if (!inUnorderedList) {
                processed.push('<ul style="margin:8px 0;padding-left:20px;line-height:1.5;list-style:none">');
                inUnorderedList = true;
            }
            const checked = taskMatch[1] === 'x';
            processed.push(`<li style="margin-bottom:4px">
          <input type="checkbox" ${checked ? 'checked' : ''} disabled style="margin-right:8px">
          <span style="${checked ? 'text-decoration:line-through;color:#8b949e' : ''}">${taskMatch[2]}</span>
      </li>`);
        } else if (unorderedMatch) {
            if (inOrderedList) {
                processed.push('</ol>');
                inOrderedList = false;
            }
            if (!inUnorderedList) {
                processed.push('<ul style="margin:8px 0;padding-left:20px;line-height:1.5">');
                inUnorderedList = true;
            }
            processed.push(`<li style="margin-bottom:4px;padding-left:4px">${unorderedMatch[1]}</li>`);
        } else if (orderedMatch) {
            if (inUnorderedList) {
                processed.push('</ul>');
                inUnorderedList = false;
            }
            if (!inOrderedList) {
                processed.push('<ol style="margin:8px 0;padding-left:20px;line-height:1.5">');
                inOrderedList = true;
            }
            processed.push(`<li style="margin-bottom:4px;padding-left:4px">${orderedMatch[1]}</li>`);
        } else {
            if (inUnorderedList) {
                processed.push('</ul>');
                inUnorderedList = false;
            }
            if (inOrderedList) {
                processed.push('</ol>');
                inOrderedList = false;
            }
            processed.push(line);
        }
    }

    if (inUnorderedList) processed.push('</ul>');
    if (inOrderedList) processed.push('</ol>');

    html = processed.join('\n');

    // Paragraphs
    html = html.split('\n\n').map(p => {
        const trimmed = p.trim();
        if (!trimmed ||
            trimmed.startsWith('<h') ||
            trimmed.startsWith('<ul>') ||
            trimmed.startsWith('<ol>') ||
            trimmed.startsWith('<blockquote>') ||
            trimmed.startsWith('<hr') ||
            trimmed.startsWith('<img')) {
            return p;
        }
        return `<p style="margin-bottom:12px;line-height:1.6">${p.replace(/\n/g, '<br>')}</p>`;
    }).join('');

    return html;
}