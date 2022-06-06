import React from 'react';
import {NavLink} from 'react-router-dom';
//import {useMatch} from 'react-router-dom';
import useFetchRequest from '../hook/useFetchRequest';
import Post from '../Post/Post';
import { useNavigate } from 'react-router';
import './HomePage.css';
//import PostContext from '../PostContext/PostContex';
//import { useContext } from 'react';
//import PostProvider from '../PostContext/PostContex';

 const HomePage = () => {
   //const [data, error, loading] = useFetchRequest(process.env.REACT_APP_URL, []);
   
   const [data, error, loading] =useFetchRequest(`${process.env.REACT_APP_URL}/posts`, null);
   console.log('data in HomePage', data);
   //const match = useMatch();
   //console.log('match in HomePage', match);
   const navigate = useNavigate();
   const handlerClick = (id) => navigate(`/posts/${id}`);

   /*function handlerClick(id) {
    console.log('id ---', id);
    return () => navigate('/posts');
  }*/
 // const data2 = useContext(PostContext);
   function loadedList(){
     console.log('отрисовка постов');
    return (
      <ul className='list'>
        {data.map(o => <Post key={o.id} id= {o.id} onClick={() => handlerClick(o.id)} content={o.content} created={o.created}/>)}
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
          {(!loading || !error) ? loadedList() : <div>Loading ...</div>}
          {error && <div>{error.text}</div>}
        </div>
     </>
   )
}

export default HomePage;

//{(!loading && !error) ? loadedList() : <div>Loading ...</div>}


/*
<NavLink to="/drift" className={({ isActive }) => isActive ? "menu__item-active menu__item" : "menu__item"}>
          Дрифт-такси
        </NavLink>
        <NavLink to="/timeattack" className={({ isActive }) => isActive ? "menu__item-active menu__item" : "menu__item"}>
          Time Attack
        </NavLink>
        <NavLink to="/forza" className={({ isActive }) => isActive ? "menu__item-active menu__item" : "menu__item"}>
          Forza Karting
        </NavLink>
*/