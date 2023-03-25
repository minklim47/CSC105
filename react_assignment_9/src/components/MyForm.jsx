import { useState } from "react";

function MyForm(){
    const[email,setEmail] = useState("")
    const[firstName,setFirstName] = useState("");
    const[lastName,setLastName] = useState("");
    const[number,setNumber] = useState("");
    const[password,setPassword] = useState("");


function handleSubmit(event){
    event.preventDefault();
}
function handleEmail(event){
    setEmail(event.target.value);
}
function handleFirstName(event){
    setFirstName(event.target.value);
}
function handleLastName(event){
    setLastName(event.target.value);
}
function handleNumber(event){
    setNumber(event.target.value);
}
function handlePassword(event){
    setPassword(event.target.value);
}

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Email address
                    <input type="email" value={email} onChange={handleEmail} required/>
                </label>
                <br/>
                <label>Name
                    <input type="text" value={firstName} onChange={handleFirstName} required/> 
                </label>
                <br/>
                <label>Lastname
                    <input type="text" value={lastName} onChange={handleLastName} required/>
                </label>
                <br/>
                <label>Phone Number
                    <input type="tel" value={number} onChange={handleNumber} pattern="[0-9]{10}" required/>
                </label>
                <br/>
                <label>Password
                    <input type="password" value={password} onChange={handlePassword} required/>
                </label>
                <br/>
                
                <input type="submit" value="Submit" required/>
            </form>
        </div>
    )
}

export default MyForm