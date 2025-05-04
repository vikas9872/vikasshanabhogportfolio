import React from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter"

const Home = () => {
  const [text] = useTypewriter({
    words: ['Vikas'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 120
  });
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
    <div className="relative min-h-screen flex justify-start items-center bg-[#f1efec] overflow-hidden pt-16" id='home'>
      {/* Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/Videos/home.mp4"
        autoPlay
        loop
        muted
      ></video>
      {/* Content */}
      <div className="relative w-[100%] z-10 h-[100%] flex flex-col px-4">
        <div className="flex flex-col items-start p-2">
          <p className='text-white text-2xl md:text-4xl font-bold'>Hi, I’m {text}<Cursor cursorStyle="|" /></p>
          <p className="text-white text-1xl md:text-md pt-2">
            A Full-Stack Web Developer passionate about building modern, responsive, and user-friendly web applications.
          </p>
          <p className="text-white text-1xl md:text-md pt-2">
            Let’s connect and build something great together.
          </p>
          <button className='bg-white text-black p-2 rounded-md pt-2' onClick={handleDownload}>Download resume</button>
          <div className="flex gap-2 w-[50%] pt-2">
            <button onClick={handleLinkedIn}>
              <img src="/Images/linkedIn.png" className='h-[30px] md:h-[40px] w-[30px] md:w-[40px]' alt="linkedin" />
            </button>
            <button onClick={handleGithub}>
              <img src="/Images/github.png" className='h-[30px] md:h-[40px] w-[30px] md:w-[40px]' alt="github" />
            </button>
            <button onClick={handleGmail}>
              <img src="/Images/gmail.png" className='h-[30px] md:h-[40px] w-[30px] md:w-[40px]' alt="gmail" />
            </button>
          </div>
        </div>
      </div>
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-0"></div>

    </div>
  );
};

export default Home;
