import { Link } from 'react-router-dom';
import herofood from '../../assets/images/hero food.jpg' 
import { useAuth } from '../../AuthContext';

import './hero.css'
const Hero = () => {
    const { isUserLoggedIn  } = useAuth();
    return ( 
        <div className='hero-div'>
            <div className='hero-div-text'>
                <h1>Your Daily Dish </h1>
                <h2>A food Journey</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos ullam molestiae soluta temporibus et itaque dolores repudiandae? A velit aliquam nesciunt ea quo quam ab libero? Beatae quod itaque amet?</p>
                {isUserLoggedIn ? <></>:<>
                    <button className='hero-btn'><Link to='/signup'>Sign Up</Link></button>
                    <p>Do you have an account? <Link to='/login' className='login-redirect'>Log in</Link></p>
                </>}
                
            </div>
            <div className='hero-div-image'>
                <img src={herofood} alt="a very delicious looking meal" />
            </div>
        </div>
     );
}
 
export default Hero;