import {useContext} from 'react';
import { Navigate } from 'react-router-dom';
import { useParams} from 'react-router-dom';
import PostContext from '../PostContext/PostContext';
import {useNavigate} from 'react-router';
//import useFetchRequest from '../hook/useFetchRequest';
import './PageViewPost.css';
import React from 'react';
import HomePage from '../HomePage/HomePage';


const PageViewPost = (props) => {
 /* const DeleteId = (id) => {
    const [data, error, loading] = useFetchRequest(`${process.env.REACT_APP_URL}/${id}`, {
      header:{
         'Content - Type': 'application/json'
     },
      method: 'DELETE',
      body: null
    });
    // console.log('props after del-----',props);
    console.log('data,error,url,load after del-----', data, error, process.env.REACT_APP_URL+ `${id}`, loading);
    
  }*/
 


  async function DeleteId (id) {
    console.log(' delete url=========', process.env.REACT_APP_URL+`${params.id}`, id);
    let response = await fetch(`${process.env.REACT_APP_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log('result delete=========', response);
    // не нужен код ниже, т.к. удалили все вручную и на сервере и в state
    /*if (response.status === 204) {
      loadActual();
    }*/
  }


   const params = useParams();

   const navigate = useNavigate();
   const goHome = () => navigate('/');
   //const location = useLocation();

   //const Redirect = <Navigate to="/post:id" replace={true} state={{from: '/'}} />
   const handlerClickDelete = (id) => {
    DeleteId(id);
    navigate(`/`);
    return <HomePage />;
    //return <Navigate to="/"/>
   }
   const handlerClickChange = (id) => navigate(`/`);

   console.log('params=', params, params.id, props, navigate);
    // получаем досуп к контексту блога
    const blog = useContext(PostContext);

    const {error, loading} = blog;
    console.log('posts error loading in HomePage',error,loading);

    // получаем идентификатор поста блога
    //const id = parseInt(match.params.id);
    const id = parseInt(params.id);
    // находим пост по идентификатору
    const post = blog.posts.find(item => item.id === id);
    
   console.log('через contex ViewPage', blog, blog.posts, blog.posts.length );
    
  //return ((post || blog.posts.length !==0) ? (
  return ((post) ? (
    <article className="article">
        <h3 className="article__title">ВЫБРАН ПОСТ (#{post.id})</h3>
        <p className="article__paragraph"> Содержимое: {post.content}</p>
        <p className="article__paragraph"> Создан: {post.created}</p>
        
       
        <button className="btn" onClick={() => goHome()}>Назад</button>
        <button className="btn2" onClick={(id) => handlerClickChange(parseInt(params.id))}>Изменить</button>
        <button className="btn2" onClick={(id) => handlerClickDelete(parseInt(params.id))}>Удалить</button>
        
    </article>
  ) : (
      <p>Post not found</p>
      )
  )
}

export default PageViewPost;

//<button className="btn2" onClick={()=> Redirect}>Изменить</button>
// (<button className="btn2" onClick={(id) => handlerClickChange(id)}>Изменить</button>)

/*<button className="btn" onClick={() => props.history.goBack()}>Back</button>
return (post ? (
            <div>
                <h3>{post.title} (#{post.id})</h3>
                <p > {post.content}</p>
            </div>
        ) : (
            <p>Post not found</p>
        )
    )
*/

/*
<article className="article">
      <h1 className="article__title">ВЫБРАН ПОСТ 
      {props.id}</h1>
      <p className="article__paragraph">
        Страница с выбранным постом
      </p>
    </article>
*/
