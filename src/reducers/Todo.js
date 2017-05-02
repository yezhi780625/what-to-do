const todo = (state = {}, action)=>{
    switch (action.type) {
        case "CREATE":
            return {
                id:action.id,
                text:state.newTodo,
                completed:false,
                archived:false
            };
        case "TOGGLE":
            return {
                id:state.id,
                text:state.text,
                completed:!state.completed,
                archived:state.archived
            };
        case "DELETE":
            return {
                id:state.id,
                text:state.text,
                completed:state.completed,
                archived:!state.archived
            };
        default:
            return state;
    }
}
export default todo;