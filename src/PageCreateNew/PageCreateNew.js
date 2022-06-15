import {NavLink} from 'react-router-dom';
import { useState } from 'react';
import './PageCreateNew.css';
import Form from '../Form/Form';
//import HomePage from '../HomePage/HomePage';
import PostContext from '../PostContext/PostContext';
import {useContext} from 'react';
import {useNavigate} from 'react-router';

const PageCreateNew = ({id = ''}) => {
  //console.log('создаем или изменяем',id);
  const navigate = useNavigate();

  const blog = useContext(PostContext);
  console.log('posts error loading in PageCreate',blog.posts, blog.posts.length, blog.error,blog.loading);
  //const post = blog.posts.find(item => item.id === id);
  //console.log('меняем это(undef=создаем)',post);

  const [posts, setPosts] = useState([]);

  const loadActual = () => {
    fetch(process.env.REACT_APP_URL, {headers: {
      'Content-Type': 'application/json', method:'GET', body: null
    }})
    .then(response => response.json())
    .then(posts => {
      setPosts(posts);
      navigate('/');
      //return <HomePage />;
    });
  }


 //-------------------
  const load = (form) => {
  fetch(process.env.REACT_APP_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form),
  }).then(result => {
      if (result.status === 204) {
          loadActual();
      }
  });
  }

  function submitForm(form) {
    let add;
    if (form.content !== '' ) {
      if (id ==='' || id=== undefined) {
      add = [...blog.posts, {id: '',content: form.content, created: Date.now()}];
      } 
      /*else{
      add = [...blog.posts, {content: form.content, created: post.created}];
      }*/
      //console.log(' submit--массив заметок после добавки нового', add);
      setPosts(add);
      console.log(' массив заметок после set!',posts);
      
      load(add[add.length-1]);
      //return navigate('/');
    }
  } 

  return (
   <>
   <article className="article">
      <h1 className="article__title">
  
      <span className="article__nav"> == Публикация ==   </span>
      <span className="article__nav"> == Фото/Видео ==   </span>
      <span className="article__nav"> == Прямой эфир ==   </span>
      <div className=' sss2'>
        <NavLink to='/' >
            &#10008;
        </NavLink>
      </div>
     
      </h1>
      <hr></hr>
      <p className="article__paragraph">
      PageCreate:
       
      Avatar: ___
      </p>
      <p className="article__paragraph">
       Имя: ___
      </p>
      
      <Form submitForm={submitForm}/>
    </article>
    
    </>
  )
}
export default PageCreateNew;
