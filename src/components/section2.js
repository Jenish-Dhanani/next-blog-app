import Image from "next/image"
import Link from "next/link"
import Author from "@/components/_child/author"
import fetcher from "@/lib/fetcher"
import Spinner from "@/components/_child/spinner"
import Error from "@/components/_child/error"

export default function section2() {

  const {data, isLoading, isError} = fetcher('api/posts')

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
    <section className="container mx-auto md:px-20 py-10 px-5">
      <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {
          data.map((value, index)=>(
            <Post data={value} key={index}></Post>
          ))
        }
      </div>
    </section>
  )
}

function Post({data}){
  const { id, title, category, img, published, author, subtitle } = data;
  return (
    <div className="item">
      <div className="images">
        <Link href={`/posts/${id}`}>
          <Image src={img || "/"} className="rounded" width="500" height="350" alt="blog image"/>
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
            <span className="text-xl font-bold text-gray-800 hover:text-gray-600">{title || "Title"}</span>
          </Link>
        </div>
        <p className="text-gray-500 py-3 text-justify">
          {subtitle || "Subtitle"}
        </p>
        {author? <Author {...author}/> : <></>}
      </div>
    </div>
  )
}