'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import icon from "@/public/riclogo.svg";
import logopic from '@/public/riclogo.svg';
import p1 from "@/public/p1.jpg";
import p2 from "@/public/p2.jpg";
import p3 from "@/public/p3.jpg";
import p4 from "@/public/p4.jpg";
import p5 from "@/public/p5.jpg";
import p6 from "@/public/p6.jpg";
import p7 from "@/public/p7.gif";
import p8 from "@/public/p8.jpg";
import p9 from "@/public/p9.jpg";
import p10 from "@/public/animation1.gif";
import p11 from "@/public/animation2.gif";
import p12 from "@/public/animation3.gif";
import p13 from "@/public/3dmodel1.gif";
import p14 from "@/public/p10.png";
import p15 from "@/public/p11.jpg";
import p16 from "@/public/p12.jpg";
import p17 from "@/public/p13.PNG";
import p18 from "@/public/p14.jpg";
import p19 from "@/public/p15.png";
import p20 from "@/public/p16.jpg";
import p21 from "@/public/p17.jpg";
import p22 from "@/public/p18.jpg";
import p23 from "@/public/p19.jpg";
import p24 from "@/public/p20.jpg";

// Reference video files via public folder paths
const videoData = [
    { src: "/videos/vid1.mp4", alt: "Video 1", tags: ["Videos"] },
    { src: "/videos/vid2.mp4", alt: "Video 2", tags: ["Videos"] },
    //{ src: "/videos/vid3.mp4", alt: "Video 3", tags: ["Videos"] },
    { src: "/videos/vid4.mp4", alt: "Video 4", tags: ["Videos"] },
];

const artData = [
    { src: p6, alt: "Artwork 6", tags: ["Digital Drawing"] },
    { src: p9, alt: "Artwork 9", tags: ["Digital Drawing"] },
    { src: p10, alt: "Artwork 10", tags: ["Animations"] },
    { src: p11, alt: "Artwork 11", tags: ["Animations"] },
    { src: p7, alt: "Artwork 7", tags: ["Digital Drawing"] },
    { src: p8, alt: "Artwork 8", tags: ["Digital Drawing"] },
    { src: p12, alt: "Artwork 12", tags: ["Animations"] },
    { src: p13, alt: "Artwork 13", tags: ["3D Models"] },
    { src: p14, alt: "Artwork 14", tags: ["Digital Drawing"] },
    { src: p15, alt: "Artwork 15", tags: ["Digital Drawing"] },
    { src: p16, alt: "Artwork 16", tags: ["Digital Drawing"] },
    { src: p17, alt: "Artwork 17", tags: ["Digital Drawing"] },
    { src: p18, alt: "Artwork 18", tags: ["Digital Drawing"] },
    { src: p19, alt: "Artwork 19", tags: ["Digital Drawing"] },
    { src: p20, alt: "Artwork 20", tags: ["Digital Drawing"] },
    { src: p21, alt: "Artwork 21", tags: ["Digital Drawing"] },
    { src: p22, alt: "Artwork 22", tags: ["Digital Drawing"] },
    { src: p23, alt: "Artwork 23", tags: ["Digital Drawing"] },
    { src: p24, alt: "Artwork 24", tags: ["Digital Drawing"] },
    { src: p1, alt: "Artwork 1", tags: ["3D Models"] },
    { src: p2, alt: "Artwork 2", tags: ["3D Models"] },
    { src: p3, alt: "Artwork 3", tags: ["3D Models"] },
    { src: p4, alt: "Artwork 4", tags: ["3D Models"] },
    { src: p5, alt: "Artwork 5", tags: ["3D Models"] },
    ...videoData, // Add the video data to artData
];

function GalleryPage() {
    const [filter, setFilter] = useState("All Work");

    const filteredArt = artData.filter((art) =>
        filter === "All Work" ? true : art.tags.includes(filter)
    );

    return (
        <main className="flex flex-col justify-center items-center bg-gradient-to-b from-dark to-lighterDark min-h-screen p-7 md:p-10">
            {/* Navbar */}
            <section className="w-full max-w-screen-xl relative z-0">
                <nav className="flex flex-row justify-between items-center">
                    <Link href={"/"}>
                        <Image
                            className="lg:hidden"
                            src={icon}
                            alt="small icon"
                            width={100}
                            height={100}
                        />
                        <Image
                            className="hidden lg:inline"
                            src={logopic}
                            alt="big icon"
                            width={270}
                            height="auto"
                        />
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

            {/* Filter Buttons */}
            <section className="w-full max-w-screen-xl mt-10">
                <div className="flex justify-center gap-4 mb-8">
                    {["All Work", "Digital Drawing", "Animations", "3D Models", "Videos"].map((category) => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={`text-white font-medium rounded-full px-4 py-2 ${
                                filter === category ?  "bg-[#FFCA6B]" : "bg-zinc-700"
                            } hover:bg-gray-600`}
                        >
                            {category}
                        </button>
                        
                    ))}
                </div>
            </section>

            {/* Gallery */}
            <section className="w-full max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArt.map((art, index) => (
                    art.tags.includes("Videos") ? (
                        <video key={index} controls className="rounded-lg">
                            <source src={art.src} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    ) : (
                        <Image key={index} src={art.src} alt={art.alt} className="rounded-lg" />
                    )
                ))}
            </section>
        </main>
    );
}

export default GalleryPage;
