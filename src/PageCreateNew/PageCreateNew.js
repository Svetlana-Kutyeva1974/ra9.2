//import {Redirect} from 'react-router';
// import { Route, Redirect } from 'react-router';
import {NavLink} from 'react-router-dom';
import './PageCreateNew.css';
const PageCreateNew = () =>
  (
   <>
   <article className="article">
      <h1 className="article__title"> Публикация
      <span> Фото/Видео   </span>
      <span> Прямой эфир   </span>
      <div className='sss2'>
        <NavLink to='/' >
            &#10008;
          </NavLink>
      </div>
      </h1>
     
      <p className="article__paragraph">
       ghb
      </p>
      <p className="article__paragraph">
      PageCreate
      </p>
          <NavLink to='/' className={'menu__item'}>
            <span className='sss'>Опубликовать пост</span>
          </NavLink>
         
        
     
    </article>
    
    </>
  )
export default PageCreateNew;
//<Redirect from='/PageCreateNew' to='/' />