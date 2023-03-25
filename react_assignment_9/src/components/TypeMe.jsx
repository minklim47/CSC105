import { useState } from "react"
import React from "react";
import { red } from "@mui/material/colors";

function TypeMe(){
    const [focus, setFocus] = useState(false);

    function handleFocus(){
        setFocus(true);

    }
    function handleBlur(){
        setFocus(false);
    }
    return(
        <div>
            <input type="text" onFocus={handleFocus} onBlur={handleBlur}/>
            {focus ? 
                (<></>) :
                (<p style={warningStyle}>Please type in here!</p>)
            }
        </div>
    )
}

const warningStyle = {
    color: "red"
};

export default TypeMe