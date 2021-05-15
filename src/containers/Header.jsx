import React from 'react'
import Search from '../components/Search'
import { opciones } from '../assets/opciones'
import Logo from '../components/Logo'
import '../styles/header.css'

class Header extends React.Component{
   constructor(props){
      super(props);
      this.eventOnChange=this.eventOnChange.bind(this);
      this.eventSelect=this.eventSelect.bind(this);
   }
   eventOnChange(event) {
     this.props.OnClickButton(event);
   }
   eventSelect(event){
      this.props.OnSelect(event);
   }
   render(){
      return (
         <div className="contenedor">
            <div className="contenedor-header">
               <Logo />
               <Search clickButton={e => this.eventOnChange(e)} 
                       OnSelect={s=>this.eventSelect(s)}/>
            </div>
         </div>
      )
   }
}

export default Header
