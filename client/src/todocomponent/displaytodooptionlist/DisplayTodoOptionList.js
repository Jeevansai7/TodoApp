import React from 'react'
import { updatedOnDateFormatter } from '../../utils/utils';
import './DisplayTodoOptionList.css';
import editIcon from '../../images/icon_edit.svg';
import deleteIcon from '../../images/icon_trash.svg';
import CircularProgress  from '@mui/material/CircularProgress';
import doneIcon from '../../images/icon_done.svg';
import revertDoneIcon from '../../images/icon_not_done.svg';
import { useSelector } from 'react-redux';

const DisplayTodoOptionsList =(props) =>{
    const {todoList,openDialogBox}=props

    const pending = useSelector((state)=>{
        return state.pending
    })
    
    return(
        <div className='listingTasks'>
            <h3>S/NO</h3>
            <h3>TASK</h3>
            <h3>UPDATED ON</h3>
            <h3>ACTIONS</h3>
            {(pending) ? <CircularProgress size={100} /> : (todoList.length > 0) ?
                (todoList.map((list, index) => (<>
                    <p>{index + 1} </p>
                    <p style={list.done ? { textDecorationLine: 'line-through' } : {}} onDoubleClick={() => { openDialogBox(list, 'edit') }}> {list.task} </p>
                    <p>{updatedOnDateFormatter(list.updated_on)}</p>
                    <p className='actionColumn'>
                        <img src={editIcon} onClick={() => { openDialogBox(list, 'edit') }}></img>
                        <img src={deleteIcon} onClick={() => { openDialogBox(list, 'delete') }}></img>
                        <img src={list.done ? revertDoneIcon : doneIcon} onClick={() => { openDialogBox(list, 'delete') }}></img>
                    </p></>
                ))) : ''}
        </div>
    )
};
export default DisplayTodoOptionsList;