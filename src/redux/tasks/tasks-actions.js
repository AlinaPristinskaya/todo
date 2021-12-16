import { createAction } from '@reduxjs/toolkit';


const fetchTaskRequest=createAction('tasks/fetchTaskRequest')
const fetchTaskSuccess=createAction('tasks/fetchTaskSuccess')
const fetchTaskError=createAction('tasks/fetchTaskError')

const addTaskRequest = createAction('tasks/addTaskRequest');
const addTaskSuccess = createAction('tasks/addTaskSuccess');
const addTaskError = createAction('tasks/addTaskError');

const deleteTaskRequest = createAction('tasks/deleteTaskRequest');
const deleteTaskSuccess = createAction('tasks/deleteTaskSuccess');
const deleteTaskError = createAction('tasks/deleteTaskError');

const editTaskRequest = createAction('tasks/editTaskRequest');
const editTaskSuccess = createAction('tasks/editTaskSuccess');
const editTaskError = createAction('tasks/editTaskError');

const action={fetchTaskRequest,fetchTaskSuccess,fetchTaskError,
    addTaskRequest,addTaskSuccess,addTaskError,
    deleteTaskRequest,deleteTaskSuccess,deleteTaskError,
    editTaskRequest,editTaskSuccess,editTaskError
}
export default action