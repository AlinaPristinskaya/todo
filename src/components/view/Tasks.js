import { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import * as tasksShelfApi from '../../services/dbApi'


export default function Tasks(){
    
    const [tasks,setTasks]=useState(null);

    useEffect(()=>{
        tasksShelfApi.fetchTasks().then(setTasks);
    },[]);
    return (<>
    {tasks && tasks.map(task=><li key={task.id}><Link to={`/tasks/${task.id}`}>{task.title}</Link></li>)}
    </>)

}