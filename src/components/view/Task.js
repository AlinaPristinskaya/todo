import{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom'
import * as tasksShelfApi from '../../services/dbApi'


export default function Task(){
    const {taskId}=useParams();
    
    const[task,setTask]=useState(null);

    useEffect(()=>{
        tasksShelfApi.fetchTaskById(taskId).then(setTask)

    },[taskId])
    return(<>
    {task &&<><div>
    <h2>{task.title}</h2>
    <p>{task.description}</p>
    </div>
    

    </>}
    </>)

}