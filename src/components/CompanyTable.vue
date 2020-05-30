<template>
  <a-table
    :columns="columns"
    :dataSource="companyList"
    :scroll="windowSize"
    expandRowByClick
    @change="handleTableChange"
  >
    <div slot="expandedRowRender" slot-scope="record" class="detail-row">
      <p style="margin: 0">{{ record.notes }}</p>
      <a-button type="primary" @click="function(){
        detail(record.id)
      }">상세보기</a-button>
      <a-popconfirm
        title="정말로 이 대리점을 삭제하시겠습니까?"
        @confirm="function(){
          confirm(record.id)
        }"
        @cancel="cancel"
        okText="삭제"
        cancelText="취소"
      >
        <a-button type="default">삭제</a-button>
      </a-popconfirm>
    </div>
  </a-table>
</template>
<script>
const columns = [
  { title: "구분", dataIndex: "index", key: "index" },
  { title: "계약번호", dataIndex: "approvalNumber", key: "approvalNumber" },
  { title: "등록일", dataIndex: "createdDate", key: "createdDate" },
  { title: "대리점 구분", dataIndex: "companyType", key: "companyType" },
  {
    title: "추심구분",
    dataIndex: "debtCollectionType",
    key: "debtCollectionType"
  },
  { title: "회사명", dataIndex: "companyName", key: "companyName" },
  { title: "회사주소", dataIndex: "companyAdress", key: "companyAdress" },
  { title: "대표자", dataIndex: "companyOnwer", key: "companyOnwer" },
  { title: "대표자TEL", dataIndex: "companyOnwerTel", key: "companyOnwerTel" },
  { title: "시스템관리자", dataIndex: "systemManager", key: "systemManager" },
  {
    title: "관리자Email",
    dataIndex: "systemManagerEmail",
    key: "systemManagerEmail"
  },
  { title: "FAX", dataIndex: "fax", key: "fax" },
  { title: "비고", dataIndex: "notes", key: "notes" },
  { title: "등록날짜", dataIndex: "joinDate", key: "joinDate" },
  { title: "보유 물건 수", dataIndex: "buildingCount", key: "buildingCount" },
  { title: "종업원 수", dataIndex: "employeeCount", key: "employeeCount" },
  { title: "상품 종류", dataIndex: "productType", key: "productType" },
  { title: "보증 심사료", dataIndex: "fee1", key: "fee1" },
  { title: "갱신료", dataIndex: "novationFee", key: "novationFee" },
  {
    title: "대리점 수수료",
    dataIndex: "propertyManagermentCompanyFee",
    key: "propertyManagermentCompanyFee"
  }
];
import { mapGetters } from "vuex";
import { T } from "../store/module-example/types";
export default {
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
.detail-row {
  display: flex;
  align-items: center;
  .ant-btn {
    margin-left: 10px;
  }
}
</style>