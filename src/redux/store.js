import { configureStore} from '@reduxjs/toolkit'
import tasksReducer from './tasks/tasks-reducer'
import personsReducer from './persons/persons-reducer';


const store=configureStore({
    reducer:{
        tasks:tasksReducer,
        persons:personsReducer,
    }
})

export default store;