import React from "react";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__heading">
        Quality equipment only at <span>Next Sports and Camp</span>
      </h1>
      <div className="bg-video">
        <video
          className="bg-video__content"
          autoPlay={true}
          loop={true}
          muted
          preload=""
          playsInline={true}
        >
          <source src="header/bg-video-2.mp4" type="video/mp4" />
        </video>
      </div>
    </header>
  );
};

export default Header;
