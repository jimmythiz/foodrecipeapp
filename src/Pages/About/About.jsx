import './About.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Our Recipe Blog</h1>
      <p>
        Welcome to our recipe and food blog — your one-stop destination for delicious meals, creative ideas, and mouth-watering dishes from around the world! 🌍🍽️
      </p>
      <p>
        We believe that food brings people together, and through this platform, we're sharing not just recipes, but culture, stories, and the love for good cooking.
      </p>
      <p>
        Whether you're a seasoned chef or just starting out in the kitchen, there's something here for everyone. Explore new cuisines, try out unique cooking techniques, and get inspired by our passionate food creators.
      </p>
      
      <p className="about-cta">
        Ready to discover more? <Link to="/recipepage">Browse Recipes →</Link>
      </p>
    </div>
  );
};

export default About;
