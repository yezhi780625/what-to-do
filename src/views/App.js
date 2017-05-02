import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Panel from './Panel';

const App =(props)=>{
    injectTapEventPlugin();
    return(
        <div className="App">
        <Panel/>
        {/*<MuiThemeProvider>
          <Drawer
            docked={false}
            width={200}
            open={props.open}
            onRequestChange={(open) => this.setState({ open })}
          >
            <Avatar>{this.props.userName[0]}</Avatar>
            <MenuItem onTouchTap={this.handleClose}>OnGoing</MenuItem>
            <MenuItem onTouchTap={this.handleClose}>Archived</MenuItem>
          </Drawer>
        </MuiThemeProvider>*/}
      </div>
    );
}

export default App;