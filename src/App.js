import "./App.css";
import React, { Component, Suspense } from "react";
import { connect } from "react-redux";

import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import Information from "./components/Information/Information";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import FriendsContainer from "./components/Friends/FriendsContainer";
import ProfileContainer, { withRouter } from "./components/Profile/ProfilleContainer";
import LoginPage from "./components/Login/Login";
import { initializeApp } from "./redux/app-reducer";

import { Routes, Route } from "react-router-dom";
import { compose } from "redux";
import Preloader from "./components/common/Preloader/Preloader";

// import DialogsContainer from "./components/Dialogs/DialogsContainer";
const DialogsContainer = React.lazy(() => import ("./components/Dialogs/DialogsContainer"))


class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if(!this.props.inintialized) {
      return <Preloader/>
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/profile/*" element={<ProfileContainer />} />
            <Route path="/profile/:userId" element={<ProfileContainer />} />
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/users" element={<FriendsContainer />} />
            <Route path="/information" element={<Information />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
          </Suspense>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  inintialized: state.app.inintialized
})

const mapDispatchToProps = (dispatch) => {
  return {
    initializeApp: () => {
      dispatch(initializeApp());
    }
};
};

export default compose (withRouter,connect(mapStateToProps, mapDispatchToProps))(App);