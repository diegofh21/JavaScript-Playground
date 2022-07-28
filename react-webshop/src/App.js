import React, { useEffect, useReducer } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './views/Home/Home';
import GuestHome from './views/GuestHome/GuestHome';
import Login from './views/Auth/Login';
import Register from './views/Auth/Register';

import { AuthContext } from './context/AuthContext';

export default function App() {
  const initialLoginState = {
    isLoading: true,
    token: null
  }

  const loginReducer = (prevState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case 'RESTORE_TOKEN':
        return {
          ...prevState,
          token: action.token,
          isLoading: false
        }
      case 'LOGIN':
        return {
          ...prevState,
          token: action.token,
          isLoading: false
        }
      case 'LOGOUT':
        return {
          ...prevState,
          token: action.token,
          isLoading: false
        }
    }
  }

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        try {
          console.log("TOKEN ==> " + data);
          window.localStorage.setItem("token", data)
        }
        catch (e) {
          console.log(e)
        }

        dispatch({ type: 'LOGIN', token: data });
      },
      signOut: () => {
        window.localStorage.removeItem("token");
        dispatch({ type: 'LOGOUT', token: null });
      }
    }),
    []
  );

  useEffect(() => {
    const checkToken = async () => {
      let userToken;

      try {
        userToken = window.localStorage.getItem("token");
      }
      catch (e) {
        console.log(e)
      }

      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    }

    checkToken();
  }, [])

  return (
    <React.StrictMode>
      {
        (loginState.isLoading) ? <>
          <div className="text-center">
            <div class="lds-spinner mt-5"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          </div>
        </> :
          <>
            <AuthContext.Provider value={authContext}>
              <BrowserRouter>
                <Routes>
                  {
                    (loginState.token === null) ? <>
                      <Route path="/" element={<GuestHome />} />
                      <Route path="/login" element={<Login />} />
                      <Route path="/register" element={<Register />} />
                      <Route path="*" element={
                        <h1 className='text-center mt-5'>404 La pagina que estas buscando no esta disponible 😥</h1>
                      }></Route>
                    </> : <>
                      <Route path="/home" element={<Home />} />
                      <Route path="*" element={
                        <h1 className='text-center mt-5'>404 La pagina que estas buscando no esta disponible 😥</h1>
                      }></Route>
                    </>
                  }
                </Routes>
              </BrowserRouter>
            </AuthContext.Provider>
          </>
      }
    </React.StrictMode>
  )
}