// utils/highlight.ts
export const highlight = (code: string, theme: any) => {
    return code
        .replace(/(['"`])((?:\\\1|[\s\S])*?)\1/g, `<span style="color:${theme.string}">$&</span>`)
        .replace(/(\/\/.*$)/gm, `<span style="color:${theme.comment}">$1</span>`)
        .replace(/\b(const|let|var|function|return|if|else|for|while|import|from|export|default|class|new|try|catch|await|async|extends|throw|interface|type|typeof|instanceof)\b/g,
            `<span style="color:${theme.keyword}">$1</span>`)
        .replace(/\b(\d+\.?\d*)\b/g, `<span style="color:${theme.number}">$1</span>`)
        .replace(/([A-Za-z_$][A-Za-z0-9_$]*)(?=\s*\()/g, `<span style="color:${theme.function}">$1</span>`)
        .replace(/\b(true|false|null|undefined)\b/g, `<span style="color:${theme.keyword}">$1</span>`);
};