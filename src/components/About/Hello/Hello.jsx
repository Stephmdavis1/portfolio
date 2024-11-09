import "../Hello/Hello.css";
import IMG1 from "../../../assets/ProjectsDataImages/SD images/DSC_1647.png";
import Skills from "../Skills/Skills";
import AnimatedNumbers from "../AnimatedNumbers/AnimatedNumbers";

export default function Hello() {
  return (
    <>
      <div className="hello">
        <h1 className="greeting">Hello!</h1>
        <h3 className="hello_header">It's nice to meet you</h3>
        <div className="border">
          <div className="hello__copy_career">
            <p className="hello_paragraph">
            Hi there! I'm Stephanie. I'm a developer and designer who has
                been building for the web in some capacity for almost almost 3
                years. I specialize in bringing the technical and visual aspects
                of digital products to life without sacrificing creativity.
            </p>
            <div class="box_career_hello">
              
              <img
                src={IMG1}
                alt="Stephanie Davis"
                className="box_hello_pic"
              />
            </div>
            <p className="hello_paragraph">
            As an exercise physiologist turned web designer, I bring a
                unique perspective to my work. When I combine my IT skills with
                my background in Human Physiology I am able to understand the
                ways users think, feel and act. With a strong understanding of
                user behavior and a keen eye for detail, I can design and create
                products that meet users exact needs while also delivering an
                exceptional experience. I'm happiest when I'm creating, learning
                and thinking of ways to help make things better.
            </p>
            </div>
            <div className="animated">
              <div className="box3">
                <span className="animated_numbers">
                  <AnimatedNumbers value={3} />
                </span>
                <h3 className="animated_copy">Years Front End Developer</h3>
              </div>

              <div className="box3">
                <span className="animated_numbers">
                  <AnimatedNumbers value={3} />
                </span>
                <h3 className="animated_copy">Years UX Design</h3>
              </div>

              <div className="box3">
                <span className="animated_numbers">
                  <AnimatedNumbers value={100} />+
                </span>
                <h2 className="animated_copy">Projects Completed</h2>
              </div>
            </div>
          
           
          
        </div>
        <Skills />
      </div>
    </>
  );
}









