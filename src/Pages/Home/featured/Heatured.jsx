import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featuredImg from './../../../assets/home/featured.jpg'
import './Heatured.css'
const Heatured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-8 my-20'>
            <SectionTitle
            subHeading={"Check It Out"}
            heading={"featured Item"}
            ></SectionTitle>
            <div className='md:flex justify-center bg-slate-500 bg-opacity-40 items-center pb-20 pt-12 px-36'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20, 2029</p>
                    <p className='uppercase'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio necessitatibus reprehenderit atque laborum ullam. Dicta distinctio animi optio nulla nam culpa repellendus, voluptatum iusto velit architecto ut quam minima officia doloribus. Voluptatibus nobis maxime hic magnam praesentium ipsum molestias neque, nemo repellat possimus ut id non minima repudiandae voluptates iste.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Heatured;