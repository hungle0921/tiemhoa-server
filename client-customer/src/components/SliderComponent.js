import React, { Component } from 'react';
import SlickSlider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SliderComponent.css'; // Import file CSS tùy chỉnh

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                { id: 1, src: '/images/chayqc1.png' },
                { id: 2, src: '/images/chayqc2.jpg' },
                { id: 3, src: '/images/chayqc3.png' }
            ],
        };
    }

    render() {
        const images = this.state.images.map((item) => {
            return (
                <div key={item.id}>
                    <img src={item.src} className="slider-image" alt={`slide-${item.id}`} />
                </div>
            );
        });

        const settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
        };

        return (
            <div className="slider-container">
                <SlickSlider {...settings}>
                    {images}
                </SlickSlider>
            </div>
        );
    }
}

export default Slider;
