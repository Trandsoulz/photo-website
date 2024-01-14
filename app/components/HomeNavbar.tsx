"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
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
    const scrollPosition = localStorage.getItem("scrollPosition");
    if (scrollPosition !== null) {
      window.scrollTo({
        top: parseInt(scrollPosition),
        behavior: "smooth",
      });
    }
    //   };

    //   restoreScrollPosition();
    // };
  }
  // Sticky HomeNavbar
  const [sticky, setSticky] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      if (document.documentElement.scrollTop > 40) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <nav
      className={` ${
        sticky ? "sticky-nav" : "nav"
      } z-20 text-md md:text-2xl p-6 px-8`}
    >
      <Link href={`/`}>ViewStock</Link>
    </nav>
  );
};

export default Navbar;
