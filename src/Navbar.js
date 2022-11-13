import {Link, useNavigate} from 'react-router-dom';

const Navbar = () => {
    const isAuthenticated = localStorage.getItem('authenticated');
    const navigate = useNavigate();
    const handleLogout = ()=>{
        localStorage.clear('authenticated')
        navigate("/")
    }
    return ( 
        <nav className="navbar">
            <h1>BBgist</h1>
            <div className="links">
               
               </div>
               {isAuthenticated && 
               <div>
                   <Link to="/home">Home</Link>
                   <Link to="/create" >Newblog</Link>
                   <Link to="/profile" >Profile</Link>
                     {/* <Link to="/register">Register</Link> */}
                        <Link to="/" onClick={handleLogout} >Logout</Link>
                        
               </div>
               }
        </nav>
        
     );
}
 
export default Navbar;