<template>
  <div class="company-list-page">
    <div class="search-wrapper">
      <a-select v-model="companySearchType" @change="onSearch">
        <a-select-option value="代理店名">代理店名</a-select-option>
        <a-select-option value="契約番号">契約番号</a-select-option>
        <a-select-option value="代表者名">代表者名</a-select-option>
      </a-select>
      <a-input-search
        placeholder="キーワード入寮"
        size="large"
        v-model="companySearchKeyword"
        @search="onSearch"
        @change="onSearch"
      >
        <a-button slot="enterButton" type="primary" icon="search" :loading="searchLoading">検索</a-button>
      </a-input-search>
      <a-button type="primary" @click="moveAddCompanyPage">代理店 登録</a-button>
    </div>
    <div class="content">
      <div class="row" style="margin-bottom:10px;">
        <a-button type="primary" style="margin-left:auto;" @click="exportExcel">Excel ダウンロード</a-button>
      </div>
      <CompanyTable/>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { T } from "../store/module-example/types";
import CompanyTable from "../components/CompanyTable.vue";
export default {
  props: [],
  components: {
    CompanyTable
  },
  data() {
    return {
      companySearchType: "代理店名",
      companySearchKeyword: "",
      searchLoading: false
    };
  },
  computed: {
    ...mapGetters({
      companyList: "getCompanyList"
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
        "区分", //index
        "登録 区分", //companyType
        "会社名", //companyName
        "会社住所", //companyAdress
        "会社代表者", //companyOnwer
        "会社代表者 性別", //companyOnwerSex
        "代表者 電話番号", //companyOnwerTel
        "システム管理者", //systemManager
        "システム管理者 メール", //systemManagerEmail
        "FAX", //fax
        "備考", //notes
        "登録日", //joinDate
        "保有物件数", //buildingCount
        "従業員数", //employeeCount
        "商品種類", //productType
        "保証審査料 緊急連絡先", //fee1
        "保証審査料 連帯保証人", //fee2
        "保証審査料 その他", //fee3
        "更新料", //novationFee
        "代理店手数料", //propertyManagermentCompanyFee
        "銀行名", //bankName
        "受取人名", //recipientName
        "カナ", //recipientNameKana
        "口座番号", //bankAccountNumber
        "送金タイプ", //remitType
        "支店名", //branchOfficeName
        "確認担当者", //comfirmPerson
        "上司承認者" //approvalPerson
      ]);
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
          element.approvalPerson
        ]);
      }
      var wb = aoa_to_workbook(excelDatas);
      var wb_out = XLSX.write(wb, write_opts);

      var blob = new Blob([s2ab(wb_out)], { type: "application/octet-stream" });
      saveAs(blob, "代理店一覧.xlsx");
    },
    onSearch() {
      const companySearchType = this.companySearchType;
      const companySearchKeyword = this.companySearchKeyword;
      this.$store.dispatch(T.SEARCH_COMPANY, {
        companySearchType,
        companySearchKeyword
      });
    },
    moveAddCompanyPage() {
      this.$store.dispatch(T.CHANGE_TAB_INDEX, 20);
    },
    alertMsg() {
      this.$message.info("開発中。。");
    }
  }
};
</script>

<style lang="scss">
.company-list-page {
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
