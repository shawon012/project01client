
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import '@smastrom/react-rating/style.css'


// Import Swiper styles
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";
import { Rating } from '@smastrom/react-rating';

const Testimonials = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className='my-8'>
            <SectionTitle
                subHeading={"What Our Client Say"}
                heading={"Testimonials"}
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review =>
                        <SwiperSlide
                            key={review._id}
                        >
                            <div className='flex flex-col items-center mx-24 my-16'>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <p className='py-4'>{review.details}</p>
                                <h3 className='text-2xl text-orange-600'>{review.name}</h3>
                            </div>
                        </SwiperSlide>)

                }
            </Swiper>
        </section>
    );
};

export default Testimonials;