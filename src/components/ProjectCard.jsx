import React from 'react';

import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button,
  Container,
  Row,
  Col
} from "shards-react";



export default function ProjectCard() {
    return (
        <Container>
            <Row>
            <Col> 
            <Card style={{ maxWidth: "700px" }, {width: "350px"}}>
                <CardImg style={{ maxHeight: "250px" }} src="https://raw.githubusercontent.com/qdh6159/new-portfolio/master/images/Image%2011-25-19%20at%208.19%20AM.jpg" />
                <CardBody>
                <CardTitle>Lorem Ipsum</CardTitle>
                <p>Lorem ipsum dolor sit amet.</p>
                <Button>Read more &rarr;</Button>
                </CardBody>
            </Card>
            </Col> 

            <Col>
            <Card style={{ maxWidth: "700px" }, {width: "350px"}}>
                <CardImg style={{ maxHeight: "250px" }} src="https://raw.githubusercontent.com/qdh6159/new-portfolio/master/images/Image%2011-25-19%20at%208.19%20AM.jpg" />
                <CardBody>
                <CardTitle>Lorem Ipsum</CardTitle>
                <p>Lorem ipsum dolor sit amet.</p>
                <Button>Read more &rarr;</Button>
                </CardBody>
            </Card>
            </Col> 

            <Col>
            <Card style={{ maxWidth: "700px" }, {width: "350px"}}>
                <CardImg style={{ maxHeight: "250px" }} src="https://raw.githubusercontent.com/qdh6159/new-portfolio/master/images/Image%2011-25-19%20at%208.19%20AM.jpg" />
                <CardBody>
                <CardTitle>Lorem Ipsum</CardTitle>
                <p>Lorem ipsum dolor sit amet.</p>
                <Button>Read more &rarr;</Button>
                </CardBody>
            </Card>
            </Col> 
            </Row>



        </Container>
    );
  }