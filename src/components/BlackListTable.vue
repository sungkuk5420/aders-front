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
      <!-- <a-button type="primary">詳細</a-button> -->
      <a-button type="primary" @click="function(){
        detail(record.id)
      }">詳細</a-button>
      <a-popconfirm
        title="本当にこのブラックリストを削除しますか。"
        @confirm="function(){
          confirm(record.id)
        }"
        @cancel="cancel"
        okText="削除"
        cancelText="キャンセル"
      >
        <a-button type="default">ブラックリスト 解除</a-button>
        <!-- <a-button type="default">ブラックリスト 解除</a-button> -->
      </a-popconfirm>
    </div>
  </a-table>
</template>
<script>
const columns = [
  { title: "区分", dataIndex: "index", key: "index" },
  { title: "承認日", dataIndex: "createdDate", key: "createdDate" },
  {
    title: "代理店",
    dataIndex: "company.companyName",
    key: "company.companyName"
  },
  {
    title: "代理店 契約番号",
    dataIndex: "company.approvalNumber",
    key: "key3"
  },
  {
    title: "代理店手数料",
    dataIndex: "propertyManagermentCompanyFeePercentage",
    key: "propertyManagermentCompanyFeePercentage"
  },
  { title: "承認番号", dataIndex: "approvalNumber", key: "approvalNumber" },
  {
    title: "入居者名 (英語)",
    dataIndex: "contractorNameEnglish",
    key: "contractorNameEnglish"
  },
  { title: "入居者名", dataIndex: "contractorName", key: "contractorName" },
  { title: "メンション名", dataIndex: "propertyName", key: "propertyName" },
  { title: "部屋番号", dataIndex: "roomNumber", key: "roomNumber" },
  { title: "連絡先", dataIndex: "contractorTel", key: "contractorTel" },
  { title: "家賃", dataIndex: "rent", key: "rent" },
  { title: "審査金額", dataIndex: "guaranteeFee", key: "guaranteeFee" },
  {
    title: "審査率",
    dataIndex: "guaranteeFeePercentage",
    key: "guaranteeFeePercentage"
  },
  {
    title: "更新料",
    dataIndex: "company.novationFee",
    key: "company.novationFee"
  },
  { title: "担当者", dataIndex: "comfirmPerson", key: "comfirmPerson" },
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
    title: "連帯保証人の連絡先",
    dataIndex: "guarantorTel1",
    key: "guarantorTel1"
  },
  { title: "緊急連絡先", dataIndex: "emergencyTel1", key: "emergencyTel1" }
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
      this.$store.dispatch(T.IS_READ_ONLY_UPDATE_USER_DETAIL, true);
      this.$store.dispatch(T.CHANGE_TAB_INDEX, 10);
    },
    confirm(id) {
      const thisObj = this;
      this.db
        .collection("users")
        .doc(id)
        .update({
          blackList: false
        })
        .then(function() {
          thisObj.$store.dispatch(T.DELETE_BLACK_LIST, id);
          thisObj.alertMsg({
            type: "success",
            msg: "ブラックリスト 解除 完了"
          });
        })
        .catch(function(error) {
          console.log(error);
          thisObj.alertMsg({ type: "error", msg: "ブラックリスト 解除 失敗" });
        });
    },
    cancel() {
      this.alertMsg({ type: "error", msg: "キャンセル" });
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