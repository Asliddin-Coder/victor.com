import React from 'react'
import styles from './Hero.module.scss';
import AboutMe from '../../components/aboutMe/AboutMe';
import Header from '../../components/header/Header';

const Home = () => {
  return (
    <>
        <Header />
        <AboutMe />
    </>
  )
}

export default Home