import { useEffect} from "react";
import { Link} from "react-router-dom";
import personsOperations from '../../redux/persons/persons-operations'
import {useDispatch, useSelector} from 'react-redux'
import selectors from '../../redux/persons/persons-selectors'


export default function Persons(){
    
    const dispatch=useDispatch();
    const persons=useSelector(selectors.getPersons)
    console.log(persons)

    useEffect(()=>{
        dispatch(personsOperations.fetchPersons())
    },[dispatch]);
    
    return (<>
    {persons && (<ul>{persons.map(person=><li><Link to={`/person/${person.id}`}>{person.fio}</Link></li>)}</ul>)}
    <hr/>
<form>
    
<button>Добавить сотрудника</button>
</form>

   
    </>)

}




