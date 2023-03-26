import Image from "next/image"
import Link from "next/link"
import Author from "./_child/author"
import fetcher from "@/lib/fetcher"
import Spinner from "@/components/_child/spinner"
import Error from "@/components/_child/error"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";

export default function section1() {

  const {data, isLoading, isError} = fetcher('api/trending')

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
            {
              data.map((value, index) => (
                <SwiperSlide key={index}>
                  <Slide data={value} />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
    </section>
  )
}

function Slide({data}){

  const { id, title, category, img, published, author, description } = data;

  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        <Link href={`/posts/${id}`}>
          <Image src={img || "/"} width="600" height="600" alt="blog image"/>
        </Link>
      </div>
      <div className="info flex justify-center flex-col px-2 md:px-0">
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
            <span className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">{title || "Title"}</span>
          </Link>
        </div>
        <div>
          <p className="text-gray-500 py-3 pr-5 text-justify">
            {description || "description"}
          </p>
        </div>
        {author ? <Author {...author}/> : <></>}
      </div>
    </div>
  )
}