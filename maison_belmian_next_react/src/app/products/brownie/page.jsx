"use client";

import './style.css';
import Footer from "@/app/components/Includes/footer/footer";
import Navbar from "@/app/components/Includes/navbar/navbar";
import ProductCard from "@/app/components/productCard/productCard";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function BrowniePage() {
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

        // Filter through products to find brownie
        const onlyBrownieProducts = data.filter(
          (product) => product.category.type === "Brownie"
        );

        // set data to all the  brownie products
        setData(onlyBrownieProducts ? onlyBrownieProducts : []);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(true);
        setLoading(false);
      });
  }, []);

  console.group("Debug page brownie");
  console.log("Données récupérées : ");
  console.log(data ? data : "Aucune données récupérées");
  console.groupEnd();

    return(
      <>
        <main>
            <Navbar/>

            <div className="product-card-titles">
              <h2 className="title-product-page">Brownies</h2>
                <Image className="image-title-product-page"
                  src='/images/products/chocolate-brownies.jpg'
                  priority={true} 
                  alt= 'yummy brownie image'
                  width={200}
                  height={80}
                />
        </div>
        <div className="product-container">

 {/* If the fetch and filter is good then load  */}
            {data && data.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          {/* If the fetch is still loading  */}
          {!data && !error && loading && <p>Loading, please wait</p>}
          {/* If the fetch didn't work then error */}
          {!data && error && !loading && <p>An error occured, we're sorry ...</p>}
        </div>

        </main>
        <Footer/>
    </>
    );
}