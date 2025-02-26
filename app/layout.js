import "./globals.css"

export const metadata = {
  title: "ᥲᥣ𝖿іі?—",
  description: "Welcome To Bio Link alfii/AlfiXD, Find Out Info About hHim, And Stalk Him!",
  author: "alfii",
  keywords: "AlfiXD, alfii, ambalfii, alfixd api, alfisyahriaal",
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
