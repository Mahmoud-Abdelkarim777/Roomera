import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "../assets/css/swiper.css";

// Import required modules
import { Pagination } from 'swiper/modules';

export default function DetailsProduct() {
    return (
        <div>
            <Swiper
                slidesPerView={3}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mt-5 "
                breakpoints={{
                    // when window width is >= 320px
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    // when window width is >= 640px
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    // when window width is >= 1024px
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                }}
            >
                <SwiperSlide>
                    <div className="img">
                        <img src="src\assets\image\foto.jfif" alt="photo" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="img">
                        <img src="src\assets\image\foto.jfif" alt="photo" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="img">
                        <img src="src\assets\image\foto.jfif" alt="photo" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="img">
                        <img src="src\assets\image\foto.jfif" alt="photo" />
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="info ms-3">
                <h1 className='mt-3 '>Prospect Vale, TAS</h1>
                <p className=''>Private room with own bathroom</p>
                <div className="price d-flex align-items-center gap-2 border-top border-bottom border-dark p-3 ">
                    <div className="box border rounded border-dark p-3 ">
                        200 جنيه/ الشهر
                    </div>
                    <div className=''>
                        <i class="fa-solid fa-bed me-2"></i>
                        <span>2</span>
                        <i class="fa-solid fa-bath ms-4 me-2"></i>
                        <span>1</span>
                        <i class="fa-solid fa-person-shelter ms-4 me-2"></i>
                        <span>1</span>
                    </div>
                </div>
                <div className="about ">
                    <h4>About the property</h4>
                    <p>Large house in a leafy suburb. Generally a quiet house as 
                        everyone has a 
                        work life, fitness schedule and social life. The current 
                        flatmates are great friends when they do get
                        together for dinner or a drink but that isn't often.
                    </p>
                    <h4>Property accepting of</h4>
                    <div className="availablePeople d-flex gap-3">
                        <p className='border rounded-pill border-dark p-2'>
                            <i class="fa-solid fa-check me-2 text-info"></i>
                            <span>طلاب</span>
                        </p>
                        <p className='border rounded-pill border-dark text-info p-2'>
                            <i class="fa-solid fa-check me-2 text-info"></i>
                            <span>40+ عام</span>
                        </p>
                        <p className='border rounded-pill border-dark p-2'>
                            <i class="fa-solid fa-check me-2 text-info"></i>
                            <span>مغتربين</span>
                        </p>
                    </div>
                    <div className="details">
                        <h4>Room overview</h4>
                        <p>DETAILS</p>
                        <div className="row">
                            <div className='col-lg-4 col-md-6 col-12 mb-3' >
                                <div className='d-flex align-items-center gap-3 mb-3'>
                                    <i class="fa-solid fa-bed"></i>
                                    <p className='m-0'>$300 weekly rent <br />
                                        $600 bond
                                    </p>
                                </div>
                                <div className='d-flex align-items-center gap-3 mb-3'>
                                    <i class="fa-solid fa-bed"></i>
                                    <p className='m-0'>$300 weekly rent <br />
                                        $600 bond
                                    </p>
                                </div>
                                <div className='d-flex align-items-center gap-3 mb-0'>
                                    <i class="fa-solid fa-bed"></i>
                                    <p className='m-0'>$300 weekly rent <br />
                                        $600 bond
                                    </p>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-12' >
                                <div className='d-flex align-items-center gap-3 mb-3'>
                                    <i class="fa-solid fa-bed"></i>
                                    <p className='m-0'>$300 weekly rent <br />
                                        $600 bond
                                    </p>
                                </div>
                                <div className='d-flex align-items-center gap-3 mb-3'>
                                    <i class="fa-solid fa-bed"></i>
                                    <p className='m-0'>$300 weekly rent <br />
                                        $600 bond
                                    </p>
                                </div>
                                <div className='d-flex align-items-center gap-3 mb-3'>
                                    <i class="fa-solid fa-bed"></i>
                                    <p className='m-0'>$300 weekly rent <br />
                                        $600 bond
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="FEATURES">
                        <p>FEATURES</p>
                        <div className="row">
                            <div className='col-lg-4 col-md-6 col-12 mb-3' >
                                <div className='d-flex align-items-center gap-3 mb-0'>
                                    <i class="fa-solid fa-bed"></i>
                                    <p className='m-0'>Wardrobe</p>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-12' >
                                <div className='d-flex align-items-center gap-3 mb-3'>
                                <i class="fa-solid fa-fan"></i>
                                    <p className='m-0'>مروحة</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
