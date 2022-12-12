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


{/* <Row xs={1} md={2} className="g-4">
{Array.from({ length: 4 }).map((_, idx) => (
  <Col>
    <Card>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a longer card with supporting text below as a natural
          lead-in to additional content. This content is a little bit
          longer.
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
))}
</Row>
);
} */}