"use client";
import React, { useRef } from "react";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface SplitWordProps {
  children: React.ReactNode;
  className?: string;
}

const SplitWord = ({ children, className }: SplitWordProps) => {
  const ref = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(SplitText);
      const teks = new SplitText(ref.current, {
        type: "words, lines",
        wordsClass: "word++",
      });

      gsap.set(teks.lines, { overflow: "hidden" });

      gsap.from(teks.words, {
        duration: 1,
        y: 100,
        ease: "power1.inOut",
        stagger: 0.05,
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default SplitWord;
