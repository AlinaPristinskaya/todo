import { useEffect,useState} from "react";
import { Link} from "react-router-dom";
import taskop from '../../redux/tasks/tasks-operations';
import {useDispatch, useSelector} from 'react-redux'
import FormTask from "./FormTask.js";
import selectors from '../../redux/tasks/tasks-selectors'
import selectorss from '../../redux/persons/persons-selectors'
import IconButton from '../IconButton/iconButton';
import Modal from '../Modal/Modal'
import './Tasks.scss'

export default function Tasks(){
    const[showModal,setShowModal]=useState(false);
    const dispatch=useDispatch();
    useEffect(()=>{
      dispatch(taskop.fetchTasks())
   },[dispatch]);

  
    const toggleModal = () => {
      setShowModal(!showModal)
    };
    
    const tasks=useSelector(selectors.getTasks)
    const persons=useSelector(selectorss.getPersons)

    const personFio=(personId)=>{
     const fio=persons.find(person=>person.id===personId)
     if(fio){
       return fio.fio
     }
     else return  'Исполнитель'

     }
     

   
    return (
         <><div >
           <div >
    
    <table className='table'>
            <thead className='thead'>
              <tr>
                <th className='th'>Задача</th>
                <th className='th'>Описание</th>
                <th className='th'>Сотрудник</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map(({title,description,personId,id}) => (
                <tr key={id}>
                  <td className='td'>{ <Link to={`/tasks/${id}`}>{title}</Link>}</td>
                  <td className='td'>{description}</td>
                  <td className='td'>{personFio(personId)}</td>
                </tr>
              ))}
            </tbody>
          </table> </div>
    <IconButton onClick={toggleModal} name={'Добавить задачу'}/>
    
  </div>
  {showModal && (
          <Modal onClose={toggleModal}>
           <FormTask name={'Добавить задачу'}/>
          </Modal>)}
    </>
    )

}