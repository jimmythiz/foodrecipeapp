import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';


import Layout from './Pages/Layout/Layout'
import HomePage from './Pages/Homepage/HomePage'
import RecipePage from './Pages/Recipepage/RecipePage'
import AddRecipe from './Pages/Addrecipe/AddRecipe'
import Blog from './Pages/Blog/Blog'
import About from './Pages/About/About'
import Notfound from './Pages/Notfound/Notfound'
import Login from './Pages/Login/Login'
import Signup from './Pages/Signup/Signup'
import SingleRecipe from './Components/SingleRecipe/SingleRecipe'
import SingleBlog from './Components/SingleBlog/SingleBlog'

const router = createBrowserRouter([
  { path:"/",
    element:<Layout/>,
    children : [
      {path:"/", element:<HomePage/>},
      {path:"/recipepage", element:<RecipePage/>},
      {path:"/addrecipe", element:<AddRecipe/>},
      {path:"/blog", element:<Blog/>},
      {path:"/about", element:<About/>},
      {path:"/login", element:<Login/>},
      {path:"/signup", element:<Signup/>},
      {path:"/recipepage/:id", element:<SingleRecipe/>},
      {path:"/blog/:id", element:<SingleBlog/>},
      { path: "/about", element: <About /> },
      {path:"*", element:<Notfound/>}
    ]
    },
])
function App() {
  
  return (
    <>
      <RouterProvider router={router}/>
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
  )
}

export default App
