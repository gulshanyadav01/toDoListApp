import React , { useState } from "react"
import ToDoList from './ToDoList'

import './index.css'


const App = () => {


  const [inputList,setInputList] = useState();
  const [items,setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);


  };
  const listOfItem = () => {
    
    setItems((oldItems) => {
      return [...oldItems,inputList];
    })

    setInputList("");


  }
  
  return(
    <>
    <div className="main_div">
    <div className="center_div">
    <br/>
      <h1 className="heading">ToDo List</h1>
      <br/>
      <input type="text" 
      placeholder="add a Items"
      onChange={itemEvent}
      />
      
      <button onClick={listOfItem}> + </button>
    <br/>
    <ol>
      
      {/* <li>{inputList}</i> */}

      {items.map( (itemVal) => {
       return <ToDoList
         text={itemVal}
       />;
      } )}

    </ol>

    

    </div>
    </div>
    </>
  )

}

export default App;