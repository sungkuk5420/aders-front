import moment from "moment";

function pad(n, width, z) {
  z = z || "0";
  n = n + "";
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

export const getters = {
  getCompanyList(state) {
    console.log(state.companyList);
    return state.companyList
      .filter(company => {
        let filtedCompanys = [];
        switch (state.companySearchType) {
          case "대리점명":
            filtedCompanys =
              company.companyName.indexOf(state.companySearchKeyword) != -1;
            break;
          case "계약번호":
            if (state.companySearchKeyword != "") {
              filtedCompanys =
                company.approvalNumber == state.companySearchKeyword;
            } else {
              filtedCompanys = true;
            }

            break;
          case "대표자명":
            filtedCompanys =
              company.companyOnwer.indexOf(state.companySearchKeyword) != -1;
            break;
          default:
            break;
        }
        return filtedCompanys;
      })
      .sort((a, b) => {
        return b.createdDate - a.createdDate;
      })
      .map((company, i) => {
        let index = i + 1;
        return {
          index,
          ...company,
          createdDate: moment(company.createdDate).format("YYYY-MM-DD"),
          approvalNumber: pad(company.approvalNumber, 4)
        };
      });
  },
  getAllCompanyList(state) {
    return state.companyList;
  },
  getAllUserList(state) {
    console.log(state.userList);
    return state.userList;
  },
  getAllDelinquentList(state) {
    return state.delinquentList
      .map((delinquent, i) => {
        const companyId = delinquent.companyId;
        let companyOfDelinquent = state.companyList.filter(
          item => item.id == companyId
        )[0];
        if (!companyOfDelinquent) {
          companyOfDelinquent = {
            companyName: "",
            approvalNumber: "",
            debtCollectionType: "",
            bankName: "",
            branchOfficeName: "",
            bankAccountNumber: "",
            notes: ""
          };
        }

        const userId = delinquent.userId;
        let userOfDelinquent = state.userList.filter(
          item => item.id == userId
        )[0];
        if (!userOfDelinquent) {
          userOfDelinquent = {
            approvalNumber: "",
            contractorName: "",
            contractorNameEnglish: "",
            propertyName: "",
            roomNumber: "",
            contractorTel: "",
            rent: "",
            comfirmPerson: "",
            emergencyTel1: ""
          };
        }

        return {
          ...delinquent,
          createdDate: moment(delinquent.createdDate).format("YYYY-MM-DD"),
          company: {
            companyName: companyOfDelinquent.companyName,
            approvalNumber: companyOfDelinquent.approvalNumber,
            debtCollectionType: companyOfDelinquent.debtCollectionType,
            bankName: companyOfDelinquent.bankName,
            branchOfficeName: companyOfDelinquent.branchOfficeName,
            bankAccountNumber: companyOfDelinquent.bankAccountNumber,
            notes: companyOfDelinquent.notes
          },
          user: {
            approvalNumber: userOfDelinquent.approvalNumber,
            contractorName: userOfDelinquent.contractorName,
            contractorNameEnglish: userOfDelinquent.contractorNameEnglish,
            propertyName: userOfDelinquent.propertyName,
            roomNumber: userOfDelinquent.roomNumber,
            contractorTel: userOfDelinquent.contractorTel,
            rent: userOfDelinquent.rent,
            comfirmPerson: userOfDelinquent.comfirmPerson,
            emergencyTel1: userOfDelinquent.emergencyTel1
          }
        };
      })
      .filter(delinquent => {
        // 검색
        return (
          delinquent.company.debtCollectionType == state.delinquentFilterType
        );
      })
      .map((delinquent, i) => {
        let index = i + 1;
        return {
          index,
          ...delinquent
        };
      })
      .filter(delinquent => {
        // 검색
        let filtedCompanys = [];
        switch (state.delinquentSearchType) {
          case "멘션명":
            filtedCompanys =
              delinquent.user.propertyName.indexOf(
                state.delinquentSearchKeyword
              ) != -1;
            break;
          case "계약자명":
            filtedCompanys =
              delinquent.user.contractorName.indexOf(
                state.delinquentSearchKeyword
              ) != -1;
            break;
          case "담당자명":
            filtedCompanys =
              delinquent.user.comfirmPerson.indexOf(
                state.delinquentSearchKeyword
              ) != -1;
            break;
          case "승인날짜":
            filtedCompanys =
              moment(delinquent.createdDate)
                .format("YYYY-MM-DD")
                .indexOf(state.delinquentSearchKeyword) != -1;
            break;
          default:
            break;
        }
        return filtedCompanys;
      })
      .sort((a, b) => {
        return b.createdDate - a.createdDate;
      });
  },
  getAllUserList(state) {
    return state.userList
      .filter(user => {
        // 검색
        let filtedCompanys = [];
        switch (state.userSearchType) {
          case "입주자명":
            filtedCompanys =
              user.contractorName.indexOf(state.userSearchKeyword) != -1;
            break;
          case "승인번호":
            if (state.userSearchKeyword != "") {
              filtedCompanys = user.approvalNumber == state.userSearchKeyword;
            } else {
              filtedCompanys = true;
            }
            break;
          case "멘션명":
            filtedCompanys =
              user.propertyName.indexOf(state.userSearchKeyword) != -1;
            break;
          case "승인날짜":
            filtedCompanys =
              moment(user.createdDate)
                .format("YYYY-MM-DD")
                .indexOf(state.userSearchKeyword) != -1;
            break;
          default:
            break;
        }
        return filtedCompanys;
      })
      .sort((a, b) => {
        return moment(b.createdDate) - moment(a.createdDate);
      })
      .map((user, i) => {
        let index = i + 1;
        const companyId = user.companyId;
        let companyOfuser = state.companyList.filter(
          item => item.id == companyId
        )[0];
        if (!companyOfuser) {
          companyOfuser = {
            approvalNumber: "",
            companyName: "",
            bankName: "",
            branchOfficeName: "",
            bankAccountNumber: "",
            notes: ""
          };
        }
        return {
          index,
          ...user,
          createdDate: moment(user.createdDate).format("YYYY-MM-DD"),
          approvalNumber: pad(user.approvalNumber, 4),
          company: {
            approvalNumber: pad(companyOfuser.approvalNumber, 4),
            companyName: companyOfuser.companyName,
            bankName: companyOfuser.bankName,
            branchOfficeName: companyOfuser.branchOfficeName,
            bankAccountNumber: companyOfuser.bankAccountNumber,
            notes: companyOfuser.notes
          }
        };
      });
  },
  getAllBlackList(state) {
    return state.blackList
      .filter(user => {
        // 검색
        let filtedCompanys = [];
        switch (state.blackListSearchType) {
          case "입주자명":
            filtedCompanys =
              user.contractorName.indexOf(state.blackListSearchKeyword) != -1;
            break;
          case "승인번호":
            if (state.blackListSearchKeyword != "") {
              filtedCompanys =
                user.approvalNumber == state.blackListSearchKeyword;
            } else {
              filtedCompanys = true;
            }
            break;
          case "멘션명":
            filtedCompanys =
              user.propertyName.indexOf(state.blackListSearchKeyword) != -1;
            break;
          default:
            break;
        }
        return filtedCompanys;
      })
      .sort((a, b) => {
        return moment(b.createdDate) - moment(a.createdDate);
      })
      .map((user, i) => {
        let index = i + 1;
        const companyId = user.companyId;
        let companyOfuser = state.companyList.filter(
          item => item.id == companyId
        )[0];
        if (!companyOfuser) {
          companyOfuser = {
            approvalNumber: "",
            companyName: "",
            bankName: "",
            branchOfficeName: "",
            bankAccountNumber: "",
            notes: ""
          };
        }
        return {
          index,
          ...user,
          createdDate: moment(user.createdDate).format("YYYY-MM-DD"),
          approvalNumber: pad(user.approvalNumber, 4),
          company: {
            approvalNumber: pad(companyOfuser.approvalNumber, 4),
            companyName: companyOfuser.companyName,
            bankName: companyOfuser.bankName,
            branchOfficeName: companyOfuser.branchOfficeName,
            bankAccountNumber: companyOfuser.bankAccountNumber,
            notes: companyOfuser.notes
          }
        };
      });
  },
  changeSuccessMessage(state) {
    return state.successMessage;
  },
  changeErrorMessage(state) {
    return state.errorMessage;
  },
  getDelinquentDataForUpdate(state) {
    console.log("getter");
    console.log(state.updateDelinquentId);
    return state.delinquentList
      .filter(item => item.id == state.updateDelinquentId)
      .map((delinquent, i) => {
        let index = i + 1;
        const companyId = delinquent.companyId;
        let companyOfDelinquent = state.companyList.filter(
          item => item.id == companyId
        )[0];
        const userId = delinquent.userId;
        let userOfDelinquent = state.userList.filter(
          item => item.id == userId
        )[0];
        return {
          index,
          ...delinquent,
          company: {
            ...companyOfDelinquent
          },
          user: {
            ...userOfDelinquent
          }
        };
      })[0];
  },
  getCompanyDataForUpdate(state) {
    return state.companyList.filter(
      item => item.id == state.updateCompanyId
    )[0];
  },
  getUserDataForUpdate(state) {
    return state.userList.filter(item => item.id == state.updateUserId)[0];
  },
  getUpdateUserId(state) {
    return state.updateUserId;
  },
  getTabIndex(state) {
    return state.tabIndex;
  },
  getIsUnLogin(state) {
    return state.isUnLogin;
  },
  getDelinquentFilterType(state) {
    return state.delinquentFilterType;
  },
  getIsReadOnlyUpdateUserDetail(state) {
    return state.isReadOnlyUpdateUserDetail;
  },
  getUserMaxIndex(state) {
    let maxIndex = 0;
    for (let i = 0; i < state.userList.length; i++) {
      const element = state.userList[i];
      if (element.approvalNumber >= maxIndex) {
        maxIndex = element.approvalNumber;
      }
    }
    return maxIndex + 1;
  },
  getCompanyMaxIndex(state) {
    let maxIndex = 0;
    for (let i = 0; i < state.companyList.length; i++) {
      const element = state.companyList[i];
      if (element.approvalNumber >= maxIndex) {
        maxIndex = element.approvalNumber;
      }
    }
    return maxIndex + 1;
  }
};
