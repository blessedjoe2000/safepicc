import React from "react";

const HomeVideo = () => {
  return (
    <div className="homevideo">
      <div className="welcome-overlay"></div>
      <video
        src="https://s4sya57j5i.ufs.sh/f/1Wr3ZpR6uMW3N4MN8FydSDP4AOohNq6ctYQBmCxzFyajWHsG"
        autoPlay
        loop
        muted
        playsInline
        controls={false}
      />
      <div className="video-content">
        <h1 className=" welcome-heading font-robotoSlab ">
          Welcome to Safe PICC Plus Inc.
        </h1>
        <div className="bg-black/20 sm:p-5 p-2 sm:mt-5 mt-2 sm:mb-10 mb-5 ">
          <p className="welcome-text ">
            Where patient care and safety are our top priorities. We are
            committed to excellence and dedicated to delivering high-quality
            services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeVideo;
