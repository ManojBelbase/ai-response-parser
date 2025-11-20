import { AIResponseParser } from "ai-response-parser";   // ← THIS WORKS
// or: import { AIResponseParser } from "./../index";

const Example = () => {
    const testContent = `
**Welcome!** This is your local test.

### Features
- **Bold** and *italic*
- \`inline code\`
- [Google](https://google.com)

> Beautiful blockquotes

\`\`\`javascript
console.log("Local testing works perfectly!");
alert("Copied works too!");
\`\`\`
  `;

    return (
        <div style={{ padding: '40px', background: '#000', color: '#fff', minHeight: '100vh' }}>
            <h1 style={{ color: '#fff' }}>ai-response-parser Test</h1>
            <AIResponseParser content={testContent} darkMode />
        </div>
    );
};

export default Example;