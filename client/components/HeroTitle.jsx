import React, { PropTypes } from 'react';

const HeroTitle = ({ title, subtitle, classes = '' }) => {
  const sub = subtitle ? (
    <h2 className="subtitle">
      {subtitle}
    </h2>
  ) : '';

  return (
    <section className={`hero ${classes}`}>
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            {title}
          </h1>
          {sub}
        </div>
      </div>
    </section>
  );
};

HeroTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  classes: PropTypes.string,
};

export default HeroTitle;
