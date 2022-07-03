import BlogList from "../BlogList/BlogList";
import useFetch from "../FetchData/useFetch";

const Home = () => {
  const { blogs, isLoading, error } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="Blog List" />}
    </div>
  );
};

export default Home;
