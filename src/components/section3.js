import Image from "next/image";
import Link from "next/link";
import Author from "./_child/author";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function section3() {
  return (
    <section className="container mx-auto md:px-20 py-16">
      <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>

      <Swiper
        slidesPerView={2}
        loop={true}
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        // autoplay={{
        //   delay: 2000,
        // }}
      >
        <SwiperSlide>{Post()}</SwiperSlide>
        <SwiperSlide>{Post()}</SwiperSlide>
        <SwiperSlide>{Post()}</SwiperSlide>
        <SwiperSlide>{Post()}</SwiperSlide>
      </Swiper>
      {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">

      </div> */}
    </section>
  );
}

function Post(){
  return (
    <div className="grid gap-4">
      <div className="images">
        <Link href="/">
          <Image src="/images/img1.jpg" width="600" height="400"/>
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
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
            <span className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">This is sample title of blog</span>
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
        <Author/>
      </div>
    </div>
  )
}