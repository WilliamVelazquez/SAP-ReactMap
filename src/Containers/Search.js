//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
import React, { Component } from 'react'

import SearchBox from '../components/SearchBox';

class Search extends Component {
  state = {
    query: '',
    showSuggestions: false
  }

  handleInputChange = () => {
    //console.log("change-->",this.searchBoxRef.value);
    this.setState({
      query: this.searchBoxRef.value
    }, () => {
      //if (this.state.query && this.state.query.length > 1) {
        this.props.filterInfo(this.state.query);
        if(this.props.results.length>0 && !this.state.showSuggestions){
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
    //console.log("value-->",this.searchBoxRef.value);
    //console.log("-->",this);
    
    //console.log("target-->",event.target);
    let item = event.target.closest('li');
    //console.log("item-->",item);
    this.setState({
      query: item.getAttribute("data-value")
    }, () => this.handleInputChange());
    //console.log("itemAttr-->",item.getAttribute("data-value"));
  }

  handleFocusSearchBox = () => {
    if(this.props.results.length>0 && this.state.query.length>0){
      //document.getElementById("suggestionsBox").classList.add('visible-box');
      this.setState({
        showSuggestions: true
      });
    }
  }

  handleBlurSearchBox = () => {
    //console.log("--->",event.target);
    //document.getElementById("suggestionsBox").classList.remove('visible-box');
    setTimeout(() => {
      this.setState({
        showSuggestions: false
      });
    },250);
  }

  handleKeyPressed = (e) => {
    if (e.key === 'Enter'){
      e.preventDefault();
    } 
  }

  setSearchBoxRef = (element) => {
    this.searchBoxRef=element;
  }

  render() {
    return (
      <SearchBox 
        value={this.state.query}
        placeholder="Buscar CCT..."
        setBoxRef={this.setSearchBoxRef}
        handleInputChange={this.handleInputChange}
        handleBlurSearchBox={this.handleBlurSearchBox}
        handleFocusSearchBox={this.handleFocusSearchBox}
        handleKeyPressed={this.handleKeyPressed}
        results={this.props.results}
        handleSuggestionClick={this.handleSuggestionClick}
        visible={this.state.showSuggestions}
      />
    )
  }
}

export default Search;