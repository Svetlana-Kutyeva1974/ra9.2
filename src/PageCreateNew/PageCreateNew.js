//import {Redirect} from 'react-router';
// import { Route, Redirect } from 'react-router';
import {NavLink} from 'react-router-dom';
// import { useEffect, useState } from 'react';
import { useState } from 'react';
//import {nanoid} from 'nanoid';
import './PageCreateNew.css';
import Form from '../Form/Form';
import PostContext from '../PostContext/PostContext';
import {useContext} from 'react';
//import {now} from 'moment';

const PageCreateNew = () =>{

  const blog = useContext(PostContext);
  console.log('posts error loading in PageCreate',blog.posts, blog.posts.length, blog.error,blog.loading);


const [posts, setPosts] = useState([]);

const loadActual = () => {
  console.log(process.env.REACT_APP_URL);
  fetch(process.env.REACT_APP_URL, {headers: {
    'Content-Type': 'application/json', method:'GET', body: null
  }})
  .then(response => response.json())
  .then(posts => {
  setPosts(posts);
  console.log(' массив заметок после загрузки и set',posts);
  });
}


//-------------------
const load = (form) => {
//fetch(process.env.REACT_APP_NOTES_URL, {
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
  if (form.content !== '') {
    const add = [...blog.posts, {id: blog.posts.length+1, content: form.content, created: Date.now()}];
    console.log(' массив заметок после добавки нового', add);
    setPosts(add);
    console.log(' массив заметок после submit',posts);
    load(add[add.length-1]);
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
      <hr></hr> 
      Avatar: ___
      </p>
      <p className="article__paragraph">
       Имя: ___
      </p>
      <hr></hr> 
      <Form submitForm={submitForm}/>
    </article>
    
    </>
  )
}
export default PageCreateNew;
//<Redirect from='/PageCreateNew' to='/' />

/*
<Form submitForm={submitForm}/>
*/

/*
 <NavLink to='/' className={'menu__item'}>
            <span className='sss'>Опубликовать пост</span>
          </NavLink>
*/