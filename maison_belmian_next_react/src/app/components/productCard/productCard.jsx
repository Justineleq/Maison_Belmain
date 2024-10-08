"use client";

import { CartContext } from '@/AppContext';
import './productCard.css'

import { useContext } from 'react';

import { Button, Card } from "react-bootstrap";

export default function ProductCard(props) {
  const { product } = props;
  const {addToCart} = useContext(CartContext)

  return (
      <div className="product-card">
        <Card
          style={{
            width: "18rem",
          }}
        >
          <div>
            <Card.Img
              variant="top"
              src={`http://localhost:3000/images/products/${product.image}`}
            />
            <Card.Body className="card-body">
              <Card.Title className='card-title'>
                {product.flavour.name}
              </Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>Price : {product.finalPrice}€</Card.Text>
              <Card.Text>Quantity : {product.quantity.amount}</Card.Text>
              <Button className='card-btn'
                onClick={() => addToCart(product)} 
                >
                Buy me
              </Button>
            </Card.Body>
          </div>
        </Card>
      </div>
  );
}