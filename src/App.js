import React, { Component } from 'react';
import NavbarHeader from './components/Navbar/Navbar';
import './App.css';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        {/* <NavbarHeader /> */}
        <section className="hero">
          <div className="container">
            <div className="header-text-box col-xs-12 col-md-4">
              <h1 className="header-title">
                SHAN <hr/> KENNY
              </h1>
            </div>
          </div>
        </section>
        {/* <section className="about-us">
          <div className="container about-text-box">
            <h1 className="about-title">
              About us
            </h1>
          </div>
        </section>
        <section className="wedding-details">
          <div className="container about-text-box">
            <h1 className="about-title">
              Wedding Detauls
            </h1>
          </div>
        </section> */}


      </div>
    );
  }
}

export default App;
