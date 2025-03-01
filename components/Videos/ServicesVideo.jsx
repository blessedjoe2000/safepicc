import React from "react";

const ServicesVideo = () => {
  return (
    <div className="homevideo">
      <div className="welcome-overlay"></div>
      <video
        src="https://s4sya57j5i.ufs.sh/f/1Wr3ZpR6uMW3j5baoSiH4VU7WX3uIpvOTeE591Rd8lDmgjJy"
        autoPlay
        loop
        muted
      />
      <div className="video-content">
        <h1 className=" welcome-heading font-robotoSlab ">Our Services</h1>
        <div className="bg-black/20 p-5 mt-5 ">
          <p className="welcome-text ">
            We provide Trusted Vascular Access Care, delivers expert PICC line,
            Midline, and Peripheral IV insertions, ensuring safe, efficient, and
            comfortable patient care.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesVideo;
