export const getters = {
  getCompanyList(state) {
    return state.companyList.map((company,i) =>{
      let index = i+1;
      return {
        index,
        ...company,
      }
    });
  },
};
