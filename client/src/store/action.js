import {FETCH_DATA_PENDING,FETCH_DATA_SUCCESS,FETCH_DATA_ERROR,CHANGES_IN_RECORDS_PENDING, CHANGES_IN_RECORDS_SUCCESS, CHANGES_IN_RECORDS_ERROR} from './action_types'
import { getData } from '../services/getDataService';
import axios from 'axios';
import { deleteRecord } from '../services/deleteRecordService';
import { editRecord } from '../services/editRecordService';
import { addRecordService } from '../services/addRecordService';

export const fetchData=()=>{
    return async dispatch =>{
        try{
            dispatch (serviceActionPending(FETCH_DATA_PENDING));
            let response = await getData(instance);
            if(response){
                dispatch(serviceActionSuccess(FETCH_DATA_SUCCESS,response));
            }else{
                dispatch(serviceActionError(FETCH_DATA_ERROR,"Unknown error"));
            }
        } 
        catch(e){
            console.error(e);
            dispatch(serviceActionError(FETCH_DATA_ERROR,"Unknown error"));
        }
    }

}

export const deleteRecordById = (id,fetchTodoData) => {
    return async dispatch => {
        try {
            dispatch(serviceActionPending(CHANGES_IN_RECORDS_PENDING));
            const response = await deleteRecord(instance, id);
            await fetchTodoData();
            if (response) {
                dispatch(serviceActionSuccess(CHANGES_IN_RECORDS_SUCCESS));
            } else {
                dispatch(serviceActionError(CHANGES_IN_RECORDS_ERROR, "Unknown error"));
            }
        }
        catch (e) {
            console.error(e);
            dispatch(serviceActionError(CHANGES_IN_RECORDS_ERROR, "Unknown error"));
        }
    }

}

export const editRecordById = (id,task,fetchTodoData) => {
    return async dispatch => {
        try {
            dispatch(serviceActionPending(CHANGES_IN_RECORDS_PENDING));
            const response = await editRecord(instance, id,task);
            await fetchTodoData();
            if (response) {
                dispatch(serviceActionSuccess(CHANGES_IN_RECORDS_SUCCESS));
            } else {
                dispatch(serviceActionError(CHANGES_IN_RECORDS_ERROR, "Unknown error"));
            }
        }
        catch (e) {
            console.error(e);
            dispatch(serviceActionError(CHANGES_IN_RECORDS_ERROR, "Unknown error"));
        }
    }

}

export const addRecord = (task,fetchTodoData) => {
    return async dispatch => {
        try {
            dispatch(serviceActionPending(CHANGES_IN_RECORDS_PENDING));
            const response = await addRecordService(instance,task);
            await fetchTodoData();
            if (response) {
                dispatch(serviceActionSuccess(CHANGES_IN_RECORDS_SUCCESS));
            } else {
                dispatch(serviceActionError(CHANGES_IN_RECORDS_ERROR, "Unknown error"));
            }
        }
        catch (e) {
            console.error(e);
            dispatch(serviceActionError(CHANGES_IN_RECORDS_ERROR, "Unknown error"));
        }
    }

}

function serviceActionPending(type) {
    return {
        type: type
    }
}

function serviceActionSuccess(type, data) {
    return {
        type: type,
        data: data
    }
}

function serviceActionError(type, error) {
    return {
        type: type,
        error: error
    }
}

const instance = axios.create({
    "baseURL":'https://todoappserver-ei5w.onrender.com/',
    "headers":{
        "Content-Type":'application/json'
    }
})

