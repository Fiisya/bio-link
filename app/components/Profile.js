"use client"

import React, { useState } from "react"
import { FaInstagram, FaTiktok, FaGithub } from "react-icons/fa"
import { RiVerifiedBadgeFill } from "react-icons/ri"

const Profile = () => {
    const [imgSrc, setImgSrc] = useState(
        "https://files.catbox.moe/psu00a.jpg"
    )

    return (
        <div className="bg-black p-6 rounded-lg border border-gray-500 transition-all duration-300 shadow-lg">
            <div className="text-center">
                <div className="inline-block relative">
                    <img
                        src={imgSrc}
                        alt="Profile"
                        className="w-20 h-20 rounded-full border-2 border-gray-500 bg-gray-600 transition-transform hover:scale-105"
                        onError={() =>
                            setImgSrc("https://files.catbox.moe/psu00a.jpg")
                        }/>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full animate-pulse"></div>
                </div>
                <h1 className="text-lg font-bold mt-2 flex items-center justify-center">
                    ᥲᥣ𝖿і᥊ძ
                    <RiVerifiedBadgeFill className="inline text-blue-500 ml-1 items-center text-sm"/>
                </h1>

                <p className="text-gray-400 text-xs">”Hanya Seorang Manusia Biasa Yang Ingin Menguasai Eropa:)”</p>
                <div className="flex justify-center gap-2 mt-3">
                    <span className="bg-white/5 px-3 py-1 rounded-full text-xs hover:bg-white/10 transition-all hover:scale-105 ring-1 ring-green-700 text-yellow-400">
                        #Work
                    </span>
                    <span className="bg-white/5 px-3 py-1 rounded-full text-xs hover:bg-white/10 transition-all hover:scale-105 ring-1 ring-green-700 text-yellow-400">
                        #Game
                    </span>
                    <span className="bg-white/5 px-3 py-1 rounded-full text-xs hover:bg-white/10 transition-all hover:scale-105 ring-1 ring-green-700 text-yellow-400">
                        #Sleep
                    </span>
                    <span className="bg-white/5 px-3 py-1 rounded-full text-xs hover:bg-white/10 transition-all hover:scale-105 ring-1 ring-green-700 text-yellow-400">
                        #Music
                    </span>
                </div>
                <div className="flex justify-center gap-4 mt-4 text-xl text-gray-400">
                    <a
                        href="https://instagram.com/alfisyahriaal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-zinc-100 transition-colors">
                        <FaInstagram className="h-5 w-5 text-gray-200"/>
                    </a>
                    <a
                        href="https://github.com/Fiisya"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-zinc-100 transition-colors">
                        <FaGithub className="h-5 w-5 text-gray-200"/>
                    </a>
                    <a
                        href="https://www.tiktok.com/@alfisyahriall"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-zinc-100 transition-colors">
                        <FaTiktok className="h-5 w-5 text-gray-200"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Profile
