import { T } from "./types";

export const mutations = {
  [T.GET_COMPANY_LIST](state,companyList) {
    state.companyList = companyList;
  },
  [T.SEARCH_COMPANY](state, {companySearchType,companySearchKeyword}) {
    console.log(`mutation [T.SEARCH_COMPANY]`)
    console.log(companySearchType)
    console.log(companySearchKeyword)
    state.companySearchType = companySearchType;
    state.companySearchKeyword = companySearchKeyword;
  },
  [T.INSERT_TEAM_CARD_DATA](state, updateTeamCardData) {
    // console.log(`mutation [T.INSERT_TEAM_CARD_DATA] ${result}`);
    state.updateTeamCardData = updateTeamCardData;
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
