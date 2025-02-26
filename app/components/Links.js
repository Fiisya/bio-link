"use client"

import React, { useEffect, useRef } from "react"
import Link from "next/link"
import { FaSpotify } from "react-icons/fa"
import { HiArrowRight } from "react-icons/hi"

const links = [
    {
        title: "Personal Website",
        description: "About me",
        url: "https://pf.alfixd.my.id",
        icon: "/fire-svgrepo-com.svg",
    },
    {
        title: "Playlist Spotify Website",
        description: "Maybe You Like",
        url: "https://alfitech.xyz",
        icon: "/planet-1301-svgrepo-com.svg",
    },
    {
        title: "Claire Public Bot Group",
        description: "Get Online Friends Here",
        url: "https://chat.whatsapp.com/L5OUiV1WF5EJLU2fDjR62C",
        icon: "/stars-svgrepo-com.svg",
    },
    {
        title: "Donate",
        description: "Buy Me A Coffe",
        url: "https://saweria.co/alfiisyl",
        icon: "/donate-solid-svgrepo-com.svg",
    },
    {
        title: "",
        isSpotify: true,
        songTitle: "",
        artist: "tetap hidup walaupun tidak berguna",
        albumArt: "https://files.catbox.moe/wex7bq.jpg",
        url: "",
        audioSrc: "https://tmpfiles.org/dl/21298590/pxh7p5koo7.opus",
    },
]

const Links = () => {
    const canvasRef = useRef(null)
    const audioRef = useRef(null)
    const audioContextRef = useRef(null)
    const analyserRef = useRef(null)
    const dataArrayRef = useRef(null)
    const sourceRef = useRef(null)

    useEffect(() => {
        if (!canvasRef.current || !audioRef.current) return

        const canvas = canvasRef.current
        const ctx = canvas.getContext("2d")

        canvas.width = 100
        canvas.height = 40

        const audio = audioRef.current

        if (!audioContextRef.current) {
            audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)()
        }
        const audioContext = audioContextRef.current

        if (!analyserRef.current) {
            analyserRef.current = audioContext.createAnalyser()
            analyserRef.current.fftSize = 64
        }
        const analyser = analyserRef.current

        if (!dataArrayRef.current) {
            dataArrayRef.current = new Uint8Array(analyser.frequencyBinCount)
        }
        const dataArray = dataArrayRef.current

        if (!sourceRef.current) {
            sourceRef.current = audioContext.createMediaElementSource(audio)
            sourceRef.current.connect(analyser)
            analyser.connect(audioContext.destination)
        }

        function draw() {
            requestAnimationFrame(draw)
            analyser.getByteFrequencyData(dataArray)

            ctx.clearRect(0, 0, canvas.width, canvas.height)

            const barWidth = canvas.width / dataArray.length
            dataArray.forEach((value, index) => {
                const barHeight = (value / 255) * canvas.height
                ctx.fillStyle = "white"
                ctx.fillRect(index * barWidth, canvas.height - barHeight, barWidth - 2, barHeight)
            })
        }

        draw()
    }, [])

    return (
        <div className="w-full max-w-md mt-6 space-y-3">
            {links.map((link, index) => (
                <Link
                    key={index}
                    href={link.url}
                    className="flex items-center justify-between p-3 bg-black border border-gray-500 transition-all duration-300 cursor-pointer group text-white rounded-lg">
                    {link.isSpotify ? (
                        <div className="flex items-center space-x-3 w-full relative">
                            <div className="relative w-10 h-10">
                                <img
                                    src={link.albumArt}
                                    alt="Album Art"
                                    className="rounded-full"/>
                                <div className="absolute inset-0 bg-gradient-to-r from-green-500/30 to-blue-500/30 rounded-full animate-pulse"></div>
                            </div>
                            <div className="flex-1">
                                <p className="text-xs text-gray-400">
                                    <em>{link.artist}</em>
                                </p>
                            </div>
                            <div className="relative">
                                <canvas ref={canvasRef} className="absolute bottom-0 right-0 opacity-70"></canvas>
                            </div>
                            <audio ref={audioRef} src={link.audioSrc} autoPlay loop></audio>
                        </div>
                    ) : (
                        <div className="flex items-center space-x-3 w-full">
                            {typeof link.icon === "string" &&
                            link.icon.endsWith(".svg") ? (
                                <img
                                    src={link.icon}
                                    alt={link.title}
                                    className="w-6 h-6"
                                    style={{ filter: "invert(1)" }}/>
                            ) : (
                                <span className="text-lg">{link.icon}</span>
                            )}
                            <div className="flex-1">
                                <h3 className="text-sm font-medium">
                                    {link.title}
                                </h3>
                                <p className="text-xs text-gray-400">
                                    {link.description}
                                </p>
                            </div>
                        </div>
                    )}
                </Link>
            ))}
        </div>
    )
}

export default Links
