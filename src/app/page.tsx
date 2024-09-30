
import Link from "next/link";
import Footer from "./components/Footer";


export default function Home() {

  return (
    <div>
      <div className="mt-60 min-h-screen font-luckiest-guy-regular  flex-col justify-center items-center text-gray-500">
        <div className="flex justify-center text-7xl items-center">Hello, This is <p className="text-orange-300 ml-3">EinsteinAI</p></div>
        <div className="flex justify-center text-4xl mt-8 items-center">I am a digital twin of Albert Einstein...Chat with me</div>
         <Link href={"/chat"}>
      <div className="flex justify-center mx-auto items-center border-gray-400 border-4 w-1/4 rounded-xl text-2xl mt-20 cursor-pointer p-4">
        {/* Let's Go */}
        Let&apos;s Go
      </div>
    </Link>
      </div>
      <Footer />
    </div>
  );
}
