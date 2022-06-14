import React from 'react';
import { useEffect, useState } from 'react';
import useFetchRequest from '../hook/useFetchRequest';
import PostContext from '../PostContext/PostContext';
import {useNavigate} from 'react-router';


export default function PostProvider(props) {
  //const [date, setDate] = useState([]);
  const navigate = useNavigate();
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
/*

  const value = {
    posts: data,
    loading : loading,
    error: error,
 };
*/
  const [value, setValue] = useState({
    posts: data,
    loading : loading,
    error: error,
 });
 console.log('value destr-----', value, value.posts,value.error);
 
 useEffect(() => {
  fetch(process.env.REACT_APP_URL,{
    header:{
       'Content - Type': 'application/json'
   },
    method: 'GET',
    body: null
  })
            .then(response=>response.json())
            .then((value)=>{
              console.log('esho destr-----', value);
             setValue((prevValue)=> ({...prevValue, posts: value, error: null, loading: false}));//error: null, loading: false
            })
}, [navigate]);
  
console.log('value2-----', value);

  return (
    //<PostContext.Provider value={{id, content, created}}>
    <PostContext.Provider value={value}>
      {props.children}
    </PostContext.Provider>
  )
}
