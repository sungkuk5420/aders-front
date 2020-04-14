<template>
  <div class="search-page">
    <div class="search-wrapper">
      <a-select defaultValue="メンション名" @change="handleChange">
        <a-select-option value="メンション名">メンション名</a-select-option>
        <a-select-option value="入居者名">入居者名</a-select-option>
        <a-select-option value="担当者名">担当者名</a-select-option>
      </a-select>
      <a-input-search
        placeholder="キーワード 入力"
        @search="onSearch"
        size="large"
      >
      <a-button slot="enterButton" type="primary" icon="search">検索</a-button>
      </a-input-search>
      <a-button type="primary">詳細検索</a-button>
    </div>
    <div class="content">
      <UserTable/>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { T } from "../store/module-example/types";
import UserTable from "../components/UserTable.vue"
export default {
  components: {
    UserTable
  },
  data() {
    return {
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
    alertMsg() {
      this.$message.info("수정기능 개발중");
    }
  }
};
</script>

<style lang="scss">
.search-page{
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
