const Prova = (props) => {
  const objprops = props.objprops;
  return (
    <div>
      {objprops.map((e) => {
        return (
          <div className='blog-preview' key={e.id}>
            <h1>{e.marca}</h1>
            <h2>{e.modello}</h2>
            <p>{e.assicurata}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Prova;
