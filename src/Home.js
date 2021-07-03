import { useState } from 'react';
import Bloglist from './Bloglist';

const Home = () => {
  const [autore, setAutore] = useState(['Pascoli', 'Petrarca', 'Leopardi']);
  const [i, setI] = useState(0);
  const [count, setCount] = useState(0);
  const [blogs, setBlogs] = useState([
    {
      title: 'La mia sera',
      body: `Il giorno fu pieno di lampi;
        2. ma ora verranno le stelle,
        3. le tacite stelle. Nei campi
        4. c’è un breve gre gre di ranelle.
        5. Le tremule foglie dei pioppi
        6. trascorre una gioia leggiera.
        7. Nel giorno, che lampi! che scoppi!
        8. Che pace, la sera!`,
      author: 'Pascoli',
      id: '3908',
    },
    {
      title: 'Solo et pensoso ',
      body: `Solo et pensoso i più deserti campi
      vo mesurando a passi tardi et lenti,
      et gli occhi porto per fuggire intenti
      ove vestigio human l’arena stampi.`,
      author: 'Petrarca',
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
      Dimani, al dì di festa, il petto e il crine.`,
      author: 'Leopardi',
      id: '3749',
    },
  ]);
  const handleDelete = id => setBlogs(blogs.filter(e => e.id !== id));

  return (
    <div className='home'>
      <Bloglist
        classList='bolgEl'
        blogs={blogs}
        title='I componimenti'
        handleDelete={handleDelete}
      />
      <h3>Seleziona un autore: </h3>
      <p>
        <em> attualmente ricercato:</em> <strong>{autore[i]}</strong>{' '}
      </p>
      <button onClick={() => (i < 2 ? setI(i + 1) : setI(0))}>
        clicca qui per passare all'autore successivo ->
      </button>
      <Bloglist
        classList='bolgEl'
        title={`Le poesie di ${autore[i]}`}
        blogs={blogs.filter(e => e.author == autore[i])}
        handleDelete={handleDelete}
      />
    </div>
  );
};
export default Home;
