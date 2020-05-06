<template>
  <div class="company-list-page">
    <div class="search-wrapper">
      <a-select v-model="companySearchType" @change="onSearch">
        <a-select-option value="회사명">회사명</a-select-option>
        <a-select-option value="대표자명">대표자명</a-select-option>
        <a-select-option value="대리점 구분">대리점 구분</a-select-option>
      </a-select>
      <a-input-search
        placeholder="키워드 입력"
        size="large"
        v-model="companySearchKeyword" 
        @search="onSearch"
        @change="onSearch"
      >
      <a-button slot="enterButton" type="primary" icon="search" :loading="searchLoading" >검색</a-button>
      </a-input-search>
      <a-button type="primary" @click="moveAddCompanyPage">대리점 등록</a-button>
    </div>
    <div class="content">
      <div class="row" style="margin-bottom:10px;">
        <a-button type="primary" style="margin-left:auto;" @click="exportExcel">Excel 다운로드</a-button>
      </div>
      <CompanyTable/>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { T } from "../store/module-example/types";
import CompanyTable from "../components/CompanyTable.vue"
export default {
  props:[],
  components: {
    CompanyTable
  },
  data() {
    return {
      companySearchType:"회사명",
      companySearchKeyword:"",
      searchLoading:false
    };
  },
  computed: {
    ...mapGetters({
      companyList:"getCompanyList"
    })
  },
  watch: {
  },
  mounted() {
  },
  methods: {
    exportExcel(){
      // SheetをWorkbookに追加する
      // 参照：https://github.com/SheetJS/js-xlsx/issues/163
      function sheet_to_workbook(sheet/*:Worksheet*/, opts)/*:Workbook*/ {
        var n = opts && opts.sheet ? opts.sheet : "Sheet1";
        var sheets = {}; sheets[n] = sheet;
        return { SheetNames: [n], Sheets: sheets };
      }

      // ArrayをWorkbookに変換する
      // 参照：https://github.com/SheetJS/js-xlsx/issues/163
      function aoa_to_workbook(data/*:Array<Array<any> >*/, opts)/*:Workbook*/ {
        return sheet_to_workbook(XLSX.utils.aoa_to_sheet(data, opts), opts);
      }

      // stringをArrayBufferに変換する
      // 参照：https://stackoverflow.com/questions/34993292/how-to-save-xlsx-data-to-file-as-a-blob
      function s2ab(s) {
        var buf = new ArrayBuffer(s.length);
        var view = new Uint8Array(buf);
        for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
          return buf;
        }

      // 書き込み時のオプションは以下を参照
      // https://github.com/SheetJS/js-xlsx/blob/master/README.md#writing-options
      var write_opts = {
        type: 'binary'
      };

      // ArrayをWorkbookに変換する
      let excelDatas = [];
      excelDatas.push([
        "구분", //index
        "등록 구분", //companyType
        "회사 명", //companyName
        "회사 주소", //companyAdress
        "회사 대표자", //companyOnwer
        "회사 대표자 성별", //companyOnwerSex
        "대표자 전화번호", //companyOnwerTel
        "시스템관리자", //systemManager
        "시스템관리자 이메일", //systemManagerEmail
        "FAX", //fax
        "비고", //notes
        "등록날짜", //joinDate
        "보유물건 수", //buildingCount
        "종업원 수", //employeeCount
        "상품 종류", //productType
        "보증 수수료 긴급연락처", //fee1
        "보증 수수료 연대보증인", //fee2
        "보증 수수료 기타", //fee3
        "갱신료", //novationFee
        "대리점 수수료", //propertyManagermentCompanyFee
        "은행명", //bankName
        "수취인명", //recipientName
        "카나", //recipientNameKana
        "계좌번호", //bankAccountNumber
        "송금타입", //remitType
        "지점명", //branchOfficeName
        "확인담당자", //comfirmPerson
        "상관승인자", //approvalPerson
      ])
      for (let i = 0; i < this.companyList.length; i++) {
        const element = this.companyList[i];
        excelDatas.push([
          element.index,
          element.companyType,
          element.companyName,
          element.companyAdress,
          element.companyOnwer,
          element.companyOnwerSex,
          element.companyOnwerTel,
          element.systemManager,
          element.systemManagerEmail,
          element.fax,
          element.notes,
          element.joinDate,
          element.buildingCount,
          element.employeeCount,
          element.productType,
          element.fee1,
          element.fee2,
          element.fee3,
          element.novationFee,
          element.propertyManagermentCompanyFee,
          element.bankName,
          element.recipientName,
          element.recipientNameKana,
          element.bankAccountNumber,
          element.remitType,
          element.branchOfficeName,
          element.comfirmPerson,
          element.approvalPerson,
        ])
      }
      var wb = aoa_to_workbook(excelDatas);
      var wb_out = XLSX.write(wb, write_opts);

      var blob = new Blob([s2ab(wb_out)], { type: 'application/octet-stream' });
      saveAs(blob, '대리점 목록.xlsx');
    },
    onSearch(){
      console.log("search click");
      const companySearchType = this.companySearchType;
      const companySearchKeyword = this.companySearchKeyword;
      this.$store.dispatch(T.SEARCH_COMPANY,{companySearchType,companySearchKeyword});
    },
    moveAddCompanyPage() {
      this.$store.dispatch(T.CHANGE_TAB_INDEX,20);
    },
    alertMsg() {
      this.$message.info("수정기능 개발중");
    }
  }
};
</script>

<style lang="scss">
.company-list-page{
  display: flex;
  flex-direction: column;
  height: 100% ;
  .content{
    flex:1;
    height: calc(100% - 50px);
    overflow: auto;
    .ant-table-wrapper{
    }
  }
}
.search-wrapper{
  display: flex;
  height: 50px;
  .ant-input-group-wrapper{
    display: inline-flex;
    width: auto;
    flex: 1;
    padding: 0 0 0 10px ;
    .ant-btn{
      margin: 0;
    }
  }
  .ant-select-selection--single{
    flex: 1;
    width: 130px;
    height:40px;
    .ant-select-selection__rendered{
      line-height: 40px;
    }
  }
  .ant-btn{
    margin-left: 10px;
    height: 40px;
  }
}
</style>
