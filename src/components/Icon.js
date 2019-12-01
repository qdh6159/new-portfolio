import React from 'react';

import { faTwitter } from '@fortawesome/fontawesome-free-brands/faTwitter'

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaArrowCircleDown } from 'react-icons/fa';

 
class Question extends React.Component {
  render() {
    
    return (
    <div>
         <h3 > <FaArrowCircleDown  class="fa-fish" /></h3>
         <h3><FontAwesomeIcon icon={faTwitter} />  </h3>
     </div>
    )
  }
}

export default Question

