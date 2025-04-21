import './SingleRecipe.css'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const SingleRecipe = () => {
    const {id} = useParams()
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
                        console.error(err.message);
                        setError(err.message);
                    }
                }
                );
                return () => controller.abort();
            },[]);

            const recipe = foods.find(food => String(food.id) === id);
            if (error) return <p className="error-message">{error}</p>;
            if (!recipe) return <p className="loading-message">Loading recipe...</p>;
          
    return ( 
        <div className='single-recipe-content '>
            <div className="current-recipe-link">
                <p><Link to='/recipepage'>Recipe</Link> &gt; <span>{recipe.title}</span></p>
            </div>
            <h2>{recipe.title}</h2>
            <img src={recipe.image} alt={recipe.description} />
            <p><strong>By:</strong> {recipe.chef}</p>
            <p><strong>Rating:</strong> ⭐ {recipe.rating}</p>
            <p><strong>Orders:</strong> {recipe.orders}</p>
            <h3>{recipe.description}</h3>
        
        </div>
     );
}
 
export default SingleRecipe;