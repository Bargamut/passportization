import * as React from 'react';
import { YMInitializer } from 'react-yandex-metrika';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BodyPart from '../BodyPart/BodyPart';
import BodyCall from '../BodyCall/BodyCall';
import CallToAction from '../CallToAction/CallToAction';
import ButtonLink from '../Button/Button';
import CardsList from '../CardsList/CardsList';
import SocialsShare from '../SocialsShare/SocialsShare';

import HumansData from '../../providers/humans-data';
import PublicsData from '../../providers/publics-data';

const App = () => (
  <>
    {process.env.NODE_ENV === `production` &&
      <YMInitializer
        accounts={[ 47849594 ]}
        options={{ clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true }}
        version="2"
      />
    }

    <div className="wrapper">
      <Header />

      <main className="site-body">
        <BodyPart header="Что это?">
          <p>Проект частного исследования:</p>

          <p className="pulse-question">
            Актуальность паспортизации среди реконструкторов
          </p>

          <p>
            Это пробный выпуск, первый шаг для развития проекта ежегодного опроса среди сообщества реконструкторов - "Пульс паспортизации".
          </p>
        </BodyPart>

        <hr className="break-line" />

        <BodyCall header="Ваш опыт ценен!" image="/assets/decor/icons/vesy.png">
          <div className="pulse-balance">
            <div className="pulse-balance__item balance-item__left">Пишете паспорта?</div>
            <div className="pulse-balance__item balance-item__right">Отказались от них?</div>
          </div>

          <p>У вас наверняка есть причины - поделитесь этим!</p>

          <CallToAction />
        </BodyCall>

        <hr className="break-line" />

        <BodyPart header="Зачем?">
          <ul className="items-list">
            <li className="items-list__item">
              Cобрать обезличенные данные о том, каким образом люди работают с паспортами комплектов.
            </li>

            <li className="items-list__item">
              Сформировать общую картину паспортизации в современной реконструкции в России.
            </li>

            <li className="items-list__item">
              Узнать о проблемах в паспортизации и, быть может, найти их решения.
            </li>

            <li className="items-list__item">
              Сделать на основе этого проекта ежегодный "пульс", более грамотный с точки зрения социологии. Сейчас проект в экспериментальном режиме.
            </li>
          </ul>
        </BodyPart>

        <BodyPart header="А это безопасно?">
          <p>Здесь не просят ваших имён, адрес, почту или номер телефона. Нет регистрирации и SMS.</p>

          <p>Есть только 15 вопросов.</p>

          <p>Все ответы анонимны.</p>

          <div className="call-to-action">
            <CallToAction />
          </div>

          <p>
            Когда опрос закончится, все ответы будут сведены и опубликованы на отдельной странице в виде инфографики "о состоянии паспортизации в 2020 году" на сайте проекта.
          </p>
        </BodyPart>

        <hr className="break-line" />

        <BodyCall header="Знаете что можно улучшить?" image="/assets/decor/icons/lamp.svg" >
          <p>
            Проект молодой и ему важна ваша поддержка.
          </p>

          <p>
            Я открыт для идей, предложений и замечаний: пожалуйста, свяжитесь со мной!
          </p>

          <div className="call-to-action">
            <ButtonLink className="button--dark" href="https://t.me/bargamut" target="_blank">
              Telegram
            </ButtonLink>

            <ButtonLink className="button--dark" href="https://vk.bargamut.ru" target="_blank">
              ВКонтакте
            </ButtonLink>

            <ButtonLink className="button--dark" href="https://fb.bargamut.ru" target="_blank">
              Facebook
            </ButtonLink>
          </div>
        </BodyCall>

        <hr className="break-line" />

        <BodyCall header="Самый простой способ поддержать">
          <p>
            Поделитесь этим сайтом с коллегами-реконструкторами: чем больше реконструкторов примет участие,
            тем достовернее будет результат.
          </p>

          <SocialsShare />
        </BodyCall>

        <hr className="break-line" />

        <BodyPart header="Помощники">
          <h3 className="body-part__subhead">Помощь в подготовке</h3>

          <CardsList provider={new HumansData()} />

          <hr className="break-line" />

          <h3 className="body-part__subhead">Информационная поддержка</h3>

          <CardsList provider={new PublicsData()} mode="public" />
        </BodyPart>
      </main>

      <hr className="break-line" />

      <Footer />
    </div>
  </>
);

export default App;
