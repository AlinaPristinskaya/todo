import { createAction } from '@reduxjs/toolkit';


export const fetchPersonRequest=createAction('persons/fetchPersonRequest')
export const fetchPersonSuccess=createAction('persons/fetchPersonSuccess')
export const fetchPersonError=createAction('persons/fetchPersonError')