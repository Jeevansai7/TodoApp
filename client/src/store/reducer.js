import { CHANGES_IN_RECORDS_ERROR, CHANGES_IN_RECORDS_PENDING, CHANGES_IN_RECORDS_SUCCESS,FETCH_DATA_ERROR, FETCH_DATA_PENDING, FETCH_DATA_SUCCESS } from "./action_types";

const initialState = {
   pending:false,
   todoData:[],
}


export default function TodoReducer (state=initialState,action){
    switch(action.type){
        case FETCH_DATA_PENDING:
            return Object.assign({},state,{
                pending:true,
            });
        case FETCH_DATA_SUCCESS:
            return Object.assign({},state,{
                pending:false,
                todoData:action.data
            });
        case FETCH_DATA_ERROR:
            return Object.assign({},state,{
                pending:false,
                todoData:[]
            });
        case CHANGES_IN_RECORDS_PENDING:
            return Object.assign({},state,{
                pending:true,
            });
        case CHANGES_IN_RECORDS_SUCCESS:
            return Object.assign({},state,{
                pending:false,
            });
        case CHANGES_IN_RECORDS_ERROR:
            return Object.assign({},state,{
                pending:false,
            });
        default:
            return state;
    }
}