"use client";

import { FC, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { supabase } from "@/lib/supabase-client";

interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactUsThree = () => {
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
    <section className="contact-two">
  <div className="container">
    <div className="row"> 
      <div className="col-lg-4">
        <div className="contact-two__left">
          <div className="contact-two__thumb wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="500ms">
            <img src="/assets/images/resources/why-choos-us-3-1.png" alt="ostech image" />
          </div>
        </div>
      </div>
      <div className="col-lg-8">
        <div className="contact-two__right wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="500ms">
          <div className="contact-two__top">
            <div className="contact-two__top__content">
              <div className="sec-title sec-title--three text-center wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
                <div className="d-flex align-items-center justify-content-center">
                  <img src="/assets/images/shapes/sec-title-s-2.png" alt="Contact with us" className="sec-title__img" />
                  <h6 className="sec-title__tagline">Contact with us</h6>
                </div>
                <h3 className="sec-title__title">Feel Free to Write us</h3>
              </div>
            </div>
          </div>
          <div className="contact-two__content">
            <div className="contact-two__form__inner">
              <form
                    onSubmit={formik.handleSubmit}
 className="contact-two__form contact-form-validated form-one wow fadeInUp" data-wow-duration="1500ms" action="#">
                <div className="form-one__group">
                  <div className="form-one__control form-one__control--full">
                    <input type="text"                           name="name"
                          placeholder="Your Name"
                          value={formik.values.name}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          />
                                                  {formik.touched.name && formik.errors.name && (
                          <small className="text-danger">
                            {formik.errors.name}
                          </small>
                        )}

                  </div>{/* /.form-one__control form-one__control__full */}
                  <div className="form-one__control form-one__control--full">
                          <input type="email" name="email" placeholder="Email Address"
                                                    value={formik.values.email}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}

                          />
                                                  {formik.touched.email && formik.errors.email && (
                          <small className="text-danger">
                            {formik.errors.email}
                          </small>
                        )}

                  </div>{/* /.form-one__control form-one__control__full */}
                  <div className="form-one__control form-one__control--full">
                          <input type="text" name="subject" placeholder="Subject"
                                                    value={formik.values.subject}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}

                          />
                                                  {formik.touched.subject && formik.errors.subject && (
                          <small className="text-danger">
                            {formik.errors.subject}
                          </small>
                        )}

                  </div>{/* /.form-one__control form-one__control__full */}
                  <div className="form-one__control form-one__control--full">
                          <textarea name="message" placeholder="Write a Message" 
                    
                                              value={formik.values.message}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}

                          />
                                                  {formik.touched.message && formik.errors.message && (
                          <small className="text-danger">
                            {formik.errors.message}
                          </small>
                        )}

                  </div>{/* /.form-one__control */}
                  <div className="form-one__control form-one__control--full">
                    <button type="submit" className="ostech-btn"                           disabled={loading}
                          >
                            {loading ? "Sending..." : "Send a Message"}
</button>
                  </div>{/* /.form-one__control */}
                </div>{/* /.form-one__group */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="contact-two__shape">
    <img src="/assets/images/shapes/benefit-shape-1-1.png" alt="daf" />
  </div>
</section>

    )
}
export default ContactUsThree;