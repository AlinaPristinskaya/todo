import personsActions from './persons-actions';
import * as personsApi from '../../services/dbApi';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'

 const fetchPersons=()=>async dispatch=>{
    dispatch(personsActions.fetchPersonRequest());
    try{
        const tasks=await personsApi.fetchPersons();
        dispatch(personsActions.fetchPersonSuccess(tasks));

    }catch(error){
        dispatch(personsActions.fetchPersonError(error))

    }
}
const addPerson= ({fio,email}) =>async dispatch => {
    const person = {
      id: uuidv4(),
      fio:fio,
      email:email,
    };
    dispatch(personsActions.addPersonRequest());
    axios
        .post('http://localhost:3002/persons', person)
        .then(({ data }) => dispatch(personsActions.addPersonSuccess(data)))
        .catch(error => dispatch(personsActions.addPersonError(error)));
    };

    const deletePerson = PersonId => dispatch => {
        dispatch(personsActions.deletePersonRequest());
      
        axios
          .delete(`http://localhost:3002/persons/${PersonId}`)
          .then(() => dispatch(personsActions.deletePersonSuccess(PersonId)))
          .catch(error => dispatch(personsActions.deletePersonError(error)));
      };
    


const operations={fetchPersons,addPerson,deletePerson}
export default operations