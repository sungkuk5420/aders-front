<template>
  <div class="user-list-page">
    <div class="search-wrapper">
      <a-select v-model="userSearchType" @change="onSearch">
        <a-select-option value="입주자명">입주자명</a-select-option>
        <a-select-option value="승인번호">승인번호</a-select-option>
        <a-select-option value="멘션명">멘션명</a-select-option>
        <a-select-option value="승인날짜">승인날짜</a-select-option>
      </a-select>
      <a-input-search
        placeholder="키워드 입력"
        size="large"
        v-model="userSearchKeyword"
        @search="onSearch"
        @change="onSearch"
      >
        <a-button slot="enterButton" type="primary" icon="search" :loading="searchLoading">검색</a-button>
      </a-input-search>
      <a-button type="primary">상세검색</a-button>
      <a-button type="primary" @click="moveAddUserPage">입주자 등록</a-button>
    </div>
    <div class="content">
      <div class="row" style="margin-bottom:10px;">
        <a-button type="primary" style="margin-left:auto;" @click="exportExcel">Excel 다운로드</a-button>
      </div>
      <UserTable/>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { T } from "../store/module-example/types";
import UserTable from "../components/UserTable.vue";
export default {
  components: {
    UserTable
  },
  data() {
    return {
      userSearchType: "입주자명",
      userSearchKeyword: "",
      searchLoading: false
    };
  },
  computed: {
    ...mapGetters({
      userList: "getAllUserList"
    })
  },
  watch: {},
  mounted() {},
  methods: {
    exportExcel() {
      console.log("export!");
      // SheetをWorkbookに追加する
      // 参照：https://github.com/SheetJS/js-xlsx/issues/163
      function sheet_to_workbook(sheet /*:Worksheet*/, opts) /*:Workbook*/ {
        var n = opts && opts.sheet ? opts.sheet : "Sheet1";
        var sheets = {};
        sheets[n] = sheet;
        return { SheetNames: [n], Sheets: sheets };
      }

      // ArrayをWorkbookに変換する
      // 参照：https://github.com/SheetJS/js-xlsx/issues/163
      function aoa_to_workbook(
        data /*:Array<Array<any> >*/,
        opts
      ) /*:Workbook*/ {
        return sheet_to_workbook(XLSX.utils.aoa_to_sheet(data, opts), opts);
      }

      // stringをArrayBufferに変換する
      // 参照：https://stackoverflow.com/questions/34993292/how-to-save-xlsx-data-to-file-as-a-blob
      function s2ab(s) {
        var buf = new ArrayBuffer(s.length);
        var view = new Uint8Array(buf);
        for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xff;
        return buf;
      }

      // 書き込み時のオプションは以下を参照
      // https://github.com/SheetJS/js-xlsx/blob/master/README.md#writing-options
      var write_opts = {
        type: "binary"
      };

      // ArrayをWorkbookに変換する
      let excelDatas = [];
      excelDatas.push([
        "구분", //index
        "등록선택", //contractorType
        "입주자이름", //contractorName
        "입주자국적", //contractorCountry
        "입주자 분류", //contractorJobType
        "입주자 주소", //contractorAdress
        "입주자 전화번호", //contractorTel
        "입주예정일", //moveIntoDate
        "입주자 성별", //contractorSex
        "입주자 생년월일", //contractorBirthday
        "입주자 이메일", //contractorEmail
        "입주자 sms", //contractorSms
        "입주자 재류자격", //contractorResidenceQualification
        "입주자 학교명", //contractorSchoolName
        "입주자 학교 TEL", //contractorSchoolTel
        "입주자 학교주소", //contractorSchoolAddress
        "입주자 회사이름", //contractorCompanyName
        "입주자 직장 전화번호", //contractorCompanyTel
        "입주자 직장주소", //contractorCompanyAddress
        "입주자 근속연수", //contractorLengthOfService
        "입주자 급여", //contractorSalary
        "기타 이름", //contractorOtherName
        "기타 전화번호", //contractorOtherTel
        "기타 주소", //contractorOtherAddress
        "기타내용", //contractorOtherContent
        // "증빙서류", //contractorOtherFile
        "보증형태", //guaranteeType
        "심사 수수료", //guaranteeFee
        "멘션명 ", //propertyName
        "멘션 주소", //propertyAdress
        "호실", //roomNumber
        "방 타입", //roomType
        "월세", //rent
        "관리비", //managementCost
        "기타비용", //otherCosts
        "총 비용", //totalPayment
        "동반 입주자 여부", //roomMate
        "동반 입주자 인수", //roomMateHeadCount
        "동반 입주자 이름", //roomMateName
        "동반 입주자 생년월일", //roomMateBirthday
        "동반 입주자 전화번호", //roomMateTel
        "동반 입주자 국적", //roomMateCountry
        // "동반 입주자 신분증", //roomMateIdCard
        "보증 타입 연대 보증인 or 긴급연락처", //guarantorType
        "보증인 이름", //guarantorName
        "보증인 국적", //guarantorCountry
        "보증인 주소", //guarantorAdress
        "보증인 관계", //guarantorRelationship
        "보증인TEL-1", //guarantorTel1
        "보증인TEL-2", //guarantorTel2
        "보증인 회사명", //guarantorCompanyName
        "보증인 회사 전화번호", //guarantorCompanyTel
        "보증인 회사 주소", //guarantorCompanyAddress
        // "보증인 신분증 앞", //guarantorIdCardFront:"",
        // "보증인 신분증 뒤", //guarantorIdCardBack:"",
        // "보증인 계약서", //guarantorContract:"",
        "보증인 생년월일", //guarantorBirthday
        "긴급연락처 이름", //emergencyName
        "긴급연락처 국적", //emergencyCountry
        "긴급연락처 생년월일", //emergencyBirthday
        "긴급연락처 관계", //emergencyRelationship
        "긴급연락처TEL-1", //emergencyTel1
        "긴급연락처TEL-2", //emergencyTel2
        "긴급연락처 주소", //emergencyAdress
        "확인담당자", //comfirmPerson
        "상관승인자" //approvalPerson
      ]);
      for (let i = 0; i < this.userList.length; i++) {
        const element = this.userList[i];
        excelDatas.push([
          element.index,
          element.contractorType,
          element.contractorName,
          element.contractorCountry,
          element.contractorJobType,
          element.contractorAdress,
          element.contractorTel,
          element.moveIntoDate,
          element.contractorSex,
          element.contractorBirthday,
          element.contractorEmail,
          element.contractorSms,
          element.contractorResidenceQualification,
          element.contractorSchoolName,
          element.contractorSchoolTel,
          element.contractorSchoolAddress,
          element.contractorCompanyName,
          element.contractorCompanyTel,
          element.contractorCompanyAddress,
          element.contractorLengthOfService,
          element.contractorSalary,
          element.contractorOtherName,
          element.contractorOtherTel,
          element.contractorOtherAddress,
          element.contractorOtherContent,
          element.guaranteeType,
          element.guaranteeFee,
          element.propertyName,
          element.propertyAdress,
          element.roomNumber,
          element.roomType,
          element.rent,
          element.managementCost,
          element.otherCosts,
          element.totalPayment,
          element.roomMate,
          element.roomMateHeadCount,
          element.roomMateName,
          element.roomMateBirthday,
          element.roomMateTel,
          element.roomMateCountry,
          element.guarantorType,
          element.guarantorName,
          element.guarantorCountry,
          element.guarantorAdress,
          element.guarantorRelationship,
          element.guarantorTel1,
          element.guarantorTel2,
          element.guarantorCompanyName,
          element.guarantorCompanyTel,
          element.guarantorCompanyAddress,
          element.guarantorBirthday,
          element.emergencyName,
          element.emergencyCountry,
          element.emergencyBirthday,
          element.emergencyRelationship,
          element.emergencyTel1,
          element.emergencyTel2,
          element.emergencyAdress,
          element.comfirmPerson,
          element.approvalPerson
        ]);
      }
      var wb = aoa_to_workbook(excelDatas);
      var wb_out = XLSX.write(wb, write_opts);

      var blob = new Blob([s2ab(wb_out)], { type: "application/octet-stream" });
      saveAs(blob, "입주자 목록.xlsx");
    },
    onSearch() {
      console.log("search click");
      const userSearchType = this.userSearchType;
      const userSearchKeyword = this.userSearchKeyword;
      this.$store.dispatch(T.SEARCH_USER, {
        userSearchType,
        userSearchKeyword
      });
    },
    moveAddUserPage() {
      this.$store.dispatch(T.CHANGE_TAB_INDEX, 10);
    },
    alertMsg() {
      this.$message.info("수정기능 개발중");
    }
  }
};
</script>

<style lang="scss">
.user-list-page {
  display: flex;
  flex-direction: column;
  height: 100%;
  .content {
    flex: 1;
    height: calc(100% - 50px);
    overflow: auto;
    .ant-table-wrapper {
    }
  }
}
.search-wrapper {
  display: flex;
  height: 50px;
  .ant-input-group-wrapper {
    display: inline-flex;
    width: auto;
    flex: 1;
    padding: 0 0 0 10px;
    .ant-btn {
      margin: 0;
    }
  }
  .ant-select-selection--single {
    flex: 1;
    width: 130px;
    height: 40px;
    .ant-select-selection__rendered {
      line-height: 40px;
    }
  }
  .ant-btn {
    margin-left: 10px;
    height: 40px;
  }
}
</style>
