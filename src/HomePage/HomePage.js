import React from 'react';
import {NavLink} from 'react-router-dom';
import Post from '../Post/Post';
import { useNavigate } from 'react-router';
import './HomePage.css';
import PostContext from '../PostContext/PostContext';
import { useContext } from 'react';
import {nanoid} from 'nanoid';

 const HomePage = (props) => {
   const blog = useContext(PostContext);
   const {posts, error, loading} = blog;
   console.log('data  через contex HomePage', blog, blog.posts);
   console.log('posts error loading in HomePage', posts,error,loading, blog.posts);
   
   const navigate = useNavigate();
   const handlerClick = (id) => navigate(`/posts/${id}`);

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
          {(!loading && !error && (posts !== null)) ? loadedList() : <div>No posts...</div>}
          {loading && <div>Loading ...</div>}
          {error && <div>{error.text}</div>}
        </div>
     </>
   )
}

export default HomePage;

//{(!loading && !error) ? loadedList() : <div>Loading ...</div>}

