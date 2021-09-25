const ChooseAuthor = ({ author, i, setI }) => {
  return (
    <div>
      <h3>Seleziona un autore: </h3>
      <p>
        <em> attualmente ricercato:</em> <strong>{author[i]}</strong>{' '}
      </p>
      <button onClick={() => (i < 2 ? setI(i + 1) : setI(0))}>
        clicca qui per passare all'autore successivo
      </button>
    </div>
  );
};

export default ChooseAuthor;
