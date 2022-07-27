import React from "react";
import './home.css'
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";
import Search from "./Search";

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <p>About</p>
          <p>Store</p>
        </div>

        <div className="home__headerRight">
          <p>Gmail</p>
          <p>Images</p>
          <AppsIcon />
          <Avatar />
        </div>
      </div>

      <div className="home__body">
        <div className="home__body__image">
        <img
          src="https://www.google.com.eg/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="google"
        />
        <p>By Eng : Ayman Tarek</p>

        </div>


        <div className="home__inputContainer">
            <Search />
        </div>
      </div>
    </div>
  );
};

export default Home;
