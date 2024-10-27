import React from "react";
import "./AboutUs.css";

const About = () => {
  return (
    <div className="about-page">
      <Header />
      <MissionSection />
      <ValuesSection />
    </div>
  );
};

const Header = () => (
  <header className="header">
    <div className="mis-container flex flex-col">
      <h1>About Bhanu College</h1>
      <p>Empowering Futures Through Education & Excellence</p>
    </div>
  </header>
);

const MissionSection = () => (
  <section className="mission-section">
    <div className="mis-container">
      <h2>Our Mission</h2>
      <p className="pl-6">
        At Bhanu College, we are committed to providing an exceptional educational
        experience, fostering intellectual curiosity, personal growth, and
        professional readiness.
      </p>
    </div>
  </section>
);

const ValuesSection = () => (
  <section className="values-section">
      <h2>Our Core Values</h2>
    <div className="container">
      <div className="values-grid">
        {valuesData.map((value, index) => (
          <ValueCard key={index} title={value.title} description={value.description} />
        ))}
      </div>
    </div>
  </section>
);

const ValueCard = ({ title, description }) => (
  <div className="value-card">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const valuesData = [
  {
    title: "Excellence",
    description:
      "We strive for excellence in everything we do, aiming to achieve the highest standards in education and research.",
  },
  {
    title: "Integrity",
    description:
      "Our institution is built on the foundation of honesty and ethics, fostering trust and transparency.",
  },
  {
    title: "Innovation",
    description:
      "We embrace creativity and encourage new ideas, preparing our students for the future.",
  },
  {
    title: "Respect",
    description:
      "We cultivate a respectful environment, where diverse opinions are valued and every individual is treated with dignity.",
  },
  {
    title: "Collaboration",
    description:
      "We believe in the power of teamwork, promoting collaboration among students, faculty, and the community.",
  },
  {
    title: "Community Engagement",
    description:
      "We are dedicated to serving our community and encourage our students to participate in meaningful service activities.",
  },
];

export default About;
