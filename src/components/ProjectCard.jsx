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
                </CardBody>
                <CardFooter style={{ textAlign: "left" }}>
                    <Button outline size="sm" style={{ marginRight: "10px" }}>Read more &rarr;</Button>
                    <Button outline size="sm" theme="secondary">Secondary</Button>
                </CardFooter>
            </Card>
            </Col> 

            <Col>
            <Card style={{ maxWidth: "700px" }, {width: "350px"}}>
                <CardImg style={{ maxHeight: "250px" }} src="https://images-na.ssl-images-amazon.com/images/I/61IL9YgWyrL.jpg" />
                <CardBody>
                <CardTitle>Lorem Ipsum</CardTitle>
                <p>Lorem ipsum dolor sit amet.</p>
                
                
                </CardBody>

                <CardFooter style={{ textAlign: "left" }}>
                    <Button outline size="sm" style={{ marginRight: "10px" }}>Read more &rarr;</Button>
                    <Button outline size="sm" theme="secondary">Secondary</Button>
                </CardFooter>
            </Card>
            </Col> 

            <Col>
            <Card style={{ maxWidth: "700px" }, {width: "350px"}}>
                <CardImg style={{ maxHeight: "250px" }} src="https://raw.githubusercontent.com/qdh6159/new-portfolio/master/images/Image%2011-25-19%20at%208.19%20AM.jpg" />
                <CardBody>
                <CardTitle>Lorem Ipsum</CardTitle>
                <p>Lorem ipsum dolor sit amet.</p>
                
                </CardBody>
                <CardFooter style={{ textAlign: "left" }}>
                    <Button outline size="sm" style={{ marginRight: "10px" }}>Read more &rarr;</Button>
                    <Button outline size="sm" theme="secondary">Secondary</Button>
                </CardFooter>
                
            </Card>
            </Col> 
            </Row>



        </Container>
    );
  }