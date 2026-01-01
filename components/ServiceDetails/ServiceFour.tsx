'use client'
import React, { useState } from 'react'
import './service-tech.css'

// Frontend
import { FaReact, FaAngular, FaVuejs, FaJava, FaPython, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiJavascript, SiTypescript, SiAdobexd, SiSketch, SiFigma, SiMongodb, SiPostgresql,SiDigitalocean, SiSqlite, SiMariadb, SiExpress, SiFirebase , SiHeroku, SiDocker, SiDjango } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { VscAzure } from "react-icons/vsc";
import { RiNextjsFill } from "react-icons/ri";
import { IconType } from "react-icons";

const ServiceFour = () => {
  const [show, setShow] = useState<string | undefined>('Frontend');

  return (
    <section className='tech'>
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-6">
            <h2>
              Inside The Tech Stack Of Our Mobile App Development Company
            </h2>
          </div>
          <div className="col-md-6">
            <p>
              At Ins Tech Lab, we use a carefully selected technology stack with the best tools and frameworks to build reliable and future-ready mobile apps. We work with everything from AI and AR/VR to modern development frameworks to make sure each app performs well, scales easily, and stays secure.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className='sdfs mb-4'>
          {['progarmming', 'database', 'cloud', 'UI/UX', 'Frontend', 'Backend', 'PlatForm'].map(btn => (
            <div key={btn}>
              <button 
                onClick={() => setShow(btn)}
                className={`btn ${show === btn ? 'active' : ''}`}
              >
                {btn.charAt(0).toUpperCase() + btn.slice(1)}
              </button>
            </div>
          ))}
        </div>

        {/* Icons Display */}
        {show === "Frontend" && (
          <div className="row d-flex justify-content-around align-content-start">
            <IconCard Icon={FaReact} color="skyblue" label="React JS" />
            <IconCard Icon={RiNextjsFill} color="white" label="Next JS" />
            <IconCard Icon={FaAngular} color="#DD0031" label="Angular JS" />
            <IconCard Icon={FaVuejs} color="#42b883" label="Vue JS" />
          </div>
        )}

        {show === "database" && (
          <div className="row d-flex justify-content-around align-content-start">
            <IconCard Icon={SiMongodb} color="#47A248" label="MongoDB" />
            <IconCard Icon={DiMysql} color="#00758F" label="MySQL" />
            <IconCard Icon={SiPostgresql} color="#336791" label="PostgreSQL" />
            <IconCard Icon={SiSqlite} color="#003B57" label="SQLite" />
            <IconCard Icon={SiMariadb} color="#003545" label="MariaDB" />
          </div>
        )}

        {show === "progarmming" && (
          <div className="row d-flex justify-content-center align-content-start">
            <IconCard Icon={SiJavascript} color="#F7DF1E" label="JavaScript" />
            <IconCard Icon={SiTypescript} color="#3178C6" label="TypeScript" />
            <IconCard Icon={FaPython} color="#3776AB" label="Python" />
            <IconCard Icon={FaJava} color="#007396" label="Java" />
          </div>
        )}

        {show === "UI/UX" && (
          <div className="row d-flex justify-content-center align-content-start">
            <IconCard Icon={SiAdobexd} color="#FF61F6" label="Adobe XD" />
            <IconCard Icon={SiSketch} color="#F7B500" label="Sketch" />
            <IconCard Icon={SiFigma} color="#A259FF" label="Figma" />
          </div>
        )}

        {show === "Backend" && (
          <div className="row d-flex justify-content-around align-content-start">
            <IconCard Icon={FaNodeJs} color="#339933" label="Node.js" />
            <IconCard Icon={SiExpress} color="#000000" label="Express.js" />
            <IconCard Icon={SiDjango} color="#092E20" label="Django" />
            <IconCard Icon={SiFirebase} color="#FFCA28" label="Firebase" />
          </div>
        )}

        {show === "PlatForm" && (
          <div className="row d-flex justify-content-around align-content-start">
            <IconCard Icon={SiDigitalocean} color="#FF9900" label="AWS" />
            <IconCard Icon={VscAzure} color="#0089D6" label="Azure" />
            <IconCard Icon={SiHeroku} color="#430098" label="Heroku" />
            <IconCard Icon={SiDocker} color="#2496ED" label="Docker" />
          </div>
        )}

      </div>
    </section>
  )
}

// IconCard Component
interface IconCardProps {
  Icon: IconType;
  color: string;
  label: string;
}

const IconCard: React.FC<IconCardProps> = ({ Icon, color, label }) => (
  <div className="col-md-2 text-center mb-4">
    <Icon className="df" color={color} />
    <span className='sd2 d-block mt-2'>{label}</span>
  </div>
);

export default ServiceFour;
