import './App.css';
import Posts from './components/posts';
import {Routes,Route} from 'react-router-dom';
import Comments from './components/comments';
import Users from './components/users';
import UpdatePost from './components/updatepost';
import AddPost from './components/addpost';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Posts />}></Route>
        <Route path='/posts/:postId' element={<Comments />}></Route>
        <Route path='/users' element={<Users />}></Route>
        <Route path='/update/:postId' element={<UpdatePost />}></Route>
        <Route path='/addPost' element={<AddPost />}></Route>
      </Routes>
    </div>
  );
}

export default App;
