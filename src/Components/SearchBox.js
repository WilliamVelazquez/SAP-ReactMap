//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
import React from 'react';
import Suggestions from '../components/Suggestions'

import '../css/search-box.css';

function SearchBox(props) {
  return (
    <form>
      <input 
        className="search-box"
        placeholder={props.placeholder || "Buscar CCT..."}
        //ref={input => props.search = input}
        value={props.value}
        ref = {props.setBoxRef}
        onChange={props.handleInputChange}
        onBlur={props.handleBlurSearchBox}
        onFocus={props.handleFocusSearchBox}
        onKeyPress={props.handleKeyPressed}
      />
      <Suggestions 
        results={props.results} 
        suggestionClick={props.handleSuggestionClick}
        visible={props.visible}
      />
    </form>
  )
}

export default SearchBox;