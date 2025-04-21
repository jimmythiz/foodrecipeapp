import './HomeBlog.css' 
import { Link } from 'react-router-dom';
import BlogsCard from '../Blogs/BlogsCard';
import { useEffect } from 'react';
import { useState } from 'react';


const HomeBlog = () => {
    const [blogs, setBlogs] = useState([])
    const [error, setError] = useState(null);

    useEffect(()=>{
        const controller = new AbortController();
        fetch("/data.json",{ signal: controller.signal })
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


    return ( 
        <>
        <div className="homeblog-header"> 
                <h2>Blog</h2>
                <Link to='/blog' className="view-more-link">View more</Link>
        </div>
        <div className="blog-cards">
            <BlogsCard blogs={blogs.slice(0,3)}/>
        </div>    
        </>
     );
}
 
export default HomeBlog;