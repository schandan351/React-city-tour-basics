import React,{Component} from 'react';
import "./tour.scss";
export default class Tour extends Component{
  state={
    showInfo:false
  }
  handleInfo=()=>{
    this.setState({
      showInfo:!this.state.showInfo
    })
  }
  render(){
    const {id,city,img,name,info}=this.props.tour;
    const {removeTour}=this.props;
    return(
      <article className="tour">
        <div className="img-container">
          <img src={img} alt="this is city tour"/>
          <span className="close-btn" onClick={() => removeTour(id)}><i>X</i></span>
        </div>
        <div className="info">
          <h2>{city}</h2>
          <h4>{name}</h4>
          <button onClick={this.handleInfo}>show info</button>
          {this.state.showInfo && <h5>{info}</h5>}
        </div>
      </article>
    );
  }
}