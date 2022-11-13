import Home from './home';
import Navbar from './Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Create from './create';
import Blogdetails from './blogdetails';
import Login from './login';
import Register from './Register';
import PrivateRoute from './privateroute';
import Profile from './profile';
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="main">
        <Routes>
          <Route path = "/home" element={<Home />} />
          <Route path = "/create" element={<PrivateRoute><Create/></PrivateRoute>} />
          <Route path = "/blogs/:id" element = {<Blogdetails/>} />
          <Route path = "/profile" element = {<Profile/>} />
          <Route path = "/" element = {<Login/>} />
          <Route path = "/Register" element = {<Register/>} />
          </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
