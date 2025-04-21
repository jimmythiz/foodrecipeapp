import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import './SingleBlog.css';

const SingleBlog = () => {
    const {id} = useParams()
    const [blogs, setBlogs] = useState([])
    const [error, setError] = useState(null);

    useEffect(()=>{
        const controller = new AbortController();
        fetch(import.meta.env.BASE_URL + "data.json", { signal: controller.signal })

        .then(res=>{
            if (!res.ok){
                throw Error('Could not fetch data');
            }
            return res.json();})
        .then(data =>{
            setBlogs(data.blogs)
        }
        )
        .catch(error=>{
            if (error.name === "AbortError") {
            } else {
                setError(error.message);
                console.error(error.message);
            }
        }
        );
        return () => controller.abort();
    },[]);

        const blog = blogs.find(blog => String(blog.id) === id);
            if (error) return <p className="error-message">{error}</p>;
            if (!blog) return <p className="loading-message">Loading blog...</p>;

    return ( 
        <div className="single-blog">
      <div className="blog-breadcrumb">
        <Link to="/blog">← Back to Blogs</Link>
      </div>

      <h1 className="blog-title">{blog.title}</h1>
      <img src={blog.image} alt={blog.title} className="blog-image" />

    

      <div className="blog-body">
        <p>{blog.content || blog.snippet}</p>
      </div>
    </div>
     );
}
 
export default SingleBlog;