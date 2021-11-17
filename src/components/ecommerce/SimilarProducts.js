import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper";

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { Item } from './Item';


export const SimilarProducts = ({similarProducts}) => {
    SwiperCore.use([ Navigation]);

    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={20}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
            clickable: true
            }}
            navigation={true}
            className="mySwiper"
        >   
            {
                similarProducts.map(product => {
                    return(
                        <SwiperSlide key = {product.id}>
                            <Item product = {product}/>
                        </SwiperSlide>
                    )
                })

            }
        </Swiper>
    )
}
