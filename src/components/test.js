import React from 'react';
import { Media, Jumbotron, Badge} from 'reactstrap';
import { ListGroup, ListGroupItem } from "shards-react";

const About = () => {
  return (
    <div >
      <Jumbotron id="bazinga2" class="aboutDiv">
      
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

    <Jumbotron />

      <Jumbotron>
      
      <span class="aboutOne">Work & Skill</span>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      
   

    <ListGroup>
      <ListGroupItem><Badge pill  color="primary" size="xl">Javascript </Badge></ListGroupItem>
      <ListGroupItem><Badge pill color="primary" size="xl">React</Badge></ListGroupItem>
      <ListGroupItem><Badge pill color="primary" size="xl">CSS</Badge></ListGroupItem>
      <ListGroupItem><Badge pill color="primary" size="xl">Express</Badge></ListGroupItem>
      <ListGroupItem><Badge pill color="primary" size="xl">MongoDB</Badge></ListGroupItem>
      <ListGroupItem><Badge pill color="primary" size="xl">Ruby | Rails  </Badge></ListGroupItem>
    </ListGroup>
    </Jumbotron>

    <Jumbotron />
    <Media body>
      <h1><span class="aboutOne">Education</span></h1>
       
      
    </Media>

    <ListGroup>
      <ListGroupItem>General Assembly | Software Engineering Immersive | Lafayette, LA | <Badge pill color="success" size="xl"> 2019</Badge></ListGroupItem>
      <ListGroupItem>University of Louisiana | Buisiness, Finance (B.S.B.A) | Lafayette, LA | <Badge pill color="success" size="xl">2016</Badge></ListGroupItem>
      <ListGroupItem>Glenbrook Highschool | Minden, LA | <Badge pill color="success" size="xl">2012</Badge></ListGroupItem>
     
    </ListGroup>
    
      </Jumbotron>
      

      <Jumbotron id="bazinga3">
        <h1><span class="aboutOne">Contact</span></h1>
        <ListGroup>
      <ListGroupItem>Phone: +1(318)272-4790</ListGroupItem>
      <ListGroupItem>Email: qdh6159@gmail.com</ListGroupItem>
      
    </ListGroup>
      </Jumbotron>
    </div>
  );
};

export default About;
