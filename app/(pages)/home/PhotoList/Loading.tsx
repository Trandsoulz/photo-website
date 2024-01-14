"use client";

import { ScaleLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center">
      <ScaleLoader color="#58a495" height={45} width={6} speedMultiplier={1} />
    </div>
  );
};

export default Loading;
