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
    <div className="home-page h-100">
      <h1 className="title">Welcome to our chat app!</h1>
      <div className="text-description">
        <p className="description">
          Our app features multiple chatrooms where you can discuss a variety of
          topics with other users.
        </p>
        <p className="description">
          These chatrooms include topics such as politics, sports, technology,
          and much more.
        </p>
        <p className="description">
          Whether you want to share your thoughts on the latest news or just
          have a casual conversation with others who share your interests, our
          chat app has something for everyone.
        </p>
        <p className="description">
          So come join the discussion and connect with other like-minded
          individuals today!
        </p>
      </div>
      <div className="login-container">
        <GoogleButton onClick={login} />
      </div>
    </div>
  );
};

export default HomePage;
