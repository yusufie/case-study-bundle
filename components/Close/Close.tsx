import Image from "next/image";
import Link from "next/link";

const Close = () => {
  return (
    <button className="absolute top-8 right-6 flex items-center justify-center w-12 h-12 rounded-[1.25rem] bg-black">
      <Link href="/">
        <Image src="/icons/cross.svg" width={36} height={36} alt="close" />
      </Link>
    </button>
  );
};

export default Close;
