🧠 ai-response-parser
A React component to render AI responses beautifully, including Markdown and syntax-highlighted code blocks, with dark mode and customizable themes. Perfect for AI chat UIs, coding tutorials, and documentation! 🚀
✨ Features

* 📝 Render AI-generated text and code blocks in one component.

* 💻 Syntax highlighting for JavaScript, Python, TypeScript, and more.

* 🌙 Supports dark and light modes.

* 🎨 Choose from built-in themes: vscode, monokai, dracula, github, oneDark.

* 🎨 Fully customizable colors using the colors prop.

* 📄 Markdown support for bold, italic, lists, links, and headers.

* ⚡ Easy integration into any React project.

📦 Installation

```
npm install ai-response-parser
# or
yarn add ai-response-parser
```

🚀 Basic Usage

```
import React from 'react';
import { AIResponseParser } from 'ai-response-parser';

const latestResponse = `
Here are some top programming languages:

* **Python** 🐍 - Great for AI/ML and scripting.
* **JavaScript** ✨ - Essential for web development.
* **Rust** ⚡ - Systems programming and high performance.

\`\`\`javascript
// Example code
function greet(name) {
  return \`Hello, \${name}!\`;
}
console.log(greet("World"));
\`\`\`
`;

const App = () => (
  <div style={{ padding: '40px', background: '#000', minHeight: '100vh', color: '#fff' }}>
    <h1>🧩 AI Response Parser Demo</h1>
    <AIResponseParser content={latestResponse} darkMode={true} themeName="oneDark" />
  </div>
);

export default App;
```

💡 Advanced Usage

```
import React from 'react';
import { AIResponseParser } from 'ai-response-parser';

const multiResponses = `
# AI Response Example 🤖

This response contains **multiple code blocks** and markdown formatting.

\`\`\`javascript
// Recursive factorial
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
\`\`\`

\`\`\`python
# Fibonacci in Python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)
\`\`\`

Integrate these examples into your **React**, **Next.js**, or **Node.js** projects.
`;

const App = () => (
  <div style={{ padding: '40px', minHeight: '100vh' }}>
    <AIResponseParser
      content={multiResponses}
      darkMode={false}
      themeName="vscode"
    />
  </div>
);

export default App;
```

🛠 Props
PropTypeDefaultDescriptioncontentstring—AI response text to parse (supports Markdown & code blocks).darkModebooleantrueEnable dark mode styling 🌙.colorsPartial<Theme>{}Override theme colors 🎨.classNamestring''Additional CSS class for the wrapper.themeName'vscode' | 'monokai' | 'dracula' | 'github' | 'oneDark''oneDark'Choose a built-in theme 🖌.
🎨 Built-in Themes

* vscode 💻

* monokai 🌙

* dracula 🧛‍♂️

* github 🐱

* oneDark 🌑

You can also provide custom colors using the colors prop.
💡 Examples
1️⃣ Rendering AI Advice

```
const aiAdvice = `
Focus on **Python** 🐍 for AI/ML projects.

\`\`\`python
import numpy as np

arr = np.array([1,2,3])
print(arr)
\`\`\`
`;

<AIResponseParser content={aiAdvice} darkMode={true} themeName="dracula" />
```

2️⃣ Rendering JavaScript Instructions

```
const jsInstructions = `
Sort an array in JavaScript:

\`\`\`javascript
const numbers = [5, 2, 9, 1];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1,2,5,9]
\`\`\`
`;

<AIResponseParser content={jsInstructions} darkMode={false} themeName="github" />
```

3️⃣ Multiple Code Blocks Example

```
const multiCode = `
\`\`\`javascript
console.log("Hello from JavaScript!");
\`\`\`

\`\`\`python
print("Hello from Python!")
\`\`\`
`;

<AIResponseParser content={multiCode} darkMode={true} themeName="monokai" />
```

💡 Tips & Tricks

* 🌙 Use darkMode={true} for night-friendly UIs.

* 🎨 Customize themes with themeName or colors for unique styles.

* ⚡ Works seamlessly with Next.js, React, or any React-based project.

* 🔥 Code blocks are automatically highlighted; no extra setup needed.

📸 Screenshots / Demo
 
Your AI responses look clean and readable!
 
📝 License
MIT © Manoj Belbase