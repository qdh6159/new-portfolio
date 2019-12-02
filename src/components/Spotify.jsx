import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCoffee} from'@fortawesome/free-solid-svg-icons'

import {faFacebookSquare, faLinkedin, faGithubSquare, faSpotify} from '@fortawesome/fontawesome-free-brands'


class Spotify extends React.Component {
  render() {
    return(
    <div>
        <a href="https://www.linkedin.com/in/quincy-hicks-308397b5/"><FontAwesomeIcon icon={faLinkedin} size="4x" color="grey" /></a>
        <a href="https://github.com/qdh6159"><FontAwesomeIcon icon={faGithubSquare} size="4x" color="grey" /></a>
        <a href="https://www.facebook.com/quincy.hicks"><FontAwesomeIcon icon={faFacebookSquare} size="4x"  color="grey"/></a>
        <a href="https://open.spotify.com/user/1254262036?si=4oaPmyL1SuKplONC1c0RMg"><FontAwesomeIcon icon={faSpotify} size="4x"  color="grey"/></a>
    
    </div>
    )
  }
}

export default Spotify