import React from "react";
import "./ourservices.css";
import { DiAndroid } from "react-icons/di";
import { FaApple, FaReact } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";

const OurServices = () => {
  return (
    <section className="ourservices">
      <div className="container">
        {/* Heading */}
        <div className="row justify-content-center mb-4">
          <div className="col-md-8 text-center">
            <h2 className="head">
              Our Advanced{" "}
              <span className="headspan">Mobile App Development</span> Services
            </h2>
            <p className="mt-3">
              As a leading mobile app development company trusted by global
              innovators, we deliver end-to-end custom app development services
              that blend technology, design, and strategy.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="row">
          {/* Android */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="ourservicesCard">
              <div className="row align-items-center mb-2">
                <div className="col-3">
                  <div className="ouriconwrap">
                    <DiAndroid className="ouricon" />
                  </div>
                </div>
                <div className="col-9">
                  <h3 className="ourhead">Android App Development</h3>
                </div>
              </div>
              <p className="ourdes">
                We deliver scalable, high-performance Android applications using
                Kotlin and Jetpack libraries, ensuring smooth UX and long-term
                maintainability across all Android devices.
              </p>
            </div>
          </div>

          {/* iOS */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="ourservicesCard">
              <div className="row align-items-center mb-2">
                <div className="col-3">
                  <div className="ouriconwrap">
                    <FaApple className="ouricon" />
                  </div>
                </div>
                <div className="col-9">
                  <h3 className="ourhead">iOS App Development</h3>
                </div>
              </div>
              <p className="ourdes">
                From concept to App Store, we craft premium iOS apps using Swift
                and Apple’s Human Interface Guidelines to deliver secure,
                high-quality user experiences.
              </p>
            </div>
          </div>

          {/* React Native */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="ourservicesCard">
              <div className="row align-items-center mb-2">
                <div className="col-3">
                  <div className="ouriconwrap">
                    <FaReact className="ouricon" />
                  </div>
                </div>
                <div className="col-9">
                  <h3 className="ourhead">React Native Development</h3>
                </div>
              </div>
              <p className="ourdes">
                Build once, deploy everywhere. Our React Native solutions offer
                near-native performance with faster development cycles across
                both Android and iOS platforms.
              </p>
            </div>
          </div>

          {/* Flutter */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="ourservicesCard">
              <div className="row align-items-center mb-2">
                <div className="col-3">
                  <div className="ouriconwrap">
                    <FaFlutter className="ouricon" />
                  </div>
                </div>
                <div className="col-9">
                  <h3 className="ourhead">Flutter App Development</h3>
                </div>
              </div>
              <p className="ourdes">
                Our Flutter apps are visually rich, fast, and consistent across
                platforms, making them ideal for MVPs, startups, and enterprise
                products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
