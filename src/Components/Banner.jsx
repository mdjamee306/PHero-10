import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Banner = () => {
    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div className="mt-4 ">
            <div className="hero min-h-screen " style={{ backgroundImage: 'url(https://i.ibb.co/9YHvcCh/rsz-a10.jpg)' }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="text-left ">
                    <div className="max-w-md">
                        <div data-aos="zoom-in">
                            <h1 className="mb-5 text-2xl md:text-5xl text-yellow-500 font-extrabold">PERFECT STUNNING <br />
                                TREND WEBSITES</h1>
                        </div>
                        <div className="flex gap-8 ">
                            <button data-aos="fade-right" className="p-3 md:p-5 border   md:border-2  hover:bg-slate-300 hover:text-white text-slate-200 font-normal    bg-none rounded-xl">Read More</button>
                            <button data-aos="fade-left" className="p-3 md:p-5 border   md:border-2   bg-none hover:text-white text-slate-200 font-normal  hover:bg-slate-300 rounded-xl">Purchase Now!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;