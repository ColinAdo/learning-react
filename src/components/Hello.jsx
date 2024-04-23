// Working with passing array and objects props to a component
function Hello({person}) {
    return (
        <div>
            {/* <h3>My nick names are: {nickNames}</h3> */}
            <h4>{person.name}</h4>
            <h4>{person.age}</h4>
            <h4>{person.phoneNumbers}</h4>
        </div>
    );
}

export default Hello;