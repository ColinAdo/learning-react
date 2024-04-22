// JSX => stands for Javascript synatx, is way of combining javascript and html syntax
// JSX Role
// JSX can only return one content except they are wrapped in an enclosing tag i.e <div></div> 

// const name = "Jones Doe";

function greeting() {
    return 'How is react js??'
}

// function Hello() {
//     return <h2>Hello World, from components,  {greeting()}</h2>
// }

function Hello() {
    return (
        <div>
            <h2>Hello World, from components,  {greeting()}</h2>
            <h3>This is nice place to be!</h3>
        </div>
    );
}

export default Hello;