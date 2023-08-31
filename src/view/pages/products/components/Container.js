import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { ProductList } from "../../../../enum/ProductList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap-icons/font/bootstrap-icons.css";

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
      <div className="container mt-100 mt-60">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <div className="section-title">
              <h4 className="title mb-4">Nous Produits</h4>
              <p className="text-muted para-desc mx-auto">
                Découvrez notre sélection exquise de produits soigneusement
                choisis pour vous. De l'élégance intemporelle à l'innovation
                moderne, explorez notre gamme qui incarne la qualité et le
                style.
              </p>
            </div>
          </div>
          {/*end col*/}
        </div>
        {/*end row*/}
      </div>

      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <img
              src={require("../../../../img/tpr.png")}
              height="70px"
              className="center"
              style={{ marginLeft: "15%", marginRight: "5%" }}
            />
            Tunisie Profilés Aluminium
          </Accordion.Header>
          <Accordion.Body>
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
                    ProductList.filter((item) => item.productType == 1).map(
                      (element) => {
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
                                  onClick={() => goTo(element.id)}
                                  className="text-dark product-name h6 d-flex justify-content-center"
                                >
                                  {element.name}
                                </a>
                              </div>
                            </div>
                          </Col>
                        );
                      }
                    )}
                </Row>
              </Container>
              <Container>
                <Row className="justify-content-md-center">
                  {activeClassId === 2 &&
                    ProductList.filter((item) => item.type == 1)
                      .filter((item) => item.productType == 1)
                      .map((element) => {
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
                                  onClick={() => goTo(element.id)}
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
                    ProductList.filter((item) => item.type == 2)
                      .filter((item) => item.productType == 1)
                      .map((element) => {
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
                                  onClick={() => goTo(element.id)}
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
                    ProductList.filter((item) => item.type == 3)
                      .filter((item) => item.productType == 1)
                      .map((element) => {
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
                                  onClick={() => goTo(element.id)}
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
                    ProductList.filter((item) => item.type == 4)
                      .filter((item) => item.productType == 1)
                      .map((element) => {
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
                                  onClick={() => goTo(element.id)}
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
            </section>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <img
              src={require("../../../../img/lavaal.png")}
              height="40px"
              className="center"
              style={{ marginLeft: "15%", marginRight: "5%" }}
            />
            Lavaal - Piéces{" "}
          </Accordion.Header>
          <Accordion.Body>
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
                    ProductList.filter((item) => item.productType == 3).map(
                      (element) => {
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
                                  onClick={() => goTo(element.id)}
                                  className="text-dark product-name h6 d-flex justify-content-center"
                                >
                                  {element.name}
                                </a>
                              </div>
                            </div>
                          </Col>
                        );
                      }
                    )}
                </Row>
              </Container>
              <Container>
                <Row className="justify-content-md-center">
                  {activeClassId === 2 &&
                    ProductList.filter((item) => item.type == 1)
                      .filter((item) => item.productType == 3)
                      .map((element) => {
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
                                  onClick={() => goTo(element.id)}
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
                    ProductList.filter((item) => item.type == 2)
                      .filter((item) => item.productType == 3)
                      .map((element) => {
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
                                  onClick={() => goTo(element.id)}
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
                    ProductList.filter((item) => item.type == 3)
                      .filter((item) => item.productType == 3)
                      .map((element) => {
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
                                  onClick={() => goTo(element.id)}
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
                    ProductList.filter((item) => item.type == 4)
                      .filter((item) => item.productType == 3)
                      .map((element) => {
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
                                  onClick={() => goTo(element.id)}
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
            </section>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <img
              src={require("../../../../img/somfy.png")}
              height="70px"
              className="center"
              style={{ marginLeft: "15%", marginRight: "5%" }}
            />
            Somfy - Moteurs
          </Accordion.Header>
          <Accordion.Body>
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
                    ProductList.filter((item) => item.productType == 2).map(
                      (element) => {
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
                                  onClick={() => goTo(element.id)}
                                  className="text-dark product-name h6 d-flex justify-content-center"
                                >
                                  {element.name}
                                </a>
                              </div>
                            </div>
                          </Col>
                        );
                      }
                    )}
                </Row>
              </Container>
              <Container>
                <Row className="justify-content-md-center">
                  {activeClassId === 2 &&
                    ProductList.filter((item) => item.type == 1)
                      .filter((item) => item.productType == 2)
                      .map((element) => {
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
                                  onClick={() => goTo(element.id)}
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
                    ProductList.filter((item) => item.type == 2)
                      .filter((item) => item.productType == 2)
                      .map((element) => {
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
                                  onClick={() => goTo(element.id)}
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
                    ProductList.filter((item) => item.type == 3)
                      .filter((item) => item.productType == 2)
                      .map((element) => {
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
                                  onClick={() => goTo(element.id)}
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
                    ProductList.filter((item) => item.type == 4)
                      .filter((item) => item.productType == 2)
                      .map((element) => {
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
                                  onClick={() => goTo(element.id)}
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
            </section>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default Containers;
