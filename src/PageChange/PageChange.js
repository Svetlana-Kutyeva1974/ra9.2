import {NavLink} from 'react-router-dom';
import { useState } from 'react';
import './PageChange.css';
import Form from '../Form/Form';
//import HomePage from '../HomePage/HomePage';
import PostContext from '../PostContext/PostContext';
import {useContext} from 'react';
import {useNavigate} from 'react-router';
import { useParams} from 'react-router-dom';

const PageChange = ({id}) => {
  console.log('изменяем',id);
  const navigate = useNavigate();
  const params = useParams();//console.log('params change====', params, params.id);
 

  const blog = useContext(PostContext);
  console.log('posts in PageChange',blog.posts, blog.posts.length, blog.error,blog.loading);
  const post = blog.posts.find(item => item.id === Number(params.id));//String(item.id) === params.id
  const postInd= blog.posts.findIndex(item => item.id === Number(params.id));//
  console.log('меняем это',post);

  const [posts, setPosts] = useState([]);

  const loadActual = () => {
    console.log(process.env.REACT_APP_URL);
    fetch(process.env.REACT_APP_URL, {headers: {
      'Content-Type': 'application/json', method:'GET', body: null
    }})
    .then(response => response.json())
    .then(posts => {
    setPosts(posts);
    navigate('/');
    //return (<HomePage />);
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
    
    if (form.content !== '' ) {      
      blog.posts[postInd].content = form.content;
      console.log(' submit--массив posts  после Change', blog.posts);
      setPosts(blog.posts);
      console.log(posts);     
      //console.log(' загружаем это на сервер',blog.posts[postInd]);
      load(blog.posts[postInd]);
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
      PageChange:
       
      Avatar: ___
      </p>
      <p className="article__paragraph">
       Имя: ___
      </p>
      
      <Form submitForm={submitForm} id={params.id}/>

    </article>
    
    </>
  )
}
export default PageChange;

