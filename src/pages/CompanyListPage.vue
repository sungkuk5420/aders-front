<template>
  <div class="company-list-page">
    <div class="search-wrapper">
      <a-select v-model="companySearchType" @change="onSearch">
        <a-select-option value="회사명">회사명</a-select-option>
        <a-select-option value="대표자명">대표자명</a-select-option>
        <a-select-option value="대리점 구분">대리점 구분</a-select-option>
      </a-select>
      <a-input-search
        placeholder="키워드 입력"
        size="large"
        v-model="companySearchKeyword" 
        @search="onSearch"
        @change="onSearch"
      >
      <a-button slot="enterButton" type="primary" icon="search" :loading="searchLoading" >검색</a-button>
      </a-input-search>
      <a-button type="primary" @click="moveAddCompanyPage">대리점 등록</a-button>
    </div>
    <div class="content">
      <CompanyTable/>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { T } from "../store/module-example/types";
import CompanyTable from "../components/CompanyTable.vue"
export default {
  props:[],
  components: {
    CompanyTable
  },
  data() {
    return {
      companySearchType:"회사명",
      companySearchKeyword:"",
      searchLoading:false
    };
  },
  computed: {
    ...mapGetters({
      companyList:"getCompanyList"
    })
  },
  watch: {
  },
  mounted() {
    this.getCompanyList()
  },
  methods: {
    getCompanyList(){
      this.$store.dispatch(T.GET_COMPANY_LIST,{});
    },
    onSearch(){
      console.log("search click");
      const companySearchType = this.companySearchType;
      const companySearchKeyword = this.companySearchKeyword;
      this.$store.dispatch(T.SEARCH_COMPANY,{companySearchType,companySearchKeyword});
    },
    moveAddCompanyPage() {
      this.$emit('moveAddCompanyPage');
    },
    alertMsg() {
      this.$message.info("수정기능 개발중");
    }
  }
};
</script>

<style lang="scss">
.company-list-page{
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
