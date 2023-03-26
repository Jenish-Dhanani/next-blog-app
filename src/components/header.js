import Link from "next/link";
import styles from './header.module.css';
import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";

export default function header() {
  return (
    <header className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
        <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
          <input type="text" placeholder="Search..." className={styles.searchInput} />
        </div>
        <div className="shrink w-80 sm:order-2">
          <Link href="/">
            <span className="font-bold uppercase text-3xl">Home</span>
          </Link>
        </div>
        <div className="w-96 order-3 flex justify-center">
          <div className="flex gap-6">
            <Link href="/"><ImFacebook color="#888888"/></Link>
            <Link href="/"><ImTwitter color="#888888"/></Link>
            <Link href="/"><ImYoutube color="#888888"/></Link>
          </div>
        </div>
      </div>
    </header>
  )
}
