export const parseMarkdown = (text: string): string => {
    let html = text;

    // HEADERS
    html = html
        .replace(/^###\s+(.*)$/gm, `<h3 class="ai-h3">$1</h3>`)
        .replace(/^##\s+(.*)$/gm, `<h2 class="ai-h2">$1</h2>`)
        .replace(/^#\s+(.*)$/gm, `<h1 class="ai-h1">$1</h1>`);

    // BOLD and ITALIC
    html = html
        .replace(/\*\*(.*?)\*\*/g, `<strong>$1</strong>`)
        .replace(/__(.*?)__/g, `<strong>$1</strong>`)
        .replace(/(^|[^*])\*(?!\*)(.*?)\*(?!\*)/g, `$1<em>$2</em>`)
        .replace(/(^|[^_])_(?!_)(.*?)_(?!_)/g, `$1<em>$2</em>`);

    // INLINE CODE
    html = html.replace(/`([^`]+)`/g, `<span class="ai-inline-code">$1</span>`);

    // LINKS
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, `<a href="$2" class="ai-link" target="_blank" rel="noopener">$1</a>`);

    // BLOCKQUOTES
    html = html.replace(/^>\s+(.*)$/gm, `<div class="ai-blockquote">$1</div>`);

    // UNORDERED LISTS: Group consecutive bullets into one <ul>
    html = html.replace(
        /^(\* .*$(?:\n\* .*)*)/gm,
        (block) => {
            const items = block
                .trim()
                .split("\n")
                .map(line => {
                    const boldMatch = line.match(/^\* \*\*(.*?)\*\*(.*)/);
                    if (boldMatch) {
                        return `<li><strong>${boldMatch[1]}</strong>${boldMatch[2]}</li>`;
                    } else {
                        return `<li>${line.replace(/^\* /, '')}</li>`;
                    }
                })
                .join("");
            return `<ul class="ai-ul">${items}</ul>`;
        }
    );

    // PARAGRAPH WRAPPING
    html = html
        .split(/\n\n+/)
        .map(block => {
            if (
                block.startsWith("<h") ||
                block.startsWith("<ul") ||
                block.startsWith("<div") ||
                block.startsWith("<li")
            ) return block;
            return `<div class="ai-text">${block.trim()}</div>`;
        })
        .join("");

    // LINE BREAKS
    return html.replace(/\n/g, "<br>");
};
