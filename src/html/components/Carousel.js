import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import { settings } from "../../resources/js/CarouselFE"

function Carousel(c) {
    return (
        <div className={`c-carousel ${c.class ? c.class : "" }`}>
            <div className="container">
                <div className="row">
                    <div className="c-carousel__container js-carousel">
                        <Slider {...settings} className="c-carousel__slides js-carousel-slides">
                            <div className="c-carousel__slide">
                                <div className="c-carousel__slide-content">
                                    <h2 className="c-carousel__slide-title">Carousel Slide Title</h2>
                                    <p className="c-carousel__slide-summary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum scelerisque ex. Pellentesque feugiat id felis at ornare. Ut porta orci quis rutrum eleifend.</p>
                                </div>
                            </div>
                            <div className="c-carousel__slide">
                                <div className="c-carousel__slide-content">
                                    <h2 className="c-carousel__slide-title">Carousel Slide Title</h2>
                                    <p className="c-carousel__slide-summary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum scelerisque ex. Pellentesque feugiat id felis at ornare. Ut porta orci quis rutrum eleifend.</p>
                                </div>
                            </div>
                            <div className="c-carousel__slide">
                                <div className="c-carousel__slide-content">
                                    <h2 className="c-carousel__slide-title">Carousel Slide Title</h2>
                                    <p className="c-carousel__slide-summary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum scelerisque ex. Pellentesque feugiat id felis at ornare. Ut porta orci quis rutrum eleifend.</p>
                                </div>
                            </div>
                        </Slider>
                        <div className="c-carousel__pagination js-carousel-pagination"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel