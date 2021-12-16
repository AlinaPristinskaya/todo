
import {useState} from 'react';
import { connect } from 'react-redux';
import  operations from '../../redux/tasks/tasks-operations';
//import selectors from '../../redux/tasks/tasks-selectors';
import {useSelector} from 'react-redux';
import selectors from '../../redux/persons/persons-selectors';
//import personsOperations from '../../redux/persons/persons-operations'

function FormAddTask({onSubmit}){
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
    console.log(personId.id)
    setPersonId(personId.id)       
  }
    

  
  const handelSubmit=e=>{
    e.preventDefault();
    onSubmit({title,description,personId})
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
    <h3>Добавить задачу</h3>
      <form onSubmit={handelSubmit}>
      <div >
       <div> <label > Название задачи </label></div>
        <input 
             onChange={handelChangeTitle}
              value={title}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
        /></div>
        <div>

       <label > Описание задачи </label>
       <input 
             onChange={handelChangeDescription}
              value={description}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
        /></div>
         {persons &&   <select
            defaultValue={'Выбрать сотрудника'}
            name="Selected"
            onChange={handelChangePerson}>{personsArr.map(person=>(      
    
              <option selected={person}>{person}</option>))
           
           } </select>
               
          }
       <button type="submit">Добавить</button>
     </form></div>

</>
);}
  
  const mapDispatchToProps = dispatch => ({
    onSubmit:({title,description,personId})=>dispatch(operations.addTask({title,description,personId})),
  });
 
  export default connect(null, mapDispatchToProps)(FormAddTask); 