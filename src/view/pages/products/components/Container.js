import React, { useState } from "react";

import { ProductList } from "../../../../enum/ProductList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Categ4 from "./Categ4";
import Gridtest from "./Gridtest";
import { useNavigate } from "react-router-dom";
const Containers = () => {
  const navigate = useNavigate();
  const [activeClassId, setActiveClassId] = useState(1);
  const portf_list = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "Battante",
    },
    {
      id: 3,
      name: "Facades Rideaux",
    },
    {
      id: 4,
      name: "Coulissante",
    },
    {
      id: 5,
      name: "Autres Produits",
    },
  ];
  const handleClick = (id, name) => {
    setActiveClassId(id);
  };
  const goTo = (id) => {
    navigate("/produits/" + id);
  };
  return (
    <>
      <section className="section">
        <div className="container mb-5">
          <div className="row justify-content-center">
            <div className="col-12 filters-group-wrap">
              <div className="filters-group">
                <ul className="container-filter list-inline mb-0 filter-options text-center">
                  {portf_list.map((item) => (
                    <li
                      onClick={() => handleClick(item.id, item.name)}
                      className={
                        activeClassId === item.id
                          ? "list-inline-item categories-name border text-dark rounded active"
                          : "list-inline-item categories-name border text-dark rounded"
                      }
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}

        <Container>
          <Row className="justify-content-md-center">
            {activeClassId === 1 &&
              ProductList.map((element) => {
                return (
                  <Col sm={6} md={3}>
                    <div
                      className="card shop-list border-0 shadow position-relative overflow-hidden cursor-pointer"
                      onClick={() => goTo(element.id)}
                    >
                      <div className="shop-image position-relative overflow-hidden shadow d-flex justify-content-center">
                        <img
                          src={element.img}
                          className="img-fluid h-300px"
                          alt=""
                        />
                      </div>
                      <div className="card-body content p-4">
                        <a
                          href="property-detail.html"
                          className="text-dark product-name h6"
                        >
                          10765 Hillshire Ave, Baton Rouge, LA 70810, USA
                        </a>
                      </div>
                    </div>
                  </Col>
                );
              })}
          </Row>
        </Container>
        <Container>
          <Row className="justify-content-md-center">
            {activeClassId === 2 &&
              ProductList.filter((item) => item.type == 1).map((element) => {
                return (
                  <Col sm={6} md={3}>
                    <div
                      className="card border-0 work-container work-primary work-grid position-relative d-block overflow-hidden rounded"
                      onClick={() => goTo(element.id)}
                    >
                      <div className="card-body p-0">
                        <a
                          href="assets/images/work/20.jpg"
                          className="lightbox d-inline-block tobii-zoom"
                          title=""
                        >
                          <img
                            src={element.img}
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
                );
              })}
          </Row>
        </Container>
        <Container>
          <Row className="justify-content-md-center">
            {activeClassId === 3 &&
              ProductList.filter((item) => item.type == 2).map((element) => {
                return (
                  <Col sm={6} md={3}>
                    <div
                      className="card border-0 work-container work-primary work-grid position-relative d-block overflow-hidden rounded"
                      onClick={() => goTo(element.id)}
                    >
                      <div className="card-body p-0">
                        <a
                          href="assets/images/work/20.jpg"
                          className="lightbox d-inline-block tobii-zoom"
                          title=""
                        >
                          <img
                            src={element.img}
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
                );
              })}
          </Row>
        </Container>
        <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <div className="section-title">
                <h4 className="title mb-4">Let's talk about your portfolio</h4>
                <p className="text-muted para-desc mx-auto">
                  Start working with{" "}
                  <span className="text-primary fw-bold">Landrick</span> that
                  can provide everything you need to generate awareness, drive
                  traffic, connect.
                </p>
                <div className="mt-4 pt-2">
                  <a href="javascript:void(0)" className="btn btn-primary">
                    Get Started Now
                  </a>
                </div>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
      </section>
    </>
  );
};

export default Containers;
