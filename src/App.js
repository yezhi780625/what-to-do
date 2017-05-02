import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import Panel from './Panel';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    injectTapEventPlugin();
    this.handleToggle=this.handleToggle.bind(this);
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <div className="App">
        <Panel handleToggle={this.handleToggle}/>
        <MuiThemeProvider>
          <Drawer
            docked={false}
            width={200}
            open={this.state.open}
            onRequestChange={(open) => this.setState({ open })}
          >
            <Avatar>{this.props.userName[0]}</Avatar>
            <MenuItem onTouchTap={this.handleClose}>OnGoing</MenuItem>
            <MenuItem onTouchTap={this.handleClose}>Archived</MenuItem>
          </Drawer>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
