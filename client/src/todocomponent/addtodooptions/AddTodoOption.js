import React,{useRef} from 'react'
import './AddTodoOption.css'

const AddTodoOption =(props)=>{

    const {clickHandler}=props
    const inputRef=useRef("")
    
    return(
        <div className='addtodoapp'>
        <input type="search" ref={inputRef} onKeyDown={event=>{if(event.key=='Enter'){clickHandler(inputRef.current.value)}}}/>
        <button onClick={()=>clickHandler(inputRef.current.value)}>Add</button>
        </div>
    )
};
export default AddTodoOption;