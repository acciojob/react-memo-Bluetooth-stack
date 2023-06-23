import React, {useState} from "react";

const Count = ()=>{
    let [count, setCount] = useState(0);

    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={()=>{setCount(count+1)}}>+</button>
            <br/>
            <br/>
        </div>
    )
}

export default Count;