import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  requesrUsers
} from "../../redux/friends-reducer";
import Friends from "./Friends";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
import { getPageSize, getTotalUsersCount,getCurrentPage,getIsFetching,getFollowingInProgress, getUsers } from "../../redux/friends-selectors";

class FriendsContainer extends React.Component {
  componentDidMount() {
    let {currentPage, pageSize} = this.props;
    this.props.getUsers(currentPage, pageSize);
  }

  onPageChanged = (pageNumber) => {
    let {pageSize} = this.props;
    this.props.getUsers(pageNumber, pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Friends
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProgress={this.props.followingInProgress}
        />
        ;
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  };
};



let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(follow(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollow(userId));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPage(pageNumber));
    },
    toggleFollowingProgress: (isFetching, userId) => {
      dispatch(toggleFollowingProgress(isFetching, userId));
    },
    getUsers: (currentPage, pageSize) => {
      dispatch(requesrUsers(currentPage, pageSize))
    }
  };
};

export default compose (
  connect(mapStateToProps, mapDispatchToProps)(FriendsContainer),
)