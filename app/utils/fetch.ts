const SECRET_KEY_UNSPLASH = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;
const SECRET_KEY_PEXELS = process.env.NEXT_PUBLIC_PEXELS_SECRET_KEY;

export const fetchRandomPhotos = async () => {
  const URL: string = `https://api.unsplash.com/photos/random?client_id=${SECRET_KEY_UNSPLASH}`;

  try {
    const res = await fetch(URL, {
      next: { revalidate: 1200 },
      cache: "force-cache",
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error("An error occured while fetching data");
    }

    return (data as any) || [];
  } catch (err) {
    console.error(`Error : `, err);

    // throw new Error(`An error, occured whle trying to fetch`);
  }
};

export const downloadPhoto = async (id: string) => {
  const URL: string = `https://api.unsplash.com/photos/${id}/download?client_id=${SECRET_KEY_UNSPLASH}`;

  try {
    const res = await fetch(URL);
    const data = await res.json();
    return (data as any) || [];
  } catch (err) {
    console.error(err);
    throw new Error("An error occured");
  }
};

export const getUserProfile = async (userName: string) => {
  const URL: string = `https://api.unsplash.com/users/${userName}?client_id=${SECRET_KEY_UNSPLASH}`;

  try {
    const res = await fetch(URL, { cache: "force-cache" });
    const data = res.json();

    if (!res.ok) {
      throw new Error("An errror occured while fetching data");
    }

    return (data as any) || [];
  } catch (err) {
    console.error(`Error : `, err);
  }
};

export const getPhotosByPages = async (number: number = 1) => {
  const URL: string = `https://api.unsplash.com/photos?client_id=${SECRET_KEY_UNSPLASH}&page=${number}&per_page=${25}`;

  try {
    const res = await fetch(URL, {
      cache: "force-cache",
      next: { revalidate: 3600 },
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error("An error occured while fetching data");
    }

    return (data as any) || [];
  } catch (err) {
    console.error(`Error: `, err);
  }
};

export const getPhotoById = async (id: string) => {
  const URL: string = `https://api.unsplash.com/photos/${id}?client_id=${SECRET_KEY_UNSPLASH}`;

  try {
    const res = await fetch(URL, {
      cache: "force-cache",
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error("An error occured while fetching data");
    }
    return (data as any) || [];
  } catch (err) {
    console.error(`Error: `, err);
  }
};

export const searchPhotos = async (keyword: string) => {
  const URL: string = `https://api.unsplash.com/search/photos?client_id=${SECRET_KEY_UNSPLASH}&query=${keyword}&per_page=${25}`;

  try {
    const res = await fetch(URL, {
      cache: "no-store"
    });

    if (!res.ok) {
      throw new Error("An error occured while fetching data");
    }
    const data = await res.json();
    delete data["total"];
    delete data["total_pages"];
    const Data = Object.entries(data);
    const photos = Data[0][1];
    return (photos as any) || [];
  } catch (err) {
    console.error(`Error: `, err);
  }
};

export const getPhotosByPagesFromPexels = async (number: number = 1) => {
  const URL: string = `https://api.pexels.com/v1/curated?per_page=${80}&page=${number}`;

  try {
    const res = await fetch(URL, {
      headers: {
        Authorization: `${SECRET_KEY_PEXELS}`,
      },
      cache: "no-cache",
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error("An error occured while fetching data");
    }

    // Mutation of data, just to get arrays of 80 photos
    delete data["page"];
    delete data["per_page"];
    delete data["total_results"];
    delete data["next_page"];
    const Data = Object.entries(data);
    const photos = Data[0][1];

    return (photos as any) || [];
  } catch (error) {
    console.error(`Error: `, error);
  }
};
