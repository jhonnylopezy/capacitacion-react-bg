import React, { useState, render, setState } from 'react'
import ListaPropiedades from './ListaPropiedades'
import Search from './Search'
import '../styles/home.css'

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    ObtenerLongitud() {
        let valueSplit = "";
        let listaFiltrada= this.props.data;
        if (this.props.valueSelect) {
            valueSplit = this.props.valueSelect.split(',');
            listaFiltrada= this.props.data.filter(element => element.city == valueSplit[0].trim() && element.country == valueSplit[1].trim());
            if(this.props.valueSearch){
                listaFiltrada=listaFiltrada.filter(element=>element.city.includes(this.props.valueSearch) ||
                element.title.includes(this.props.valueSearch) ||
                element.rating==this.props.valueSearch ||
                element.maxGuests==this.props.valueSearch ||
                element.type.includes(this.props.valueSearch) ||
                element.beds==this.props.valueSearch);
            }
        }
        return listaFiltrada;
    }
    render() {
        let listaDatos = this.ObtenerLongitud();
        return (
            <div className="container-home">
                <div className="container-title">
                    <span className="title-header">{this.props.title}</span>
                    <span className="count">{`${listaDatos.length}+ stays`}</span>
                </div>

                <ListaPropiedades data={listaDatos}/>
            </div>
        )
    }
}

export default Home
