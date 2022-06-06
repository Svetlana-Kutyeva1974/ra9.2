const PageViewPost = (props) =>
  (
    <article className="article">
      <h1 className="article__title">ВЫБРАН ПОСТ 
      {props.id}</h1>
      <p className="article__paragraph">
        Страница с выбранным постом
      </p>
    </article>
  )

export default PageViewPost

