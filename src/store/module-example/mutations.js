import { T } from "./types";

export const mutations = {
  [T.GET_COMPANY_LIST](state, companyList) {
    state.companyList = companyList;
  },
  [T.GET_USER_LIST](state, userList) {
    state.userList = userList;
  },
  [T.GET_BLACK_LIST](state, blackList) {
    state.blackList = blackList;
  },
  [T.GET_DELINQUENT_LIST](state, delinquentList) {
    state.delinquentList = delinquentList;
  },
  [T.SEARCH_COMPANY](state, { companySearchType, companySearchKeyword }) {
    console.log(`mutation [T.SEARCH_COMPANY]`);
    console.log(companySearchType);
    console.log(companySearchKeyword);
    state.companySearchType = companySearchType;
    state.companySearchKeyword = companySearchKeyword;
  },
  [T.SEARCH_USER](state, { userSearchType, userSearchKeyword }) {
    console.log(`mutation [T.SEARCH_USER]`);
    console.log(userSearchType);
    console.log(userSearchKeyword);
    state.userSearchType = userSearchType;
    state.userSearchKeyword = userSearchKeyword;
  },
  [T.SEARCH_BLACK_LIST](
    state,
    { blackListSearchType, blackListSearchKeyword }
  ) {
    console.log(`mutation [T.SEARCH_BLACK_LIST]`);
    console.log(blackListSearchType);
    console.log(blackListSearchKeyword);
    state.blackListSearchType = blackListSearchType;
    state.blackListSearchKeyword = blackListSearchKeyword;
  },
  [T.SEARCH_DELINQUENT](
    state,
    { delinquentSearchType, delinquentSearchKeyword }
  ) {
    console.log(`mutation [T.SEARCH_DELINQUENT]`);
    console.log(delinquentSearchType);
    console.log(delinquentSearchKeyword);
    state.delinquentSearchType = delinquentSearchType;
    state.delinquentSearchKeyword = delinquentSearchKeyword;
  },
  [T.CHANGE_UPDATE_COMPNAY_ID](state, updateCompanyId) {
    console.log(`mutation [T.SEARCH_USER]`);
    console.log(updateCompanyId);
    state.updateCompanyId = updateCompanyId;
  },
  [T.CHANGE_UPDATE_USER_ID](state, updateUserId) {
    console.log(`mutation [T.CHANGE_UPDATE_USER_ID]`);
    console.log(updateUserId);
    state.updateUserId = updateUserId;
  },
  [T.CHANGE_UPDATE_DELINQUENT_ID](state, updateDelinquentId) {
    console.log(`mutation [T.CHANGE_UPDATE_DELINQUENT_ID]`);
    console.log(updateDelinquentId);
    state.updateDelinquentId = updateDelinquentId;
  },
  [T.CHANGE_DELINQUENT_FILTER_TYPE](state, delinquentFilterType) {
    console.log(`mutation [T.CHANGE_DELINQUENT_FILTER_TYPE]`);
    console.log(delinquentFilterType);
    state.delinquentFilterType = delinquentFilterType;
  },
  [T.CHECK_ADMIN_PASSWORD](state, password) {
    console.log(`mutation [T.CHECK_ADMIN_PASSWORD]`);
    console.log(password);
    console.log(state.adminPassword);
    if (state.adminPassword == password) {
      state.isUnLogin = false;
      this.commit(T.CHANGE_SUCCESS_MESSAGE, "ログイン成功");
    } else {
      state.isUnLogin = true;
      this.commit(T.CHANGE_ERROR_MESSAGE, "비밀번호를 확인해주세요.");
    }
  },
  [T.DELETE_COMPANY](state, deleteId) {
    // console.log(`mutation [T.DELETE_COMPANY] ${result}`);
    state.companyList = state.companyList.filter(item => item.id != deleteId);
  },
  [T.DELETE_USER](state, deleteId) {
    // console.log(`mutation [T.DELETE_USER] ${result}`);
    state.userList = state.userList.filter(item => item.id != deleteId);
  },
  [T.DELETE_BLACK_LIST](state, deleteId) {
    // console.log(`mutation [T.DELETE_BLACK_LIST] ${result}`);
    state.blackList = state.blackList.filter(item => item.id != deleteId);
  },
  [T.DELETE_DELINQUENT](state, deleteId) {
    // console.log(`mutation [T.DELETE_DELINQUENT] ${result}`);
    state.delinquentList = state.delinquentList.filter(
      item => item.id != deleteId
    );
  },
  [T.CHANGE_TAB_INDEX](state, tabIndex) {
    state.tabIndex = tabIndex;
  },
  [T.ADD_TEAM_CARD](state, result) {
    // console.log(`mutation [T.ADD_TEAM_CARD] ${result}`);
    state.teamCards = [...state.teamCards, result];
  },
  [T.UPDATE_TEAM_CARD](state, result) {
    // console.log(`mutation [T.UPDATE_TEAM_CARD] ${result}`);
    const newList = state.teamCards.map(currentCard => {
      if (result._id == currentCard._id) {
        currentCard = result;
      }
      return currentCard;
    });
    state.teamCards = newList;
  },
  [T.CHANGE_SUCCESS_MESSAGE](state, string) {
    console.log("mutation [T.CHANGE_SUCCESS_MESSAGE] string = ", string);
    state.successMessage = string;
  },
  [T.CHANGE_ERROR_MESSAGE](state, string) {
    console.log("mutation [T.CHANGE_ERROR_MESSAGE] string = ", string);
    state.errorMessage = string;
  },
  [T.IS_READ_ONLY_UPDATE_USER_DETAIL](state, isReadOnlyUpdateUserDetail) {
    console.log(
      "mutation [T.IS_READ_ONLY_UPDATE_USER_DETAIL] isReadOnlyUpdateUserDetail = ",
      isReadOnlyUpdateUserDetail
    );
    state.isReadOnlyUpdateUserDetail = isReadOnlyUpdateUserDetail;
  }
};
