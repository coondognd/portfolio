import dynamic from "next/dynamic";
import Head from "next/head";
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import Resume from "../src/components/Resume";
import AboutMe from "../src/components/sections/AboutMe";
import BlogSection from "../src/components/sections/Blog";
import Clients from "../src/components/sections/Clients";
import ContactForm from "../src/components/sections/ContactForm";
import ContactInfo from "../src/components/sections/ContactInfo";
import FunFact from "../src/components/sections/FunFact";
import Pricing from "../src/components/sections/Pricing";
import Quote from "../src/components/sections/Quote";
import ResumeSection from "../src/components/sections/Resume";
import Services from "../src/components/sections/Services";
import Skills from "../src/components/sections/Skills";
import Testimonials from "../src/components/sections/Testimonials";
import TypingAnimation from "../src/components/TypingAnimation";
import Work from "../src/components/Work";
import ContentContainer from "../src/layout/ContentContainer";
import Header from "../src/layout/Header";
import Layout from "../src/layout/Layout";
const RecentWorks = dynamic(
  () => import("../src/components/sections/RecentWorks"),
  {
    ssr: false,
  }
);


const bio = `<p>
<strong>Hi! I’m Kevin Cooney.</strong>
Manager &amp; Full-Stack developer from Westchester County, NY. I have led teams 
around the world in creating and improving web products enjoyed by millions of users.
</p>`;

const services = [
  {
    icon: "fa fa-users",
    title: "Agile Management",
    desc: "SCRUM and Kanban",
  },
  {
    icon: "fa fa-html5",
    title: "Front-End",
    desc: "React, jQuery, HTML/CSS",
  },
  {
    icon: "fa fa-code",
    title: "Back-End",
    desc: "PHP, Java, SQL",
  },
  {
    icon: "fa fa-server",
    title: "Cloud",
    desc: "AWS: EC2, RDS, ELB, S3, Route53, Cloudfront, SES, SNS",
  },
];

const animationText = [
  "Manager",
  "Full-Stack Developer",
];

const Index3 = () => {
  return (
    <Layout bg={"gradient"}>
      <Head>
        <link rel="stylesheet" href="css/new-skin/new-skin.css" />
        <link rel="stylesheet" href="css/demos/demo-3-colors.css" />
        <link rel="stylesheet" href="css/new-skin/classic-skin.css" />
      </Head>
      <Header noSideBarBtn animationText={animationText} />
      <Home>
        <div className="profile no-photo">
          {/* profile image */}
          <div
            className="slide"
            style={{ backgroundImage: "url(images/profile2.jpg)" }}
          />
          {/* profile titles */}
          <div className="title">Kevin Cooney</div>

          <TypingAnimation data={animationText} />
          {/* profile buttons */}
          
          <div className="lnks">
            <a href="Resume - Cooney, Kevin.pdf" className="lnk">
              <span className="text">Download Resume</span>
              <span className="ion ion-android-download" />
            </a>
          </div>
        </div>
      </Home>
      <ContentContainer>
        <About>
          <AboutMe bio={bio} />
          <Services serviceList={services} />
          <Clients />
          <FunFact />
        </About>
        { /*
        <Resume>
          <ResumeSection />
          <Skills />
          <Quote />
        </Resume>
        <Work>
          <RecentWorks />
        </Work>
        <Blog>
          <BlogSection />
        </Blog>
        */ }
        <Contact>
          <ContactInfo />
        </Contact>
      </ContentContainer>
    </Layout>
  );
};
export default Index3;
