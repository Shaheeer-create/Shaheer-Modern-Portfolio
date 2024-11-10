import Footer from '@/components/layout/footer'
import Hero from '@/components/layout/hero'
import Navbar from '@/components/layout/navbar'
import Project from '@/components/layout/project'
import Skill from '@/components/layout/skill'
import React from 'react'

const Home = () => {
  return (
    <div>
<Navbar/>
<Hero/>
<Skill/>
<Project/>
<Footer/>


    </div>
  )
}

export default Home