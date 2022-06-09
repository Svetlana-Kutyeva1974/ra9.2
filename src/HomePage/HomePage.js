import React from 'react';
import {NavLink} from 'react-router-dom';
//import {useMatch} from 'react-router-dom';
//import useFetchRequest from '../hook/useFetchRequest';
import Post from '../Post/Post';
import { useNavigate } from 'react-router';
import './HomePage.css';
import PostContext from '../PostContext/PostContext';
import { useContext } from 'react';
import {nanoid} from 'nanoid';
//import PostProvider from '../PostContext/PostContex';

 const HomePage = (props) => {
   //const [data, error, loading] = useFetchRequest(process.env.REACT_APP_URL, []);

   /*этот кусок убрали за счет сontex
   const [data, error, loading] =useFetchRequest(process.env.REACT_APP_URL, {
    header:{
       'Content - Type': 'application/json'
   },
    method: 'GET',
    body: null
  });
   console.log('data in HomePage', data);
*/
   const blog = useContext(PostContext);
   const {posts, error, loading} = blog;
   console.log('data  через contex HomePage', blog, blog.posts);
   console.log('posts error loading in HomePage', posts,error,loading, blog.posts, posts.length);
   
   //const match = useMatch();
   //console.log('match in HomePage', match);

   const navigate = useNavigate();
   const handlerClick = (id) => navigate(`/posts/${id}`);

   /*function handlerClick(id) {
    console.log('id ---', id);
    return () => navigate('/posts');
  }*/
 // const data2 = useContext(PostContext);
   function loadedList() {
    console.log('отрисовка постов');
    return (
      <ul className='list'>
        {posts.map(o => <Post key={nanoid()} id= {o.id} onClick={() => handlerClick(o.id)} content={o.content} created={o.created}/>)}
      </ul>
      )
  }

   return (
     <>
        <nav className='menu'>
          <NavLink to='/posts/new' className={'menu__item'}>
            <span className='sss'>Создать пост</span>
          </NavLink>
        </nav>
        <div className='allPosts'>
          {(!loading && !error && (posts.length !==0)) ? loadedList() : <div>No posts...</div>}
          {loading && <div>Loading ...</div>}
          {error && <div>{error.text}</div>}
        </div>
     </>
   )
}

export default HomePage;

//{(!loading && !error) ? loadedList() : <div>Loading ...</div>}

