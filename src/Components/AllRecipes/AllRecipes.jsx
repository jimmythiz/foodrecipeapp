import './AllRecipes.css'
import FoodsCard from '../Foods/FoodsCard';
import { Link } from 'react-router-dom';

import { useState, useEffect } from "react";


const AllRecipes = () => {
    const [foods, setFoods] = useState([])
    const [error, setError] = useState(null);

    useEffect(()=>{
        const controller = new AbortController()
            fetch("/data.json",{signal: controller.signal })
            .then(res=>{
                if (!res.ok){
                    throw Error('Could not fetch data');
                }
                return res.json();})
            .then(data =>{
                setFoods(data.recipes)
            }
            )
            .catch(error=>{
                if (error.name === "AbortError") {
                } else {
                    setError(err.message);
                }
            }
            );
            return () => controller.abort();
        },[]);

        const highestFoods = [...foods]
        .sort((a, b) => b.orders - a.orders)
        .slice(0, 3);

    return ( 
        <>
        <div className="all-recipe-header"> 
            <h2>Explore Recipe</h2>
            <Link to='/recipepage' className="view-more-link">View more</Link>
        </div>
        <div className="recipe-grid">
              <FoodsCard foods={highestFoods}/>
        </div>
        </>
     );
}
 
export default AllRecipes;