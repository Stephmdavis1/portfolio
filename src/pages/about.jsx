import Contact from "../components/About/Contact/Contact";
import Hello from "../components/About/Hello/Hello";
import ImageRoll from "../components/About/ImageRoll/ImageRoll";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Home/NavBar/Navbar";


export default function About() {
    return (
        <>
        <Navbar />
        <Hello />
        <ImageRoll />
        <Contact />
        <Footer />
        </>
    )
}