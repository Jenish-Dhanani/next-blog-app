import Layout from "@/components/layout";
import Author from "@/components/_child/author";
import Image from "next/image";
import Related from "@/components/_child/related";

export default function page() {
  return (
    <Layout>
      <section className="container mx-auto md:px-2 py-16 w-1/2">
        <div className="flex justify-center">
          <Author></Author>
        </div>

        <div className="post py-10">
          <h1 className="font-bold text-4xl text-center pb-5">
            No Title
          </h1>
          <p className="text-gray-500 text-xl text-center">
            No Title
          </p>
          <div className="py-10">
            <Image src="/images/img2.jpg" width={900} height={600}></Image>
          </div>
          <div className="content text-gray-600 text-lg flex flex-col gap-4">
            No Description
          </div>
        </div>

        <Related />
      </section>
    </Layout>
  );
}
