import React from "react";
import Carousel from "./components/Carousel";
import SponsorSwiper from "./components/SponsorSwiper";
import { FaBeer } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Carousel />

      {/* Loader */}
      {/* <div id="preloader">
      <div id="status">
          <div class="spinner">
              <div class="double-bounce1"></div>
              <div class="double-bounce2"></div>
          </div>
      </div>
  </div> */}
      {/* Loader */}
      {/* Navbar End */}

      {/*end section*/}
      {/* Hero End */}
      {/* FEATURES START */}
      <section className="section bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="features-absolute">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-12">
                    <div className="card features feature-primary feature-clean explore-feature p-4 px-md-3 border-0 rounded-md shadow text-center">
                      <div className="icons text-center mx-auto">
                        <FaBeer />
                      </div>
                      <div className="card-body p-0 content">
                        <h5 className="mt-4">
                          <a
                            href="javascript:void(0)"
                            className="title text-dark"
                          >
                            Best Financial Advice
                          </a>
                        </h5>
                        <p className="text-muted">
                          The most well-known which is said to have originated
                        </p>
                        <a href="javascript:void(0)" className="read-more">
                          Read More{" "}
                          <i className="uil uil-angle-right-b align-middle" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*end col*/}
                  <div className="col-lg-3 col-md-6 col-12 mt-4 mt-md-0 pt-2 pt-md-0">
                    <div className="card features feature-primary feature-clean explore-feature p-4 px-md-3 border-0 rounded-md shadow text-center">
                      <div className="icons text-center mx-auto">
                        <i className="uil uil-clipboard-alt rounded h3 mb-0 mx-auto" />
                      </div>
                      <div className="card-body p-0 content">
                        <h5 className="mt-4">
                          <a
                            href="javascript:void(0)"
                            className="title text-dark"
                          >
                            Authorised Finance Brand
                          </a>
                        </h5>
                        <p className="text-muted">
                          The most well-known which is said to have originated
                        </p>
                        <a href="javascript:void(0)" className="read-more">
                          Read More{" "}
                          <i className="uil uil-angle-right-b align-middle" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*end col*/}
                  <div className="col-lg-3 col-md-6 col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                    <div className="card features feature-primary feature-clean explore-feature p-4 px-md-3 border-0 rounded-md shadow text-center">
                      <div className="icons text-center mx-auto">
                        <i className="uil uil-credit-card-search rounded h3 mb-0 mx-auto" />
                      </div>
                      <div className="card-body p-0 content">
                        <h5 className="mt-4">
                          <a
                            href="javascript:void(0)"
                            className="title text-dark"
                          >
                            Compehensive Advices
                          </a>
                        </h5>
                        <p className="text-muted">
                          The most well-known which is said to have originated
                        </p>
                        <a href="javascript:void(0)" className="read-more">
                          Read More{" "}
                          <i className="uil uil-angle-right-b align-middle" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*end col*/}
                  <div className="col-lg-3 col-md-6 col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                    <div className="card features feature-primary feature-clean explore-feature p-4 px-md-3 border-0 rounded-md shadow text-center">
                      <div className="icons text-center mx-auto">
                        <i className="uil uil-ruler-combined rounded h3 mb-0 mx-auto" />
                      </div>
                      <div className="card-body p-0 content">
                        <h5 className="mt-4">
                          <a
                            href="javascript:void(0)"
                            className="title text-dark"
                          >
                            Best Tax Advantages
                          </a>
                        </h5>
                        <p className="text-muted">
                          The most well-known which is said to have originated
                        </p>
                        <a href="javascript:void(0)" className="read-more">
                          Read More{" "}
                          <i className="uil uil-angle-right-b align-middle" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*end col*/}
                </div>
              </div>
            </div>
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}

        {/*end container*/}
      </section>
      {/*end section*/}
      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <div className="section-title mb-4 pb-2">
                <h4 className="title mb-4">Key Features</h4>
                <p className="text-muted para-desc mx-auto mb-0">
                  Start working with{" "}
                  <span className="text-primary fw-bold">Landrick</span> that
                  can provide everything you need to generate awareness, drive
                  traffic, connect.
                </p>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
          <div className="row">
            <div className="col-lg-4 col-md-6 mt-4 pt-2">
              <div className="d-flex features feature-primary key-feature align-items-center p-3 rounded shadow">
                <div className="icon text-center rounded-circle me-3">
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
                    className="feather feather-monitor fea icon-ex-md"
                  >
                    <rect x={2} y={3} width={20} height={14} rx={2} ry={2} />
                    <line x1={8} y1={21} x2={16} y2={21} />
                    <line x1={12} y1={17} x2={12} y2={21} />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="title mb-0">Fully Responsive</h4>
                </div>
              </div>
            </div>
            {/*end col*/}
            <div className="col-lg-4 col-md-6 mt-4 pt-2">
              <div className="d-flex features feature-primary key-feature align-items-center p-3 rounded shadow">
                <div className="icon text-center rounded-circle me-3">
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
                    className="feather feather-heart fea icon-ex-md"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="title mb-0">Browser Compatibility</h4>
                </div>
              </div>
            </div>
            {/*end col*/}
            <div className="col-lg-4 col-md-6 mt-4 pt-2">
              <div className="d-flex features feature-primary key-feature align-items-center p-3 rounded shadow">
                <div className="icon text-center rounded-circle me-3">
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
                    className="feather feather-eye fea icon-ex-md"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx={12} cy={12} r={3} />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="title mb-0">Retina Ready</h4>
                </div>
              </div>
            </div>
            {/*end col*/}
            <div className="col-lg-4 col-md-6 mt-4 pt-2">
              <div className="d-flex features feature-primary key-feature align-items-center p-3 rounded shadow">
                <div className="icon text-center rounded-circle me-3">
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
                    className="feather feather-bold fea icon-ex-md"
                  >
                    <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
                    <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="title mb-0">Based On Bootstrap 5</h4>
                </div>
              </div>
            </div>
            {/*end col*/}
            <div className="col-lg-4 col-md-6 mt-4 pt-2">
              <div className="d-flex features feature-primary key-feature align-items-center p-3 rounded shadow">
                <div className="icon text-center rounded-circle me-3">
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
                    className="feather feather-feather fea icon-ex-md"
                  >
                    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
                    <line x1={16} y1={8} x2={2} y2={22} />
                    <line x1="17.5" y1={15} x2={9} y2={15} />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="title mb-0">Feather Icons</h4>
                </div>
              </div>
            </div>
            {/*end col*/}
            <div className="col-lg-4 col-md-6 mt-4 pt-2">
              <div className="d-flex features feature-primary key-feature align-items-center p-3 rounded shadow">
                <div className="icon text-center rounded-circle me-3">
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
                    className="feather feather-code fea icon-ex-md"
                  >
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="title mb-0">Built With SASS</h4>
                </div>
              </div>
            </div>
            {/*end col*/}
            <div className="col-lg-4 col-md-6 mt-4 pt-2">
              <div className="d-flex features feature-primary key-feature align-items-center p-3 rounded shadow">
                <div className="icon text-center rounded-circle me-3">
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
                    className="feather feather-user-check fea icon-ex-md"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="8.5" cy={7} r={4} />
                    <polyline points="17 11 19 13 23 9" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="title mb-0">W3c Valid Code</h4>
                </div>
              </div>
            </div>
            {/*end col*/}
            <div className="col-lg-4 col-md-6 mt-4 pt-2">
              <div className="d-flex features feature-primary key-feature align-items-center p-3 rounded shadow">
                <div className="icon text-center rounded-circle me-3">
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
                    className="feather feather-git-merge fea icon-ex-md"
                  >
                    <circle cx={18} cy={18} r={3} />
                    <circle cx={6} cy={6} r={3} />
                    <path d="M6 21V9a9 9 0 0 0 9 9" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="title mb-0">Flaticon Icons</h4>
                </div>
              </div>
            </div>
            {/*end col*/}
            <div className="col-lg-4 col-md-6 mt-4 pt-2">
              <div className="d-flex features feature-primary key-feature align-items-center p-3 rounded shadow">
                <div className="icon text-center rounded-circle me-3">
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
                    className="feather feather-settings fea icon-ex-md"
                  >
                    <circle cx={12} cy={12} r={3} />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="title mb-0">Easy to customize</h4>
                </div>
              </div>
            </div>
            {/*end col*/}
            <div className="col-12 mt-4 pt-2 text-center">
              <a
                onClick={() => navigate("/produits")}
                className="btn btn-primary"
              >
                See More <i className="mdi mdi-arrow-right" />
              </a>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
      {/* Start */}

      {/*end section*/}
      {/* End */}
      <section className="section">
        <div className="container">
          <div className="row mt-lg-4 align-items-center">
            <div className="col-lg-5 col-md-12 text-center text-lg-start">
              <div className="section-title mb-4 mb-lg-0 pb-2 pb-lg-0">
                <h4 className="title mb-4">Our Consulting Charge</h4>
                <p className="text-muted para-desc mx-auto mb-0">
                  Start working with{" "}
                  <span className="text-primary fw-bold">Landrick</span> that
                  can provide everything you need to generate awareness, drive
                  traffic, connect.
                </p>
                <a
                  href="https://1.envato.market/landrick"
                  target="_blank"
                  className="btn btn-primary mt-4"
                >
                  Buy Now{" "}
                  <span className="badge rounded-pill bg-danger ms-2">
                    v4.7.0
                  </span>
                </a>
              </div>
            </div>
            {/*end col*/}
            <div className="col-lg-7 col-md-12">
              <div className="ms-lg-5">
                <div className="row align-items-center">
                  <div className="col-md-6 col-12 mt-4 pt-4 px-md-0">
                    <div className="card pricing pricing-primary starter-plan shadow rounded border-0">
                      <div className="card-body py-5">
                        <h6 className="title name fw-bold text-uppercase mb-4">
                          Starter
                        </h6>
                        <div className="d-flex mb-4">
                          <span className="h4 mb-0 mt-2">$</span>
                          <span className="price h1 mb-0">39</span>
                          <span className="h4 align-self-end mb-1">/mo</span>
                        </div>
                        <ul className="list-unstyled mb-0 ps-0">
                          <li className="h6 text-muted mb-0">
                            <span className="icon h5 me-2">
                              <i className="uil uil-check-circle align-middle" />
                            </span>
                            Full Access
                          </li>
                          <li className="h6 text-muted mb-0">
                            <span className="icon h5 me-2">
                              <i className="uil uil-check-circle align-middle" />
                            </span>
                            Source Files
                          </li>
                          <li className="h6 text-muted mb-0">
                            <span className="icon h5 me-2">
                              <i className="uil uil-check-circle align-middle" />
                            </span>
                            Free Appointments
                          </li>
                          <li className="h6 text-muted mb-0">
                            <span className="icon h5 me-2">
                              <i className="uil uil-check-circle align-middle" />
                            </span>
                            Enhanced Security
                          </li>
                        </ul>
                        <a
                          href="javascript:void(0)"
                          className="btn btn-primary mt-4"
                        >
                          Get Started
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*end col*/}
                  <div className="col-md-6 col-12 mt-4 pt-2 pt-md-4 px-md-0">
                    <div className="card pricing pricing-primary bg-light shadow rounded border-0">
                      <div className="card-body py-5">
                        <h6 className="title name fw-bold text-uppercase mb-4">
                          Professional
                        </h6>
                        <div className="d-flex mb-4">
                          <span className="h4 mb-0 mt-2">$</span>
                          <span className="price h1 mb-0">59</span>
                          <span className="h4 align-self-end mb-1">/mo</span>
                        </div>
                        <ul className="list-unstyled mb-0 ps-0">
                          <li className="h6 text-muted mb-0">
                            <span className="icon h5 me-2">
                              <i className="uil uil-check-circle align-middle" />
                            </span>
                            Full Access
                          </li>
                          <li className="h6 text-muted mb-0">
                            <span className="icon h5 me-2">
                              <i className="uil uil-check-circle align-middle" />
                            </span>
                            Source Files
                          </li>
                          <li className="h6 text-muted mb-0">
                            <span className="icon h5 me-2">
                              <i className="uil uil-check-circle align-middle" />
                            </span>
                            Free Appointments
                          </li>
                          <li className="h6 text-muted mb-0">
                            <span className="icon h5 me-2">
                              <i className="uil uil-check-circle align-middle" />
                            </span>
                            Enhanced Security
                          </li>
                        </ul>
                        <a
                          href="javascript:void(0)"
                          className="btn btn-primary mt-4"
                        >
                          Try it now
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
        <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <div className="section-title mb-4 pb-2">
                <h4 className="title mb-4">Our Clients Said</h4>
                <p className="text-muted para-desc mx-auto mb-0">
                  Start working with{" "}
                  <span className="text-primary fw-bold">Landrick</span> that
                  can provide everything you need to generate awareness, drive
                  traffic, connect.
                </p>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
          <div className="row justify-content-center">
            <div className="col-lg-12 mt-4">
              <div className="tns-outer" id="tns1-ow">
                <div
                  className="tns-liveregion tns-visually-hidden"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  slide <span className="current">4 to 6</span> of 6
                </div>
                <div id="tns1-mw" className="tns-ovh">
                  <div className="tns-inner" id="tns1-iw">
                    <div
                      className="tiny-three-item  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal"
                      id="tns1"
                      style={{ transform: "translate3d(-50%, 0px, 0px)" }}
                    >
                      <div
                        className="tiny-slide tns-item"
                        id="tns1-item0"
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <div className="d-flex client-testi m-2">
                          <img
                            src="assets/images/client/01.jpg"
                            className="avatar avatar-small client-image rounded shadow"
                            alt=""
                          />
                          <div className="card flex-1 content p-3 shadow rounded position-relative">
                            <ul className="list-unstyled mb-0">
                              <li className="list-inline-item">
                                <i className="mdi mdi-star text-warning" />
                              </li>
                              <li className="list-inline-item">
                                <i className="mdi mdi-star text-warning" />
                              </li>
                              <li className="list-inline-item">
                                <i className="mdi mdi-star text-warning" />
                              </li>
                              <li className="list-inline-item">
                                <i className="mdi mdi-star text-warning" />
                              </li>
                              <li className="list-inline-item">
                                <i className="mdi mdi-star text-warning" />
                              </li>
                            </ul>
                            <p className="text-muted mt-2">
                              " It seems that only fragments of the original
                              text remain in the Lorem Ipsum texts used today. "
                            </p>
                            <h6 className="text-primary">
                              - Thomas Israel{" "}
                              <small className="text-muted">C.E.O</small>
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tiny-slide tns-item"
                        id="tns1-item1"
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <div className="d-flex client-testi m-2">
                          <img
                            src="assets/images/client/02.jpg"
                            className="avatar avatar-small client-image rounded shadow"
                            alt=""
                          />
                          <div className="card flex-1 content p-3 shadow rounded position-relative">
                            <ul className="list-unstyled mb-0">
                              <li className="list-inline-item">
                                <i className="mdi mdi-star text-warning" />
                              </li>
                              <li className="list-inline-item">
                                <i className="mdi mdi-star text-warning" />
                              </li>
                              <li className="list-inline-item">
                                <i className="mdi mdi-star text-warning" />
                              </li>
                              <li className="list-inline-item">
                                <i className="mdi mdi-star text-warning" />
                              </li>
                              <li className="list-inline-item">
                                <i className="mdi mdi-star-half text-warning" />
                              </li>
                            </ul>
                            <p className="text-muted mt-2">
                              " One disadvantage of Lorum Ipsum is that in Latin
                              certain letters appear more frequently than
                              others. "
                            </p>
                            <h6 className="text-primary">
                              - Barbara McIntosh{" "}
                              <small className="text-muted">M.D</small>
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tiny-slide tns-item"
                        id="tns1-item2"
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <div className="d-flex client-testi m-2">
                          <img
                            src="assets/images/client/03.jpg"
                            className="avatar avatar-small client-image rounded shadow"
                            alt=""
                          />
                          <div className="card flex-1 content p-3 shadow rounded position-relative">
                            <ul className="list-unstyled mb-0">
                              <li className="list-inline-item">
                                <i className="mdi mdi-star text-warning" />
                              </li>
                              <li className="list-inline-item">
                                <i className="mdi mdi-star text-warning" />
                              </li>
                              <li className="list-inline-item">
                                <i className="mdi mdi-star text-warning" />
                              </li>
                              <li className="list-inline-item">
                                <i className="mdi mdi-star text-warning" />
                              </li>
                              <li className="list-inline-item">
                                <i className="mdi mdi-star text-warning" />
                              </li>
                            </ul>
                            <p className="text-muted mt-2">
                              " The most well-known dummy text is the 'Lorem
                              Ipsum', which is said to have originated in the
                              16th century. "
                            </p>
                            <h6 className="text-primary">
                              - Carl Oliver{" "}
                              <small className="text-muted">P.A</small>
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tiny-slide tns-item tns-slide-active"
                        id="tns1-item3"
                      >
                        <div className="d-flex client-testi m-2">
                          <img
                            src="assets/images/client/04.jpg"
                            className="avatar avatar-small client-image rounded shadow"
                            alt=""
                          />
                          <div className="card flex-1 content p-3 shadow rounded position-relative">
                            <ul className="list-unstyled mb-0">
                              <li className="list-inline-item">
                                <i className="mdi mdi-star text-warning" />
                              </li>
                              <li className="list-inline-item">
                                <i className="mdi mdi-star text-warning" />
                              </li>
                              <li className="list-inline-item">
                                <i className="mdi mdi-star text-warning" />
                              </li>
                              <li className="list-inline-item">
                                <i className="mdi mdi-star text-warning" />
                              </li>
                              <li className="list-inline-item">
                                <i className="mdi mdi-star text-warning" />
                              </li>
                            </ul>
                            <p className="text-muted mt-2">
                              " According to most sources, Lorum Ipsum can be
                              traced back to a text composed by Cicero. "
                            </p>
                            <h6 className="text-primary">
                              - Christa Smith{" "}
                              <small className="text-muted">Manager</small>
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tiny-slide tns-item tns-slide-active"
                        id="tns1-item4"
                      >
                        <div className="d-flex client-testi m-2">
                          <img
                            src="assets/images/client/05.jpg"
                            className="avatar avatar-small client-image rounded shadow"
                            alt=""
                          />
                          <div className="card flex-1 content p-3 shadow rounded position-relative">
                            <ul className="list-unstyled mb-0">
                              <li className="list-inline-item">
                                <i className="mdi mdi-star text-warning" />
                              </li>
                              <li className="list-inline-item">
                                <i className="mdi mdi-star text-warning" />
                              </li>
                              <li className="list-inline-item">
                                <i className="mdi mdi-star text-warning" />
                              </li>
                              <li className="list-inline-item">
                                <i className="mdi mdi-star text-warning" />
                              </li>
                              <li className="list-inline-item">
                                <i className="mdi mdi-star text-warning" />
                              </li>
                            </ul>
                            <p className="text-muted mt-2">
                              " There is now an abundance of readable dummy
                              texts. These are usually used when a text is
                              required. "
                            </p>
                            <h6 className="text-primary">
                              - Dean Tolle{" "}
                              <small className="text-muted">Developer</small>
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tiny-slide tns-item tns-slide-active"
                        id="tns1-item5"
                      >
                        <div className="d-flex client-testi m-2">
                          <img
                            src="assets/images/client/06.jpg"
                            className="avatar avatar-small client-image rounded shadow"
                            alt=""
                          />
                          <div className="card flex-1 content p-3 shadow rounded position-relative">
                            <ul className="list-unstyled mb-0">
                              <li className="list-inline-item">
                                <i className="mdi mdi-star text-warning" />
                              </li>
                              <li className="list-inline-item">
                                <i className="mdi mdi-star text-warning" />
                              </li>
                              <li className="list-inline-item">
                                <i className="mdi mdi-star text-warning" />
                              </li>
                              <li className="list-inline-item">
                                <i className="mdi mdi-star text-warning" />
                              </li>
                              <li className="list-inline-item">
                                <i className="mdi mdi-star text-warning" />
                              </li>
                            </ul>
                            <p className="text-muted mt-2">
                              " Thus, Lorem Ipsum has only limited suitability
                              as a visual filler for German texts. "
                            </p>
                            <h6 className="text-primary">
                              - Jill Webb{" "}
                              <small className="text-muted">Designer</small>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tns-nav" aria-label="Carousel Pagination">
                  <button
                    type="button"
                    data-nav={0}
                    aria-controls="tns1"
                    style={{}}
                    aria-label="Carousel Page 1"
                    className=""
                    tabIndex={-1}
                  />
                  <button
                    type="button"
                    data-nav={1}
                    aria-controls="tns1"
                    style={{}}
                    aria-label="Carousel Page 2 (Current Slide)"
                    className="tns-nav-active"
                  />
                  <button
                    type="button"
                    data-nav={2}
                    tabIndex={-1}
                    aria-controls="tns1"
                    style={{ display: "none" }}
                    aria-label="Carousel Page 3"
                  />
                  <button
                    type="button"
                    data-nav={3}
                    tabIndex={-1}
                    aria-controls="tns1"
                    style={{ display: "none" }}
                    aria-label="Carousel Page 4"
                  />
                  <button
                    type="button"
                    data-nav={4}
                    tabIndex={-1}
                    aria-controls="tns1"
                    style={{ display: "none" }}
                    aria-label="Carousel Page 5"
                  />
                  <button
                    type="button"
                    data-nav={5}
                    tabIndex={-1}
                    aria-controls="tns1"
                    style={{ display: "none" }}
                    aria-label="Carousel Page 6"
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
          <div className="row align-items-center mb-4 pb-2">
            <div className="col-lg-6">
              <div className="section-title text-center text-lg-start">
                <h6 className="text-primary">Blog</h6>
                <h4 className="title mb-4 mb-lg-0">
                  Reads Our Latest <br /> News &amp; Blog
                </h4>
              </div>
            </div>
            {/*end col*/}
            <div className="col-lg-6">
              <div className="section-title text-center text-lg-start">
                <p className="text-muted mb-0 mx-auto para-desc">
                  Start working with{" "}
                  <span className="text-primary fw-bold">Landrick</span> that
                  can provide everything you need to generate awareness, drive
                  traffic, connect.
                </p>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
          <div className="row">
            <div className="col-lg-4 col-md-6 mt-4 pt-2">
              <div className="card blog blog-primary rounded border-0 shadow">
                <div className="position-relative">
                  <img
                    src="assets/images/blog/01.jpg"
                    className="card-img-top rounded-top"
                    alt="..."
                  />
                  <div className="overlay rounded-top" />
                </div>
                <div className="card-body content">
                  <h5>
                    <a
                      href="javascript:void(0)"
                      className="card-title title text-dark"
                    >
                      Design your apps in your own way
                    </a>
                  </h5>
                  <div className="post-meta d-flex justify-content-between mt-3">
                    <ul className="list-unstyled mb-0">
                      <li className="list-inline-item me-2 mb-0">
                        <a
                          href="javascript:void(0)"
                          className="text-muted like"
                        >
                          <i className="uil uil-heart me-1" />
                          33
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="javascript:void(0)"
                          className="text-muted comments"
                        >
                          <i className="uil uil-comment me-1" />
                          08
                        </a>
                      </li>
                    </ul>
                    <a href="blog-detail.html" className="text-muted readmore">
                      Read More{" "}
                      <i className="uil uil-angle-right-b align-middle" />
                    </a>
                  </div>
                </div>
                <div className="author">
                  <small className="user d-block">
                    <i className="uil uil-user" /> Calvin Carlo
                  </small>
                  <small className="date">
                    <i className="uil uil-calendar-alt" /> 25th June 2021
                  </small>
                </div>
              </div>
            </div>
            {/*end col*/}
            <div className="col-lg-4 col-md-6 mt-4 pt-2">
              <div className="card blog blog-primary rounded border-0 shadow">
                <div className="position-relative">
                  <img
                    src="assets/images/blog/02.jpg"
                    className="card-img-top rounded-top"
                    alt="..."
                  />
                  <div className="overlay rounded-top" />
                </div>
                <div className="card-body content">
                  <h5>
                    <a
                      href="javascript:void(0)"
                      className="card-title title text-dark"
                    >
                      How apps is changing the IT world
                    </a>
                  </h5>
                  <div className="post-meta d-flex justify-content-between mt-3">
                    <ul className="list-unstyled mb-0">
                      <li className="list-inline-item me-2 mb-0">
                        <a
                          href="javascript:void(0)"
                          className="text-muted like"
                        >
                          <i className="uil uil-heart me-1" />
                          33
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="javascript:void(0)"
                          className="text-muted comments"
                        >
                          <i className="uil uil-comment me-1" />
                          08
                        </a>
                      </li>
                    </ul>
                    <a href="blog-detail.html" className="text-muted readmore">
                      Read More{" "}
                      <i className="uil uil-angle-right-b align-middle" />
                    </a>
                  </div>
                </div>
                <div className="author">
                  <small className="user d-block">
                    <i className="uil uil-user" /> Calvin Carlo
                  </small>
                  <small className="date">
                    <i className="uil uil-calendar-alt" /> 25th June 2021
                  </small>
                </div>
              </div>
            </div>
            {/*end col*/}
            <div className="col-lg-4 col-md-6 mt-4 pt-2">
              <div className="card blog blog-primary rounded border-0 shadow">
                <div className="position-relative">
                  <img
                    src="assets/images/blog/03.jpg"
                    className="card-img-top rounded-top"
                    alt="..."
                  />
                  <div className="overlay rounded-top" />
                </div>
                <div className="card-body content">
                  <h5>
                    <a
                      href="javascript:void(0)"
                      className="card-title title text-dark"
                    >
                      Smartest Applications for Business
                    </a>
                  </h5>
                  <div className="post-meta d-flex justify-content-between mt-3">
                    <ul className="list-unstyled mb-0">
                      <li className="list-inline-item me-2 mb-0">
                        <a
                          href="javascript:void(0)"
                          className="text-muted like"
                        >
                          <i className="uil uil-heart me-1" />
                          33
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="javascript:void(0)"
                          className="text-muted comments"
                        >
                          <i className="uil uil-comment me-1" />
                          08
                        </a>
                      </li>
                    </ul>
                    <a href="blog-detail.html" className="text-muted readmore">
                      Read More{" "}
                      <i className="uil uil-angle-right-b align-middle" />
                    </a>
                  </div>
                </div>
                <div className="author">
                  <small className="user d-block">
                    <i className="uil uil-user" /> Calvin Carlo
                  </small>
                  <small className="date">
                    <i className="uil uil-calendar-alt" /> 25th June 2021
                  </small>
                </div>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
      </section>
      <SponsorSwiper />
      {/*end section*/}
      {/* Footer Start */}
      {/* Footer Start */}
    </>
  );
};

export default Home;
