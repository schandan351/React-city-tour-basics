import React,{Component} from 'react';
import "./tour.scss";
export default class Tour extends Component{
  render(){
    console.log(this.props);
    return(
      <h3>Hello from tour</h3>
    );
  }
}