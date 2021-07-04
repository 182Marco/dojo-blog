import { useState, useEffect } from 'react';

const Loading = () => {
  // data
  let [percent, setPercent] = useState(0);
  let int = null;
  //   created
  useEffect(() => {
    int = setInterval(() => {
      increasePerc();
      log();
    }, 20);
    increasePerc();
  }, []);
  // methods
  const increasePerc = () =>
    percent < 100 ? setPercent(percent++) : clearInterval(int);
  const log = () => console.log(percent);
  //   template
  return (
    <div className='comp-Cont'>
      <div className='writes-box'>
        <p className='precentage'>{percent}%</p>
        <p>
          Loading . . .
          {/* span che si sposta comprendo progressivamente i puntini per effetto progressione */}
          <span></span>
        </p>
      </div>
      {/* barra caricamento */}
      <div className='loadingWrap'>
        {/* scritta percentuale di caricamento sopra barra */}
        <div className='increase bar'></div>
      </div>
    </div>
  );
};

export default Loading;
