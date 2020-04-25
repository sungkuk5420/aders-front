<template>
  <a-layout id="components-layout-demo-fixed">
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <div class="logo" >
        <img src="~assets/logo.png" alt />
      </div>
      <a-menu
        theme="dark"
        mode="horizontal"
        :defaultSelectedKeys="['1']"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1" @click='changeTabIndex(1)'>검색</a-menu-item>
        <a-menu-item key="2" @click='changeTabIndex(2)'>신규등록</a-menu-item>
        <a-menu-item key="3" @click='changeTabIndex(3)'>대리점 목록</a-menu-item>
        <a-menu-item key="4" @click='changeTabIndex(4)'>연체자 등록</a-menu-item>
        <a-menu-item key="5" @click='changeTabIndex(5)'>지불용지 출력</a-menu-item>
        <a-menu-item key="6" @click='changeTabIndex(6)'>수익분석</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content :style="{ padding: '30px 30px 0 30px', marginTop: '64px' }">
      <SearchPage v-show="tabIndex ==1"/>
      <addUserPage v-show="tabIndex ==2"/>
      <CompanyListPage v-show="tabIndex ==3" />
      <addCompanyPage v-show="tabIndex == 30" />
    </a-layout-content>
  </a-layout>
</template>
<script>
import { mapGetters } from "vuex";
import { T } from "../store/module-example/types";

import SearchPage from "../pages/SearchPage.vue";
import addUserPage from "../pages/addUserPage.vue";
import addCompanyPage from "../pages/addCompanyPage.vue";
import CompanyListPage from "../pages/CompanyListPage.vue";
export default {
  components: {
    SearchPage,
    addUserPage,
    addCompanyPage,
    CompanyListPage
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters({
      tabIndex:"getTabIndex"
    })
  },
  watch: {
  },
  mounted() {
    // this.notification("aaa","bbb")
    // this.alertMsg({type:"success",msg:"asdfwe"});
  },
  methods: {
    changeTabIndex(index){
      switch (index) {
        case 1:
          this.$store.dispatch(T.CHANGE_TAB_INDEX,index);
          break;
        case 2:
          this.$store.dispatch(T.CHANGE_TAB_INDEX,index);
          break;
        case 3:
          this.$store.dispatch(T.CHANGE_TAB_INDEX,index);
          this.$store.dispatch(T.CHANGE_UPDATE_COMPNAY_ID,"");
          break;
        case 30:
          this.$store.dispatch(T.CHANGE_TAB_INDEX,index);
          break;
      
        default:
          this.alertMsg({type:"info",msg:"Comming soon"})
          break;
      }
    },
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
    notification({title="",content=""}) {
      this.$notification.open({
        message: title,
        description:
          content,
        duration: 3,
        style: { top: "50px" }
      });
    },
  }
};
</script>

<style lang="scss">
*{
  font-family: "Noto Sans CJK KR";
}
#components-layout-demo-fixed .logo {
  width: 200px;
  height: 31px;
  float: left;
  padding: 0;
  img{
    margin-left: -20px;
    width: 100%;
    height: auto;
  }
}
.ant-layout{
    height: 100%;
}
.ant-layout-header{
  padding:0 10px ;
}
.ant-layout-content{
  padding: 10px;
  margin: 0;
}
</style>
