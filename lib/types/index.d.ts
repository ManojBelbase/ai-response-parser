export interface ColorTheme {
    codeBgLight?: string;
    codeBgDark?: string;
    codeBorderLight?: string;
    codeBorderDark?: string;
    textLight?: string;
    textDark?: string;
    inlineCodeBgLight?: string;
    inlineCodeBgDark?: string;
    copyButtonBg?: string;
    copyButtonHover?: string;
    linkColor?: string;
    headingColor?: string;
    keyword?: string;
    string?: string;
    number?: string;
    comment?: string;
    function?: string;
    operator?: string;
}
export interface AIResponseParserProps {
    content: string;
    darkMode?: boolean;
    colors?: Partial<ColorTheme>;
    className?: string;
}
export interface CodeBlockProps {
    language: string;
    code: string;
    theme: Required<ColorTheme>;
    darkMode?: boolean;
}
export interface AIResponseParserPropsExtended extends AIResponseParserProps {
    themeName?: 'vscode' | 'monokai' | 'dracula' | 'github' | 'oneDark';
}
export interface Token {
    type: string;
    value: string;
    start: number;
    end: number;
    priority: number;
}
export interface Theme {
    comment: string;
    string: string;
    keyword: string;
    number: string;
    function: string;
    operator: string;
    punctuation?: string;
    property?: string;
}
