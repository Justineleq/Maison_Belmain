"use client";

import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

export default function ProductCard(props) 
{  
    const { product } = props;

    const [addProduct, setAddProduct] = useState([])

    function addProductToCart() 
    {
        setAddProduct([...addProduct, product]);

        // console.log(addProduct);   
    }

        // Use useEffect to log the updated product list whenever it changes
        useEffect(() => {
            console.log(addProduct);
        }, [addProduct]);

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
                        <Card.Text>Price: {product.finalPrice}€</Card.Text>
                        <Card.Text>Quantity: {product.quantity.amount}</Card.Text>
                        <Button onClick={addProductToCart}
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