/* eslint-disable no-unused-vars -- Remove me */
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppContext from './components/AppContext';
import NavBar from './components/NavBar';
import Auth from './pages/AuthPage';
import Home from './pages/HomePage';
import NotFound from './pages/NotFoundPage';
import './App.css';

const tokenKey = 'react-context-jwt';

export default function App() {
  const [user, setUser] = useState();
  const [token, setToken] = useState();
  const [isAuthorizing, setIsAuthorizing] = useState(true);

  useEffect(() => {
    // If user logged in previously on this browser, authorize them
    const auth = localStorage.getItem(tokenKey);
    if (auth) {
      const a = JSON.parse(auth);
      setUser(a.user);
      setToken(a.token);
    }
    setIsAuthorizing(false);
  }, []);

  if (isAuthorizing) return null;

  function handleSignIn(auth) {
    localStorage.setItem(tokenKey, JSON.stringify(auth));
    setUser(auth.user);
    setToken(auth.token);
  }

  function handleSignOut() {
    localStorage.removeItem(tokenKey);
    setUser(undefined);
    setToken(undefined);
  }

  const contextValue = { user, token, handleSignIn, handleSignOut };
  /* TODO: Wrap the `Routes` with `AppContext.Provider`
   * and pass `contextValue` as the Provider value.
   */
  return (
    <AppContext.Provider value={contextValue}>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="sign-in" element={<Auth action="sign-in" />} />
          <Route path="sign-up" element={<Auth action="sign-up" />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AppContext.Provider>
  );
}
