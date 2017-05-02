const TOGGLE = "TOGGLE";
const CREATE = "CREATE";
const UPDATE = "UPDATE";
const DELETE = "DELETE";
const CHANGE = "CHANGE";
let _id = 0;

export default {
    toggleTodo:(id)=>{
        return {
            type:TOGGLE,
            id:id
        }
    },
    deleteTodo:(id)=>{
        return {
            type:DELETE,
            id:id
        }
    },
    createTodo:()=>{
        return {
            type:CREATE,
            id:_id++
        }
    },
    updateTodo:(id,text)=>{
        return {
            type:UPDATE,
            id:id,
            text:text
        }
    },
    changeInput:(text)=>{
        return {
            type:CHANGE,
            text:text
        }
    }
}