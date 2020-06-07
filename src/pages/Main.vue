<template>
  <a-layout id="components-layout-demo-fixed">
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <div class="logo" @click="changeTabIndex(0)">
        <img src="~assets/logo.png" alt>
      </div>
      <a-menu
        theme="dark"
        mode="horizontal"
        :defaultSelectedKeys="['0']"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="0" @click="changeTabIndex(0)">메인 화면</a-menu-item>
        <a-menu-item key="1" @click="changeTabIndex(1)">입주자 목록</a-menu-item>
        <a-menu-item key="2" @click="changeTabIndex(2)">代理店一覧</a-menu-item>
        <a-menu-item key="3" @click="changeTabIndex(3)">연체자 목록</a-menu-item>
        <a-menu-item key="4" @click="changeTabIndex(4)">블랙리스트 목록</a-menu-item>
        <a-menu-item key="5" @click="changeTabIndex(5)">지불용지 출력</a-menu-item>
        <a-menu-item key="6" @click="changeTabIndex(6)">수익분석</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content :style="{ padding: '30px 30px 0 30px', marginTop: '64px' }">
      <MainPage v-if="!isUnLogin" v-show="tabIndex ==0"/>
      <UserListPage v-if="!isUnLogin" v-show="tabIndex ==1"/>
      <addUserPage v-if="!isUnLogin" v-show="tabIndex ==10"/>
      <CompanyListPage v-if="!isUnLogin" v-show="tabIndex ==2"/>
      <addCompanyPage v-if="!isUnLogin" v-show="tabIndex == 20"/>
      <DelinquentListPage v-if="!isUnLogin" v-show="tabIndex ==3"/>
      <addDelinquentPage v-if="!isUnLogin" v-show="tabIndex ==30"/>
      <BlackListPage v-if="!isUnLogin" v-show="tabIndex ==4"/>
      <a-modal title="관리자 비밀번호" v-model="isUnLogin">
        <template slot="footer">
          <a-button key="back" @click="handleCancel">キャンセル</a-button>
          <a-button key="submit" type="primary" :loading="loading" @click="checkAdminPassword">확인</a-button>
        </template>
        <div class="row-div popup">
          <div class="content-div">
            <div class="components-input-demo-presuffix">
              <span class="label">비밀 번호</span>
              <a-input type="password" placeholder="비밀 번호" v-model="password" ref="userNameInput">
                <a-icon slot="prefix" type="lock"/>
              </a-input>
            </div>
          </div>
        </div>
      </a-modal>
    </a-layout-content>
  </a-layout>
</template>
<script>
import { mapGetters } from "vuex";
import { T } from "../store/module-example/types";

import MainPage from "../pages/MainPage.vue";
import UserListPage from "../pages/UserListPage.vue";
import BlackListPage from "../pages/BlackListPage.vue";
import addUserPage from "../pages/addUserPage.vue";
import addCompanyPage from "../pages/addCompanyPage.vue";
import addDelinquentPage from "../pages/addDelinquentPage.vue";
import CompanyListPage from "../pages/CompanyListPage.vue";
import DelinquentListPage from "../pages/DelinquentListPage.vue";
export default {
  components: {
    MainPage,
    UserListPage,
    BlackListPage,
    addUserPage,
    addCompanyPage,
    addDelinquentPage,
    CompanyListPage,
    DelinquentListPage
  },
  data() {
    return {
      isUnLogin: false,
      loading: false,
      password: ""
    };
  },
  computed: {
    ...mapGetters({
      tabIndex: "getTabIndex",
      // isUnLogin: "getIsUnLogin",
      changeSuccessMessage: "changeSuccessMessage",
      changeErrorMessage: "changeErrorMessage"
    })
  },
  watch: {
    changeSuccessMessage(text) {
      this.loading = false;
      if (text !== "") {
        this.$message.success(text);
        this.$store.dispatch(T.CHANGE_SUCCESS_MESSAGE, "");
        if (text == "로그인 성공") {
          this.getCompanyList();
        }
      }
    },
    changeErrorMessage(text) {
      this.loading = false;
      if (text !== "") {
        this.$message.error(text);
        this.$store.dispatch(T.CHANGE_ERROR_MESSAGE, "");
      }
    }
  },
  mounted() {
    this.getCompanyList();
  },
  methods: {
    checkAdminPassword(password) {
      var password = this.password;
      if (!this.loading) {
        this.loading = true;
        setTimeout(() => {
          this.$store.dispatch(T.CHECK_ADMIN_PASSWORD, password);
        }, 500);
      }
    },
    handleCancel() {
      document.getElementsByClassName("ant-modal-close")[0].click();
    },
    getUserList() {
      const thisObj = this;
      this.$store.dispatch(T.GET_BLACK_LIST, {});
      this.$store.dispatch(T.GET_USER_LIST, {
        cb: () => {
          thisObj.getDelinquentList();
        }
      });
    },
    getDelinquentList() {
      this.$store.dispatch(T.GET_DELINQUENT_LIST, {});
    },
    getCompanyList() {
      const thisObj = this;
      this.$store.dispatch(T.GET_COMPANY_LIST, {
        cb: () => {
          thisObj.getUserList();
        }
      });
    },
    changeTabIndex(index) {
      switch (index) {
        case 0:
          this.$store.dispatch(T.CHANGE_TAB_INDEX, index);
          this.$store.dispatch(T.IS_READ_ONLY_UPDATE_USER_DETAIL, false);
          break;
        case 1:
          this.$store.dispatch(T.CHANGE_TAB_INDEX, index);
          this.$store.dispatch(T.CHANGE_UPDATE_USER_ID, "");
          this.$store.dispatch(T.IS_READ_ONLY_UPDATE_USER_DETAIL, false);
          break;
        case 2:
          this.$store.dispatch(T.CHANGE_TAB_INDEX, index);
          this.$store.dispatch(T.CHANGE_UPDATE_COMPNAY_ID, "");
          this.$store.dispatch(T.IS_READ_ONLY_UPDATE_USER_DETAIL, false);
          break;
        case 3:
          this.$store.dispatch(T.CHANGE_TAB_INDEX, index);
          this.$store.dispatch(T.CHANGE_UPDATE_USER_ID, "");
          this.$store.dispatch(T.CHANGE_UPDATE_DELINQUENT_ID, "");
          this.$store.dispatch(T.IS_READ_ONLY_UPDATE_USER_DETAIL, false);
          break;
        case 4:
          this.$store.dispatch(T.CHANGE_TAB_INDEX, index);
          this.$store.dispatch(T.CHANGE_UPDATE_USER_ID, "");
          this.$store.dispatch(T.IS_READ_ONLY_UPDATE_USER_DETAIL, false);
          break;
        case 20:
          this.$store.dispatch(T.CHANGE_TAB_INDEX, index);
          break;

        default:
          this.alertMsg({ type: "info", msg: "Comming soon" });
          break;
      }
    },
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
    notification({ title = "", content = "" }) {
      this.$notification.open({
        message: title,
        description: content,
        duration: 3,
        style: { top: "50px" }
      });
    }
  }
};
</script>

<style lang="scss">
* {
  font-family: "Noto Sans CJK KR";
}
#components-layout-demo-fixed .logo {
  width: 200px;
  height: 31px;
  float: left;
  padding: 0;
  cursor: pointer;
  img {
    margin-left: -20px;
    width: 100%;
    height: auto;
  }
}
.ant-layout {
  height: 100%;
}
.ant-layout-header {
  padding: 0 10px;
}
.ant-layout-content {
  padding: 10px;
  margin: 0;
}
</style>
