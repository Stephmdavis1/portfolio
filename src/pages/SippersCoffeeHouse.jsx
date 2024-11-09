import mockup from '../assets/ProjectsDataImages/Sippers/sippers2.png'
import background2 from '../assets/ProjectsDataImages/Sippers/sippers-display.png'
import quotes from '../assets/ProjectsDataImages/Sippers/quotes-lg.png'
import "../components/Work/Sippers/SippersCoffeeHouse.css";


// import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useInView, animated } from '@react-spring/web'


const SippersCoffeehouse = () => {
    const [ref, springs] = useInView(() => ({
        from: { opacity: 0.1, y: 50, },
        to: { opacity: 1, y: 300, },
    }), { rootMargin: '0%' }
    );


    return (
        <>
            <div className='port__container_sippers'>
                <div className='sippers__container1'>
                </div>
                <div className='sippers__container2'>
                    <animated.div ref={ref} style={springs}> <h1 className='project__title'>Sippers</h1>
                    </animated.div>
                    <a href="/work" className='back__button'>back to all projects</a>
                    <div id='hero__details'>
                        <h4 className='herotitle__name'>Sippers Coffeehouse</h4>
                        <p className='para__1'><i>Noun:</i>  Sippers Coffeehouse is a local coffee shop that believes in coffee that tastes incredible.</p>
                        <p className='para__2'><i>Role:</i>  Researcher / Branding / Interface Design / Interaction Design</p>
                    </div>
                </div>
            </div>

            <div className='brand__box'>
                <div className='brand__left'>
                    <h3>Building the Brand Vision</h3>
                </div>
                <div className='brand__right'>
                    <h6 className="brand__title2">The ask</h6>
                    <div className="brand__description">
                        <p>Sippers Coffeehouse is an independent coffee shop, specializing in custom orders. For the coffeehouse brand, I was approached by the founder to create a website for the brand. The ask consisted of building a website that showed the vision of the brand, while depicting what was being sold. As the brands mission was based on selling custom coffees and foods it was important to show all aspects of it.</p>
                        <br/>
                        <p>Multiple pages were needed to convey the brand and it was important to ensure that the website itself had elements of unique design yet common features. The key feature of the website is its modular drink order menu created to address customers' evolving needs. </p>
                        <br/>
                        <p>The design I created aimed to be informative and innovative by using images that reflected the company mission as well as ensuring a simple and sleek look.</p>
                    </div>
                </div>
            </div>
            <div className='img__container'>
                <img className='brand__img1' alt='' />
            </div>


            <div className='port__container'>
                <div className='brand__box2'>
                    <div className='brand__right'>
                        <h5>UX Research</h5>
                        <p>To kick off the project, I conducted one-to-one interviews with potential users of the rebranded website to understand their needs, pain points, and desires when it comes to discovering new experiences. I interviewed a diverse array of people from different demographics and backgrounds to get a multiple perspectives.
                            Through the interviews, I identified the following insights:</p>
                    </div>
                    <div className='brand__left'>
                        <img src={quotes} alt='quotes of users' />
                    </div>
                </div>
                <div className='rebrand__container'>
                    <h3>The goal of the rebranding</h3>
                    <h6>Help Drive New Traffic</h6>
                    <p className='rebranding'>Having a website for the coffeeshop gives the company an opportunity to expand their audience even further. Having an online presence is crucial for growing a customer base. Making sure that the website is easy to navigate, responsive for all devices and has the correct optimization are the fundamentals that will help people find the shop. </p>
                    <h6>Build Connection with the Local Community</h6>
                    <p className='rebranding'>In order to build a brand, there has to be a connection that links a product to things that create an emotional bond with consumers. Through this, customers can learn about the brand and what the business stands for creating a bond on a deeper level.  </p>
                </div>


                <div className='homepage__video'>
                    <img src={mockup} alt="display" />
                </div >


                <div className='brand__box3'>
                    <div className='brand__left'>
                        <h3>The Conclusion</h3>
                    </div>
                    <div className='brand__right'>
                        <article className="brand__title3">
                            <p>From logo creation to website design and animation, this
                                project was so much fun to work on. I love how the Sippers responsive website evolved and expanded to include and highlight
                                all the features the coffeeshop has to offer. This was a creative trail that I blazed intuitively,
                                as the original design was far niched into human design and I'm really happy with the outcome.</p>
                            <p>User-centric design is the most important. I have always believed this and put this belief into practice
                                through my work. I put a lot of energy into understanding the users prior to jumping into wireframing.
                                I try to go beyond the basics to connect with the target market and really learn their pain points and joys.
                                My innate desire to understand users empathetically and authentically motivates me and makes creating for them a pleasure.</p>
                        </article>
                    </div>
                </div>


                <div>
                    <img src={background2} alt="" className='sippers__hero' />
                </div>
            </div>
        </>
    )
}


export default SippersCoffeehouse