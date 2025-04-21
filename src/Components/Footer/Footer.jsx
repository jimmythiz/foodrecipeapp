import { Link } from "react-router-dom";
import './footer.css'
import { FaTiktok, FaFacebookF, FaInstagram, FaPinterestP,FaTwitter } from 'react-icons/fa';

const Footer = () => {
    const year = new Date().getFullYear();
    return ( 
        <>
        <div className="footer-row-1">
        <div className="footer-section-1">
                <p>Perfect<span>Recipe</span></p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At corporis ut expedita voluptatem, consequatur porro commodi molestiae quas similique aut voluptate.</p>
            </div>
            <div className="footer-section-2">
                <div className="quick-links">
                    <p>Quick Links</p>
                    <Link to='/'>Home</Link>
                    <Link to='/recipepage'>Recipes</Link>
                    <Link to='/blog'>Blogs</Link>
                </div>
                <div className="quick-links-2">
                    <p>Quick Links</p>
                    <Link to='/'>Home</Link>
                    <Link to='/recipepage'>Recipes</Link>
                    <Link to='/blog'>Blogs</Link>
                </div>
                <div className="quick-links-3">
                    <p>Legal</p>
                    <Link to='/about'>Terms of use</Link>
                    <Link to='/about'>Privacy & Cookies</Link>
                </div>
            </div>
            <div className="footer-section-3">
                <p>Newsletter</p>
                <p>Subscribe to our newsletter to get more free tips</p>
                <form action="">
                    <input type="text" placeholder="Enter your email" />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </div>
            <hr />
        <div className="footer-row-2">
            <div className="footer-section-4">
                <p>&copy;{year}. All Right Reserved </p>
            </div>
            <div className="footer-section-5">
                <FaTiktok />
                <FaTwitter />
                <FaFacebookF />
                <FaInstagram />
                <FaPinterestP />
            </div>
        </div>
        </>
     );
}
 
export default Footer;