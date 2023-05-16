import Footer from '../components/templates/Footer'
import Header from '../components/templates/Header'
import '../styles/globals.css'
import '../styles/utils.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}

export default MyApp
