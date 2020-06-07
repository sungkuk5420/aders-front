import { T } from "./types";
import { ajaxActions } from "./ajaxActions";

export const actions = {
  [T.GET_COMPANY_LIST]({ commit }, { cb = function() {} }) {
    console.log(`store action [T.GET_COMPANY_LIST] `);
    const db = firebase.firestore();
    db.collection("companys")
      .get()
      .then(querySnapshot => {
        let companyList = [];
        querySnapshot.forEach(doc => {
          let id = doc.id;
          companyList.push({
            id,
            ...doc.data()
          });
        });
        commit(T.GET_COMPANY_LIST, companyList);
        if (cb) {
          console.log(cb);
          cb();
        }
      });
    // console.log(`store action [T.CHANGE_MODAL_VISIBLE]`);
  },
  [T.GET_USER_LIST]({ commit }, { cb = function() {} }) {
    console.log(`store action [T.GET_USER_LIST] `);
    const db = firebase.firestore();
    db.collection("users")
      .get()
      .then(querySnapshot => {
        let userList = [];
        querySnapshot.forEach(doc => {
          let id = doc.id;
          userList.push({
            id,
            ...doc.data()
          });
        });
        commit(T.GET_USER_LIST, userList);
        if (cb) {
          console.log(cb);
          cb();
        }
      });
    // console.log(`store action [T.CHANGE_MODAL_VISIBLE]`);
  },
  [T.GET_BLACK_LIST]({ commit }, { cb = function() {} }) {
    console.log(`store action [T.GET_BLACK_LIST] `);
    const db = firebase.firestore();
    db.collection("users")
      .where("blackList", "==", true)
      .get()
      .then(querySnapshot => {
        let userList = [];
        querySnapshot.forEach(doc => {
          let id = doc.id;
          userList.push({
            id,
            ...doc.data()
          });
        });
        commit(T.GET_BLACK_LIST, userList);
        if (cb) {
          console.log(cb);
          cb();
        }
      });
    // console.log(`store action [T.CHANGE_MODAL_VISIBLE]`);
  },
  [T.GET_DELINQUENT_LIST]({ commit }, { cb = function() {} }) {
    console.log(`store action [T.GET_DELINQUENT_LIST] `);
    const db = firebase.firestore();
    db.collection("delinquents")
      .get()
      .then(querySnapshot => {
        let delinquentList = [];
        querySnapshot.forEach(doc => {
          let id = doc.id;
          delinquentList.push({
            id,
            ...doc.data()
          });
        });
        console.log(delinquentList);
        commit(T.GET_DELINQUENT_LIST, delinquentList);
        if (cb) {
          console.log(cb);
          cb();
        }
      });
  },
  [T.SEARCH_COMPANY](
    { commit },
    { companySearchType = "会社名", companySearchKeyword = "" }
  ) {
    console.log(`store action [T.SEARCH_COMPANY] `);
    console.log(companySearchKeyword);
    commit(T.SEARCH_COMPANY, { companySearchType, companySearchKeyword });
  },
  [T.SEARCH_USER](
    { commit },
    { userSearchType = "멘션명", userSearchKeyword = "" }
  ) {
    console.log(`store action [T.SEARCH_USER] `);
    console.log(userSearchKeyword);
    commit(T.SEARCH_USER, { userSearchType, userSearchKeyword });
  },
  [T.SEARCH_BLACK_LIST](
    { commit },
    { blackListSearchType = "멘션명", blackListSearchKeyword = "" }
  ) {
    console.log(`store action [T.SEARCH_BLACK_LIST] `);
    console.log(blackListSearchKeyword);
    commit(T.SEARCH_BLACK_LIST, {
      blackListSearchType,
      blackListSearchKeyword
    });
  },
  [T.SEARCH_DELINQUENT](
    { commit },
    { delinquentSearchType = "멘션명", delinquentSearchKeyword = "" }
  ) {
    console.log(`store action [T.SEARCH_DELINQUENT] `);
    console.log(delinquentSearchKeyword);
    commit(T.SEARCH_DELINQUENT, {
      delinquentSearchType,
      delinquentSearchKeyword
    });
  },
  [T.CHANGE_TAB_INDEX]({ commit }, tabIndex) {
    console.log(`store action [T.CHANGE_TAB_INDEX] `);
    console.log(tabIndex);
    commit(T.CHANGE_TAB_INDEX, tabIndex);
  },
  [T.CHANGE_UPDATE_COMPNAY_ID]({ commit }, updateCompanyId) {
    console.log(`store action [T.CHANGE_UPDATE_COMPNAY_ID] `);
    console.log(updateCompanyId);
    commit(T.CHANGE_UPDATE_COMPNAY_ID, updateCompanyId);
  },
  [T.CHANGE_UPDATE_USER_ID]({ commit }, updateUserId) {
    console.log(`store action [T.CHANGE_UPDATE_USER_ID] `);
    console.log(updateUserId);
    commit(T.CHANGE_UPDATE_USER_ID, updateUserId);
  },
  [T.CHANGE_UPDATE_DELINQUENT_ID]({ commit }, updateDelinquentId) {
    console.log(`store action [T.CHANGE_UPDATE_DELINQUENT_ID] `);
    console.log(updateDelinquentId);
    commit(T.CHANGE_UPDATE_DELINQUENT_ID, updateDelinquentId);
  },
  [T.DELETE_COMPANY]({ commit }, deleteId) {
    console.log(`store action [T.DELETE_COMPANY] `);
    console.log(deleteId);
    commit(T.DELETE_COMPANY, deleteId);
  },
  [T.DELETE_USER]({ commit }, deleteId) {
    console.log(`store action [T.DELETE_USER] `);
    console.log(deleteId);
    commit(T.DELETE_USER, deleteId);
  },
  [T.DELETE_BLACK_LIST]({ commit }, deleteId) {
    console.log(`store action [T.DELETE_BLACK_LIST] `);
    console.log(deleteId);
    commit(T.DELETE_BLACK_LIST, deleteId);
  },
  [T.DELETE_DELINQUENT]({ commit }, deleteId) {
    console.log(`store action [T.DELETE_DELINQUENT] `);
    console.log(deleteId);
    commit(T.DELETE_DELINQUENT, deleteId);
  },
  [T.CHECK_ADMIN_PASSWORD]({ commit }, password) {
    console.log(`store action [T.CHECK_ADMIN_PASSWORD] `);
    console.log(password);
    commit(T.CHECK_ADMIN_PASSWORD, password);
  },
  [T.CHANGE_SUCCESS_MESSAGE]({ commit }, text) {
    console.log(`store action [T.CHANGE_SUCCESS_MESSAGE] text = ${text}`);
    commit(T.CHANGE_SUCCESS_MESSAGE, text);
  },
  [T.CHANGE_ERROR_MESSAGE]({ commit }, text) {
    console.log(`store action [T.CHANGE_ERROR_MESSAGE] text = ${text}`);
    commit(T.CHANGE_ERROR_MESSAGE, text);
  },
  [T.CHANGE_DELINQUENT_FILTER_TYPE]({ commit }, delinquentFilterType) {
    console.log(
      `store action [T.CHANGE_DELINQUENT_FILTER_TYPE] delinquentFilterType = ${delinquentFilterType}`
    );
    commit(T.CHANGE_DELINQUENT_FILTER_TYPE, delinquentFilterType);
  },
  [T.CHECK_UPDATE_PASSWORD]({ commit }, params) {
    // console.log(`store action [T.CHECK_UPDATE_PASSWORD] `);
    ajaxActions.checkPassword(
      params,
      results => {
        // console.log(`action / CHECK_UPDATE_PASSWORD / success`);
        // console.log(" reults=", results);
        if (params.cb) {
          params.cb(results.data);
        }
      },
      res => {
        // console.log(`action / UPDATE_TEAM_CARD / error`, res);
      }
    );
  },
  [T.UPDATE_TEAM_CARD]({ commit }, params) {
    // console.log(`store action [T.UPDATE_TEAM_CARD] `);
    ajaxActions.updateTeamCard(
      params,
      results => {
        // console.log(`action / UPDATE_TEAM_CARD / success`);
        // console.log(" reults=", results);
        commit(T.UPDATE_TEAM_CARD, results.data);
        if (params.cb) {
          params.cb();
        }
      },
      res => {
        // console.log(`action / UPDATE_TEAM_CARD / error`, res);
      }
    );
  },
  [T.IS_READ_ONLY_UPDATE_USER_DETAIL]({ commit }, isReadOnlyUpdateUserDetail) {
    console.log(
      `store action [T.IS_READ_ONLY_UPDATE_USER_DETAIL] isReadOnlyUpdateUserDetail = ${isReadOnlyUpdateUserDetail}`
    );
    commit(T.IS_READ_ONLY_UPDATE_USER_DETAIL, isReadOnlyUpdateUserDetail);
  }
};
