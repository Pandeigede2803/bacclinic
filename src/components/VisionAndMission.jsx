// VisionMissionSection.js
import React from "react";

const VisionMissionSection = () => {
  return (
    <div className="font-primary space-y-6 flex flex-col items-left justify-center align-middle ">
      <h1 className=" font-extrabold text-3xl  text-secondary">ABOUT BAC</h1>
      <p className=" text-justify text-lg">
        Bali Aesthetic Centre is more than just a skin treatment and plastic
        surgery clinic; it`&lsquo;`s a sanctuary designed to enhance your natural beauty
        and elevate your sense of well-being. Our team of skilled professionals
        is committed to delivering personalized, high-quality care in a serene
        and comfortable environment.
      </p>

      <h1 className=" font-extrabold text-3xl text-secondary">VISION</h1>

      <p className="  text-justify text-lg">
        To be a leading force in redefining aesthetic care, fostering confidence
        and well-being through personalized and innovative solutions.
      </p>
      <h1 className=" font-extrabold text-3xl text-secondary">MISSION</h1>

      <ul className="text-lg text-justify" style={{ listStyleType: 'disc', marginLeft: '20px' }}>
        <li>Deliver exceptional skin treatments and plastic surgery services with a commitment to safety and precision.</li>
        <li>Empower individuals to embrace their uniqueness by providing personalized and transformative aesthetic solutions.</li>
        <li>Create a serene and comfortable environment that enhances the overall experience of our clients.</li>
        <li>Constantly innovate and stay at the forefront of technology to provide cutting-edge solutions.</li>
        <li>Cultivate a team of highly trained professionals dedicated to delivering quality and compassionate care.</li>
      </ul>
    </div>
  );
};

export default VisionMissionSection;;
