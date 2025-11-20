import { AIResponseParser } from "./../index";

const Example = () => {
    const testContent = `
**Welcome!** This is your local test.
### Features
- **Bold** and *italic*
- \`inline code\`
- [Google](https://google.com)
> Beautiful blockquotes
**hello there
\`\`\`javascript
console.log("Local testing works perfectly!");
setTimeout(() => alert("Copied works too!"), 1000);
\`\`\`
  `;
    return (
        <div>
            <AIResponseParser content={testContent} />
        </div>
    )
}

export default Example