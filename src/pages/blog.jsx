import './css/blog.css'
import BlogLists from "../components/Blog/BlogLists";
import Navbar from "../components/Home/NavBar/Navbar";


export default function updates() {
  return (
    <>
    <Navbar />
    <div className="blog__container">
    <BlogLists />
    </div>
    
    </>
  );
}
