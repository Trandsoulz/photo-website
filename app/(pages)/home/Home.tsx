"use client";

import { RandomPhotos } from "@/app/types/index";
import { Divider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import Navbar from "../../components/HomeNavbar";
import Search from "@/public/Icons/Search";
import Mouse from "@/public/Icons/Mouse";
import PhotoCollage from "./PhotoList/PhotoCollage";

const HomePage = ({
  randomPhotos,
  photos,
}: {
  randomPhotos: RandomPhotos;
  photos: RandomPhotos[];
}) => {
  const { push } = useRouter();

  return (
    <>
      <Navbar />
      <main
        className={`h-screen bg-cover bg-center bg-no-repeat gradienting pt-12 relative`}
        style={{ backgroundImage: `url('${randomPhotos?.urls?.regular}')` }}
      >
        <main className="flex justify-center w-full  items-center h-[55vh] md:h-[75vh] z-10 absolute text-md md:text-2xl">
          <Search className="mr-3 mt-2 scale-125" />
          <Divider
            orientation="vertical"
            className=" bg-slate-200 h-10 w-[2px]"
          />
          <input
            type="text"
            className="bg-transparent text-white outline-none placeholder:text-slate-200 p-4 rounded-lg"
            placeholder="Search for free photos..."
          />
        </main>
        {/* <Image
          src={`${photos.urls?.regular}`}
          alt={`${photos?.alt_description}`}
          height={photos.height}
          width={photos.width}
          loading='lazy'
          priority
        /> */}

        <Mouse className="absolute z-10 bottom-0 md:right-1/2 scale-110 duration-200 " />

        <h1 className="text-white text-sm absolute z-10 bottom-0 right-0">
          Photo by{" "}
          <a
            href={`https://unsplash.com/@${randomPhotos?.user?.username}`}
            target="_blank"
          >
            {randomPhotos?.user?.name}
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/?utm_source=your_app_name&utm_medium=referral">
            Unsplash
          </a>
        </h1>
      </main>

      <section className="">
        <PhotoCollage photos={photos} />
      </section>
    </>
  );
};

export default HomePage;
