import React from 'react';
import {Routes, Route} from 'react-router-dom';
//import {HomePage} from './HomePage/HomePage.js';
//import {DriftPage} from './DriftPage/DriftPage';
import PageCreateNew from './PageCreateNew/PageCreateNew';
import PageViewPost from './PageViewPost/PageViewPost';
import HomePage from './HomePage/HomePage';
import PostProvider from './PostProvider/PostProvider';
import Page404 from './Page404/Page404';



 const App = () =>
  (
  <>  
    <PostProvider>
          <div className="page">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/posts/new" element={<PageCreateNew/>} />
              <Route path="/posts/:id" element={<PageViewPost/>} />
              <Route path="*" element={<Page404/>}/>
              
            </Routes>
          </div>
    </PostProvider>
  </>  
  )

export default App;
//<Router.Redirect to="/"></Router.Redirect>
//import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
//<Redirect from='/CreatePost' to='/Register' />

//  <Route path="/drift" component={() => DriftPage} />
