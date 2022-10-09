import type { NextPage } from 'next'
import Image from 'next/image'

import Pic from '../assets/images/profile.png'

const Home: NextPage = () => {
  return (
    <div className='text-neutral-400 py-28 max-w-lg m-auto px-4'>
      <section className='grid-item mb-10 items-center'>
        <div className='col-span-1'>
          <Image src={Pic} alt="Erniemar Caluag" className='w-full rounded-full' />
        </div>
        <div className='col-span-3'>
          <h1 className='text-white text-xl'>John Erniemar Caluag</h1>
          <p>Front End Software Engineer</p>
          <a href='mailto:hello@jecaluag.com' className='text-neutral-500 underline-offset-3 hover:underline'>hello@jecaluag.com</a>
        </div>
      </section> 
      <section className='mb-14'>
        <h2 className='text-white mb-2'>About</h2>
        <p>Hello I'm Erniemar. A Front End Developer based in Philippines. I specialize in creating interactive interfaces, building complex systems and providing reliable, optimized, and secure solutions for user-facing applications.</p>
      </section>
      <section className='mb-14'>
        <h2 className='text-white mb-10'>Work Experience</h2>
        <div>
          <div className='grid-item mb-10'>
            <div className='col-span-4 sm:col-span-1'>
              <p>2022 - Present</p>
            </div>
            <div className='col-span-4 sm:col-span-3'>
              <a href="https://intervenn.bio/" target="_blank" className='text-white flex items-center'>
                Software Engineer – InterVenn Biosciences
                <svg className='w-4 h-4 ml-2' viewBox="0 0 24 24">
                  <path fill="currentColor" d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z" />
                </svg>
              </a>
              <p className='my-2'>Developed a web application that helps InterVenn facilitate management of controlled document. Created and implemented reusable and optimized components, as well as various hooks and functions. Responsible for the development of most complex task within the project.</p>
              <p className='text-neutral-500'>React • TypeScript • Redux • Material UI • Emotion • Okta Authentication</p>
            </div>
          </div>
          <div className='grid-item mb-10'>
            <div className='col-span-4 sm:col-span-1'>
              <p>2021 - 2022</p>
            </div>
            <div className='col-span-4 sm:col-span-3'>
              <a href="https://yondu.com/" target="_blank" className='text-white flex items-center'>
                Software Engineer (Front End) – Yondu
                <svg className='w-4 h-4 ml-2' viewBox="0 0 24 24">
                  <path fill="currentColor" d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z" />
                </svg>
              </a>
              <p className='my-2'>Worked with Globe Telecom as our client to build multiple blockchain projects. Collaborated closely with the client to meet project requirements, goals, and desired functionality.</p>
              <p className='text-neutral-500'>React • Material UI • Nuxt • Vuetify</p>
            </div>
          </div>
          <div className='grid-item mb-10'>
            <div className='col-span-4 sm:col-span-1'>
              <p>2019 - 2021</p>
            </div>
            <div className='col-span-4 sm:col-span-3'>
              <a href="https://www.cafe24.com/en/" target="_blank" className='text-white flex items-center'>
                Full Stack Developer – Cafe24
                <svg className='w-4 h-4 ml-2' viewBox="0 0 24 24">
                  <path fill="currentColor" d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z" />
                </svg>
              </a>
              <p className='my-2'>Collaborate with a team in developing multiple companies internal projects. Developed responsive and cross-browser compatible web applications. Build back-end API endpoints.</p>
              <p className='text-neutral-500'>Nuxt • TypeScript • Tailwind • GraphQL • Flask</p>
            </div>
          </div>
        </div>
      </section>
      <section className='mb-14'>
        <h2 className='text-white mb-10'>Side Projects</h2>
        <div>
          <div className='grid-item mb-10'>
            <div className='col-span-4 sm:col-span-1'>
              <p>2022</p>
            </div>
            <div className='col-span-4 sm:col-span-3'>
              <p className='text-white flex items-center'>
                Ronan Blog
              </p>
              <p className='my-2'>An internal company blog site where employees can share their knowledge and expertise in a way that invites collaborations.</p>
              <p className='text-neutral-500'>Micro Front End • Webpack Module Federation • React • TypeScript • Redux • Tailwind</p>
            </div>
          </div>
          <div className='grid-item mb-10'>
            <div className='col-span-4 sm:col-span-1'>
              <p>2022</p>
            </div>
            <div className='col-span-4 sm:col-span-3'>
              <p className='text-white flex items-center'>
                RxCue Pharmacy Website and Mobile App
              </p>
              <p className='my-2'>Allow users to check for drug interactions and drug availability at a specific drugstore branch.</p>
              <p className='text-neutral-500'>React • React Native • Chakra UI • Native Base</p>
            </div>
          </div>
          <div className='grid-item mb-10'>
            <div className='col-span-4 sm:col-span-1'>
              <p>2021</p>
            </div>
            <div className='col-span-4 sm:col-span-3'>
              <p className='text-white flex items-center'>
                AE Pumpbot
              </p>
              <p className='my-2'>A futures trading desktop app for Binance users that allows them to pre-configure their position size and stop loss, as well as open a long or short position with a single click. Eliminating the hassle and inconvinience of searching for the coin and manually entering their order details on every single trade.</p>
              <p className='text-neutral-500'>Electron • Vue • Tailwind • Binance API</p>
            </div>
          </div>
          <div className='grid-item mb-10'>
            <div className='col-span-4 sm:col-span-1'>
              <p>2021</p>
            </div>
            <div className='col-span-4 sm:col-span-3'>
              <p className='text-white flex items-center'>
                ETH Transaction Alert
              </p>
              <p className='my-2'>A discord bot that will send an alert message for a new transaction that occurred on an Ethereum wallet address.</p>
              <p className='text-neutral-500'>Node.js • Discord.js • MonggoDB</p>
            </div>
          </div>
        </div>
      </section>
      <section className='mb-14'>
        <h2 className='text-white mb-10'>Links</h2>
        <div>
          <div className='grid-item mb-4'>
            <div className='col-span-4 sm:col-span-1'>
              <p>Mail</p>
            </div>
            <div className='col-span-4 sm:col-span-3'>
              <a href="mailto:hello@jecaluag.com" target="_blank" className='text-white flex items-center'>
                hello@jecaluag.com
                <svg className='w-4 h-4 ml-2' viewBox="0 0 24 24">
                  <path fill="currentColor" d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z" />
                </svg>
              </a>
            </div>
          </div>
          <div className='grid-item mb-4'>
            <div className='col-span-4 sm:col-span-1'>
              <p>Linkedin</p>
            </div>
            <div className='col-span-4 sm:col-span-3'>
              <a href="https://www.linkedin.com/in/jecaluag/" target="_blank" className='text-white flex items-center'>
                in/jecaluag
                <svg className='w-4 h-4 ml-2' viewBox="0 0 24 24">
                  <path fill="currentColor" d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z" />
                </svg>
              </a>
            </div>
          </div>
          <div className='grid-item mb-4'>
            <div className='col-span-4 sm:col-span-1'>
              <p>Github</p>
            </div>
            <div className='col-span-4 sm:col-span-3'>
              <a href="https://github.com/jecaluag/" target="_blank" className='text-white flex items-center'>
                @jecaluag
                <svg className='w-4 h-4 ml-2' viewBox="0 0 24 24">
                  <path fill="currentColor" d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
