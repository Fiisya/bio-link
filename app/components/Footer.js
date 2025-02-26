import React from "react"
import { PiStarFourLight } from "react-icons/pi"

const Footer = () => {
    return (
        <footer className="text-center mt-6 text-sm text-gray-400">
            <hr className="h-px bg-gray-800 my-4 border-0"/>
            <div className="flex justify-center items-center gap-2 mt-1">
                <PiStarFourLight className="text-gray-500"/>
                <p>AlfiXD • I Think Yt Short Is Good.</p>
            </div>
        </footer>
    )
}

export default Footer
