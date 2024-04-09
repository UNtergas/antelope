import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { DataList } from '../types';
import FlipCard from './Flipcard';
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'


import { FreeMode, Pagination } from 'swiper/modules';


const Slider: React.FC<DataList> = ({ data }) => {
    return (
        <div className='flex items-center bg-slate-100' >
            <Swiper
                breakpoints={{
                    340: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    768: {
                        slidesPerView: 5,
                        spaceBetween: 15,
                    },
                }}
                freeMode={true}
                pagination={{
                    "clickable": true
                }}
                modules={[FreeMode, Pagination]}
                className='w-full   h-full'
            >
                {data.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <FlipCard {...item} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>

    );
}

export default Slider;