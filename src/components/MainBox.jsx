import React from 'react';
import { Button } from 'reactstrap';
import CardTable from './CardTable'
import CardTable2 from './Profile'

function MainBox() {
    return (
      <div class="mainBox">
        {/* <h1> Main Box</h1> */}
        <CardTable />
        <CardTable2 />
      </div>
    );
  }
  
  export default MainBox;