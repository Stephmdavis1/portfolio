import "./Friends.css";
import friend_data from "./FriendData/FriendData";
import Item from "./FriendItems/Item";
import p1_img from "../../../../assets/ProjectsDataImages/Updates/Friends/image1.png";
import p2_img from "../../../../assets/ProjectsDataImages/Updates/Friends/image2.png";
import p3_img from "../../../../assets/ProjectsDataImages/Updates/Friends/image3.png";
import p4_img from "../../../../assets/ProjectsDataImages/Updates/Friends/image4.png";
import p8_img from "../../../../assets/ProjectsDataImages/Updates/Friends/image8.png";
import p6_img from "../../../../assets/ProjectsDataImages/Updates/Friends/image6.png";
import p7_img from "../../../../assets/ProjectsDataImages/Updates/Friends/image7.png";

export default function Friends() {
  return (
    <>
      <div className="friend__container">
      <h4 className="friends_header">Friends Stories</h4>
        <div className="friend">
          <div className="popular-item">
            {[...friend_data].map((item, i) => {
              return (
                <Item
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                />
              );
            })}
          </div>
        </div>
        <div className="communities_container_friend">
          <div className="communities_box1">
            <h4 className="communities_header_friend">Friends Online</h4>

            <div className="communities_box_friend">
              <div className="communities_box_left_friend">
                <img src={p1_img} alt="" />
              </div>
              <div className="communities_box_right_friend">
                <p className="communities_button_friend">Michelle Jaharris</p>
                <p className="communities_copy_friend">Project Manager</p>
              </div>
            </div>

            <div className="communities_box_friend">
              <div className="communities_box_left_friend">
                <img src={p2_img} alt="" />
              </div>
              <div className="communities_box_right_friend">
                <p className="communities_button_friend">Brandon John Smith</p>
                <p className="communities_copy_friend">Web Developer</p>
              </div>
            </div>

            <div className="communities_box_friend">
              <div className="communities_box_left_friend">
                <img src={p3_img} alt="" />
              </div>
              <div className="communities_box_right_friend">
                <p className="communities_button_friend">Sabryna Spanx</p>
                <p className="communities_copy_friend">UX Designer</p>
              </div>
            </div>

            <div className="communities_box_friend">
              <div className="communities_box_left_friend">
                <img src={p4_img} alt="" />
              </div>
              <div className="communities_box_right_friend">
                <p className="communities_button_friend">Natasha Browlhoun</p>
                <p className="communities_copy_friend">HR Specialist</p>
              </div>
            </div>

            <div className="communities_box_friend">
              <div className="communities_box_left_friend">
                <img src={p8_img} alt="" />
              </div>
              <div className="communities_box_right_friend">
                <p className="communities_button_friend">Mitchell Wilth</p>
                <p className="communities_copy_friend">Full Stack Developer</p>
              </div>
            </div>

            <div className="communities_box_friend">
              <div className="communities_box_left_friend">
                <img src={p6_img} alt="" />
              </div>
              <div className="communities_box_right_friend">
                <p className="communities_button_friend">Brooklyn Padilla</p>
                <p className="communities_copy_friend">UX/UI Designer</p>
              </div>
            </div>

            <div className="communities_box_friend">
              <div className="communities_box_left_friend">
                <img src={p7_img} alt="" />
              </div>
              <div className="communities_box_right_friend">
                <p className="communities_button_friend">Vivianne Mavis</p>
                <p className="communities_copy_friend">Web Designer</p>
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  );
}
