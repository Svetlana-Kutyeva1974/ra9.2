import { useEffect, useState } from 'react';

export default function useFetchRequest(url, opts={header: {
  'Content - Type': 'application/json'}, method: 'GET', body: null}) {

    /*const [data, setData] = useState([{id : `1`,
    content :'привет',
    created : '2014-12-12'
    }]);
    */
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    console.log('передали в fetch ---', url, opts);

    useEffect(() => {
      setLoading(true);
      const timerId = async () => {
        try {
          const response = await fetch(url, {
            header:{
               'Content - Type': 'application/json'
           },
            method: (opts.method === 'GET') ? 'GET' : opts.method,
            body:(opts.method === 'GET') ? null : JSON.stringify(opts.body)
          } );// fetch(url, opts)!!! ;
          console.log('response----!!!!!fetch ---', response);
          if (!response.ok) {
            setErrorMessage({ state: true, text: response.statusText });
          }    
          const data = await response.json();
          console.log('response2----!!!!!fetch ---', response);

          console.log('data fetch ---\n', data, data.length);
          if (data.length !== 0) {
            //setData(prevData =>  ([...prevData, {id: data.id, content: data.content, created: data.created }]));
          //setForm(prevForm => ({...prevForm, form}));// заменить на фигурные скобки выше
          setData(data);
          console.log(' !!!перезаписанный data fetch ---\n', data);
          }
          else {
            setData({id : `1`,
            content :'привет',
            created : '2014-12-12'
            });
          }
          setErrorMessage(null);
          //setLoading(false);
          } catch (e) {
            console.log(e);
            //throw new Error(`Ошибка ${res.status} ${res.statusText}`);
            setErrorMessage({ state: true, text: e.message });

          } finally {
            setLoading(false);
          }
      }
      timerId();
      //return () => clearTimeout(timerId);
      },[url, opts.body, opts.method]);//},[url,opts]);

  console.log('return fetcha ---', data, loading, errorMessage, opts);
 
  return [data, loading, errorMessage];
}