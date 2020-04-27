<template>
  <a-table :columns="columns" :dataSource="userList" :scroll="windowSize" expandRowByClick @change="handleTableChange">
    <!-- <a slot="action" slot-scope="text" href="javascript:;">Delete</a> -->
    <p slot="expandedRowRender" slot-scope="record" style="margin: 0">{{ record.description }}</p>
  </a-table>
</template>
<script>
const columns = [
  { title: '구분', dataIndex: 'index', key: 'index'},
  { title: '승인일', dataIndex: 'key1', key: 'key1'},
  { title: '대리점', dataIndex: 'company.companyName', key: 'company.companyName'},
  { title: '대리점 계약번호', dataIndex: 'key3', key: 'key3'},
  { title: '대리점 수수료', dataIndex: 'propertyManagermentCompanyFeePercentage', key: 'propertyManagermentCompanyFeePercentage' },
  { title: '승인번호', dataIndex: 'key5', key: 'key5'},
  { title: '계약자명 (영문)', dataIndex: 'key6', key: 'key6'},
  { title: '계약자명', dataIndex: 'contractorName', key: 'contractorName'},
  { title: '멘션명', dataIndex: 'propertyName', key: 'propertyName'},
  { title: '방번호', dataIndex: 'roomNumber', key: 'roomNumber'},
  { title: '연락처', dataIndex: 'contractorTel', key: 'contractorTel'},
  { title: '월세', dataIndex: 'rent', key: 'rent'},
  { title: '심사금액', dataIndex: 'key12', key: 'key12'},
  { title: '심사율', dataIndex: 'key13', key: 'key13'},
  { title: '갱신료', dataIndex: 'key14', key: 'key14'},
  { title: '담당자', dataIndex: 'comfirmPerson', key: 'comfirmPerson'},
  { title: '은행명', dataIndex: 'company.bankName', key: 'company.bankName'},
  { title: '지점명', dataIndex: 'company.branchOfficeName', key: 'company.branchOfficeName'},
  { title: '계좌번호', dataIndex: 'company.bankAccountNumber', key: 'company.bankAccountNumber'},
  { title: '비고', dataIndex: 'company.notes', key: 'company.notes'},
  { title: '연대보증인연락처', dataIndex: 'guarantorTel1', key: 'guarantorTel1'},
  { title: '긴급연락처', dataIndex: 'emergencyTel1', key: 'emergencyTel1'},
  { title: 'Action', dataIndex: '', key: 'x', scopedSlots: { customRender: 'action' } },
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
      userList:"getAllUserList",
    })
  },
  mounted(){
    const y = window.innerHeight-300;
    this.windowSize = {
      x:'max-content' 
    }
  },
  methods: {
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
</style>