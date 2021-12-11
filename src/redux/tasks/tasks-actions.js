import { createAction } from '@reduxjs/toolkit';


export const fetchTaskRequest=createAction('tasks/fetchTaskRequest')
export const fetchTaskSuccess=createAction('tasks/fetchTaskSuccess')
export const fetchTaskError=createAction('tasks/fetchTaskError')