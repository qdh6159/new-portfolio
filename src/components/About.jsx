import React from 'react';
import { Media, Jumbotron, Badge,ListGroup, ListGroupItem} from 'reactstrap';
// import { ListGroup, ListGroupItem } from "shards-react";

const About = () => {
  return (
    <div >
      <Jumbotron id="bazinga2" class="aboutDiv">
      
      <Media object src="https://raw.githubusercontent.com/qdh6159/new-portfolio/master/images/SphWTuiPR9C5NBvskNjSaQ_thumb_23ea.jpg" alt="Generic placeholder image" width="150px"/>
      <Media>
      
      <Media body>
      <h1><span class="aboutOne">About</span></h1>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </Media>
    </Media>

    <ListGroup>
      <ListGroupItem><span class="bold">Age:</span>25</ListGroupItem>
      <ListGroupItem><span class="bold">Born:</span> Shreveport, LA</ListGroupItem>
      <ListGroupItem><span class="bold">Raised:</span> Minden, LA</ListGroupItem>
      <ListGroupItem><span class="bold">Home:</span> Lafayette, LA</ListGroupItem>
      <ListGroupItem><span class="bold">Favorite Food: </span>Pizza</ListGroupItem>
      <ListGroupItem><span class="bold">Nickname: </span>Stingray</ListGroupItem>
      <ListGroupItem><span class="bold">Hobby:</span> Guitar, music production in a variety of genres including R&B/ Hip-Hop, Future-Funk, Blues-Rock & Country</ListGroupItem>
      
    </ListGroup>

      </Jumbotron>

      <Jumbotron>
      <Media body>
      <h1><span class="aboutOne">Work & Skill</span></h1>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      
    </Media>

    <ListGroup>
      <ListGroupItem><Badge   color="primary" size="xl">Javascript </Badge> ✅</ListGroupItem>
      <ListGroupItem><Badge  color="primary" size="xl">React</Badge> ✅</ListGroupItem>
      <ListGroupItem><Badge  color="primary" size="xl">CSS</Badge> ✅</ListGroupItem>
      <ListGroupItem><Badge  color="primary" size="xl">Express</Badge> ✅</ListGroupItem>
      <ListGroupItem><Badge  color="primary" size="xl">MongoDB</Badge> ✅</ListGroupItem>
      <ListGroupItem><Badge  color="primary" size="xl">Ruby | Rails  </Badge> ✅</ListGroupItem>
    </ListGroup>
      </Jumbotron>

      <Jumbotron>
      <Media body>
      <h1><span class="aboutOne">Education</span></h1>
       
      
    </Media>

    <ListGroup>
      <ListGroupItem><span class="bold">General Assembly</span> | Software Engineering Immersive | Lafayette, LA | <Badge pill color="success" size="xl"> 2019</Badge></ListGroupItem>
      <ListGroupItem><span class="bold">University of Louisiana</span> | Buisiness, Finance (B.S.B.A) | Lafayette, LA | <Badge pill color="success" size="xl">2016</Badge></ListGroupItem>
      <ListGroupItem><span class="bold">Glenbrook Highschool</span> | Minden, LA | <Badge pill color="success" size="xl">2012</Badge></ListGroupItem>
     
    </ListGroup>
      </Jumbotron>

      <Jumbotron id="bazinga3">
      <h1><span class="aboutOne">Contact</span></h1>
        <ListGroup>
      <ListGroupItem action><span class="bold">Phone:</span> +1(318)272-4790</ListGroupItem>
      <ListGroupItem action> <span class="bold">Email:</span> qdh6159@gmail.com</ListGroupItem>
      <ListGroupItem action tag="a" href="https://www.linkedin.com/in/quincy-hicks-308397b5/"><span class="bold">LinkedIn:</span> www.linkedin.com/in/quincy-hicks-308397b5</ListGroupItem>
      <ListGroupItem action tag="a" href="https://github.com/qdh6159"><span class="bold">GitHub:</span> github.com/qdh6159</ListGroupItem>
    </ListGroup>
      </Jumbotron>
    </div>
  );
};

export default About;


