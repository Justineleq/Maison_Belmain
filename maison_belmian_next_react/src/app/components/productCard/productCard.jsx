"use client";

import { Button, Card } from "react-bootstrap";

export default function ProductCard(props) 
{  
    const { product } = props;

    return(
        <div 
            style={{ 
                display: 'flex',
                justifyContent: 'center', 
                margin: '15px'}}>
            <Card 
                style={{ 
                    width: '18rem' }}>
                    <div>
                        <Card.Img variant="top" src={`http://localhost:3000/images/products/${product.image}`} />
                        <Card.Body 
                            style={{ 
                                display: 'flex', 
                                flexDirection: 'column', 
                                alignItems: 'center'}}>
                        <Card.Title 
                            style={{ 
                                fontWeight: 'bold' }}
                                >{product.flavour.name}</Card.Title>
                        <Card.Text>{product.description}</Card.Text>
                        <Button 
                            style={{ 
                                backgroundColor: '#7FCCD8', 
                                border: '#7FCCD8'}} 
                                variant="primary">Buy me</Button>
                        </Card.Body>
                    </div>
            </Card>
         </div> 
   )
   

} 