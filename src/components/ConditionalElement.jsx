// Element variable => is a variable that allow you to store HTML elements, 
// It help you to avoid two return statements.

export default function ConditionalComponent() {
    // Delcaring element variable
    let message;
    const display = true;

    if (display) { 
        message = <h2>I love coding</h2>;
    } else {
        message = <h2>I love soccer</h2>;
    }
    return message;

    
}