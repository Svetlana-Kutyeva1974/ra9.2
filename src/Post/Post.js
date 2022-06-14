//import PropTypes from 'prop-types';
//import React, {useState } from 'react';
//import Details from '../Details/Details';
import './Post.css';
import { useNavigate } from 'react-router';
import moment from 'moment';
import 'moment/locale/ru';


moment.locale('ru');

const Post = (props) => {
 const {id, content, created, onClick} = props;
 const navigate = useNavigate();
 console.log('navigatePOST-----', navigate);
 console.log('ddannie POST-----', id, content,created, onClick);
 
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