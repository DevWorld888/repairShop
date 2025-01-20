import Image from "next/image";
import Link from "next/link";

/**
 * The Home component renders the main landing page of the application.
 * It displays a full-screen background image and a welcoming message.
 *
 * @returns {JSX.Element} The rendered Home component.
 */
export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen py-2">
      <Image
        alt="Home background"
        src="/images/home-bg.jpg"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute flex flex-col gap-6 p-10 rounden-xl bg-black/90 w-4/5 sm:max-w-96 mx-auto tex-white sm:text-2xl text-white">
        <h1 className="text-4xl font-bold">Welcome to Computer Repair</h1>
        <address>24 Barnsburry Grove Bexley North</address>
        <p>Open Daily:9 am to 5 pm</p>
        <Link href="/services">0412053218</Link>
      </div>
      
    </div>
  );
}
