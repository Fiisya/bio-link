import "./ppk.css"

import { Permanent_Marker } from "next/font/google"

const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
})

export default function NotFound() {
  return (
    <div className="antialiased text-gray-100 grid-bg min-h-screen flex items-center justify-center px-4 text-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center space-x-4">
          <h1 className="text-4xl md:text-7xl font-bold text-white">404</h1>
          <div
            className="shrink-0 bg-divider border-none h-10 w-divider"
            role="separator">
           </div>
          <h2 className={`${permanentMarker.className} text-lg md:text-2xl text-white`}>
            Page Not Found
          </h2>
          <div
            className="shrink-0 bg-divider border-none h-10 w-divider"
            role="separator"></div>
          <a href="https://github.com/Fiisya" className="text-green-500 icon">
            <i className="fa-solid fa-arrow-right text-gray-600 text-1xl md:text-1xl"></i>
          </a>
        </div>
      </div>
    </div>
  )
}
