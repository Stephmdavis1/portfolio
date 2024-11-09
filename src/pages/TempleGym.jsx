import mockup from "../assets/ProjectsDataImages/Sippers/sippers2.png";
import templebackground from "../assets/ProjectsDataImages/Temple/IMG_4502.png";
import templevid from "../assets/ProjectsDataImages/Temple/TempleVid.mp4";
import TempleChart from "../assets/ProjectsDataImages/Temple/TempleChart.png";
import "../components/Work/Temple/TempleGym.css";

// import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useInView, animated } from "@react-spring/web";

const TempleGym = () => {
  const [ref, springs] = useInView(
    () => ({
      from: { opacity: 0.1, y: 50 },
      to: { opacity: 1, y: 300 },
    }),
    { rootMargin: "0%" }
  );

  return (
    <>
      <div className="port__container">
        <div className="temple__container1"></div>
        <div className="temple__container2">
          
            <h1 className="project__title1">Temple Gym & Fitness</h1>
          
          <a href="/work" className="back__button">
            back to all projects
          </a>
          <div id="hero__details1">
            <h4 className="herotitle__name">Temple Gym & Fitness </h4>
            <p className="para__1">
              <i>Noun:</i> Temple Gym and Fitness is Jacksonville's #1 training
              center.
            </p>
            <p className="para__2_temple">
              <i>Role:</i> Researcher / Branding / Photographer / Interface
              Design
              <br />
              <a href="https://www.templegymandfitness.com/" target="_blank" className="btn2 temple_btn">Visit Website</a>
            </p>
          </div>
        </div>
      </div>

      <div className="brand__box_temple2">
        <div className="brand__left">
          <h3>Building the Brand Vision</h3>
        </div>
        <div className="brand__right">
          <h6 className="brand__title2">The Challenge</h6>
          <div className="brand__description">
            <p>
              Temple Gym and Fitness is a staple gym in the Jacksonville local
              community. With a specialized facility and science backed
              programs, they are able to deliver everything their clients need
              to succeed.
            </p>
            <br />
            <p>At it's core, Temple Gym and Fitness is dedicated to promote a healthy lifestyle for the community. Offering science based programs, group fitness classes, sport specific training and more, this gym is more than capable to handle all fitness ideas and needs. The company's indoor and outdoor training area provides the space needed for the development of our youth and local community.</p>
            <br />
            <p>
              I was approached by the owner and the board members to do a total
              rebrand to help them to attract new customers and to do a revamp
              of their current website. With a focus on improving the user experience and streamlining the content structure, I was able to create a website that effectively communicated Temple's value proposition and showcased their expertise in fitness.
            </p>
            <br />
            <p>
              Multiple pages were needed to convey the brand and it was
              important to ensure that the website itself had elements of unique
              design yet common features. The key feature of the website is
              providing insight on the new programs that the gym is offering for
              new clients and members.
            </p>
            <br />
            <p>
              The design I created aimed to bring a modern yet sleek approach to
              compete with other big name fitness brands but also to display the
              "family" aspect of the gym that the current members love so much.
            </p>
          </div>
        </div>
      </div>
      <div className="img__container">
        <img className="brand__temple" alt="" />
      </div>

      <div className="port__container">
        <div className="brand__box_temple">
          <div className="brand__right">
          <h5>The Focus</h5>
            <p>
            With these challenges in mind, I narrowed in on two questions that would guide my approah to finding a solution:
            </p>
            <p>- Who are our interested new members?</p>
            <p>- What information does a successful web app view contain?</p>
    
            <h5>The Design Process</h5>
            <p>
            My first step was to analyze Temple's existing website to understand how their content was organized. I found that the website had too little information and was not well-organized, making it difficult for users to find the information they were looking for. To address this issue, I started by grouping the information into categories and subcategories, making it easier for users to navigate the website.
            </p>
            <br />
            <p>In addition to categorising the content, I also prioritized the information on the homepage. I reduced the amount of content focusing only on the most important information. I wanted to ensure that users would immediately find the most relevant and important information when they landed on the website. By doing this, we were able to create a more streamlined user experience that reduced cognitive overlaod and made it easier to find what they needed.</p>
            <br />
            <p>I kicked off the wireframing process by doing a complete rebranding of the website. Starting with the homepage and then working to the other pages for the website, I made sure to keep the main questions in mind.
        </p>
          </div>
          <div className="brand__left1">
            <img src={TempleChart} alt="chart of users" className="chart" />
          </div>
        </div>
        <div className="rebrand__container1">
        
        </div>

        <div className="img__container">
          <img className="brand__temple2" alt="" />
        </div>


        <div className="brand__box3">
          <div className="brand__left">
            <h3>The Conclusion</h3>
          </div>
          <div className="brand__right">
            <article className="temple-brand__title3">
              <p>
              Creating a user-centered design for Temple was both a challenging and a rewarding experience. By conducting UX research, analysing user data, and creating UX stategy, I was able to identify the key pain points and opportunities for the website. The wireframing and prototyping process allowed me to test and refine the design to ensure it was user-frieldnt and easy to use. The final UI design was modern, vibrant, and consistent. This provided users with a seamless and enjoyable experience when discoving new experiences. I love how the
                website is taking a new client through the process of becoming a
                member through the use of images and the programs the gym
                offers. This responsive website evolved and expanded to include
                and highlight all the features the gym has to offer.
              </p>
              <br />
              <p>
                User-centric design is the most important. I have always
                believed this and put this belief into practice through my work.
                I try to go beyond the basics to connect with the target market
                and really learn their pain points and joys. My innate desire to
                understand users empathetically and authentically motivates me
                and makes creating for them a pleasure.
              </p>
            </article>
          </div>
        </div>

        <div>
          <img src={templebackground} alt="" className="sippers__hero" />
        </div>
      </div>
    </>
  );
};

export default TempleGym;
