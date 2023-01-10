import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import { useAuth } from "../../hooks/useAuth";
import "./HomePage.css";
import GoogleButton from "react-google-button";

const HomePage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleDiscussionButton = () => {
    navigate("/chat");
  };
  return (
    <div
      className="home-page h-100 w-100"
      style={{ backgroundImage: `url(background.jpeg)` }}
    >
      <h1 className="title">Welcome to our chat app!</h1>
      <div className="login-container">
        <GoogleButton onClick={login} />
      </div>
    </div>
  );
};

export default HomePage;
