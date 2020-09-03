import * as React from 'react';

import ButtonLink from '../Button/Button';

const ExpiredNotification = () => (
  <>
    <p>
      Срок опроса <b>завершён 1 сентября</b>.<br />
      Спасибо всем, кто принял участие!
    </p>

    <p>Результаты опроса будут опубликованы 01 октября 2020 года.</p>

    <h3>Не пропустите:</h3>

    <p>Обновлённый вариант стартует <b>1 января 2021 года</b>!</p>

    <p>
      Хотите узнать о старте вовремя?
      Укажите как с вами связаться и я отправлю одно уведомление, как только новый опрос стартует!
    </p>

    <div className="call-to-action">
      <ButtonLink href="https://forms.gle/P2c5SPqaminqmhCKA" target="_blank">Записаться</ButtonLink>
    </div>
  </>
);

export default ExpiredNotification;
