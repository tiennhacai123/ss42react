import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function B3() {
  return (
    <div>B3
        <div style={{display:'flex'}}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.ytimg.com/vi/XmC-0kHYe8A/maxresdefault.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div style={{display:'flex', gap:'20px'}}>
        <Button variant="primary">Go somewhere</Button>
        <p style={{marginTop:'5px'}}>30.000.000đ</p>
        </div>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://media.karousell.com/media/photos/products/2023/8/4/gaia_vandalion_sheriffcheapest_1691151285_871b70a2_progressive.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div style={{display:'flex', gap:'20px'}}>
        <Button variant="primary">Go somewhere</Button>
        <p style={{marginTop:'5px'}}>30.000.000đ</p>
        </div>
      </Card.Body>
    </Card>
    </div>
    </div>
  )
}
