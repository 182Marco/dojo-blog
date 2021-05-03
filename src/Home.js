import { useState } from 'react';
import Bloglist from './Bloglist';
import Prova from './Prova';

const Home = () => {
  const [count, setCount] = useState(0);
  const [blogs, setBlogs] = useState([
    function up() {
      setCount(count++);
    },
    {
      title: 'La mia sera',
      body: `Il giorno fu pieno di lampi;
        2. ma ora verranno le stelle,
        3. le tacite stelle. Nei campi
        4. c’è un breve gre gre di ranelle.
        5. Le tremule foglie dei pioppi
        6. trascorre una gioia leggiera.
        7. Nel giorno, che lampi! che scoppi!
        8. Che pace, la sera!
        
        9. Si devono aprire le stelle
        10. nel cielo sì tenero e vivo.
        11. Là, presso le allegre ranelle,
        12. singhiozza monotono un rivo.
        13. Di tutto quel cupo tumulto,
        14. di tutta quell’aspra bufera,
        15. non resta che un dolce singulto
        16. nell’umida sera.
        
        17. È, quella infinita tempesta,
        18. finita in un rivo canoro.
        19. Dei fulmini fragili restano
        20. cirri di porpora e d’oro.
        21. O stanco dolore, riposa!
        22. La nube nel giorno più nera
        23. fu quella che vedo più rosa
        24. nell’ultima sera.
        
        25. Che voli di rondini intorno!
        26. che gridi nell’aria serena!
        27. La fame del povero giorno
        28. prolunga la garrula cena.
        29. La parte, sì piccola, i nidi
        30. nel giorno non l’ebbero intera.
        31. Nè io… e che voli, che gridi,
        32. mia limpida sera!
        
        33. Don… Don… E mi dicono, Dormi!
        34. mi cantano, Dormi! sussurrano,
        35. Dormi! bisbigliano, Dormi!
        36. là, voci di tenebra azzurra…
        37. Mi sembrano canti di culla,
        38. che fanno ch’io torni com’era…
        39. sentivo mia madre… poi nulla…
        40. sul far della sera.`,
      author: 'Giovanni Pascoli',
      id: '3908',
    },
    {
      title: 'Solo et pensoso ',
      body: `Solo et pensoso i più deserti campi
      vo mesurando a passi tardi et lenti,
      et gli occhi porto per fuggire intenti
      ove vestigio human l’arena stampi.
      
      Altro schermo non trovo che mi scampi
      dal manifesto accorger de le genti,
      perché negli atti d’alegrezza spenti
      di fuor si legge com’io dentro avampi:
      
      sì ch’io mi credo omai che monti et piagge
      et fiumi et selve sappian di che tempre
      sia la mia vita, ch’è celata altrui.
      
      Ma pur sì aspre vie né sì selvagge
      cercar non so ch’Amor non venga sempre
      ragionando con meco, et io co·llui.`,
      author: 'Francesco Petrarca',
      id: '3909',
    },
    {
      title: 'Il sabato del villaggio',
      body: `La donzelletta vien dalla campagna,
      In sul calar del sole,
      Col suo fascio dell'erba; e reca in mano
      Un mazzolin di rose e di viole,
      Onde, siccome suole,
      Ornare ella si appresta
      Dimani, al dì di festa, il petto e il crine.
      Siede con le vicine
      Su la scala a filar la vecchierella,
      Incontro là dove si perde il giorno;
      E novellando vien del suo buon tempo,
      Quando ai dì della festa ella si ornava,
      Ed ancor sana e snella
      Solea danzar la sera intra di quei
      Ch'ebbe compagni dell'età più bella
      Già tutta l'aria imbruna,
      Torna azzurro il sereno, e tornan l'ombre
      Giù da' colli e da' tetti,
      Al biancheggiar della recente luna.
      Or la squilla dà segno
      Della festa che viene;
      Ed a quel suon diresti
      Che il cor si riconforta.
      I fanciulli gridando
      Su la piazzuola in frotta,
      E qua e là saltando,
      Fanno un lieto romore:
      E intanto riede alla sua parca mensa,
      Fischiando, il zappatore,
      E seco pensa al dì del suo riposo
      Poi quando intorno è spenta ogni altra face,
      E tutto l'altro tace,
      Odi il martel picchiare, odi la sega
      Del legnaiuol, che veglia
      Nella chiusa bottega alla lucerna,
      E s'affretta, e s'adopra
      Di fornir l'opra anzi il chiarir dell'alba.
      Questo di sette è il più gradito giorno,
      Pien di speme e di gioia:
      Diman tristezza e noia
      Recheran l'ore, ed al travaglio usato
      Ciascuno in suo pensier farà ritorno.
      Garzoncello scherzoso,
      Cotesta età fiorita
      È come un giorno d'allegrezza pieno,
      Giorno chiaro, sereno,
      Che precorre alla festa di tua vita.
      Godi, fanciullo mio; stato soave,
      Stagion lieta è cotesta.
      Altro dirti non vo'; ma la tua festa
      Ch'anco tardi a venir non ti sia grave.`,
      author: 'Giacomo Leopardi',
      id: '3749',
    },
  ]);
  const [objprops, setP] = useState([
    {
      marca: 'fiat',
      modello: 'punto',
      assicurata: 'genialloyd',
      ruote: 4,
      id: 2870,
    },
    {
      marca: 'ford',
      modello: 'fiesta',
      assicurata: 'Generali',
      ruote: 4,
      id: 63789,
    },
    {
      marca: 'ferrari',
      modello: '458Italia',
      assicurata: 'genialloyd',
      ruote: 4,
      id: 78789,
    },
  ]);
  return (
    <div className='home'>
      <button onClick={() => (count > 0 ? setCount(count - 1) : null)}>
        -
      </button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <Bloglist classList='bolgEl' blogs={blogs} title='I componimenti' />
      <Prova objprops={objprops} />
    </div>
  );
};
export default Home;
