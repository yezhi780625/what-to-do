import { connect } from 'react-redux';
import TodoList from '../views/TodoList';
import Actions from '../data/Actions';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'ONGOING':
      return todos.filter(t => !t.archived)
    case 'ARCHIVED':
      return todos.filter(t => t.archived)
    default:
      return todos
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    todos: getVisibleTodos(state.todos, state.Filter),
    newTodo:state.newTodo
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChangeInput: (e) => {
        var value = e.target.value;
        return dispatch(Actions.changeInput(value));
    },
    createTodo:() => {
        return dispatch(Actions.createTodo());
    },
    toggleTodo:(id)=>{
        return dispatch(Actions.toggleTodo(id));
    },
    deleteTodo:(id)=>{
        return dispatch(Actions.deleteTodo(id));
    }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)