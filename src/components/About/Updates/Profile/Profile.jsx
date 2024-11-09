import "./Profile.css";
import steph_profile from "../../../../assets/ProjectsDataImages/Updates/profile.png";
import background_profile from "../../../../assets/ProjectsDataImages/Updates/IMG_1994.png";
import pic1 from "../../../../assets/ProjectsDataImages/Updates/1.png";
import pic2 from "../../../../assets/ProjectsDataImages/Updates/2.png";
import pic3 from "../../../../assets/ProjectsDataImages/Updates/3.png";
import pic4 from "../../../../assets/ProjectsDataImages/Updates/4.png";
import pic5 from "../../../../assets/ProjectsDataImages/Updates/5.png";

import { MdOutlineDeveloperMode } from "react-icons/md";

export default function Profile() {
  return (
    <>
      <div className="profile">
        <div className="profile__container">
          <div className="profile__box">
            <img src={background_profile} alt="" className="background_pic" />
            <img
              src={steph_profile}
              alt="Stephanie profile pic"
              className="profile_pic"
            />
            <h4 className="profile_header">Stephanie Davis</h4>
            <p className="profile_title">@stephmarie</p>
            <p className="profile_copy">Web Developer and Designer</p>
            <a href="/about" className="profile_button">
              My Profile
            </a>
          </div>
        </div>
        <div className="skills_container">
          <div className="skills_box">
            <h4 className="skills_header">Skills</h4>
            <button className="skill_button">Web Dev</button>
            <button className="skill_button">UX/UI Design</button>
            <button className="skill_button">React</button>
            <button className="skill_button">HTML/CSS</button>
            <button className="skill_button">JavaScript</button>
            <button className="skill_button">Node</button>
            <button className="skill_button">Nextjs</button>
          </div>
        </div>
        <div className="communities_container">
          <div className="communities_box1">
            <h4 className="communities_header">Communities</h4>

            <div className="communities_box">
              <div className="communities_box_left">
                <img src={pic1} alt="" />
              </div>
              <div className="communities_box_right">
                <p className="communities_button">Web Dev Community</p>
                <p className="communities_copy">10 friends are online</p>
              </div>
            </div>

            <div className="communities_box">
              <div className="communities_box_left">
                <img src={pic5} alt="" />
              </div>
              <div className="communities_box_right">
                <p className="communities_button">Front End City</p>
                <p className="communities_copy">68 friends are online</p>
              </div>
            </div>

            <div className="communities_box">
              <div className="communities_box_left">
                <img src={pic2} alt="" />
              </div>
              <div className="communities_box_right">
                <p className="communities_button">UX Designers Space</p>
                <p className="communities_copy">42 friends are online</p>
              </div>
            </div>

            <div className="communities_box">
              <div className="communities_box_left">
                <img src={pic3} alt="" />
              </div>
              <div className="communities_box_right">
                <p className="communities_button">Devlifters</p>
                <p className="communities_copy">29 friends are online</p>
              </div>
            </div>

            <div className="communities_box">
              <div className="communities_box_left">
                <img src={pic4} alt="" />
              </div>
              <div className="communities_box_right">
                <p className="communities_button">REACTers 4 Life</p>
                <p className="communities_copy">2 friends are online</p>
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  );
}
