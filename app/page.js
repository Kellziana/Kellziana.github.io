"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import icon from "@/public/riclogo.svg";
import genie from "@/public/ricprofile.svg";
import logopic from '@/public/riclogo.svg';
import { useEffect, useState } from "react";
import { useAuthContext } from "@/context/AuthContext";

export default function Home() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Drawings", "Animations", "3D Models"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  const { user } = useAuthContext();

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;

    let fullText = toRotate[i];

    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(200);
    }
  };

  return (
    <main className="flex flex-col justify-center items-center bg-gradient-to-b from-dark to-lighterDark min-h-screen p-7 md:p-10">
      <section>
        <div className="hidden lg:block absolute bottom-0 left-0 right-0 w-full h-full opacity-20 bg-landmarks animate-slide"></div>

      </section>
      <section className="w-full max-w-screen-xl relative z-0">
        <nav className="flex flex-row justify-between items-center">
          <Link href={"/"}>
            <Image
              className="lg:hidden"
              src={icon}
              alt="small icon"
              width={100}
              height={100}
            ></Image>
            <Image
              className="hidden lg:inline"
              src={logopic}
              alt="big icon"
              width={270}
              height="auto"
            ></Image>
          </Link>
          <div className="flex flex-row items-center gap-3 relative z-1">
            <Link href={"/about"}>
              <button className="text-white font-medium rounded-lg text-sm px-4 py-2.5 hover:animate-pulse text-center relative z-10">
                ABOUT
              </button>
            </Link>
            <Link href={"/gallery"}>
              <button className="text-white font-medium rounded-lg text-sm px-4 py-2.5 hover:animate-pulse text-center relative z-10">
                GALLERY
              </button>
            </Link>
            <Link href={"/contact"}>
              <button className="text-white font-medium rounded-lg text-sm px-4 py-2.5 hover:animate-pulse text-center relative z-10">
                CONTACT ME
              </button>
            </Link>
            
          </div>
        </nav>
      </section>
      
      <section className="w-full flex-1 flex justify-center items-center relative z-1">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between max-w-5xl">
          <div className="flex flex-col gap-7 max-w-xl justify-center">
            <h1 className="text-white text-4xl md:text-5xl font-bold text-center lg:text-left">
              Ricardo's portfolio containing {" "}
              <span className="bg-gradient-to-t from-orange-300 to-yellow-200 text-transparent bg-clip-text pr-1">
                {text}
              </span>
              <span className="text-gray-300 animate-pulse">|</span>
            </h1>
            <h2 className="text-gray-300 text-center lg:text-left">
              Want to check out my creativity? Have a scroll through these designs made by me!
            </h2>
            <div className="flex flex-row justify-center lg:justify-start gap-7 relative z-2">
             
                <Link href={"/gallery"}>
                  <Button>GALLERY</Button>
                </Link>
            
           
                <Link href={"/contact"}>
                  <button className="text-lighterDark bg-white font-bold rounded-lg text-sm px-4 py-2.5 hover:animate-pulse text-center">
                    CONTACT ME
                  </button>
                </Link>
              
            </div>
          </div>
          <Image
            className="hidden lg:inline animate-custom-bounce"
            src={genie}
            alt="Mascot"
            width={300}
            height={300}
            priority={true}
          ></Image>
        </div>
      </section>
    </main>
  );
}
