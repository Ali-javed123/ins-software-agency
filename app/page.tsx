import HomeSlider from "@/components/Homebanner";
import Service from "@/components/Service";
import Service2 from "@/components/Services-two";
import About from "@/components/About";
import Whychoose from "@/components/WhyChooseTwo";
import Testimonial from "@/components/Testimonials";
import Banafits from "@/components/Banafits";
import Team from "@/components/Team";
import {Slides} from "@/components/Slides";
import Project from "@/components/Project";
import ServiceCard from "@/components/ServiceCard";
import Blogs from "@/components/Blogs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"
export default function Home() {
  return (
    <div className="page-wrapper"> 
    <Navbar/>
      <HomeSlider />
      {/* <Service /> */}
      <ServiceCard/>
      <About />
      {/* <Service2 /> */}
      <Whychoose/>
      <Testimonial />
      <Team/>
      <Banafits/>
      <Slides />
      <Project />
      <Blogs />
      <Footer/>
    </div>
  );
}
