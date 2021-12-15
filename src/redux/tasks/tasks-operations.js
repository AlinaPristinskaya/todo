import tasksActions from './tasks-actions';
import * as tasksApi from '../../services/dbApi';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'

 const fetchTasks=()=>async dispatch=>{
    dispatch(tasksActions.fetchTaskRequest());
    try{
        const tasks=await tasksApi.fetchTasks();
        dispatch(tasksActions.fetchTaskSuccess(tasks));

    }catch(error){
        dispatch(tasksActions.fetchTaskError(error))

    }
}

const addTask= ({title,description}) =>async dispatch => {
  const task = {
    id: uuidv4(),
    title:title,
    description:description,
  };
  dispatch(tasksActions.addTaskRequest());
  axios
      .post('http://localhost:3002/tasks', task)
      .then(({ data }) => dispatch(tasksActions.addTaskSuccess(data)))
      .catch(error => dispatch(tasksActions.addTaskError(error)));
  };
  const deleteTask = TaskId => dispatch => {
    dispatch(tasksActions.deleteTaskRequest());
  
    axios
      .delete(`http://localhost:3002/tasks/${TaskId}`)
      .then(() => dispatch(tasksActions.deleteTaskSuccess(TaskId)))
      .catch(error => dispatch(tasksActions.deleteTaskError(error)));
  };


const operations={fetchTasks,addTask,deleteTask}
export default operations

  