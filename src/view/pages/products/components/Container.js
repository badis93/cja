import React, { useState } from "react";

import { ProductList } from "../../../../enum/ProductList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
                      className="card shop-list border-0 shadow position-relative overflow-hidden cursor-pointer mt-10"
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
                          className="text-dark product-name h6 d-flex justify-content-center"
                        >
                          {element.name}
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
                      className="card shop-list border-0 shadow position-relative overflow-hidden cursor-pointer mt-10"
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
                          className="text-dark product-name h6 d-flex justify-content-center"
                        >
                          {element.name}
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
            {activeClassId === 3 &&
              ProductList.filter((item) => item.type == 2).map((element) => {
                return (
                  <Col sm={6} md={3}>
                    <div
                      className="card shop-list border-0 shadow position-relative overflow-hidden cursor-pointer mt-10"
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
                          className="text-dark product-name h6 d-flex justify-content-center"
                        >
                          {element.name}
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
            {activeClassId === 4 &&
              ProductList.filter((item) => item.type == 3).map((element) => {
                return (
                  <Col sm={6} md={3}>
                    <div
                      className="card shop-list border-0 shadow position-relative overflow-hidden cursor-pointer mt-10"
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
                          className="text-dark product-name h6 d-flex justify-content-center"
                        >
                          {element.name}
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
            {activeClassId === 5 &&
              ProductList.filter((item) => item.type == 4).map((element) => {
                return (
                  <Col sm={6} md={3}>
                    <div
                      className="card shop-list border-0 shadow position-relative overflow-hidden cursor-pointer mt-10"
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
                          className="text-dark product-name h6 d-flex justify-content-center"
                        >
                          {element.name}
                        </a>
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
