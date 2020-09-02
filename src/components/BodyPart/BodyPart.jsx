import * as React from 'react';

const BodyPart = (props) => {
  const classes = `body-part ${props.className}`;

  return (
    <section className={classes}>
      {props.header && (
        <>
          <h2 className="body-part__head">{props.header}</h2>

          <hr className="break-line" />
        </>
      )}

      {props.children}
    </section>
  );
};

export default BodyPart;
