import "./globals.css"

export const metadata = {
  title: "ᥲᥣ𝖿іі?—",
  description: "Welcome To Bio Link alfii/alfiiXD, Find Out Info About Him, And Stalk Him!",
  author: "alfii",
  keywords: "alfiiXD, alfii, ambalfii, alfiiXD api, alfisyahriaal",
    robots: {
    index: true,
    follow: true,
  },
}

export default function Layout({ children }) {
  return (
    <html lang="id">
      <body className="bg-black grid-bg text-white min-h-screen font-sans transition-colors duration-300">
        {children}
      </body>
    </html>
  )
}
