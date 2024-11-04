import "animate.css";
const AboutUs = () => {
  return (
    <div>
      <div className="bg-[#9538E2] w-full p-4 text-center text-white  rounded-xl shadow-inner">
        <h1 className="text-5xl">About us</h1>
        <p>
          At GadgetHive, we’re passionate about bringing the latest technology
          and innovative gadgets directly to your fingertips. Founded with a
          love for tech and a commitment to quality, our team is dedicated to
          curating a collection of devices and accessories that enhance modern
          lifestyles. From the latest smart home devices to cutting-edge
          personal tech, our goal is to be your trusted source for all things
          gadget
        </p>
      </div>

      <section>
        <div className="flex items-center my-5 w-full  border-dashed border-2 border-cyan-600-600 rounded-2xl bg-blue-950 p-5">
          <img src="https://i.ibb.co/V2DkL58/mission.jpg" alt="" />
          <div className="text-center px-5">
            <h1 className="animate__animated animate__pulse animate__delay-2s animate__infinite font-bold text-5xl mb-5 border w-96 bg-purple-500 rounded-xl p-2 text-purple-200 text-center">
              Our Mission
            </h1>
            <p className="text-center  text-white">
              Our mission is to empower individuals through technology. We
              believe that access to innovative, <br /> user-friendly, and
              impactful gadgets can transform lives. GadgetHive is dedicated to
              bridging <br />
              the gap between the tech-savvy and everyday users by offering
              reliable, high-quality products <br /> that make a difference.
              Through a seamless shopping experience and exceptional customer{" "}
              <br /> service, we aim to inspire people to embrace the future of
              tech.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="flex items-center my-5 w-full  border-dashed border-2 border-cyan-600-600 rounded-lg bg-blue-900 p-5 ">
        <div className="text-center px-5">
            <h1 className="animate__animated animate__pulse animate__delay-2s animate__infinite font-bold text-5xl mb-5 border w-96 bg-blue-800 rounded-xl p-2 text-purple-200 text-center mx-auto">
              Our Vision
            </h1>
            <p className="text-center  text-white ">
              We envision a world where technology is an enabler for everyone,
              simplifying lives and fostering <br /> connectivity across cultures and 
              communities. At GadgetHive, we see ourselves as leaders in this <br />
              journey, bringing the future of tech to today consumers. Our 
              commitment is to remain at the forefront <br /> of innovation,
              continuously adapting to the evolving landscape of technology and 
              staying true to our values  of inclusivity, sustainability, and
              excellence.
            </p>
          </div>
          <img src="https://i.ibb.co/fnKSMGH/vision.jpg" alt="" />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
