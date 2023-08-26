import React from "react";
import { useParams } from "react-router-dom";
import { ProductList } from "../../../enum/ProductList";
const ProductDetails = () => {
  const params = useParams();
  const product_id = params ? params.id : "";
  const product_details = ProductList.filter((item) => item.id == product_id);
  var first = product_details.slice(0, 1).shift();

  return (
    first && (
      <>
        <div className="container mt-100">
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="tns-outer" id="tns1-ow">
                <div id="tns1-mw" className="tns-ovh">
                  <div className="tns-inner" id="tns1-iw">
                    <div
                      className="tiny-single-item  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal"
                      id="tns1"
                      style={{ transform: "translate3d(0%, 0px, 0px)" }}
                    >
                      <div
                        className="tiny-slide tns-item tns-slide-active"
                        id="tns1-item0"
                      >
                        <img
                          src={first.img}
                          className="img-fluid rounded"
                          alt=""
                        />
                      </div>
                      <div
                        className="tiny-slide tns-item"
                        id="tns1-item1"
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <img
                          src="assets/images/shop/product/single-3.jpg"
                          className="img-fluid rounded"
                          alt=""
                        />
                      </div>
                      <div
                        className="tiny-slide tns-item"
                        id="tns1-item2"
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <img
                          src="assets/images/shop/product/single-4.jpg"
                          className="img-fluid rounded"
                          alt=""
                        />
                      </div>
                      <div
                        className="tiny-slide tns-item"
                        id="tns1-item3"
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <img
                          src="assets/images/shop/product/single-5.jpg"
                          className="img-fluid rounded"
                          alt=""
                        />
                      </div>
                      <div
                        className="tiny-slide tns-item"
                        id="tns1-item4"
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <img
                          src="assets/images/shop/product/single-6.jpg"
                          className="img-fluid rounded"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end col*/}
            <div className="col-md-7 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="section-title ms-md-4">
                <h4 className="title">{first.name}</h4>
                <h5 className="text-muted">{first.title}</h5>
                <ul className="list-unstyled text-warning h5 mb-0">
                  <li className="list-inline-item">
                    <i className="mdi mdi-star" />
                  </li>
                  <li className="list-inline-item">
                    <i className="mdi mdi-star" />
                  </li>
                  <li className="list-inline-item">
                    <i className="mdi mdi-star" />
                  </li>
                  <li className="list-inline-item">
                    <i className="mdi mdi-star" />
                  </li>
                  <li className="list-inline-item">
                    <i className="mdi mdi-star" />
                  </li>
                </ul>
                <h5 className="mt-4 py-2">Description :</h5>
                <ul className="list-unstyled text-muted">
                  <li className="mb-1">
                    <span className="text-primary h5 me-2">
                      <i className="uil uil-check-circle align-middle" />
                    </span>{" "}
                    {first.describtion1}
                  </li>
                </ul>
                <ul className="list-unstyled text-muted">
                  <li className="mb-1">
                    <span className="text-primary h5 me-2">
                      <i className="uil uil-check-circle align-middle" />
                    </span>{" "}
                    {first.describtion2}
                  </li>
                </ul>
                <ul className="list-unstyled text-muted">
                  <li className="mb-1">
                    <span className="text-primary h5 me-2">
                      <i className="uil uil-check-circle align-middle" />
                    </span>{" "}
                    {first.describtion3}
                  </li>
                </ul>
                <ul className="list-unstyled text-muted">
                  <li className="mb-1">
                    <span className="text-primary h5 me-2">
                      <i className="uil uil-check-circle align-middle" />
                    </span>{" "}
                    {first.describtion4}
                  </li>
                </ul>
                <ul className="list-unstyled text-muted">
                  <li className="mb-1">
                    <span className="text-primary h5 me-2">
                      <i className="uil uil-check-circle align-middle" />
                    </span>{" "}
                    {first.describtion5}
                  </li>
                </ul>
                <ul className="list-unstyled text-muted">
                  <li className="mb-1">
                    <span className="text-primary h5 me-2">
                      <i className="uil uil-check-circle align-middle" />
                    </span>{" "}
                    {first.describtion6}
                  </li>
                </ul>
                <ul className="list-unstyled text-muted">
                  <li className="mb-1">
                    <span className="text-primary h5 me-2">
                      <i className="uil uil-check-circle align-middle" />
                    </span>{" "}
                    {first.describtion7}
                  </li>
                </ul>
                <ul className="list-unstyled text-muted">
                  <li className="mb-1">
                    <span className="text-primary h5 me-2">
                      <i className="uil uil-check-circle align-middle" />
                    </span>{" "}
                    {first.describtion8}
                  </li>
                </ul>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
      </>
    )
  );
};

export default ProductDetails;
