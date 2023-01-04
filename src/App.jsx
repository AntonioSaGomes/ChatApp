import React from "react";

import SideMenu from "./components/SideMenu/SideMenu";
import MainContainer from "./components/MainContainer/MainContainer";
import "./App.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import Login from "./pages/Login/Login";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";

function App() {
  const auth = getAuth();

  const [user, loading, error] = useAuthState(auth);

  return (
    <div className="app-container">
      {loading && <LoadingSpinner />}
      {!loading && user && (
        <>
          <SideMenu />
          <MainContainer />
        </>
      )}
      {!loading && !user && <Login />}
    </div>
  );
}

export default App;
