import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Brand from "@/components/ServiceDetails/Brand";
import { notFound } from "next/navigation";
const Services = [
  {
    id: 1,
    title: "Core Services",
    data: [
      {
        id: 1,
        slug: "web-and-app-development",
        title: "Web and App Development",
        icon: "icon-software-1",
        image: "/assets/images/service/service-4-4.png",
      },
      {
        id: 2,
        slug: "ui-ux-designing",
        title: "UI/UX Designing",
        icon: "icon-layer-1",
        image: "/assets/images/service/service-1-2.png",
      },
      {
        id: 3,
        slug: "digital-marketing",
        title: "Digital Marketing",
        icon: "icon-digital-marketing-1",
        image: "/assets/images/service/service-1-2.png",
      },
      {
        id: 4,
        slug: "data-analysis",
        title: "Data Analysis",
        icon: "icon-analysis-1",
        image: "/assets/images/service/service-1-4.png",
      },
      {
        id: 5,
        slug: "web-development",
        title: "Web Development",
        icon: "icon-cyber-security",
        image: "/assets/images/service/service-3-2.png",
      },
      {
        id: 6,
        slug: "software-development",
        title: "Software Development",
        icon: "icon-cloud-computing",
        image: "/assets/images/service/service-3-2.png",
      },
      {
        id: 7,
        slug: "it-staff-augmentation",
        title: "IT Staff Augmentation",
        icon: "icon-cloud-computing",
        image: "/assets/images/service/service-3-2.png",
      },
    ],
  },

  {
    id: 2,
    title: "Expertise Solutions",
    data: [
      {
        id: 1,
        slug: "fintech-solution",
        title: "Fintech Solution",
        icon: "icon-software-1",
        image: "/assets/images/service/service-3-3.png",
      },
      {
        id: 2,
        slug: "ecommerce-solution",
        title: "Ecommerce Solution",
        icon: "icon-layer-1",
        image: "/assets/images/service/service-3-3.png",
      },
      {
        id: 3,
        slug: "erp-solution",
        title: "ERP Solution",
        icon: "icon-layer-1",
        image: "/assets/images/service/service-3-3.png",
      },
      {
        id: 4,
        slug: "healthcare-solution",
        title: "Healthcare Solution",
        icon: "icon-layer-1",
        image: "/assets/images/service/service-3-3.png",
      },
      {
        id: 5,
        slug: "education-solution",
        title: "Education Solution",
        icon: "icon-layer-1",
        image: "/assets/images/service/service-3-3.png",
      },
      {
        id: 6,
        slug: "on-demand-solution",
        title: "On-Demand Solution",
        icon: "icon-layer-1",
        image: "/assets/images/service/service-3-3.png",
      },
      {
        id: 7,
        slug: "saas-solution",
        title: "SAAS Solution",
        icon: "icon-layer-1",
        image: "/assets/images/service/service-3-3.png",
      },
      {
        id: 8,
        slug: "automation-solution",
        title: "Automation Solution",
        icon: "icon-layer-1",
        image: "/assets/images/service/service-3-3.png",
      },
      {
        id: 9,
        slug: "real-estate-solution",
        title: "Real Estate Solution",
        icon: "icon-layer-1",
        image: "/assets/images/service/service-3-3.png",
      },
    ],
  },
];
// Static export
export async function generateStaticParams() {
  return Services.flatMap(group =>
    group.data.map(service => ({
      serviceDetail: service.slug,
    }))
  );
}

// ✅ MUST be async in Next 15+
const ServiceDetail = async ({ params }) => {
  const { serviceDetail } = await params; // ✅ REQUIRED

  const service = Services
    .flatMap(group => group.data)
    .find(item => item.slug === serviceDetail);

  // if (!service) {
  //   notFound();
  // }

  return (
    <>
           <div className="page-wrapper"> 
      <Navbar/>
      <Banner title={service?.title} />
        <Brand />
        </div>
    </>
  );
};

export default ServiceDetail;
