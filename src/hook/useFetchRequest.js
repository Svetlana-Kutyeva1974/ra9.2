import { useEffect, useState } from 'react';

export default function useFetchRequest(url, opts=null) {
    const [data, setData] = useState([{id : `1`,
    content :'привет',
    created : '2014-12-12'
    }]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    console.log('передали в fetch ---', url, opts);
    useEffect(() => {
      setLoading(true);
      const timerId = setTimeout(async () => {
        try {
          const response = await fetch(url);// fetch(url, opts)!!! ;
          console.log('response----!!!!!fetch ---', response);
          if (!response.ok) {
            setErrorMessage({ state: true, text: response.statusText });
          }    
          const data = await response.json();
          console.log('response2----!!!!!fetch ---', response);
          console.log('data fetch ---\n', data);
          if (data.length !== 1) {
            setData(prevData =>  ([...prevData, {id: data.id, content: data.content, created: data.created }]));
          //setForm(prevForm => ({...prevForm, form}));// заменить на фигурные скобки выше
          }
          else {
            setData(data);
          }
          setErrorMessage(null);
          //setLoading(false);
          } catch (e) {
            console.error(e);
            setErrorMessage({ state: true, text: e.message });

          } finally {
            setLoading(false);
          }
      }, 1000);
      return () => clearTimeout(timerId);
      },[url, opts]);

  console.log('return fetcha ---', data, loading, errorMessage, opts);
 
  return [data, loading, errorMessage];
}