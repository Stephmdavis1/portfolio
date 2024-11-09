import jewishvoice from "../assets/ProjectsDataImages/Mockups/jewishvoice.png";
import "./css/JewishVoice.css";

export default function JewishVoice() {
  return (
    <>
      <div className="box_container">
        <div className="jewishvoice_container">
          <img className="jewishvoice_img" src={jewishvoice} alt="" />
        </div>
      </div>
    </>
  );
}
