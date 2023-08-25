import React from "react";

const Map = () => {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6  mt-4 pt-2">
              <div className="card shadow rounded border-0">
                <div className="card-body py-5">
                  <h4 className="card-title">Get In Touch !</h4>
                  <div className="custom-form mt-3">
                    <form
                      method="post"
                      name="myForm"
                      id="myForm"
                      onsubmit="return validateForm()"
                    >
                      <p id="error-msg" className="mb-0" />
                      <div id="simple-msg" />
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Your Name <span className="text-danger">*</span>
                            </label>
                            <div className="form-icon position-relative">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-user fea icon-sm icons"
                              >
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                <circle cx={12} cy={7} r={4} />
                              </svg>
                              <input
                                name="name"
                                id="name"
                                type="text"
                                className="form-control ps-5"
                                placeholder="Name :"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Your Email <span className="text-danger">*</span>
                            </label>
                            <div className="form-icon position-relative">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-mail fea icon-sm icons"
                              >
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                              </svg>
                              <input
                                name="email"
                                id="email"
                                type="email"
                                className="form-control ps-5"
                                placeholder="Email :"
                              />
                            </div>
                          </div>
                        </div>
                        {/*end col*/}
                        <div className="col-12">
                          <div className="mb-3">
                            <label className="form-label">Subject</label>
                            <div className="form-icon position-relative">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-book fea icon-sm icons"
                              >
                                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                              </svg>
                              <input
                                name="subject"
                                id="subject"
                                className="form-control ps-5"
                                placeholder="subject :"
                              />
                            </div>
                          </div>
                        </div>
                        {/*end col*/}
                        <div className="col-12">
                          <div className="mb-3">
                            <label className="form-label">
                              Comments <span className="text-danger">*</span>
                            </label>
                            <div className="form-icon position-relative">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-message-circle fea icon-sm icons clearfix"
                              >
                                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                              </svg>
                              <textarea
                                name="comments"
                                id="comments"
                                rows={4}
                                className="form-control ps-5"
                                placeholder="Message :"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <div className="d-grid">
                            <button
                              type="submit"
                              id="submit"
                              name="send"
                              className="btn btn-primary"
                            >
                              Send Message
                            </button>
                          </div>
                        </div>
                        {/*end col*/}
                      </div>
                      {/*end row*/}
                    </form>
                  </div>
                  {/*end custom-form*/}
                </div>
              </div>
            </div>
            {/*end col*/}
            <div className="col-lg-8 col-md-6 ps-md-3 pe-md-3 mt-4 pt-2">
              <div className="card map map-height-two rounded map-gray border-0">
                <div className="card-body p-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d828.3470852848617!2d10.866284008361335!3d33.853881400516116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa5fe61902185%3A0xd02370249d477b6!2zQ0pBINmF2LXYsdmBINis2LHYqNmHINmE2YTYp9mE2YXZhtmK2YjZhQ!5e0!3m2!1sfr!2stn!4v1692970725753!5m2!1sfr!2stn"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    width={600}
                    height={450}
                  />
                </div>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
        <div className="container mt-100 mt-60">
          <div className="row">
            <div className="col-md-4">
              <div className="card border-0 text-center features feature-primary feature-clean">
                <div className="icons text-center mx-auto">
                  <i className="uil uil-phone rounded h3 mb-0" />
                </div>
                <div className="content mt-4">
                  <h5 className="fw-bold">Phone</h5>
                  <p className="text-muted">
                    Start working with Landrick that can provide everything
                  </p>
                  <a href="tel:+152534-468-854" className="read-more">
                    +152 534-468-854
                  </a>
                </div>
              </div>
            </div>
            {/*end col*/}
            <div className="col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="card border-0 text-center features feature-primary feature-clean">
                <div className="icons text-center mx-auto">
                  <i className="uil uil-envelope rounded h3 mb-0" />
                </div>
                <div className="content mt-4">
                  <h5 className="fw-bold">Email</h5>
                  <p className="text-muted">
                    Start working with Landrick that can provide everything
                  </p>
                  <a href="mailto:contact@example.com" className="read-more">
                    contact@example.com
                  </a>
                </div>
              </div>
            </div>
            {/*end col*/}
            <div className="col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="card border-0 text-center features feature-primary feature-clean">
                <div className="icons text-center mx-auto">
                  <i className="uil uil-map-marker rounded h3 mb-0" />
                </div>
                <div className="content mt-4">
                  <h5 className="fw-bold">Location</h5>
                  <p className="text-muted">
                    C/54 Northwest Freeway, Suite 558, <br />
                    Houston, USA 485
                  </p>
                  <a
                    href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                    data-type="iframe"
                    className="video-play-icon read-more lightbox"
                  >
                    View on Google map
                  </a>
                </div>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
      </section>
    </>
  );
};

export default Map;
