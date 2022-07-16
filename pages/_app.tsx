import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Fonts from '../components/Fonts'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Fonts />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
