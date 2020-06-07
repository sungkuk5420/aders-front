<template>
  <a-table
    :columns="columns"
    :dataSource="delinquentList"
    :scroll="windowSize"
    expandRowByClick
    :class="delinquentFilterType === '滞納報告型'?'filter-1':'filter-2'"
  >
    <!-- <a slot="action" slot-scope="text" href="javascript:;">Delete</a> -->
    <div slot="expandedRowRender" slot-scope="record" class="detail-row">
      <!-- <p style="margin: 0">{{ record.notes }}</p> -->
      <div class="col">
        <div class="row">
          <a-button type="primary" @click="function(){
        detail(record.id)
      }">詳細</a-button>
        </div>
        <div class="row">
          <DelinquentCallHistoryTable :delinquentId="record.id"/>
        </div>
        <a-popconfirm
          title="정말로 이 연체 기록을 삭제하시겠습니까?"
          @confirm="function(){
          confirm(record.id)
        }"
          @cancel="cancel"
          okText="削除"
          cancelText="キャンセル"
        >
          <a-button type="default">削除</a-button>
        </a-popconfirm>
      </div>
    </div>
  </a-table>
</template>
<script>
const columns = [
  { title: "区分", dataIndex: "index", key: "index" },
  { title: "家賃 미납분", dataIndex: "nonPayMonthly", key: "nonPayMonthly" },
  { title: "지불 완료날짜", dataIndex: "paymentDate", key: "paymentDate" },
  { title: "承認日", dataIndex: "createdDate", key: "createdDate" },
  {
    title: "代理店",
    dataIndex: "company.companyName",
    key: "company.companyName"
  },
  {
    title: "代理店 契約番号",
    dataIndex: "company.approvalNumber",
    key: "company.approvalNumber"
  },
  {
    title: "入居者 承認番号",
    dataIndex: "user.approvalNumber",
    key: "user.approvalNumber"
  },
  {
    title: "계약자(英語)",
    dataIndex: "user.contractorNameEnglish",
    key: "user.contractorNameEnglish"
  },
  {
    title: "계약자",
    dataIndex: "user.contractorName",
    key: "user.contractorName"
  },
  { title: "メンション名", dataIndex: "user.propertyName", key: "user.propertyName" },
  { title: "部屋番号", dataIndex: "user.roomNumber", key: "user.roomNumber" },
  {
    title: "連絡先",
    dataIndex: "user.contractorTel",
    key: "user.contractorTel"
  },
  { title: "청구금액", dataIndex: "charges", key: "charges" },
  { title: "家賃", dataIndex: "user.rent", key: "user.rent" },
  { title: "수수료", dataIndex: "delinquentFee", key: "delinquentFee" },
  { title: "체납발생", dataIndex: "arrears", key: "arrears" },
  {
    title: "担当者",
    dataIndex: "user.comfirmPerson",
    key: "user.comfirmPerson"
  },
  { title: "銀行名", dataIndex: "company.bankName", key: "company.bankName" },
  {
    title: "支店名",
    dataIndex: "company.branchOfficeName",
    key: "company.branchOfficeName"
  },
  {
    title: "口座番号",
    dataIndex: "company.bankAccountNumber",
    key: "company.bankAccountNumber"
  },
  { title: "備考", dataIndex: "company.notes", key: "company.notes" },
  {
    title: "緊急連絡先",
    dataIndex: "user.emergencyTel1",
    key: "user.emergencyTel1"
  }
];

import DelinquentCallHistoryTable from "./DelinquentCallHistoryTable.vue";
import { mapGetters } from "vuex";
import { T } from "../store/module-example/types";
export default {
  components: { DelinquentCallHistoryTable },
  data() {
    return {
      columns,
      windowSize: { x: "max-content" }
    };
  },
  computed: {
    ...mapGetters({
      delinquentList: "getAllDelinquentList",
      delinquentFilterType: "getDelinquentFilterType"
    })
  },
  watch: {
    delinquentFilterType: {
      handler(type) {
        if (type) {
          console.log("필터변경!! typetypetypetype" + type);
          // this.handleTableChange()
        }
      },
      immediate: true
    }
  },
  mounted() {
    this.db = firebase.firestore();
    const y = window.innerHeight - 300;
    this.windowSize = {
      x: "max-content"
    };
  },
  methods: {
    alertMsg({ type = "info", msg = "" }) {
      switch (type) {
        case "info":
          this.$message.info(msg);
          break;
        case "error":
          this.$message.error(msg);
          break;
        case "success":
          this.$message.success(msg);
          break;
        default:
          break;
      }
    },
    detail(id) {
      this.$store.dispatch(T.CHANGE_UPDATE_DELINQUENT_ID, id);
      this.$store.dispatch(T.CHANGE_TAB_INDEX, 30);
    },
    confirm(id) {
      const thisObj = this;
      this.db
        .collection("delinquents")
        .doc(id)
        .delete()
        .then(function() {
          thisObj.$store.dispatch(T.DELETE_DELINQUENT, id);
          thisObj.alertMsg({ type: "success", msg: "削除 完了" });
        })
        .catch(function(error) {
          console.log(error);
          thisObj.alertMsg({ type: "error", msg: "削除 失敗" });
        });
    },
    cancel() {
      this.alertMsg({ type: "error", msg: "キャンセル" });
    }
  }
};
</script>
<style lang="scss">
.ant-table-fixed {
  overflow-x: auto;
  tr {
    td {
    }
  }
}
.ant-table-wrapper.filter-1 {
  table {
    tr {
      td,
      th {
        &:nth-child(6),
        &:nth-child(15),
        &:nth-child(18),
        &:nth-child(19),
        &:nth-child(20) {
          display: none !important;
        }
      }
    }
  }
}
.ant-table-wrapper.filter-2 {
  table {
    tr {
      td,
      th {
        &:nth-child(16) {
          display: none !important;
        }
      }
    }
  }
}
</style>