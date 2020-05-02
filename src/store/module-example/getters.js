export const getters = {
  getCompanyList(state) {
    console.log(state.companyList)
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
    }).sort((a,b)=>{
      return b.createdDate - a.createdDate;
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
  getAllUserList(state) {
    return state.userList;
  },
  getAllDelinquentList(state) {
    return state.delinquentList;
  },
  getAllUserList(state) {
    return state.userList.filter(user=>{
      let filtedCompanys = [];
      switch (state.userSearchType) {
        case "멘션명":
        filtedCompanys = user.propertyName.indexOf(state.userSearchKeyword) != -1
          break;
        case "계약자명":
        filtedCompanys = user.contractorName.indexOf(state.userSearchKeyword) != -1
          break;
        case "담당자명":
        filtedCompanys = user.comfirmPerson.indexOf(state.userSearchKeyword) != -1
          break;
        default:
          break;
      }
      return filtedCompanys;
    }).sort((a,b)=>{
      return a.createdDate - b.createdDate;
    }).map((user,i) =>{
      let index = i+1;
      const companyId = user.companyId
      let companyOfuser = state.companyList.filter(item=>item.id == companyId)[0];
      if(!companyOfuser){
        companyOfuser = {
          companyName:"",
          bankName:"",
          branchOfficeName:"",
          bankAccountNumber:"",
          notes:"",
        }
      }
      return {
        index,
        ...user,
        company:{
          companyName:companyOfuser.companyName,
          bankName:companyOfuser.bankName,
          branchOfficeName:companyOfuser.branchOfficeName,
          bankAccountNumber:companyOfuser.bankAccountNumber,
          notes:companyOfuser.notes,
        }
      }
    });
  },
  getDelinquentDataForUpdate(state) {
    return state.delinquentList.filter(item=>item.id==state.updateDelinquentListId)[0];
  },
  getCompanyDataForUpdate(state) {
    return state.companyList.filter(item=>item.id==state.updateCompanyId)[0];
  },
  getUserDataForUpdate(state) {
    return state.userList.filter(item=>item.id==state.updateUserId)[0];
  },
  getTabIndex(state) {
    return state.tabIndex;
  },
};
