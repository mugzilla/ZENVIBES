import PageBanner from "@/components/PageBanner";
import NoxfolioLayout from "@/layout/NoxfolioLayout";

export const metadata = {
  title: "Contact",
};

const page = () => {
  return (
    <NoxfolioLayout>
      <PageBanner pageName={"Contact Us"} />
      {/* Contact Page Area start */}
      <section className="contact-page pt-40 pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="contact-page-content rmb-55 wow fadeInUp delay-0-2s">
                <div className="section-title mb-30">
                  <span className="sub-title mb-15">Get In Touch</span>
                  <h2>
                    Let’s Talk For your <span>Next Projects</span>
                  </h2>
                  <p align="justify">
                    Ready to level up your brand & online presence? we can
                    handle everything from branding to video!
                  </p>
                </div>
                <h6>Main Office</h6>
                <div className="widget_contact_info mb-35">
                  <ul>
                    <li>
                      <i className="far fa-map-marker-alt" /> Lawspet
                      <br /> Puducherry
                    </li>
                    <li>
                      <i className="far fa-envelope" />{" "}
                      <a href="mailto:zenvibestechnologies@gmail.com">
                        zenvibestechnologies@gmail.com
                      </a>
                    </li>
                    <li>
                      <i className="far fa-phone" />{" "}
                      <a href="callto:+91 9361733394">+91 9361733394</a>
                    </li>
                  </ul>
                </div>
                <h5>Follow Me</h5>
                <div className="social-style-one mt-10">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="contact-page-form contact-form form-style-one wow fadeInUp delay-0-2s">
                <form
                  id="contactForm"
                  className="contactForm"
                  name="contactForm"
                  action="assets/php/form-process.php"
                  method="post"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          defaultValue=""
                          placeholder="Mugzilla"
                          required=""
                          data-error="Please enter your Name"
                        />
                        <label htmlFor="name" className="for-icon">
                          <i className="far fa-user" />
                        </label>
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          defaultValue=""
                          placeholder="support@gmail.com"
                          required=""
                          data-error="Please enter your Email"
                        />
                        <label htmlFor="email" className="for-icon">
                          <i className="far fa-envelope" />
                        </label>
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="phone_number">Phone Number</label>
                        <input
                          type="text"
                          id="phone_number"
                          name="phone_number"
                          className="form-control"
                          defaultValue=""
                          placeholder="+91 9361733394"
                          required=""
                          data-error="Please enter your Phone Number"
                        />
                        <label htmlFor="phone_number" className="for-icon">
                          <i className="far fa-phone" />
                        </label>
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          className="form-control"
                          defaultValue=""
                          placeholder="Subject"
                          required=""
                          data-error="Please enter your Subject"
                        />
                        <label htmlFor="subject" className="for-icon">
                          <i className="far fa-text" />
                        </label>
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          rows={4}
                          placeholder="write message"
                          required=""
                          data-error="Please enter your Message"
                          defaultValue={""}
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group mb-0">
                        <button type="submit" className="theme-btn">
                          Send Us Message <i className="far fa-angle-right" />
                        </button>
                        <div id="msgSubmit" className="hidden" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
      {/* Contact Page Area end */}
      {/* Location Map Area Start */}
      <div className="contact-page-map pb-120 rpb-90 wow fadeInUp delay-0-2s">
        <div className="container">
          <div className="our-location">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d975.8027123036674!2d79.80827749548986!3d11.959898700000009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a536140cb1843ab%3A0x9b2d2d33bb3764c6!2s39%2C%20Prasanth%20St%2C%20Gurusithananda%20Samy%20Nagar%2C%20Navarkulam%2C%20Puducherry%2C%20605004!5e0!3m2!1sen!2sin!4v1711884451706!5m2!1sen!2sin"
              style={{ border: 0, width: "100%" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </NoxfolioLayout>
  );
};
export default page;
