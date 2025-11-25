import { escapeHtml } from "./escapeHtml";

export function parseMarkdown(md: string): string {
    if (!md.trim()) return '';

    let output = md;

    // 1. Handle CODE BLOCKS first (preserve them)
    const codeBlocks: string[] = [];
    output = output.replace(/```([\s\S]*?)```/g, (match, code) => {
        const placeholder = `__CODEBLOCK_${codeBlocks.length}__`;
        codeBlocks.push(
            `<pre><code>${escapeHtml(code.trim())}</code></pre>`
        );
        return placeholder;
    });

    // 2. HEADINGS
    output = output.replace(/^######\s+(.+)$/gm, "<h6>$1</h6>");
    output = output.replace(/^#####\s+(.+)$/gm, "<h5>$1</h5>");
    output = output.replace(/^####\s+(.+)$/gm, "<h4>$1</h4>");
    output = output.replace(/^###\s+(.+)$/gm, "<h3>$1</h3>");
    output = output.replace(/^##\s+(.+)$/gm, "<h2>$1</h2>");
    output = output.replace(/^#\s+(.+)$/gm, "<h1>$1</h1>");

    // ------------------------------
    // 3. TABLES (Fixed implementation)
    // ------------------------------
    output = output.replace(
        /^\|(.+)\|\s*\n\|([-:\s|]+)\|\s*\n((?:^\|.+\|\s*\n?)+)/gm,
        (match, header, align, rows) => {
            // Process headers
            const headerCells = header
                .split('|')
                .map((h: string) => h.trim())
                .filter(Boolean)
                .map((h: string) => `<th>${h}</th>`)
                .join('');

            // Process alignment
            const alignCells = align
                .split('|')
                .map((a: string) => a.trim())
                .filter(Boolean)
                .map((a: string) => {
                    if (a.startsWith(':') && a.endsWith(':')) return 'center';
                    if (a.endsWith(':')) return 'right';
                    return 'left';
                });

            // Process rows
            const rowLines = rows.trim().split('\n');
            const rowCells = rowLines.map((row: string) => {
                const cells = row
                    .split('|')
                    .map((c: string) => c.trim())
                    .filter(Boolean)
                    .map((cell, index) =>
                        `<td style="text-align: ${alignCells[index] || 'left'}">${cell}</td>`
                    )
                    .join('');
                return `<tr>${cells}</tr>`;
            }).join('');

            return `<table><thead><tr>${headerCells}</tr></thead><tbody>${rowCells}</tbody></table>`;
        }
    );

    // ------------------------------
    // 4. LISTS (Fixed implementation)
    // ------------------------------

    // Process ordered lists
    output = output.replace(/^(\d+)\.\s+(.+)$/gm, '<li class="ol-item">$2</li>');

    // Process unordered lists
    output = output.replace(/^[-*+]\s+(.+)$/gm, '<li class="ul-item">$1</li>');

    // Wrap ordered lists
    output = output.replace(/(<li class="ol-item">[\s\S]*?<\/li>\s*)+/g, (match) => {
        const cleaned = match.replace(/class="ol-item"/g, '');
        return `<ol>${cleaned}</ol>`;
    });

    // Wrap unordered lists
    output = output.replace(/(<li class="ul-item">[\s\S]*?<\/li>\s*)+/g, (match) => {
        const cleaned = match.replace(/class="ul-item"/g, '');
        return `<ul>${cleaned}</ul>`;
    });

    // ------------------------------
    // 5. INLINE FORMATTING
    // ------------------------------
    output = output.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    output = output.replace(/__([^_]+)__/g, "<strong>$1</strong>");

    output = output.replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, "<em>$1</em>");
    output = output.replace(/_([^_]+)_/g, "<em>$1</em>");

    output = output.replace(/~~([^~]+)~~/g, "<del>$1</del>");
    output = output.replace(/`([^`]+)`/g, "<code class='inline-code'>$1</code>");

    output = output.replace(/\[([^\]]+)\]\(([^)]+)\)/g,
        `<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>`
    );

    // ------------------------------
    // 6. BLOCKQUOTES
    // ------------------------------
    output = output.replace(/^>\s+(.+)$/gm, "<blockquote>$1</blockquote>");

    // ------------------------------
    // 7. HORIZONTAL RULE
    // ------------------------------
    output = output.replace(/^\s*---\s*$/gm, "<hr>");
    output = output.replace(/^\s*\*\*\*\s*$/gm, "<hr>");
    output = output.replace(/^\s*___\s*$/gm, "<hr>");

    // ------------------------------
    // 8. PARAGRAPHS (Improved handling)
    // ------------------------------
    const lines = output.split('\n');
    const processedLines: string[] = [];
    let currentParagraph: string[] = [];

    const isBlockElement = (line: string): boolean => {
        const trimmed = line.trim();
        return /^<(h[1-6]|ul|ol|li|pre|blockquote|table|hr)/.test(trimmed) ||
            /<\/(h[1-6]|ul|ol|li|pre|blockquote|table|hr)>/.test(trimmed);
    };

    lines.forEach((line) => {
        const trimmed = line.trim();

        if (!trimmed) {
            // Empty line - flush current paragraph
            if (currentParagraph.length > 0) {
                processedLines.push(`<p>${currentParagraph.join(' ')}</p>`);
                currentParagraph = [];
            }
            processedLines.push(''); // Keep empty lines for spacing
            return;
        }

        if (isBlockElement(trimmed)) {
            // Block element - flush current paragraph and add the block
            if (currentParagraph.length > 0) {
                processedLines.push(`<p>${currentParagraph.join(' ')}</p>`);
                currentParagraph = [];
            }
            processedLines.push(trimmed);
        } else if (trimmed.startsWith('<li') || trimmed.startsWith('</ul>') || trimmed.startsWith('</ol>')) {
            // List items - flush current paragraph and add list element
            if (currentParagraph.length > 0) {
                processedLines.push(`<p>${currentParagraph.join(' ')}</p>`);
                currentParagraph = [];
            }
            processedLines.push(trimmed);
        } else {
            // Regular text - add to current paragraph
            currentParagraph.push(trimmed);
        }
    });

    // Flush any remaining paragraph
    if (currentParagraph.length > 0) {
        processedLines.push(`<p>${currentParagraph.join(' ')}</p>`);
    }

    // Filter out empty lines and join
    output = processedLines.filter(line => line !== '').join('\n');

    // ------------------------------
    // 9. Restore CODE BLOCKS
    // ------------------------------
    codeBlocks.forEach((block, i) => {
        output = output.replace(`__CODEBLOCK_${i}__`, block);
    });

    return output;
}

// Helper
