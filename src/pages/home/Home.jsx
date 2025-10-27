import AboutMe from '../../components/aboutMe/AboutMe';
import Copyright from '../../components/copyright/Copyright';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import LetsWork from '../../components/letsWork/LetsWork';
import MyServices from '../../components/myServices/MyServices';
import Portfolio from '../../components/portfolio/Portfolio';
import Testimonial from '../../components/testimonial/Testimonial';

const Home = () => {
  return (
    <>
        <Header />
        <AboutMe />
        <LetsWork /> 
        <MyServices />
        <Portfolio />
        <Testimonial/>
        <Footer/>
    </>
  )
}

export default Home