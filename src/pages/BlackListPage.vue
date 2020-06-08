<template>
  <div class="user-list-page">
    <div class="search-wrapper">
      <a-select v-model="blackListSearchType" @change="onSearch">
        <a-select-option value="入居者名">入居者名</a-select-option>
        <a-select-option value="承認番号">承認番号</a-select-option>
        <a-select-option value="メンション名">メンション名</a-select-option>
      </a-select>
      <a-input-search
        placeholder="キーワード入寮"
        size="large"
        v-model="blackListSearchKeyword"
        @search="onSearch"
        @change="onSearch"
      >
        <a-button slot="enterButton" type="primary" icon="search" :loading="searchLoading">検索</a-button>
      </a-input-search>
      <a-button type="primary">詳細検索</a-button>
    </div>
    <div class="content">
      <div class="row" style="margin-bottom:10px;">
        <a-button type="primary" style="margin-left:auto;" @click="exportExcel">Excel ダウンロード</a-button>
      </div>
      <BlackListTable/>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { T } from "../store/module-example/types";
import BlackListTable from "../components/BlackListTable.vue";
export default {
  components: {
    BlackListTable
  },
  data() {
    return {
      blackListSearchType: "入居者名",
      blackListSearchKeyword: "",
      searchLoading: false
    };
  },
  computed: {
    ...mapGetters({
      blackList: "getAllBlackList"
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
        "区分", //index
        "登録選択", //contractorType
        "入居者 名前", //contractorName
        "入居者 国籍", //contractorCountry
        "入居者 分類", //contractorJobType
        "入居者 住所", //contractorAdress
        "入居者 電話番号", //contractorTel
        "入居予定日", //moveIntoDate
        "入居者 性別", //contractorSex
        "入居者 生年月日", //contractorBirthday
        "入居者 メール", //contractorEmail
        "入居者 sms", //contractorSms
        "入居者 在留資格", //contractorResidenceQualification
        "入居者 学校名", //contractorSchoolName
        "入居者 学校 TEL", //contractorSchoolTel
        "入居者 学校住所", //contractorSchoolAddress
        "入居者 会社名", //contractorCompanyName
        "入居者 会社 電話番号", //contractorCompanyTel
        "入居者 会社住所", //contractorCompanyAddress
        "入居者 勤続年数", //contractorLengthOfService
        "入居者 給料", //contractorSalary
        "その他 名前", //contractorOtherName
        "その他 電話番号", //contractorOtherTel
        "その他 住所", //contractorOtherAddress
        "その他のメモ", //contractorOtherContent
        // "증빙서류", //contractorOtherFile
        "保証種類", //guaranteeType
        "審査手数料", //guaranteeFee
        "メンション名 ", //propertyName
        "メンション住所", //propertyAdress
        "部屋番号", //roomNumber
        "部屋のタイプ", //roomType
        "家賃", //rent
        "管理費", //managementCost
        "その他の費用", //otherCosts
        "合計金額", //totalPayment
        "同居者", //roomMate
        "同居者 人数", //roomMateHeadCount
        "同居者 名前", //roomMateName
        "同居者 生年月日", //roomMateBirthday
        "同居者 電話番号", //roomMateTel
        "同居者 国籍", //roomMateCountry
        // "同居者 신분증", //roomMateIdCard
        "保証タイプ 連帯保証人 or 緊急連絡先", //guarantorType
        "保証人 名前", //guarantorName
        "保証人 国籍", //guarantorCountry
        "保証人 住所", //guarantorAdress
        "保証人 関係", //guarantorRelationship
        "保証人 TEL-1", //guarantorTel1
        "保証人 TEL-2", //guarantorTel2
        "保証人 会社名", //guarantorCompanyName
        "保証人 会社 電話番号", //guarantorCompanyTel
        "保証人 会社住所", //guarantorCompanyAddress
        // "保証人 신분증 앞", //guarantorIdCardFront:"",
        // "保証人 신분증 뒤", //guarantorIdCardBack:"",
        // "保証人 계약서", //guarantorContract:"",
        "保証人 生年月日", //guarantorBirthday
        "緊急連絡先 名前", //emergencyName
        "緊急連絡先 国籍", //emergencyCountry
        "緊急連絡先 生年月日", //emergencyBirthday
        "緊急連絡先 関係", //emergencyRelationship
        "緊急連絡先-1", //emergencyTel1
        "緊急連絡先-2", //emergencyTel2
        "緊急連絡先 住所", //emergencyAdress
        "確認担当者", //comfirmPerson
        "上司承認者" //approvalPerson
      ]);
      for (let i = 0; i < this.blackList.length; i++) {
        const element = this.blackList[i];
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
      saveAs(blob, "ブラックリスト 一覧.xlsx");
    },
    onSearch() {
      console.log("search click");
      const blackListSearchType = this.blackListSearchType;
      const blackListSearchKeyword = this.blackListSearchKeyword;
      this.$store.dispatch(T.SEARCH_BLACK_LIST, {
        blackListSearchType,
        blackListSearchKeyword
      });
    },
    moveAddUserPage() {
      this.$store.dispatch(T.CHANGE_TAB_INDEX, 10);
    },
    alertMsg() {
      this.$message.info("開発中。。");
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
