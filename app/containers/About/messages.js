/*
 * About Messages
 *
 * This contains all the text for the About component.
 */
import {defineMessages} from 'react-intl';

export default defineMessages({
  title: {
    id: 'app.containers.About.title',
    defaultMessage: 'Chi siamo',
  },
  content: {
    id: 'app.containers.About.content',
    defaultMessage: `
Il corpo centrale dell’azienda si trova nella pianura fertile della Val di Chiana a pochi chilometri dal centro di Castiglion Fiorentino, in una zona dedicata al settore florovivaistico da oltre 80 anni.
Una terra produttiva e ricca di tradizione che ha consentito l’avvio e l’incremento esponenziale dell’azienda che è avvenuto sposando il pensiero di Johann Wolfgang von Goethe:  “La natura non conosce pause nel suo progresso e sviluppo, e maledice ogni genere d'inattività”.
La robustezza, la salute e la bellezza di ogni singola pianta presente all’interno del vivaio è il risultato di operosità e rispetto della natura.  Grazie alla vocazione familiare dell’azienda e al susseguirsi di menti imprenditoriali alla direzione dell’Azienda, Vivai Frappi è rimasto legato alle tradizioni vivaistiche senza però rinunciare alle innovazioni legate ai sistemi di allevamento, di produzione, alle novità legate alla meccanizzazione e alla logistica.
    `,
  },
});
