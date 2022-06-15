import React from 'react';
import {Routes, Route} from 'react-router-dom';
import PageCreateNew from './PageCreateNew/PageCreateNew';
import PageViewPost from './PageViewPost/PageViewPost';
import PageChange from './PageChange/PageChange';
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
              <Route path="/postsChange/:id" element={<PageChange/>} />
              <Route path="*" element={<Page404/>}/>
              
            </Routes>
          </div>
    </PostProvider>
  </>  
  )

export default App;
