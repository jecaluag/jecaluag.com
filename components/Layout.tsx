import Head from "next/head"
import Navbar from './Navbar'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <main className="relative bg-[#1F1F1F]">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Erniemar's homepage" />
        <meta name="author" content="Erniemar Caluag" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Erniemar Caluag" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jecaluag" />
        <meta name="twitter:creator" content="@jecaluag" />
        {/* <meta name="twitter:image" content="https://www.craftz.dog/card.png" /> */}
        <meta property="og:site_name" content="Erniemar Caluag" />
        <meta name="og:title" content="Erniemar Caluag" />
        <meta property="og:type" content="website" />
        {/* <meta property="og:image" content="https://www.craftz.dog/card.png" /> */}
        <title>Erniemar Caluag - Homepage</title>
      </Head>
      
      <Navbar />

      {children}
    </main>
  )
}

export default Layout