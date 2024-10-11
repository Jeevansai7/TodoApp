import React,{useState,useEffect,useRef, useCallback} from 'react'
import AddTodoOption from '../addtodooptions/AddTodoOption';
import DisplayTodoOptionsList from '../displaytodooptionlist/DisplayTodoOptionList';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { addRecord, fetchData } from '../../store/action';
import DialogBox from '../../dialogBox/DialogBox';
import './TodoComponent.css'

const TodoComponent =()=>{
    const dispatch = useDispatch()
    const [open,setOpen]=useState(false)
    const dataToDialogBox=useRef('')

    const data = useSelector((state)=>{
        return state.todoData;
      })

    const fetchTodoData = useCallback(async() => {
        await dispatch(fetchData())
    },[])

    useEffect(()=>{
        fetchTodoData()
    },[])


    const openDialogBox=(data,type)=>{
        dataToDialogBox.current={'data':data,'type':type}
        setOpen(true)
    }
    const addHandler=(taskData)=>{
        if(taskData){
        dispatch(addRecord(taskData,fetchTodoData))
        }
    }

return(
    <div class='todoComponent'>
        <h1>Todo Application</h1>
        <AddTodoOption clickHandler={addHandler}/>
        <DisplayTodoOptionsList todoList={data ?data:[]} openDialogBox={openDialogBox} />
        <DialogBox rowData={dataToDialogBox.current} open={open} acceptTextOnButton={'Ok'} cancelTextOnButton={'Cancel'} setOpen={setOpen} fetchTodoData={fetchTodoData}/>
    </div>
)
};
export default TodoComponent