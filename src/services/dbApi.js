
/* const url=new URL(document.location);

const BASE_URL=url.protocol+'//'+url.host; */
const BASE_URL='http://localhost:3002'
async function fetchWithErrorHandling(url='',config={}){
    const response=await fetch(url,config);
    return response.ok
    ? await response.json()
    :Promise.reject(new Error('Not found'));
}


export function fetchPersons(){
    return fetchWithErrorHandling(`${BASE_URL}/persons`)
}
export function fetchTasks(){
    return fetchWithErrorHandling(`${BASE_URL}/tasks`)
}
export function fetchPersonById(personId){
    return fetchWithErrorHandling(`${BASE_URL}/persons/${personId}?_embed=tasks`)
}
export function fetchTaskById(taskId){
    return fetchWithErrorHandling(`${BASE_URL}/tasks/${taskId}?_expand=personId`)
}
export function fetchAddTask(data){
    return fetchWithErrorHandling(`${BASE_URL}/tasks/${data}`)
}
export function fetchAddPerson(data){
    return fetchWithErrorHandling(`${BASE_URL}/tasks/${data}`)
}    


