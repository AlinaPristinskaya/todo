import{useState} from 'react';
import {useParams} from 'react-router-dom'
import { connect } from 'react-redux';
import operations from '../../redux/tasks/tasks-operations'
import IconButton from '../IconButton/iconButton';
import Modal from '../Modal/Modal';
import FormTask from './FormTask';
import {useSelector} from 'react-redux'
import selectors from '../../redux/tasks/tasks-selectors';
import { Link} from "react-router-dom"


function Task({onDeleteTask}){
    const {taskId}=useParams();
    const[showModal,setShowModal]=useState(false);

    const tasks=useSelector(selectors.getTasks)
    const task= tasks.find(task=>task.id===taskId) 
  
    const toggleModal = () => {
    
      setShowModal(!showModal)
  };

      return(<><div>
    {task&& <div>
    <h2>{task.title}</h2>
    <p>{task.description}</p>
     </div>
     }
     <hr/>
    <button type="button"  onClick={() => onDeleteTask(taskId)} ><Link to='/tasks'>
    Удалить задачу
    </Link>      
    </button>
    <IconButton onClick={toggleModal} name={'Редактировать'}/></div>
   

    
    {showModal && (
          <Modal onClose={toggleModal}>
           <FormTask name={'Редактировать задачу'} task={task} onClose={toggleModal}/>
          </Modal>)}
    </>)

}
const mapDispatchToProps = dispatch => ({
    onDeleteTask:id=>dispatch(operations.deleteTask(id)),
  });

export default connect(null,mapDispatchToProps)(Task)