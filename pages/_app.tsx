import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react';

import '../styles/globals.scss'
import Fonts from '../components/Fonts'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Fonts />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </>
  )
}

export default MyApp
