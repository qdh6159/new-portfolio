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
  Col,
  Badge
} from "shards-react";



export default function ProjectCard() {
    return (
        <Container>
            <Row>
            <Col> 
            <Card  style={{ maxWidth: "700px" }, {width: "350px"}}>
                <CardImg class="clientImg" style={{ maxHeight: "250px" }} src="https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/20990/0220-FintechValuation_Dan_Social-ff4a6fd64fa0f8ae876cbca64d2dbbbc.png" />
                <CardBody>
                <CardTitle>Client Vault</CardTitle>
                <Badge pill>REACT</Badge><Badge pill>EXPRESS</Badge><Badge pill>HOOKS</Badge>
                <p>Lorem ipsum dolor sit amet.</p>
                </CardBody>
                <CardFooter style={{ textAlign: "left" }}>
                    <a href="https://master.d3lwsy1e3yia6j.amplifyapp.com/">
                    <Button disabled outline size="sm" style={{ marginRight: "10px" }}>Open &rarr;</Button>
                    </a>
                    <a href="https://github.com/qdh6159/ClientVault">
                    <Button outline size="sm" theme="secondary">GitHub</Button>
                    </a>
                </CardFooter>
            </Card>
            </Col> 

            <Col>
            <Card style={{ maxWidth: "700px" }, {width: "350px"}}>
                <CardImg style={{ maxHeight: "250px" }} src="https://images-na.ssl-images-amazon.com/images/I/61IL9YgWyrL.jpg" />
                <CardBody>
                <CardTitle>Rick's World API</CardTitle>
                <Badge pill>AJAX</Badge><Badge pill>JAVASCRIPT</Badge>
                <p>Lorem ipsum dolor sit amet.</p>
                
                
                </CardBody>

                <CardFooter style={{ textAlign: "left" }}>
                    <Button disabled outline size="sm" style={{ marginRight: "10px" }}>Open &rarr;</Button>
                    <a href="https://github.com/qdh6159/ricks-world">
                    <Button outline size="sm" theme="secondary">GitHub</Button>
                    </a>
                </CardFooter>
            </Card>
            </Col> 

            <Col>
            <Card style={{ maxWidth: "700px" }, {width: "350px"}}>
                <CardImg style={{ maxHeight: "250px" }} src="https://www.pngkey.com/png/detail/472-4723407_download-icon-free-png-resume-symbol.png" />
                <CardBody>
                <CardTitle>My Resume</CardTitle><br></br>
                <p>Lorem ipsum dolor sit amet.</p>
                
                </CardBody>
                <CardFooter style={{ textAlign: "left" }}>
                    
                <a href="https://drive.google.com/file/d/14FymJJvO2Jmups1ln4OaUPIQJgiJ5xQU/view?usp=sharing">
                    <Button outline size="sm" theme="secondary">View</Button>
                    </a>
                </CardFooter>
                
            </Card>
            </Col> 
            </Row>



        </Container>
    );
  }