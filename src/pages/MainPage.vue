<template>
  <div class="delinquent-list-page">
    <div class="notification row">
      <div class="notification__label">連帯未納者一覧</div>
      <a-list item-layout="horizontal" :data-source="data">
        <a-list-item slot="renderItem" slot-scope="item, index">{{ item.title }}</a-list-item>
      </a-list>
    </div>

    <div class="content"></div>
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
      "- [NEW] 2020.01.01 멜로디하임유히가오카 203호 / KIM JIHYUN / 3월 家賃 / 15,000円-23일 경과"
  },
  {
    title:
      "- [장기 連帯者] 2020.01.11 멜로디하임유히가오카 203호 / KIM JIHYUN / 3월 家賃 / 15,000円-23일 경과"
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
      delinquentSearchType: "メンション名",
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
        "家賃 未納分", // nonPayMonthly
        // "承認日", // key2
        "代理店", // company.companyName
        // "代理店 契約番号", // key3
        // "承認番号", // key4
        // "契約者(英語)", // key5
        "契約者", // user.contractorName
        "メンション名", // user.propertyName
        "部屋番号", // user.roomNumber
        "連絡先", // user.contractorTel
        "請求金額", // charges
        "家賃", // user.rent
        "手数料", // delinquentFee
        "滞納発生", // arrears
        "担当者", // user.comfirmPerson
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
      saveAs(blob, "連帯者 一覧.xlsx");
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

      this.$message.success(`${this.delinquentFilterType}のみ表示`);
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
