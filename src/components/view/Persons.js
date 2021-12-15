import { useEffect,useState} from "react";
import { Link} from "react-router-dom";
import personsOperations from '../../redux/persons/persons-operations'
import {useDispatch, useSelector} from 'react-redux'
import selectors from '../../redux/persons/persons-selectors'
import IconButton from '../IconButton/iconButton';
import { ReactComponent as AddIcon } from '../../icons/add.svg';
import Modal from '../Modal/Modal'
import FormAddPerson from "./FormAddPerson";


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
    {persons && (<ul>{persons.map(person=><li><Link to={`/persons/${person.id}`}>{person.fio}</Link></li>)}</ul>)}
    <hr/>
    <IconButton onClick={toggleModal} aria-label="Добавить todo">
    <AddIcon width="40" height="40" fill="#fff" />
  </IconButton>
  {showModal && (
          <Modal onClose={toggleModal}>
           <FormAddPerson/>
          </Modal>)}
          
          

   
    </>)

}




