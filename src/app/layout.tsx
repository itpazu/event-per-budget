import './globals.css'
import type { Metadata } from 'next'
import { Inter, Shadows_Into_Light, Source_Code_Pro } from 'next/font/google'
import Image from 'next/image'
import ReduxProvider from '@/redux/provider';
import HeaderFooter from './components/HeaderFooter';

const inter = Inter({ subsets: ['latin'] })
const ShadowsIntoLight = Shadows_Into_Light({ weight: "400", subsets: ['latin'], variable: '--font-shadow' })
const SourceCodePro = Source_Code_Pro({ weight: "500", subsets: ['latin'], variable: '--font-source' })
export const metadata: Metadata = {
  title: 'Events Per Budget',
  description: 'cultural events for your budget',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${ShadowsIntoLight.variable} ${SourceCodePro.variable}`}>
      <body className={inter.className}>
        <ReduxProvider>
          <main className="flex min-h-screen flex-col items-center lg:justify-start pb-32 pt-8 px-8 md:p-24 text-center">
            <HeaderFooter />

            <div className="relative flex my-2 place-items-center">
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/Events.svg"
                alt="Next.js Logo"
                width={250}
                height={85}
                priority
              />
            </div>

            {children}

          </main>
        </ReduxProvider>
      </body>
    </html>
  )
}
