"use client";

import { RandomPhotos } from "@/app/types";
import Download from "@/public/Icons/Download";
import { blurhashToBase64 } from "blurhash-base64";
import Image from "next/image";
import { saveAs } from "file-saver";
import { useRouter } from "next/navigation";
import ModalComponent from "@/app/(pages)/photo/components/Modal";
import { useDisclosure } from "@nextui-org/react";
import Link from "next/link";
import ImageComponent from "../../photo/components/Image";

const Photo = ({ photo }: { photo: RandomPhotos }) => {
  //   console.log(photo);

  const router = useRouter();

  // const { isOpen, onOpenChange, onOpen, onClose } = useDisclosure();

  // const CloseModal = () => {
  //   onClose();
  //   router.back()
  // }

  return (
    <>
      {/* <ModalComponent isOpen={isOpen} onOpenChange={onOpenChange} onClose={CloseModal}>
        <ImageComponent
          params={{
            id: `${photo?.id}`,
          }}
        />
      </ModalComponent> */}
      <button
        type="button"
        onClick={() => router.push(`/photo/${photo?.id}`, { scroll: false })}

        // href={`/?photo=${photo?.id}`/}
        // onClick={onOpen}
        // scroll={false}
        // href={`/photo/${photo?.id}`}
      >
        <main className="px-4 md:px-4 md:py-6 my-6 md:my-0 overlay-demo">
          <Image
            src={`${photo?.urls?.regular}`}
            alt={`${photo?.alt_description}`}
            height={photo?.height}
            width={photo?.width}
            placeholder="blur"
            blurDataURL={`${
              photo?.blur_hash && blurhashToBase64(`${photo?.blur_hash}`)
            }`}
            className="rounded duration-200  "
            priority
          />

          <div className="overlay-demoDiv text-white p-3 rounded text-xs md:text-xs lg:text-sm cursor-pointer duration-200">
            <Download
              className="scale-110 hover:scale-125 duration-200 mb-[0.6rem]"
              onClick={() =>
                saveAs(
                  `${photo?.urls?.regular}`,
                  `(${photo?.alt_description})-Viewstock`
                )
              }
            />
            <h1 className="flex items-center h-10 space-x-2 md:space-x-3">
              <Image
                className="rounded-[50%] h-[30px] w-[30px] md:h-[40px] md:w-[40px]"
                src={`${photo?.user?.profile_image?.large}`}
                height={40}
                width={40}
                alt={`${photo?.user?.first_name}`}
              />
              <a
                className="text-white"
                href={`${photo?.user?.links?.html}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                {photo?.user?.name}
              </a>{" "}
              {/* on{" "}
            <a
              className="text-black"
              target="_blank"
              rel="noopener noreferrer"
              href="https://unsplash.com/?utm_source=your_app_name&utm_medium=referral"
            >
              Unsplash
            </a> */}
            </h1>
          </div>
        </main>
      </button>
    </>
  );
};

export default Photo;
