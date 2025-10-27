import React from 'react'
import MyPortfolio from '../../components/hero/Portfolio'
import Copyright from '../../components/copyright/Copyright'
import PortfolioTwo from '../../components/portfolio/PortfolioTwo'
import LetsWork from "../../components/letsWork/LetsWork"
import FAQ from '../../components/faq/FAQ'

const Portfolio = () => {
  return (
    <>
      <MyPortfolio />
      <PortfolioTwo />
      <LetsWork />
      <FAQ />
    </>
  )
}

export default Portfolio