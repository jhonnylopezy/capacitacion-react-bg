import React from 'react'
import imagenSearch from '../assets/search.svg'
import { opciones } from '../assets/opciones'
import '../styles/search.css'

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dataCriteria: "",location:"" };
    this.eventoSelect=this.eventoSelect.bind(this);
  }
  eventoSelect(e){
  
    console.log("evento Select: ",opciones[e.target.value]);
     this.setState({location:opciones[e.target.value]});
      this.props.OnSelect(opciones[e.target.value]);
  }

  render() {
    return (
      <div className="container-body-search">
        <div id="selectId" className="container-select">
          <select id="location"
                  name="location" 
                  className="search-select" 
                  onChange={e => this.eventoSelect(e)}>
            {
              opciones.map((elemento, key) => {
                return <option id={key} value={key}>{elemento}</option>
              })
            }
          </select>
        </div>
        <div id="inputId" className="container-select">
          <input className="container-search"
            type="text"
            width="100"
            height="100"
            onChange={e => this.setState({ dataCriteria: e.target.value })} />
        </div>
        <div id="buttonId" className="container-select">
          <a href="#"
            onClick={e => this.props.clickButton(this.state.dataCriteria)}
            src={imagenSearch}>buscar</a>
        </div>

      </div>
    )
  }
}

export default Search