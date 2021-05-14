import React from 'react'
import Home from '../components/Home'
import '../styles/main.css'
import { lista } from '../assets/lista'
import Header from '../containers/Header'
import Propiedades from '../containers/Propiedades'


class PrincipalContent extends React.Component{
    constructor(props){
        super(props);
        this.state={valueSearch:''};
    }
    OnEventClick(value){
        console.log("evento PrincipalContent: ", value);
      this.setState({valueSearch:value});
    }
    render(){
        return (
            <div className="contenedor">
                <Header OnClickButton={e=>this.OnEventClick(e)}/>
                <Propiedades data={lista} valueSearch={this.state.valueSearch}/>
            </div>
        )
    }
}

// const Propiedades = (props) => {
//     return (
//         <div className="contenedor">
//             {console.log("ingreso a Propiedades")}
//             <Home title={"Casas en Bolivia"} data={props.data} />
//         </div>
//     )
// }

export default PrincipalContent
