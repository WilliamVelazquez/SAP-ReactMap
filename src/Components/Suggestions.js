//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
import React from 'react'

import '../css/suggestions.css';

const Suggestions = (props) => {
  const options = props.results.map(r => (
    <li 
    	key={r.id}
    	onClick={ props.suggestionClick }
    	data-value={r.cct}
    >
      {r.cct}
    </li>
  ))
  return <ul className={`suggestions-box${props.visible?" visible-box":""}`} id="suggestionsBox">{options}</ul>
}

export default Suggestions;