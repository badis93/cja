import React from "react";

const Categ1 = () => {
  return (
    <>
      <div className="container-fluid">
        <div
          id="grid"
          className="row mt-4 shuffle"
          style={{
            position: "relative",
            overflow: "hidden",
            height: "284.583px",
            transition: "height 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s",
          }}
        >
          <div
            className="col-lg-3 col-md-6 col-12 spacing picture-item shuffle-item shuffle-item--visible"
            data-groups='["branding"]'
            style={{
              position: "absolute",
              top: 0,
              visibility: "visible",
              willChange: "transform",
              left: 0,
              opacity: 1,
              transitionDuration: "250ms",
              transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              transitionProperty: "transform, opacity",
              transform: "translate(0px) scale(1)",
            }}
          >
            <div className="card border-0 work-container work-primary work-grid position-relative d-block overflow-hidden rounded">
              <div className="card-body p-0">
                <a
                  href="assets/images/work/20.jpg"
                  className="lightbox d-inline-block tobii-zoom"
                  title=""
                >
                  <img
                    src={require("../img/SÉRIE 75 BLINDÉE.png")}
                    className="img-fluid"
                    alt="work-image"
                  />
                  <div className="tobii-zoom__icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M21 16v5h-5" />
                      <path d="M8 21H3v-5" />
                      <path d="M16 3h5v5" />
                      <path d="M3 8V3h5" />
                    </svg>
                  </div>
                </a>
                <div className="content p-3">
                  <h5 className="mb-0">
                    <a
                      href="portfolio-detail-one.html"
                      className="text-dark title"
                    >
                      Iphone mockup
                    </a>
                  </h5>
                  <h6 className="text-muted tag mb-0">Branding</h6>
                </div>
              </div>
            </div>
          </div>
          {/*end col*/}
          <div
            className="col-lg-3 col-md-6 col-12 spacing picture-item shuffle-item shuffle-item--hidden"
            data-groups='["designing"]'
            style={{
              position: "absolute",
              top: 0,
              visibility: "hidden",
              willChange: "transform",
              left: 0,
              opacity: 0,
              transform: "translate(323px) scale(0.001)",
              transitionDuration: "250ms",
              transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              transitionProperty: "transform, opacity",
            }}
            aria-hidden="true"
          >
            <div className="card border-0 work-container work-primary work-grid position-relative d-block overflow-hidden rounded">
              <div className="card-body p-0">
                <a
                  href="assets/images/work/13.jpg"
                  className="lightbox d-inline-block tobii-zoom"
                  title=""
                >
                  <img
                    src="assets/images/work/13.jpg"
                    className="img-fluid"
                    alt="work-image"
                  />
                  <div className="tobii-zoom__icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M21 16v5h-5" />
                      <path d="M8 21H3v-5" />
                      <path d="M16 3h5v5" />
                      <path d="M3 8V3h5" />
                    </svg>
                  </div>
                </a>
                <div className="content p-3">
                  <h5 className="mb-0">
                    <a
                      href="portfolio-detail-one.html"
                      className="text-dark title"
                    >
                      Mockup Collection
                    </a>
                  </h5>
                  <h6 className="text-muted tag mb-0">Mockup</h6>
                </div>
              </div>
            </div>
          </div>
          {/*end col*/}
          <div
            className="col-lg-3 col-md-6 col-12 spacing picture-item shuffle-item shuffle-item--hidden"
            data-groups='["photography"]'
            style={{
              position: "absolute",
              top: 0,
              visibility: "hidden",
              willChange: "transform",
              left: 0,
              opacity: 0,
              transform: "translate(647px) scale(0.001)",
              transitionDuration: "250ms",
              transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              transitionProperty: "transform, opacity",
            }}
            aria-hidden="true"
          >
            <div className="card border-0 work-container work-primary work-grid position-relative d-block overflow-hidden rounded">
              <div className="card-body p-0">
                <a
                  href="assets/images/work/14.jpg"
                  className="lightbox d-inline-block tobii-zoom"
                  title=""
                >
                  <img
                    src="assets/images/work/14.jpg"
                    className="img-fluid"
                    alt="work-image"
                  />
                  <div className="tobii-zoom__icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M21 16v5h-5" />
                      <path d="M8 21H3v-5" />
                      <path d="M16 3h5v5" />
                      <path d="M3 8V3h5" />
                    </svg>
                  </div>
                </a>
                <div className="content p-3">
                  <h5 className="mb-0">
                    <a
                      href="portfolio-detail-one.html"
                      className="text-dark title"
                    >
                      Abstract images
                    </a>
                  </h5>
                  <h6 className="text-muted tag mb-0">Abstract</h6>
                </div>
              </div>
            </div>
          </div>
          {/*end col*/}
          <div
            className="col-lg-3 col-md-6 col-12 spacing picture-item shuffle-item shuffle-item--hidden"
            data-groups='["development"]'
            style={{
              position: "absolute",
              top: 0,
              visibility: "hidden",
              willChange: "transform",
              left: 0,
              opacity: 0,
              transform: "translate(970px) scale(0.001)",
              transitionDuration: "250ms",
              transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              transitionProperty: "transform, opacity",
            }}
            aria-hidden="true"
          >
            <div className="card border-0 work-container work-primary work-grid position-relative d-block overflow-hidden rounded">
              <div className="card-body p-0">
                <a
                  href="assets/images/work/15.jpg"
                  className="lightbox d-inline-block tobii-zoom"
                  title=""
                >
                  <img
                    src="assets/images/work/15.jpg"
                    className="img-fluid"
                    alt="work-image"
                  />
                  <div className="tobii-zoom__icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M21 16v5h-5" />
                      <path d="M8 21H3v-5" />
                      <path d="M16 3h5v5" />
                      <path d="M3 8V3h5" />
                    </svg>
                  </div>
                </a>
                <div className="content p-3">
                  <h5 className="mb-0">
                    <a
                      href="portfolio-detail-one.html"
                      className="text-dark title"
                    >
                      Yellow bg with Books
                    </a>
                  </h5>
                  <h6 className="text-muted tag mb-0">Books</h6>
                </div>
              </div>
            </div>
          </div>
          {/*end col*/}
          <div
            className="col-lg-3 col-md-6 col-12 spacing picture-item shuffle-item shuffle-item--visible"
            data-groups='["branding"]'
            style={{
              position: "absolute",
              top: 0,
              visibility: "visible",
              willChange: "transform",
              left: 0,
              opacity: 1,
              transform: "translate(323px) scale(1)",
              transitionDuration: "250ms",
              transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              transitionProperty: "transform, opacity",
            }}
          >
            <div className="card border-0 work-container work-primary work-grid position-relative d-block overflow-hidden rounded">
              <div className="card-body p-0">
                <a
                  href="assets/images/work/16.jpg"
                  className="lightbox d-inline-block tobii-zoom"
                  title=""
                >
                  <img
                    src={require("../img/SÉRIE 40 ELLIPSE.png")}
                    className="img-fluid"
                    alt="work-image"
                  />
                  <div className="tobii-zoom__icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M21 16v5h-5" />
                      <path d="M8 21H3v-5" />
                      <path d="M16 3h5v5" />
                      <path d="M3 8V3h5" />
                    </svg>
                  </div>
                </a>
                <div className="content p-3">
                  <h5 className="mb-0">
                    <a
                      href="portfolio-detail-one.html"
                      className="text-dark title"
                    >
                      Company V-card
                    </a>
                  </h5>
                  <h6 className="text-muted tag mb-0">V-card</h6>
                </div>
              </div>
            </div>
          </div>
          {/*end col*/}
          <div
            className="col-lg-3 col-md-6 col-12 spacing picture-item shuffle-item shuffle-item--visible"
            data-groups='["branding"]'
            style={{
              position: "absolute",
              top: 0,
              visibility: "visible",
              willChange: "transform",
              left: 0,
              opacity: 1,
              transform: "translate(647px) scale(1)",
              transitionDuration: "250ms",
              transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              transitionProperty: "transform, opacity",
            }}
          >
            <div className="card border-0 work-container work-primary work-grid position-relative d-block overflow-hidden rounded">
              <div className="card-body p-0">
                <a
                  href="assets/images/work/17.jpg"
                  className="lightbox d-inline-block tobii-zoom"
                  title=""
                >
                  <img
                    src={require("../img/SÉRIE EX45 PRESTIGE.png")}
                    className="img-fluid"
                    alt="work-image"
                  />
                  <div className="tobii-zoom__icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M21 16v5h-5" />
                      <path d="M8 21H3v-5" />
                      <path d="M16 3h5v5" />
                      <path d="M3 8V3h5" />
                    </svg>
                  </div>
                </a>
                <div className="content p-3">
                  <h5 className="mb-0">
                    <a
                      href="portfolio-detail-one.html"
                      className="text-dark title"
                    >
                      Mockup box with paints
                    </a>
                  </h5>
                  <h6 className="text-muted tag mb-0">Photography</h6>
                </div>
              </div>
            </div>
          </div>
          {/*end col*/}
          <div
            className="col-lg-3 col-md-6 col-12 spacing picture-item shuffle-item shuffle-item--hidden"
            data-groups='["designing"]'
            style={{
              position: "absolute",
              top: 0,
              visibility: "hidden",
              willChange: "transform",
              left: 0,
              opacity: 0,
              transform: "translate(647px, 285px) scale(0.001)",
              transitionDuration: "250ms",
              transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              transitionProperty: "transform, opacity",
            }}
            aria-hidden="true"
          >
            <div className="card border-0 work-container work-primary work-grid position-relative d-block overflow-hidden rounded">
              <div className="card-body p-0">
                <a
                  href="assets/images/work/18.jpg"
                  className="lightbox d-inline-block tobii-zoom"
                  title=""
                >
                  <img
                    src="assets/images/work/18.jpg"
                    className="img-fluid"
                    alt="work-image"
                  />
                  <div className="tobii-zoom__icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M21 16v5h-5" />
                      <path d="M8 21H3v-5" />
                      <path d="M16 3h5v5" />
                      <path d="M3 8V3h5" />
                    </svg>
                  </div>
                </a>
                <div className="content p-3">
                  <h5 className="mb-0">
                    <a
                      href="portfolio-detail-one.html"
                      className="text-dark title"
                    >
                      Coffee cup
                    </a>
                  </h5>
                  <h6 className="text-muted tag mb-0">Cups</h6>
                </div>
              </div>
            </div>
          </div>
          {/*end col*/}
          <div
            className="col-lg-3 col-md-6 col-12 spacing picture-item shuffle-item shuffle-item--hidden"
            data-groups='["development"]'
            style={{
              position: "absolute",
              top: 0,
              visibility: "hidden",
              willChange: "transform",
              left: 0,
              opacity: 0,
              transform: "translate(970px, 285px) scale(0.001)",
              transitionDuration: "250ms",
              transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              transitionProperty: "transform, opacity",
            }}
            aria-hidden="true"
          >
            <div className="card border-0 work-container work-primary work-grid position-relative d-block overflow-hidden rounded">
              <div className="card-body p-0">
                <a
                  href="assets/images/work/19.jpg"
                  className="lightbox d-inline-block tobii-zoom"
                  title=""
                >
                  <img
                    src="assets/images/work/19.jpg"
                    className="img-fluid"
                    alt="work-image"
                  />
                  <div className="tobii-zoom__icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M21 16v5h-5" />
                      <path d="M8 21H3v-5" />
                      <path d="M16 3h5v5" />
                      <path d="M3 8V3h5" />
                    </svg>
                  </div>
                </a>
                <div className="content p-3">
                  <h5 className="mb-0">
                    <a
                      href="portfolio-detail-one.html"
                      className="text-dark title"
                    >
                      Pen and article
                    </a>
                  </h5>
                  <h6 className="text-muted tag mb-0">Article</h6>
                </div>
              </div>
            </div>
          </div>
          {/*end col*/}
        </div>
        {/*end row*/}
      </div>
    </>
  );
};

export default Categ1;
