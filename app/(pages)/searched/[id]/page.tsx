import Navbar from "@/app/components/Navbar";
import { searchPhotos } from "@/app/utils/fetch";
import PhotoCollage from "../components/PhotoCollage";

const SearchPage = async ({ params }: { params: { id: string } }) => {
  const parameters = params?.id;
  const searchParams = parameters.replaceAll("-", " ");

  const searchedPhotos = await searchPhotos(parameters);
  console.log(searchedPhotos);

  return (
    <>
      <Navbar />
      <h1 className="capitalize font-semibold text-3xl p-8">{searchParams}</h1>

      <PhotoCollage photos={searchedPhotos} />
    </>
  );
};

export default SearchPage;
