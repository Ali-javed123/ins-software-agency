// components/ProjectCardSection.tsx
'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import ProjectCard, { Project } from './ProjectCard';
import './projectCard.css';
import { supabase } from "@/lib/supabase-client"

const sampleProjects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A fully responsive e-commerce solution with real-time inventory management, secure payment gateway integration, and personalized shopping experience.",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "var(--ostech-black-soft)",
  },
  {
    id: 2,
    title: "Health & Fitness App",
    description: "Mobile application with workout tracking, nutrition planning, and progress analytics using AI-based recommendations.",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "var(--ostech-black-soft)",
  },
  {
    id: 3,
    title: "Financial Dashboard",
    description: "Enterprise-grade dashboard for financial analytics with interactive charts, real-time data visualization, and predictive insights.",
    category: "Data Visualization",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "var(--ostech-black-soft)",
  },
  {
    id: 4,
    title: "Smart Home IoT",
    description: "Internet of Things platform connecting smart devices with centralized control, automation scenarios, and energy optimization.",
    category: "IoT Solution",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "var(--ostech-black-soft)",
  },
  {
    id: 5,
    title: "Educational Platform",
    description: "Interactive learning management system with video courses, quizzes, peer collaboration, and progress tracking.",
    category: "EdTech",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "var(--ostech-black-soft)",
  },
];



const DELIMITER = '|||CHUNK|||';




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
  id: string;
  created_at: string;
  paragraph: string;
  title: string;
  heading: string;
  btn_text: string;
  imageUrl: string | null;
  project_id: string;
}

interface Projects {
  id: string;
  created_at: string;
  title: string;
  heading: string;
  imageUrl: string | null;
  projectItems: ProjectItem[];
}
const ProjectCardSection: React.FC = () => {
  const [projects, setProjects] = useState<Projects[]>([
    
  ]);
  const [loading, setLoading] = useState<boolean>(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  // Smooth scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  // Calculate active index based on scroll
  const calculateActiveIndex = useCallback((progress: number) => {
    const rawIndex = progress * (sampleProjects.length - 1);
    return Math.min(Math.floor(rawIndex), sampleProjects.length - 1);
  }, []);
  
  // Update active index on scroll
  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (latest) => {
      setScrollProgress(latest);
      const newIndex = calculateActiveIndex(latest);
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    });
    
    return () => unsubscribe();
  }, [smoothProgress, calculateActiveIndex, activeIndex]);
  
  // Handle wheel event for smoother transitions
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!cardsContainerRef.current) return;
      
      e.preventDefault();
      const delta = e.deltaY;
      const newProgress = Math.min(Math.max(scrollProgress + (delta * 0.0005), 0), 1);
      setScrollProgress(newProgress);
    };
    
    const container = cardsContainerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }
    
    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, [scrollProgress]);
  


  const reconstructFromChunks = (chunkedString: string | null | undefined): string | null => {
    if (!chunkedString) return null;
  
    if (!chunkedString.includes(DELIMITER)) {
      return chunkedString;
    }
  
    return chunkedString.split(DELIMITER).join('');
  };
     const fetchProjects = useCallback(async (): Promise<void> => {
      try {
        setLoading(true);
        
        const { data: projectsData, error: projectsError } = await supabase
          .from("project")
          .select("*")
          .order("created_at", { ascending: false });
  
        if (projectsError) {
          console.error('Projects fetch error:', projectsError);
          throw projectsError;
        }
  
        if (projectsData && projectsData.length > 0) {
          const { data: allItemsData, error: itemsError } = await supabase
            .from("project_item")
            .select("*")
            .order("created_at", { ascending: true });
  
          if (itemsError) {
            console.error('Project items fetch error:', itemsError);
          }
  
          const processedProjects: Projects[] = projectsData.map((project: DatabaseProject) => {
            const projectItems: ProjectItem[] = (allItemsData || [])
              .filter((item: DatabaseProjectItem) => item.project_id === project.id)
              .map((item: DatabaseProjectItem) => {
                const imageUrl = reconstructFromChunks(item.image);
                
                return {
                  id: item.id,
                  created_at: item.created_at,
                  paragraph: item.paragraph,
                  title: item.title,
                  heading: item.heading,
                  btn_text: item.btn_text,
                  imageUrl: imageUrl,
                  project_id: item.project_id
                };
              });
  
            return {
              id: project.id,
              created_at: project.created_at,
              title: project.title,
              heading: project.heading,
              imageUrl: project.image,
              projectItems: projectItems
            };
          });
  
          setProjects(processedProjects);
        } else {
          setProjects([]);
        }
      } catch (error) {
        console.error("Error in fetchProjects:", error);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    }, []);
  
    useEffect(() => {
      fetchProjects();
    }, [fetchProjects]);
    
  
    console.log("projects:",projects)
  return (
    <section className="project-section py-5" ref={containerRef}>
       {projects.map((proj,k) =>
      <div key={`${k}`} className="container py-5">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <motion.h2 
              className="display-4 fw-bold mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Recent Projects
            </motion.h2>
            <motion.p 
              className="lead text-light mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Scroll to explore our portfolio of innovative solutions
            </motion.p>
            
            {/* Active card indicator with animation */}
            <div className="d-flex justify-content-center align-items-center mt-2 mb-2">
              <div className="d-flex align-items-center">
                {sampleProjects.map((_, idx) => (
                  <motion.div
                    key={idx}
                    className="indicator-dot mx-1"
                    animate={{
                      scale: idx === activeIndex ? 1.5 : 1,
                      backgroundColor: idx === activeIndex ? '#000' : '#ccc'
                    }}
                    transition={{ duration: 0.3 }}
                    onClick={() => {
                      const progress = idx / (sampleProjects.length - 1);
                      setScrollProgress(progress);
                      setActiveIndex(idx);
                    }}
                  />
                ))}
              </div>
              <span className="fw-medium ms-3">
                {activeIndex + 1} / {sampleProjects.length}
              </span>
            </div>
          </div>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-9">
            {/* Cards container with fixed height */}
            <div 
              className="project-cards-container"
              ref={cardsContainerRef}
            >
              {proj.projectItems.map((item, index) => (
                <ProjectCard 
                  key={item.id}
                  id={parseInt(item.id)}
                  project={{
      id: parseInt(item.id),  // ProjectCard expects number
      title: item.title,
      paragraph: item.paragraph,
                    heading: item.heading,
      btn_text:item.btn_text,
      imageUrl: item.imageUrl || '',
      color: 'var(--ostech-black-soft)',
    }}
                  index={index}
    totalCards={proj.projectItems.length}

                  activeIndex={activeIndex}
                />
              ))}
              
              {/* Scroll progress indicator inside container */}
              <div className="scroll-progress-indicator">
                <motion.div 
                  className="progress-line"
                  animate={{
                    height: `${scrollProgress * 100}%`
                  }}
                  transition={{ type: "spring", stiffness: 100, damping: 30 }}
                />
              </div>
            </div>
            
            {/* Scroll instructions */}
            <motion.div 
              className="scroll-instructions text-center mt-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="d-flex flex-column align-items-center">
                <span className="text-muted small mb-2">Scroll or use arrow keys to navigate</span>
                <div className="d-flex">
                  <motion.div 
                    className="arrow-up mx-2"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    onClick={() => {
                      const newIndex = Math.max(activeIndex - 1, 0);
                      setActiveIndex(newIndex);
                      setScrollProgress(newIndex / (sampleProjects.length - 1));
                    }}
                  />
                  <motion.div 
                    className="arrow-down mx-2"
                    animate={{ y: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    onClick={() => {
                      const newIndex = Math.min(activeIndex + 1, sampleProjects.length - 1);
                      setActiveIndex(newIndex);
                      setScrollProgress(newIndex / (sampleProjects.length - 1));
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
)}

        </section>
  );
};

export default ProjectCardSection;