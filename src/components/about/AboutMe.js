import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row pb-6">
      <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
        <div className="py-6">
          <h2 className="font-semibold mb-1">Hello! I am Vitesh Malhotra</h2>
          <p className="text-base leading-6 ">
          I'm a dedicated software engineer with a profound passion for the convergence of Data Analysis, Web3, and Full Stack Web Development.
           With a diverse skill set and an unwavering work ethic, I'm driven by my relentless pursuit of personal and professional growth. 
           I am excited to be part of dynamic teams and make a significant impact in the field of technology and management.
           In a rapidly evolving tech landscape, I stay ahead by keeping my finger on the pulse of the latest industry trends and emerging skills.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6">
        <ul className="flex flex-col gap-1">
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Age:</span>
            22
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Residence:</span>
            New Delhi, India
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
