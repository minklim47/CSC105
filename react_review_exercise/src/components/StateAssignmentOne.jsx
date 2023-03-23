import React, { useState } from "react";

function StateAssignmentOne(){
    const [count, setCount] = useState(0);

    return(
        <section>
            <button onClick={()=> {setCount(count + 1)
            }}>
                {count}
            </button>
        </section>

    )
}

export default StateAssignmentOne