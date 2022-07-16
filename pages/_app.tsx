import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'


import '../styles/globals.scss'
import Fonts from '../components/Fonts'
import Layout from '../components/Layout'
import BgGradient from '../components/BgGradient'
import MagicCursor from '../components/MagicCursor'
import Noise from '../components/Noise'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Fonts />
      <MagicCursor />
      <BgGradient />
      <Noise />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
