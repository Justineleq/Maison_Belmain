"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

export default function Home() {
  
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {

      try {
        fetch("http://127.0.0.1:8000/api/products")
        .then((response) => response.json())
        .then((data) => {
          setLoading(false);
          setData(data);
          console.log(response);
        });
        
      } catch(error) {
        setError(true);
        setLoading(false);
      }
    }, []);


}
