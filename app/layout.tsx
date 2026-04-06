import React from "react"
import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'
import { LanguageProvider } from "../context/LanguageContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant"
});

export const metadata: Metadata = {
  title: 'AGORA APART HOTEL | Akdeniz\'in Kalbinde Huzur',
  description: 'Agora Apart Hotel ile Akdeniz\'in tadını çıkarın. Kleopatra Plajı\'na 50 metre mesafede konforlu bir konaklama deneyimi.',
  metadataBase: new URL('https://www.agorahotelapart.com'),
  openGraph: {
    title: 'AGORA APART HOTEL | Akdeniz\'in Kalbinde Huzur',
    description: 'Alanya\'nın merkezinde, denize sıfır konfor.',
    url: 'https://www.agorahotelapart.com',
    siteName: 'Agora Apart Hotel',
    images: [
      {
        url: '/images/fb.jpg?v=3', 
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
      <head>
        {/* Google Search Console Doğrulama Kodu */}
        <meta name="google-site-verification" content="u2GCQxuCgfaaxwlbcweZQEc8OHcRdO1wuecKmwyWK-w" />
        
        {/* Yeni Google Analytics (GA4) Kurulumu */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GW8Z45G7QX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GW8Z45G7QX');
          `}
        </Script>
      </head>
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