import Slider from 'react-slick';

const Slide = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div className="w-full h-full mx-auto mb-7">
            <Slider {...settings}>
                {/* Slide 1 */}
                <div className="cursor-pointer relative">
                    <img className="w-full h-[400px] mx-auto" src="https://i.ibb.co/Tq1X1jx/slider-2.jpg" alt="" />
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
                </div>

                {/* Slide 2 */}
                <div className="cursor-pointer relative">
                    <img className="w-full h-[400px] mx-auto" src="https://i.ibb.co/xmKT8N7/slider-2.jpg" alt="" />
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
                </div>

                {/* Slide 3 */}
                <div className="cursor-pointer relative">
                    <img className="w-full h-[400px] mx-auto" src="https://i.ibb.co/8P7c2Rw/slider-3.jpg" alt="" />
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
                </div>

                {/* Slide 4 */}
                <div className="cursor-pointer relative">
                    <img className="w-full h-[400px] mx-auto" src="https://i.ibb.co/ryFWGpF/slider-2.jpg" alt="" />
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
                </div>

                {/* Slide 5 */}
                <div className="cursor-pointer relative">
                    <img className="w-full h-[400px] mx-auto" src="https://i.ibb.co/gwNkyrx/slider-3.jpg" alt="" />
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
                </div>

                {/* Slide 6 */}
                <div className="cursor-pointer relative">
                    <img className="w-full h-[400px] mx-auto" src="https://i.ibb.co/LYP5w8L/slider-3.jpg" alt="" />
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
                </div>

                {/* Slide 7 */}
                <div className="cursor-pointer relative">
                    <img className="w-full h-[400px] mx-auto" src="https://i.ibb.co/bs038dq/slider-1.jpg" alt="" />
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
                </div>

                {/* Slide 8 */}
                <div className="cursor-pointer relative">
                    <img className="w-full h-[400px] mx-auto" src="https://i.ibb.co/NswW1dF/slider-3.jpg" alt="" />
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
                </div>
            </Slider>
        </div>


    );
};

export default Slide;