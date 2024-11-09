import { useEffect, useState } from "react";
import "./Feed.css";
import { AiFillHeart } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";

import {
  RecentlyBuilt,
  Newthings,
  SideProjects,
  Resume,
  Podcasts,
} from "../Feed/FeedData/FeedData";
import FeedList from "../../../About/Updates/Feed/FeedList/FeedList";

export default function Feed() {
  const [selected, setSelected] = useState("recently");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "recently",
      title: "Recently Built",
    },
    {
      id: "new",
      title: "New things",
    },
    {
      id: "side",
      title: "Side Projects",
    },
    {
      id: "resume",
      title: "Resume",
    },
    {
      id: "podcasts",
      title: "Podcasts",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "recently":
        setData(RecentlyBuilt);
        break;
      case "new":
        setData(Newthings);
        break;
      case "side":
        setData(SideProjects);
        break;
      case "podcasts":
        setData(Podcasts);
        break;
      case "resume":
        setData(Resume);
        break;
      default:
        setData(RecentlyBuilt);
    }
  }, [selected]);

  return (
    <>
      <div className="feed__container">
        <ul className="feed__pills">
          {list.map((item) => (
            <FeedList
              key={item.id}
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
          ))}
        </ul>
        <div className="container__feed">
          {data.map((d) => (
            <div className="feed_item" key={d.id}>
              <div className="feed_title">
                <p className="feed_title_left">
                  <img className="feed__img" src={d.profilepic} alt="" />
                </p>
                <div className="feed_title_right">
                  <p className="feed_title_right_username">{d.username}</p>
                  <p className="feed_title_right_title">{d.name}</p>
                  <p className="feed_title_right_date">{d.date}</p>
                </div>
                <div className="feed_dots">
                  <BsThreeDotsVertical />
                </div>
              </div>

              <div className="feed_copy">
                <p className="feed_copy1">{d.copy1}</p>
                <p className="feed_copy2">{d.copy2}</p>
                <a href={d.link} target="_blank">Read More</a>
              </div>
              <div className="feed_img">
                <a href="/SMF" target="_blank"><img src={d.img} alt="" /></a>
              </div>
              <div className="feed_icon">
                <AiFillHeart />
                <a
                  href="mailto:stephmdavis1@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="contact__message"
                >
                  <button className="btn_feed">Send me a note </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
