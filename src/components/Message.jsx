export default function Message() {

    function clickMe() {
        console.log('Button Clicked');
    }
    return (
        <div>
            <button onClick={clickMe}>Click Me</button>
        </div>
    )
}