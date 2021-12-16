import { useEffect,useState} from "react";
//import { Link} from "react-router-dom";
import personsOperations from '../../redux/persons/persons-operations'
import {useDispatch, useSelector} from 'react-redux'
import selectors from '../../redux/persons/persons-selectors'
import IconButton from '../IconButton/iconButton';
import { ReactComponent as AddIcon } from '../../icons/add.svg';
import Modal from '../Modal/Modal'
import FormAddPerson from "./FormAddPerson";
import s from './Persons.scss';

export default function Persons(){
    
    const dispatch=useDispatch();
    const persons=useSelector(selectors.getPersons)
    console.log(persons)

    const[showModal,setShowModal]=useState(false);

  
    const toggleModal = () => {
      setShowModal(!showModal)
    };

    useEffect(()=>{
        dispatch(personsOperations.fetchPersons())
    },[dispatch]);
    
    return (<>
    
    <div className={s.parents}><div className={s.div}>
     <table className={s.table}>
            <thead className={s.thead}>
              <tr>
                <th className={s.th}>Сотрудник</th>
                <th className={s.th}>Email</th>
                <th className={s.th}>Задачи</th>
              </tr>
            </thead>
            <tbody className={s.tbody}>
              {persons.map(({fio,id,email}) => (
                <tr key={id}>
                  <td className={s.td}>{fio}</td>
                  <td className={s.td}>{email}</td>
                  <td className={s.td}>{id}</td>
                </tr>
              ))}
            </tbody>
          </table></div>
    
    <IconButton onClick={toggleModal}>
    <AddIcon width="40" height="40" fill="#fff" />
  </IconButton></div>
  {showModal && (
          <Modal onClose={toggleModal}>
           <FormAddPerson/>
          </Modal>)}
          
          

   
    </>)

}




