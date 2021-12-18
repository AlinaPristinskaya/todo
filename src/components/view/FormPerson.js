import {useState} from 'react';
import { connect } from 'react-redux';
import  operations from '../../redux/persons/persons-operations';


function FormPerson({onSubmit,name,onSubmitEdit,person,onClose}){
  const [fio,setFio]=useState('');
  const [email,setEmail]=useState('');
  
  const handelFio=(event)=>{
    const {value}=event.currentTarget;  
    setFio(value);
  
  }
  const handelEmail=(e)=>{
    const {value}=e.currentTarget;
    validateEmail(value)  
    setEmail(value);

  }
   
  const handelSubmit=e=>{
    e.preventDefault();
    if(person){
      onSubmitEdit(person.id,
        fio?fio:person.fio,
        email?email:person.email)
      reset()
      onClose()
    }
   else onSubmit({fio,email})
    reset()
    onClose()
  }
   const reset=()=>{
      setFio('');
      setEmail('');
      
  }     
  function validateEmail(value) {
    let error;
    if (!value) {
      error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
    return error;
  }
  
  return (<>
    
  
    <div>
    <h1>{name}</h1>
      <form onSubmit={handelSubmit}>
      <div >
       <div> <label >ФИО</label></div>
        <input 
             onChange={handelFio}
              value={fio}
              type="text"
              name="name"
              maxlength="255"
              required={!person}

        /></div>
        <div>

        <div> <label >Email</label></div>
       <input 
             onChange={handelEmail}
              value={email}
              type="text"
             pattern='^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$'
             required={!person}
        /></div>
        
       <button type="submit">Добавить</button>
     </form></div>

</>
);}

  
  const mapDispatchToProps = dispatch => ({
    onSubmit:({fio,email})=>dispatch(operations.addPerson({fio,email})),
    onSubmitEdit:(id,fio,email)=>dispatch(operations.editPerson(id,fio,email))
  });
 
  export default connect(null, mapDispatchToProps)(FormPerson); 