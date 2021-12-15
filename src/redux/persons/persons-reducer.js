
import { createReducer ,combineReducers} from "@reduxjs/toolkit";
import actions from './persons-actions';


const item=createReducer([],{
    [actions.fetchPersonSuccess]:(_,action)=>action.payload,
});
const isLoading=createReducer(false,{
    [actions.fetchPersonRequest]:()=>true,
    [actions.fetchPersonSuccess]:()=>false,
    [actions.fetchPersonError]:()=>false,
})
const error=createReducer(null,{
    [actions.fetchPersonError]:(_,action)=>action.payload,
    [actions.fetchPersonRequest]:()=>null,
})

export default combineReducers({
    item,
    isLoading,
    error
})