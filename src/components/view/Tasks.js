import { useEffect,useState} from "react";
//import { Link} from "react-router-dom";
import taskop from '../../redux/tasks/tasks-operations';
import {useDispatch, useSelector} from 'react-redux'
import FormAddTask from "./FormAddTask.js";
import selectors from '../../redux/tasks/tasks-selectors'
import IconButton from '../IconButton/iconButton';
import { ReactComponent as AddIcon } from '../../icons/add.svg';
import Modal from '../Modal/Modal'
import s from './Tasks.scss'

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
         <><div className="parents">
    {tasks && (
    <table className={s.table}>
            <thead className={s.thead}>
              <tr>
                <th className={s.th}>Задача</th>
                <th className={s.th}>Описание</th>
                <th className={s.th}>Сотрудник</th>
              </tr>
            </thead>
            <tbody className={s.tbody}>
              {tasks.map(({title,description,id}) => (
                <tr key={id}>
                  <td className={s.td}>{title}</td>
                  <td className={s.td}>{description}</td>
                  <td className={s.td}>{id}</td>
                </tr>
              ))}
            </tbody>
          </table> )}
    <IconButton onClick={toggleModal} aria-label="Добавить todo">
    <AddIcon width="40" height="40" fill="#fff" />
  </IconButton></div>
  {showModal && (
          <Modal onClose={toggleModal}>
           <FormAddTask/>
          </Modal>)}
    </>
    )

}