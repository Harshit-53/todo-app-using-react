import React, { useState } from "react";
import todo from "../images/images.jpeg"
import "../App.css"
const Todo =()=>{
    const [inputData,setinputData] = useState("");
    const [items,setItems] = useState([]);
    const [toggleIcon,settoggleIcon] = useState(true);
    const [edit,setEdit] = useState(null)
    const addItem =()=>{
        if(!inputData){
            alert(`wtite somethig to note`);
        }
        else if(inputData && !toggleIcon){
            setItems(
                items.map((element)=>{
                    if(element.id===edit){
                        return{...element,name:inputData}
                    }
                    return element;
                })
            )
            settoggleIcon(true);
            setinputData("");
            setEdit(null)
        }
        else{
            const allinputData = { id: new Date().getTime().toString(),name:inputData }
            setItems([...items,allinputData]);
            setinputData("");
        }
    }

    const deleteItem=(index)=>{
        const updatedItem = items.filter((element)=>{
            return index !== element.id ;  
        })
        setItems(updatedItem)
    }
    const editItem = (id)=>{
        let newEditItem = items.find((element)=>{
            return element.id===id
        })
        settoggleIcon(false);
        setinputData(newEditItem.name);
        setEdit(id)
    }
    const removeAll=()=>{
        setItems([]);
    }
    return(
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src={todo} alt="todo"></img>
                        <figcaption>Add Your List Here</figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text" placeholder="Add Note" value={inputData} onChange={(e)=>{
                            setinputData(e.target.value)
                        }}>
                        </input>
                        {
                            toggleIcon ? <i className="fa fa-plus add-btn" title="Add" onClick={addItem}></i> :
                            <i className="far fa-edit add-btn" title="Update" onClick={addItem}></i>
                        }
                    </div>
                    <div className="showItems">
                        {
                            items.map((element)=>{
                                return(
                                    <div className="eachItem" key={element.id}>
                                        <h3>{element.name}</h3>
                                        <div className="toto-btn">
                                            <i className="far fa-edit add-btn" title="Edit" onClick={()=>editItem(element.id)}></i>
                                            <i className="far fa-trash-alt add-btn" title="Delete" onClick={()=>deleteItem(element.id)}></i>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}><span>Check List</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Todo;