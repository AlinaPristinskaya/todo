
import {useState} from 'react';
//import { connect } from 'react-redux';
//import tasksActions from '../../redux/tasks/tasks-actions';
//const persons=['Иванов','Петров','Сидоров']

function FormAddPerson(){
  const [title,setTitle]=useState('');
  const [description,setDescrintion]=useState('');
  //const [personId,setPersonId]=useState('');

  

  const handelChangeTitle=(event)=>{
    const {value}=event.currentTarget;  
    setTitle(value);
  
  }

  const handelChangeDescription=(e)=>{
    console.log(e);
    const {value}=e.currentTarget;  
    setDescrintion(value);

  }
 /*  const handelChangePerson=(e)={
    console.log(e);
    const {value}=e.currentTarget;  
    setPerson(value);
  } */
  
  const handelSubmit=e=>{
    e.preventDefault();
   

  
    
    //reset()

    }
  

  /* const reset=()=>{
      setTitle('');
      setDescrintion('');
      setPersonId('')
  } */

  
  return (
    <>
    <div>
    <h3>Добавить задачу</h3>
      <form onSubmit={handelSubmit}>
      <div >
       <div> <label> Название задачи </label></div>
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
       {/*   <select
            defaultValue={'ФИО Сотрудника'}
            name="SelectedPersone"
            
            options={persons.map(person=>person)}
            
          /> */}
       <button type="submit">Добавить</button>
    </form></div>

</>
);}


/* const mapDispatchToProps=dispatch=>({
    onSubmit:data=> dispatch(tasksActions.addTask(data))
})

  export default connect(null,mapDispatchToProps)(FormAddPerson); */
  export default FormAddPerson;