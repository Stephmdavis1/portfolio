
import smfbackground from "../assets/ProjectsDataImages/SMF/DSC_1559  2.png";
import steph from "../assets/ProjectsDataImages/SMF/steph.png";
import background_pic_steph from "../assets/ProjectsDataImages/SMF/SMFMockup.png";
import SMFMockup from "../assets/ProjectsDataImages/SMF/IMG_2545.png";
import "../components/Work/SMF/SMF.css";


const SMF = () => {

  return (
    <>
      <div className="port__container_smf">
        <div className="smf__container1"></div>
        <div className="smf__container3"></div>
        <div className="smf__container2">
          
            <h1 className="smf__title">Stephanie Marie Fitness</h1>
          
          <a href="/work" className="back__button">
            back to all projects
          </a>
          <div id="hero__details_smf">
            <h4 className="herotitle__name">Stephanie Marie Fitness </h4>
            <p className="para__1">
              <i>Noun:</i> Stephanie Marie Fitness is all about helping people become the best version of themselves.
            </p>
            <p className="para__2_temple">
              <i>Role:</i> Front End Developer / Designer / Photographer / Back End Developer
              <br />
              <a href="https://sm-fitness.vercel.app" target="_blank" className="btn2 smf_btn">Visit Website</a>
            </p>
          </div>
        </div>
      </div>

      <div className="brand__box_smf">
        <div className="brand__left_smf">
          <h3>The Process</h3>
          <img className="img_steph" src={steph} alt="Stephanie Marie holding a coffee mug" />
        </div>
        <div className="brand__right_smf">
          <h6 className="brand__right2_smf">How it started</h6>
          <div className="brand__description_smf">
            <p>
              I was in the fitness industry for over 10 years. Being in the industry for so long allowed me to really find a love and passion for writing effective and challenging workout programs. I still have many individuals reaching out to ask if I could write them a plan. So I decided to build a website where I can sell all of my programs to anyone who is looking to challenge themselves and to work on becoming the best version they can be.
            </p>
            <br />
            <p>I have created many websites. I've built with Vanilla Javascript, React and Nextjs however, this project stretched me to a place I never thought I would be able to go. I hit SO MANY roadblocks. I cried, I got angry, I took many small vacations from this build but in the end I was able to create a website that embodies my passions and showcases some of my best written programs.</p>
            <br />
            <p>
              The design I created aimed to bring a modern and sleek approach to
              compete with other big name fitness influences but there is so much of my personality sprinkled in. I am so proud of this build because of all the development and design knowledge I gained along the way. Keep scrolling down to take a peek at the most intense web dev I have had to date.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="img__container">
        <img className="brand__img2" alt="" />
      </div> */}

      <div className="port__container_smf">
        <div className="brand__box_smf2">
          <div className="brand__right_smf">
          <h5 className="brand__right2_smf">The Cart Feature</h5>
          <div className="brand__description_smf">
            <p>
            Building the cart functionality was definitely the most difficult part of this e-commerce website. This was the first time I was including a back end to a web app so the amount of research I did was a lot. There were so many ways that I could have included into this build: APIs and hosting on other websites and then linking it to my domain. Although it was a challenge, the knowledge I gained from it was amazing.
            </p>
            <br />
            <p>This website is equipped and linked with Stripe payments which allows for product pricing to be hosted on their website. When a user finds the program they want, they can add it to the cart and pay for the program using any major credit card. I integrated Stripe by linking the Price_ID provided by Stripe with the ID of each program in my database. Using Stripe's API keys I was able to integrate their checkout page into my website for a seamless checkout experience.</p>
            <br />
            <p>Using other software like EmailJS, Stripe's receipt function and building my own server using Node I was able to build a beautiful e-commerce site that is properly functioning and created with the user in mind.
        </p>
        </div>
          </div>
          <div className="brand__left_smf1">
            <img src={SMFMockup} alt="chart of users" className="chart" />
          </div>
        </div>
        <div className="rebrand__container1">
        
        </div>

        <div className="img__container">
          <img src={background_pic_steph} alt="" />
        </div>


        <div className="brand__box_smf3">
          <div className="brand__left_smf3">
            <h3 className="brand__right2_smf">The Conclusion</h3>
          </div>
          <div className="brand__right_smf2">
            <article className="brand__description_smf">
              <p>
              Creating a user-centered design for Stephanie Marie Fitness was both a challenging and a rewarding experience. The final UI design was modern, vibrant, and consistent. This provided users with a seamless and enjoyable experience when purchasing from my website. I love how the
                website takes a new client through the process of finding a workout program and allowing them to purchase it without leaving the webpage. This responsive website evolved and expanded to include
                and highlight all the features of an amazing e-commerce website.
              </p>
           
            </article>
          </div>
        </div>

        <div>
          <img src={smfbackground} alt="" className="sippers__hero" />
        </div>
      </div>
    </>
  );
};

export default SMF;
