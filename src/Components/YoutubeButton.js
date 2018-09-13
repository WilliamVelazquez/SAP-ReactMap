//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
import React from 'react';

import '../css/youtube-button.css';
import YouTubeLogo from '../images/yt.png'
//import YouTubeLogo from '../svg/YouTube.svg'

//import YoutubeIcon from './YoutubeIcon';

function YoutubeButton(props) {
  return (
    <div className="youtube-row">
      <a className="youtube-link" target="_blank" rel="noopener noreferrer" href={ props.url }>
        <img alt="youtube" src={ YouTubeLogo } className="yt-img" />
        {/*<YoutubeIcon color="red" size={30} />*/}
        <span>{ props.text || " Video tutorial" }</span>
      </a>
    </div>
  )
}

export default YoutubeButton;