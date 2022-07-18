import type { NextPage } from 'next'
import Head from 'next/head'
import Image, { StaticImageData } from 'next/image'

import Container from '../components/Container'
import InlineImageOne from '../public/images/950d-f4e9ad662fb5.png'
import InlineImageTwo from '../public/images/4a43d156b27c.png'
import AmazingSvg from '../components/AmazingSvg'

interface InlineImageProps {
  image: StaticImageData
}

const InlineImage = ({ image }: InlineImageProps): JSX.Element => (
  <div className='inline-image-wrapper'>
    <Image src={image} width="100%" height="100%" className="align-middle !relative !w-auto !h-9 md:!h-14 lg:!h-[70px] !min-h-[auto]" />
  </div>
)

const Home: NextPage = () => {
  return (
    <>
      <section className="w-full">
        <div className='hero__space h-[38vh] md:h-[44vh]' />
        <Container>
          <div className='h-full flex flex-col justify-center px-3 md:px-0'>
            <div className='block w-full ml-0 sm:ml-4 md:ml-8 text-left overflow-hidden align-top mb-2 md:mb-5'>
              <span className='uppercase text-xs sm:text-sm md:text-lg tracking-widest leading-normal'>
                Portfolio of Erniemar Caluag &nbsp;&nbsp;&nbsp;
              </span>
              <span className='reveal-line w-12 sm:w-16 md:w-20 mb-1 pl-2'></span>
            </div>
            {/* text-[#0d1b1e] */}
            <h1 className='w-full font-monument font-bold uppercase hero__headline leading-none text-[#042a2b]'> 
              <span className='overflow-hidden block text-right'>Front-end</span>
              <span className='overflow-hidden block -mt-1 lg:-mt-3'>Software</span>
              <span className='overflow-hidden block -mt-1 lg:-mt-3 text-right'>Engineer</span>
              {/* <span className='overflow-hidden block -mt-1 lg:-mt-3 text-right'>Based in</span>
              <span className='overflow-hidden block -mt-1 lg:-mt-3'>Philippines</span> */}
            </h1>
          </div>
        </Container>
      </section>
      <section className="w-full">
        <div className='hero__space h-[38vh] md:h-[32vh]' />
        <Container zIndex={1}>
          <div className='h-full flex items-center justify-center'>
            <div className='max-w-4xl mix-blend-screen px-2 sm:px-0'>
              <h1 className='text-[24px] text-[#042a2b] font-thin sm:text-2xl md:text-3xl lg:text-[32px] leading-[1.75] sm:!leading-loose lg:!leading-[76px]'>
                IN THE <u>GAME</u> <InlineImage image={InlineImageOne} /> FOR OVER THREE YEARS I&apos;VE <i className='not-italic relative inline-block px-2 lg:px-3 highlighted'>DEVELOPED</i> A RANGE OF AMAZING <AmazingSvg /> <u>WEB AND MOBILE</u> APPLICATIONS <InlineImage image={InlineImageTwo} /> FOR COMPANIES AND SMALL BUSINESSES
              </h1>
            </div>
          </div>
        </Container>
      </section>
      <section className="w-full">
        <div className='hero__space h-[38vh] md:h-[32vh]' />
      </section>
    </>
  )
}

export default Home
