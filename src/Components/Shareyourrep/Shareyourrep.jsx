import { Link } from 'react-router-dom';
import './shareyourrep.css'

const herofood = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"
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