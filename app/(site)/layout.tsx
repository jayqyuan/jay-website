import { getPages } from '@/sanity/sanity-utils'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { ThemeProvider } from './theme-provider'
import { ThemeSwitcher } from './components/ThemeSwitcher'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={`${inter.className} max-w-3xl mx-auto py-10 bg-slate-100 dark:bg-gradient-to-r from-slate-900 to-gray-950`}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        <header className='flex items-center justify-between'>
          <Link href='/' className='bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold'>
            Jay
          </Link>
          <div className='flex items-center gap-3 text-m text-gray-600'>
            {pages.map((page)=>(
              <Link key={page._id} href={`/${page.slug}`} className='m-2 relative group'>
                <span className=''>{page.title}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-600 transition-all group-hover:w-full"></span>
              </Link>
            ))}
            <ThemeSwitcher/>
          </div>
        </header>
        <main className='py-20'>{children}</main>
        </ThemeProvider>
        <footer>

        </footer>
        </body>
        
    </html>
  )
}
