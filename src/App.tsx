import React from 'react';
import './App.css';
import Posts from './components/posts';
import {Routes,Route} from 'react-router-dom';
import Comments from './components/comments';
import Users from './components/users';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Posts />}></Route>
        <Route path='/posts/:postId' element={<Comments />}></Route>
        <Route path='/users' element={<Users />}></Route>
      </Routes>
    </div>
  );
}

export default App;
