import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import {useNavigate} from 'react-router';
import PostContext from '../PostContext/PostContext';
import './Form.css';
import { useContext } from 'react';

function Form({ submitForm, id='' }) {
  const title = (id==='') ? `New Post`: `Change Post`;
  const title2 = (id ==='') ? `Опубликовать`: `Сохранить`;
  let formContent = ``;

  const navigate = useNavigate();
  const handlerClick = () => navigate(`/`);
  
  let postCurrent = {};
  const blog = useContext(PostContext);  

  if (id !== '') {
    postCurrent = blog.posts.find(item => item.id === Number(id));//String(item.id) =id
    console.log('posts Change Form', id, blog.posts,'postCurrent\n', 
    postCurrent, postCurrent.content, postCurrent.id, postCurrent.created);
    formContent = postCurrent.content;
  }

  const [form, setForm] = useState({id: '', content: formContent, created: Date.now()});
  const val = (id === '') ? '' : postCurrent.content;

  function inputForm(evt) {
    console.log('evt+ evt name form',evt,evt.target.name );
    setForm((prev) => {
      if (evt.target.name === 'post' && id ==='') {
        //console.log('evt+ evt name form id=null',evt.target.name );
        return { ...prev, content: evt.target.value, created: new Date()};
      }
      else if(evt.target.name === 'post' && id !=='') {
        //console.log('evt name form id=id',evt.target.name );
        return { ...prev, id: id, content: evt.target.value, created:postCurrent.created };
      }
    })
  } 

  function handleSubmit(e) {
    e.preventDefault();
    submitForm(form);
    setForm({id: '', post: '', created: '2022-11-12'});
    handlerClick();
    //return navigate(`/`);
  }


  return (
    <>
    <form className='input-form'>
      <div className='form-name'>
        <label htmlFor="Name">{title}</label>
        <textarea 
          id ='post' 
          name='post' 
          value={form.content}
          onChange={inputForm} required />
      </div>
      
    </form>
    <NavLink to='/' className={'menu__item'}>
    <button className='btn-add2' onClick={handleSubmit}>{title2}</button>
    </NavLink>
    </>
  )
}

Form.propTypes = {
  form: PropTypes.object,
  inputForm: PropTypes.func,
  submitForm: PropTypes.func,
}

export default Form;
// <button className='btn-add2' onClick={handleSubmit}>&#10148;</button>

/*placeholder={val}*/ 