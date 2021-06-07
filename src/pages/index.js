import * as React from "react"

// import NoticeSection from "../components/sections/home/NoticeSection"
// import HeroSection from "../components/sections/home/HeroSection"
// import FeaturedSection from "../components/sections/home/FeaturedSection"
// import ProgrammeSection from "../components/sections/home/ProgrammeSection"
// import ParticipateSection from "../components/sections/home/ParticipateSection"
// import SponsorSection from "../components/sections/home/SponsorSection"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <>
    {/* --- background pattern --- */}
    <div className="absolute w-full h-full bg-bottom bg-no-repeat bg-cover z-n10 bg-hero-pattern"></div>
    <Layout>
      <Seo title="Home" />
      <h1>SWA Home Page</h1>
      {/* <HeroSection /> */}
      {/* <NoticeSection /> */}
      {/* <FeaturedSection /> */}
      {/* <ProgrammeSection /> */}
      {/* <ParticipateSection /> */}
      {/* <SponsorSection /> */}
    </Layout>
  </>
)

export default IndexPage
