import {NavLink} from 'react-router-dom';
import { useState } from 'react';
import './PageCreateNew.css';
import Form from '../Form/Form';
import PostContext from '../PostContext/PostContext';
import {useContext} from 'react';
import {useNavigate} from 'react-router';
import { useParams} from 'react-router-dom';

//функция создает или меняет пост

const PageCreateNew = ({id = ''}) => {
  const navigate = useNavigate();
  const params = useParams();
  id = params.id;// id if change
  const idValue = (id === '') ? '' : id;
  const title = (id === '' || id === undefined) ? 'Page Create' : 'PageChange';

  const blog = useContext(PostContext);
  //console.log('posts error loading in PageCreate',blog.posts, blog.posts.length, blog.error,blog.loading);

  const [posts, setPosts] = useState([]);

  const loadActual = () => {
    fetch(process.env.REACT_APP_URL, {headers: {
      'Content-Type': 'application/json', method:'GET', body: null
    }})
    .then(response => response.json())
    .then(posts => {
      setPosts(posts);
      navigate('/');
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
      if (id ==='' || id=== undefined) {//create post
      add = [...blog.posts, {id: '',content: form.content, created: Date.now()}];
      
      setPosts(add);
      //console.log(' массив  после set!',posts);
      load(add[add.length-1]);
    } 
      else{//change post

        const post = blog.posts.find(item => item.id === Number(params.id));//String(item.id) === params.id
        const postInd= blog.posts.findIndex(item => item.id === Number(params.id));//
        console.log('меняем это',post);

        blog.posts[postInd].content = form.content;
        setPosts(blog.posts);
        console.log(posts);     
      
        load(blog.posts[postInd]);
      }      
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
      {title}___
       
      Avatar: ___
      </p>
      <p className="article__paragraph">
       Имя: ___
      </p>
      <Form submitForm={submitForm} id={idValue}/>
    </article>
    </>
  )
}
export default PageCreateNew;
