<template>
  <a-table :columns="columns" :dataSource="companyList" :scroll="windowSize" expandRowByClick @change="handleTableChange">
    <div slot="expandedRowRender" slot-scope="record" class="detail-row">
      <p style="margin: 0">{{ record.notes }}</p>
      <a-button type="primary" @click="detail">상세보기</a-button>
      <a-popconfirm
        title="정말로 이 대리점을 삭제하시겠습니까?"
        @confirm="confirm"
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
  { title: '구분', dataIndex: 'index', key: 'index'},
  { title: '대리점 구분', dataIndex: 'companyType', key: 'companyType'},
  { title: '회사명', dataIndex: 'companyName', key: 'companyName'},
  { title: '회사주소', dataIndex: 'companyAdress', key: 'companyAdress'},
  { title: '대표자', dataIndex: 'companyOnwer', key: 'companyOnwer'},
  { title: '대표자TEL', dataIndex: 'companyOnwerTel', key: 'companyOnwerTel'},
  { title: '시스템관리자', dataIndex: 'systemManager', key: 'systemManager'},
  { title: '관리자Email', dataIndex: 'systemManagerEmail', key: 'systemManagerEmail'},
  { title: 'FAX', dataIndex: 'fax', key: 'fax'},
  { title: '비고', dataIndex: 'notes', key: 'notes'},
  { title: '등록날짜', dataIndex: 'joinDate', key: 'joinDate'},
  { title: '보유 물건 수', dataIndex: 'buildingCount', key: 'buildingCount'},
  { title: '종업원 수', dataIndex: 'employeeCount', key: 'employeeCount'},
  { title: '상품 종류', dataIndex: 'productType', key: 'productType'},
  { title: '보증 수수료', dataIndex: 'fee1', key: 'fee1'},
  { title: '갱신료', dataIndex: 'novationFee', key: 'novationFee'},
  { title: '대리점 수수료', dataIndex: 'propertyManagermentCompanyFee', key: 'propertyManagermentCompanyFee'},
];
import { mapGetters } from "vuex";
import { T } from "../store/module-example/types";
export default {
  data() {
    return {
      columns,
      windowSize:{x:'max-content'}
    };
  },
  computed: {
    ...mapGetters({
      companyList:"getCompanyList"
    })
  },
  mounted(){
    const y = window.innerHeight-300;
    this.windowSize = {
      x:'max-content' 
    }
  },
  methods: {
    alertMsg({type="info",msg=""}) {
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
    detail(){
      this.alertMsg({type:"info",msg:"Comming soon"})
    },
    confirm(){
      // this.alertMsg({type:"success",msg:"삭제완료"})
      this.alertMsg({type:"info",msg:"Comming soon"})
    },
    cancel(){
      this.alertMsg({type:"error",msg:"취소"})
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
        ...filters,
      });
    },
  }
};
</script>
<style lang="scss">
.ant-table-fixed{
  overflow-x: auto;
  tr{
    td{
    }
  }
}
.detail-row{
  display: flex;
  align-items: center;
  .ant-btn{
    margin-left: 10px;
  }
}
</style>