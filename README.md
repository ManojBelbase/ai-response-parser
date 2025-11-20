# `ai-response-parser` — The Beautiful Grok-Style AI Message Renderer

Zero dependencies • Full Markdown • Custom colors • React 17-19

```bash
npm install ai-response-parser
```

```bash
yarn add ai-response-parser
```

```bash
pnpm add ai-response-parser
```

## Why You'll Love It

- Looks exactly like **Grok / Claude / ChatGPT**
- Perfect code blocks with **Copy** button (Copied! feedback)
- Full markdown support: **bold**, *italic*, `inline code`, links, headings, blockquotes, lists
- Super lightweight — **no marked, no Prism, no heavy deps**
- Fully customizable colors
- Works with **Next.js, Vite, CRA, Remix, Astro**

## Installation

```bash
npm install ai-response-parser
```

## Usage

```tsx
import AIResponseParser from 'ai-response-parser';

function ChatMessage({ content }: { content: string }) {
  return (
    <AIResponseParser 
      content={content}
      darkMode={true}
      colors={{
        copyButtonBg: "#10b981",     // Grok green
        copyButtonHover: "#059669",
        linkColor: "#60a5fa",
        headingColor: "#fbbf24",
      }}
    />
  );
}
```

## Props

| Prop         | Type                        | Default       | Description                         |
|--------------|-----------------------------|---------------|-------------------------------------|
| `content`    | `string`                    | Required      | AI response (markdown)              |
| `darkMode`   | `boolean`                   | `true`        | Dark / light mode                   |
| `colors`     | `Partial<ColorTheme>`       | Built-in      | Customize everything                |
| `className`  | `string`                    | `''`          | Extra CSS classes                   |

### ColorTheme (All customizable!)

```ts
{
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
}
```

## Example

```tsx
<AIResponseParser
  content={`
**Hello!** I'm your AI assistant.

### Features
- **Bold** and *italic*
- \`console.log('Hello')\`
- [Google](https://google.com)

> Beautiful blockquotes

\`\`\`javascript
console.log("This works perfectly!");
alert("Copied button too!");
\`\`\`
  `}
  darkMode
  colors={{
    copyButtonBg: "#8b5cf6",   // Claude purple
    linkColor: "#c4b5fd"
  }}
/>
```

## CDN (No install needed!)

```html
<script type="module">
  import AIResponseParser from 'https://cdn.jsdelivr.net/npm/ai-response-parser/dist/index.js';
  
  const root = ReactDOM.createRoot(document.getElementById('app'));
  root.render(React.createElement(AIResponseParser, {
    content: "**Hello from CDN!** ```js\nconsole.log('Works!')\n```",
    darkMode: true
  }));
</script>
```

## Made with ❤️ by Manoj Blebase
