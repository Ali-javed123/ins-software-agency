import React from 'react'
import './ourservices.css'
import { DiAndroid } from "react-icons/di";
import { FaApple } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";

const OurServices = () => {
  return (
    <div className='ourservices'>

          <div className="container">
              <div className="row">
                  <div className="col-md-12">
                      <div className="row d-flex my-2 justify-content-center  align-items-center">
                          <div className="col-md-6 text-center">
                              <h2 className='head'>Our Advanced <span className='headspan'>
                            Mobile App Development </span>  Services</h2>
                              <span>As a leading mobile app development company trusted by global innovators, we deliver end-to-end custom app development services that go beyond functionality and blend tech, design, and strategy into world-class digital experiences.</span>

                          </div>
                      </div>
                      <div className="row">
                          <div className="col-md-4 my-2">
                              <div className="ourservicesCard">
                                  <div className='row   my-1 '>
                                      <div className="col-3 my-2">
                                      <div className='ouriconwrap'>
                                          <DiAndroid fill='green' className='ouricon'/>
                                      </div>
                                          
                                      </div>
                                      <div className="col-md-9 my-2">
                                      <div>
                                          <h3 className='ourhead'>Android App Development</h3>
                                      </div>
                                      </div>
                                  </div>
                                  <span className='ourdes d-block '>We deliver custom app development for Android that’s fast, flexible, and built for scale, fully optimized for user experience, performance, and future updates across every Android device. We follow a modular development approach using Kotlin and Jetpack libraries to ensure easy maintenance and seamless compatibility across all Android versions.

</span>
                              </div>
                          </div>
                          <div className="col-md-4 my-2">
                              <div className="ourservicesCard">
                                  <div className='row   my-2 '>
                                      <div className="col-3 my-2">
                                      <div className='ouriconwrap'>
                                          <FaApple className='ouricon'/>
                                      </div>
                                          
                                      </div>
                                      <div className="col-md-9 my-2">
                                      <div>
                                          <h3 className='ourhead'>iOS App Development</h3>
                                      </div>
                                      </div>
                                  </div>
                                  <span className='ourdes d-block '>From concept to App Store, we engineer premium iOS apps with sleek UI, bulletproof code, and high-end native performance that Apple users love and trust. Our Swift-powered apps leverage Apple’s Human Interface Guidelines and native APIs to deliver polished, App Store-ready experiences.


</span>
                              </div>
                          </div>
                           <div className="col-md-4 my-2">
                              <div className="ourservicesCard">
                                  <div className='row   my-2 '>
                                      <div className="col-3 my-2">
                                      <div className='ouriconwrap'>
                                          <FaReact fill='cyan' className='ouricon'/>
                                      </div>
                                          
                                      </div>
                                      <div className="col-md-9 my-2">
                                      <div>
                                          <h3 className='ourhead'>React Native App Development</h3>
                                      </div>
                                      </div>
                                  </div>
                                  <span className='ourdes d-block '>Build once, scale everywhere. Our React Native apps deliver native-level performance with reduced time-to-market and seamless functionality across iOS and Android platforms. We integrate reusable components and native modules to speed up development while maintaining native capabilities where needed.


</span>
                              </div>
                          </div>
                          <div className="col-md-4 my-2">
                              <div className="ourservicesCard">
                                  <div className='row   my-2 '>
                                      <div className="col-3 my-2">
                                      <div className='ouriconwrap'>
                                          <FaFlutter className='ouricon'/>
                                      </div>
                                          
                                      </div>
                                      <div className="col-md-9 my-2">
                                      <div>
                                          <h3 className='ourhead'>Flutter App Development
</h3>
                                      </div>
                                      </div>
                                  </div>
                                  <span className='ourdes d-block '>Our Flutter app development is all about developing robust and aesthetic apps that run flawlessly across platforms, perfect for MVPs, startups, and full-scale digital products. Using Dart and Flutter’s rich widget libraries, we craft expressive UIs with smooth animations and strong back-end integration.



</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

    </div>
  )
}

export default OurServices