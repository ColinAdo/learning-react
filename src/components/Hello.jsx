// Destructuring props allow us to write clean and precise code

// First way of destructuring props

// function Hello(props) {
//     const {name, message} = props;
//     return (
//         <div>
//             <h3>{message} {name}</h3>
//         </div>
//     );
// }

// Second way of destructuring props
function Hello({name, message}) {
    return (
        <div>
            <h3>{message} {name}</h3>
        </div>
    );
}

export default Hello;