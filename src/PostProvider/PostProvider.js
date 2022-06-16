import React from 'react';
import { useEffect, useState } from 'react';
import useFetchRequest from '../hook/useFetchRequest';
import PostContext from '../PostContext/PostContext';
import {useNavigate} from 'react-router';

export default function PostProvider(props) {
  const navigate = useNavigate();
  const [data, error, loading] = useFetchRequest(process.env.REACT_APP_URL, {
    header:{
       'Content - Type': 'application/json'
   },
    method: 'GET',
    body: null
  });
    
  const [value, setValue] = useState({
    posts: data,
    loading : loading,
    error: error,
 });
 
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
       setValue((prevValue)=> ({...prevValue, posts: value, error: null, loading: false}));//error: null, loading: false
    })
}, [navigate]);

  return (
    <PostContext.Provider value={value}>
      {props.children}
    </PostContext.Provider>
  )
}
