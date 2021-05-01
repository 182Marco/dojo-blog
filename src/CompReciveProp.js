import TryLast from './TryLast';

const CompReciveProp = (props) => {
  const armadi = [
    {
      nome: 'Armadio lusso',
      ante: '2',
      colore: 'nocciola',
    },
    {
      nome: 'Armadio a risparmio',
      ante: 'mezza',
      colore: 'arancio',
    },
    {
      nome: 'Armadio ikea',
      ante: '4',
      colore: 'vaniglia',
    },
  ];
  const objprops = props.objprops;
  return (
    <div>
      {objprops.map((e) => (
        <div key={e.id}>
          <h1>{e.marca}</h1>
          <h1>{e.marca}</h1>
          <h1>{e.ruote}</h1>
        </div>
      ))}
      <TryLast armadi={armadi} />
    </div>
  );
};

export default CompReciveProp;
