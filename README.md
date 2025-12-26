# AI Response Parser - AI Response Utilities & React Component

AI Response Parser offers **both utility functions and a ready-to-use React component** to handle AI/LLM responses effortlessly — from parsing raw text to rendering beautifully formatted content in your UI.

Whether you need HTML output, plain text, or a drop-in React renderer, everything is included.

Super lightweight • Zero dependencies • 9 stunning themes for code block • Streaming ready • TypeScript supported

## Why Choose AI Response Parser?

Parse and format AI responses with beautiful Markdown rendering, code syntax highlighting, and responsive tables.

## Installation

```bash
npm install ai-response-parser
# or
yarn add ai-response-parser
# or
pnpm add ai-response-parser
```

## Features

- Full Markdown support (headings, bold, lists, tables, quotes, links)
- Syntax highlighting — no Prism/Highlight.js
- **9 gorgeous built-in themes**
- Streaming friendly (perfect for AI chat apps)
- Copy-to-clipboard functionality for code blocks
- **Safe HTML rendering** via `parseAiResponseToHtml` (escapes input, prevents XSS)
- **Clean plain text export** via `parseAiResponseToPlainText` (ideal for copy buttons or sharing)

---

## Basic Usage

```tsx
import { AIResponseParser } from 'ai-response-parser';

const aiMessage = `
Here's a factorial function in JavaScript:

\`\`\`javascript
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); // 120
\`\`\`

Want BigInt support or an iterative version too?
`;

export default function ChatBubble() {
  return (
    <div className="max-w-3xl mx-auto p-8>
      <AIResponseParser
        content={aiMessage}
        themeName="onedark"
        textColor="#e2e8f0"
      />
    </div>
  );
}
```

![alt text](image-1.png)

---

## Props

| Prop        | Type     | Default     | Description                                     |
| ----------- | -------- | ----------- | ----------------------------------------------- |
| `content`   | `string` | —           | Required — Your AI response (Markdown + code)   |
| `themeName` | `string` | `"onedark"` | Choose from 9 themes                            |
| `textColor` | `string` | —           | Text color outside code blocks (hex, rgb, etc.) |
| `className` | `string` | —           | Add Tailwind or custom classes                  |

---

## 9 Built-in Themes

| Theme           | Preview                         |
| --------------- | ------------------------------- |
| `onedark`       | Default dark — clean & modern   |
| `dracula`       | Purple power — bold & beautiful |
| `nord`          | Arctic, calm & minimalist       |
| `vscode`        | Classic VS Code style           |
| `monokai`       | Retro Sublime vibes             |
| `github`        | Clean light theme               |
| `solarizedDark` | Perfect contrast & eye comfort  |
| `tomorrowNight` | Soft glow — easy on the eyes    |
| `light`         | Pure bright mode                |

## Core Utilities

The package exports two main utilities for processing AI/LLM responses:

| Utility                        | Returns     | Description                                                                 |
|--------------------------------|-------------|-----------------------------------------------------------------------------|
| `parseAiResponseToHtml`        | `string`    | Converts raw AI response to **safe HTML** with proper Markdown rendering (headers, lists, tables, bold, etc.) |
| `parseAiResponseToPlainText`   | `string`    | Converts raw AI response to **clean plain text** — removes all Markdown symbols, perfect for copying or plain-text sharing |

### 1. parseAiResponseToHtml – Rich HTML Rendering

This function turns AI-generated Markdown into structured HTML, ideal for beautiful display in your UI.

```ts
import { parseAiResponseToHtml } from 'ai-response-parser';

const rawAiResponse = `
# Top 3 Languages in 2025

1. **Python** – AI/ML king
2. **Rust** – Fast & safe systems
3. **TypeScript** – Modern frontend
`;

const html = parseAiResponseToHtml(rawAiResponse);

// Output (safe HTML string)
console.log(html);
// <h1>Top 3 Languages in 2025</h1>
// <ol>
//   <li><strong>Python</strong> – AI/ML king</li>
//   <li><strong>Rust</strong> – Fast & safe systems</li>
//   <li><strong>TypeScript</strong> – Modern frontend</li>
// </ol>

Use case: Pass the result to dangerouslySetInnerHTML component for rich rendering.

```

### 2. parseAiResponseToPlainText – Clean Plain Text

This function strips all formatting and gives you readable, copy-paste-friendly plain text.

```tsx
import { parseAiResponseToPlainText } from 'ai-response-parser';

const rawAiResponse = `
# Top 3 Languages in 2025

1. **Python** – AI/ML king
2. **Rust** – Fast & safe systems
3. **TypeScript** – Modern frontend
`;

const plainText = parseAiResponseToPlainText(rawAiResponse);

// Output (clean plain text)
console.log(plainText);
// Top 3 Languages in 2025

// Python – AI/ML king
// Rust – Fast & safe systems
// TypeScript – Modern frontend


Use case: Add a "Copy as plain text" button, share in emails, or use in <textarea> for easy copying.


```
Both utilities handle common AI artifacts (like escaped characters \n, \*, etc.) and are designed to work seamlessly with streaming responses.



## More Examples

```tsx
<AIResponseParser
  content={response}
  themeName="nord"
  textColor="#d8dee9"
  className="prose prose-invert max-w-none"
/>
```

Easy to integrate with **JS/TS** **React**, **Next.js**, **Vite**, **Remix**, and more!

---

## License

**MIT** © [Manoj Belbase](https://github.com/manojbelbase)

Free for everyone — personal & commercial use!

---

**Love it? Star us on GitHub!**  
[https://github.com/ManojBelbase/ai-response-parser](https://github.com/ManojBelbase/ai-response-parser)

Issues · Feature requests · PRs very welcome

Made with love for the **React + AI** community by **Manoj Belbase**
