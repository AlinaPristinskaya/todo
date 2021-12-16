import { createAction } from '@reduxjs/toolkit';


const fetchPersonRequest=createAction('persons/fetchPersonRequest')
const fetchPersonSuccess=createAction('persons/fetchPersonSuccess')
const fetchPersonError=createAction('persons/fetchPersonError')

const addPersonRequest = createAction('persons/addPersonRequest');
const addPersonSuccess = createAction('persons/addPersonSuccess');
const addPersonError = createAction('persons/addPersonError');

const deletePersonRequest = createAction('persons/deletePersonRequest');
const deletePersonSuccess = createAction('persons/deletePersonSuccess');
const deletePersonError = createAction('persons/deletePersonError');

const editPersonRequest = createAction('persons/editPersonRequest');
const editPersonSuccess = createAction('persons/editPersonSuccess');
const editPersonError = createAction('persons/editPersonError');

const action={fetchPersonRequest,fetchPersonSuccess,fetchPersonError,
    addPersonRequest,addPersonSuccess,addPersonError,
    deletePersonRequest,deletePersonSuccess,deletePersonError,
    editPersonRequest,editPersonSuccess,editPersonError
}
export default action