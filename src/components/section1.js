import Image from "next/image"
import Link from "next/link"
import Author from "./_child/author"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";

export default function section1() {

  return (
    <section className="py-16 sm:bg-[url('/images/banner.png')] bg-no-repeat bg-right" >
      <div className="container mx-auto md:px-20 px-5">
        <h1 className="font-bold text-4xl pb-12 text-center select-none">
          Trending
        </h1>
        <div className="backdrop-blur-3xl shadow-2xl shadow-slate-400 rounded-2xl overflow-hidden">
          <Swiper
            slidesPerView={1}
            loop={true}
            pagination={true}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            autoplay={{
              delay:2000
            }}
          >
            <SwiperSlide>{Slide()}</SwiperSlide>
            <SwiperSlide>{Slide()}</SwiperSlide>
            <SwiperSlide>{Slide()}</SwiperSlide>
            <SwiperSlide>{Slide()}</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

function Slide(){
  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        <Link href="/">
          <Image src="/images/img4.png" width="600" height="600"/>
        </Link>
      </div>
      <div className="info flex justify-center flex-col px-2 md:px-0">
        <div className="cat">
          <Link href="/">
            <span className="text-orange-600 hover:text-orange-800">Business, Travel</span>
          </Link>
          <Link href="/">
            <span className="text-gray-800 hover:text-gray-600"> - March 26, 2023</span>
          </Link>
        </div>
        <div className="title">
          <Link href="/">
            <span className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">This is sample title of blog</span>
          </Link>
        </div>
        <div>
          <p className="text-gray-500 py-3 pr-5 text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
        </div>
        <Author/>
      </div>
    </div>
  )
}