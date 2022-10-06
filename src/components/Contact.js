import React, { forwardRef } from 'react';

const Contact = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="contact">
      <div className="contact-title">Let's get in touch!</div>
      <div className="contact-icon-container">
        <a href="mailto:anabargau@gmail.com">
          <img
            src="https://gist.githubusercontent.com/anabargau/e52505bef58df93e4f728ad3ca3b96d4/raw/08c0885579378cf3cf41a4630fa71043d9bf1c83/gmail.svg"
            alt="gmail icon"
          />
        </a>
        <a href="https://github.com/anabargau" target="_blank" rel="noreferrer">
          <img
            src="https://gist.githubusercontent.com/anabargau/9033048a5f67b10d5097f59aad1f25ba/raw/9bdfd8f35c4422a4cce0cdb5f81cbf85e701ac76/github.svg"
            alt="github icon"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/ana-maria-b%C3%A2rg%C4%83u-640488252/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://gist.githubusercontent.com/anabargau/88dae39881fa1c33d7566cd924ccf757/raw/972eca14b0fc3d790f7fa67e0d86dda2e0aef0d7/linkedin.svg"
            alt="linkedin icon"
          />
        </a>
      </div>
    </section>
  );
});

export default Contact;
