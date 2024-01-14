import HomePage from "./Home";
import {
  fetchRandomPhotos,
  getPhotosByPages,
} from "@/app/utils/fetch";

const Home = async () => {
  const randomPhotos = await fetchRandomPhotos();
  const photos = await getPhotosByPages();
  // console.log(photos);

  return (
    <>
      <HomePage randomPhotos={randomPhotos} photos={photos} />
    </>
  );
};

export default Home;
