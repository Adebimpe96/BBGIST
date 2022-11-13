import { useParams } from "react-router-dom";
import useFetch from "./usefetch";
import { useNavigate } from "react-router-dom";
const Blogdetails = () => {
    const isAuthenticated = localStorage.getItem('authenticated');
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: blog, loading, error } = useFetch('http://localhost:8000/blogsyar/' + id);
    const handleClick = ()=>{
        fetch('http://localhost:8000/blogsyar/' + blog.id, {
            method:'DELETE'
        }).then(()=>{
            navigate("/home")
            alert("blog deleted successfully")
        })
    }
    return ( 
        <div className="blog-details">
            {loading && <div>Loading...</div>}
                {error && <div>{error}</div>}
              {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    {isAuthenticated && <button  className="delete-blog" onClick={handleClick}>Delete blog</button>}
                    {!isAuthenticated && <button disabled className="delete-blog" onClick={handleClick}>Delete blog</button>}
                    
                </article>
                )}
                
        </div>
     );
}
export default Blogdetails;