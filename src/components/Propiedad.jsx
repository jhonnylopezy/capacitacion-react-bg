import React from "react";
import "../styles/propiedades.css";
import logo from "../assets/star-solid.svg";


class Propiedad extends React.Component{
    constructor(props){
      super(props)

    }
  render(){
      return (
    <div className="propiedad">
      <img src={this.props.data.photo} className="photo" />
      <div className="detalles">
        {this.props.data.superHost && (
          <div className="host">
            <span className="super">SUPER HOST</span>
          </div>
        )}

        <span>{` ${this.props.data.type} ${this.props.data?.beds || 0} beds`}</span>
        <div>
          <img src={logo} className="logo" />
          <span>{this.props.data.rating}</span>
        </div>
      </div>
      <span className="title-propiedad">{this.props.data.title}</span>
    </div>
  );
    
  }
}

export default Propiedad;
