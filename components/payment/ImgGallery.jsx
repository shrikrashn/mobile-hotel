import React from 'react'
import Slider from '../../components/common/SliderSlick'
export default function ImgGallery() {
    return (
        <>
            <section className="img-gallery bg-white w-full pb-10 fixed top-0 h-full overflow-y-auto hidden z-40 left-0">
                <a class="absolute left-4 top-4" href="/"><svg class="w-7 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></a>
                <div className="container mx-auto">
                    <div className="big-img">
                        <figure>
                            <img className="w-full" src="images/big-gallery.jpg" alt="image"/>
                        </figure>
                    </div>
                    <div className="thumbnail p-3 rounded-md border border-gray-100 m-5">
                        <Slider settings={img_gallery}>
                        <div className="card w-1/4">
                            <figure className="h-20 w-16 overflow-hidden rounded shadow mx-auto">
                                <img className="w-full" src="images/big-gallery.jpg" alt="image"/>
                            </figure>
                        </div>
                        <div className="card w-1/4">
                            <figure className="h-20 w-16 overflow-hidden rounded shadow mx-auto">
                                <img className="w-full" src="images/big-gallery.jpg" alt="image"/>
                            </figure>
                        </div>
                        <div className="card w-1/4">
                            <figure className="h-20 w-16 overflow-hidden rounded shadow mx-auto">
                                <img className="w-full" src="images/big-gallery.jpg" alt="image"/>
                            </figure>
                        </div>
                        <div className="card w-1/4">
                            <figure className="h-20 w-16 overflow-hidden rounded shadow mx-auto">
                                <img className="w-full" src="images/big-gallery.jpg" alt="image"/>
                            </figure>
                        </div>
                        <div className="card w-1/4">
                            <figure className="h-20 w-16 overflow-hidden rounded shadow mx-auto">
                                <img className="w-full" src="images/big-gallery.jpg" alt="image"/>
                            </figure>
                        </div>
                        <div className="card w-1/4">
                            <figure className="h-20 w-16 overflow-hidden rounded shadow mx-auto">
                                <img className="w-full" src="images/big-gallery.jpg" alt="image"/>
                            </figure>
                        </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}
const img_gallery = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:4,
    slidesToScroll:1,
  
  };