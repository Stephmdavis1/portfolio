import Feed from "../components/About/Updates/Feed/Feed";
import Friends from "../components/About/Updates/Friends/Friends";
import Profile from "../components/About/Updates/Profile/Profile";
import Navbar from "../components/Home/NavBar/Navbar";
import "./css/updates.css";

export default function NewProject() {
  return (
    <>
      <div className="update__container">
      <Navbar />
        <div className="splitter">
          <Profile />
          <Feed />
          <Friends />
        </div>
      </div>
    </>
  );
}
