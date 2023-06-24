import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { logout } from "../../redux/auth-reducer";
// import { authAPI } from "../../api/api";
// import (getAuthUserData)

class HeaderContainer extends React.Component {
  // componentDidMount() {
  //   this.props.getAuthUserData();
  //   console.log(this.props.getAuthUserData());
  // }
  render() {
    return <Header {...this.props} /> ;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

const mapDispatchToProps = (dispatch) => {
  return {
    // setAuthUserData: (id, email, login) => {
    //   dispatch(setAuthUserData(id, email, login));
    // },
    // getAuthUserData: () => {
    //   dispatch(getAuthUserData());
    // },
    logout: () => {
      dispatch(logout())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
