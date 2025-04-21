import './Newsletter.css'

const Newsletter = () => {
    return ( 
    <div className="newsletter-section">
        <h2>Let's Stay in Touch</h2>
        <p>Join our newsletter, so that we reach out to you with our news and offers</p>
        <form action="" className="newsletter-form">
            <input type="text" placeholder="Enter your email" />
            <button type="submit" className='newsletter-button'>Subscribe</button>
        </form>
    </div>
     );
}
 
export default Newsletter;