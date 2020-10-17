import * as React from 'react';
import BodyPart from '../BodyPart/BodyPart';

const ExpiredNotification = ({header, isHasResults}) => (
  <BodyPart header={header} className="body-part-warning">
    <p>
      Срок опроса <b>завершён 1 сентября</b>.<br />
      Спасибо всем, кто принял участие!
    </p>

    {!isHasResults &&
      <p>
        <b>Результаты опроса</b> будут опубликованы 01 октября 2020 года.
      </p>
    }
  </BodyPart>
);

export default ExpiredNotification;
