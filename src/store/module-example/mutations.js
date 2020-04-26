import { T } from "./types";

export const mutations = {
  [T.GET_COMPANY_LIST](state,companyList) {
    state.companyList = companyList;
  },
  [T.GET_USER_LIST](state,userList) {
    state.userList = userList;
  },
  [T.SEARCH_COMPANY](state, {companySearchType,companySearchKeyword}) {
    console.log(`mutation [T.SEARCH_COMPANY]`)
    console.log(companySearchType)
    console.log(companySearchKeyword)
    state.companySearchType = companySearchType;
    state.companySearchKeyword = companySearchKeyword;
  },
  [T.CHANGE_UPDATE_COMPNAY_ID](state, updateCompanyId) {
    // console.log(`mutation [T.CHANGE_UPDATE_COMPNAY_ID] ${result}`);
    state.updateCompanyId = updateCompanyId;
  },
  [T.DELETE_COMPANY](state, deleteId) {
    // console.log(`mutation [T.DELETE_COMPANY] ${result}`);
    state.companyList = state.companyList.filter(item=>item.id != deleteId);
  },
  [T.CHANGE_TAB_INDEX](state,tabIndex) {
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
  }
};
