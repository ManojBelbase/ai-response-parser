import { AIResponseParser } from 'ai-response-parser';

const Example = () => {

    const latestRes = "Here are five of the top programming languages to learn in 2025, focusing on their relevance in modern software development and AI:\n\n*   **Python:** Still the king for data science, AI/ML, backend development, and scripting. Huge ecosystem and beginner-friendly.\n*   **JavaScript/TypeScript:** Essential for frontend web development (React, Angular, Vue), Node.js backends, and increasingly for mobile with React Native. TypeScript adds strong typing for large projects.\n*   **Go:** Ideal for cloud-native development, microservices, and high-performance networking. Known for its speed and concurrency features.\n*   **Rust:** Gaining popularity for systems programming, embedded systems, and performance-critical applications. Offers memory safety and concurrency without a garbage collector.\n*   **C#:** Strong choice for enterprise applications, game development (Unity), and Windows development. Part of the .NET ecosystem.\n\nWhich of these languages are you most interested in learning more about, or what type of project do you have in mind? I can provide more specific guidance and code examples!\n"


    const newRes = "I'm devGPT, and I specialize exclusively in software development and AI. I need more context to help you.  Please tell me what you need help with in JavaScript. For example:\n\n*   **What are you trying to build?** (e.g., a web app, a script, a Node.js server)\n*   **What specific problem are you facing?** (e.g., \"I need to sort an array,\" or \"I'm trying to fetch data from an API\")\n*   **Do you have any existing code?** If so, please share it.\n\nOnce I have a better understanding of your needs, I can provide code examples, best practices, and offer implementation help.\n"

    const response = "```javascript\nfunction factorial(n) {\n  // Base case: factorial of 0 is 1\n  if (n === 0) {\n    return 1;\n  } else if (n < 0) {\n    return \"Factorial is not defined for negative numbers\";\n  } else {\n    // Recursive case: n! = n * (n-1)!\n    return n * factorial(n - 1);\n  }\n}\n\n// Example usage:\nconst number = 5;\nconst result = factorial(number);\nconsole.log(`The factorial of ${number} is ${result}`); // Output: The factorial of 5 is 120\n\n// Iterative approach (alternative)\nfunction factorialIterative(n) {\n    if (n === 0) {\n        return 1;\n    } else if (n < 0) {\n        return \"Factorial is not defined for negative numbers\";\n    }\n    let result = 1;\n    for (let i = 1; i <= n; i++) {\n        result *= i;\n    }\n    return result;\n}\n\nconst iterativeResult = factorialIterative(number);\nconsole.log(`The factorial of ${number} (iterative) is ${iterativeResult}`); // Output: The factorial of 5 (iterative) is 120\n\n```\n\nThis code provides both a recursive and iterative approach to calculating the factorial of a number in JavaScript.  It also includes error handling for negative inputs.\n\nNow, how would you like to use this?  For example, do you want to:\n\n1.  Integrate this into a React component?\n2.  Calculate factorials on a server using Node.js?\n3.  Optimize it further for very large numbers (using BigInt)?\n4.  Use it inside a Next.js API route?\n\nLet me know, and I'll provide the best code and practices.\n ```javascript\nfunction factorial(n) {\n  // Base case: factorial of 0 is 1\n  if (n === 0) {\n    return 1;\n  } else if (n < 0) {\n    return \"Factorial is not defined for negative numbers\";\n  } else {\n    // Recursive case: n! = n * (n-1)!\n    return n * factorial(n - 1);\n  }\n}\n\n// Example usage:\nconst number = 5;\nconst result = factorial(number);\nconsole.log(`The factorial of ${number} is ${result}`); // Output: The factorial of 5 is 120\n\n// Iterative approach (alternative)\nfunction factorialIterative(n) {\n    if (n === 0) {\n        return 1;\n    } else if (n < 0) {\n        return \"Factorial is not defined for negative numbers\";\n    }\n    let result = 1;\n    for (let i = 1; i <= n; i++) {\n        result *= i;\n    }\n    return result;\n}\n\nconst iterativeResult = factorialIterative(number);\nconsole.log(`The factorial of ${number} (iterative) is ${iterativeResult}`); // Output: The factorial of 5 (iterative) is 120\n\n```"


    const response2 = "*   **JavaScript/TypeScript:** Essential for web development (front-end and back-end with Node.js), and increasingly for mobile and desktop apps.\n*   **Python:** Dominant in data science, machine learning, AI, and also widely used for scripting and backend development.\n*   **Java:** Still a major player in enterprise applications, Android development, and large-scale systems.\n*   **Go:** Gaining popularity for its speed, concurrency, and suitability for cloud-native applications and infrastructure.\n*   **Rust:** Known for its memory safety and performance, ideal for systems programming, embedded systems, and high-performance computing.\n\nDo you want to discuss any of these in more detail, or perhaps explore how they are used in specific projects?\n"







    return (
        <div style={{ padding: '40px', minHeight: '100vh' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>
                ai-response-parser — Live Demo
            </h1>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>

                <AIResponseParser
                    content={latestRes}
                    className='text-black'
                />
                <AIResponseParser
                    content={response}
                    textColor='#fff'
                />

            </div>
        </div>
    );
};

export default Example;