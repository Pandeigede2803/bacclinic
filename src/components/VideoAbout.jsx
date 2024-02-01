import React from "react";

const VideoAbout = () => {
  return (
    <div className="my-0 justify-center flex items-cente">
      <iframe
        title="YouTube Video"
        width="100%" // Set width to 100% for full width
        height="700"
        className=""
        src="https://www.youtube.com/embed/rdaropyhCI4?autoplay=1" // Add autoplay parameter
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoAbout;
