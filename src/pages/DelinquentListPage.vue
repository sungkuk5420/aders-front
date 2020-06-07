<template>
  <div class="delinquent-list-page">
    <div class="search-wrapper">
      <a-select v-model="delinquentSearchType" @change="onSearch">
        <a-select-option value="멘션명">멘션명</a-select-option>
        <a-select-option value="계약자명">계약자명</a-select-option>
        <a-select-option value="담당자명">담당자명</a-select-option>
        <a-select-option value="월세 미납분">월세 미납분</a-select-option>
      </a-select>
      <a-input-search
        placeholder="キーワード入寮"
        size="large"
        v-model="delinquentSearchKeyword"
        @search="onSearch"
        @change="onSearch"
      >
        <a-button slot="enterButton" type="primary" icon="search" :loading="searchLoading">検索</a-button>
      </a-input-search>
      <a-button type="primary">詳細検索</a-button>
      <a-button type="primary" @click="moveAddDelinquentPage">연체자 登録</a-button>
    </div>
    <div class="content">
      <div class="row" style="margin-bottom:10px;">
        <a-select
          v-model="delinquentFilterType"
          @change="changeDelinquentFilterType"
          style="width:130px;"
        >
          <a-select-option value="滞納報告型">滞納報告型</a-select-option>
          <a-select-option value="集金代行型">集金代行型</a-select-option>
        </a-select>
        <a-button type="primary" style="margin-left:auto;" @click="exportExcel">Excel ダウンロード</a-button>
      </div>
      <DelinquentTable/>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { T } from "../store/module-example/types";
import DelinquentTable from "../components/DelinquentTable.vue";
const data = [
  {
    title:
      "- [NEW] 2020.01.01 라시누텐노지초미나미 801호 / LEE JIHYUNG / 更新料 / 15,000円-23일 경과"
  },
  {
    title:
      "- [NEW] 2020.01.01 멜로디하임유히가오카 203호 / KIM JIHYUN / 3월 월세 / 15,000円-23일 경과"
  },
  {
    title:
      "- [장기 연체자] 2020.01.11 멜로디하임유히가오카 203호 / KIM JIHYUN / 3월 월세 / 15,000円-23일 경과"
  },
  {
    title:
      "- [승인 보류 심사] 2020.01.11 멜로디하임유히가오카 703호 / LEE HARU / 管理会社 에누케이"
  }
];
export default {
  components: {
    DelinquentTable
  },
  data() {
    return {
      delinquentSearchType: "멘션명",
      delinquentSearchKeyword: "",
      searchLoading: false,
      delinquentFilterType: "滞納報告型",
      data
    };
  },
  computed: {
    ...mapGetters({
      delinquentList: "getAllDelinquentList"
    })
  },
  watch: {},
  mounted() {},
  methods: {
    exportExcel() {
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
        "区分", // index
        "월세 미납분", // nonPayMonthly
        // "승인일", // key2
        "代理店", // company.companyName
        // "代理店 契約番号", // key3
        // "승인번호", // key4
        // "계약자(영문)", // key5
        "계약자", // user.contractorName
        "멘션명", // user.propertyName
        "방번호", // user.roomNumber
        "연락처", // user.contractorTel
        "청구금액", // charges
        "월세", // user.rent
        "수수료", // delinquentFee
        "체납발생", // arrears
        "담당자", // user.comfirmPerson
        "銀行名", // company.bankName
        "支店名", // company.branchOfficeName
        "口座番号", // company.bankAccountNumber
        "備考", // company.notes
        "緊急連絡先" // user.emergencyTel
      ]);
      for (let i = 0; i < this.delinquentList.length; i++) {
        const element = this.delinquentList[i];
        excelDatas.push([
          element.index,
          element.nonPayMonthly,
          element.company.companyName,
          element.user.contractorName,
          element.user.propertyName,
          element.user.roomNumber,
          element.user.contractorTel,
          element.charges,
          element.user.rent,
          element.delinquentFee,
          element.arrears,
          element.user.comfirmPerson,
          element.company.bankName,
          element.company.branchOfficeName,
          element.company.bankAccountNumber,
          element.company.notes,
          element.user.emergencyTel1
        ]);
      }
      var wb = aoa_to_workbook(excelDatas);
      var wb_out = XLSX.write(wb, write_opts);

      var blob = new Blob([s2ab(wb_out)], { type: "application/octet-stream" });
      saveAs(blob, "연체자 목록.xlsx");
    },
    onSearch() {
      console.log("search click");
      const delinquentSearchType = this.delinquentSearchType;
      const delinquentSearchKeyword = this.delinquentSearchKeyword;
      this.$store.dispatch(T.SEARCH_DELINQUENT, {
        delinquentSearchType,
        delinquentSearchKeyword
      });
    },
    moveAddDelinquentPage() {
      this.$store.dispatch(T.CHANGE_TAB_INDEX, 30);
    },
    alertMsg() {
      this.$message.info("開発中。。");
    },
    changeDelinquentFilterType() {
      this.$store.dispatch(
        T.CHANGE_DELINQUENT_FILTER_TYPE,
        this.delinquentFilterType
      );

      this.$message.success(`${this.delinquentFilterType}만 보기`);
    }
  }
};
</script>

<style lang="scss">
.delinquent-list-page {
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
  .notification {
    padding-bottom: 20px;
    &__label {
      background: #1890ff;
      padding: 20px 30px;
      width: 180px;
      font-size: 20px;
      display: flex;
      align-items: center;
      line-height: 2.2;
      color: white;
      position: relative;
      box-sizing: border-box;
      border: 1px solid #ddd;
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
        top: 50%;
        width: 0;
        height: 0;
        border: 20px solid transparent;
        border-left-color: #1890ff;
        border-right: 0;
        margin-top: -20px;
        margin-right: -20px;
        z-index: 1;
      }
    }
    .ant-list {
      flex: 1;
      background: white;
      margin-bottom: 0;
      max-height: 150px;
      overflow: auto;
      border: 1px solid #ddd;
      .ant-list-item {
        padding: 8px 8px 8px 32px;
        border: 0;
      }
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
