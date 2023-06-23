import React, {useState} from "react";

const Memo = ()=>{
    let [memos, setMemos] = useState([]);
    let [skill, setSkill] = useState('');

    return(
        <div>
            <h2>React.memo</h2>
            <input id="skill-input" type="text" onChange={(e)=>{setSkill(e.target.value)}}></input>
            <button onClick={()=>{setMemos([...memos, skill])}}>Add Skill</button>
            <br/>
            {
                memos &&
                <ul>
                    {
                        memos.map(memo=>(
                            <li>{memo}</li>
                        ))
                    }
                </ul>
            }
            <br/>
        </div>
    )
}

export default Memo;