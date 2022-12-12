import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



// A single Footer component that appears on multiple pages
export default function Project() {
    return (
      <div>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={require('../images/bleedForMe.png')} alt="Bleed for me"/>
          <Card.Body>
            <Card.Title>Bleed For Me</Card.Title>
            <Card.Text>
              A website where users can register to donate blood. 
            </Card.Text>
            <Button variant="primary" href="https://guarded-lowlands-27414.herokuapp.com/">Bleed for me website</Button>
            <Button variant="primary" href="https://github.com/Beanalini/vibratingParticles">Bleed for me GitHub</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={require("../images/trigger.png")} alt="Trigger"/>
          <Card.Body>
            <Card.Title>Trigger</Card.Title>
            <Card.Text>
              A website where animals in need can find a new home. 
            </Card.Text>
            <Button variant="primary" href="https://dashboard.heroku.com/apps/boiling-dusk-63403">Trigger website</Button>
            <Button variant="primary" href="https://github.com/capg84/trigger">Trigger GitHub</Button>
          </Card.Body>
        </Card>

      </div>
  );
}