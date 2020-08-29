import React from "react"


const ToDoList = (props) => {

    const deleteItem  = () => {
        console.log("delete");
    }
    return ( 
        <>
        <div className="todo">
        <button style={{display:"inline"}}onClick={deleteItem}>-</button> 
       <li style={{display:"inline"}}>{props.text}</li> 

   

    </div>
    </>
    )
}

export default ToDoList;