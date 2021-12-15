import {useState} from 'react';
import { connect } from 'react-redux';
import  operations from '../../redux/persons/persons-operations';


function FormAddPerson({onSubmit}){
  const [fio,setFio]=useState('');
  const [email,setEmail]=useState('');
  
  const handelFio=(event)=>{
    const {value}=event.currentTarget;  
    setFio(value);
  
  }
  const handelEmail=(e)=>{
    const {value}=e.currentTarget;  
    setEmail(value);

  }
   
  const handelSubmit=e=>{
    e.preventDefault();
    onSubmit({fio,email})
    reset()
  }

   const reset=()=>{
      setFio('');
      setEmail('');
      
  }     
   
  return (<>
    
  
    <div>
    <h3>Добавить сотрудника</h3>
      <form onSubmit={handelSubmit}>
      <div >
       <div> <label >ФИО</label></div>
        <input 
             onChange={handelFio}
              value={fio}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
        /></div>
        <div>

       <label >Email</label>
       <input 
             onChange={handelEmail}
              value={email}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
        /></div>
        
       <button type="submit">Добавить</button>
     </form></div>

</>
);}
  
  const mapDispatchToProps = dispatch => ({
    onSubmit:({fio,email})=>dispatch(operations.addPerson({fio,email})),
  });
 
  export default connect(null, mapDispatchToProps)(FormAddPerson); 