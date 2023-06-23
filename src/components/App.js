import React from "react";
import Todo from "./Todo";
import Count from "./Count";
import Expense from "./Expense";
import Memo from "./Memo";

const App = ()=>{
    return(
        <div id='main'>
            <h1>React.useMemo</h1>
            <Todo />
            <Count />
            <Expense />
            <Memo />
        </div>
    )
}

export default App;