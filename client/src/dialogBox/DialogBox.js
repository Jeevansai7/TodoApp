import React, { useEffect,useRef } from 'react';
import {Button} from '@mui/base/Button'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import './DialogBox.css'
import { Switch } from '@mui/material';
import { useDispatch } from 'react-redux';
import { deleteRecordById, editRecordById } from '../store/action';

const DialogBox = (props) => {
    const { open,setOpen,rowData,fetchTodoData} = props;

    const dispatch = useDispatch()

    const inputRef=useRef('')
    const acceptButtonAction = () => {
        if (inputRef.current.value) {
            setOpen(false)
            if (rowData.type == 'delete') {
                dispatch(deleteRecordById(rowData.data.id, fetchTodoData))
            } else if (rowData.type == 'edit') {
                dispatch(editRecordById(rowData.data.id, inputRef.current.value, fetchTodoData))
            }
        }
    }
    const cancelButtonAction=()=>{
        setOpen(false)
    }

    return (
            <Dialog
                open={open}
                className="DialogContainer"
            >
                <DialogTitle id="draggable-dialog-title" className="DialogTitle">
                    <span>{(rowData.type=='delete') ? 'Are you Sure you want to delete ?' :'Please Enter the task'}</span>
                   {/* <img src={icon_close} onClick={handleClose} className="startRunCloseIcon" alt="iconclose"></img> */}
                </DialogTitle>
                <DialogContent className="DialogContent">
                  <textarea ref={inputRef} defaultValue={rowData ? rowData.data.task:""} readOnly={(rowData && rowData.type=='delete')?true:false}/> 
                </DialogContent>
                <DialogActions className="DialogActions">
                         <Button  color="primary" onClick={acceptButtonAction}>
                         Ok
                        </Button> 
                           <Button color="primary" onClick={cancelButtonAction}>
                           Cancel
                            </Button>
                    </DialogActions>
            </Dialog>
    )
}
export default DialogBox;