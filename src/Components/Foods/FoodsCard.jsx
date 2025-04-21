import { Link } from "react-router-dom";
import './FoodsCard.css'
const FoodsCard = ({foods}) => {
    if (!Array.isArray(foods)) {
        return <p>Loading recipes...</p>;
    }
return ( 
        <>
            {foods.map(food=>(
                food.id && food.image && (
                <Link  to={`/recipepage/${food.id}`} className="recipe-cards" key={food.id}>
                    <div className="recipe-image">
                        <img src={food.image} alt={food.title} loading="lazy" />
                    </div>
                    <div className="recipe-info">
                        <p className="recipe-rating">⭐ {food.rating}</p>
                            <h3 className="recipe-name">{food.title}</h3>
                            <div className="chef-details">
                                <p>By <strong>{food.chef}</strong></p>
                                <span>💬 {food.orders} Orders</span>
                            </div>
                    </div>
                </Link>
                )
            ))}
        </>
     );
}
 
export default FoodsCard;