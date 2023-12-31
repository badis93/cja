import React from "react";
import Headerswiper from "./Headerswiper";

const Header = () => {
  return (
    <>
      <section className="bg-half-170 bg-light d-table w-100">
        <Headerswiper />
        <div className="bg-overlay bg-overlay-white" />
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-lg-12 text-center">
              <div className="pages-heading">
                <h4 className="title mb-0">Produits</h4>
              </div>
            </div>{" "}
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>{" "}
        {/*end container*/}
      </section>
    </>
  );
};

export default Header;
