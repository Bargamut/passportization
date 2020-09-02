import * as React from 'react';

const ButtonLink = (props) => {
  let classes = `button ${props.className}`;

  return (
    <a className={classes}
      href={!props.disabled ? props.href : null}
      target={props.target || `_parent`}
    >
      {props.children}
    </a>
  );
};

export default ButtonLink;
