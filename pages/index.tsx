import type { NextPage } from 'next'

import GridSection from '../components/GridSection'
import AboutSection from '../components/AboutSection'
import ProfileSection from '../components/ProfileSection'
import { links, sideProjects, workExp } from '../constants'

const Home: NextPage = () => {
  return (
    <div className='text-neutral-400 py-24 md:py-28 max-w-lg m-auto px-4'>

      <ProfileSection />
      
      <AboutSection />

      <GridSection
        title="Work Experience"
        items={workExp}
      />
      
      <GridSection
        title="Side Projects"
        items={sideProjects}
      />

      <GridSection
        title="Links"
        size="sm"
        items={links}
      />
    
    </div>
  )
}

export default Home
