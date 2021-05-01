const TryLast = (props) => {
  const armadi = props.armadi;
  return (
    <div>
      {armadi.map((e) => (
        <div key={e.nome}>
          <h1>{e.nome}</h1>
          <h2>{e.ante}</h2>
          <h3>{e.colore}</h3>
        </div>
      ))}
    </div>
  );
};

export default TryLast;
