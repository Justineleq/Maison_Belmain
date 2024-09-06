"use client";

import { Button, Card } from "react-bootstrap";

export default function ProductCard(props) {  <></>
    const { product } = props;
    
    return(
        <>
        <Card style={{ width: '18rem' }}>
                <div>
                    <Card.Img variant="top" src={product.image} />
                    <Card.Body>
                    <Card.Title>{product.flavour.name}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Button variant="primary">Buy me</Button>
                    </Card.Body>
                </div>
      </Card>
   </> 
   )

} 