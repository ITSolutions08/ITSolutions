import React from "react";
import { Title, TitleLogo } from "./common/Title";

const Banner = () => {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div>
            <Title title="Professional Service for Your Tech Needs" /> <br />
            <TitleLogo title="Reliable Desktop, Laptop, Printer, and CCTV Solutions!" />
          </div>
          <div>
            <button className="button-primary">Request a Service</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
