import { Link } from "react-router-dom";
import './BlogsCard.css'
const BlogsCard = ({blogs}) => {
    return ( 
        <>
        {blogs.map(blog =>(
            <Link to={`/blog/${blog.id}`} className="blog-card" key={blog.id}>
            <div className="blog-image">
                <img src={blog.image} alt="" loading="lazy"/>
            </div>
            <div className="blog-info">
                <p className="blog-title">{blog.title}</p>
                <p className="blog-summary">{blog.snippet}</p>
            </div>
        </Link>
        )
        )}
        
        </>
     );
}
 
export default BlogsCard;