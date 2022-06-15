import './Post.css';
import moment from 'moment';
import 'moment/locale/ru';

moment.locale('ru');

const Post = (props) => {
  const {id, content, created, onClick} = props;
  return (
    <article className="article" onClick={()=>onClick(id)} >
      <h1 className="article__title">ПОСТ# {id}</h1>
      <p className="article__paragraph">
        `any element`
      </p>
      <div className="article__content">{content}</div>
      <div className="article__date">Создано: {moment(new Date(created)).startOf('day').fromNow()}</div>
    </article>
  )
}
export default Post;