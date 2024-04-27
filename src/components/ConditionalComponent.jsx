export default function ConditionalComponent() {
    const display = false;

    if (display) {
        return (
        <div>
            <h3>I love coding</h3>
        </div>
    );
    } else {
        return (
        <div>
            <h3>I love cooking</h3>
        </div>
    );
    }
    
}