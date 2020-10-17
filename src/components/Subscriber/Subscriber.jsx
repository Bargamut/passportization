import * as React from 'react';

import BodyPart from '../BodyPart/BodyPart';
import ButtonLink from '../Button/Button';

const Subscriber = ({startDate}) => (
  <BodyPart header="Не пропустите!" className="body-part-warning">
    <p>Обновлённый вариант опроса стартует <b>{startDate}</b>!</p>

    <p>
      Хотите узнать о старте вовремя?
      Укажите как с вами связаться и я отправлю одно уведомление, как только новый опрос стартует!
    </p>

    <div className="call-to-action">
      <ButtonLink href="https://forms.gle/P2c5SPqaminqmhCKA" target="_blank">Записаться</ButtonLink>
    </div>
  </BodyPart>
);

export default Subscriber;
