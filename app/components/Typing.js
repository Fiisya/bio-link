"use client"
import React, { useEffect } from "react"

export default function Typing() {
  useEffect(() => {
    if (!window.Typed) {
      const script = document.createElement("script")
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.10/typed.min.js"
      script.async = true
      script.onload = () => {
        new window.Typed(".typing", {
          strings: ["ᥲᥣ𝖿іі", "ᥲᥣ𝖿і᥊ძ"],
          typeSpeed: 20,
          backSpeed: 20,
          loop: true,
        })
      }
      document.body.appendChild(script)
    }
    return () => {
      if (window.Typed) {
        const elements = document.querySelectorAll(".typing")
        elements.forEach((el) => {
          el.innerHTML = ""
        })
      }
    }
  }, [])
  return <span className="typing"></span>
}
