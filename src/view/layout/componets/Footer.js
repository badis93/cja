import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="footer-py-60 text-center">
              <div className="row py-5">
                <div className="col-md-4">
                  <div className="card border-0 text-center features feature-primary feature-clean bg-transparent">
                    <div className="icons text-center mx-auto">
                      <i className="uil uil-phone rounded h3 mb-0" />
                    </div>
                    <div className="content mt-4">
                      <h5 className="footer-head">Phone</h5>
                      <p className="text-muted">
                        Start working with Landrick that can provide everything
                      </p>
                      <a href="tel:+152534-468-854" className="text-foot">
                        +152 534-468-854
                      </a>
                    </div>
                  </div>
                </div>
                {/*end col*/}
                <div className="col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="card border-0 text-center features feature-primary feature-clean bg-transparent">
                    <div className="icons text-center mx-auto">
                      <i className="uil uil-envelope rounded h3 mb-0" />
                    </div>
                    <div className="content mt-4">
                      <h5 className="footer-head">Email</h5>
                      <p className="text-muted">
                        Start working with Landrick that can provide everything
                      </p>
                      <a
                        href="mailto:contact@example.com"
                        className="text-foot"
                      >
                        contact@example.com
                      </a>
                    </div>
                  </div>
                </div>
                {/*end col*/}
                <div className="col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="card border-0 text-center features feature-primary feature-clean bg-transparent">
                    <div className="icons text-center mx-auto">
                      <i className="uil uil-map-marker rounded h3 mb-0" />
                    </div>
                    <div className="content mt-4">
                      <h5 className="footer-head">Location</h5>
                      <p className="text-muted">
                        C/54 Northwest Freeway, Suite 558, <br />
                        Houston, USA 485
                      </p>
                      <a
                        href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                        data-type="iframe"
                        className="video-play-icon text-foot lightbox"
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
          </div>
          {/*end col*/}
        </div>
        {/*end row*/}
      </div>
      {/*end container*/}
      <div className="footer-py-30 footer-bar bg-footer">
        <div className="container text-center">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-3 col-md-2 col-sm-3">
              <div className="text-sm-start">
                <a href="#" className="logo-footer">
                  <img src="assets/images/logo-icon.png" alt="" height={34} />
                </a>
              </div>
            </div>
            {/*end col*/}
            <div className="col-lg-6 col-md-6 col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <ul className="list-unstyled footer-list terms-service mb-0">
                <li className="list-inline-item mb-0">
                  <a href="javascript:void(0)" className="text-foot me-2">
                    Privacy
                  </a>
                </li>
                <li className="list-inline-item mb-0">
                  <a href="javascript:void(0)" className="text-foot me-2">
                    Terms
                  </a>
                </li>
                <li className="list-inline-item mb-0">
                  <a href="javascript:void(0)" className="text-foot me-2">
                    FAQs
                  </a>
                </li>
                <li className="list-inline-item mb-0">
                  <a href="javascript:void(0)" className="text-foot">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            {/*end col*/}
            <div className="col-lg-3 col-md-4 col-sm-3 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="text-sm-end">
                <p className="mb-0 text-foot">
                  © 2023{" "}
                  <a
                    href="http://www.shreethemes.in/"
                    target="_blank"
                    className="text-reset"
                  >
                    Shreethemes
                  </a>
                  .
                </p>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
      </div>
    </footer>
  );
};

export default Footer;
