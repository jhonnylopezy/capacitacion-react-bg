import React from 'react'
import Home from '../components/Home'
import '../styles/main.css'
// import { lista } from '../assets/lista'

class Propiedades extends React.Component{
    constructor(props){
        super(props);
        // this.state={valueSearch:""};
    }

    render(){
        return (
            <div className="contenedor">
                {console.log("ingreso a Propiedades")}
                <Home 
                      title={"Casas en Bolivia"} 
                      data={this.props.data} 
                      valueSearch={this.props.valueSearch}/>
            </div>
        )
    }
}

export default Propiedades
