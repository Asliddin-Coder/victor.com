import AboutMe from '../../components/aboutMe/AboutMe';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import LetsWork from '../../components/letsWork/LetsWork';
import MyServices from '../../components/myServices/MyServices';
import Portfolio from '../../components/portfolio/Portfolio';

const Home = () => {
  return (
    <>
        <Header />
        <AboutMe />
        <LetsWork /> 
        <MyServices />
        <Portfolio />
        <Footer/>
    </>
  )
}

export default Home