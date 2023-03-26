import Image from "next/image";
import Link from "next/link";
import Author from "./_child/author";
import fetcher from "@/lib/fetcher"
import Spinner from "@/components/_child/spinner"
import Error from "@/components/_child/error"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function section3() {

  const {data, isLoading, isError} = fetcher('api/popular')

  if(isLoading){
    return (
      <Spinner/>
    )
  }

  if(isError){
    return (
      <Error/>
    )
  }

  return (
    <section className="container mx-auto md:px-20 py-16">
      <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>

      <Swiper
        breakpoints={{
          640:{
            slidesPerView:2,
            spaceBetween:30
          }
        }}
        loop={true}
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 2000,
        }}
      >
        {
          data.map((value, index) => (
            <SwiperSlide key={index}>
              <Post data={value} />
            </SwiperSlide>
          ))
        }
      </Swiper>
      {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">

      </div> */}
    </section>
  );
}

function Post({data}){
  const { id, title, category, img, published, author, description } = data;
  return (
    <div className="grid gap-4">
      <div className="images">
        <Link href={`/posts/${id}`}>
          <Image src={img || "/"} width="600" height="400" alt="blog image"/>
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="cat">
          <Link href={`/posts/${id}`}>
            <span className="text-orange-600 hover:text-orange-800">{category || "Unknown"}</span>
          </Link>
          <Link href={`/posts/${id}`}>
            <span className="text-gray-800 hover:text-gray-600"> - {published || "Unknown"}</span>
          </Link>
        </div>
        <div className="title">
          <Link href={`/posts/${id}`}>
            <span className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">{title || "title"}</span>
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          {description || description}
        </p>
        {author ? <Author {...author}/> : <></>}
      </div>
    </div>
  )
}