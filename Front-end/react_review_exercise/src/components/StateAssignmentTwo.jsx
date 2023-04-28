import { useState } from "react"

function StateAssignmentTwo(){
    const [nums, setNum] = useState([])
    return(
        <section>
            <button onClick={()=> {
                const result = Math.floor(Math.random() * 10);
                setNum([...nums,result])
            }}
            >Click me!</button>
            <ul>
                {
                    nums.map((e,index)=>{
                        return <li key={index}>{e}</li>
                    })
                }
            </ul>
        </section>
    )
}

export default StateAssignmentTwo