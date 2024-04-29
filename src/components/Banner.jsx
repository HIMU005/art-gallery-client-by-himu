import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Slider from "./Slider";


const Banner = () => {
    const [loadData, setLoadData] = useState([]);
    useEffect(() => {
        fetch("https://authentication-and-simple-database-server.vercel.app/crafts/")
            .then(res => res.json())
            .then(data => setLoadData(data))
    }, [])

    const bannerData = loadData.slice(0, 3);

    return (
        <div className="w-11/12 mx-auto">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold md:font-bold my-4">We welcome you to our Gallery</h1>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                {
                    bannerData.map(bannerSingleData => <SwiperSlide key={bannerSingleData._id}>
                        <Slider bannerSingleData={bannerSingleData}></Slider>
                    </SwiperSlide>)
                }

                {/* <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide> */}
            </Swiper>
        </div>
    );
};

export default Banner;