import React, { Component } from 'react';
import Sidebar from './Sidebar/Sidebar'
import SideDrawer from './MobileToggle/SideDrawer';
import Backdrop from './Backdrop/Backdrop';
import Home from './Home/Home';
import About from './About/About';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';
import './App.css';
import './Sidebar/Sidebar'
import Projects from './Projects/Projects';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backDrop;
    if (this.state.sideDrawerOpen) {
      backDrop = <Backdrop click={this.backdropClickHandler} />
    }
    
    return (
      <div className='container'>
        <div className='sideBar'>
          <Sidebar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backDrop}
        </div>
        <div className='content'>
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
