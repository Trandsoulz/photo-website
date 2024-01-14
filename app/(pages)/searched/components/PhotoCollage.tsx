"use client";

import { RandomPhotos, searchedPhotos } from "@/app/types";
import { useState, useEffect } from "react";
import { getPhotosByPages } from "@/app/utils/fetch";
import Loading from "./Loading";
// import Layout from "react-masonry-list";
import Photo from "./Photo";
import Masonry from "react-masonry-css";
import { usePhotoStore } from "@/app/store/PhotoStore";

const PhotoCollage = ({ photos }: { photos: searchedPhotos[] }) => {
  const [photosPerPage, setPhotosPerPage] =
    useState<Array<searchedPhotos>>(photos);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const { setPhotosFromPhotoStore } = usePhotoStore();

  // Function to fetch more pages
  const fetchMorePhotos = async () => {
    try {
      setLoading(true);
      const newPage = page + 1;
      const newPhotos = await getPhotosByPages(newPage);
      setPhotosPerPage([...photosPerPage, ...newPhotos]);

      // console.log(photosPerPage);
      setPage(newPage);
      setLoading(false);
      // console.log(page)
    } catch (err) {
      throw new Error("An error occured");
    }
  };

  // Function to trigger the fetch

  const handleScroll = () => {
    const height = document.documentElement.scrollHeight;
    const top = document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;

    // Adjust the threshold based on the number of photos added
    const threshold = 2500 + photosPerPage.length / photos.length;

    if (windowHeight + top + 1 >= height - threshold) {
      fetchMorePhotos();
    }

    // Set session storage of the group of photos, so they can be used anywhere and everywhere in the entire app
    // if (typeof window !== undefined) {
    //   const data = JSON.stringify(photosPerPage);
    //   sessionStorage.setItem("photosPerPage", data);
    // }

    // // window.onbeforeunload = function () {
    // //   const storeScrollPosition = () => {
    // localStorage.setItem("scrollPosition", window.scrollY.toString());

    //   };
    //   storeScrollPosition();
    // };
  };

  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== undefined) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [photosPerPage, page]);

  // Used to initialise the global state settings for the photos
  useEffect(() => {
    setPhotosFromPhotoStore(photosPerPage);
  //   if (typeof window !== undefined) {
  //     const data = JSON.stringify(photosPerPage);
  //     sessionStorage.setItem("photosPerPage", data);
  //   }
  }, []);

  console.log(photosPerPage);

  return (
    <>
      {/* First attempt */}
      {/* <main className="max-w-7xl grid gap-7 grid-cols-2 lg:grid-cols-3 mx-auto p-6">
        {photosPerPage &&
          photosPerPage?.map((photo) => (
            <>
              <Photo key={photo.id} photo={photo} />
            </>
          ))}
      </main> */}

      {/* Second attempt */}
      {/* <Layout
        className="max-w-7xl mx-auto p-6"
        gap={30}
        minWidth={40}
        items={photosPerPage.map((photo) => (
          <Photo key={photo.id} photo={photo} />
        ))}
      ></Layout> */}

      <Masonry
        breakpointCols={{
          default: 3,
          800: 2,
          500: 2,
        }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {photosPerPage?.map((photo: searchedPhotos) => (
          <>
            <Photo key={photo.id} photo={photo} />
          </>
        ))}
      </Masonry>

      {loading && <Loading />}

    
    </>
  );
};

export default PhotoCollage;