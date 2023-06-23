import React, {useState} from "react";

const Count = ()=>{
    let [count, setCount] = useState(0);

    return(
        <div>
            <p id="incr-cnt">Count: {count}</p>
            <button id="incr-btn" onClick={()=>{setCount(count+1)}}>0</button>
            <br/>
            <br/>
        </div>
    )
}

export default Count;