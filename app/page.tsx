import HomePage from "./(pages)/home/Home";
import {
  fetchRandomPhotos,
  getPhotosByPages,
} from "./utils/fetch";

const Home = async () => {

  const randomPhotos = await fetchRandomPhotos();
  const photos = await getPhotosByPages();
  // console.log(photos)

  return (
    <>
      <HomePage randomPhotos={randomPhotos} photos={photos} />
    </>
  );
};

export default Home;
