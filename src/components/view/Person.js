import{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import * as tasksShelfApi from '../../services/dbApi';


export default function Person(){
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
    <button>Удалить сотрудника</button>
    <button>Изменить данные сотрудника</button>
    </>)

}