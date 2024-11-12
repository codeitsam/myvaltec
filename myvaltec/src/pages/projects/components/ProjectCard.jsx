
import {React, useEffect} from "react";
import { Card } from "react-bootstrap";
import AOS from 'aos';


function ProjectCard({ title, description, imgSrc }) {
  useEffect(()=>{
    AOS.init({
      duration:1050,
      offset:50,
    })
  })
  return (
    <Card className="shadow-sm h-100" data-aos="fade-up">
      <Card.Img variant="top" src={imgSrc} data-aos="fade-up"/>
      <Card.Body>
        <Card.Title data-aos="fade-up" data-aos-delay="300">{title}</Card.Title>
        <Card.Text data-aos="fade-up" data-aos-delay="500">{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
