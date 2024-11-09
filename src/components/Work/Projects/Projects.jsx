import ProjectList from "../Projects/ProjectList/ProjectList";
import { useEffect, useState } from "react";
import "./Projects.css";
import {
  all,
  WebProjects,
  ECommerceProjects,
  ReBranding,
  EmailMarketing,
} from "./ProjectData/ProjectData";

export default function Projects() {
  const [selected, setSelected] = useState("all");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "all",
      title: "All",
    },
    {
      id: "website",
      title: "Web Projects",
    },
    {
      id: "e-commerce",
      title: "E-commerce Projects",
    },
    {
      id: "rebranding",
      title: "ReBranding",
    },
    {
      id: "marketing",
      title: "Email Marketing",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "all":
        setData(all);
        break;
      case "website":
        setData(WebProjects);
        break;
      case "e-commerce":
        setData(ECommerceProjects);
        break;
      case "rebranding":
        setData(ReBranding);
        break;
      case "marketing":
        setData(EmailMarketing);
        break;
      default:
        setData(all);
    }
  }, [selected]);

  return (
    <div className="project" id="project">
      <h1 className="project__header">WORK</h1>
      <p className="copy__header">Here is a collection of projects I've had the chance to work on. I'm also coding for a team over at Masterworks and lately I've been working on email marketing, branding and web development.</p>
      <ul className="project__pills">
        {list.map((item) => (
          <ProjectList
          key={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container__project">
        {data.map((d) => (
          <div className="item">
            <a href={d.code} target="_blank"> <img className="project__img" src={d.img} alt="" /></a>
            {/* <p className='project__name'> {d.title} </p> */}
            <a
              href={d.link}
              className="project__name"
              target="_blank"
              rel="noreferrer"
            >
              {d.title}
            </a>
            <div className="project__button">
              <a
                href={d.code}
                className="project__button1"
                target="_blank"
                rel="noreferrer"
              >
                Check it out
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
