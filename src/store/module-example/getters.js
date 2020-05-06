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
    return state.delinquentList.map((delinquent,i) =>{
      let index = i+1;
      const companyId = delinquent.companyId
      let companyOfDelinquent = state.companyList.filter(item=>item.id == companyId)[0];
      if(!companyOfDelinquent){
        companyOfDelinquent = {
          companyName:"",
          bankName:"",
          branchOfficeName:"",
          bankAccountNumber:"",
          notes:""
        }
      }
      
      const userId = delinquent.userId
      let userOfDelinquent = state.userList.filter(item=>item.id == userId)[0];
      if(!userOfDelinquent){
        userOfDelinquent = {
          contractorName:"",
          propertyName:"",
          roomNumber:"",
          contractorTel:"",
          rent:"",
          comfirmPerson: "",
          emergencyTel1:""
        }
      }

      return {
        index,
        ...delinquent,
        company:{
          companyName:companyOfDelinquent.companyName,
          bankName:companyOfDelinquent.bankName,
          branchOfficeName:companyOfDelinquent.branchOfficeName,
          bankAccountNumber:companyOfDelinquent.bankAccountNumber,
          notes:companyOfDelinquent.notes
        },
        user:{
          contractorName:userOfDelinquent.contractorName,
          propertyName:userOfDelinquent.propertyName,
          roomNumber:userOfDelinquent.roomNumber,
          contractorTel:userOfDelinquent.contractorTel,
          rent:userOfDelinquent.rent,
          comfirmPerson:userOfDelinquent.comfirmPerson,
          emergencyTel1:userOfDelinquent.emergencyTel1
        }
      }
    }).filter(delinquent=>{// 검색
      let filtedCompanys = [];
      switch (state.delinquentSearchType) {
        case "멘션명":
        filtedCompanys = delinquent.user.propertyName.indexOf(state.delinquentSearchKeyword) != -1
          break;
        case "계약자명":
        filtedCompanys = delinquent.user.contractorName.indexOf(state.delinquentSearchKeyword) != -1
          break;
        case "담당자명":
        filtedCompanys = delinquent.user.comfirmPerson.indexOf(state.delinquentSearchKeyword) != -1
          break;
        default:
          break;
      }
      return filtedCompanys;
    }).sort((a,b)=>{
      return b.createdDate - a.createdDate;
    });
  },
  getAllUserList(state) {
    return state.userList.filter(user=>{// 검색
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
  changeSuccessMessage (state) {
    return state.successMessage
  },
  changeErrorMessage (state) {
    return state.errorMessage
  },
  getDelinquentDataForUpdate(state) {
    console.log("getter")
    console.log(state.updateDelinquentId)
    return state.delinquentList.filter(item=>item.id==state.updateDelinquentId).map((delinquent,i) =>{
      let index = i+1;
      const companyId = delinquent.companyId
      let companyOfDelinquent = state.companyList.filter(item=>item.id == companyId)[0];
      const userId = delinquent.userId
      let userOfDelinquent = state.userList.filter(item=>item.id == userId)[0];
      return {
        index,
        ...delinquent,
        company:{
          ...companyOfDelinquent
        },
        user:{
          ...userOfDelinquent
        }
      }
    })[0];
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
  getIsUnLogin (state) {
    return state.isUnLogin
  },
};
