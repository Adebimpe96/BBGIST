
import Bloglist from "./Bloglist";
import useFetch from "./usefetch";
const Home = () => {
  const { data: blogs, loading, error } = useFetch('http://localhost:8000/blogsyar');
  return (
    <div className="home">
      {blogs && <Bloglist blogs={blogs} title='All Blogs' />}
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      
    </div>
  );
};

export default Home;
