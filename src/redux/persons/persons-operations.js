import * as personsActions from './persons-actions';
import * as personsApi from '../../services/dbApi';


 const fetchPersons=()=>async dispatch=>{
    dispatch(personsActions.fetchPersonRequest());
    try{
        const tasks=await personsApi.fetchPersons();
        dispatch(personsActions.fetchPersonSuccess(tasks));

    }catch(error){
        dispatch(personsActions.fetchPersonError(error))

    }
}
const operations={fetchPersons}
export default operations