import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import Layout from './Pages/Layout/Layout';
import HomePage from './Pages/Homepage/HomePage';
import RecipePage from './Pages/Recipepage/RecipePage';
import AddRecipe from './Pages/Addrecipe/AddRecipe';
import Blog from './Pages/Blog/Blog';
import About from './Pages/About/About';
import Notfound from './Pages/Notfound/Notfound';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import SingleRecipe from './Components/SingleRecipe/SingleRecipe';
import SingleBlog from './Components/SingleBlog/SingleBlog';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipepage" element={<RecipePage />} />
            <Route path="/addrecipe" element={<AddRecipe />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/recipepage/:id" element={<SingleRecipe />} />
            <Route path="/blog/:id" element={<SingleBlog />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Notfound />} />
          </Route>
        </Routes>
      </Router>

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover={false}
        draggable
      />
    </>
  );
}

export default App;
