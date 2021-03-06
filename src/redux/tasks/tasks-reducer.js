import { createReducer ,combineReducers} from "@reduxjs/toolkit";
import actions from './tasks-actions';


const entities=createReducer([],{
    [actions.fetchTaskSuccess]:(_,action)=>action.payload,
    [actions.addTaskSuccess]: (state, { payload }) => [...state, payload],
    [actions.deleteTaskSuccess]:(state,{payload})=>state.filter(({ id }) => id !== payload),
    [actions.editTaskSuccess]: (state, { payload }) =>
    state.map(task => (task.id === payload.id ? payload : task)),
});
const isLoading=createReducer(false,{
    [actions.fetchTaskRequest]:()=>true,
    [actions.fetchTaskSuccess]:()=>false,
    [actions.fetchTaskError]:()=>false,
    [actions.addTaskRequest]: () => true,
  [actions.addTaskSuccess]: () => false,
  [actions.addTaskError]: () => false,
  [actions.deleteTaskRequest]: () => true,
  [actions.deleteTaskSuccess]: () => false,
  [actions.deleteTaskError]: () => false,
  [actions.editTaskRequest]: () => true,
  [actions.editTaskSuccess]: () => false,
  [actions.editTaskError]: () => false,
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