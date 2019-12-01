import React from 'react';
import { Media, Jumbotron, Badge} from 'reactstrap';
import { ListGroup, ListGroupItem } from "shards-react";

const About = () => {
  return (
    <div >
      <Jumbotron class="aboutDiv">
      
      <Media object src="https://thumbs.dreamstime.com/z/hacker-21795383.jpg" alt="Generic placeholder image" width="150px"/>
      <Media>
      
      <Media body>
      <h1><span class="aboutOne">About Me</span></h1>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </Media>
    </Media>

    <ListGroup>
      <ListGroupItem>Age:25</ListGroupItem>
      <ListGroupItem>Born: Shreveport, LA</ListGroupItem>
      <ListGroupItem>Raised: Minden, LA</ListGroupItem>
      <ListGroupItem>Favorite Food: Pizza</ListGroupItem>
      <ListGroupItem>Hobby: Guitar & anything else involving music</ListGroupItem>
    </ListGroup>

    

      
      <Media body>
      <h1><span class="aboutOne">Work & Skill</span></h1>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      
    </Media>

    <ListGroup>
      <ListGroupItem><Badge pill  color="primary" size="xl">Javascript </Badge></ListGroupItem>
      <ListGroupItem><Badge pill color="primary" size="xl">React</Badge></ListGroupItem>
      <ListGroupItem><Badge pill color="primary" size="xl">Express</Badge></ListGroupItem>
      <ListGroupItem><Badge pill color="primary" size="xl">MongoDB</Badge></ListGroupItem>
      <ListGroupItem><Badge pill color="primary" size="xl">Ruby | Rails  </Badge></ListGroupItem>
    </ListGroup>

    <Media body>
      <h1><span class="aboutOne">Education</span></h1>
       
      
    </Media>

    <ListGroup>
      <ListGroupItem>General Assembly | Software Engineering Immersive | Lafayette, LA | <Badge pill color="success" size="xl"> 2019</Badge></ListGroupItem>
      <ListGroupItem>University of Louisiana | Buisiness, Finance (B.S.B.A) | Lafayette, LA | <Badge pill color="success" size="xl">2016</Badge></ListGroupItem>
      <ListGroupItem>Glenbrook Highschool | Minden, LA | <Badge pill color="success" size="xl">2012</Badge></ListGroupItem>
     
    </ListGroup>
    
      </Jumbotron>
      
    </div>
  );
};

export default About;

