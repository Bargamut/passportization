import * as React from 'react';
import ButtonLink from '../Button/Button';

const CallToAction = ({caption, disabled}) => (
  <ButtonLink
    className={disabled ? `button--disabled` : `button--call2action`}
    href="https://pulse.passportization.ru"
    disabled={disabled}
  >
    {caption}
  </ButtonLink>
);

export default CallToAction;
