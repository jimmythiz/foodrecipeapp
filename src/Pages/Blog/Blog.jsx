import HomeBlog from '../../Components/HomeBlog/HomeBlog'
import BlogsCard from '../../Components/Blogs/BlogsCard';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const Blog = () => {
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

    return ( 
        <>
        <div className="homeblog-header"> 
                <h2>Blogs</h2>
        </div>
        <div className="blog-cards">
            <BlogsCard blogs={blogs}/>
        </div>
        </>
     );
}
 
export default Blog;