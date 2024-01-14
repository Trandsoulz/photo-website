"use client";

import Navbar from "@/app/components/Navbar";
import { usePhotoStore } from "@/app/store/PhotoStore";
import { useState, useEffect } from "react";
import Image from "next/image";
import { RandomPhotos } from "@/app/types";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { saveAs } from "file-saver";
import Heart from "@/public/Icons/Heart";
import HeartBlack from "@/public/Icons/HeartBlack";
import { downloadPhoto, getPhotoById } from "@/app/utils/fetch";
import Share from "@/public/Icons/Share";
import { toast } from "sonner";
import Loading from "./loading";
import { useRouter } from "next/navigation";
import slugify from "slugify";

const IndividualPhoto = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const { photosFromPhotoStore } = usePhotoStore();

  // const [Img, setImg] = useState<RandomPhotos[] | null>(null);
  const [heartColor, setHeartColor] = useState<boolean>(false);
  const [idOfPhoto, setIdOfPhoto] = useState<any | null>(null);

  // Find photo wth url
  const idOfIndividualPhoto = params?.id;
  // console.log(idOfIndividualPhoto);

  // Retrieve information about the photo
  useEffect(() => {
    // Retrieve information about this particular photo from session storage
    // if (typeof window !== undefined) {
    //   const data = sessionStorage.getItem("photosPerPage");

    //   const JSONPhotoData: RandomPhotos[] = data ? JSON?.parse(data) : "";
    //   // console.log(JSONPhotoData);

    //   // Filter the photo from the array
    //   const actualPhoto = JSONPhotoData?.filter(
    //     (photo) => photo?.id === idOfIndividualPhoto
    //   );
    //   // console.log(actualPhoto);
    //   // Store the photo in a state
    //   setImg(actualPhoto);
    // }

    // Fetch data of the photo using an async fetch request
    const fetchMoreInfoFunc = async (url: string) => {
      const data = await getPhotoById(url);
      setIdOfPhoto(data);
      // console.log(data);
    };

    fetchMoreInfoFunc(idOfIndividualPhoto);
  }, [idOfIndividualPhoto]);

  //Function for downloading
  const downloadFunc = async (url: string) => {
    // const data = await downloadPhoto(idOfIndividualPhoto);
    // console.log(data);
    downloadPhoto(idOfIndividualPhoto);
    saveAs(`${url}`, `(${idOfPhoto?.alt_description})-Viewstock`);
  };

  // Function for copying URL
  const copyUrl = () => {
    if (
      typeof window !== undefined &&
      navigator.clipboard &&
      navigator.clipboard.writeText
    ) {
      navigator.clipboard.writeText(window.location.href);
      toast.success(`You've copied the URL`, {
        position: "top-center",
        duration: 3000,
      });
    } else {
      toast.error(`Can't copy the URL`, {
        position: "top-center",
        duration: 3000,
      });
    }
  };

  // Storing variables
  // console.log(Img);
  // const ImageId = Img && Img[0];
  const imageProfile = idOfPhoto && idOfPhoto?.user?.profile_image?.large;
  const imageSrc = idOfPhoto && idOfPhoto?.urls?.regular;
  console.log(`idOfPhoto: `, idOfPhoto);
  // console.log(`ImageId: `, ImageId);

  return (
    <>
      {idOfPhoto === null ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <Navbar />
          <nav className="px-4 py-4 md:p-7 items-center bg-slate-100 flex justify-between">
            <div className="md:block hidden">
              <a
                href={`${idOfPhoto?.user?.links?.html}`}
                className="flex space-x-2 h-5 items-center "
              >
                <Avatar
                  showFallback
                  src={`${imageProfile}`}
                  className="hover:scale-110 duration-200"
                />
                {/* <Image
                  className="rounded-[50%] h-[30px] w-[30px] md:h-[40px] md:w-[40px] hover:scale-110 duration-200"
                  src={`${imageSrc}`}
                  height={40}
                  width={40}
                  alt={`${Img && ImageId?.user?.first_name}`}
                /> */}

                <p className="">{idOfPhoto?.user?.name}</p>
              </a>
            </div>
            <div
              className={
                heartColor
                  ? `bg-red-700 md:hidden block border-2 rounded-xl p-3`
                  : `md:hidden block border-2 rounded-xl p-3`
              }
              onClick={() => setHeartColor(!heartColor)}
            >
              {heartColor ? <Heart /> : <HeartBlack />}
            </div>

            <div>
              <Dropdown showArrow>
                <DropdownTrigger>
                  <Button
                    color="default"
                    className="border-2 text-xs md:text-base hover:scale-110 duration-200"
                    variant="bordered"
                  >
                    Download for Free
                  </Button>
                </DropdownTrigger>

                <DropdownMenu>
                  <DropdownItem
                    onClick={() => downloadFunc(`${idOfPhoto?.urls?.full}`)}
                  >
                    Full
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => downloadFunc(`${idOfPhoto?.urls?.regular}`)}
                  >
                    Regular
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => downloadFunc(`${idOfPhoto?.urls?.small}`)}
                  >
                    Small
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </nav>

          <section className="md:w-[40%] lg:w-[25%] h-auto mx-auto mt-4">
            <a href={`${imageSrc}`} download>
              <Image
                priority
                src={`${imageSrc}`}
                alt={`${idOfPhoto?.alt_description}`}
                height={idOfPhoto?.height}
                width={idOfPhoto?.width}
              />
            </a>
          </section>

          <section>
            {/* <div>
              <p>Views</p>
            <p>{ ImageId?.}</p>
            </div> */}

            <div className="flex md:justify-end justify-between items-center mt-4 px-4 md:space-x-3">
              <div className="block md:hidden">
                <a
                  href={`${idOfPhoto?.user?.links?.html}`}
                  className="flex space-x-2 h-5 text-sm md:text-base items-center "
                >
                  <Avatar
                    showFallback
                    src={`${imageProfile}`}
                    className="hover:scale-110 duration-200"
                  />
                  {/* <Image
                  className="rounded-[50%] h-[30px] w-[30px] md:h-[40px] md:w-[40px] hover:scale-110 duration-200"
                  src={`${imageSrc}`}
                  height={40}
                  width={40}
                  alt={`${Img && ImageId?.user?.first_name}`}
                /> */}

                  <p className="">{idOfPhoto?.user?.name}</p>
                </a>
              </div>
              <div
                className={
                  heartColor
                    ? `bg-red-700 cursor-pointer hidden md:block border-2 rounded-xl p-2`
                    : `hidden md:block cursor-pointer border-2 rounded-xl p-2`
                }
                onClick={() => setHeartColor(!heartColor)}
              >
                {heartColor ? <Heart /> : <HeartBlack />}
              </div>
              <Button
                variant="bordered"
                className="border-2 text-xs md:text-base hover:scale-110 duration-200"
                endContent={<Share />}
                onClick={() => copyUrl()}
              >
                Share Photo
              </Button>
            </div>
          </section>

          <section className="text-xs md:text-base">
            <div className="px-4 mt-4 flex justify-between ">
              <h1 className="font-semibold">
                {" "}
                Views: <span className="font-normal">
                  {idOfPhoto?.views}
                </span>{" "}
              </h1>
              <h1 className="font-semibold">
                {" "}
                Downloads:{" "}
                <span className="font-normal">{idOfPhoto?.downloads}</span>{" "}
              </h1>
            </div>

            <div className="flex mt-4 px-4 ">
              <h1 className="">
                {" "}
                It`s free to use under the Unsplash License👌{" "}
              </h1>
            </div>

            <div className="px-4 mt-4">
              {idOfPhoto?.tags?.map((tag: any, index: string | undefined) => (
                <>
                  <button
                    onClick={() => router.push(`/searched/${slugify(tag?.title)}`, { scroll: false})}
                    id={index}
                    className="m-1 text-xs md:text-base hover:scale-105 bg-slate-300 py-1 duration-200 px-3 rounded-md"
                  >
                    {tag?.title}
                  </button>
                </>
              ))}
            </div>
          </section>

          <section className="p-4 md:p-8">
            <h1 className="font-semibold text-xl md:text-3xl">
              Related Photos
            </h1>
          </section>

          {/* <h1>This is a dynamic route {params.id} </h1> */}
        </>
      )}
    </>
  );
};

export default IndividualPhoto;
