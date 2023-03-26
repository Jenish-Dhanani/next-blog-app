import Image from "next/image";
import Link from "next/link";
import Author from "./_child/author";
import fetcher from "@/lib/fetcher"
import Spinner from "@/components/_child/spinner"
import Error from "@/components/_child/error"


export default function section4() {

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
    <section className="container mx-auto md:px-20 py-16 px-5">
      <div className="grid lg:grid-cols-2">
        <div className="item">
          <h1 className="font-bold text-4xl py-12 text-start">Business</h1>
          <div className="flex flex-col gap-6">
            {/* posts */}
            {data[1] && <Post data={data[1]}/>}
            {data[2] && <Post data={data[2]}/>}
            {data[3] && <Post data={data[3]}/>}
          </div>
        </div>
        <div className="item">
          <h1 className="font-bold text-4xl py-12 text-start">Travel</h1>
          <div className="flex flex-col gap-6">
            {/* posts */}
            {data[4] && <Post data={data[4]}/>}
            {data[5] && <Post data={data[5]}/>}
            {data[2] && <Post data={data[2]}/>}
          </div>
        </div>
      </div>
    </section>
  );
}

function Post({data}) {
  const { id, title, category, img, published, author, description } = data;
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={`/posts/${id}`}>
          <Image
            src={img || "/"}
            className="rounded"
            width={300}
            height={250}
            alt="blog image"
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link href={`/posts/${id}`}>
            <span className="text-orange-600 hover:text-orange-800">
              {category || "Unknown"}
            </span>
          </Link>
          <Link href={`/posts/${id}`}>
            <span className="text-gray-800 hover:text-gray-600">
              {" "}
              - {published || "Unknown"}
            </span>
          </Link>
        </div>
        <div className="title">
          <Link href={`/posts/${id}`}>
            <span className="text-xl font-bold text-gray-800 hover:text-gray-600">
              {title || "Title"}
            </span>
          </Link>
        </div>
        {author && <Author {...author}/>}
      </div>
    </div>
  );
}
