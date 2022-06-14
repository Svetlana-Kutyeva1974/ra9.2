import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import {useNavigate} from 'react-router';
import './Form.css';

function Form({ submitForm }) {
  const navigate = useNavigate();
  const handlerClick = () => navigate(`/`);

  const [form, setForm] = useState({id: '', content: '', created: new Date()});

  function inputForm(evt) {
    setForm((prev) => {
      if (evt.target.name === 'post') {
        return { ...prev, content: evt.target.value};
      }
    })
  } 

  function handleSubmit(e) {
    e.preventDefault();
    submitForm(form);
    setForm({id: '', post: '', created: '2022-11-12'});
    handlerClick();
  }


  return (
    <>
    <form className='input-form'>
      <div className='form-name'>
        <label htmlFor="Name">New Post</label>
        <textarea 
          id ='post' 
          name='post' 
          value={form.post}
          onChange={inputForm} required />
      </div>
      
    </form>
    <NavLink to='/' className={'menu__item'}>
    <button className='btn-add2' onClick={handleSubmit}>Опубликовать</button>
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