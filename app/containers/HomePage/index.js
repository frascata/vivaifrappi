/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Text from '../../components/Text/index';

import SectionServices from './SectionServices';
import SectionWhy from './SectionWhy';
import Helmet from 'react-helmet';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <Helmet
          title="Vivai Frappi Gino & Figli"
          meta={[
            {
              name: 'description', content: `
            La passione e la sensibilità coltivate nel tempo a contatto con i processi della natura e l’intelligenza creativa sono stati motivo di sviluppo costante per la famiglia Frappi che, da quattro generazioni si dedica all’agricoltura. Una passione che si tramanda da tempo: dalla coltivazione di prodotti orticoli in piccole porzioni di terreno negli anni 30, alla crescita esponenziale degli anni 70 che vede Gino insieme ai figli Amerino e Sauro impegnati nel potenziamento di un’azienda specializzata nelle coltivazioni florovivaistiche. Oltre 20 ettari di vivaio offrono una gamma di specie arboree ed arbustive di qualità tali da soddisfare le esigenze di mercati italiani ed europei, di enti pubblici o privati pronti a realizzare aree verdi. Da pochi anni nuova linfa è entrata in azienda permettendo il connubio tra tradizione ed innovazione: i percorsi formativi e gli studi di settore coinvolgono nella società anche Marco (Perito Agrario), responsabile tecnico-amministrativo ed Elisa (Agronomo), impegnata nella progettazione di parchi e giardini.
            `,
            },
          ]}
        />
        <div className="uk-cover-container" data-uk-height-viewport id="video">
          <iframe data-uk-cover
                  src="https://www.youtube.com/embed/hz0DchkLqm8?rel=0&amp;controls=0&amp;showinfo=0;autoplay=1;"
                  frameBorder="0"/>
        </div>
        <div className="uk-section primary-wrapper" id="section1">
          <div className="uk-container">
            <Text>
              <FormattedMessage {...messages.mainContent} />
            </Text>
          </div>
        </div>
        <SectionServices />
        <SectionWhy />
      </div>
    );
  }
}
