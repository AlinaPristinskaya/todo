import { useEffect} from "react";
import { Link} from "react-router-dom";
import * as tasksOperations from '../../redux/tasks/tasks-operations';
import {useDispatch, useSelector} from 'react-redux'
import FormAddPerson from "./FormAddPerson";
import * as tasksSelectors from '../../redux/tasks/tasks-selectors'


export default function Tasks(){
    
    const dispatch=useDispatch();
    const tasks=useSelector(tasksSelectors.getTasks)

    useEffect(()=>{
        dispatch(tasksOperations.fetchTasks())
        
    },[dispatch]);
    return (<>
    {tasks && (<ul>{tasks.map(task=><li key={task.id}><Link to={`/tasks/${task.id}`}>{task.title}</Link></li>)}</ul>)}
    <hr/>
    <FormAddPerson/>
    </>)

}