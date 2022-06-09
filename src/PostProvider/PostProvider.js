import React from 'react';
//import { useParams } from 'react-router-dom';
import useFetchRequest from '../hook/useFetchRequest';
import PostContext from '../PostContext/PostContext';



export default function PostProvider(props) {
  //const [date, setDate] = useState([]);
  const [data, error, loading] = useFetchRequest(process.env.REACT_APP_URL, {
    header:{
       'Content - Type': 'application/json'
   },
    method: 'GET',
    body: null
  });
  console.log('props in PostPr-----',props);
  console.log('data,error,url,load in PostPr-----', data, error, process.env.REACT_APP_URL, loading);
  //const {id,content, created}= data[0];
  //const {id2} =useParams(`${props.path}`);
 // console.log('data destr-----', id, content,created);

  //const finder = data.find((item) => item.id === id);
  //console.log('finder PostPr-----', finder);
  
  /*const [postList, setPostList] = useState(data);
  useEffect(() => {
    const change = () => {
      setPostList('Smith, John Smith');
    };
  }, []);
*/




  const value = {
    posts: data,
    loading : loading,
    error: error,
};


  return (
    //<PostContext.Provider value={{id, content, created}}>
    <PostContext.Provider value={value}>
      {props.children}
    </PostContext.Provider>
  )
}
