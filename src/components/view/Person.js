import{useState,useEffect} from 'react';
import { connect } from 'react-redux';
import {useParams} from 'react-router-dom';
import * as tasksShelfApi from '../../services/dbApi';
import operations from '../../redux/persons/persons-operations';
import IconButton from '../IconButton/iconButton';
import Modal from '../Modal/Modal';
import FormPerson from './FormPerson';

function Person({onDeletePerson}){
    const {personId}=useParams();
    const[person,setPerson]=useState(null);
    const[showModal,setShowModal]=useState(false);
   

    useEffect(()=>{
        tasksShelfApi.fetchPersonById(personId).then(setPerson)
        
    },[personId])
    const toggleModal = () => {
      setShowModal(!showModal)
  };
    
   

    return(<><div>
      {person &&<><div>
      <h2>{person.fio}</h2>
      <p>{person.email}</p>
      <p>{person.tasks&& person.tasks.map(task=><li>{task.title}</li>)}</p>
      </div>
      </>}
      <hr/>
      <button type="button"  onClick={() => onDeletePerson(personId)}>
        Удалить сотрудника
      </button>
      <IconButton onClick={toggleModal} name={'Редактировать'}/></div>
      {showModal && (
          <Modal onClose={toggleModal}>
           <FormPerson name={'Редактировать данные сотрудника'}/>
          </Modal>)}
      
      </>)

};

const mapDispatchToProps = dispatch => ({
    onDeletePerson:id=>dispatch(operations.deletePerson(id)),
  });

export default connect(null,mapDispatchToProps)(Person)  