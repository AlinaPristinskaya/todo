
import {useState} from 'react';
import { connect } from 'react-redux';
import  operations from '../../redux/tasks/tasks-operations';

import { v4 as uuidv4 } from 'uuid';


function FormAddTask({onSubmit}){
  const [title,setTitle]=useState('');
  const [description,setDescrintion]=useState('');
  //const [personId,setPersonId]=useState('');

  const titleInputId=uuidv4();
  const descriptionInputId=uuidv4();

  const handelChangeTitle=(event)=>{
    const {value}=event.currentTarget;  
    setTitle(value);
  
  }

  const handelChangeDescription=(e)=>{
    const {value}=e.currentTarget;  
    setDescrintion(value);

  }
  
  
  const handelSubmit=e=>{
    //e.preventDefault();
    const data={title,description}
    if(data){
      onSubmit({title,description})
    }
    

  
    
   // reset()

    }
  

  /* const reset=()=>{
      setTitle('');
      setDescrintion('');
      
  } */

  
  return (
    <>
    <div>
    <h3>Добавить задачу</h3>
      <form onSubmit={handelSubmit}>
      <div >
       <div> <label htmlFor={titleInputId}> Название задачи </label></div>
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

       <label htmlFor={descriptionInputId}> Описание задачи </label>
       <input 
             onChange={handelChangeDescription}
              value={description}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
        /></div>
       {/*   <select
            defaultValue={'ФИО Сотрудника'}
            name="SelectedPersone"
            
            options={persons.map(person=>person)}
            
          /> */}
       <button type="submit">Добавить</button>
    </form></div>

</>
);}

  const mapDispatchToProps = dispatch => ({
    onSubmit:({title,description})=>dispatch(operations.addTask({title,description})),
  });
 
  export default connect(null, mapDispatchToProps)(FormAddTask); 