import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Container from '../components/Container'

const Home: NextPage = () => {
  return (
    <>
      <section className="w-full">
        <div className='hero__space h-[38vh] md:h-[32vh]' />
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
              <span className='overflow-hidden block'>Front-end</span>
              <span className='overflow-hidden block text-right -mt-1 lg:-mt-3'>Engineer</span>
              <span className='overflow-hidden block -mt-1 lg:-mt-3'>Based in</span>
              <span className='overflow-hidden block text-right -mt-1 lg:-mt-3'>Philippines</span>
            </h1>
          </div>
        </Container>
      </section>
      <section className="w-full">
        <div className='hero__space h-[38vh] md:h-[32vh]' />
        <Container>
          <div className='h-full flex items-center justify-center'>
            <div className='max-w-4xl'>
              <h1 className='text-xl font-thin sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed sm:leading-loose lg:!leading-[76px]'>
                IN THE <u>GAME</u> FOR OVER THREE YEARS I'VE <i className='not-italic relative inline-block px-2  lg:px-3 highlighted'>DEVELOPED</i> A RANGE OF AMAZING <u>WEB AND MOBILE APPLICATIONS</u> FOR COMPANIES AND SMALL BUSINESSES
              </h1>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Home
