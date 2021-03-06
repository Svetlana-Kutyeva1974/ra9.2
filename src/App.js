import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {Navigate} from 'react-router-dom';
import PageCreateNew from './PageCreateNew/PageCreateNew';
import PageViewPost from './PageViewPost/PageViewPost';
import HomePage from './HomePage/HomePage';
import PostProvider from './PostProvider/PostProvider';

 const App = () =>
  (
  <>  
    <PostProvider>
          <div className="page">
            <Routes>
              <Route path="/posts" element={<HomePage />} />
              <Route path="/" exact element={<Navigate replace to="/posts" />} />
              <Route path="/posts/new" element={<PageCreateNew/>} />
              <Route path="/posts/:id" element={<PageViewPost/>} />
              <Route path="/postsChange/:id" element={<PageCreateNew/>} />
              <Route path="*" element={<HomePage />}/>
            </Routes>
          </div>
    </PostProvider>
  </>  
  )

export default App;
