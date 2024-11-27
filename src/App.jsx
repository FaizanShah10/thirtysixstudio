import React, { useEffect, useRef, useState } from "react";
import Canvas from "./assets/Components/Canvas";
import data from "./data";
import LocomotiveScroll from "locomotive-scroll";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Navbar from "./assets/Components/Navbar";
import DropDownMenu from "./assets/Components/DropDownMenu";
import SplitType from 'split-type'
import { animateAgile, animateCultured, animateInnovative, animateWhatWeDo } from "./scrollTrigger";
import {animateServiceText} from './scrollTrigger'
import { animateHeadings } from "./scrollTrigger";
import {animateWhoWeAre} from "./scrollTrigger"


const App = () => {
  const [showCanvas, setShowCanvas] = useState(false);
  const headingRef = useRef();
  const growingSpan = useRef();

  useEffect(() => {
    animateWhatWeDo()
  }, [])

  useEffect(() => {
    animateServiceText()
  }, [])


  // useEffect(() => {
  //   animateHeadings()
  // }, [])

  useEffect(() => {
    animateAgile()
  }, [])

  useEffect(() => {
    animateInnovative()
  }, [])
  

  useEffect(() => {
    animateCultured()
  }, [])

  useEffect(() => {
    animateWhoWeAre()
  }, [])



  


  const tl = gsap.timeline();
  

  useGSAP(() => {

      const headingText = new SplitType('#mainHeading h2')

    
    gsap.from('.heroText', {
      delay:1.3,
      duration: 2,
      opacity: 0,
    });
    gsap.to('.char', {
      duration: .2,
      y:0,
      delay: .2,
      stagger: 0.05
    })
    
  }, []);
  

  const mainRef = useRef()
  const cursorRef = useRef()
  
  useEffect(() => {
    const main = mainRef.current;
    const cursor = cursorRef.current;
  
    const onMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5, // Duration of the easing animation
        ease: "power2.out", // Easing effect for smooth motion
      });
    };
  
    main.addEventListener("mousemove", onMouseMove);
  
    return () => {
      main.removeEventListener("mousemove", onMouseMove);
    };
  }, []);
  

  useEffect(() => {
    const locomotive = new LocomotiveScroll();
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      setShowCanvas((prev) => !prev);

      if (!showCanvas) {
        // Show and scale the span on first click
        gsap.set(growingSpan.current, {
          top: e.clientY,
          left: e.clientX,
          scale: 0,
          display: "block",
        });

        gsap.to(growingSpan.current, {
          scale: 1000,
          duration: 1,
          ease: "power2.inOut",
        });
      } else {
        // Hide the span on second click
        gsap.to(growingSpan.current, {
          scale: 0,
          duration: 0.5,
          ease: "power2.inOut",
          onComplete: () => {
            gsap.set(growingSpan.current, { display: "none" });
          },
        });
      }
    };

    const headingElement = headingRef.current;
    headingElement.addEventListener("click", handleClick);

    return () => {
      headingElement.removeEventListener("click", handleClick);
    };
  }, [showCanvas]);

  return (
    <div ref={mainRef} className="main">
      <div ref={cursorRef} className="cursor w-20 h-13 rounded-full fixed bg-red-700 z-20"></div>
      <span
        ref={growingSpan}
        className="growing rounded-full block fixed top-[-20px] left-[-20px] w-5 h-5 bg-red-500"
        style={{
          position: "fixed",
          pointerEvents: "none",
          transformOrigin: "center",
        }}
      ></span>

      <div className="min-h-screen relative w-full font-[Helvetica_Now_Display]">
        {showCanvas &&
          data[0].map((item, index) => (
            <Canvas key={index} canvasItems={item} />
          ))}
        {/* Navbar */}
        <Navbar/>

        {/* HeroSection */}
        <div className="textcontainer mt-10 w-full lg:px-[20%] md:px-[20%] px-4 relative pt-10">
          <div className="heroText lg:w-[50%] w-full">
            <h3 className="text-3xl font-medium">
              At Thirtysixstudio, we <br /> build immersive digital <br /> experiences for
              brands <br /> with a purpose.
            </h3>
            <p className="text-md w-[80%] mt-10 font-normal">
              We are a team of designers, developers, and strategists who are
              passionate about creating digital experiences that are both
              beautiful and functional.
            </p>
            <p className="text-md mt-10">scroll</p>
          </div>
        </div>

        <div id="mainHeading" className="mt-48">
          <h2
            ref={headingRef}
            className="lg:text-[15rem] text-[7.5rem] leading-none text-center font-medium overflow-x-hidden pb-10"
          >
            Thirtysixstudio
          </h2>
        </div>
      </div>

      {/* What we do */}
      <div id="whatwedo" className="w-full relative h-screen">
      {showCanvas &&
          data[0].map((item, index) => (
            <Canvas key={index} canvasItems={item} />
          ))}
          
        <div className="flex lg:flex-row flex-col lg:justify-center lg:pt-28  lg:px-0 px-3 lg:gap-52 gap-4">
          <div className="">
            <h2 className="font-semibold text-lg">01 -- WHAT WE DO</h2>
          </div>
          <div className="lg:w-[30%] w-full">
            <h3 className="font-medium text-3xl lg:ml-24 ml-0">
              We aim to revolutionize digital production in the advertising space, bringing
              your ideas to life.
            </h3>
            <h3 className="lg:ml-24 md:ml-20 ml-0 mt-32 text-sm">
              As a contemporary studio, we use cutting-edge design practices and the latest
              technologies to deliver seamless digital work.
            </h3>
            <h3 className="lg:ml-24 md:ml-20 mt-4 text-sm">
              Our commitment to creativity, innovation, and simplicity, paired with our agile
              approach, ensures your journey with us is smooth and enjoyable from start to
              finish.
            </h3>
          </div>
        </div>
      </div>

      <hr />

      {/* OUR SERVICES */}
      <div id="serviceText" className="w-full min-h-screen relative pt-20">
        {showCanvas &&
          data[0].map((item, index) => (
            <Canvas key={index} canvasItems={item} />
          ))}

        <div className="flex flex-col lg:items-center md:items-center items-start lg:px-0 md:px-0 px-3">
          <h2 className="mb-10 text-sm">OUR SERVICES</h2>
          <h3  className="text-left lg:w-[43%] w-full lg:px-0  text-3xl">
            We provide captivating design, interactive animations, advance usability, reliable code, and immaculate project coordination. Whether you need a campaign built from scratch or assistance at a specific phase, we’ve got you covered.
          </h3>
        </div>

        {/* Dropdown Menu */}
        <div>
          <DropDownMenu className="pt-10"/>
        </div>

        <div className="mt-20 lg:w-[28%] md:w-[28%] w-full lg:px-0 px-3 lg:ml-[27.5rem] md:ml-[27.5rem] ml-0 text-left text-sm">
          <h2 className="text-black">
            Got a project in mind?
            <br />
            Drop us a line at hello@thirtysixstudio.com or use the form below.
          </h2>
          <h2 className="mt-5">
          Not sure what you need? We’re here to help you define the undefined. Let’s explore all creative and technical possibilities together through one of our tailored labs, where we champion future-forward thinking within an ethical framework.
          </h2>
          <button className="px-6 py-1 mt-6 mb-20 rounded-full  border-[1px] border-black">TALK TO US</button>
        </div>

        
      </div>

        <hr />

      
     {/* WHO WE ARE */}
      <div className="bg-[#FFFAFA] w-full h-96 pt-4">
        <div id="whoWeAre" className="w-full relative">
          {showCanvas &&
            data[0].map((item, index) => (
              <Canvas key={index} canvasItems={item} />
            ))}
          <div className="flex lg:flex-row flex-col lg:justify-center lg:pt-28  lg:px-0 px-3 lg:gap-52 gap-4">
            <div>
              <h2 className="font-semibold text-lg">02 -- WHO WE ARE</h2>
            </div>
            <div className="lg:w-[30%] md:w-[30%] w-full">
              <h3 className="font-medium text-3xl lg:ml-24 md:ml-24 ml-0">
                Our vision is to simplify digital production while creating social impact and opportunity.
              </h3>
            </div>
          </div>
        </div>
      </div>

      <hr />

      {/* ANIMATION PART */}
      <div className="w-full lg:px-0 md:px-0 px-3 relative">
        <div id="div1" className=" flex lg:flex-row flex-col lg:items-center md:items-center items-start justify-between pt-10">
          {/* Left-Aligned Heading */}
          <div className="flex-shrink-0">
            <h2 className="animate-heading lg:text-[10vw] md:text-[10vw] text-[7vh] font-semibold lg:mb-0 mb-4">Agile</h2>
          </div>
          {/* Right-Aligned Paragraph */}
          <div className="lg:w-[46%] md:w-[40%] w-full lg:ml-24 ml-0 lg:pl-[4%] pr-[20%]">
            <p className="text-sm">
              We live and breathe efficiency and are not limited by geography. Based in Amsterdam 
              with hubs in London, Paris, Johannesburg, New York, and beyond, we curate the right 
              team for each project and get moving swiftly.
            </p>
          </div>
        </div>
        <div id="div2" className="flex lg:flex-row flex-col lg:items-center md:items-center items-start justify-between pt-10 ">
          {/* Left-Aligned Heading */}
          <div className="flex-shrink-0">
            <h2 className="animate-heading lg:text-[10vw] md:text-[10vw] text-[7vh] font-semibold lg:mb-0 mb-4">Innovative</h2>
          </div>
          {/* Right-Aligned Paragraph */}
          <div className="lg:w-[46%] md:w-[40%] w-full lg:ml-24 ml-0 lg:pl-[4%] pr-[20%]">
            <p className="text-sm">
            We use innovative digital processes and technology to ensure our initiatives run smoothly, allowing our young, lean, and international team to focus on what matters and maximize momentum and opportunity.
            </p>
          </div>
        </div>
        <div id="div3" className="flex lg:flex-row flex-col lg:items-center md:items-center items-start justify-between pt-10 ">
          {/* Left-Aligned Heading */}
          <div className="flex-shrink-0">
            <h2 className="animate-heading lg:text-[10vw] md:text-[10vw] text-[7vh] font-semibold lg:mb-0 mb-4">Cultured</h2>
          </div>
          {/* Right-Aligned Paragraph */}
          <div className="lg:w-[46%] md:w-[40%] w-full lg:ml-24 ml-0 lg:pl-[4%] pr-[20%]">
            <p className="text-sm">
            We are progressive and community-focused, and don’t believe in maintaining the status quo or sticking to the old way. Our people reflect today’s realities and stay connected to culture.
            </p>
          </div>
        </div>
      </div>

      <hr />

      <div className="w-full relative h-screen flex justify-end pt-32">
        <div className="flex flex-col items-end lg:w-[45%] w-full pl-[4%]  lg:pr-[20%] pr-[4%] space-y-6">
          <h2 className="text-3xl font-semibold">
            We represent today's world: progressive and engaged.
          </h2>
          <p>
            Thirtysixstudio is founded by Gita Jagessar, a queer person of color and seasoned
            production director from Amsterdam. With over 12 years of experience in digital
            advertising, Gita has worked with renowned global brands such as Netflix,
            Converse, Travis Scott, Ben & Jerry’s, and Cash App.
          </p>
          <button className="py-1 px-5 hover:bg-black hover:text-white border-[1px] border-black text-black text-sm transition-all duration-300 rounded-full">LEARN MORE</button>
        </div>
      </div>

      <hr />


    </div>
  );
};

export default App;
