import { useState, useEffect } from 'react';

const useFetch = (url = 'http://localhost:8000/blogs') => {
  // reactive vars
  const [data, setData] = useState(null);
  const [isPending, setPending] = useState(true);
  const [error, setError] = useState(false);
  // CREATED
  // use effect is the same as created in Vue if ypu pass as 2nd value an empty array
  // WHATCHERS
  // -> they work as watchers in vue if we pass dependencies(but also fires at created)
  // -> if you don't pass a 2nd argument they fire at created and at every change of shadow dom
  useEffect(() => {
    fetch(url)
      .then(r => {
        if (!r.ok) {
          throw Error('could not fetch the data for the resurce');
        }
        return r.json();
      })
      .then(data => {
        // I'm setting a time out just to see more
        // clearly (when we test the app) that a
        // conditional rendering is happening
        setTimeout(() => {
          setData(data);
          setPending(false);
        }, 3000);
      })
      .catch(err => {
        setError(err.message);
      });
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
