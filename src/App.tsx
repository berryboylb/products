import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useMediaQuery } from "react-responsive";
import { Provider } from "react-redux";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";
import "./App.css"

//pages
import Landing from './pages/Landing';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
  return (
    <Provider store={store}>
      <Toaster position={isMobile ? "top-center" : "top-right"} />
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={<Landing/>} />
          </Routes>
        </div>
      </Router>
      </Provider>
  );
}

export default App;
