import{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom'
import * as tasksShelfApi from '../../services/dbApi'
import { connect } from 'react-redux';
import operations from '../../redux/tasks/tasks-operations'

function Task({onDeleteTask}){
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
    <button type="button"  onClick={() => onDeleteTask(taskId)}>
      Удалить задачу
    </button>

    </>}
    </>)

}
const mapDispatchToProps = dispatch => ({
    onDeleteTask:id=>dispatch(operations.deleteTask(id)),
  });

export default connect(null,mapDispatchToProps)(Task)