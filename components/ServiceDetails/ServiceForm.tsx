"use client";
import { FC, useState } from "react";
import Link from "next/link";
import './Form.css'
import { useFormik } from "formik";
import * as Yup from "yup";
import { supabase } from "@/lib/supabase-client";

interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}
import { MdMessage } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";

const Form = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState<string>("");
    const formik = useFormik<ContactFormValues>({
      initialValues: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
      validationSchema: Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string()
          .email("Invalid email")
          .required("Email is required"),
        subject: Yup.string().required("Subject is required"),
        message: Yup.string().required("Message is required"),
      }),
      onSubmit: async (values, { resetForm }) => {
        try {
          setLoading(true);
          setSuccess("");
    
          const { error } = await supabase.from("contact_us").insert([
            {
              user_name: values.name,
              email: values.email,
              subject: values.subject,
              description: values.message,
            },
          ]);
    
          if (error) {
            throw error;
          }
    
          setSuccess("Message sent successfully!");
          resetForm();
        } catch (error: unknown) {
          if (error instanceof Error) {
            alert(error.message);
          }
        } finally {
          setLoading(false);
        }
      },
    });
    
    
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
                                        <form  onSubmit={formik.handleSubmit}>
<div className="mb-2">
  <label htmlFor="name" className="form-label">User Name</label>
                                                <input type="text" className="form-control " id="name" name="name" placeholder="Enter your name"
                                                value={formik.values.name}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                                                />
                                                 {formik.touched.name && formik.errors.name && (
                          <small className="text-danger">
                            {formik.errors.name}
                          </small>
                        )}
</div>
<div className="mb-2">
  <label htmlFor="email" className="form-label">Email address</label>
  <input type="email" className="form-control" id="email" name="email" placeholder="name@example.com"  value={formik.values.email}
                          onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur} />
                                                {formik.touched.email && formik.errors.email && (
                          <small className="text-danger">
                            {formik.errors.email}
                          </small>
                        )}
                                            </div>
                                            <div className="mb-2">
  <label htmlFor="subject" className="form-label">Subject</label>
                                                <input type="text" className="form-control " id="subject" name="subject" placeholder="Enter your subject"
                                                value={formik.values.subject}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                                                />
                                                 {formik.touched.subject && formik.errors.subject && (
                          <small className="text-danger">
                            {formik.errors.subject}
                          </small>
                        )}
</div>
<div className=" mt-2">
  <label htmlFor="message">Describe Your Project Need</label>
  <textarea className="form-control" placeholder="Describe Your Project Need" name="message"  id="message"    rows={7}   value={formik.values.message}
                          onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur} />
                                                  {formik.touched.message && formik.errors.message && (
                          <small className="text-danger">
                            {formik.errors.message}
                          </small>
                        )}
                                            </div>
                                        <div className="mt-3">
                                            <button type="submit"  disabled={loading} className=" ostech-btn">                            {loading ? "Sending..." : "Get to Touch"}
</button>
                                        </div>
                                            </form>



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