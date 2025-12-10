import React, { useEffect } from 'react';
import whyimg from '../assets/images/why3.webp';
import { FaAngleDoubleRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyChoose = () => {
    
    useEffect(() => {
            AOS.init({
                offset: 200,
                duration: 800,
                easing: 'ease-in-out',
                delay: 100,
            });
        }, []);

    return (
        <section id='about' className='w-full md:px-20 px-10 md:py-20 py-10 flex flex-col md:flex-row justify-center items-center gap-20 bg-cover bg-center' style={{ backgroundImage: `url(${whyimg})` }}>
            <div data-aos="zoom-in" className='flex flex-col justify-center items-center gap-10 bg-purple-400 p-10 rounded-xl md:w-[40%] w-full'>
                <h1 className='text-yellow text-4xl font-bold'>WORKING HOURS</h1>
                <div className='flex flex-col justify-center items-center gap-4'>
                    <p className='text-xl text-black font-lg'>SUNDAY 10AM - 8PM</p>
                    <p className='text-xl text-black font-lg'>MONDAY 10AM - 8PM</p>
                    <p className='text-xl text-black font-lg'>TUESDAY 10AM - 8PM</p>
                    <p className='text-xl text-black font-lg'>WEDNESDAY 10AM - 8PM</p>
                    <p className='text-xl text-black font-lg'>THURSDAY 10AM - 8PM</p>
                    <p className='text-xl text-black font-lg'>FRIDAY 10AM - 8PM</p>
                    <p className='text-xl text-black font-lg'>SATURDAY 10AM - 8PM</p>
                </div>
            </div>
        </section>
    );
}

export default WhyChoose;