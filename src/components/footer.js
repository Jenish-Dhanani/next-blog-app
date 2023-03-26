import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import Link from 'next/link'
import Newslatter from "./_child/newslatter";

export default function footer() {

  const bg = {
    backgroundImage : "url('/images/footer.png')",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: "bottom left"
  }

  return (
    <footer className="bg-gray-50" style={bg}>
      <Newslatter></Newslatter>
      <div className="container mx-auto flex justify-center py-12">
          <div className="py-5">
              <div className="flex gap-6 justify-center">
                    <Link href={"/"}><ImFacebook color="#555555" /></Link>
                    <Link href={"/"}><ImTwitter color="#555555" /></Link>
                    <Link href={"/"}><ImYoutube color="#555555" /></Link>
              </div>
              <p className="py-5 text-gray-800 text-center">Copyright ©2023 All rights reserved | This template is made with by Jenish Dhanani</p>
              <p className="text-gray-600 text-center">Terms & Condition</p>
          </div>
      </div>

    </footer>
  )
}
