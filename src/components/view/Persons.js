import { useEffect} from "react";
import { Link} from "react-router-dom";
import personsOperations from '../../redux/persons/persons-operations'
import {useDispatch, useSelector} from 'react-redux'
import * as personSelectors from '../../redux/persons/persons-selectors'
export default function Persons(){
    
    const dispatch=useDispatch();
    const persons=useSelector(personSelectors.getPersons)

    useEffect(()=>{
        dispatch(personsOperations.fetchPersons())
    },[dispatch]);
    
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