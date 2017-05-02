import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import More from './More.js';
import ToDoList from './ToDoList';

export default class Panel extends Component {
    constructor(props) {
        super(props);
        this.state={
            todos:[{item:"React",editing:false,completed:false},{item:"Angular",editing:false,completed:false},{item:"Ext",editing:false,completed:false}],
            archives:[]
        };
    }
    addItem = (todo)=>{
        const todos=this.state.todos.slice();
        this.setState({
            todos:todos.concat([todo])
        });
    }

    deleteItem = (index) => {
        var todos = this.state.todos.slice();
        todos.splice(index,1);
        this.setState({
            todos:todos
        });
    }

    toggleItem= (index) => {
        var todos = this.state.todos.slice();
        todos[index].completed = !todos[index].completed;
        
        this.setState({
            todos:todos
        });
    }

    editItem= (index) => {
        var todos = this.state.todos.slice();
        todos[index].editing = !todos[index].editing;        
        this.setState({
            todos:todos
        });
    }

    render = () => {
        return (
            <div>
            <MuiThemeProvider>
                <AppBar
                    title={"What To Do ?"}
                    onLeftIconButtonTouchTap={this.props.handleToggle}
                    iconElementRight={<More />}
                />
            </MuiThemeProvider>
            <ToDoList
                todos={this.state.todos}
                addItem={this.addItem}
                deleteItem={this.deleteItem}
                toggleItem={this.toggleItem}
                editItem={this.editItem}
            />
            </div>
        );
    }
}