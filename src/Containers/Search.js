//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
import React, { Component } from 'react'

import Suggestions from '../components/Suggestions'

import '../css/search.css';

class Search extends Component {
  state = {
    query: '',
    showSuggestions: false
    //results: []
  }

  handleInputChange = () => {
    //console.log("change-->",this.search.value);
    this.setState({
      query: this.search.value
    }, () => {
      //if (this.state.query && this.state.query.length > 1) {
        this.props.filterInfo(this.state.query);
        if(this.props.results.length>0){
          this.setState({
            showSuggestions: true
          });
        }
        //if (this.state.query.length % 2 === 0) {
        //}
      //} 
    })
  }

  handleSuggestionClick = (event) => {
    //console.log("value-->",this.search.value);
    //console.log("-->",this);
    
    //console.log("target-->",event.target);
    let item = event.target.closest('li');
    this.setState({
      query: item.getAttribute("data-value")
    }, () => this.handleInputChange());
    //console.log("item-->",item);
    //console.log("itemAttr-->",item.getAttribute("data-value"));
  }

  handleFocusSearchBox = () => {
    if(this.props.results.length>0){
      //document.getElementById("suggestionsBox").classList.add('visible-box');
      this.setState({
        showSuggestions: true
      });
    }
  }

  handleBlurSearchBox = () => {
    //document.getElementById("suggestionsBox").classList.remove('visible-box');
    setTimeout(() => {
      this.setState({
        showSuggestions: false
      });
    },100);
  }

  handleKeyPressed = (e) => {
    if (e.key === 'Enter'){
      e.preventDefault();
    } 
  }

  render() {
    return (
      <form>
        <input 
          className="search-box"
          placeholder="Buscar CCT..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
          onBlur={this.handleBlurSearchBox}
          //onFocus={this.handleFocusSearchBox}
          value={this.state.query}
          onKeyPress={this.handleKeyPressed}
        />
        <Suggestions 
          results={this.props.results} 
          suggestionClick={this.handleSuggestionClick}
          visible={this.state.showSuggestions}
        />
      </form>
    )
  }
}

export default Search;