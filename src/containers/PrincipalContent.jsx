import React from 'react'
import '../styles/main.css'
import { lista } from '../assets/lista'
import Header from '../containers/Header'
import Propiedades from '../containers/Propiedades'


class PrincipalContent extends React.Component{
    constructor(props){
        super(props);
        this.state={valueSearch:'',valueSelect:""};
    }
    OnEventClick(value){
      this.setState({valueSearch:value});
    }
    EventoSelect(value){
        this.setState({valueSelect:value});
    }
    render(){
        return (
            <div className="contenedor">
                <Header OnClickButton={e=>this.OnEventClick(e)}
                        OnSelect={e=>this.EventoSelect(e)}/>
                <Propiedades data={lista} 
                             valueSearch={this.state.valueSearch}
                             valueSelect={this.state.valueSelect}/>
            </div>
        )
    }
}

export default PrincipalContent
