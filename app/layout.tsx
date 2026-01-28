import React from "react"
import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
// Bağıl yol kullanarak import ettik (Hata payını sıfırlamak için)
import { LanguageProvider } from "../context/LanguageContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant"
});

export const metadata: Metadata = {
  title: 'AGORA APART HOTEL | Akdeniz\'in Kalbinde Huzur',
  description: 'Agora Apart Hotel ile Akdeniz\'in tadını çıkarın. Konforlu odalar, eşsiz manzaralar ve unutulmaz bir tatil deneyimi sizi bekliyor.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} ${cormorant.variable} font-sans antialiased bg-background min-h-screen`}>
        {/* Dil sağlayıcısı tüm siteyi sarmalıyor */}
        <LanguageProvider>
          {children}
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  )
}