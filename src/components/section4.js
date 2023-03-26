import Image from "next/image";
import Link from "next/link";
import Author from "./_child/author";

export default function section4() {
  return (
    <section className="container mx-auto md:px-20 py-16">
      <div className="grid lg:grid-cols-2">
        <div className="item">
          <h1 className="font-bold text-4xl py-12 text-start">Business</h1>
          <div className="flex flex-col gap-6">
            {/* posts */}
            {Post()}
            {Post()}
            {Post()}
            {Post()}
          </div>
        </div>
        <div className="item">
          <h1 className="font-bold text-4xl py-12 text-start">Travel</h1>
          <div className="flex flex-col gap-6">
            {/* posts */}
            {Post()}
            {Post()}
            {Post()}
            {Post()}
          </div>
        </div>
      </div>
    </section>
  );
}

function Post() {
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href="/">
          <Image
            src="/images/img1.jpg"
            className="rounded"
            width={300}
            height={250}
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link href="/">
            <span className="text-orange-600 hover:text-orange-800">
              Business, Travel
            </span>
          </Link>
          <Link href="/">
            <span className="text-gray-800 hover:text-gray-600">
              {" "}
              - March 26, 2023
            </span>
          </Link>
        </div>
        <div className="title">
          <Link href="/">
            <span className="text-xl font-bold text-gray-800 hover:text-gray-600">
              This is sample title of blog
            </span>
          </Link>
        </div>
        <Author />
      </div>
    </div>
  );
}
