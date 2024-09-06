"use client";

import Navbar from "@/app/components/navbar/navbar";
import ProductCard from "@/app/components/productCard/productCard";
import { useEffect, useState } from "react";

export default function BiscuitPage(){

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
    

    return(
        <main>
            <Navbar/>
            {data && data.map((product, index) => (
                <ProductCard key={index} product={product} />
            ))}

        </main>
    );
}