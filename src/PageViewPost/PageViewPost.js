import {useContext} from 'react';
//import { Navigate } from 'react-router-dom';
import { useParams} from 'react-router-dom';
import PostContext from '../PostContext/PostContext';
import {useNavigate} from 'react-router';
import './PageViewPost.css';
import React from 'react';
//import HomePage from '../HomePage/HomePage';

const PageViewPost = (props) => {
  async function DeleteId (id) {
    let response = await fetch(`${process.env.REACT_APP_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log('result delete==', response);
  }

  const params = useParams();

  const navigate = useNavigate();
  const goHome = () => navigate('/');
    //console.log('params====', params, params.id, props, navigate);
    // получаем досуп к контексту блога
  const blog = useContext(PostContext);

  //const {error, loading} = blog;
    // получаем идентификатор поста блога
  const id = parseInt(params.id);
    // находим пост по идентификатору
  const post = blog.posts.find(item => item.id === id);
      
  const handlerClickDelete = (id) => {
    DeleteId(id);
    navigate(`/`);
      //return <HomePage />;// это , не нужно?
      //return <Navigate to="/"/>
  }

   // заглушка была:const handlerClickChange = (id) => navigate(`/`);
  const handlerClickChange = (id) => {
    console.log('posts id на замену',id);
    return navigate(`/postsChange/${id}`);
  };

  return ((post) ? (
    <article className="article">
        <h3 className="article__title">ВЫБРАН ПОСТ (#{post.id})</h3>
        <p className="article__paragraph"> Содержимое: {post.content}</p>
        <p className="article__paragraph"> Создан: {post.created}</p>
       
        <button className="btn" onClick={() => goHome()}>Назад</button>
        <button className="btn2" onClick={() => handlerClickChange(parseInt(params.id))}>Изменить</button>
        <button className="btn2" onClick={() => handlerClickDelete(parseInt(params.id))}>Удалить</button>
        
    </article>
  ) : (
      <p>Post not found</p>
      )
  )
}

export default PageViewPost;

