"use client";

import Image from "next/image";
import Link from "next/link";
import icon from "@/public/riclogo.svg";
import logopic from '@/public/riclogo.svg';
import phoneIcon from "@/public/phone.png"; 
import emailIcon from "@/public/email.png";
import instagramIcon from "@/public/instagram.png";

function ContactPage() {
  return (
    <main className="flex flex-col justify-center items-center bg-gradient-to-b from-dark to-lighterDark min-h-screen p-7 md:p-10 relative">
      {/* Background Image */}
      <div className="absolute bottom-0 left-0 right-0 top-0 w-full h-full opacity-20 bg-landmarks animate-slide z-0"></div>
      
      <section className="w-full max-w-screen-xl relative z-10 mb-24">
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
          <div className="flex flex-row items-center gap-3 relative z-10">
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

      {/* Contact Section */}
      <section className="flex flex-col items-center text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#FFCA6B]">LET'S CHAT!</h1>
        <br></br>
        
        <p className="text-lg text-gray-300 mb-20 ">Contact me at</p>
        
        <div className="flex flex-col md:flex-row justify-around w-full max-w-4xl mb-32 gap-64">
          {/* Phone Section */}
          <div className="flex flex-col items-center mb-6 md:mb-0">
            <Image src={phoneIcon} alt="Phone Icon" width={20} height={20} />
            <a href="tel:+50432751611" className="text-gray-300 mt-2">+504 3275-1611</a> {/* Clickable Phone Link */}
          </div>

          {/* Instagram Section */}
          <div className="flex flex-col items-center mb-6 md:mb-0">
            <Image src={instagramIcon} alt="Instagram Icon" width={20} height={20} />
            <a href="https://www.instagram.com/rychieboi" target="_blank" rel="noopener noreferrer" className="text-gray-300 mt-2">
              @rychieboi
            </a> {/* Clickable Instagram Link */}
          </div>

          {/* Email Section */}
          <div className="flex flex-col items-center">
            <Image src={emailIcon} alt="Email Icon" width={20} height={20} />
            <a href="mailto:ricky122012@gmail.com" className="text-gray-300 mt-2">
              ricky122012@gmail.com
            </a> {/* Clickable Email Link */}
          </div>
        </div>
      </section>
      
    </main>
  );
}

export default ContactPage;
