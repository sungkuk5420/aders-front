<template>
  <a-table
    :columns="columns"
    :dataSource="companyList"
    :scroll="windowSize"
    expandRowByClick
    @change="handleTableChange"
  >
    <div slot="expandedRowRender" slot-scope="record" class="detail-row">
      <!-- <p style="margin: 0">{{ record.notes }}</p> -->
      <div class="col">
        <div class="row">
          <a-button type="primary" @click="function(){
        detail(record.id)
      }">詳細</a-button>
        </div>
        <div class="row">
          <CompanyCallHistoryTable :campanyId="record.id"/>
        </div>
        <a-popconfirm
          title="本当にこの代理店を削除しますか。"
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
  { title: "契約番号", dataIndex: "approvalNumber", key: "approvalNumber" },
  { title: "登録日", dataIndex: "createdDate", key: "createdDate" },
  { title: "代理店 区分", dataIndex: "companyType", key: "companyType" },
  {
    title: "回収区分",
    dataIndex: "debtCollectionType",
    key: "debtCollectionType"
  },
  { title: "代理店名", dataIndex: "companyName", key: "companyName" },
  { title: "会社住所", dataIndex: "companyAdress", key: "companyAdress" },
  { title: "代表者", dataIndex: "companyOnwer", key: "companyOnwer" },
  { title: "代表者TEL", dataIndex: "companyOnwerTel", key: "companyOnwerTel" },
  { title: "システム管理者", dataIndex: "systemManager", key: "systemManager" },
  {
    title: "管理者Email",
    dataIndex: "systemManagerEmail",
    key: "systemManagerEmail"
  },
  { title: "FAX", dataIndex: "fax", key: "fax" },
  { title: "備考", dataIndex: "notes", key: "notes" },
  { title: "登録日", dataIndex: "joinDate", key: "joinDate" },
  { title: "保有物件数", dataIndex: "buildingCount", key: "buildingCount" },
  { title: "従業員数", dataIndex: "employeeCount", key: "employeeCount" },
  { title: "商品種類", dataIndex: "productType", key: "productType" },
  { title: "保証審査料", dataIndex: "fee1", key: "fee1" },
  { title: "更新料", dataIndex: "novationFee", key: "novationFee" },
  {
    title: "代理店手数料",
    dataIndex: "propertyManagermentCompanyFee",
    key: "propertyManagermentCompanyFee"
  }
];
import CompanyCallHistoryTable from "./CompanyCallHistoryTable.vue";
import { mapGetters } from "vuex";
import { T } from "../store/module-example/types";
export default {
  components: { CompanyCallHistoryTable },
  data() {
    return {
      db: "", // firebase
      columns,
      windowSize: { x: "max-content" }
    };
  },
  computed: {
    ...mapGetters({
      companyList: "getCompanyList"
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
      this.$store.dispatch(T.CHANGE_UPDATE_COMPNAY_ID, id);
      this.$store.dispatch(T.CHANGE_TAB_INDEX, 20);
    },
    confirm(id) {
      const thisObj = this;
      this.db
        .collection("companys")
        .doc(id)
        .delete()
        .then(function() {
          thisObj.$store.dispatch(T.DELETE_COMPANY, id);
          thisObj.alertMsg({ type: "success", msg: "削除 完了" });
        })
        .catch(function(error) {
          console.log(error);
          thisObj.alertMsg({ type: "error", msg: "削除 失敗" });
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
.detail-row {
  display: flex;
  align-items: center;
  .ant-btn {
    margin-left: 10px;
  }
}
</style>