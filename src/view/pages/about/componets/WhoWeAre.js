import React from "react";

const WhoWeAre = () => {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="row align-items-center" id="counter">
            <div className="col-md-6">
           
            </div>

            {/*end col*/}
            <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div className="ms-lg-4">
                <div className="d-flex mb-4">
                  <span className="text-primary h1 mb-0">
                    <span
                      className="counter-value display-1 fw-bold"
                      data-target={15}
                    >
                      15
                    </span>
                    +
                  </span>
                  <span className="h6 align-self-end ms-2">
                    Years <br /> Experience
                  </span>
                </div>
                <div className="section-title">
                  <h4 className="title mb-4">Who we are ?</h4>
                  <p className="text-muted">
                    Start working with{" "}
                    <span className="text-primary fw-bold">Landrick</span> that
                    can provide everything you need to generate awareness, drive
                    traffic, connect. Dummy text is text that is used in the
                    publishing industry or by web designers to occupy the space
                    which will later be filled with 'real' content. This is
                    required when, for example, the final text is not yet
                    available. Dummy texts have been in use by typesetters since
                    the 16th century.
                  </p>
                  <a href="javascript:void(0)" className="btn btn-primary mt-3">
                    Contact us
                  </a>
                </div>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
        <div className="container mt-4">
          <div className="row justify-content-center">
            <div className="col-lg-2 col-md-2 col-6 text-center pt-4">
              <img
                src={require("../../../../img/1.jpg")}
                className="avatar avatar-ex-sm"
                alt=""
              />
            </div>
            {/*end col*/}
            <div className="col-lg-2 col-md-2 col-6 text-center pt-4">
              <img
                src={require("../../../../img/1.jpg")}
                className="avatar avatar-ex-sm"
                alt=""
              />
            </div>
            {/*end col*/}
            <div className="col-lg-2 col-md-2 col-6 text-center pt-4">
              <img
                src={require("../../../../img/1.jpg")}
                className="avatar avatar-ex-sm"
                alt=""
              />
            </div>
            {/*end col*/}
            <div className="col-lg-2 col-md-2 col-6 text-center pt-4">
              <img
                src={require("../../../../img/2.jpg")}
                className="avatar avatar-ex-sm"
                alt=""
              />
            </div>
            {/*end col*/}
            <div className="col-lg-2 col-md-2 col-6 text-center pt-4">
              <img
                src={require("../../../../img/3.jpg")}
                className="avatar avatar-ex-sm"
                alt=""
              />
            </div>
            {/*end col*/}
            <div className="col-lg-2 col-md-2 col-6 text-center pt-4">
              <img
                src={require("../../../../img/1.jpg")}
                className="avatar avatar-ex-sm"
                alt=""
              />
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

export default WhoWeAre;
