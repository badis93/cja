import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Gridtest = () => {
  return (
    <>
      <br />
      <Container>
        <Row className="justify-content-md-center">
          <Col sm={6} md={3}>
            <div className="card border-0 work-container work-primary work-grid position-relative d-block overflow-hidden rounded">
              <div className="card-body p-0">
                <a
                  href="assets/images/work/20.jpg"
                  className="lightbox d-inline-block tobii-zoom"
                  title=""
                >
                  <img
                    src={require("../img/SÉRIE TW60 CONFORT.png")}
                    width={250}
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
          </Col>
          <Col sm={6} md={3}>
            <div className="card border-0 work-container work-primary work-grid position-relative d-block overflow-hidden rounded">
              <div className="card-body p-0">
                <a
                  href="assets/images/work/20.jpg"
                  className="lightbox d-inline-block tobii-zoom"
                  title=""
                >
                  <img
                    src={require("../img/SÉRIE TW60 CONFORT.png")}
                    width={250}
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
          </Col>
          <Col sm={6} md={3}>
            <div className="card border-0 work-container work-primary work-grid position-relative d-block overflow-hidden rounded">
              <div className="card-body p-0">
                <a
                  href="assets/images/work/20.jpg"
                  className="lightbox d-inline-block tobii-zoom"
                  title=""
                >
                  <img
                    src={require("../img/SÉRIE TW60 CONFORT.png")}
                    width={250}
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
          </Col>
          <Col sm={6} md={3}>
            <div className="card border-0 work-container work-primary work-grid position-relative d-block overflow-hidden rounded">
              <div className="card-body p-0">
                <a
                  href="assets/images/work/20.jpg"
                  className="lightbox d-inline-block tobii-zoom"
                  title=""
                >
                  <img
                    src={require("../img/SÉRIE TW60 CONFORT.png")}
                    width={250}
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
          </Col>
        </Row>
        <Row>
          <Col>1 of 4</Col>
          <Col>2 of 4</Col>
          <Col>3 of 4</Col>
          <Col>4 of 4</Col>
        </Row>
      </Container>
    </>
  );
};

export default Gridtest;
