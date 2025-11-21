export const parseMarkdown = (text: string): string => {
    if (!text) return "";

    // Normalize line endings
    text = text.replace(/\r\n/g, "\n");

    // ---------------------
    // 1. UL LISTS
    // ---------------------
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

    // ---------------------
    // 2. INLINE CODE & DISABLE PARAGRAPH WRAP INSIDE BLOCKS
    // ---------------------

    // Extract code blocks (```...```) so they are not altered by regex replacements
    const codeBlocks: string[] = [];
    text = text.replace(/```([\s\S]*?)```/g, (_, code) => {
        const placeholder = `__CODEBLOCK_${codeBlocks.length}__`;
        codeBlocks.push(
            `<pre class="ai-code-block"><code>${code}</code></pre>`
        );
        return placeholder;
    });

    // ---------------------
    // 3. HEADERS
    // ---------------------
    text = text
        .replace(/^### (.*$)/gm, '<h3 class="ai-h3">$1</h3>')
        .replace(/^## (.*$)/gm, '<h2 class="ai-h2">$1</h2>')
        .replace(/^# (.*$)/gm, '<h1 class="ai-h1">$1</h1>');

    // ---------------------
    // 4. BLOCKQUOTES
    // ---------------------
    text = text.replace(/^> (.*$)/gm, '<div class="ai-blockquote">$1</div>');

    // ---------------------
    // 5. BOLD & ITALIC
    // ---------------------
    text = text
        // Bold
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        .replace(/__(.*?)__/g, "<strong>$1</strong>")

        // Italic (only single *)
        .replace(/(^|[^*])\*([^*]+)\*(?!\*)/g, '$1<em>$2</em>')
        .replace(/(^|[^_])_([^_]+)_(?!_)/g, '$1<em>$2</em>');

    // ---------------------
    // 6. INLINE CODE
    // ---------------------
    text = text.replace(
        /`([^`]+)`/g,
        `<span class="ai-inline-code">$1</span>`
    );

    // ---------------------
    // 7. LINKS
    // ---------------------
    text = text.replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="$2" class="ai-link" target="_blank" rel="noopener">$1</a>'
    );

    // ---------------------
    // 8. PARAGRAPHS
    // ---------------------
    let html = text
        .split(/\n\n+/) // split into paragraphs
        .map(block => {
            const trimmed = block.trim();

            // Do NOT wrap these inside <div>
            if (
                trimmed.startsWith("<h") ||
                trimmed.startsWith("<ul") ||
                trimmed.startsWith("<pre") ||
                trimmed.startsWith("<div class=\"ai-blockquote\"")
            ) {
                return trimmed;
            }

            return `<div class="ai-text">${trimmed}</div>`;
        })
        .join("");

    // ---------------------
    // 9. RESTORE CODE BLOCKS
    // ---------------------
    html = html.replace(/__CODEBLOCK_(\d+)__/g, (_, i) => codeBlocks[i]);

    // ---------------------
    // 10. FINAL NEWLINES → <br>
    // ---------------------
    return html.replace(/\n/g, "<br>");
};
