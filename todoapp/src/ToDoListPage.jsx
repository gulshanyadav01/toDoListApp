import React from "react"

const ToDoListPage = (props) => {

  
    return (
        <>
        <i class="fa fa-times" aria-hidden="true" 
            onClick={() => {
                props.onSelect(props.id);
            }}
        />

        <li style={{display:"inline"}}>{props.text}</li>
        <br/>
        
    </>
    )



}

export default ToDoListPage;