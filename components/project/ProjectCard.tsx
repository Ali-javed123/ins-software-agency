// components/ProjectCard.tsx
'use client';

import React, { useState,useEffect ,useCallback} from 'react';
import { motion } from 'framer-motion';

export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  color: string;
}





interface DatabaseProjectItem {
  id: string;
  created_at: string;
  paragraph: string;
  title: string;
  heading: string;
  btn_text: string;
  image: string | null;
  project_id: string;
}

interface DatabaseProject {
  id: string;
  created_at: string;
  title: string;
  heading: string;
  image: string | null;
}

interface ProjectItem {
  id: string | number;
  created_at?: string;
  paragraph?: string;
  title?: string;
  heading?: string;
  btn_text?: string;
  imageUrl?: string | null;
  project_id?: string;
  index?: number;
  totalCards?: number;
  activeIndex: number;
}

interface Projects {
  id?: string | number;
  created_at?: string;
  title: string;
  paragraph?: string;
  
  btn_text: string;

  heading?: string;
  imageUrl?: string | null;
  index?: number;
  totalCards?: number;
  activeIndex?: number;
  color?: string;

  project?: ProjectItem[];
}


interface ProjectCardProps {
  project: Projects;
  index: number;
  totalCards: number;
  activeIndex: number;
  id:string | number
}
const ProjectCard: React.FC<ProjectCardProps> = ({ 
  project, 
  index, 
  totalCards, 
  activeIndex 
}) => {


  // Calculate distance from active card
  const distanceFromActive = Math.abs(index - activeIndex);
  
  // Calculate z-index based on scroll position
  // Cards closer to active index get higher z-index
  const calculateZIndex = () => {
    // if (index === activeIndex) return totalCards + 10; // Active card on top
    if (index === activeIndex) return totalCards + 10; // Active card on top
    if (index < activeIndex) return totalCards - (activeIndex - index); // Cards above active
    return totalCards - (index - activeIndex); // Cards below active
  };
  
  // Calculate vertical offset for overlapping
  const calculateOffset = () => {
    if (index <= activeIndex) {
      // Cards at or above active position - normal overlap
      return index * 30;
    } else {
      // Cards below active position - increase overlap when scrolling
      return (index * 30) + (activeIndex * 15);
    }
  };
  
  // Calculate scale based on distance from active
  const calculateScale = () => {
    if (index === activeIndex) return 1;
    return 1 - (distanceFromActive * 0.05);
  };
  
  // Calculate opacity based on distance from active
  const calculateOpacity = () => {
    if (distanceFromActive <= 1) return 1;
    return 1 - (distanceFromActive * 0.2);
  };
  
  const zIndex = calculateZIndex();
  const offset = calculateOffset();
  const scale = calculateScale();
  const opacity = calculateOpacity();




  return (
    <motion.div 
      className="project-card"
      style={{
        zIndex,
      }}
      animate={{
        y: offset,
        scale,
        opacity,
      }}
      transition={{
        duration: 0.9,
        ease: "easeOut"
      }}
      initial={false}
    >
      {/* <div 
        className="card  h-100 border-0 shadow-lg overflow-hidden"
        style={{ backgroundColor: project.color }}
      >
        <div className="row g-0 h-100">
          <div className="col-md-6 d-flex align-items-center">
            <div className="card-body p-4 p-lg-5">
              <span className="badge bg-dark bg-opacity-25 mb-3 px-3 py-2 rounded-pill">
                {project.category}
              </span>
              <h3 className="card-title fw-bold mb-3">{project.title}</h3>
              <p className="card-text mb-4">{project.description}</p>
              <button className="btn btn-dark btn-lg px-4 py-2">
                View Project
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div 
              className="h-100 d-flex align-items-center justify-content-center p-4"
              style={{ minHeight: '300px' }}
            >
              <div 
                className="w-100 h-100 rounded-3"
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </div>
          </div>
        </div>
      </div> */}
    
      <div  className="card cards h-100 shadow-lg overflow-hidden">
  <div className="row g-0 h-100">
    <div className="col-md-6 d-flex align-items-center">
      <div className="card-body p-4 p-lg-5">
        <span className="btn btn-sm btn-outline-light bg-opacity-25 mb-3 px-2 py-1 rounded-pill">
          {project.title}
        </span>

        <h3 className="card-title fw-bold mb-3">
          {project.heading}
        </h3>

        <p className="card-text mb-4">
          {project.paragraph}
        </p>

        <button className=" ostech-btn ">
               { project.btn_text}
        </button>
      </div>
    </div>

    <div className="col-md-6">
      <div className="h-100 d-flex align-items-center justify-content-center p-4">
        <div
          className="w-100 h-100 rounded-3"
          style={{
            backgroundImage: `url(${project.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>
    </div>
  </div>
</div>
           


    </motion.div>
  );
};

export default ProjectCard;

