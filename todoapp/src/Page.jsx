import React ,{ useState } from "react"
import ToDoListPage from "./ToDoListPage"





const Page = () => {

    const[item,setItem] = useState();
    const[itemList,setItemList] = useState( [] );


    const inputEvent = (event) => {
        setItem(event.target.value);
    }
    const onSubmit = () => {
        setItemList((oldItem) => {
           
            return [...oldItem,item];
            
        })
        
    }
    const deleteItem = (id) => {
        // console.log("delete");
        setItemList((oldItem) => {
            return oldItem.filter((arr,index) =>{
                return index!==id;

            })
        })
    }

    return(
        <>
        <div className="main_div">
            <div class="center_div">
            <h1 class="heading">To Do List</h1>
            <br/>
            <input
             type="text"
             placeholder="add a  item"
             value={item}
             onChange={inputEvent}
             />
             <button onClick={onSubmit}> + </button>

             <ol>
                 {itemList.map((itemVal,index) => {
                    return <ToDoListPage
                     key={index} 
                    id={index}
                    text={itemVal} 
                    onSelect={deleteItem}

                    />
                        
                    
                   
                     
                 })}
             </ol>


            

            </div>
        </div>
        </>
    )

}

export default Page;