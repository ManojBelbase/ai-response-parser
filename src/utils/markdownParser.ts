export const parseMarkdown = (text: string): string => {
    text = text.replace(
        /(^[*\-•] .+(?:\n[*\-•] .+)*)/gm,
        match => {
            const items = match
                .split("\n")
                .map(line => line.replace(/^[*\-•] /, "").trim())
                .map(item => `<li>${item}</li>`)
                .join("");

            return `<ul class="ai-ul">${items}</ul>`;
        }
    );

    // Convert markdown styles
    let html = text
        // Headers
        .replace(/^### (.*$)/gm, '<h3 class="ai-h3">$1</h3>')
        .replace(/^## (.*$)/gm, '<h2 class="ai-h2">$1</h2>')
        .replace(/^# (.*$)/gm, '<h1 class="ai-h1">$1</h1>')

        // Bold
        .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
        .replace(/__([^_]+)__/g, "<strong>$1</strong>")

        // Italic
        .replace(/\*([^*]+)\*/g, "<em>$1</em>")
        .replace(/_([^_]+)_/g, "<em>$1</em>")

        // Inline code
        .replace(/`([^`]+)`/g, '<span class="ai-inline-code">$1</span>')

        // Links
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="ai-link" target="_blank" rel="noopener">$1</a>')

        // Blockquotes
        .replace(/^> (.*$)/gm, '<div class="ai-blockquote">$1</div>');

    html = html
        .split(/\n\n+/)
        .map(para => {
            if (para.startsWith("<ul") || para.startsWith("<h")) return para;
            return `<div class="ai-text">${para.trim()}</div>`;
        })
        .join("");

    return html.replace(/\n/g, "<br>");
};
