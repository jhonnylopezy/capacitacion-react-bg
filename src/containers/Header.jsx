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
      console.log("evento Header: ", event);
      // this.setState({ valueSearch: event });
      // console.log("evento Header2: ", this.state.valueSearch);
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
