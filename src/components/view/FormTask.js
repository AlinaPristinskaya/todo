
import {useState} from 'react';
import { connect } from 'react-redux';
import  operations from '../../redux/tasks/tasks-operations';
import {useSelector} from 'react-redux';
import selectorsPersons from '../../redux/persons/persons-selectors';
//import selectorsTasks from '../../redux/tasks/tasks-selectors';


function FormTask({onSubmit,name,task,onSubmitEdit,onClose}){
  const [title,setTitle]=useState('');
  const [description,setDescrintion]=useState('');
  const [personId,setPersonId]=useState('');

  const persons=useSelector(selectorsPersons.getPersons) 
  
  const handelChangeTitle=(event)=>{
    const {value}=event.currentTarget;  
    setTitle(value);
  
  }
  const handelChangeDescription=(e)=>{
    const {value}=e.currentTarget;  
    setDescrintion(value);

  }
  const handelChangePerson=(e)=>{
    const {value}=e.currentTarget;
    if(value!=='Выберите сотрудника'){
    const personId=persons.find(person=>person.fio===value)
    setPersonId(personId.id) }      
  }
    

  
  const handelSubmit=e=>{
    e.preventDefault();
    if(task){
      onSubmitEdit(task.id,
        title?title:task.title,
        description?description:task.description,
        personId?personId:task.personId)
      reset() 
      onClose()
    }
    else onSubmit({title,description,personId})
    reset()
    onClose()
  }

   const reset=()=>{
      setTitle('');
      setDescrintion('');
      setPersonId('')
  }     
   
  const personName=persons.map(person=>person.fio)
  const personsArr = ['Выберите сотрудника', ...personName];
   
  
  return (<>
    
  
    <div>
      <h1>{name}</h1>
      <form onSubmit={handelSubmit}>
      <div >
       <div> <label > Название задачи </label></div>
        <input 
             onChange={handelChangeTitle}
              value={title}
              type="text"
              name="name"
              maxLength="255"
              required={!task}
              
        /></div>
        <div>

      <div> <label > Описание задачи </label></div>
       <input 
             onChange={handelChangeDescription}
              value={description}
              type="text"
              name="name"
              maxLength="255"
              required={!task}
                            
        /></div>
        <div> {persons &&   <select
            defaultValue={'Выберите сотрудника'}
            name="Select"
            onChange={handelChangePerson}>{personsArr.map(person=>(      
    
              <option key={person}>{person}</option>))
           
           } </select>
               
          }</div>
       <button type="submit">Добавить</button>
     </form></div>

</>
);}
  
  const mapDispatchToProps = dispatch => ({
    onSubmit:({title,description,personId})=>dispatch(operations.addTask({title,description,personId})),
    onSubmitEdit:(taskId,title,description,personId)=>dispatch(operations.editTask(taskId,title,description,personId))
  });
 
  export default connect(null, mapDispatchToProps)(FormTask); 


  