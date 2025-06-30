import React, { useEffect, useState } from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BiLogoGmail, BiLogoLinkedin, BiLogoGithub, BiLogoWhatsapp } from "react-icons/bi";

const Home = () => {
  const [text] = useTypewriter({
    words: ['Vikas'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 120
  });
  const [showSvg, setShowSvg] = useState(false);

  useEffect(() => {
    setShowSvg(true);
  }, []);
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "./Resume/VikasResume.pdf";
    link.download = "Vikas_Resume.pdf";
    link.click();
  }
  const handleGithub=()=>{
    window.open("https://github.com/vikas9872", "_blank")
  }
  const handleLinkedIn=()=>{
    window.open("https://www.linkedin.com/in/shanabhogvikas/", "_blank")
  }
  const handleGmail=()=>{
    window.location.href="mailto:vikasshanabhog0@gmail.com"
  }
  return (
    <div
      className="relative min-h-screen flex justify-start items-center bg-gradient-to-r from-[#b2fefa] to-[#0ed2f7] overflow-hidden pt-16"
      id='home'
    >
      {/* Content */}
      <div className="relative w-full z-10 h-full flex flex-col-reverse md:flex-row px-4 items-center">
        <div className="flex flex-col items-start p-2 flex-1">
          <p className='text-black text-2xl md:text-4xl font-bold flex items-center gap-2'>
            Hi,
            <span
              className="inline-block animate-wave origin-bottom"
              role="img"
              aria-label="waving hand"
              style={{ display: 'inline-block' }}
            >
              👋
            </span>
          </p>
          <p className='text-black text-2xl md:text-4xl font-bold flex items-center gap-1 mt-2'>
            I’m {text}
            <Cursor cursorStyle="|" />
          </p>
          <p className="text-black text-1xl md:text-md pt-2">
            A Full-Stack Web Developer passionate about building modern, responsive, and user-friendly web applications.
          </p>
          <p className="text-black text-1xl md:text-md pt-2">
            Let’s connect and build something great together.
          </p>
          <button className='bg-white text-black p-2 rounded-md pt-2' onClick={handleDownload}>Download resume</button>
          <div className="flex flex-wrap gap-4 w-full sm:w-[50%] pt-2">
            <button onClick={handleLinkedIn}>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center shadow-md overflow-hidden">
                <BiLogoLinkedin className="w-6 h-6 md:w-8 md:h-8 text-blue-700" aria-label="linkedin" />
              </div>
            </button>
            <button onClick={handleGithub}>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center shadow-md overflow-hidden">
                <BiLogoGithub className="w-6 h-6 md:w-8 md:h-8 text-black" aria-label="github" />
              </div>
            </button>
            <button onClick={handleGmail}>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center shadow-md overflow-hidden">
                <BiLogoGmail className="w-6 h-6 md:w-8 md:h-8 text-red-600" aria-label="gmail" />
              </div>
            </button>
            <a
              href="https://wa.me/918296689623"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center shadow-md overflow-hidden"
              aria-label="whatsapp"
            >
              <BiLogoWhatsapp className="w-6 h-6 md:w-8 md:h-8 text-green-500" />
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
          <img
            src="/Images/home.svg"
            alt="Home Illustration"
            className={`w-48 h-48 md:w-80 md:h-80 transition-all duration-1000 ease-out
              ${showSvg ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-90'}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;