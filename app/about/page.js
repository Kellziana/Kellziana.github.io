'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import icon from "@/public/riclogo.svg";
import logopic from '@/public/riclogo.svg';
import genie from "@/public/ricprofile.svg";
import whatislove from "@/public/drawing1.jpg"; 
import animation1 from "@/public/animation1.gif"; 
import animation2 from "@/public/3dmodel1.gif";

export default function AboutPage() {
    const [isVisible, setIsVisible] = useState(false);
    const [isVisibleSecond, setIsVisibleSecond] = useState(false);
    const [isVisibleThird, setIsVisibleThird] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('scroll-section');
            const section2 = document.getElementById('scroll-section-2');
            const section3 = document.getElementById('scroll-section-3'); 

            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom >= 0) {
                    setIsVisible(true);
                }
            }

            if (section2) {
                const rect2 = section2.getBoundingClientRect();
                if (rect2.top < window.innerHeight && rect2.bottom >= 0) {
                    setIsVisibleSecond(true);
                }
            }

            if (section3) {
                const rect3 = section3.getBoundingClientRect();
                if (rect3.top < window.innerHeight && rect3.bottom >= 0) {
                    setIsVisibleThird(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="bg-gradient-to-b from-dark to-lighterDark min-h-screen text-white flex flex-col items-center justify-start pt-8">
            {/* Navigation Bar */}
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

            {/* About Us Section */}
            <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center lg:items-start justify-between mt-24 lg:mt-30 px-6 lg:px-0">
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                    <Image
                        src={genie}
                        alt="Person working"
                        width={400}
                        height={400}
                        className="rounded-md hidden sm:block" // Hides the image on small screens
                    />
                </div>
                <div className="w-full lg:w-1/2 mt-20 lg:mt-0 text-center lg:text-left"> {/* Center text on small screens */}
                    <h1 className="text-6xl font-bold mb-4 text-center lg:text-left text-[#FFCA6B]">ABOUT ME</h1>
                    <p className="text-lg leading-relaxed text-center lg:text-left">
                        I’m Ricardo Moncada, a digital animator and digital artist, 
                        currently finishing my education in digital animation and interactive design. 
                        I work independently, taking commissions for digital art and visualizers. 
                        I've contributed to two 3D animated short films as part of my school projects, 
                        using tools such as Maya, Blender, and Adobe Creative Suite. Born and raised in Honduras, 
                        where I currently reside, I specialize in 2D designs and animations. 
                        I plan to continue creating short animations with the goal of showcasing them at festivals. 
                        Additionally, I’m eager to collaborate with record labels that need artistic or animated 
                        content to enhance their projects.
                    </p>
                </div>
            </div>

            {/* Scroll Section with Image on the Right */}
            <div id="scroll-section" className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between mt-40 px-6 lg:px-0 mt-30">
                <div className={`w-full lg:w-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} mr-8`}>
                    <h2 className="text-4xl font-bold mb-4 text-center lg:text-left text-[#FFCA6B]">Digital drawings</h2>
                    <p className="text-lg leading-relaxed text-center lg:text-left">
                        I specialize in creating vibrant and expressive digital drawings, 
                        capturing intricate details and vivid emotions in each piece. 
                        My artwork often features bold color palettes and dynamic compositions, 
                        with a focus on character design, landscapes, and abstract concepts. 
                        I draw inspiration from everyday life, as well as animation and pop culture, 
                        blending these elements to create unique visual stories. My goal is to evoke 
                        a sense of wonder and curiosity in viewers through carefully crafted digital illustrations.
                    </p>
                </div>
                <div className={`w-full lg:w-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} ml-20 hidden sm:block`}> {/* Hides the image on small screens */}
                    <Image
                        src={whatislove}
                        alt="Drawing"
                        width={400}
                        height={400}
                        className="rounded-md"
                    />
                </div>
            </div>

            {/* Second Section with Image on the Left */}
            <div id="scroll-section-2" className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between mt-20 px-6 lg:px-0">
                <div className={`w-full lg:w-1/2 transition-all duration-1000 ${isVisibleSecond ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-10'} mr-8 hidden sm:block`}> {/* Hides the image on small screens */}
                    <Image
                        src={animation1}
                        alt="Animation"
                        width={400}
                        height={400}
                        className="rounded-md"
                    />
                </div>
                <div className={`w-full lg:w-1/2 transition-all duration-1000 ${isVisibleSecond ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} ml-8`}>
                    <h2 className="text-4xl font-bold mb-4 text-center lg:text-left text-[#FFCA6B]">Animations</h2>
                    <p className="text-lg leading-relaxed text-center lg:text-left">
                        In my animations I explore both 2D and 3D techniques, with visualizers 
                        that contain trippy aesthetics,
                        my animations are influenced by my love for early 2000's 
                        cartoon shows and videogames, I'm also influenced by streetwear 
                        and hip-hop culture. I always bring all my ideas to life and I’m 
                        passionate about experimenting with different animation styles and 
                        continuing to learn new techniques to enhance my craft.
                    </p>
                </div>
            </div>

            {/* Third Section with Image on the Right */}
            <div id="scroll-section-3" className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between mt-20 px-6 lg:px-0 mb-20">
                <div className={`w-full lg:w-1/2 transition-all duration-1000 ${isVisibleThird ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-10'} mr-8`}>
                    <h2 className="text-4xl font-bold mb-4 text-center lg:text-left text-[#FFCA6B]">3d Models</h2>
                    <p className="text-lg leading-relaxed text-center lg:text-left">
                        My 3D modeling work comes from my 2D characters that I turn into 3D, 
                        using tools like Blender and Maya, I focus on models that are simple but 
                        at the same time appealing and optimized for animations. 
                        I enjoy experimenting with textures, lighting, 
                        and rigging to make my models as visually appealing for my projects
                    </p>
                </div>
                <div className={`w-full lg:w-1/2 transition-all duration-1000 ${isVisibleThird ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} ml-20 hidden sm:block`}> {/* Hides the image on small screens */}
                    <Image
                        src={animation2}
                        alt="Animation"
                        width={400}
                        height={400}
                        className="rounded-md"
                    />
                </div>
            </div>
        </div>
    );
}
