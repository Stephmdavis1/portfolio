
import qgivimg from "../assets/ProjectsDataImages/Qgiv/fullscreennew.png";
import "../components/Work/Qgiv/Qgiv.css";

export default function Pardot() {
  return (
    <>
      <div className="port__container_qgiv">
        <div className="qgiv__container1"></div>
        <div className="qgiv__container3"></div>
      </div>

      <div className="brand__box_qgiv">
        <div className="brand__left_qgiv">
          <h3>Building the Brand Vision</h3>
        </div>
        <div className="brand__right_qgiv">
          <h6 className="brand__title2_qgiv">Design Sprint</h6>
          <div className="brand__description_qgiv">
            <p>
              This project included 2 designers, a optimization specialist and myself. The purpose of this design sprint was to create a variant of the current control donation page for our client. What we were finding was that the current donation page was a little overcrowded with copy and was causing issues when the user was going to donate to the organization. There was a lot of information on the page and this pushed the actual donation portion further down when the user lands on the donation page. During our sprint we worked on 3 big changes this page would go through.
            </p>
            <br />
            <p>
              Because design needs to be completed before coding, a popular
              solution is a dual track process. Development sprint follows
              Design sprint like a mini waterfall. My role in the design sprint was to show the designers the options of the donation platform software along with my code. Making sure that all the design ideas would logically work once I started building the page.
            </p>
            <br />
            <p>
              We landed on three solid changes: 1. Instead of making the donation page a two-column layout, we would make it into a single column allowing the donation form to be visible when the page loads. 2. Instead of having a bunch of copy explaining where the donation goes once a user has given, we made that text into a simple image that would live at the top of the form. And when the page is viewed on mobile the image turns into a gif that scrolls through the same copy. This turned out great and kept the donation form from being too long on a mobile screen. 3. The final change was moving the secure payment copy and award icons as close to the "give" button as possible to make sure the user felt safe during the checkout process.
            </p>
          </div>
        </div>
      </div>

      <video
        src="https://drive.google.com/file/d/19PrdvOGQjis-ibv8cBl34KYZmxUL6oj7/view?usp=share_link"
        controls
        type="video/mp4"
        className="img__container_qgiv"
      />

      <div className="brand__box_qgiv2">
        <div className="brand__left_qgiv">
          <h3>The Turnout</h3>
        </div>
        <div className="brand__right_qgiv2">
          <h6 className="brand__title2_qgiv"></h6>
          <div className="brand__description_qgiv">
            <p>
              This donation page turned out great and was a fun buildout for me. I was able to work along side the designers to create an amazing new layout for the donation page. The hope is that this page can be tested among the control to see which page creates a better experience for the end user and for the client as well. This page will begin its optimization testing in the coming weeks and the results of it will help to create a better process for all future donation pages.
            </p>
           
          </div>
        </div>
      </div>
      <img src={qgivimg} alt="" className="img__container_qgiv2" />
    </>
  );
}
