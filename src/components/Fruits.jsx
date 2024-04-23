export default function Fruits() {
    const fruits = ['Mango', 'Orange', 'Banana', 'Apple'];
    return (
        <ul>
            <div>
                {fruits.map(fruit => (
                    <li key={fruit}>{fruit}</li>
                ))}
            </div>
        </ul>
    );
}