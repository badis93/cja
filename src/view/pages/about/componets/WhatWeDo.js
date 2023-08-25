import React from "react";

const WhatWeDo = () => {
  return (
    <>
      <div className="container mt-100 mt-60">
        <div className="row align-items-end mb-4 pb-4">
          <div className="col-md-8">
            <div className="section-title text-center text-md-start">
              <h6 className="text-primary">Services</h6>
              <h4 className="title mb-4">What we do ?</h4>
              <p className="text-muted mb-0 para-desc">
                Start working with{" "}
                <span className="text-primary fw-bold">Landrick</span> that can
                provide everything you need to generate awareness, drive
                traffic, connect.
              </p>
            </div>
          </div>
          {/*end col*/}
          <div className="col-md-4 mt-4 mt-sm-0">
            <div className="text-center text-md-end">
              <a href="javascript:void(0)" className="text-primary h6">
                See More <i className="uil uil-angle-right-b align-middle" />
              </a>
            </div>
          </div>
          {/*end col*/}
        </div>
        {/*end row*/}
        <div className="row">
          <div className="col-md-4 mt-4 pt-2">
            <ul
              className="nav nav-pills nav-justified flex-column rounded shadow p-3 mb-0 sticky-bar"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link rounded"
                  id="webdeveloping"
                  data-bs-toggle="pill"
                  href="#developing"
                  role="tab"
                  aria-controls="developing"
                  aria-selected="false"
                  tabIndex={-1}
                >
                  <div className="text-center py-1">
                    <h6 className="mb-0">Web Developing</h6>
                  </div>
                </a>
                {/*end nav link*/}
              </li>
              {/*end nav item*/}
              <li className="nav-item mt-2" role="presentation">
                <a
                  className="nav-link rounded"
                  id="database"
                  data-bs-toggle="pill"
                  href="#data-analise"
                  role="tab"
                  aria-controls="data-analise"
                  aria-selected="false"
                  tabIndex={-1}
                >
                  <div className="text-center py-1">
                    <h6 className="mb-0">Database Analysis</h6>
                  </div>
                </a>
                {/*end nav link*/}
              </li>
              {/*end nav item*/}
              <li className="nav-item mt-2" role="presentation">
                <a
                  className="nav-link rounded"
                  id="server"
                  data-bs-toggle="pill"
                  href="#security"
                  role="tab"
                  aria-controls="security"
                  aria-selected="false"
                  tabIndex={-1}
                >
                  <div className="text-center py-1">
                    <h6 className="mb-0">Server Security</h6>
                  </div>
                </a>
                {/*end nav link*/}
              </li>
              {/*end nav item*/}
              <li className="nav-item mt-2" role="presentation">
                <a
                  className="nav-link rounded active"
                  id="webdesigning"
                  data-bs-toggle="pill"
                  href="#designing"
                  role="tab"
                  aria-controls="designing"
                  aria-selected="true"
                >
                  <div className="text-center py-1">
                    <h6 className="mb-0">Web Designing</h6>
                  </div>
                </a>
                {/*end nav link*/}
              </li>
              {/*end nav item*/}
            </ul>
            {/*end nav pills*/}
          </div>
          {/*end col*/}
          <div className="col-md-8 col-12 mt-4 pt-2">
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade p-4 rounded shadow"
                id="developing"
                role="tabpanel"
                aria-labelledby="webdeveloping"
              >
                <img
                  src="assets/images/work/7.jpg"
                  className="img-fluid rounded shadow"
                  alt=""
                />
                <div className="mt-4">
                  <p className="text-muted">
                    This is required when, for example, the final text is not
                    yet available. Dummy text is also known as 'fill text'. It
                    is said that song composers of the past used dummy texts as
                    lyrics.
                  </p>
                  <a href="javascript:void(0)" className="text-primary">
                    See More{" "}
                    <i className="uil uil-angle-right-b align-middle" />
                  </a>
                </div>
              </div>
              {/*end teb pane*/}
              <div
                className="tab-pane fade p-4 rounded shadow"
                id="data-analise"
                role="tabpanel"
                aria-labelledby="database"
              >
                <img
                  src="assets/images/work/8.jpg"
                  className="img-fluid rounded shadow"
                  alt=""
                />
                <div className="mt-4">
                  <p className="text-muted">
                    This is required when, for example, the final text is not
                    yet available. Dummy text is also known as 'fill text'. It
                    is said that song composers of the past used dummy texts as
                    lyrics.
                  </p>
                  <a href="javascript:void(0)" className="text-primary">
                    See More{" "}
                    <i className="uil uil-angle-right-b align-middle" />
                  </a>
                </div>
              </div>
              {/*end teb pane*/}
              <div
                className="tab-pane fade p-4 rounded shadow"
                id="security"
                role="tabpanel"
                aria-labelledby="server"
              >
                <img
                  src="assets/images/work/9.jpg"
                  className="img-fluid rounded shadow"
                  alt=""
                />
                <div className="mt-4">
                  <p className="text-muted">
                    This is required when, for example, the final text is not
                    yet available. Dummy text is also known as 'fill text'. It
                    is said that song composers of the past used dummy texts as
                    lyrics.
                  </p>
                  <a href="javascript:void(0)" className="text-primary">
                    See More{" "}
                    <i className="uil uil-angle-right-b align-middle" />
                  </a>
                </div>
              </div>
              {/*end teb pane*/}
              <div
                className="tab-pane fade p-4 rounded shadow active show"
                id="designing"
                role="tabpanel"
                aria-labelledby="webdesigning"
              >
                <img
                  src="assets/images/work/12.jpg"
                  className="img-fluid rounded shadow"
                  alt=""
                />
                <div className="mt-4">
                  <p className="text-muted">
                    This is required when, for example, the final text is not
                    yet available. Dummy text is also known as 'fill text'. It
                    is said that song composers of the past used dummy texts as
                    lyrics.
                  </p>
                  <a href="javascript:void(0)" className="text-primary">
                    See More{" "}
                    <i className="uil uil-angle-right-b align-middle" />
                  </a>
                </div>
              </div>
              {/*end teb pane*/}
            </div>
            {/*end tab content*/}
          </div>
          {/*end col*/}
        </div>
        {/*end row*/}
      </div>
    </>
  );
};

export default WhatWeDo;
