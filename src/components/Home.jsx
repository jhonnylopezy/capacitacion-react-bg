import React, { useState, render,setState } from 'react'
import ListaPropiedades from './ListaPropiedades'
import Search from './Search'
import '../styles/home.css'



class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state={valueT:''};
        // this.eventOnChange=this.eventOnChange.bind(this);
    }

    // eventOnChange(event) {
    //     console.log("evento: ", event);
    //      this.setState({valueT:event});
        
    // }
    render() {
        return (
            <div className="container-home">
                {/* <Search  clickButton={e=>this.eventOnChange(e)}/> */}
                <div className="container-title">
                    {console.log("ingreso a home")}
                    <span className="title-header">{this.props.title}</span>
                    <span className="count">{`${this.props.data.length}+ stays`}</span>
                </div>

                <ListaPropiedades data={this.props.data} dataSearch={this.props.valueSearch} />
            </div>
        )
    }
}

export default Home
