export const PATTERNS = {
    comment: {
        regex: /(\/\*[\s\S]*?\*\/|\/\/.*$|#.*$|<!--[\s\S]*?-->|\/\*\*[\s\S]*?\*\/)/gm,
        priority: 1
    },
    string: {
        regex: /(["'`])(?:\\.|(?!\1)[^\\\r\n])*\1/g,
        priority: 2
    },
    keyword: {
        regex: /\b(const|let|var|function|return|if|else|for|while|switch|case|break|continue|import|from|export|default|class|new|try|catch|throw|extends|await|async|interface|type|typeof|instanceof|this|super|static|get|set|of|in|do|finally|void|delete|yield|public|private|protected|readonly|abstract|implements|namespace|declare|module|enum|as|fn|def|pub|use|mod|impl|trait|struct|match|package|func|val|var|object|println|echo|puts|print|bool|int|String|main|std|fmt|iostream|using|System|Console|WriteLine|include|namespace|require|require_once|array|foreach|endforeach|endif|endwhile|trait|extends|abstract|final|clone)\b/g,
        priority: 3
    },
    boolean: {
        regex: /\b(true|false|True|False|null|nil|undefined|None|NULL)\b/g,
        priority: 3
    },
    number: {
        regex: /\b(\d+\.?\d*|\.\d+)([eE][+-]?\d+)?\b/g,
        priority: 4
    },
    function: {
        regex: /\b([a-zA-Z_$][\w$]*)\s*(?=\()/g,
        priority: 5
    },
    property: {
        regex: /\.([a-zA-Z_$][\w$]*)/g,
        priority: 6
    },
    operator: {
        regex: /(===|!==|==|!=|<=|>=|&&|\|\||=>|\+\+|--|[+\-*/%=<>!&|^~?:])/g,
        priority: 7
    },
    punctuation: {
        regex: /[{}[\]();,.:]/g,
        priority: 8
    }
};
