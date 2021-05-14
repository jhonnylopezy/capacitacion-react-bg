import React from 'react'
import Propiedad from './Propiedad'
import '../styles/listaPropiedades.css'

class ListaPropiedades extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="lista-propiedades">
                {
                    this.props.data.map((element, key) => {
                        console.log("ingreso a ListaPropiedades",this.props.dataSearch);
                        if(this.props.dataSearch){
                            if(element.city==this.props.dataSearch){
                                return (
                                    <Propiedad data={element} key={key} />
                                )
                            }
                        }else{
                            return (
                                <Propiedad data={element} key={key} />
                            )
                        }
                    })
                }
            </div>
        )

    }
}

// const ListaPropiedades = (props,dataSearch) => {
//     return (
//         <div className="lista-propiedades">
//             {
//                 props.data.map((element,key) => {
//                       console.log("elemento: ",dataSearch);
//                     // if(dataSearch!=null || dataSearch=="")
//                     // {
//                     //     return(
//                     //         <Propiedad data={element} key={key} />
//                     //     )
//                     // }else{
//                         // if(element.city==dataSearch){
//                             console.log("ingreso: ",dataSearch);
//                             return(
//                                 <Propiedad data={element} key={key} />
//                             )
//                         // }
//                     // }

//                 })
//             }


//         </div>
//     )
// }


export default ListaPropiedades
