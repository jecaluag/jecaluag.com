import Head from "next/head"
import Navbar from './Navbar'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <main className="relative bg-black">
      {/* bg-[#1F1F1F] bg-neutral-900 */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="John Erniemar Caluag - Front End Software Engineer" />
        <meta name="author" content="John Erniemar Caluag" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Erniemar Caluag" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jecaluag" />
        <meta name="twitter:creator" content="@jecaluag" />
        <meta property="og:site_name" content="Erniemar Caluag" />
        <meta name="og:title" content="Erniemar Caluag" />
        <meta property="og:type" content="website" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#171717" />

        <title>John Erniemar Caluag - Front End Software Engineer</title>
      </Head>
      
      <Navbar />

      {children}
    </main>
  )
}

export default Layout