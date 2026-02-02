"use client"
import React, { useState, useEffect, useCallback } from 'react'
import { supabase } from "@/lib/supabase-client"



interface DatabaseTeam {
  id: string;
  title: string;
  heading: string;
  image: string | null;
  created_at?: string;
}

interface Team {
  id: string;
  title: string;
  heading: string;
  image: string | null;
  imageUrl?: string | null;
  created_at?: string;

}

const BUCKET_NAME = "teams";
const STORAGE_TYPE = "bucket";
const MAX_IMAGE_SIZE = 5 * 1024 * 1024;


const Team = () => {
  const [loading, setLoading] = useState(true)

  const [teams, setTeams] = useState<Team[]>([])

 const fetchTeams = useCallback(async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from("teams")
        .select("*")
        .order("created_at", { ascending: true })

      if (error) {
        console.error("Error fetching teams:", error)
        throw error
      }

      const processedTeams = (data || []).map((dbTeam: DatabaseTeam) => ({
        id: dbTeam.id,
        title: dbTeam.title,
        heading: dbTeam.heading,
        image: dbTeam.image,
        imageUrl: STORAGE_TYPE === "bucket" ? dbTeam.image : null
      }))

      setTeams(processedTeams)
    } catch (error) {
      console.error("Unexpected error:", error)
    } finally {
      setLoading(false)
    }
  }, [])


  useEffect(() => {
    fetchTeams()
  }, [fetchTeams])

  const getImageUrl = (team: Team): string => {
    if (team.image) {
      return team.image
    }
    return '/assets/images/team/team-1-1.jpg' // Default fallback image
  }
console.log("teams",teams)
  return (
    <>
<section className="team-one team-one--page">
              <div className="container">
                  <div className='text-center my-4'>
                      <h1 className='mytext fw-bolder'>
                          Team Members
                      </h1>
                  </div>
    <div className="row gutter-y-30">
            {teams.map((item, k) => (
              
      <div key={k} className="col-md-6 col-lg-4">
        <div className="team-card wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
          <div className="team-card__inner">
            <div className="team-card__image">
              <img src={getImageUrl(item)} alt="Mike Hardson" />
            </div>
            <div className="team-card__content">
              <div className="team-card__content__inner">
                <div className="team-card__content__inner__item">
                  <h3 className="team-card__content__title"><a href="team-details.html">{item.title}</a></h3>
                  <h6 className="team-card__content__designation">{item.heading}</h6>
                </div>
                <div className="team-card__content__hover">
                  <div className="team-card__content__hover__icon">
                    <i className="icon-share" />
                  </div>
                  <div className="team-card__content__hover__social">
                    <a href="https://instagram.com/"> <i className="fab fa-youtube" aria-hidden="true" /> <span className="sr-only">Instagram</span></a>
                    <a href="https://pinterest.com/"> <i className="fab fa-pinterest-p" aria-hidden="true" /> <span className="sr-only">Pinterest</span></a>
                    <a href="https://twitter.com/"> <i className="fab fa-twitter" aria-hidden="true" /> <span className="sr-only">Twitter</span> </a>
                    <a href="https://facebook.com/"> <i className="fab fa-facebook-f" aria-hidden="true" /> <span className="sr-only">Facebook</span> </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
            ))}
      
    </div>{/* /.row */}
  </div>{/* /.container */}
</section>
 
    </>
  )
}

export default Team
// import React, { FC } from "react";
// import { FaGithub } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import { FaFacebookF } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";

// const Team: FC = () => {
//   return (
//     <section className="teamsec">
//       <div className="container-fluid">
        
//         <div className="row">
//           <div className="col-md-6">
//             <div className="teamCard">
//               <div className="row ">
//                 <div className="col-lg-5">
//                   <div className="imageWraper">
//                     <img
//                       src="/assets/images/team/team-1-1.jpg"
//                       className="teamImage position-relative"
//                       alt="sa"
//                     />
//                   </div>
//                 </div>
//                 <div className="col-lg-7">
//                 <div className="teamContent mt-3">
//                   <h2 className="teamHeading mt-3">Sam Monic</h2>
//                  < h3 className="teamPosition mt-2">Web Developer</h3>
//                     <span className="teamdes d-block " >4 years professioanl with modren Web  application</span>
//                     <div className="teamDivider mt-3"></div>
//                     <div className="badgeWarpe mt-3">
//                   <div>

//                       <button className="stackbage"> React JS</button>
//                       </div>
//                       <div>

//                       <button className="stackbage"> Next JS</button>
//                       </div>
//                       <div>

//                       <button className="stackbage"> Node JS</button>
//                       </div>
//                       <div>

//                       <button className="stackbage"> PostgreSQL </button>
//                       </div>
//                          <div>

//                       <button className="stackbage"> MongoDB </button>
//                       </div>
//                     </div>
//                     <div className="icon-wrap mt-3">
//                   <div>
//                     <FaGithub className="iconsname"/>
//                   </div>
//                       <div>
//                     <FaLinkedin className="iconsname"/>
//                   </div>
//                   <div>
//                     <FaFacebookF className="iconsname"/>
//                   </div>
//                     <div>
//                     <FaInstagram className="iconsname"/>
//                   </div>

//                 </div>
//                   </div>
//                   {/* You can add team member info here */}
//                 </div>
                
//               </div>
//             </div>
//           </div>
//              <div className="col-md-6">
//             <div className="teamCard">
//               <div className="row">
//                 <div className="col-lg-5">
//                   <div className="imageWraper">
//                     <img
//                       src="/assets/images/team/team-1-1.jpg"
//                       className="teamImage position-relative"
//                       alt="sa"
//                     />
//                   </div>
//                 </div>
//                 <div className="col-lg-7">
//                 <div className="teamContent mt-3">
//                   <h2 className="teamHeading mt-3">Sam Monic</h2>
//                  < h3 className="teamPosition mt-2">Full Stack</h3>
//                     <span className="teamdes d-block " >4 years professioanl with modren Stack application </span>
//                     <div className="teamDivider mt-3"></div>
//                     <div className="badgeWarpe mt-3">
//                   <div>

//                       <button className="stackbage"> React JS</button>
//                       </div>
//                       <div>

//                       <button className="stackbage"> Next JS</button>
//                       </div>
//                       <div>

//                       <button className="stackbage"> Node JS</button>
//                       </div>
//                       <div>

//                       <button className="stackbage"> PostgreSQL </button>
//                       </div>
//                          <div>

//                       <button className="stackbage"> MongoDB </button>
//                       </div>
//                     </div>
//                     <div className="icon-wrap mt-3">
//                   <div>
//                     <FaGithub className="iconsname"/>
//                   </div>
//                       <div>
//                     <FaLinkedin className="iconsname"/>
//                   </div>
//                   <div>
//                     <FaFacebookF className="iconsname"/>
//                   </div>
//                     <div>
//                     <FaInstagram className="iconsname"/>
//                   </div>

//                 </div>
//                   </div>
//                   {/* You can add team member info here */}
//                 </div>
                
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Team;
