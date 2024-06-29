import Link from "next/link";
import Image from "next/image";
import Slider from "@/components/Slider/Slider";
import Close from "@/components/Close/Close";

export default function Home() {
  return (
    <main className="flex justify-center min-h-screen ">
      <section className="relative flex flex-col items-center gap-4 w-[30rem] bg-[#ffffff]">

        <Close />

        <header className="flex flex-col justify-center items-center gap-4 mt-16">
          <Image src="/icons/logo.png" width={48} height={48} alt="Samsung Galaxy S24" />
          <h1 className=" font-bold text-center text-3xl">Samsung Galaxy S24’le Tanışmaya Hazır Mısın?</h1>
        </header>

        <Slider />

        <footer className="absolute bottom-0 flex items-center justify-center w-full py-4 px-8 rounded-t-[3rem] bg-[#1FA1D3]">
          <button className="flex items-center justify-between w-full py-4 px-8 rounded-[3rem] bg-[#FFC02E]">
            <Link href={"/details"} className="font-bold text-center text-2xl">Galaxy S24’ü Keşfet</Link>
            <Image src="/icons/arrow-right.svg" width={20} height={20} alt="arrow"/>
          </button>
        </footer>

      </section>
    </main>
  );
}
