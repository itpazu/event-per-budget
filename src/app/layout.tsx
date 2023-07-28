import './globals.css'
import type { Metadata } from 'next'
import { Shadows_Into_Light, Source_Code_Pro } from 'next/font/google'
import Image from 'next/image'
import ReduxProvider from '@/redux/provider';
import HeaderFooter from './components/HeaderFooter';

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
    <html lang="en | he" dir="rtl" className={`${ShadowsIntoLight.variable} ${SourceCodePro.variable}`}>
      <body >
        <ReduxProvider>
          <main className="flex min-h-screen pb-24 flex-col items-center lg:justify-start p-4 md:p-16 text-center">
            <HeaderFooter />
            <div className="mt-2 place-items-center aspect-square h-[25vh] w-auto mb-[15vh] relative top-[8vh] lg:sticky lg:top-[20vh]">
              <Image
                className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/logo.svg"
                alt="caltura Logo"
                priority
                fill={true}
              />
            </div>

            {children}

          </main>
        </ReduxProvider>
      </body>
    </html>
  )
}
