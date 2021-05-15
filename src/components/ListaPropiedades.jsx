import React from 'react'
import Propiedad from './Propiedad'
import '../styles/listaPropiedades.css'

class ListaPropiedades extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let valueSplit = "";
        if (this.props.dataSelect)
            valueSplit = this.props.dataSelect.split(',');

        return (
            <div className="lista-propiedades">
                {
                    this.props.data.map((element, key) => {
                        if (!valueSplit) {
                            return (
                                <Propiedad data={element} key={key} />
                            )
                        } else {
                            if (element.city == valueSplit[0].trim() &&
                                element.country == valueSplit[1].trim()) {
                                if (this.props.dataSearch) {
                                    if (element.city.includes(this.props.dataSearch) ||
                                        element.title.includes(this.props.dataSearch) ||
                                        element.rating==this.props.dataSearch ||
                                        element.maxGuests==this.props.dataSearch ||
                                        element.type.includes(this.props.dataSearch) ||
                                        element.beds==this.props.dataSearch
                                    ) {
                                        return (
                                            <Propiedad data={element} key={key} />
                                        )
                                    }
                                } else {
                                    return (
                                        <Propiedad data={element} key={key} />
                                    )
                                }
                            }

                        }
                    })
                }
            </div>
        )

    }
}



export default ListaPropiedades
