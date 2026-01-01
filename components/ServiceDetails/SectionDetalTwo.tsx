import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { FaStar } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import { RiMentalHealthLine } from "react-icons/ri";
import { RiUserSettingsFill } from "react-icons/ri";

export default function StatsBar() {
  return (
    <section className="stats-bar">
      <div className="container">
        <div className="row text-center align-items-center">
          
          <div className="col-md-6 col-lg-3 stat-item">
           


             <div className="row">
              <div className="col-md-1">

            <RiMentalHealthLine className="stat-icon"/>
              </div>
              <div className="col-md-10">
                
            <h3>30+</h3>
         <p>Healthcare Mobile Apps<br />Delivered</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 stat-item">
            <div className="row">
              <div className="col-md-1">

            <MdAdminPanelSettings className="stat-icon"/>
              </div>
              <div className="col-md-10">
                
            <h3>100%</h3>
            <p>Client Satisfaction<br />Rate</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 stat-item">
            

            <div className="row">
              <div className="col-md-1">

            <RiUserSettingsFill className="stat-icon"/>
              </div>
              <div className="col-md-10">
                
            <h3>10+</h3>
            <p>Years of Industry<br />Experience</p>

              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 stat-item">
            <div className="row">
              <div className="col-md-1">
                <HiMiniDevicePhoneMobile className="stat-icon"/>

              </div>
              <div className="col-md-10">

            <h3>HIPAA</h3>
            <p>Compliance Across All<br />Projects</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
