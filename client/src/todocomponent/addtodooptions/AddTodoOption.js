import React,{useRef} from 'react'
import './AddTodoOption.css'

const AddTodoOption =(props)=>{

    const {clickHandler}=props
    const inputRef=useRef("")

    const onAdd=()=>{
        if(inputRef.current.value!=''){
        clickHandler(inputRef.current.value); 
        inputRef.current.value=''
        }
    }

    return(
        <div className='addtodoapp'>
        <input type="search" ref={inputRef} onKeyDown={event=>{if(event.key=='Enter'){onAdd()}}}/>
        <button onClick={()=>onAdd()}>Add</button>
        </div>
    )
};
export default AddTodoOption;