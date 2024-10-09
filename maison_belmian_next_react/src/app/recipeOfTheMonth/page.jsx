"use client";

import './style.css';

import { Image } from "react-bootstrap";
import Footer from "../components/Includes/footer/footer";
import Navbar from "../components/Includes/navbar/navbar";
import { useEffect, useState } from "react";

export default function RecipeOfTheMonth() 
{
   const [recipes, setRecipe]= useState([]);

        useEffect(() => {
            const fetchSelectedRecipes = async () => {
                const reponse = await fetch("http://127.0.0.1:8000/recipeofthemonths");
                const data = await reponse.json();
                setRecipe(data);
            };

            fetchSelectedRecipes();
        }, [])
    

    // console.log(data(), 'ROTM');
    

    return(
        <>
            <main>
                <Navbar/>
            <div className="rotm-container">
                <div className="rotm">
                    <h2 className="title-bespoke-page">Recipe of the month</h2>
                </div>
            </div>

        {recipes.length === 0 ? (
            //insert image here, maybe a sad cake?
            <p>
                No recipes this month 
            </p>
        ) : (
            <div>
                {recipes.map((recipe) => (
                    <div>
                        <div key={recipe.id} className="bespoke-img">
                        
                            <Image className="img-ROTM"
                                src={recipe.image}
                                height={200}
                                width={100}
                                >
                            </Image>
                            
                    </div>
                    <div>
                        <p className="ROTM-paragraph">
                            {recipe.description}
                        </p>
                    </div>
                </div>

                ))}

            </div>

        )}

            </main>
            <Footer/>
            
        </>
    );
}
