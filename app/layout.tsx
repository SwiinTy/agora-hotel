import React from "react"
import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel analytics/next'
import Script from 'next/script'
import './globals.css'
import { LanguageProvider } from "../context/LanguageContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant"
});

// Güncellenen Metadata Alanı
export const metadata: Metadata = {
  title: 'AGORA APART HOTEL | Akdeniz\'in Kalbinde Huzur',
  description: 'Agora Apart Hotel ile Akdeniz\'in tadını çıkarın. Konforlu odalar, eşsiz manzaralar ve unutulmaz bir tatil deneyimi sizi bekliyor.',
  generator: 'v0.app',
  openGraph: {
    title: 'AGORA APART HOTEL | Akdeniz\'in Kalbinde Huzur',
    description: 'Agora Apart Hotel ile Akdeniz\'in tadını çıkarın. Konforlu odalar, eşsiz manzaralar ve unutulmaz bir tatil deneyimi sizi bekliyor.',
    url: 'https://www.agorahotelapart.com',
    siteName: 'Agora Apart Hotel',
    images: [
      {
        url: 'https://www.agorahotelapart.com/fb.jpg', // Public klasörüne attığın resim
        width: 1200,
        height: 630,
        alt: 'Agora Apart Hotel Alanya',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} ${cormorant.variable} font-sans antialiased bg-background min-h-screen`}>
        <LanguageProvider>
          {children}
          <Analytics />
        </LanguageProvider>

        {/* Chatbase AI Bot Entegrasyonu */}
        <Script
          id="chatbase-bot"
          strategy="afterInteractive"
        >
          {`
            (function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="XfqSCjlGf0cy_i7o51NA-";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();
          `}
        </Script>
      </body>
    </html>
  )
}