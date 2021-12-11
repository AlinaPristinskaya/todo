import * as tasksActions from './tasks-actions';
import * as tasksApi from '../../services/dbApi';


export const fetchTasks=()=>async dispatch=>{
    dispatch(tasksActions.fetchTaskRequest());
    try{
        const {data}=await tasksApi.fetchTasks();
        dispatch(tasksActions.fetchTaskSuccess(data));

    }catch(error){
        dispatch(tasksActions.fetchTaskError(error))

    }
}