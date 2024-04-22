// Props => Is a way of adding properties to components
/* The difference between props and parameters is that 
    props are passed to components while parameters are passed to regular functions.
*/

function Hello(props) {
    return (
        <div>
            <h3>{props.message} { props.name }</h3>
        </div>
    );
}

export default Hello;