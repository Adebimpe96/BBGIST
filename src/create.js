import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Create = () => {
    const[title, setTitle] = useState('')
    const[body, setBody] = useState('')
    const [author, setAuthor] = useState('Linda Ikeji');
    const[loading,setloading] = useState(false)
   const navigate = useNavigate();

            const handleSubmit =(e)=>{
             e.preventDefault();
                const blog ={title, body, author};
                setloading(true);
                 fetch('http://localhost:8000/blogsyar', {
                     method: 'POST',
                     headers: {'Content-Type': 'application/json'},
                     body: JSON.stringify(blog)
                 }).then(()=>{
                     alert("blog added successfully")
                     console.log('New blog added')
                     setloading(false)
                     navigate("/home")
                 })
    }
    return (  
        <div className="create">
            <h2>Add a Newlog</h2>
            <form onSubmit={handleSubmit}>
            <label>Blog Title</label>
            <input 
            type="text"
            required
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
             />
             <label> Blog Body</label>
             <textarea  
             cols="30"
              rows="10"
              required
              value={body}
              onChange={(e)=> setBody(e.target.value)}
              ></textarea>
             <label>Blog Author</label>
             <select
             value={author}
             onChange={(e)=> setAuthor(e.target.value)}
             >
                 <option value ="Bukola Ojo">Bukola Ojo</option>
                 <option value = "Toke Makinwa">Toke Makinwa</option>
                 <option value= "Zaynab Adebimpe">Zaynab Adebimpe</option>
                 <option value ="Linda Ikeji">Linda Ikeji</option>
                 <option value ="Bukola ojo">Bukola Ojo</option>
             </select>
             { !loading && <button>Add blog</button>}
             { loading && <button disabled>Adding blog</button>}
             <p>{title}</p>
             <p>{ body }</p>
             <p>{ author }</p>
            </form>
            
        </div>
    );
}
 
export default Create;