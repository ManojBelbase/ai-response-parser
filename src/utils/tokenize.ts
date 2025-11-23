import { PATTERNS } from "../consts";
import { Token } from "../types";

export function tokenize(code: string): Token[] {
    const matches: Token[] = [];

    Object.entries(PATTERNS).forEach(([type, { regex, priority }]) => {
        const pattern = new RegExp(regex.source, regex.flags);
        let match;

        while ((match = pattern.exec(code)) !== null) {
            matches.push({
                type,
                value: match[0],
                start: match.index,
                end: match.index + match[0].length,
                priority
            });
        }
    });

    matches.sort((a, b) => {
        if (a.start !== b.start) return a.start - b.start;
        return a.priority - b.priority;
    });

    const nonOverlapping: Token[] = [];
    let lastEnd = 0;

    matches.forEach(match => {
        if (match.start >= lastEnd) {
            nonOverlapping.push(match);
            lastEnd = match.end;
        }
    });

    return nonOverlapping;
}
