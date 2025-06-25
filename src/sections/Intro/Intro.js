import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../../data/Data";
import useHeaderOffset from "../../hooks/useHeaderOffset";
import "./Intro.scss";

export default function Intro() {
  const { name, tagline, img } = personalDetails;
  const [, offset] = useHeaderOffset();

  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();

useEffect(() => {
  const tl = gsap.timeline();

  tl.from(h11.current, {
    x: "-200%",
    delay: 0.,
    opacity: 1,
    duration: 0.8,
    ease: "Power3.easeOut"
  }, "<")
    .from(h12.current, {
      x: "-200%",
      delay: 0.05,
      opacity: 1,
      duration: 0.8,
      ease: "Power3.easeOut"
    }, "<")
    .from(h13.current, {
      x: "-200%",
      delay: 0.1,
      opacity: 1,
      duration: 0.8,
      ease: "Power3.easeOut"
    }, "<")
    .from(myimageref.current, {
      x: "200%",           
      opacity: 1,           
      duration: 0.8,        
      ease: "Power3.easeOut"
    }, "<");
}, []);


  return (
    <section
      id="accueil"
      className={`intro-section`}
style={{
  "--offset-top": `${offset}px`,
  height: "calc(100vh - var(--offset-top) - 32px)"
}}
    >
      <div className="intro-text">
        <span ref={h11} className="intro-title">Bienvenue !🙋‍♂️ <br /> Je m'appelle <br /></span>
        <span ref={h12} className="intro-name">{name}</span>
        <h1   ref={h13} className="intro-tagline">{tagline}</h1>
      </div>
      <div className="intro-image">
        <img ref={myimageref} src={img} height="744" width="744" fetchpriority="high"alt="Victor Vagné" />
      </div>
    </section>
  );
}