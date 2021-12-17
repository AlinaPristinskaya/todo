
import {useState} from 'react';
import { connect } from 'react-redux';
import  operations from '../../redux/tasks/tasks-operations';
import {useSelector} from 'react-redux';
import selectors from '../../redux/persons/persons-selectors';


function FormTask({onSubmit,name,taskId,onSubmitEdit}){
  const [title,setTitle]=useState('');
  const [description,setDescrintion]=useState('');
  const [personId,setPersonId]=useState('');

  const persons=useSelector(selectors.getPersons) 

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
    const personId=persons.find(person=>person.fio===value)
    setPersonId(personId.id)       
  }
    

  
  const handelSubmit=e=>{
    e.preventDefault();
    if(taskId){
      onSubmitEdit(taskId,title,description,personId)
      reset()
    }
    else onSubmit({title,description,personId})
    reset()
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
              maxlength="255"
              required
              
        /></div>
        <div>

      <div> <label > Описание задачи </label></div>
       <input 
             onChange={handelChangeDescription}
              value={description}
              type="text"
              name="name"
              maxlength="255"
              required
                            
        /></div>
        <div> {persons &&   <select
            defaultValue={'Выбрать сотрудника'}
            name="Selected"
            onChange={handelChangePerson}>{personsArr.map(person=>(      
    
              <option selected={person}>{person}</option>))
           
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


  