import React, { forwardRef } from 'react';

const Contact = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="contact">
      Let's get in touch!
    </section>
  );
});

export default Contact;
