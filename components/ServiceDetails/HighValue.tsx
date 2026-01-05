import React from 'react'
import './highValue.css'
import { IoMdAnalytics } from "react-icons/io";
import { CiWifiOff } from "react-icons/ci";
import { TbMessageChatbotFilled } from "react-icons/tb";
import { IoNotifications } from "react-icons/io5";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { MdRecordVoiceOver } from "react-icons/md";
import { MdLanguage } from "react-icons/md";

const HighValue = () => {
  return (
      <div className='highvalue' style={{background:`url(/assets/images/service/high-value.webp)`}}>
          <div className="px-5">
              <div className="row justify-content-center align-items-center">
                  <div className="col-md-12">
                      
              <div className="row my-2 justify-content-center align-content-center">
                  <div className="col-md-6 ">
                      <div className='text-center'>
                                  <h2 className='highhead my-2'>High-Value <span className='highspan'>Features for High-Performance</span> Apps</h2>

                          <p className='highpara my-2'>Our mobile app development services include all the important features your app needs to perform well. We add real-time analytics to give you instant insights, offline access so your app works without internet, and AI chatbots to help users quickly. We also build AR/VR features for interactive experiences and secure payment options for smooth transactions. Every feature is built to be super reliable and ready to grow with your business.</p>
                      </div>
                  </div>
              </div>
                      <div className="row gutter-x-0">
                          <div className="col-md-2 my-2">
                              <div className='highCard text-center'>
                                  <div className='mb-3'>
                                      <IoMdAnalytics className="highCardicon"/>
                                  </div >
                                  <span className='highCardpara d-block'>Real-time Analytics</span>
                                  
                              </div>
                          </div>
                          <div className="col-md-2 my-2">
                              <div className='highCard text-center'>
                                  <div className='mb-3'>
                                      <TbMessageChatbotFilled className="highCardicon"/>
                                  </div >
                                  <span className='highCardpara d-block'>Chatbot Integration</span>
                                  
                              </div>
                          </div>
                            <div className="col-md-2 my-2">
                              <div className='highCard text-center'>
                                  <div className='mb-3'>
                                      <IoNotifications className="highCardicon"/>
                                  </div >
                                  <span className='highCardpara d-block'>Social Media Integration</span>
                                  
                              </div>
                          </div>
                           <div className="col-md-2 my-2">
                              <div className='highCard text-center'>
                                  <div className='mb-3'>
                                      <CiWifiOff className="highCardicon"/>
                                  </div >
                                  <span className='highCardpara d-block'>Offline Functionality</span>
                                  
                              </div>
                          </div>
                             <div className="col-md-2 my-2">
                              <div className='highCard text-center'>
                                  <div className='mb-3'>
                                      <FaCircleDollarToSlot className="highCardicon"/>
                                  </div >
                                  <span className='highCardpara d-block'>Payment Gateway Integration</span>
                                  
                              </div>
                          </div>
                          <div className="col-md-2 my-2">
                              <div className='highCard text-center'>
                                  <div className='mb-3'>
                                      <MdRecordVoiceOver className="highCardicon"/>
                                  </div >
                                  <span className='highCardpara d-block'>Voice Recognition
</span>
                                  
                              </div>
                          </div>
                            <div className="col-md-2 my-2">
                              <div className='highCard text-center'>
                                  <div className='mb-3'>
                                      <MdRecordVoiceOver className="highCardicon"/>
                                  </div >
                                  <span className='highCardpara d-block'>Voice Recognition
</span>
                                  
                              </div>
                          </div>
                             <div className="col-md-2 my-2">
                              <div className='highCard text-center'>
                                  <div className='mb-3'>
                                      <MdLanguage className="highCardicon"/>
                                  </div >
                                  <span className='highCardpara d-block'>Multi-language Support

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

export default HighValue;