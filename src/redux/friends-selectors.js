import { createSelector } from "reselect";

const getUsersSelector = (state) => {
  return state.friendsPage.users;
};
export const getUsers = createSelector(getUsersSelector, (users) => {
  return users.filter((u) => true);
});
export const getPageSize = (state) => {
  return state.friendsPage.pageSize;
};
export const getTotalUsersCount = (state) => {
  return state.friendsPage.totalUsersCount;
};
export const getCurrentPage = (state) => {
  return state.friendsPage.currentPage;
};
export const getIsFetching = (state) => {
  return state.friendsPage.isFetching;
};
export const getFollowingInProgress = (state) => {
  return state.friendsPage.followingInProgress;
};
