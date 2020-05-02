<template>
  <div class="delinquent-list-page">
    <div class="search-wrapper">
      <a-select v-model="delinquentSearchType" @change="onSearch">
        <a-select-option value="멘션명">멘션명</a-select-option>
        <a-select-option value="계약자명">계약자명</a-select-option>
        <a-select-option value="담당자명">담당자명</a-select-option>
      </a-select>
      <a-input-search
        placeholder="키워드 입력"
        size="large"
        v-model="delinquentSearchKeyword" 
        @search="onSearch"
        @change="onSearch"
      >
      <a-button slot="enterButton" type="primary" icon="search" :loading="searchLoading">검색</a-button>
      </a-input-search>
      <a-button type="primary">상세검색</a-button>
      <a-button type="primary" @click="moveAddDelinquentPage">연체자 등록</a-button>
    </div>
    <div class="content">
      <DelinquentTable/>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { T } from "../store/module-example/types";
import DelinquentTable from "../components/DelinquentTable.vue"
export default {
  components: {
    DelinquentTable
  },
  data() {
    return {
      delinquentSearchType:"회사명",
      delinquentSearchKeyword:"",
      searchLoading:false
    };
  },
  computed: {
    ...mapGetters({
    })
  },
  watch: {
  },
  mounted() {
  },
  methods: {
    onSearch(){
      console.log("search click");
      const delinquentSearchType = this.delinquentSearchType;
      const delinquentSearchKeyword = this.delinquentSearchKeyword;
      this.$store.dispatch(T.SEARCH_USER,{delinquentSearchType,delinquentSearchKeyword});
    },
    moveAddDelinquentPage() {
      this.$store.dispatch(T.CHANGE_TAB_INDEX,30);
    },
    alertMsg() {
      this.$message.info("수정기능 개발중");
    }
  }
};
</script>

<style lang="scss">
.delinquent-list-page{
  display: flex;
  flex-direction: column;
  height: 100% ;
  .content{
    flex:1;
    height: calc(100% - 50px);
    overflow: auto;
    .ant-table-wrapper{
    }
  }
}
.search-wrapper{
  display: flex;
  height: 50px;
  .ant-input-group-wrapper{
    display: inline-flex;
    width: auto;
    flex: 1;
    padding: 0 0 0 10px ;
    .ant-btn{
      margin: 0;
    }
  }
  .ant-select-selection--single{
    flex: 1;
    width: 130px;
    height:40px;
    .ant-select-selection__rendered{
      line-height: 40px;
    }
  }
  .ant-btn{
    margin-left: 10px;
    height: 40px;
  }
}
</style>
