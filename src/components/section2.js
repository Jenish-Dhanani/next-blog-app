import Image from "next/image"
import Link from "next/link"
import Author from "./_child/author"

export default function section2() {
  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {Post()}
        {Post()}
        {Post()}
        {Post()}
        {Post()}
        {Post()}
      </div>
    </section>
  )
}

function Post(){
  return (
    <div className="item">
      <div className="images">
        <Link href="/">
          <Image src="/images/img1.jpg" className="rounded" width="500" height="350"/>
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
            <span className="text-xl font-bold text-gray-800 hover:text-gray-600">This is sample title of blog</span>
          </Link>
        </div>
        <p className="text-gray-500 py-3 text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
        <Author/>
      </div>
    </div>
  )
}