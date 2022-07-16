import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Container from '../components/Container'

const Home: NextPage = () => {
  return (
    <section className="w-full h-screen">
      <Container>
        <div className='h-full flex flex-col justify-center items-center'>
          <div className='block w-full text-left overflow-hidden align-top'>
            <span className='uppercase text-xs tracking-widest leading-normal'>
              Portfolio of Erniemar Caluag &nbsp;&nbsp;&nbsp;
            </span>
            <span className='reveal-line mb-1 pl-2'></span>
          </div>
          <h1 className='w-full font-monument font-bold text-4xl text-gray-900'>
            <span className='overflow-hidden block'>FRONT-END</span>
            <span className='overflow-hidden block text-right'>ENGINEER</span>
            <span className='overflow-hidden block text-4xl'>BASED IN</span>
            <span className='overflow-hidden block text-4xl text-right'>PHILIPPINES</span>
          </h1>
        </div>
      </Container>
    </section>
  )
}

export default Home
