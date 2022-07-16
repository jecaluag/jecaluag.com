import type { AppProps } from 'next/app'

import '../styles/globals.css'
import Fonts from '../components/Fonts'
import Layout from '../components/Layout'
import BgGradient from '../components/BgGradient'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Fonts />
      <BgGradient />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
