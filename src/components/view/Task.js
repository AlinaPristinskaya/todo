import{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom'
import * as tasksShelfApi from '../../services/dbApi'
import { connect } from 'react-redux';
import operations from '../../redux/tasks/tasks-operations'
import IconButton from '../IconButton/iconButton';
import Modal from '../Modal/Modal';
import FormTask from './FormTask';
function Task({onDeleteTask}){
    const {taskId}=useParams();
    const[task,setTask]=useState(null);
    const[showModal,setShowModal]=useState(false);
    

    useEffect(()=>{
        tasksShelfApi.fetchTaskById(taskId).then(setTask)

    },[taskId])

    const toggleModal = () => {
      setShowModal(!showModal)
  };
    return(<>
    {task && (<div>
    <h2>{task.title}</h2>
    <p>{task.description}</p>
    
    <button type="button"  onClick={() => onDeleteTask(taskId)}>
      Удалить задачу
    </button>
    <IconButton onClick={toggleModal} name={'Редактировать'}/>
    </div>)

    }
    {showModal && (
          <Modal onClose={toggleModal}>
           <FormTask name={'Редактировать задачу'}/>
          </Modal>)}
    </>)

}
const mapDispatchToProps = dispatch => ({
    onDeleteTask:id=>dispatch(operations.deleteTask(id)),
  });

export default connect(null,mapDispatchToProps)(Task)