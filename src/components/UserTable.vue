<template>
  <a-table :columns="columns" :dataSource="userList" :scroll="windowSize" expandRowByClick @change="handleTableChange">
    <!-- <a slot="action" slot-scope="text" href="javascript:;">Delete</a> -->
    <p slot="expandedRowRender" slot-scope="record" style="margin: 0">{{ record.description }}</p>
  </a-table>
</template>
<script>
const columns = [
  { title: '구분', dataIndex: 'index', key: 'index'},
  { title: '승인일', dataIndex: 'key1', key: 'key1',sorter: (a, b) => a.key1 - b.key1 },
  { title: '대리점', dataIndex: 'key2', key: 'key2',sorter: (a, b) => a.key2 - b.key2,
    filters: [
      { text: 'エヌ・ケー興産', value: 'エヌ・ケー興産' },
      { text: '谷町君', value: '谷町君' },
    ], 
    onFilter: (value, record) => record.key2.indexOf(value) === 0
    }, 
  { title: '대리점 계약번호', dataIndex: 'key3', key: 'key3',sorter: (a, b) => a.key3 - b.key3 },
  { title: '대리점 수수료', dataIndex: 'propertyManagermentCompanyFee', key: 'propertyManagermentCompanyFee' },
  { title: '승인번호', dataIndex: 'key5', key: 'key5',sorter: (a, b) => a.key5 - b.key5 },
  { title: '계약자명 (영문)', dataIndex: 'key6', key: 'key6',sorter: (a, b) =>  a.key6.localeCompare(b.key6) },
  { title: '계약자명', dataIndex: 'contractorName', key: 'contractorName',sorter: (a, b) => a.key7.localeCompare(b.key7) },
  { title: '멘션명', dataIndex: 'propertyName', key: 'propertyName',sorter: (a, b) => a.key8.localeCompare(b.key8) },
  { title: '방번호', dataIndex: 'roomNumber', key: 'roomNumber',sorter: (a, b) => a.key9 - b.key9 },
  { title: '연락처', dataIndex: 'contractorTel', key: 'contractorTel',sorter: (a, b) => a.key10 - b.key10 },
  { title: '월세', dataIndex: 'rent', key: 'rent',sorter: (a, b) => a.key11 - b.key11 },
  { title: '심사금액', dataIndex: 'key12', key: 'key12',sorter: (a, b) => a.key12 - b.key12 },
  { title: '심사율', dataIndex: 'key13', key: 'key13',sorter: (a, b) => a.key13 - b.key13 },
  { title: '갱신료', dataIndex: 'key14', key: 'key14',sorter: (a, b) => a.key14 - b.key14 },
  { title: '담당자', dataIndex: 'key15', key: 'key15',sorter: (a, b) => a.key15 - b.key15 },
  { title: '은행명', dataIndex: 'key16', key: 'key16',sorter: (a, b) => a.key16 - b.key16,
    filters: [
      { text: 'SBJ', value: 'SBJ' },
      { text: 'UFJ', value: 'UFJ' },
    ], 
    onFilter: (value, record) => record.key16.indexOf(value) === 0
    },
  { title: '지점명', dataIndex: 'key17', key: 'key17',sorter: (a, b) => a.key17 - b.key17 },
  { title: '계좌번호', dataIndex: 'key18', key: 'key18',sorter: (a, b) => a.key18 - b.key18 },
  { title: '비고', dataIndex: 'key19', key: 'key19',sorter: (a, b) => a.key19 - b.key19 },
  { title: '서류', dataIndex: 'key20', key: 'key20',sorter: (a, b) => a.key20 - b.key20 },
  { title: '긴급연락처', dataIndex: 'key21', key: 'key21',sorter: (a, b) => a.key21 - b.key21 },
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