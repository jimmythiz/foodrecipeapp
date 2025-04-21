import { Link } from 'react-router-dom';
import herofood from '../../assets/images/hero food.jpg' 
import './shareyourrep.css'

const Shareyourrep = () => {
    return ( 
        <div className='shareyourrep-div'>
            <div className='shareyourrep-div-image'>
                <img src={herofood} alt="a very delicious looking meal" />
            </div>
            <div className='shareyourrep-div-text'>
                <h2>Share Your Recipes </h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos ullam molestiae soluta temporibus et itaque dolores repudiandae? A velit aliquam nesciunt ea quo quam ab libero? Beatae quod itaque amet?</p>
                <button className='share-btn'><Link to='/addrecipe' >Create New Recipe</Link></button>
            </div>
        </div>
     );
}
 
export default Shareyourrep;