import React from 'react';
import Header from './components/Header/Header';
import './style.css';
import Main from './components/Main/Main';
import Feature from './components/Features/Feature';
import Footer from './components/Footer/Footer';

function App() {
  // const app = React.createElement('div',{classNameName: 'App'}, 'string');
  // return app;
  return(
    <React.Fragment>
     <Header></Header>
    <Main></Main>
    <Feature></Feature>
    <Footer></Footer>

    </React.Fragment>
  ); 
  
}

export default App;
