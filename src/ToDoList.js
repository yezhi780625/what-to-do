import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import { List, ListItem } from 'material-ui/List';
import ContentAdd from 'material-ui/svg-icons/content/add';
import HighlightOff from 'material-ui/svg-icons/action/highlight-off';
import './ToDoList.css';
const style = {
    marginRight: 20,
};
export default class ToDoList extends Component {
    constructor(props) {
        super();
        this.state = {
            newItem: '',
            toggleCompleted:false,
            toggleTodo:false
        };
        this.onChangeInput = this.onChangeInput.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.toggleItem = this.toggleItem.bind(this);
        this.editItem = this.editItem.bind(this);
    }
    addItem = () => {
        if ('' !== this.state.newItem.trim()){
            this.props.addItem({item:this.state.newItem,editing:false});
        }
        this.setState({ newItem: '' });
    }

    onChangeInput = (e) => {
        var value = e.target.value;
        this.setState({
            newItem: value
        });
    }

    deleteItem = (index)=>{
        this.props.deleteItem(index);
    }

    toggleItem =(index)=>{
        this.props.toggleItem(index);
    }

    editItem = (index)=>{
        if(!this.props.todos[index].editing){
            this.props.editItem(index);
        }
    }
    render = () => {
        var me = this;
        return (
            <div style={{ padding: "20px" }}>
                <MuiThemeProvider>
                    <TextField
                        hintText="What To Do?"
                        value={this.state.newItem}
                        onChange={this.onChangeInput}
                        onKeyPress={(e) => { if (e.which === 13) this.addItem(); }}
                    />
                </MuiThemeProvider>
                <MuiThemeProvider>
                    <FloatingActionButton
                        mini={true}
                        style={style}
                        onTouchTap={this.addItem}
                    >
                        <ContentAdd />
                    </FloatingActionButton>
                </MuiThemeProvider>
                <br />
                <span>ToDo:</span>
                <MuiThemeProvider>
                    <List>
                        {
                            this.props.todos.map((todo, index) => {
                            return (<ListItem
                                key={Date.now+index}
                                className={todo.completed?"completed":""}
                                leftCheckbox={<Checkbox value={todo.completed} onCheck={()=>{me.toggleItem(index);}}/>}
                                primaryText={(<TextField id={"edit_"+index} value={todo.item} onDoubleClick={()=>me.editItem(index)} readOnly={!todo.editing}/>)}
                                rightIconButton={<IconButton  onTouchTap={()=>me.deleteItem(index)}><HighlightOff className="destroy"/></IconButton>}
                            />)
                        })}
                    </List>
                </MuiThemeProvider>
            </div>
        );
    }
}