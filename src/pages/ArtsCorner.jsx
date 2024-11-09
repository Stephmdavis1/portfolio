import mockup_artpic from "../assets/ProjectsDataImages/Mockups/mockup_arts.png";
import quotes1 from "../assets/ProjectsDataImages/Mockups/painting.png";
import "../components/Work/ArtsCorner/ArtsCorner.css";

// import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useInView, animated } from "@react-spring/web";

const ArtsCorner = () => {
  const [ref, springs] = useInView(
    () => ({
      from: { opacity: 0.1, y: 50 },
      to: { opacity: 1, y: 300 },
    }),
    { rootMargin: "0%" }
  );

  return (
    <>
      <div className="port__container_arts">
        <div className="arts__container1"></div>
        <div className="arts__container2">
          
            <h2 className="project__title_arts">Arts Corner</h2>
          
          <a href="/projects" className="back__button">
            back to all projects
          </a>
          <div id="hero__details_arts">
            <h4 className="herotitle__name">The Arts Corner</h4>
            <p className="para__1">
              <i>Noun:</i> Art is essential so whether you dabble, experiment,
              take a class or join a group... try something new.<br/> Be Creative
              again!.
            </p>
            <p className="para__2">
              <i>Role:</i> Researcher / Branding / Interface Design 
              <br />
              <a href="https://www.theartscornerkidznetwork.org/" target="_blank" className="btn2 arts_btn">Visit Website</a>
            </p>
            
            
          </div>
        </div>
      </div>

      <div className="brand__box_arts">
        <div className="brand__left_arts">
          <h3>The Challenge of the Brand</h3>
        </div>
        <div className="brand__right_arts">
          <h6 className="brand__title2_arts">Starting Fresh</h6>
          <div className="brand__description_arts">
            <p>
            The Arts Corner KIDZ Network Inc. is a 501(c) (3) organization, committed to serving the children of Jacksonville communities and other ares of North Florida. This not-for-profit organization is expanding it's program to bring awareness of the importance of THE ARTs in the lives of children. They aim to empower men, women and children by making art accessible, affordable, educational and fun. 
            </p>
            <br />
            <p>
              My main goal with this rebrand was to make sure that through every picture seen, every word read and every donation sent - people would be able to see how amazing of an organization the Arts Corner is.
            </p>
            <br />
            <p>
              The design and overall look I wanted to convey was simplicity through pictures and canvas. I wanted to show that involvement in the arts can help to bridging the gap between the customer and the non-profit by bringing awareness to the importance of the arts in the lives of each individual.
            </p>
          </div>
        </div>
      </div>
      <div className="img__container_arts">
        <img src={mockup_artpic} alt="Interested in donating" />
      </div>

      <div className="port__container_arts">
        <div className="brand__box2_arts">
          <div className="brand__right_arts">
            <h5 className="brand__right2_arts">UX Research</h5>
            <p>
             Non-profits rely a lot on donations and partnering with corporations and other businesses so I knew that a lot of the rebranding will have to be focused on showing how one can team up with the Arts Corner. This started out by me doing research on what type of donations are made to non profits and byt taking a look at past donations and partnerships that the Arts Corner has previously had. By becoming a pARTner, organizations get to see how their donations are used to help individuals in low income areas as well as kids who usually don't have the resources to allow them to participate in Art activities.
            </p>
          </div>
          <div className="brand__left_arts">
            <img src={quotes1} alt="painting child" className="painting" />
          </div>
        </div>
        <div className="rebrand__container_arts">
          <h3>The goal of the rebranding</h3>
          <h6>Help Secure Partnerships</h6>
          <p className="rebranding_arts">
            Having a polished and sleek website for the Arts Corner gives the company an opportunity
            to expand their partnerships even further. Having an online presence is
            crucial for growing so my goal with this rebrand was to making sure that the website was
            easy to navigate, responsive for all devices and has the correct
            optimizations for Corporations or other business to find this non-profit.
          </p>
          <h6>Build Connection with the Local Community</h6>
          <p className="rebranding_arts">
            In order to build a brand, there has to be a connection that links a
            product to things that create an emotional bond with consumers.
            Through this, customers can learn about the brand and what the
            business stands for creating a connection on a deeper level.
          </p>
        </div>

        {/* <div className="homepage__video">
          <img src={mockup_arts} alt="display" />
        </div> */}

        <div className="brand__box3_arts">
          <div className="brand__left_arts">
            <h3>The Conclusion</h3>
          </div>
          <div className="brand__right_arts">
            <article className="brand__title3_arts">
              <p>
                This website turned out amazing. The design compliments the amount of white space creating a look that is like no other Art website that I have seen. This non-profit has already seen an increase in pARTnership opportunities and is excited for more opportuniites to come.  
              </p>
              <br/>
              <p>
                I put a lot of energy into understanding the users and potential partnerships prior to
                jumping into design and execution. Building this website has increased my understanding of non-profits and deepend my knowledge of best practices for building a donation based presence online. My innate desire to understand users empathetically and authentically motivates me and makes creating for them a pleasure.
              </p>
              <br />
            </article>
          </div>
        </div>

        {/* <div>
          <img src={background2} alt="" className="sippers__hero" />
        </div> */}
      </div>
    </>
  );
};

export default ArtsCorner;
