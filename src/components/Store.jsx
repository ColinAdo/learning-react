export default function Store() {
    const fruits = [
        {
            name: 'Apple',
            price: 10,
            numberInStore: 5
        },
        {
            name: 'Mango',
            price: 5,
            numberInStore: 10
        },
        {
            name: 'Pinapple',
            price: 8,
            numberInStore: 6
        },
        {
            name: 'Banana',
            price: 3,
            numberInStore: 20
        }
    ]
    return (
        <div>
            <ul>
                {fruits.map(fruit => (
                    <li key={fruit.name}>{fruit.name} ${fruit.price} Number In Store: { fruit.numberInStore }</li>
                ))}
            </ul>
        </div>
    );
}