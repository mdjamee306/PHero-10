import React from "react";
import Slider from "react-slick";

const Trends = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="w-11/12 mx-auto">
            <div className="text-center text-3xl md:text-5xl text-yellow-700 font-semibold md:mt-8 mb-8 ">Trending</div>
            <Slider {...settings}>
                {/* 1 */}
                <div className="hover:filter hover:sepia hover:brightness-100 hover:grayscale-0 hover:hue-rotate-20 cursor-pointer">
                    <img className="w-11/12 h-[400px] mx-auto" src="https://i.ibb.co/pX02wFB/eight.jpg" alt="" />
                </div>
                {/* 2 */}
                <div className="hover:filter hover:sepia hover:brightness-100 hover:grayscale-0 hover:hue-rotate-20 cursor-pointer">
                    <img className="w-11/12 h-[400px] mx-auto" src="https://i.ibb.co/PNwBF7S/three.jpg" alt="" />
                </div>
                {/* 3 */}
                <div className="hover:filter hover:sepia hover:brightness-100 hover:grayscale-0 hover:hue-rotate-20 cursor-pointer">
                    <img className="w-11/12 h-[400px] mx-auto" src="https://i.ibb.co/GxBX8jS/two.webp" alt="" />
                </div>
                {/* 4 */}
                <div className="hover:filter hover:sepia hover:brightness-100 hover:grayscale-0 hover:hue-rotate-20 cursor-pointer">
                    <img className="w-11/12 h-[400px] mx-auto" src="https://i.ibb.co/1d0vcC6/seven.jpg" alt="" />
                </div>
                {/* 5 */}
                <div className="hover:filter hover:sepia hover:brightness-100 hover:grayscale-0 hover:hue-rotate-20 cursor-pointer">
                    <img className="w-11/12 h-[400px] mx-auto" src="https://i.ibb.co/3rhtSyk/four.jpg" alt="" />
                </div>
                {/* 6 */}
                <div className="hover:filter hover:sepia hover:brightness-100 hover:grayscale-0 hover:hue-rotate-20 cursor-pointer">
                    <img className="w-11/12 h-[400px] mx-auto" src="https://i.ibb.co/wMXXQQV/one.webp" alt="" />
                </div>
                {/* 7 */}
                <div className="hover:filter hover:sepia hover:brightness-100 hover:grayscale-0 hover:hue-rotate-20 cursor-pointer">
                    <img className="w-11/12 h-[400px] mx-auto" src="https://i.ibb.co/FgP9kJy/five.jpg" alt="" />
                </div>
                {/* 8 */}
                <div className="hover:filter hover:sepia hover:brightness-100 hover:grayscale-0 hover:hue-rotate-20 cursor-pointer">
                    <img className="w-11/12 h-[400px] mx-auto" src="https://i.ibb.co/fd7M2Qf/6.jpg" alt="" />
                </div>
            </Slider>
        </div>
    );
};

export default Trends;