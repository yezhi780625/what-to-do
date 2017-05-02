import todo from './Todo';

const Todos = (state = {newTodo:"",todos:[],Filter:"ONGOING"}, action) => {
    switch (action.type) {
        case "CREATE":
            state.todos.push(todo({newTodo:state.newTodo}, action));
            state.newTodo="";
            return Object.assign({},state);
        case "TOGGLE":
            state.todos=state.todos.map(t =>
                t.id===action.id?todo(t,action):t
            );
            return Object.assign({},state);
        case "DELETE":
            state.todos=state.todos.map(t =>
                t.id===action.id?todo(t,action):t
            );
            return Object.assign({},state);
        case "CHANGE":
            state.newTodo=action.text;
            return Object.assign({},state);
        default:
            return state;
    }
}

export default Todos;