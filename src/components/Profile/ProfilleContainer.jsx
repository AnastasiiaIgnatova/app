import React from "react";
import { connect } from "react-redux";
import "./Profile.css";
import Profile from "./Profille";
import {
  getUserProfile,
  getStatus,
  updateStatus,
  savePhoto,
  saveProfile,
} from "../../redux/profile-reducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { compose } from "redux";
import { useEffect } from "react";

export function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProp;
}
const ProfileContainer = (props) => {
  // debugger;
  let navigate = useNavigate();
  useEffect(() => {
    let userId = props.router.params.userId;
    if (!userId) {
      userId = props.authorizedUserId;
      if (!userId) {
        navigate("/login");
      }
    }
    props.getUserProfile(userId);
    props.getStatus(userId);
  }, [props.router.params.userId]);

  return (
    <div>
      <Profile
        isOwner={!props.router.params.userId}
        {...props}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        savePhoto={props.savePhoto}
        saveProfile={props.saveProfile}
      />
    </div>
  );
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.id,
  isAuth: state.auth.isAuth,
});

let mapDispatchToProps = (dispatch) => {
  return {
    getUserProfile: (userId) => {
      dispatch(getUserProfile(userId));
    },
    getStatus: (userId) => {
      dispatch(getStatus(userId));
    },
    updateStatus: (status) => {
      dispatch(updateStatus(status));
    },
    savePhoto: (file) => {
      dispatch(savePhoto(file));
    },
    saveProfile: (profile) => {
      return dispatch(saveProfile(profile));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(ProfileContainer);
