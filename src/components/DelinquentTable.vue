<template>
  <a-table :columns="columns" :dataSource="delinquentList" :scroll="windowSize" expandRowByClick @change="handleTableChange">
    <!-- <a slot="action" slot-scope="text" href="javascript:;">Delete</a> -->
    <div slot="expandedRowRender" slot-scope="record" class="detail-row">
      <p style="margin: 0">{{ record.notes }}</p>
      <a-button type="primary" @click="function(){
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
      </a-popconfirm>
    </div>
  </a-table>
</template>
<script>
const columns = [
  { title: '구분', dataIndex: 'index', key: 'index'},
  { title: '월세 미납분', dataIndex: 'key1', key: 'key1'},
  { title: '승인일', dataIndex: 'key2', key: 'key2'},
  { title: '대리점', dataIndex: 'company.companyName', key: 'company.companyName'},
  { title: '대리점 계약번호', dataIndex: 'key3', key: 'key3'},
  { title: '승인번호', dataIndex: 'key4', key: 'key4'},
  { title: '계약자(영문)', dataIndex: 'key5', key: 'key5'},
  { title: '계약자', dataIndex: 'contractorName', key: 'contractorName'},
  { title: '멘션명', dataIndex: 'propertyName', key: 'propertyName'},
  { title: '방번호', dataIndex: 'roomNumber', key: 'roomNumber'},
  { title: '국내 핸드폰 번호', dataIndex: 'contractorTel', key: 'contractorTel'},
  { title: '청구액', dataIndex: 'key6', key: 'key6' },
  { title: '월세', dataIndex: 'rent', key: 'rent'},
  { title: '수수료', dataIndex: 'key7', key: 'key7' },
  { title: '체납발생', dataIndex: 'key8', key: 'key8' },
  { title: '담당자', dataIndex: 'comfirmPerson', key: 'comfirmPerson'},
  { title: '은행명', dataIndex: 'company.bankName', key: 'company.bankName'},
  { title: '지점명', dataIndex: 'company.branchOfficeName', key: 'company.branchOfficeName'},
  { title: '계좌번호', dataIndex: 'company.bankAccountNumber', key: 'company.bankAccountNumber'},
  { title: '비고', dataIndex: 'company.notes', key: 'company.notes'},
  { title: '긴급연락처', dataIndex: 'emergencyTel1', key: 'emergencyTel1'}
];
const object = {
  //월세 미납분
  //수수료
  //청구액
  //체납발생
}

import { mapGetters } from "vuex";
import { T } from "../store/module-example/types";
export default {
  data() {
    return {
      columns,
      windowSize:{x:'max-content'},
      delinquentList:[{
        'index': '1',
        'key1': '2',
        'key2': '3',
        'company.companyName':'4',
        'key3': '5',
        'key4': '6',
        'key5': '7',
        'contractorName': '8',
        'propertyName': '9',
        'roomNumber': '10',
        'contractorTel': '11',
        'key6': '12',
        'rent': '13',
        'key7': '14',
        'key8': '15',
        'comfirmPerson': '16',
        'company.bankName': '17',
        'company.branchOfficeName': '18',
        'company.bankAccountNumber': '19',
        'company.notes': '20',
        'emergencyTel1': '21'
      }]
    };
  },
  // computed: {
  //   ...mapGetters({
  //     delinquentList:"getAllDelinquentList",
  //   })
  // },
  mounted(){
    this.db = firebase.firestore();
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
    detail(id){
      this.$store.dispatch(T.CHANGE_UPDATE_USER_ID,id);
      this.$store.dispatch(T.CHANGE_TAB_INDEX,10);
      
    },
    confirm(id){
      const thisObj = this;
      this.db.collection("delinquents").doc(id).delete().then(function() {
        thisObj.$store.dispatch(T.DELETE_USER,id);
        thisObj.alertMsg({type:"success",msg:"삭제 완료"});
      }).catch(function(error) {
        console.log(error)
        thisObj.alertMsg({type:"error",msg:"삭제 실패"});
      });
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
</style>