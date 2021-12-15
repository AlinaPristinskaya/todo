import * as tasksActions from './tasks-actions';
import * as tasksApi from '../../services/dbApi';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'

/* axios.defaults.baseURL = 'https://connections-api.herokuapp.com'; */
const fetchContacts = () => async dispatch => {
  dispatch(a.fetchContactsRequest());


 const fetchTasks=()=>async dispatch=>{
    dispatch(tasksActions.fetchTaskRequest());

    
    try{
        const tasks=await tasksApi.fetchTasks();
        dispatch(tasksActions.fetchTaskSuccess(tasks));

    }catch(error){
        dispatch(tasksActions.fetchTaskError(error))
       }}

const addTask = ({title,description}) =>async dispatch => {
    const task = {
      id:uuidv4(),
      title,
      description
    };
    console.log(task)
    dispatch(tasksActions.addTaskRequest());
    try {
      const data= await axios.post('/tasks',task);
      console.log(data)
       console.log( dispatch(tasksActions.addTaskSuccess(task)));
      } catch (error) {
        dispatch(tasksActions.addTaskError(error));
      }
    }

    /* axios
    .post('/tasks', task)
    .then(({ data }) => dispatch(tasksActions.addTaskSuccess(data)))
    .catch(error => tasksActions.addTaskError(error)); */

  
     /*     try {
      const data= await await axios.post('/tasks',task);
      console.log(data)
       console.log( dispatch(tasksActions.addTaskSuccess(task)));
      } catch (error) {
        dispatch(tasksActions.addTaskError(error));
      } */ 

  const operations={fetchTasks,addTask}

export default operations;
  