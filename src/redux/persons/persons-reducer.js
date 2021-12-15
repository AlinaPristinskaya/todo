
import { createReducer ,combineReducers} from "@reduxjs/toolkit";
import actions from './persons-actions';


const item=createReducer([],{
    [actions.fetchPersonSuccess]:(_,action)=>action.payload,
    [actions.addPersonSuccess]: (state, { payload }) => [...state, payload],
    [actions.deletePersonSuccess]:(state,{payload})=>state.filter(({ id }) => id !== payload),
});
const isLoading=createReducer(false,{
    [actions.fetchPersonRequest]:()=>true,
    [actions.fetchPersonSuccess]:()=>false,
    [actions.fetchPersonError]:()=>false,
    [actions.addPersonSuccess]: () => false,
    [actions.addPersonError]: () => false,
    [actions.deletePersonRequest]: () => true,
  [actions.deletePersonSuccess]: () => false,
  [actions.deletePersonError]: () => false,
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