import Typewriter from "./Typewriters/Typewriter.jsx";
import "./Header.css";
import HeaderSocials from "./HeaderSocials/HeaderSocials.jsx";
import { BsArrowRight } from "react-icons/bs";

export default function Header() {
  return (
    <>
      <div className="header">
        <h1 className="title__container">Stephanie <span className="last-name">Davis</span></h1>
        <h3 className="subtitle__container">Web Developer</h3>
        <div className="header__container">
          <HeaderSocials />
          <a href="/work" className="scroll__down">
            See Work
          </a>
        </div>
        <div className="typewriter">
        <Typewriter />
        </div>
      </div>
    </>
  );
}
