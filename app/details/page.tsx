import Link from "next/link";
import Image from "next/image";
import Close from "@/components/Close/Close";
import Videos from "@/components/Videos/Videos";

const Details = () => {
  return (
    <main className="flex justify-center min-h-screen ">

      <section className="relative flex flex-col items-center gap-4 w-[30rem] bg-[#1FA1D3]">

        <Image
          src="/icons/logo.png"
          width={48}
          height={48}
          alt="turkcell"
          className="absolute top-8 left-8"
        />

        <Close />

        <Videos />

        <footer className="absolute bottom-0 flex items-center justify-center w-full px-8 py-6">
          <button className="flex items-center justify-between w-full py-4 px-8 rounded-[3rem] bg-[#FFC02E]">
            <Link href={"https://www.turkcell.com.tr/"} className="font-bold text-center text-2xl">Turkcell’le Keşfet</Link>
            <Image src="/icons/arrow-right.svg" width={20} height={20} alt="arrow"/>
          </button>
        </footer>

      </section>
    </main>
  );
};

export default Details;
