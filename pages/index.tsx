import type { NextPage } from 'next'
import Head from 'next/head'
import Image, { StaticImageData } from 'next/image'

import Container from '../components/Container'
import InlineImageOne from '../public/images/950d-f4e9ad662fb5.png'
import InlineImageTwo from '../public/images/4a43d156b27c.png'
import AmazingSvg from '../components/AmazingSvg'
import StarBullet from '../components/StarBullet'
import Link from 'next/link'

interface InlineImageProps {
  image: StaticImageData
}

const InlineImage = ({ image }: InlineImageProps): JSX.Element => (
  <div className='inline-image-wrapper'>
    <Image src={image} width="100%" height="100%" className="align-middle !relative !w-auto !h-9 md:!h-14 lg:!h-[70px] !min-h-[auto]" />
  </div>
)

const spacingHeight = 'h-[26vh] sm:h-[31vh] md:h-[35vh]'

const Home: NextPage = () => {
  return (
    <>
      <section className="w-full">
        <div className={`hero__space h-[26vh] sm:h-[38vh] md:h-[30vh]`} />
        <Container>
          <div className='h-full flex flex-col justify-center px-3 md:px-0'>
            <div className='block w-full ml-0 sm:ml-4 md:ml-8 text-left overflow-hidden align-top mb-2 md:mb-5'>
              <span className='uppercase text-xs sm:text-sm md:text-lg tracking-widest leading-normal'>
                Portfolio of Erniemar Caluag &nbsp;&nbsp;&nbsp;
              </span>
              <span className='reveal-line w-12 sm:w-16 md:w-20 mb-1 pl-2'></span>
            </div>
            {/* text-[#0d1b1e] */}
            <div className='px-0 md:px-10'>
              <h1 className='w-full font-gallient font-medium uppercase text-[13vw] md:text-[9vw] tracking-[4px] leading-snug md:leading-[1.2] text-[#042a2b]'> 
                <span className='overflow-hidden block text-right'>Front-end</span>
                <span className='overflow-hidden block -mt-1 lg:-mt-3'>Software</span>
                <span className='overflow-hidden block -mt-1 lg:-mt-3 text-right'>Engineer</span>
              </h1>
            </div>
          </div>
        </Container>
      </section>
      <section className="w-full">
        <div className={`hero__space ${spacingHeight}`} />
        <Container zIndex={1}>
          <div className='h-full flex items-center justify-center'>
            <div className='max-w-4xl mix-blend-screen px-2 sm:px-0'>
              <h1 className='text-[24px] text-[#042a2b] font-thin sm:text-2xl md:text-3xl lg:text-[38px] leading-[1.75] sm:!leading-loose lg:!leading-[76px]'>
                IN THE <u>GAME</u> <InlineImage image={InlineImageOne} /> FOR OVER THREE YEARS I&apos;VE <i className='not-italic relative inline-block px-2 lg:px-3 highlighted'>DEVELOPED</i> A RANGE OF AMAZING <AmazingSvg /> <u>WEB AND MOBILE</u> APPLICATIONS <InlineImage image={InlineImageTwo} /> FOR COMPANIES AND SMALL BUSINESSES
              </h1>
            </div>
          </div>
        </Container>
      </section>
      <section className="w-full">
        <div className={`hero__space ${spacingHeight}`} />
        <Container>
          <div className='h-full flex flex-col justify-center px-3 md:px-0'>
            <div className='px-0 md:px-10'>
              <h1 className='w-full font-gallient uppercase font-normal leading-snug text-[13vw] text-[#042a2b]'> 
                <span className='overflow-hidden block -mt-1 lg:-mt-3'>Selected</span>
                <span className='overflow-hidden block -mt-1 lg:-mt-3 text-right'>Project</span>
              </h1>
            </div>
          </div>
        </Container>
      </section>
      <section className="w-full">
        <div className={`hero__space ${spacingHeight}`} />
        <Container zIndex={1}>
          <div className='h-full flex items-center justify-center'>
            <div className='max-w-4xl w-full mix-blend-screen px-2 sm:px-0'>
              <ul className='text-left w-full text-[24px] text-[#042a2b] font-thin sm:text-2xl md:text-3xl lg:text-[38px] leading-[1.75] sm:!leading-loose lg:!leading-[76px]'>
                <li className='border-b-2 border-[#363636]'>
                  <Link href="/">
                    <a className='flex items-center gap-4 sm:gap-6 lg:gap-10 py-4 sm:py-6 lg:py-8'>
                      <StarBullet />
                      <span>GP NAPO</span>
                    </a>
                  </Link>
                </li>
                <li className='border-b-2 border-[#363636]'>
                  <Link href="/">
                    <a className='flex items-center gap-4 sm:gap-6 lg:gap-10 py-4 sm:py-6 lg:py-8'>
                      <StarBullet />
                      <span>RONAN BLOG</span>
                    </a>
                  </Link>
                </li>
                <li className='border-b-2 border-[#363636]'>
                  <Link href="/">
                    <a className='flex items-center gap-4 sm:gap-6 lg:gap-10 py-4 sm:py-6 lg:py-8'>
                      <StarBullet />
                      <span>RXCUE</span>
                    </a>
                  </Link>
                </li>
                <li className='border-b-2 border-[#363636]'>
                  <Link href="/">
                    <a className='flex items-center gap-4 sm:gap-6 lg:gap-10 py-4 sm:py-6 lg:py-8'>
                      <StarBullet />
                      <span>BINANCE FUTURES BOT</span>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
      <section className="w-full">
        <div className={`hero__space ${spacingHeight}`} />
      </section>
    </>
  )
}

export default Home
