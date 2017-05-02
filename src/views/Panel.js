import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import More from './More.js';
import TodoList from '../containers/TodoList';

const Panel = (props) => (
    <div>
        <MuiThemeProvider>
            <AppBar
                title={"What To Do ?"}
                iconElementRight={<More />}
            />
        </MuiThemeProvider>
        <TodoList />
    </div>)

export default Panel;