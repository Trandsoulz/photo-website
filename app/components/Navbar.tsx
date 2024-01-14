"use client";
import Link from "next/link";
import { toast } from "sonner";

const Navbar = () => {
  // Check if there's internet connection or not

  if (typeof window !== "undefined") {
    window.addEventListener("offline", () => {
      toast.error(`You're not connected to the internet`, {
        position: "top-center",
        duration: 5000,
      });
    });

    window.addEventListener("online", () => {
      toast.success(`You're back online`, {
        position: "top-center",
        duration: 5000,
      });
    });

    // window.onbeforeunload = function () {
    //   // return 'Are you sure you want to leave?';
    //   const storeScrollPosition = () => {
    //     localStorage.setItem("scrollPosition", window.scrollY.toString());
    //   };
    //   storeScrollPosition();
    // };

    // window.onload = function () {
    //   const restoreScrollPosition = () => {
    //     const scrollPosition = localStorage.getItem("scrollPosition");
    //     if (scrollPosition !== null) {
    //       window.scrollTo({
    //         top: parseInt(scrollPosition),
    //         behavior: "smooth",
    //       });
    //     }
    //   };
    //   restoreScrollPosition();
    // };
  }

  return (
    <nav className="sticky top-0 z-20">
      <h1
        className={`bg-white text-black text-2xl p-6 shadow duration-200 shadow-black`}
      >
        <Link href={`/`}>ViewStock</Link>
      </h1>
    </nav>
  );
};

export default Navbar;
