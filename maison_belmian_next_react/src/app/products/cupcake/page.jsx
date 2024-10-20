"use client";

import './style.css';
import Footer from "@/app/components/Includes/footer/footer";
import Navbar from "@/app/components/Includes/navbar/navbar";
import ProductCard from "@/app/components/productCard/productCard";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function CupcakePage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setLoading(false);

        const onlyCupcakeProducts = data.filter(
          (product) => product.category.type === "Cupcake"
        );

        setData(onlyCupcakeProducts ? onlyCupcakeProducts : []);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(true);
        setLoading(false);
      });
  }, []);

  console.group("Debug page Cupcake");
  console.log("Données récupérées : ");
  console.log(data ? data : "Aucune données récupérées");
  console.groupEnd();

    return(
      <>
        <main>
            <Navbar/>

            <div className='product-card-titles'>
              <h2 className="title-product-page">Cupcakes</h2>
                <Image className="image-title-product-page"
                  src='/images/products/Cupcakes-red-velvet.jpg'
                  alt= 'yummy cupcake image'
                  width={200}
                  height={80}
                />
            </div>
          <div className="product-container">
            {data && data.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
            {!data && !error && loading && <p>Loading, please wait</p>}
            {!data && error && !loading && <p>An error occured, we're sorry ...</p>}
          </div>
        </main>
        <Footer/>
    </>
    );
}