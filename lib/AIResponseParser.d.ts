import { themes } from "./themes";
interface Props {
    content: string;
    themeName?: keyof typeof themes;
    textColor?: string;
    className?: string;
}
export declare const AIResponseParser: React.FC<Props>;
export {};
