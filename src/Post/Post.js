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
 const navigate = new useNavigate();
 console.log('navigatePOST-----', navigate);
 console.log('ddannie POST-----', id, content,created, onClick);
  return (
    <article className="article" onClick={()=>onClick(id)} >
      <h1 className="article__title">НОВЫЙ ПОСТ</h1>
      <p className="article__paragraph">
        `element`{id}
      </p>
      <div className="article__content">{content}</div>
      <div className="article__date">Создано: {moment(new Date(created)).startOf('day').fromNow()}</div>
    </article>
  )
}
export default Post;
/*
moment("20111031", "YYYYMMDD").fromNow(); // 11 years ago
moment("20120620", "YYYYMMDD").fromNow(); // 10 years ago
moment().startOf('day').fromNow();        // a minute ago
moment().endOf('day').fromNow();          // in a day
moment().startOf('hour').fromNow();      // minuty ago
*/