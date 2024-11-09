import "../Career/Career.css";
import IMG1 from "../../assets/ProjectsDataImages/SD images/steph.png";
import IMG2 from "../../assets/ProjectsDataImages/SD images/IMG_2545.png";
import IMG3 from "../../assets/ProjectsDataImages/SD images/Steph3.png";
import IMG4 from "../../assets/ProjectsDataImages/SD images/DSC_1521.png";
import IMG5 from "../../assets/ProjectsDataImages/blog/IMG_2035 2.png";
import IMG6 from "../../assets/ProjectsDataImages/blog/IMG_2036 2.png";
import IMG7 from "../../assets/ProjectsDataImages/blog/IMG_2037 2.png";
import IMG8 from "../../assets/ProjectsDataImages/blog/IMG_2038 2.png";
import Navbar from "../Home/NavBar/Navbar";

export default function Career() {
  return (
    <>
      <Navbar />
      <div className="hello">
        <h1 className="greeting">Hello!</h1>
        <h3 className="hello_header1">Allow Me To Reintroduce Myself!</h3>
        <div className="border">
          <div className="hello__copy_career">
            <p className="hello_paragraph_career">
              Hey there! If you are new here, WELCOME and I hope you like what
              you see. I want to take some time to reintroduce myself and to
              catch you up on where I am in my career and to also share a bit
              about what I hope to push myself into next.
            </p>
            <div class="box_career_career">
              <img
                src={IMG2}
                alt="Stephanie Davis"
                className="box_career_pic"
              />
              <img
                src={IMG1}
                alt="Stephanie Davis"
                className="box_career_pic"
              />
              <img
                src={IMG4}
                alt="Stephanie Davis"
                className="box_career_pic"
              />
            </div>
            <p className="hello_paragraph_career">
              When I first became a front end developer, I started to ask myself
              what good I could really hope to do by making websites and email
              marketing designs; sometimes negative thoughts would creep in -
              making me feel like the things I was creating were often trivial
              and ultimately temporary. This resulted in feelings of self-doubt
              and made me realize my biggest career fear... creating boring and
              meaningless designs. I realized that this feeling was stemming
              from a lack of purpose around my work.
            </p>
            <br />
            <img src={IMG3} alt="Stephanie Davis" className="hello__pic3" />
            <p className="hello_paragraph_career">
              So I decided to dig in and evaluate my own skills, deepening my
              understanding of the things that excite me when it comes to
              development and designs. I felt instinctively that it was time for
              me to make a change, to throw myself with more passion into my
              work, and to trust that I could find a more authentic way forward
              in my career. I decided then that I needed to create new career
              goals. One's that help me to stay focused around the good I can do
              through my work.
            </p>
            <br />
            <ul className="box2_career">
              <h3 className="career__header_career">New Career Goals:</h3>
              <li className="career__title_career">Be Authentic</li>
              <img src={IMG5} alt="Stephanie Davis" className="hello__pic4" />
              <p className="hello_paragraph_career goals">
                Authenticity is the ability to interact honestly with the world
                around you. It's a concept that describes the relationship
                between our core selves and the outside world. Authenticity can
                help to identify life values, practice compassion and accepting
                oneself... not just personally but through the work we create.
              </p>
              <br />
              <p className="hello_paragraph_career goals">
                I am energized by doing work that is unique and beautiful to me.
                I've had the realization recently that creating such amazing
                work stems from my perspective on life, my skills, past
                experiences and personal aesthetics allowing me to produce
                something that cannot be created by anyone else. When the things
                we create are infused with our own self expression, we come up
                with designs that are not only memorable but also enriching
                allowing it to resonate with its audience in such a beautiful
                and unique way.
              </p>
              <li className="career__title_career">Uplift Other Human Beings</li>
              <img src={IMG6} alt="Stephanie Davis" className="hello__pic4" />
              <p className="hello_paragraph_career goals">
                I want to uplift and highlight amazing people and businesses
                using the medium of web design to tell stories in surprising,
                beautiful and powerful ways.
              </p>
              <br />
              <br />
              <li className="career__title_career">Be Brave</li>
              <img src={IMG7} alt="Stephanie Davis" className="hello__pic4" />
              <p className="hello_paragraph_career goals">
                Creating work that is out of my confort zone really stretches
                me. It allows me to think outside of my "box" and to push past
                what I think is possiible and the results are amazing. When I
                step back and realize that the only restraints I have on my
                abilities are the ones I have placed on myself, I begin to see
                that all it takes is a little confidence and courage to shatter
                those self-biding thoughts and create what I never thought was
                possible.
              </p>
              <br />
              <li className="career__title_career">Make Web Design Fun</li>
              <img src={IMG8} alt="Stephanie Davis" className="hello__pic4" />
              <p className="hello_paragraph_career goals">
                At the end of the day, I think design can be creative, rewarding
                and purely fun. I want to work on more projects simply because
                they give me joy. I've had the opportunity to work with
                businesses and clients that are passionate and love what they do
                - that makes it so much more enjoyable when I am able to capture
                and display that within the designs I create.
              </p>
           
              <p className="hello_paragraph_career goals">
                With these new goals in mind, I’m stepping my game up, but with
                a different energy. Less grasping, more giving.
              </p>
         
              <p className="hello_paragraph_career goals">
                This is my new mantra to live by:
                <br /> "Breathe Deep, Love More, Stay True and Shine Bright!"
              </p>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
