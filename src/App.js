import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
// import { Navbar, NavbarBrand } from 'reactstrap';
import React, { Component } from 'react';
// import Menu from './components/MenuComponent';
// import { DISHES } from './shared/dishes';
import Main from './components/MainComponent';
class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     dishes: DISHES
  //   };
  // }

  render() {
    return (
      // <div className="App">
      //   <Navbar dark color="primary">
      //     <div className="container">
      //       <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
      //     </div>
      //   </Navbar>
      //   {/* <Menu /> */}
      //   <Menu dishes={this.state.dishes} />
      // </div>
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
