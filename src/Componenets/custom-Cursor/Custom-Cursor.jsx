import React from 'react'
import { useEffect, useRef } from "react";
export default function CustomCursor (){
    const cursorRef = useRef(null);
    const cursorBorderRef = useRef(null);
  
    const cursorPos = { x: 0, y: 0 };
    const cursorBorderPos = { x: 0, y: 0 };
  
    useEffect(() => {
      const handleMouseMove = (e) => {
        cursorPos.x = e.clientX;
        cursorPos.y = e.clientY;
        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        }
      };
  
      const animateCursorBorder = () => {
        const easing = 8;
        cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easing;
        cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easing;
  
        if (cursorBorderRef.current) {
          cursorBorderRef.current.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
        }
        requestAnimationFrame(animateCursorBorder);
      };
      requestAnimationFrame(animateCursorBorder);
  
      document.addEventListener("mousemove", handleMouseMove);
  
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);
  
    useEffect(() => {
      const handleMouseOver = (e) => {
        const target = e.target;
        if (cursorBorderRef.current) {
          if (target.dataset.cursor === "pointer") {
            cursorBorderRef.current.style.backgroundColor = "rgba(0, 144, 144, .4)";
            cursorBorderRef.current.style.setProperty("--size", "55px");
          } else if (target.dataset.cursor === "pointer2") {
            cursorBorderRef.current.style.backgroundColor = "white";
            cursorBorderRef.current.style.mixBlendMode = "difference";
            cursorBorderRef.current.style.setProperty("--size", "60px");
          }
        }
      };
  
      const handleMouseOut = () => {
        if (cursorBorderRef.current) {
          cursorBorderRef.current.style.backgroundColor = "unset";
          cursorBorderRef.current.style.mixBlendMode = "unset";
          cursorBorderRef.current.style.setProperty("--size", "30px");
        }
      };
  
      const cursorElements = document.querySelectorAll("[data-cursor]");
      cursorElements.forEach((item) => {
        item.addEventListener("mouseover", handleMouseOver);
        item.addEventListener("mouseout", handleMouseOut);
      });
      return () => {
        cursorElements.forEach((item) => {
          item.removeEventListener("mouseover", handleMouseOver);
          item.removeEventListener("mouseout", handleMouseOut);
        });
      };
    }, []);
  return (
    <>
    
    <div ref={cursorRef} id="cursor" ></div>
    <div ref={cursorBorderRef} id="cursor-border" ></div>
    </>
  )
}
