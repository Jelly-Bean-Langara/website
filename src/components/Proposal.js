import React from 'react';

const Proposal = () => (
  <section className="proposal">
    <div className="proposal__inner">
      <div className="proposal__left">
        <h3>
          Discover more about
          <br />
          OFFbeat project
        </h3>
        <p>
          Here you can find all the details about
          <br />
          the journey of building this app
        </p>
        <a href="https://offbeatapp.ca/downloads/OFFbeat_Proposal.pdf" target="blank">Download Proposal</a>
      </div>

      <div className="proposal__right">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/ukmLniKGkRU"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="OFFbeat App"
        />
      </div>
    </div>
  </section>
);

export default Proposal;
