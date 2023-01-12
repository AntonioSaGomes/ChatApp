import React, { useEffect } from "react";

import SideMenu from "./components/SideMenu/SideMenu";
import MainContainer from "./components/MainContainer/MainContainer";
import "./App.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import HomePage from "./pages/Home/HomePage";

export const UserContext = React.createContext();

function App() {
  const auth = getAuth();

  const [user, loading, error] = useAuthState(auth);

  return (
    <div className="app-container">
      {loading && <LoadingSpinner />}
      {!loading && user && (
        <>
          <UserContext.Provider value={user}>
            <SideMenu />
            <MainContainer />
          </UserContext.Provider>
        </>
      )}
      {!loading && !user && <HomePage />}
    </div>
  );
}

export default App;
