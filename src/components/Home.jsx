import React, { useState, render,setState } from 'react'
import ListaPropiedades from './ListaPropiedades'
import Search from './Search'
import '../styles/home.css'



class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state={valueT:''};
    }

    render() {
        return (
            <div className="container-home">
                <div className="container-title">
                    <span className="title-header">{this.props.title}</span>
                    <span className="count">{`${this.props.data.length}+ stays`}</span>
                </div>

                <ListaPropiedades data={this.props.data} 
                                  dataSearch={this.props.valueSearch} 
                                  dataSelect={this.props.valueSelect}/>
            </div>
        )
    }
}

export default Home
