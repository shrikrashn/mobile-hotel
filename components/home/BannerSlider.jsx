import React from 'react'
import Slider from '../../components/common/SliderSlick'
import Search from '../../components/common/Search'

export default function BannerSlider() {
    return (
        <>
            <section className="home-banner">
                <div className="banner-inner">
                    <Search />
                    <Slider settings={main}>
                    <figure className="relative">
                        <img className="w-full" src="images/banner-img.jpg" alt="banner"/>
                        <figcaption className="absolute bottom-0 left-0 pb-10 pl-5">
                            <h4 className="text-white font-semibold text-lg">Malaysia</h4>
                            <p className="text-white text-xs pr-32">Search your dream stay by Hotel, Homestay and Resorts</p>
                            <a href="/" className="bg-blue-500 rounded-full px-5 py-1 text-white text-sm inline-block mt-3">View Hotels</a>
                        </figcaption>
                    </figure>
                    <figure className="relative">
                        <img className="w-full" src="images/banner-img.jpg" alt="banner"/>
                        <figcaption className="absolute bottom-0 left-0 pb-10 pl-5">
                            <h4 className="text-white font-semibold text-lg">Malaysia</h4>
                            <p className="text-white text-xs pr-32">Search your dream stay by Hotel, Homestay and Resorts</p>
                            <a href="/" className="bg-blue-500 rounded-full px-5 py-1 text-white text-sm inline-block mt-3">View Hotels</a>
                        </figcaption>
                    </figure>
                    <figure className="relative">
                        <img className="w-full" src="images/banner-img.jpg" alt="banner"/>
                        <figcaption className="absolute bottom-0 left-0 pb-10 pl-5">
                            <h4 className="text-white font-semibold text-lg">Malaysia</h4>
                            <p className="text-white text-xs pr-32">Search your dream stay by Hotel, Homestay and Resorts</p>
                            <a href="/" className="bg-blue-500 rounded-full px-5 py-1 text-white text-sm inline-block mt-3">View Hotels</a>
                        </figcaption>
                    </figure>
                    </Slider>
                </div>
            </section>
        </>
    )
}
const main = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow:1,
    slidesToScroll:1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false
          
        }
      }
    ]
  
  
  };