import React from 'react'
import Propiedad from './Propiedad'
import '../styles/listaPropiedades.css'

class ListaPropiedades extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="lista-propiedades">
                {
                     this.props.data.map((element, key) => {
                        return (
                            <Propiedad data={element} key={key} />
                        )})
                }
            </div>
        )

    }
}

export default ListaPropiedades
