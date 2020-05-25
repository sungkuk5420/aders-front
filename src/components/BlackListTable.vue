<template>
  <a-table
    :columns="columns"
    :dataSource="blackList"
    :scroll="windowSize"
    expandRowByClick
    @change="handleTableChange"
  >
    <!-- <a slot="action" slot-scope="text" href="javascript:;">Delete</a> -->
    <div slot="expandedRowRender" slot-scope="record" class="detail-row">
      <p style="margin: 0">{{ record.notes }}</p>
      <a-button type="primary">상세보기</a-button>
      <a-button type="default">블랙리스트 해제</a-button>
      <!-- <a-button type="primary" @click="function(){
        detail(record.id)
      }">상세보기</a-button>
      <a-popconfirm
        title="정말로 이 입주자를 삭제하시겠습니까?"
        @confirm="function(){
          confirm(record.id)
        }"
        @cancel="cancel"
        okText="삭제"
        cancelText="취소"
      >
        <a-button type="default">삭제</a-button>
      </a-popconfirm>-->
    </div>
  </a-table>
</template>
<script>
const columns = [
  { title: "구분", dataIndex: "index", key: "index" },
  { title: "승인일", dataIndex: "createdDate", key: "createdDate" },
  // {
  //   title: "대리점",
  //   dataIndex: "company.companyName",
  //   key: "company.companyName"
  // },
  // {
  //   title: "대리점 계약번호",
  //   dataIndex: "company.approvalNumber",
  //   key: "key3"
  // },
  // {
  //   title: "대리점 수수료",
  //   dataIndex: "propertyManagermentCompanyFeePercentage",
  //   key: "propertyManagermentCompanyFeePercentage"
  // },
  { title: "승인번호", dataIndex: "approvalNumber", key: "approvalNumber" },
  {
    title: "입주자명 (영문)",
    dataIndex: "contractorNameEnglish",
    key: "contractorNameEnglish"
  },
  { title: "입주자명", dataIndex: "contractorName", key: "contractorName" },
  // { title: "멘션명", dataIndex: "propertyName", key: "propertyName" },
  // { title: "방번호", dataIndex: "roomNumber", key: "roomNumber" },
  { title: "연락처", dataIndex: "contractorTel", key: "contractorTel" },
  // { title: "월세", dataIndex: "rent", key: "rent" },
  // { title: "심사금액", dataIndex: "key12", key: "key12" },
  // { title: "심사율", dataIndex: "key13", key: "key13" },
  // { title: "갱신료", dataIndex: "key14", key: "key14" },
  { title: "담당자", dataIndex: "comfirmPerson", key: "comfirmPerson" },
  // { title: "은행명", dataIndex: "company.bankName", key: "company.bankName" },
  // {
  //   title: "지점명",
  //   dataIndex: "company.branchOfficeName",
  //   key: "company.branchOfficeName"
  // },
  // {
  //   title: "계좌번호",
  //   dataIndex: "company.bankAccountNumber",
  //   key: "company.bankAccountNumber"
  // },
  { title: "비고", dataIndex: "company.notes", key: "company.notes" },
  {
    title: "연대보증인연락처",
    dataIndex: "guarantorTel1",
    key: "guarantorTel1"
  },
  { title: "긴급연락처", dataIndex: "emergencyTel1", key: "emergencyTel1" }
  // { title: 'Action', dataIndex: '', key: 'x', scopedSlots: { customRender: 'action' } },
];

import { mapGetters } from "vuex";
import { T } from "../store/module-example/types";
export default {
  data() {
    return {
      columns,
      windowSize: { x: "max-content" }
    };
  },
  computed: {
    ...mapGetters({
      blackList: "getAllBlackList"
    })
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
      this.$store.dispatch(T.CHANGE_UPDATE_USER_ID, id);
      this.$store.dispatch(T.CHANGE_TAB_INDEX, 10);
    },
    confirm(id) {
      const thisObj = this;
      this.db
        .collection("users")
        .doc(id)
        .delete()
        .then(function() {
          thisObj.$store.dispatch(T.DELETE_USER, id);
          thisObj.alertMsg({ type: "success", msg: "삭제 완료" });
        })
        .catch(function(error) {
          console.log(error);
          thisObj.alertMsg({ type: "error", msg: "삭제 실패" });
        });
    },
    cancel() {
      this.alertMsg({ type: "error", msg: "취소" });
    },
    handleTableChange(pagination, filters, sorter) {
      console.log(pagination);
      const pager = { ...this.pagination };
      pager.current = pagination.current;
      this.pagination = pager;
      this.fetch({
        results: pagination.pageSize,
        page: pagination.current,
        sortField: sorter.field,
        sortOrder: sorter.order,
        ...filters
      });
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
</style>