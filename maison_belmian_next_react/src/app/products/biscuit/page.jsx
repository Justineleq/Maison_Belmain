"use client";

import './style.css';
import Footer from "@/app/components/Includes/footer/footer";
import Navbar from "@/app/components/Includes/navbar/navbar";
import ProductCard from "@/app/components/productCard/productCard";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function BiscuitPage() {
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

        // sort through the table for "Biscuit".
        const onlyBiscuitProducts = data.filter(
          (product) => product.category.type === "Biscuit"
        );

        // save the 'biscuit' table in "data".
        setData(onlyBiscuitProducts ? onlyBiscuitProducts : []);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(true);
        setLoading(false);
      });
  }, []);

  console.group("Debug page Biscuit");
  console.log("Données récupérées : ");
  console.log(data ? data : "Aucune données récupérées");
  console.groupEnd();

    return(
      <>
        <main>
            <Navbar/>

            <div className="product-container">
              <h2 className="title-product-page">Biscuit</h2>
                <Image className="image-title-product-page"
                  src='/images/products/chocochip-cookies.jpg'
                  alt= 'yummy biscuit image'
                  width={200}
                  height={80}
                />
        </div>
 {/* If the fetch and sorting of the products went well, I display the list of products. */}
        <div className='organise-product-cards'>
            {data && data.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
        </div>
          {/* If the fetch is loading, I display an information message for the user */}
          {!data && !error && loading && <p>Loading, please wait</p>}
          {/* If the fetch has encountered an error, I display an informative message to the user */}
          {!data && error && !loading && <p>An error occured, we're sorry ...</p>}
        </main>
        <Footer/>
    </>
    );
}