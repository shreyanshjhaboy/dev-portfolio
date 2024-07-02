import '@/styles/globals.css'
import {Montserrat} from 'next/font/google'
import CustomHead from '../components/CustomHead'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont'
})
export default function App({ Component, pageProps }) {
  return (
    <>
    <CustomHead />
    
    <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </main>
    </>
    
  )
}
