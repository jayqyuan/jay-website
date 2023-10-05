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
      <body className={`${inter.className} max-w-3xl mx-auto py-10 bg-slate-50 dark:bg-slate-700`}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        <header className='flex items-center justify-between'>
          <Link href='/' className='bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold'>
            Jay
          </Link>
          <div className='flex items-center gap-3 text-sm text-gray-600'>
            {pages.map((page)=>(
              <Link key={page._id} href={`/${page.slug}`} className='hover:underline'>
                {page.title}
              </Link>
            ))}
            <ThemeSwitcher/>
          </div>
        </header>
        <main className='py-20'>{children}</main>
        </ThemeProvider>
        </body>
        
    </html>
  )
}
