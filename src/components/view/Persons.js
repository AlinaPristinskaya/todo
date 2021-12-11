import { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import * as tasksShelfApi from '../../services/dbApi'
//import Person from './Person';

export default function Persons(){
    
    const [persons,setPersons]=useState(null);

    useEffect(()=>{
        tasksShelfApi.fetchPersons().then(setPersons);
    },[]);
    
    return (<>
    {persons && (
    <ul>
    {persons.map(person=>(
    <li key={person.id}>
        <Link to={`/persons/${person.id}`}>{person.fio}</Link>
        </li>))}
</ul>)}<hr/>
<form>
    
<button>Добавить сотрудника</button>
</form>

   
    </>)

}