export const parseMarkdown = (text) => {
    let html = text;
    // --- HEADINGS ---
    html = html
        .replace(/^### (.*)$/gm, '<h3 class="ai-h3">$1</h3>')
        .replace(/^## (.*)$/gm, '<h2 class="ai-h2">$1</h2>')
        .replace(/^# (.*)$/gm, '<h1 class="ai-h1">$1</h1>');
    // --- BOLD ---
    html = html
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/__(.*?)__/g, '<strong>$1</strong>');
    // --- ITALIC ---
    html = html
        .replace(/(^|[^*])\*(?!\*)(.*?)\*(?!\*)/g, '$1<em>$2</em>')
        .replace(/(^|[^_])_(?!_)(.*?)_(?!_)/g, '$1<em>$2</em>');
    // --- INLINE CODE ---
    html = html.replace(/`([^`]+)`/g, '<span class="ai-inline-code">$1</span>');
    // --- LINKS ---
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="ai-link" target="_blank" rel="noopener">$1</a>');
    // --- BLOCKQUOTES ---
    html = html.replace(/^> (.*)$/gm, '<div class="ai-blockquote">$1</div>');
    // --- UNORDERED LISTS ---
    // Unordered lists
    html = html.replace(/((?:^\s*[\*\-\+] .*$(?:\n|$))+)/gm, (block) => {
        const items = block
            .trim()
            .split("\n")
            .map(line => line.replace(/^[\*\-\+] (.*)/, '<li class="ai-li">$1</li>'))
            .join("");
        return `<ul class="ai-ul">${items}</ul>`;
    });
    // Ordered lists
    html = html.replace(/((?:^\s*\d+\. .*$(?:\n|$))+)/gm, (block) => {
        const items = block
            .trim()
            .split("\n")
            .map(line => line.replace(/^\d+\. (.*)/, '<li class="ai-li">$1</li>'))
            .join("");
        return `<ol class="ai-ul">${items}</ol>`;
    });
    // --- PARAGRAPHS ---
    html = html
        .split(/\n\n+/)
        .map(block => {
        const trimmed = block.trim();
        if (trimmed.startsWith("<ul") ||
            trimmed.startsWith("<ol") ||
            trimmed.startsWith("<li") ||
            trimmed.startsWith("<h") ||
            trimmed.startsWith("<pre") ||
            trimmed.startsWith("<div")) {
            return trimmed;
        }
        return `<div class="ai-text">${trimmed}</div>`;
    })
        .join("");
    // --- LINE BREAKS ---
    return html.replace(/\n/g, "<br>");
};
