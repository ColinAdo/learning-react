// Working with passing array and objects props to a component
function Hello(props) {
    return (
        <div>
            <h3>My nick names are: {props.nickNames}</h3>
        </div>
    );
}

export default Hello;