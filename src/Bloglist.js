import {Link} from 'react-router-dom'
import avatar from '../src/Images/avatar.jpg'
const Bloglist = ({blogs,title}) => {
    return (
        <div className="blog-list">
            <h2 id="blog-list" >{title}</h2>
            {blogs.map((blog) =>(
         <div className="blog-preview" key={blog.id}>
           <Link to={`/blogs/${blog.id}`}>
              <h2>{blog.title}</h2>
              
             <p> <img src= {avatar} alt='profile-display' className='image'/>This post was written by {blog.author}</p>
             </Link> 
         </div>   
        ))}
        </div>
      );
};
 
export default Bloglist;