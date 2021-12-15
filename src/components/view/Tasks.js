import { useEffect,useState} from "react";
import { Link} from "react-router-dom";
import taskop from '../../redux/tasks/tasks-operations';
import {useDispatch, useSelector} from 'react-redux'
//import FormAddTask from "./FormAddTask.js";
import selectors from '../../redux/tasks/tasks-selectors'
import IconButton from '../IconButton/iconButton';
import { ReactComponent as AddIcon } from '../../icons/add.svg';
import Modal from '../Modal/Modal'


export default function Tasks(){
    const[showModal,setShowModal]=useState(false);

  
    const toggleModal = () => {
      setShowModal(!showModal)
    };
    const dispatch=useDispatch();
    const tasks=useSelector(selectors.getTasks)

    useEffect(()=>{
        dispatch(taskop.fetchTasks())
        
    },[dispatch]);
    return (
         <>
    {tasks && (<ul>{tasks.map(task=><li><Link to={`/tasks/${task.id}`}>{task.title}</Link></li>)}</ul>)}
    <hr/> 
    <IconButton onClick={toggleModal} aria-label="Добавить todo">
    <AddIcon width="40" height="40" fill="#fff" />
  </IconButton>
  {showModal && (
          <Modal onClose={toggleModal}>
           
          </Modal>)}
    </>
    )

}