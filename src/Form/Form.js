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
  
  console.log('id form+ titl',id, title, title2);
  
  const navigate = useNavigate();
  const handlerClick = () => navigate(`/`);
  
  let postCurrent = {};

  const blog = useContext(PostContext);

  const [form, setForm] = useState({id: '', content: '', created: Date.now()});
  

  if (id !== '') {
    postCurrent = blog.posts.find(item => item.id === Number(id));//String(item.id) =id
    console.log('posts Change Form', id, blog.posts,'postCurrent\n', 
    postCurrent, postCurrent.content, postCurrent.id, postCurrent.created);
    /*setForm((prev)=>{
    return {...prev, id: id, content: postCurrent.content, created: postCurrent.created};
    })*/
  }
  
  const val = (id === '') ? '' : postCurrent.content;
  //const val2 = (id === '') ? 'post' : '';

  console.log('value form',val);

  function inputForm(evt) {
    console.log('evt+ evt name form',evt,evt.target.name );
    setForm((prev) => {
      if (evt.target.name === 'post' && id ==='') {
        console.log('evt+ evt name form id=null',evt.target.name );
        return { ...prev, content: evt.target.value, created: new Date()};
      }
      else if(evt.target.name === 'post' && id !=='') {
        console.log('evt name form id=id',evt.target.name );
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
          value={form.post}
          placeholder={val} 
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