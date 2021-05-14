import React from 'react'
import Search from '../components/Search'
import { opciones } from '../assets/opciones'
import Logo from '../components/Logo'
import '../styles/header.css'

class Header extends React.Component{
   constructor(props){
      super(props)
      this.state={valueSearch:""};
      this.eventOnChange=this.eventOnChange.bind(this);
   }

   eventOnChange(event) {
      console.log("evento Header: ", event);
      this.setState({ valueSearch: event });
      console.log("evento Header2: ", this.state.valueSearch);
     this.props.OnClickButton(this.state.valueSearch);
   }
   render(){
      return (
         <div className="contenedor">
            <div className="contenedor-header">
               <Logo />
               <Search clickButton={e => this.eventOnChange(e)} />
            </div>
         </div>
      )
   }
}

// const Header = (props) => {
//   const [list,setList]=React.useState(props.data);
//    const eventOnChange=event=> {
//        console.log("evento: ", event);
//       // this.setState({ valueT: event });
//     setList(list.filter(item=>item.city==event))
//    }
//    return (
//       <div className="contenedor">
//          <div className="contenedor-header">
//             <Logo />
//             <Search clickButton={e => eventOnChange(e)} />
//          </div>

//       </div>
//    )
// }

export default Header
