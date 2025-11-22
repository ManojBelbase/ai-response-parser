import { Theme } from "../types";

export type ThemeName =
    | "vscode"
    | "dracula"
    | "onedark"
    | "github"
    | "monokai"
    | "solarizedDark"
    | "nord"
    | "tomorrowNight"
    | "light";



export const themes: Record<ThemeName, Theme> = {
    // VSCode Dark+
    vscode: {
        comment: "#6a9955",
        string: "#ce9178",
        keyword: "#569cd6",
        function: "#dcdcaa",
        number: "#b5cea8",
        boolean: "#569cd6",
        operator: "#d4d4d4",
        punctuation: "#d4d4d4",
        property: "#9cdcfe",
        plain: "#d4d4d4",

        codeBg: "#1e1e1e",
        headerBg: "#161b22",
        copyBtnBg: "#21262d",
        copyBtnText: "#c9d1d9",
    },

    // Dracula
    dracula: {
        comment: "#6272a4",
        string: "#f1fa8c",
        keyword: "#ff79c6",
        function: "#50fa7b",
        number: "#bd93f9",
        boolean: "#ff79c6",
        operator: "#ff79c6",
        punctuation: "#f8f8f2",
        property: "#8be9fd",
        plain: "#f8f8f2",

        codeBg: "#282a36",
        headerBg: "#44475a",
        copyBtnBg: "#6272a4",
        copyBtnText: "#f8f8f2",
    },

    // One Dark
    onedark: {
        comment: "#5c6370",
        string: "#98c379",
        keyword: "#c678dd",
        function: "#61afef",
        number: "#d19a66",
        boolean: "#c678dd",
        operator: "#56b6c2",
        punctuation: "#abb2bf",
        property: "#e06c75",
        plain: "#abb2bf",

        codeBg: "#282c34",
        headerBg: "#21252b",
        copyBtnBg: "#3e4451",
        copyBtnText: "#abb2bf",
    },

    // GitHub Dark
    github: {
        comment: "#8b949e",
        string: "#79c0ff",
        keyword: "#ff7b72",
        function: "#d2a8ff",
        number: "#79c0ff",
        boolean: "#ff7b72",
        operator: "#79c0ff",
        punctuation: "#c9d1d9",
        property: "#79c0ff",
        plain: "#c9d1d9",

        codeBg: "#0d1117",
        headerBg: "#161b22",
        copyBtnBg: "#21262d",
        copyBtnText: "#c9d1d9",
    },

    // Monokai
    monokai: {
        comment: "#75715e",
        string: "#e6db74",
        keyword: "#f92672",
        function: "#a6e22e",
        number: "#ae81ff",
        boolean: "#f92672",
        operator: "#f92672",
        punctuation: "#f8f8f2",
        property: "#66d9ef",
        plain: "#f8f8f2",

        codeBg: "#272822",
        headerBg: "#3e3d32",
        copyBtnBg: "#49483e",
        copyBtnText: "#f8f8f2",
    },

    // Solarized Dark
    solarizedDark: {
        comment: "#586e75",
        string: "#2aa198",
        keyword: "#859900",
        function: "#b58900",
        number: "#d33682",
        boolean: "#cb4b16",
        operator: "#93a1a1",
        punctuation: "#93a1a1",
        property: "#268bd2",
        plain: "#839496",

        codeBg: "#002b36",
        headerBg: "#073642",
        copyBtnBg: "#073642",
        copyBtnText: "#839496",
    },

    // Nord
    nord: {
        comment: "#616e88",
        string: "#a3be8c",
        keyword: "#b48ead",
        function: "#88c0d0",
        number: "#d08770",
        boolean: "#b48ead",
        operator: "#81a1c1",
        punctuation: "#81a1c1",
        property: "#8fbcbb",
        plain: "#d8dee9",

        codeBg: "#2e3440",
        headerBg: "#3b4252",
        copyBtnBg: "#434c5e",
        copyBtnText: "#d8dee9",
    },

    // Tomorrow Night
    tomorrowNight: {
        comment: "#99968b",
        string: "#f2777a",
        keyword: "#cc99cc",
        function: "#f99157",
        number: "#ffcc66",
        boolean: "#cc99cc",
        operator: "#66cccc",
        punctuation: "#cccccc",
        property: "#99cc99",
        plain: "#cccccc",

        codeBg: "#1d1f21",
        headerBg: "#2d2f31",
        copyBtnBg: "#2d2f31",
        copyBtnText: "#cccccc",
    },

    // Light theme
    light: {
        comment: "#008000",
        string: "#a31515",
        keyword: "#0000ff",
        function: "#795e26",
        number: "#098658",
        boolean: "#0000ff",
        operator: "#000000",
        punctuation: "#000000",
        property: "#001080",
        plain: "#000000",

        codeBg: "#ffffff",
        headerBg: "#f3f3f3",
        copyBtnBg: "#e0e0e0",
        copyBtnText: "#000000",
    },
};
