import pardotcode from "../assets/ProjectsDataImages/Pardot/pardotcode.png";
import "../components/Work/Pardot/pardot.css";

export default function pardotTwo() {
  return (
    <>
      <div className="port__container_pardot">
        <div className="pardot__container1"></div>
        <div className="pardot__container3"></div>
      </div>

      <div className="brand__box_pardot">
        <div className="brand__left_pardot">
          <h3>Building the Brand Vision</h3>
        </div>
        <div className="brand__right_pardot">
          <h6 className="brand__title2_pardot">The Issue</h6>
          <div className="brand__description_pardot">
            <p>
              I've been digging deep into Salesforce and all it has to offer its
              clients. I've even attended a couple Salesforce Dreamforce
              Conferences and love learning about the new features each platform
              has to offer. The latest project I've been working on is Landing
              Pages for our clients specifically built with Pardot - now called
              Marketing Cloud Account Engagement.
            </p>
            <br />
            <p>
              Our clients use Landing pages to collect information from users
              and then use their name and email in a built automation that sends
              custom email content out to each person that signed up. Up until
              this point, our client was using pre-built templates in Pardot to
              create these Landing Pages. The problem was that Pardots pre-built
              templates are not mobile responsive which in 2024 is honestly
              unacceptable. This caused the client and designers to have to stick to
              strict dimensions on the landing page to make sure it works for
              all users on desktop and mobile. 
            </p>
            <br />
            <p>
              I decided that there had to be a much better way to give our
              designer and our client the opportunity to have a custom built
              page that is mobile responsive and includes more up to date
              features like dark mode/light mode and fully integrated company
              brand and design palettes. This is where Bootstrap and Pardot
              Regions come in. The new Landing Page Template I built allows the
              user to have a much better experience and will provide more lead
              generations and in the end more donations to our non profit
              clients.
            </p>
          </div>
        </div>
      </div>

      {/* <video src="https://drive.google.com/file/d/19PrdvOGQjis-ibv8cBl34KYZmxUL6oj7/view?usp=share_link"
        controls
        type="video/mp4" 
        className="img__container_pardot" /> */}

      <div className="brand__box_pardot">
        <div className="brand__left_pardot">
          <h3>How do Pardot content regions work in landing pages?</h3>
        </div>
        <div className="brand__right_pardot">
          <h6 className="brand__title2_pardot"></h6>
          <div className="brand__description_pardot">
            <p>
              Content regions essentially allow you to update links, swap images
              and write new text in a live version of the asset so you can make
              changes in real-time, without any experience with HTML. It’s an
              area within your email or landing page that you can change without
              impacting how the template is coded.
            </p>
            <img src={pardotcode} alt="" className="img__container_pardot2" />
          </div>
        </div>
      </div>
    </>
  );
}
