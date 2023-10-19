export type Replacement = {
    start: number;
    from: string;
    to: string;
};

function replaceSubstring(text: string, replacement: Replacement) {
    return (
        text.slice(0, replacement.start) +
        replacement.to +
        text.slice(replacement.start + replacement.from.length)
    );
}

export function replaceSubstrings(text: string, replacements: Replacement[]) {
    let transformed = text;
    let acc = 0;

    for (const replacement of replacements) {
        replacement.start += acc;
        transformed = replaceSubstring(transformed, replacement);
        acc += replacement.to.length - replacement.from.length;
    }

    return transformed;
}
