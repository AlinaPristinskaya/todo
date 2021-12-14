import { createReducer ,combineReducers} from "@reduxjs/toolkit";
import * as  actions from './tasks-actions';


const entities=createReducer([],{
    [actions.fetchTaskSuccess]:(_,action)=>action.payload,
    [actions.addTaskSuccess]: (state, { payload }) => [...state, payload],
});
const isLoading=createReducer(false,{
    [actions.fetchTaskRequest]:()=>true,
    [actions.fetchTaskSuccess]:()=>false,
    [actions.fetchTaskError]:()=>false,
    [actions.addTaskRequest]: () => true,
  [actions.addTaskSuccess]: () => false,
  [actions.addTaskError]: () => false,
})
const error=createReducer(null,{
    [actions.fetchTaskError]:(_,action)=>action.payload,
    [actions.fetchTaskRequest]:()=>null,
})

export default combineReducers({
    entities,
    isLoading,
    error
})