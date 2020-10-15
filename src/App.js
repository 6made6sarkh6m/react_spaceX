import React from 'react';
import Header from './components/Header/Header';
import './style.css';
import Main from './components/Main/Main';
import Feature from './components/Features/Feature';
import Footer from './components/Footer/Footer';
import FetchData from './services/FetchData';

class App extends React.Component {

  fetchData = new FetchData();
  // const app = React.createElement('div',{classNameName: 'App'}, 'string');
  // return app;
  
  state = {
    rocket : 'Falcon 1',
    rocketFeature: null,
    rockets : []
  };
  
  componentDidMount(){
    this.updateRocket();
  }

  updateRocket(){

    this.fetchData.getRocketModel()
    .then(data=>{
      this.setState({rockets: data.map(item => item.name)})
      return data;
    })
    .then(data => data.find(item => item.name === this.state.rocket ))
    .then(rocketFeature=>this.setState({rocketFeature}))
  
  }

  changeRocket=(rocket)=>{
    this.setState({
      rocket
    },this.updateRocket)
  }

  render(){
    return(
      <React.Fragment>
       <Header
        rockets={this.state.rockets}
        changeRocket={this.changeRocket}     
       ></Header>
      <Main rocket ={this.state.rocket}></Main>
      <Feature rocketFeature={this.state.rocketFeature}></Feature>
      <Footer></Footer>
  
      </React.Fragment>
    );
  }

   
  
}

export default App;
