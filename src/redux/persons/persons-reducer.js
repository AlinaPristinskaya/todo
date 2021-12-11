
const persons=[]

const personsReducer=(state=persons,action)=>{
    console.log(action)
    return state
};
export default personsReducer