import React, { useEffect } from 'react';
import heroimg from "../assets/images/hero.jpg";
import { FaLocationDot, FaHeadphones } from 'react-icons/fa6';
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { MdEmail } from 'react-icons/md';
import scissor from "../assets/images/scissor.png";
import menshair from "../assets/images/menshair.png";
import trimmer from "../assets/images/trimmer.png";
import womenhair from "../assets/images/womenhair.png";
import AOS from 'aos';
import "aos/dist/aos.css";


const Hero = () => {
    
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 800,
            easing: 'ease-in-out',
            delay: 100,
        });
    }, []);

    return (
        <>
            <section id='hero' className='bg-purple-400 w-full md:px-[120px] px-10 flex flex-col justify-center md:flex-row items-center gap-20'>
                <div id='content-box' className='flex flex-col justify-center items-start gap-10'>
                    <h1 data-aos="zoom-in" className='text-2xl text-black font-semibold'>WELCOME TO</h1>
                    <h1 data-aos="zoom-in" className='text-6xl text-black font-bold'> <span className='text-yellow'> Heritage</span> <br /> <span className='text-yellow'>Celebs-barber</span> <br /> in Monatan <br /> Ibadan</h1>
                    <div data-aos="slide-up" id='icon-list' className='flex flex-col justify-center items-start gap-6'>
                        <div id="icon-box" className='flex justify-center items-center gap-3'>
                            <FaLocationDot className='text-green-300 size-6' />
                            <h1 className='text-xl text-green-300 font-semibold'>Off Iwo Rd - Iyana Church Olawale Complex Monatan B/Stop</h1>
                        </div>
                        <div id="icon-box" className='flex justify-center items-center gap-3'>
                            <MdOutlinePhoneAndroid className='text-green-300 size-6' />
                            <h1 className='text-xl text-green-300 font-semibold'>+234 801 234 5678 / +234 802 345 6789</h1>
                        </div>
                        <div id="icon-box" className='flex justify-center items-center gap-3'>
                            <MdEmail className='text-green-300 size-6' />
                            <h1 className='text-xl text-green-300 font-semibold'>heritage_celebs-barber@gmail.com</h1>
                        </div>
                        <div id="icon-box" className='flex justify-center items-center gap-3'>
                            <FaHeadphones className='text-green-300 size-6' />
                            <h1 className='text-xl text-green-300 font-semibold'>customer_service@gmail.com</h1>
                        </div>
                    </div>
                    <button data-aos="zoom-in" className='px-10 py-4 rounded-xl border-2 border-black text-black font-semibold text-black font-semibold text-lg hover:bg-black hover:text-white'>BOOK ONLINE</button>
                </div>
                <div data-aos='zoom-in' id='image-box' className='md:w-[50%] w-full'>
                    <img src={heroimg} alt="" className='rounded-xl w-full md:h-[700px] h-[500px]' />
                </div>
            </section>

            <section className='grid grid-cols-1 md:grid-cols-4 justify-center items-center items-start w-full md:px-[120px] px-10 py-10 gap-10'>
                <div data-aos="zoom-in" data-aos-delay="200" className='flex flex-col justify-center items-center gap-4'>
                    <img src={scissor} alt="" className='size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer' />
                    <h1 className='text-2xl text-black font-semibold'>Regular Haircut</h1>
                    <button className='px-10 py-3 bg-black text-white text-md font-semibold rounded-xl hover:bg-yellow hover:text-black cursor-pointer'>MORE</button>
                </div>
                <div data-aos="zoom-in" data-aos-delay="200" className='flex flex-col justify-center items-center gap-4'>
                    <img src={menshair} alt="" className='size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer' />
                    <h1 className='text-2xl text-black font-semibold'>Grooming & Facial</h1>
                    <button className='px-10 py-3 bg-black text-white text-md font-semibold rounded-xl hover:bg-yellow hover:text-black cursor-pointer'>MORE</button>
                </div>
                <div data-aos="zoom-in" data-aos-delay="200" className='flex flex-col justify-center items-center gap-4'>
                    <img src={trimmer} alt="" className='size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer' />
                    <h1 className='text-2xl text-black font-semibold'>Special Haircut</h1>
                    <button className='px-10 py-3 bg-black text-white text-md font-semibold rounded-xl hover:bg-yellow hover:text-black cursor-pointer'>MORE</button>
                </div>
                <div data-aos="zoom-in" data-aos-delay="200" className='flex flex-col justify-center items-center gap-4'>
                    <img src={womenhair} alt="" className='size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer' />
                    <h1 className='text-2xl text-black font-semibold'>Women Haircut</h1>
                    <button className='px-10 py-3 bg-black text-white text-md font-semibold rounded-xl hover:bg-yellow hover:text-black cursor-pointer'>MORE</button>
                </div>
            </section>
        </>
    );
}

export default Hero;