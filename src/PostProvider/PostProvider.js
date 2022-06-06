import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchRequest from '../hook/useFetchRequest';
import PostContext from '../PostContext/PostContex';

export default function PostProvider(props) {
  //const [date, setDate] = useState([]);
  const [data, error, loading] = useFetchRequest(`${process.env.REACT_APP_URL}/posts`, null);
  console.log('data PostPr-----', data, error, process.env.REACT_APP_URL, loading);
  const {id,content, created}= data[0];
  const {id2} =useParams(`${props.path}`);
  console.log('data destr-----', id, id2, content,created);

  const finder = data.find((item) => item.id === id);
  console.log('finder PostPr-----', finder);
  return (
    <PostContext.Provider value={{id, content, created}}>
      {props.children}
    </PostContext.Provider>
  )
}
