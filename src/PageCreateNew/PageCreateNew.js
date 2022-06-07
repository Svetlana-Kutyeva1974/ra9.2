//import {Redirect} from 'react-router';
// import { Route, Redirect } from 'react-router';
import {NavLink} from 'react-router-dom';
import './PageCreateNew.css';
const PageCreateNew = () =>
  (
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
      PageCreate: Name
      </p>
      <p className="article__paragraph">
       Текст
      </p>
      
          <NavLink to='/' className={'menu__item'}>
            <span className='sss'>Опубликовать пост</span>
          </NavLink>
         
        
     
    </article>
    
    </>
  )
export default PageCreateNew;
//<Redirect from='/PageCreateNew' to='/' />