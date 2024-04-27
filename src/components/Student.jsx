export default function Student({name, marks}) {
    return (
        // Using skeleton div
        <> 
            {marks > 350 ? <li><h2>{name} {marks} marks</h2></li> : ""}
        </>
    );
}