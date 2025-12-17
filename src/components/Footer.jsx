import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <>
            <section className='bg-slate-200 w-full md:px-20 px-10 md:py-20 py-10 flex flex-col justify-center items-center gap-6 border-[20px] border-purple-600'>
                <h1 className='text-black font-bold text-5xl'>Heritage <span className='italic text-yellow'>Celebs-Barber</span></h1>
                <p>Thank you for choosing and booking your hair-cut service with us. We are grateful and looking forward to serve you better in the nearest future. 🙇‍♂️</p>
                <div id='icons' className='flex justify-center items-center gap-4'>
                    <div id='icon-box' className='bg-[#a39446] p-4 rounded-full cursor-pointer hover:bg-black hover:text-white transform hover:scale-11 transition-transform duration-300'>
                        <FaInstagram className='size-7 fill-white' />
                    </div>
                    <div id='icon-box' className='bg-[#a39446] p-4 rounded-full cursor-pointer hover:bg-black hover:text-white transform hover:scale-11 transition-transform duration-300'>
                        <FaFacebook className='size-7 fill-white' />
                    </div>
                    <div id='icon-box' className='bg-[#a39446] p-4 rounded-full cursor-pointer hover:bg-black hover:text-white transform hover:scale-11 transition-transform duration-300'>
                        <FaWhatsapp className='size-7 fill-white' />
                    </div>
                    <div id='icon-box' className='bg-[#a39446] p-4 rounded-full cursor-pointer hover:bg-black hover:text-white transform hover:scale-11 transition-transform duration-300'>
                        <FaTiktok className='size-7 fill-white' />
                    </div>
                </div>
            </section>
            <div data-aos="slide-right" data-aos-delay="200" id='icon-box' className='bg-yellow p-4 rounded-full hover:bg-black hover:text-white cursor-pointer fixed lg:bottom-12 bottom-6 right-6 lg:right-6'>
                <Link to='hero' spy={true} offset={-100} smooth={true}>
                <FaArrowUp className='size-8'/></Link>
            </div>
        </>
    );
}

export default Footer;