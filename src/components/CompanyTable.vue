<template>
  <a-table :columns="columns" :dataSource="data" :scroll="windowSize" expandRowByClick @change="handleTableChange">
    <!-- <a slot="action" slot-scope="text" href="javascript:;">Delete</a> -->
    <p slot="expandedRowRender" slot-scope="record" style="margin: 0">{{ record.description }}</p>
  </a-table>
</template>
<script>
const columns = [
  { title: '구분', dataIndex: 'key0', key: 'key0'},
  { title: '대리점 구분', dataIndex: 'key1', key: 'key1'},
  { title: '회사명', dataIndex: 'key2', key: 'key2'},
  { title: '회사주소', dataIndex: 'key3', key: 'key3'},
  { title: '대표자', dataIndex: 'key4', key: 'key4'},
  { title: '대표자TEL', dataIndex: 'key6', key: 'key6'},
  { title: '시스템관리자', dataIndex: 'key7', key: 'key7'},
  { title: '관리자Email', dataIndex: 'key8', key: 'key8'},
  { title: 'FAX', dataIndex: 'key9', key: 'key9'},
  { title: '비고', dataIndex: 'key10', key: 'key10'},
  { title: '등록날짜', dataIndex: 'key11', key: 'key11'},
  { title: '보유 물건 수', dataIndex: 'key12', key: 'key12'},
  { title: '종업원 수', dataIndex: 'key13', key: 'key13'},
  { title: '상품 종류', dataIndex: 'key14', key: 'key14'},
  { title: '보증 수수료', dataIndex: 'key15', key: 'key15'},
  { title: '갱신료', dataIndex: 'key16', key: 'key16'},
  { title: '대리점 수수료', dataIndex: 'key17', key: 'key17'},
  { title: '상세보기', dataIndex: '', key: 'x', scopedSlots: { customRender: 'action' } },
];

const data = [
 
];

export default {
  data() {
    return {
      data,
      columns,
      windowSize:{x:'max-content',y:1200}
    };
  },
  mounted(){
    const y = window.innerHeight-300;
    this.windowSize = {
      x:'max-content' ,y
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