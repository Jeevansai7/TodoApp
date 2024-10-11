import React from 'react'
import { updatedOnDateFormatter } from '../../utils/utils';
import './DisplayTodoOptionList.css';
import editIcon from '../../images/icon_edit.svg';
import deleteIcon from '../../images/icon_trash.svg';
const DisplayTodoOptionsList =(props) =>{
    const {todoList,openDialogBox}=props
    
    return(
        <div className='listingTasks'>
            <h3>S/NO</h3>
            <h3>TASK</h3>
            <h3>UPDATED ON</h3>
            <h3>ACTIONS</h3>
       {(todoList.length>0)?
       (todoList.map((list,index)=>(<>
            <p>{index+1} </p>
            <p onDoubleClick={()=>{openDialogBox(list,'edit')}}> {list.task} </p> 
            <p>{updatedOnDateFormatter(list.updated_on)}</p>
            <p className='actionColumn'>
                <img src={editIcon} onClick={()=>{openDialogBox(list,'edit')}}></img>
                <img src={deleteIcon} onClick={()=>{openDialogBox(list,'delete')}}></img>
            </p></>
    )))
       :'no items to display'}
        </div>
    )
};
export default DisplayTodoOptionsList;