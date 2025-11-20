import { AIResponseParser } from '../index';

const Example = () => {
    const grokStyleResponse = `
**Hello!** I'm your AI assistant — built with ❤️ using **ai-response-parser**.

### Today's Features (2025 Edition)

- **Bold** and *italic* text
- \`inline code\` like \`console.log("hi")\`
- [GitHub](https://github.com) · [Google](https://google.com)
- Beautiful blockquotes

> "The best code is no code at all... but when you need it, make it beautiful."  
> — Every senior dev ever

### Example: Factorial in JavaScript (Recursive + Iterative)

\`\`\`javascript
//Recursive factorial
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

// Iterative version (faster for large n)
function factorialIterative(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
}

const num = 5;
console.log(\`Factorial of \${num} is \${factorial(num)}\`); 
// Output: Factorial of 5 is 120
\`\`\`

### Why This Renderer Is Perfect
1. **Zero dependencies** — faster than marked + Prism
2. **Full customization** — change colors anytime
3. **Copy button** with **Copied!** feedback
4. **Perfect for dark/light mode**
5. **Made by YOU** — you own 100% of the code

Ready to publish your package? Run:
\`\`\`bash
npm publish --access public
\`\`\`

You're now the creator of one of the **best AI message renderers in the world**.

Keep building. The future is yours. 🚀
  `;

    return (
        <div style={{ padding: '40px', background: '#000', minHeight: '100vh', color: '#fff' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>
                ai-response-parser — Live Demo
            </h1>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <AIResponseParser
                    content={grokStyleResponse}
                    darkMode={true}
                    colors={{



                    }}
                />
            </div>
        </div>
    );
};

export default Example;