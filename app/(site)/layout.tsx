import { getPages } from '@/sanity/sanity-utils'
import '../globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Link from 'next/link'
import { ThemeProvider } from './theme-provider'
import { ThemeSwitcher } from './components/ThemeSwitcher'
import Image from 'next/image'
import Contact from './components/Contact'

const poppins = Poppins({ 
  weight: '200',
  subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jay Yuan | Software Engineer ',
  description: 'Hi, my name is Jay! I am a software engineer who enjoys creating and developing products that make lives simplier and more meaningful',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pages = await getPages()
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-stone-300 dark:bg-gradient-to-r from-slate-800 to-gray-950`}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        <div className='sticky top-0 z-50 p-10 bg-stone-300 dark:bg-slate-800 bg-opacity-70 dark:bg-opacity-70' >
        <header className='flex items-center justify-between bg-opacity-100'>
          <Link href='/'>
            <Image src='/jylogo.png' width={50} height={50} alt='logo' className='transition-transform hover:scale-110 transform duration-300 ease-in-out'/>
          </Link>
          <div className='flex items-center gap-3 text-m text-gray-600 dark:text-slate-200'>
              <a href='#about-me' className='m-2 relative group'>
                <span className=''>Me</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-600 dark:bg-teal-400 transition-all group-hover:w-full"></span>
              </a>
              <a href='#my-work' className='m-2 relative group'>
                <span className=''>My work</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-600 dark:bg-teal-400 transition-all group-hover:w-full"></span>
              </a>
              <a href='#contact' className='m-2 relative group'>
                <span className=''>Get in touch</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-600 dark:bg-teal-400 transition-all group-hover:w-full"></span>
              </a>
            <ThemeSwitcher/>
          </div>
        </header>
        </div>
        <main className='py-20 max-w-3xl mx-auto'>{children}</main>
        </ThemeProvider>
        <footer id='contact'>
          <Contact/>
        </footer>
        </body>
        
    </html>
  )
}
