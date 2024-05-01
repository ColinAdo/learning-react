import { useState } from "react";

export default function Form() {

    const [name, setName] = useState({ firstName: "", lastName: "" });
    
    function handleForm(e) {
        e.preventDefault();
        return console.log(name);
    }
    
    return (
        <div>
            {name.firstName} {name.firstName ? "-" : ""} {name.lastName}
            <form>
                <input onChange={(e) => setName({...name, firstName: e.target.value})} type="text" value={name.firstName}></input>
                <br />
                <input onChange={(e)=> setName({...name, lastName: e.target.value})} type="text" value={name.lastName}></input>
                <br />
                <button onClick={(e)=> handleForm(e)}>Add</button>
            </form>
        </div>
    );
}