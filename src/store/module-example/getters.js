export const getters = {
  getCompanyList(state) {
    return state.companyList.filter(company=>{
      let filtedCompanys = [];
      switch (state.companySearchType) {
        case "회사명":
        filtedCompanys = company.companyName.indexOf(state.companySearchKeyword) != -1
          break;
        case "대표자명":
        filtedCompanys = company.companyOnwer.indexOf(state.companySearchKeyword) != -1
          break;
        case "대리점 구분":
        filtedCompanys = company.companyType.indexOf(state.companySearchKeyword) != -1
          break;
      
        default:
          break;
      }
      return filtedCompanys;
    }).map((company,i) =>{
      let index = i+1;
      return {
        index,
        ...company,
      }
    });
  },
  getAllCompanyList(state) {
    return state.companyList;
  },
};
