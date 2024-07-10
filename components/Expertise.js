import React from "react";
import { Title } from "./common/Title";
import { expertise } from "@/assets/data/dummydata";
import { Card } from "./common/Card";

const Expertise = () => {
  return (
    <>
      <section className="expertise">
        <div className="container">
          <div className="heading-title">
            <Title title="Our Expertise" />
            <p>
              Specializing in desktop, laptop, printer repair, and CCTV
              installation. Trust in expert service with a commitment to
              customer satisfaction.
            </p>
          </div>
          <div className="hero-content grid-4">
            {expertise.map((item) => (
              <Card data={item} key={item.id} caption="learn more" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Expertise;
