import { useEffect,useState} from "react";
import { Link} from "react-router-dom";
import personsOperations from '../../redux/persons/persons-operations'
import {useDispatch, useSelector} from 'react-redux'
import selectorsPerson from '../../redux/persons/persons-selectors'
import selectorsTasks from '../../redux/tasks/tasks-selectors'
import IconButton from '../IconButton/iconButton';
import Modal from '../Modal/Modal'
import FormPerson from "./FormPerson";
import './Persons.scss';

export default function Persons(){
  const[showModal,setShowModal]=useState(false);
  const dispatch=useDispatch();

  const persons=useSelector(selectorsPerson.getPersons)
  const tasks=useSelector(selectorsTasks.getTasks)
    
  const taskTitle=(personId)=>{
     const titles=tasks.filter(task=>task.personId===personId)
     return titles.map(dd=>(<ul><li>{dd.title}</li></ul>))

   }

  const toggleModal = () => {
      setShowModal(!showModal)
  };

  useEffect(()=>{
        dispatch(personsOperations.fetchPersons())
  },[dispatch]);
    
  return (<>    
    <div ><div>
     <table className='table'>
            <thead className='thead'>
              <tr>
                <th className='th'>Сотрудник</th>
                <th className='th'>Email</th>
                <th className='th'>Задачи</th>
              </tr>
            </thead>
            <tbody className='tbody'>
              {persons.map(({fio,id,email}) => (
                <tr key={id}>
                  <td className='td'>{ <Link to={`/persons/${id}`}>{fio}</Link>}</td>
                  <td className='td'>{email}</td>
                  <td className='td'>{tasks?taskTitle(id):'tut zadachi'}</td>
                </tr>
              ))}
            </tbody>
          </table></div>
    
    <IconButton onClick={toggleModal} name={'Добавить сотрудника'}/>
    </div>
  {showModal && (
          <Modal onClose={toggleModal}>
           <FormPerson name={'Добавить сотрудника'}/>
          </Modal>)}
    </>)

}




