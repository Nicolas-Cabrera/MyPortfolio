import React, { Component } from 'react';
import Sidebar from './Sidebar/Sidebar'
import SideDrawer from './MobileToggle/SideDrawer';
import Backdrop from './Backdrop/Backdrop';
import './App.css';

class App extends Component {
state = {
  sideDrawerOpen: false
};

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backDrop; 

    if(this.state.sideDrawerOpen){
      backDrop = <Backdrop click={this.backdropClickHandler}/>
    }
    return (
      <div>
        <Sidebar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backDrop}
      </div>
    );
  }
}

export default App;
