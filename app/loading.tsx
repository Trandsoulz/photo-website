"use client";

import { ScaleLoader } from "react-spinners";

const loading = () => {
  return (
    <div className="h-screen flex justify-center gradienting items-center">
      <ScaleLoader color="#58a495" height={45} width={6} speedMultiplier={1} />
    </div>
  );
};

export default loading;
