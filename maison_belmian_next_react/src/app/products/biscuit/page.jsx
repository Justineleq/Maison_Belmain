"use client";

import Footer from "@/app/components/Includes/footer/footer";
import Navbar from "@/app/components/Includes/navbar/navbar";
import ProductCard from "@/app/components/productCard/productCard";
import Image from "next/image";
import { useEffect, useState } from "react";


export default function BiscuitPage()
{

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState(null);
    // const [carouselImages, setCarouselImages] = useState();
  
    useEffect(() => {
      fetch('http://127.0.0.1:8000/api/products')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setLoading(false);
          setData(data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setError(true);
          setLoading(false);
        });
    }, []);

    console.log(data, 'biscuit page');
    
    const isBiscuit = data ? data.filter(product => product.category.type === 'Biscuit') : [];
    console.log(isBiscuit, 'is biscuit');

    return(
      <>        
        <main>
              <Navbar/>

              <div style={{ display: "flex", justifyContent: "center"}}>
                <h2 className="title-product-page"
                  style={{
                    position: 'absolute',
                    color: 'white',
                    textDecoration: 'underline',
                    textUnderlineOffset: '4px',
                    zIndex: '1'
                }}>Biscuits</h2>
                  <Image className="image-title-product-page"
                  style={{ 
                    position: 'relative',
                    display: 'flex', 
                    borderRadius: '10px',

                  }}
                    src='/images/products/sj-YDvfndOs4IQ-unsplash.jpg'
                    alt= 'yummy biscuit image'
                    width={200}
                    height={80}
                  />
          </div>

              {isBiscuit && isBiscuit.map((product, index) => (
                  <ProductCard key={index} product={product} />
              ))}

      </main>

            <Footer/>
    </>

    );
}