import React from 'react';
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../assets/css/swiper.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function App() {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      };
  return (
    <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
        allowTouchMove={false} // Disable slide movement
    >
        {/* first slide  */}
        <SwiperSlide>
            <div className="container my-5">
        <div className="row">
            {/* 1 Swiper */}
            <div className="col-lg-4 col-md-6 col-12 mb-4">
                <div>
            <Swiper
                pagination={{
                type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                <div className="img">
                    <Link to={"/DetailsProduct"}>
                        <img src="src/assets/image/foto.jfif" alt="Slide 1" />
                    </Link>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 2" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 3" />
                </div>
                </SwiperSlide>
            </Swiper>
                </div>
            <div className="text mt-3">
                <h5>السعر 200 جنيه</h5>
                <p className="m-0">Coffs Harbour</p>
                <p>Available Now</p>
            </div>
            </div>
            {/* 2 Swiper */}
            <div className="col-lg-4 col-md-6 col-12 mb-4">
                <div>
                    <Swiper
                        pagination={{
                        type: 'fraction',
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                        <div className="img">
                            <img src="src/assets/image/foto.jfif" alt="Slide 1" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="img">
                            <img src="src/assets/image/foto.jfif" alt="Slide 2" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="img">
                            <img src="src/assets/image/foto.jfif" alt="Slide 3" />
                        </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="text mt-3">
                    <h5>السعر 200 جنيه</h5>
                    <p className="m-0">Coffs Harbour</p>
                    <p>Available Now</p>
                </div>
            </div>

            {/* 3 Swiper */}
            <div className="col-lg-4 col-md-6 col-12 mb-4">
                <div>
            <Swiper
                pagination={{
                type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 1" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 2" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 3" />
                </div>
                </SwiperSlide>
            </Swiper>
                </div>
            <div className="text mt-3">
                <h5>السعر 200 جنيه</h5>
                <p className="m-0">Coffs Harbour</p>
                <p>Available Now</p>
            </div>
            </div>
            {/* 4 Swiper */}
            <div className="col-lg-4 col-md-6 col-12 mb-4">
                <div>

            <Swiper
                pagination={{
                type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 1" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 2" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 3" />
                </div>
                </SwiperSlide>
            </Swiper>
                </div>
            <div className="text mt-3">
                <h5>السعر 200 جنيه</h5>
                <p className="m-0">Coffs Harbour</p>
                <p>Available Now</p>
            </div>
            </div>
            {/* 5 Swiper */}
            <div className="col-lg-4 col-md-6 col-12 mb-4">
                <div>

            <Swiper
                pagination={{
                type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 1" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 2" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 3" />
                </div>
                </SwiperSlide>
            </Swiper>
                </div>
            <div className="text mt-3">
                <h5>السعر 200 جنيه</h5>
                <p className="m-0">Coffs Harbour</p>
                <p>Available Now</p>
            </div>
            </div>

            {/* 6 Swiper */}
            <div className="col-lg-4 col-md-6 col-12 mb-4">
                <div>
            <Swiper
                pagination={{
                type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 1" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 2" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 3" />
                </div>
                </SwiperSlide>
            </Swiper>
                </div>
            <div className="text mt-3">
                <h5>السعر 200 جنيه</h5>
                <p className="m-0">Coffs Harbour</p>
                <p>Available Now</p>
            </div>
            </div>
            {/* 7 Swiper */}
            <div className="col-lg-4 col-md-6 col-12 mb-4">
                <div>

            <Swiper
                pagination={{
                type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 1" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 2" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 3" />
                </div>
                </SwiperSlide>
            </Swiper>
                </div>
            <div className="text mt-3">
                <h5>السعر 200 جنيه</h5>
                <p className="m-0">Coffs Harbour</p>
                <p>Available Now</p>
            </div>
            </div>

            {/* 8 Swiper */}
            <div className="col-lg-4 col-md-6 col-12 mb-4">
                <div>

            <Swiper
                pagination={{
                type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 1" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 2" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 3" />
                </div>
                </SwiperSlide>
            </Swiper>
                </div>
            <div className="text mt-3">
                <h5>السعر 200 جنيه</h5>
                <p className="m-0">Coffs Harbour</p>
                <p>Available Now</p>
            </div>
            </div>

            {/* 9 Swiper */}
            <div className="col-lg-4 col-md-6 col-12 mb-4">
                <div>
            <Swiper
                pagination={{
                type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 1" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 2" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 3" />
                </div>
                </SwiperSlide>
            </Swiper>
                </div>
            <div className="text mt-3">
                <h5>السعر 200 جنيه</h5>
                <p className="m-0">Coffs Harbour</p>
                <p>Available Now</p>
            </div>
            </div>
            {/* 10 Swiper */}
            <div className="col-lg-4 col-md-6 col-12 mb-4">
                <div>

            <Swiper
                pagination={{
                type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 1" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 2" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 3" />
                </div>
                </SwiperSlide>
            </Swiper>
                </div>
            <div className="text mt-3">
                <h5>السعر 200 جنيه</h5>
                <p className="m-0">Coffs Harbour</p>
                <p>Available Now</p>
            </div>
            </div>

            {/* 11 Swiper */}
            <div className="col-lg-4 col-md-6 col-12 mb-4">
                <div>

            <Swiper
                pagination={{
                type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 1" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 2" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 3" />
                </div>
                </SwiperSlide>
            </Swiper>
                </div>
            <div className="text mt-3">
                <h5>السعر 200 جنيه</h5>
                <p className="m-0">Coffs Harbour</p>
                <p>Available Now</p>
            </div>
            </div>

            {/* 12 Swiper */}
            <div className="col-lg-4 col-md-6 col-12 mb-4">
                <div>
            <Swiper
                pagination={{
                type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 1" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 2" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 3" />
                </div>
                </SwiperSlide>
            </Swiper>
                </div>
            <div className="text mt-3">
                <h5>السعر 200 جنيه</h5>
                <p className="m-0">Coffs Harbour</p>
                <p>Available Now</p>
            </div>
            </div>
        </div>
            </div>
        </SwiperSlide>
            {/* secend slide  */}
        <SwiperSlide>
            <div className="container my-5">
        <div className="row">
            {/* 1 Swiper */}
            <div className="col-lg-4 col-md-6 col-12 mb-4">
                <div>
            <Swiper
                pagination={{
                type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 1" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 2" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 3" />
                </div>
                </SwiperSlide>
            </Swiper>
                </div>
            <div className="text mt-3">
                <h5>السعر 200 جنيه</h5>
                <p className="m-0">Coffs Harbour</p>
                <p>Available Now</p>
            </div>
            </div>

            {/* 2 Swiper */}
            <div className="col-lg-4 col-md-6 col-12 mb-4">
                <div>

            <Swiper
                pagination={{
                type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 1" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 2" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 3" />
                </div>
                </SwiperSlide>
            </Swiper>
                </div>
            <div className="text mt-3">
                <h5>السعر 200 جنيه</h5>
                <p className="m-0">Coffs Harbour</p>
                <p>Available Now</p>
            </div>
            </div>

            {/* 3 Swiper */}
            <div className="col-lg-4 col-md-6 col-12 mb-4">
                <div>
            <Swiper
                pagination={{
                type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 1" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 2" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 3" />
                </div>
                </SwiperSlide>
            </Swiper>
                </div>
            <div className="text mt-3">
                <h5>السعر 200 جنيه</h5>
                <p className="m-0">Coffs Harbour</p>
                <p>Available Now</p>
            </div>
            </div>
            {/* 4 Swiper */}
            <div className="col-lg-4 col-md-6 col-12 mb-4">
                <div>

            <Swiper
                pagination={{
                type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 1" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 2" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 3" />
                </div>
                </SwiperSlide>
            </Swiper>
                </div>
            <div className="text mt-3">
                <h5>السعر 200 جنيه</h5>
                <p className="m-0">Coffs Harbour</p>
                <p>Available Now</p>
            </div>
            </div>
            {/* 5 Swiper */}
            <div className="col-lg-4 col-md-6 col-12 mb-4">
                <div>

            <Swiper
                pagination={{
                type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 1" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 2" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 3" />
                </div>
                </SwiperSlide>
            </Swiper>
                </div>
            <div className="text mt-3">
                <h5>السعر 200 جنيه</h5>
                <p className="m-0">Coffs Harbour</p>
                <p>Available Now</p>
            </div>
            </div>

            {/* 6 Swiper */}
            <div className="col-lg-4 col-md-6 col-12 mb-4">
                <div>
            <Swiper
                pagination={{
                type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 1" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 2" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 3" />
                </div>
                </SwiperSlide>
            </Swiper>
                </div>
            <div className="text mt-3">
                <h5>السعر 200 جنيه</h5>
                <p className="m-0">Coffs Harbour</p>
                <p>Available Now</p>
            </div>
            </div>
            {/* 7 Swiper */}
            <div className="col-lg-4 col-md-6 col-12 mb-4">
                <div>

            <Swiper
                pagination={{
                type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 1" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 2" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 3" />
                </div>
                </SwiperSlide>
            </Swiper>
                </div>
            <div className="text mt-3">
                <h5>السعر 200 جنيه</h5>
                <p className="m-0">Coffs Harbour</p>
                <p>Available Now</p>
            </div>
            </div>

            {/* 8 Swiper */}
            <div className="col-lg-4 col-md-6 col-12 mb-4">
                <div>

            <Swiper
                pagination={{
                type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 1" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 2" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 3" />
                </div>
                </SwiperSlide>
            </Swiper>
                </div>
            <div className="text mt-3">
                <h5>السعر 200 جنيه</h5>
                <p className="m-0">Coffs Harbour</p>
                <p>Available Now</p>
            </div>
            </div>

            {/* 9 Swiper */}
            <div className="col-lg-4 col-md-6 col-12 mb-4">
                <div>
            <Swiper
                pagination={{
                type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 1" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 2" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 3" />
                </div>
                </SwiperSlide>
            </Swiper>
                </div>
            <div className="text mt-3">
                <h5>السعر 200 جنيه</h5>
                <p className="m-0">Coffs Harbour</p>
                <p>Available Now</p>
            </div>
            </div>
            {/* 10 Swiper */}
            <div className="col-lg-4 col-md-6 col-12 mb-4">
                <div>

            <Swiper
                pagination={{
                type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 1" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 2" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 3" />
                </div>
                </SwiperSlide>
            </Swiper>
                </div>
            <div className="text mt-3">
                <h5>السعر 200 جنيه</h5>
                <p className="m-0">Coffs Harbour</p>
                <p>Available Now</p>
            </div>
            </div>

            {/* 11 Swiper */}
            <div className="col-lg-4 col-md-6 col-12 mb-4">
                <div>

            <Swiper
                pagination={{
                type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 1" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 2" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 3" />
                </div>
                </SwiperSlide>
            </Swiper>
                </div>
            <div className="text mt-3">
                <h5>السعر 200 جنيه</h5>
                <p className="m-0">Coffs Harbour</p>
                <p>Available Now</p>
            </div>
            </div>

            {/* 12 Swiper */}
            <div className="col-lg-4 col-md-6 col-12 mb-4">
                <div>
            <Swiper
                pagination={{
                type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 1" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 2" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 3" />
                </div>
                </SwiperSlide>
            </Swiper>
                </div>
            <div className="text mt-3">
                <h5>السعر 200 جنيه</h5>
                <p className="m-0">Coffs Harbour</p>
                <p>Available Now</p>
            </div>
            </div>
        </div>
            </div>
        </SwiperSlide>
        {/* thrid slide  */}
        <SwiperSlide>
            <div className="container my-5">
        <div className="row">
            {/* 1 Swiper */}
            <div className="col-lg-4 col-md-6 col-12 mb-4">
                <div>
            <Swiper
                pagination={{
                type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 1" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 2" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 3" />
                </div>
                </SwiperSlide>
            </Swiper>
                </div>
            <div className="text mt-3">
                <h5>السعر 200 جنيه</h5>
                <p className="m-0">Coffs Harbour</p>
                <p>Available Now</p>
            </div>
            </div>

            {/* 2 Swiper */}
            <div className="col-lg-4 col-md-6 col-12 mb-4">
                <div>

            <Swiper
                pagination={{
                type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 1" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 2" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 3" />
                </div>
                </SwiperSlide>
            </Swiper>
                </div>
            <div className="text mt-3">
                <h5>السعر 200 جنيه</h5>
                <p className="m-0">Coffs Harbour</p>
                <p>Available Now</p>
            </div>
            </div>

            {/* 3 Swiper */}
            <div className="col-lg-4 col-md-6 col-12 mb-4">
                <div>
            <Swiper
                pagination={{
                type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 1" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 2" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 3" />
                </div>
                </SwiperSlide>
            </Swiper>
                </div>
            <div className="text mt-3">
                <h5>السعر 200 جنيه</h5>
                <p className="m-0">Coffs Harbour</p>
                <p>Available Now</p>
            </div>
            </div>
            {/* 4 Swiper */}
            <div className="col-lg-4 col-md-6 col-12 mb-4">
                <div>

            <Swiper
                pagination={{
                type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 1" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 2" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 3" />
                </div>
                </SwiperSlide>
            </Swiper>
                </div>
            <div className="text mt-3">
                <h5>السعر 200 جنيه</h5>
                <p className="m-0">Coffs Harbour</p>
                <p>Available Now</p>
            </div>
            </div>
            {/* 5 Swiper */}
            <div className="col-lg-4 col-md-6 col-12 mb-4">
                <div>

            <Swiper
                pagination={{
                type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 1" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 2" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 3" />
                </div>
                </SwiperSlide>
            </Swiper>
                </div>
            <div className="text mt-3">
                <h5>السعر 200 جنيه</h5>
                <p className="m-0">Coffs Harbour</p>
                <p>Available Now</p>
            </div>
            </div>

            {/* 6 Swiper */}
            <div className="col-lg-4 col-md-6 col-12 mb-4">
                <div>
            <Swiper
                pagination={{
                type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 1" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 2" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 3" />
                </div>
                </SwiperSlide>
            </Swiper>
                </div>
            <div className="text mt-3">
                <h5>السعر 200 جنيه</h5>
                <p className="m-0">Coffs Harbour</p>
                <p>Available Now</p>
            </div>
            </div>
            {/* 7 Swiper */}
            <div className="col-lg-4 col-md-6 col-12 mb-4">
                <div>

            <Swiper
                pagination={{
                type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 1" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 2" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 3" />
                </div>
                </SwiperSlide>
            </Swiper>
                </div>
            <div className="text mt-3">
                <h5>السعر 200 جنيه</h5>
                <p className="m-0">Coffs Harbour</p>
                <p>Available Now</p>
            </div>
            </div>

            {/* 8 Swiper */}
            <div className="col-lg-4 col-md-6 col-12 mb-4">
                <div>

            <Swiper
                pagination={{
                type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 1" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 2" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 3" />
                </div>
                </SwiperSlide>
            </Swiper>
                </div>
            <div className="text mt-3">
                <h5>السعر 200 جنيه</h5>
                <p className="m-0">Coffs Harbour</p>
                <p>Available Now</p>
            </div>
            </div>

            {/* 9 Swiper */}
            <div className="col-lg-4 col-md-6 col-12 mb-4">
                <div>
            <Swiper
                pagination={{
                type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 1" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 2" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 3" />
                </div>
                </SwiperSlide>
            </Swiper>
                </div>
            <div className="text mt-3">
                <h5>السعر 200 جنيه</h5>
                <p className="m-0">Coffs Harbour</p>
                <p>Available Now</p>
            </div>
            </div>
            {/* 10 Swiper */}
            <div className="col-lg-4 col-md-6 col-12 mb-4">
                <div>

            <Swiper
                pagination={{
                type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 1" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 2" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 3" />
                </div>
                </SwiperSlide>
            </Swiper>
                </div>
            <div className="text mt-3">
                <h5>السعر 200 جنيه</h5>
                <p className="m-0">Coffs Harbour</p>
                <p>Available Now</p>
            </div>
            </div>

            {/* 11 Swiper */}
            <div className="col-lg-4 col-md-6 col-12 mb-4">
                <div>

            <Swiper
                pagination={{
                type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 1" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 2" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 3" />
                </div>
                </SwiperSlide>
            </Swiper>
                </div>
            <div className="text mt-3">
                <h5>السعر 200 جنيه</h5>
                <p className="m-0">Coffs Harbour</p>
                <p>Available Now</p>
            </div>
            </div>

            {/* 12 Swiper */}
            <div className="col-lg-4 col-md-6 col-12 mb-4">
                <div>
            <Swiper
                pagination={{
                type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 1" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 2" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="img">
                    <img src="src/assets/image/foto.jfif" alt="Slide 3" />
                </div>
                </SwiperSlide>
            </Swiper>
                </div>
            <div className="text mt-3">
                <h5>السعر 200 جنيه</h5>
                <p className="m-0">Coffs Harbour</p>
                <p>Available Now</p>
            </div>
            </div>
        </div>
            </div>
        </SwiperSlide>
    </Swiper>
    
    );
}
