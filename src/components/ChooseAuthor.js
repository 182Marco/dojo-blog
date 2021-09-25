const ChooseAuthor = ({ chosenAut, setChosenAut }) => {
  return (
    <div>
      <h3>Cerca autore: </h3>
      <p>
        <em> attualmente ricercato:</em> <strong>{chosenAut}</strong>
      </p>
      <input
        placeholder='tutti gli autori'
        type='text'
        onChange={e => setChosenAut(e.target.value.toLocaleLowerCase())}
      />
    </div>
  );
};

export default ChooseAuthor;
