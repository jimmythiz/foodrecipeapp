import { Link } from "react-router-dom";
import FoodsCard from "../../Components/Foods/FoodsCard";
import { useState, useEffect } from "react";

const RecipePage = () => {
    const [foods, setFoods] = useState([])
    const [error, setError] = useState(null);

    useEffect(()=>{
        const controller = new AbortController()
        fetch(import.meta.env.BASE_URL + "data.json", { signal: controller.signal })

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

    return ( 
        <>
        <div className="trending-recipe-header"> 
            <h2>All Recipe</h2>
        </div>
        <div className="recipe-grid">
            <FoodsCard foods={foods}/>
        </div>
        </>
     );
}
 
export default RecipePage;