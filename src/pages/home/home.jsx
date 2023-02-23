import "./home.scss";
import Stories from "../../components/stories/Stories";
import Share from "../../components/share/Share";
import Post from "../../components/posts/Posts.jsx";




const Home = () => {
  return <div className="home">
    <Stories/>
    <Share/>
    <Post/>

  </div>;
};

export default Home;
