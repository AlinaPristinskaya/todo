const getTasks=state=>state.tasks.entities;
const getPersons=state=>state.persons;

console.log(getPersons)
const selectors={getTasks,getPersons}

export default selectors;