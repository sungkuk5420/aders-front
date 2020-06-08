import moment from "moment";

function pad(n, width, z) {
  z = z || "0";
  n = n + "";
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

function getGuaranteeFeePercentage(companyOfuser, guaranteeType) {
  console.log(companyOfuser);
  let returnValue = "";
  switch (guaranteeType) {
    case "緊急連絡先":
      returnValue = companyOfuser.fee1 + "%";
      break;
    case "連帯保証人":
      returnValue = companyOfuser.fee2 + "%";
      break;
    case "その他":
      returnValue = companyOfuser.fee3 + "%";
      break;
    default:
      break;
  }
  return returnValue;
}
export const getters = {
  getCompanyList(state) {
    console.log(state.companyList);
    return state.companyList
      .filter(company => {
        let filtedCompanys = [];
        switch (state.companySearchType) {
          case "代理店名":
            filtedCompanys =
              company.companyName.indexOf(state.companySearchKeyword) != -1;
            break;
          case "契約番号":
            if (state.companySearchKeyword != "") {
              filtedCompanys =
                company.approvalNumber == state.companySearchKeyword;
            } else {
              filtedCompanys = true;
            }

            break;
          case "代表者名":
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
        // 検索
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
        // 検索
        let filtedCompanys = [];
        console.log(state.delinquentSearchType);
        switch (state.delinquentSearchType) {
          case "メンション名":
            filtedCompanys =
              delinquent.user.propertyName.indexOf(
                state.delinquentSearchKeyword
              ) != -1;
            break;
          case "契約者名":
            filtedCompanys =
              delinquent.user.contractorName.indexOf(
                state.delinquentSearchKeyword
              ) != -1;
            break;
          case "担当者名":
            filtedCompanys =
              delinquent.user.comfirmPerson.indexOf(
                state.delinquentSearchKeyword
              ) != -1;
            break;
          case "家賃 未納分":
            filtedCompanys =
              delinquent.nonPayMonthly.indexOf(state.delinquentSearchKeyword) !=
              -1;
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
        // 検索
        let filtedCompanys = [];
        switch (state.userSearchType) {
          case "入居者名":
            filtedCompanys =
              user.contractorName.indexOf(state.userSearchKeyword) != -1;
            break;
          case "承認番号":
            if (state.userSearchKeyword != "") {
              filtedCompanys = user.approvalNumber == state.userSearchKeyword;
            } else {
              filtedCompanys = true;
            }
            break;
          case "メンション名":
            filtedCompanys =
              user.propertyName.indexOf(state.userSearchKeyword) != -1;
            break;
          case "承認日":
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
            novationFee: "",
            notes: ""
          };
        }
        return {
          index,
          ...user,
          createdDate: moment(user.createdDate).format("YYYY-MM-DD"),
          approvalNumber: pad(user.approvalNumber, 4),
          guaranteeFeePercentage: getGuaranteeFeePercentage(
            companyOfuser,
            user.guaranteeType
          ),
          company: {
            approvalNumber: pad(companyOfuser.approvalNumber, 4),
            companyName: companyOfuser.companyName,
            bankName: companyOfuser.bankName,
            branchOfficeName: companyOfuser.branchOfficeName,
            bankAccountNumber: companyOfuser.bankAccountNumber,
            novationFee: companyOfuser.novationFee,
            notes: companyOfuser.notes
          }
        };
      });
  },
  getAllBlackList(state) {
    return state.blackList
      .filter(user => {
        // 検索
        let filtedCompanys = [];
        switch (state.blackListSearchType) {
          case "入居者名":
            filtedCompanys =
              user.contractorName.indexOf(state.blackListSearchKeyword) != -1;
            break;
          case "承認番号":
            if (state.blackListSearchKeyword != "") {
              filtedCompanys =
                user.approvalNumber == state.blackListSearchKeyword;
            } else {
              filtedCompanys = true;
            }
            break;
          case "メンション名":
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
            novationFee: "",
            notes: ""
          };
        }
        return {
          index,
          ...user,
          createdDate: moment(user.createdDate).format("YYYY-MM-DD"),
          approvalNumber: pad(user.approvalNumber, 4),
          guaranteeFeePercentage: getGuaranteeFeePercentage(
            companyOfuser,
            user.guaranteeType
          ),
          company: {
            approvalNumber: pad(companyOfuser.approvalNumber, 4),
            companyName: companyOfuser.companyName,
            bankName: companyOfuser.bankName,
            branchOfficeName: companyOfuser.branchOfficeName,
            bankAccountNumber: companyOfuser.bankAccountNumber,
            novationFee: companyOfuser.novationFee,
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
