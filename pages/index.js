import Head from 'next/head'
import Header from '../components/common/Header'
import TradingSlider from '../components/common/TradingSlider'
import About from '../components/home/About'
import BannerSlider from '../components/home/BannerSlider'
import Destination from '../components/home/Destination'
import Faq from '../components/home/Faq'
import PropertyTypeSlider from '../components/home/PropertyTypeSlider'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Header />
    <BannerSlider />
    <PropertyTypeSlider />
    <Destination />
    <TradingSlider />
    <About />
    <Faq />
    </>
  )
}
