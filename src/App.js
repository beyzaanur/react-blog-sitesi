import 'App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from 'Pages/Home';
import About from 'Pages/About';
import GirisKayit from 'components/girisKayit';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MainLayout from 'layout/mainLayout';
import LoginLayout from 'layout/loginLayout';
import Profile from 'Pages/Profile';
import { PrivateRoute } from 'components/PrivateRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import "nes.css/css/nes.min.css";
import Postlar from 'components/Post/Postlar'
import ImageAndTextExample from 'components/Post/Blogs';
import BlogsList from 'components/Post/Actions';
import Tests from 'Pages/Tests';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path='' element={<MainLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/hakkında' element={<About />} />
            <Route path='/postlar' element={<Postlar />} />
            <Route path='/post/:id' element={<ImageAndTextExample />} />
            <Route path='/edit' element={<BlogsList/>}></Route>
            <Route path='/test' element={<Tests/>}></Route>


            <Route
              path="/profil"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
          </Route>
          <Route path='' element={<LoginLayout />}>
            <Route path='/giris' element={<GirisKayit />} />
          </Route>
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;