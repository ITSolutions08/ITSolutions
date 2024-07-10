import Banner from "@/components/Banner";
import Brand from "@/components/Brand";
import Testimonial from "@/components/Testimonial";
import Counter from "@/components/common/Counter";
import { Title, TitleSm } from "@/components/common/Title";

const Agency = () => {
  return (
    <>
      <section className="agency bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="WELCOME" /> <br />
            <br />
            <Title
              title="Your Go-To Expert for All Computer and Printer Repairs"
              className="title-bg"
            />
          </div>

          <div className="content flex1">
            <div className="left w-60 py">
              <TitleSm title="Providing Reliable Repair Services Since 2010" />
              <p className="desc-p">
                With over a decade of experience, I specialize in desktop and
                laptop repair, printer refilling and repair, and CCTV
                installation and maintenance. My goal is to provide reliable,
                efficient, and high-quality services to ensure your devices run
                smoothly.
              </p>
              <div className="grid-3">
                <div className="box">
                  <Counter end={10} duration={2} />
                  <h3>Years of Experience</h3>
                </div>
                <div className="box">
                  <Counter end={500} duration={2} />
                  <h3>Devices Repaired</h3>
                </div>
                <div className="box">
                  <Counter end={5} duration={2} />
                  <h3>Service Areas</h3>
                </div>
              </div>
            </div>

            <div className="right w-40 ml">
              <img
                src="/images/s1.jpg"
                alt="Img"
                className="round"
                width="100%"
                height="100%"
              />
            </div>
          </div>

          <div className="content flex">
            <div className="left w-40 py">
              <img
                src="/images/pic.jpeg"
                alt="Img"
                className="round"
                width="100%"
                height="100%"
              />
            </div>
            <div className="right w-60 ml">
              <TitleSm title="My Mission" />
              <br />
              <p className="misson-p">
                Hello, I'm Pranay Sawatkar, the proud owner of our service
                agency. My mission is deeply rooted in delivering unparalleled
                repair and maintenance services for desktops, laptops, printers,
                and CCTV systems. I am committed to providing you, our valued
                customers, with reliable solutions that not only meet but exceed
                your technological needs. Your satisfaction is my priority, and
                I strive to ensure that every interaction with our agency
                reflects our dedication to efficiency, effectiveness, and
                excellence.
                <br />
                <br />
                Thank you for trusting us with your technology needs. We look
                forward to serving you with the highest level of care and
                expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <Brand /> */}
      <Testimonial />
      {/* <Banner /> */}
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Agency;
