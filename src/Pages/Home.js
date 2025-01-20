import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";

function Home() {
  const { name, tagline, img } = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(
      h11.current,
      {
        x: "-100%",
        delay: 0.8,
        opacity: 0,
        duration: 2,
        ease: "Power3.easeOut",
      },
      "<"
    )
      .from(
        h12.current,
        {
          x: "-100%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        h13.current,
        {
          x: "-100%",
          delay: 0.1,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        myimageref.current,
        {
          x: "200%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      );
  }, []);

  return (
    <main className="container mx-auto max-width section md:flex justify-between items-center">
      <div>
        {/* Section texte*/}
        <h1
          ref={h11}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          Bienvenue !🙋‍♂️ <br />
          Je m'appelle
        </h1>
        <h1
          ref={h12}
          className="font-sans text-2xl bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 text-transparent md:text-4xl xl:text-5xl xl:leading-snug font-bold pb-2"
        >
          {name}
        </h1>
        <h2
          ref={h13}
          className="text-2xl text-gray-600 dark:text-gray-300 md:text-3xl xl:text-4xl font-medium"
        >
          {tagline}
        </h2>
      </div>

      {/* Section image */}
      <div className="mt-10 md:mt-0">
        <img
          ref={myimageref}
          className="w-3/4 md:w-1/2 mx-auto md:ml-auto"
          src={img}
          alt="Victor Vagné"
        />
      </div>
    </main>
  );
}

export default Home;
