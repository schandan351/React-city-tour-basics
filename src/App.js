import  React,{Component} from 'react';
import NavBar from './components/navbar/NavBar';
import TourList from './components/TourList/';
export default class App extends Component{
  render(){
    return <React.Fragment>
      <NavBar />
      <TourList />
    </React.Fragment>
  }
}