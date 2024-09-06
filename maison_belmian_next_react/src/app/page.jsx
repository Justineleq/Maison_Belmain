"use client";

import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import CarouselHome from "./components/carouselHome/carouselHome";
import Navbar from "./components/navbar/navbar";
import HeroBanner from "./components/herobanner/herobanner";
import NavMenu from "./components/navMenu/navMenu";
import AboutMe from "./components/aboutMe/aboutMe";
import Footer from "./components/footer/footer";

export default function Home() {
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

  // console.log(data, 'all the way to homepage');
  return (
    <>
      <main>

        <Navbar />

        <NavMenu />

        <HeroBanner/>
          <div className="home-paragraph">
            <p>
                Specialising in birthday and wedding cakes, and luxury pastries, at Maison Belmain there are no limits, except your own imagination.
            </p>

            <p>Themed birthday cakes,
                wedding cakes, cookies & biscuits, number cakes, dry cakes & cupcakes, business gifts, sugar flowers.
            </p>
            <p>Party planning and complete packages, from invitations to decorations, all made and selected by hand.
                We pride ourselves on using the finest quality ingredients and aim to use local seasonal produce wherever possible. Our commitment to the environment includes the use of reusable and recyclable packaging.
            </p>
          </div>

        {loading && !error && <div>Trying to find pictures!</div>}
        {!loading && !error && data && <CarouselHome data={data} />}
        {!loading && error && <div>I can't find all the yummy pictures...</div>} 


        <AboutMe/>

      </main>
        <Footer/>
    </>
  );
}
