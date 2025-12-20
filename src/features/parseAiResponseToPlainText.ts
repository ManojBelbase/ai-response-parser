
export function parseAiResponseToPlainText(rawContent: string): string {
    if (!rawContent?.trim()) return "";

    let text = rawContent;

    text = text
        .replace(/\\n/g, "\n")
        .replace(/\\\*/g, "*")
        .replace(/\\_/g, "_")
        .replace(/\\`/g, "`")
        .replace(/\\\[/g, "[")
        .replace(/\\\]/g, "]");

    text = text.replace(/```[\s\S]*?```/g, (match) => {
        return "";
    });

    text = text.replace(
        /(\|.*\|.*\n)((?:\|.*\|.*\n)*)(?=\n|$)/g,
        (match, headerRow, bodyRows) => {
            if (!headerRow.includes("|")) return match;

            const headers = headerRow
                .split("|")
                .slice(1, -1)
                .map((h: string) => h.trim())
                .filter(Boolean);

            const rows: string[] = [];
            if (bodyRows) {
                bodyRows.split("\n").forEach((row: string) => {
                    if (row.trim() && row.includes("|")) {
                        const cells = row
                            .split("|")
                            .slice(1, -1)
                            .map((cell: string) => cell.trim())
                            .filter(Boolean);
                        rows.push(cells.join(" | "));
                    }
                });
            }

            // Format as simple plain text
            let result = headers.join(" | ") + "\n";
            result += "-".repeat(40) + "\n";
            result += rows.join("\n");
            return result;
        }
    );

    text = text
        // Headers → just the text
        .replace(/^#{1,6}\s+/gm, "")
        // Blockquotes → remove >
        .replace(/^>\s*/gm, "")
        // Lists → remove bullets/numbers
        .replace(/^\s*[-*+]\s+/gm, "")
        .replace(/^\s*\d+\.\s+/gm, "")
        // Horizontal rules → remove
        .replace(/^(---|\*\*\*|\*\*\*\*)$/gm, "")
        // Remove extra blank lines
        .replace(/\n{3,}/g, "\n\n");

    // === Inline formatting: keep the text, remove markup ===
    text = text
        .replace(/\*\*([^*]+?)\*\*/g, "$1")
        .replace(/__([^_]+?)__/g, "$1")
        .replace(/\*([^*]+?)\*/g, "$1")
        .replace(/_([^_]+?)_/g, "$1")
        .replace(/~~([^~]+?)~~/g, "$1")
        .replace(/`([^`]+?)`/g, "$1")
        .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, "$1 ($2)");

    // Trim and normalize whitespace
    text = text
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line.length > 0)
        .join("\n");

    return text.trim();
}