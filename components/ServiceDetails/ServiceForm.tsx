"use client";
import Link from "next/link";
import './Form.css'
import { MdMessage } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";

const Form = () => {
    return (
        <>
            <div className="sectionForm">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="ri">
                                <h2 className="ritle my-2" >Let&apos;s Connect With Our Experts</h2>
                                <span className="d-block ritlev2 my-2">Get valuable consultation from our professionals to discuss your mobile application development project. We are here to help you with all of your queries.</span>
                                <span className="d-block ritlev3 my-2">Revolutionize Your Business</span>
                                <span className="d-block my-2">InS Tech Lab is a leading <Link href={'#'}> mobile app development company in Chicago </Link>, Houston, Dallas, Washington DC, Miami, Austin, and across the USA.</span>
                                <div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="d-flex align-items-center gap-1 mt-3">

  <img 
    src="/assets/images/rightfirms.webp" 
    alt="rightfirms" 
    width={"65px"}
    className="img-fluid"
  />

  <div>
    <span className="d-block fw-bold">5.0</span>
    <span className="d-block">GoodFirms</span>
  </div>
</div>


                                        </div>
                                        <div className="col-md-4">
                                            <div className="d-flex align-items-center gap-1 mt-3">

  <img 
    src="/assets/images/rightfirms.webp" 
    alt="rightfirms" 
    width={"65px"}
    className="img-fluid"
  />

  <div>
    <span className="d-block fw-bold">5.0</span>
    <span className="d-block">GoodFirms</span>
  </div>
</div>


                                    </div>
                         <div className="col-md-4">
                                            <div className="d-flex align-items-center gap-1 mt-3">

  <img 
    src="/assets/images/rightfirms.webp" 
    alt="rightfirms" 
    width={"65px"}
    className="img-fluid"
  />

  <div>
    <span className="d-block fw-bold">5.0</span>
    <span className="d-block">GoodFirms</span>
  </div>
</div>


                                        </div>           

                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-md-12">
                                            <div>
                                                <h2 className="ritle">Contact Info</h2>
                                            </div>
                                            <div className="d-flex gap-2 mt-2">
                                                <div>
                                <MdMessage size={24} color="#3399ff" />

                                                </div>
                                                <div>
                                                    <span className="ritlev2">info@mail.com</span>
                                                    </div>
                                            </div>
                                             <div className="d-flex gap-2 mt-2">
                                                <div>
                                <FaPhoneSquareAlt size={24} color="#3399ff" />

                                                </div>
                                                <div>
                                                    <span className="ritlev2 mt-2">02323242223</span>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="cards form-card">
                                <div className="card-body">
                                    <div>
                                        <h2 className="ritle mb-2">Get in Touch Now!</h2>
<div className="mb-2">
  <label htmlFor="fname" className="form-label">Full Name</label>
  <input type="text" className="form-control " id="fname" placeholder="Enter your name" />
</div>
<div className="mb-2">
  <label htmlFor="myemail" className="form-label">Email address</label>
  <input type="email" className="form-control" id="myemail" placeholder="name@example.com" />
</div>
<div className=" mt-2">
  <label htmlFor="floatingTextarea">Describe Your Project Need</label>
  <textarea className="form-control" placeholder="Describe Your Project Need" id="floatingTextarea"  defaultValue={""}  rows={7}/>
                                        </div>
                                        <div className="mt-2">
                                            <button className=" ostech-two-btn">Get to Touch</button>
                                        </div>



                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </>
)
}
export default Form;