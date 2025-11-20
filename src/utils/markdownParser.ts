export const parseMarkdown = (text: string): string => {
    return text
        .replace(/\*\*(.*?)\*\*/g, '<strong class="ai-bold">$1</strong>')
        .replace(/\*(.*?)\*/g, '<em class="ai-italic">$1</em>')
        .replace(/`(.*?)`/g, '<code class="ai-inline-code">$1</code>')
        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener" class="ai-link">$1</a>')
        .replace(/^### (.*$)/gm, '<h3 class="ai-h3">$1</h3>')
        .replace(/^## (.*$)/gm, '<h2 class="ai-h2">$1</h2>')
        .replace(/^# (.*$)/gm, '<h1 class="ai-h1">$1</h1>')
        .replace(/^> (.*$)/gm, '<blockquote class="ai-blockquote">$1</blockquote>')
        .replace(/\n/g, '<br>');
};