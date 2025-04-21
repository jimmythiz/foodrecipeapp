import { Link } from "react-router-dom";
import './trendingrecipe.css'
import FoodsCard from "../Foods/FoodsCard";
import { useState, useEffect } from "react";


const Trendingrecipe = () => {
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
                    console.error(error.message);
                    setError(error.message);
                }
            }
            );
            return () => controller.abort();
        },[]);

        const trendingFoods = [...foods]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 3);

    return ( 
        <>
        <div className="trending-recipe-header"> 
            <h2>Trending Recipe</h2>
            <Link to='/recipepage' className="view-more-link">View more</Link>
        </div>
        <div className="recipe-grid">
            <FoodsCard foods={trendingFoods}/>
        </div>
        </>
     );
}
 
export default Trendingrecipe;