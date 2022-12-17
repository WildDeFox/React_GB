import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux'

import { firbaseAuth } from './services/firebase'

import * as profileActions from './redux/actions/profileAC'

import Navbar from './components/Navbar/Navbar'
import PageHome from './pages/Home/PageHome'
import PagePost from './pages/Post/PagePost'
import PageInfo from './pages/Info/PageInfo'
import PageCards from './pages/Cards/PageCards'
import PageProfile from './pages/Profile/PageProfile'
import Articles from './pages/Articles/PageArticles'
import Signin from './pages/Signin/PageSignin'
import Signup from './pages/Signup/PageSignup'

import { PrivateRoute } from './components/routes/PrivateRoute'

import './App.css';

function App () {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubcribe = firbaseAuth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(profileActions.auth(true))
      } else {
        dispatch(profileActions.auth(false))
      }
    })

    return unsubcribe
  }, [dispatch])

  console.log('App');

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <section className="list App-content">
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="form" element={<PagePost />} />
          <Route path="posts">
            <Route path="list" element={<PageCards />} />
            <Route path=":myId" element={<PageInfo />} />
          </Route>
          <Route
            path="profile"
            element={<PrivateRoute component={<PageProfile />} />}
          />
          <Route path="articles" element={<Articles />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />

          <Route path="*" element={<h2>404 Page not found</h2>} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
