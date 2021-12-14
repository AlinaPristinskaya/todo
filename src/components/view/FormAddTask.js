
import {useState} from 'react';
import { connect } from 'react-redux';
import  operations from '../../redux/tasks/tasks-operations';
import * as personsSelectors from '../../redux/persons/persons-selectors'
import Select from 'react-select';
import personsOperations from '../../redux/persons/persons-operations'

function FormAddTask({onSubmit,persons,personsfetch}){
  const [title,setTitle]=useState('');
  const [description,setDescrintion]=useState('');
  const [personId,setPersonId]=useState('');

  

  const handelChangeTitle=(event)=>{
    const {value}=event.currentTarget;  
    setTitle(value);
  
  }

  const handelChangeDescription=(e)=>{
    const {value}=e.currentTarget;  
    setDescrintion(value);

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
  const allPerson=()=>{
    personsfetch()
    console.log(persons)
    persons.map(person =>
      person.id
    );}
    
  

  const validatePerson = e => {
    if (e.label === 'Выберите сотрудника') {
      return;
    }
    setPersonId(e.label);
    
  }; 
/*   const sortPerson = arr => {
    let optionsPerson = [];
    arr.forEach(({ id, fio }) =>
      optionsPerson.push({
        value: id,
        label: fio,
      }),
    );
    return optionsPerson;
  }; */ 
  return (
    <>
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
         <Select
            defaultValue={'Выбрать сотрудника'}
            name="Selected"
            onChange={validatePerson}
            options={allPerson()}
            
          />
       <button type="submit">Добавить</button>
     </form></div>

</>
);}
  const mapStateToProps=state=>({
    persons:personsSelectors.getPersons
  })
  const mapDispatchToProps = dispatch => ({
    onSubmit:({title,description})=>dispatch(operations.addTask({title,description})),
    personsfetch:dispatch(personsOperations.fetchPersons())
  });
 
  export default connect(mapStateToProps, mapDispatchToProps)(FormAddTask); 