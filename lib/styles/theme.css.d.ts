export declare const defaultTheme: {
    comment: string;
    string: string;
    keyword: string;
    number: string;
    function: string;
    operator: string;
    punctuation: string;
    property: string;
    background: string;
    text: string;
};
export declare const lightTheme: {
    comment: string;
    string: string;
    keyword: string;
    number: string;
    function: string;
    operator: string;
    punctuation: string;
    property: string;
    background: string;
    text: string;
};
export declare const themes: {
    vscode: {
        comment: string;
        string: string;
        keyword: string;
        number: string;
        function: string;
        operator: string;
        punctuation: string;
        property: string;
    };
    monokai: {
        comment: string;
        string: string;
        keyword: string;
        number: string;
        function: string;
        operator: string;
        punctuation: string;
        property: string;
    };
    dracula: {
        comment: string;
        string: string;
        keyword: string;
        number: string;
        function: string;
        operator: string;
        punctuation: string;
        property: string;
    };
    github: {
        comment: string;
        string: string;
        keyword: string;
        number: string;
        function: string;
        operator: string;
        punctuation: string;
        property: string;
    };
    oneDark: {
        comment: string;
        string: string;
        keyword: string;
        number: string;
        function: string;
        operator: string;
        punctuation: string;
        property: string;
    };
};
export declare function getThemeStyles(theme: any, darkMode: boolean): string;
