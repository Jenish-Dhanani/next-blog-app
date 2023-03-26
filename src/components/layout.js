import Header from "@/components/header";
import Footer from "@/components/footer";
import Head from "next/head";

export default function layout({children, title}) {
  return (
    <>
      <Head>
        <title>{title?title:'Next.js Blog App'}</title>
      </Head>
      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
    </>
  )
}
