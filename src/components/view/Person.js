import{useState,useEffect} from 'react';
import { connect } from 'react-redux';
import {useParams} from 'react-router-dom';
import * as tasksShelfApi from '../../services/dbApi';
import operations from '../../redux/persons/persons-operations';

function Person({onDeletePerson}){
    const {personId}=useParams();
    const[person,setPerson]=useState(null);

    useEffect(()=>{
        tasksShelfApi.fetchPersonById(personId).then(setPerson)
        
    },[personId])

    return(<>
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
    </>)

}

const mapDispatchToProps = dispatch => ({
    onDeletePerson:id=>dispatch(operations.deletePerson(id)),
  });

export default connect(null,mapDispatchToProps)(Person)  