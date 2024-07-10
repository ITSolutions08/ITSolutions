import { home } from "@/assets/data/dummydata";
import Banner from "@/components/Banner";
import Expertise from "@/components/Expertise";
import ShowCase from "@/components/ShowCase";
import Testimonial from "@/components/Testimonial";
import { Title, TitleLogo, TitleSm } from "@/components/common/Title";
import { BlogCard, Brand } from "@/components/router";
import React from "react";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <TitleLogo title="Solutions" caption="IT" className="logobg" />
          <h1 className="hero-title">YOUR SATISFACTION</h1>
          <h1 className="hero-title"> IS OUR PRIORITY</h1>

          <div className="sub-heading">
            <TitleSm title="REPAIRS" /> <span>.</span>
            <TitleSm title="SALES" /> <span>.</span>
            <TitleSm title="SERVICES" />
          </div>
        </div>
      </section>
      <section className="hero-sec">
        <div className="container">
          <div className="heading-title">
            <Title title="Expert Computer Repair Services You Can Trust" />
            <p>
              Welcome to your one-stop solution for all your computer and
              printer repair needs. Whether it's a desktop, laptop, printer
              refilling, or CCTV installation and repair, I am here to help.
              With over 10 years of hands-on experience, I provide reliable and
              efficient services to ensure your devices are running smoothly.
              Customer satisfaction is my top priority, and I strive to deliver
              exceptional service every time.
            </p>
          </div>
          <div className="hero-content grid-4">
            {home.map((item, i) => (
              <div className="box" key={i}>
                <span className="green">{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Expertise />
      {/* <Banner /> */}
      <Testimonial />
      <ShowCase />
      {/* <Brand /> */}

      {/* <div className="text-center">
        <Title title="Latest news & articles" />
      </div>
      <BlogCard /> */}
    </>
  );
};

export default Hero;
