<template>
  <div style="min-width:1080px; margin: 15px 0 15px 10px;">
    <div class="row" style="margin-bottom: 15px;">
      <a-input style="flex:10;" v-model="content"/>
      <a-button style="flex:1;" type="default" @click="addCallHistory">통화기록작성</a-button>
    </div>
    <a-table
      :columns="columns"
      :dataSource="userCallList"
      size="small"
      style="width:100%;"
      :pagination="false"
    ></a-table>
  </div>
</template>
<script>
const columns = [
  {
    title: "구분",
    width: 60,
    key: "index",
    dataIndex: "index"
  },
  {
    title: "기록 날짜",
    width: 180,
    dataIndex: "createdDate",
    key: "createdDate"
  },
  { title: "상세내용", width: "auto", dataIndex: "content", key: "content" }
];

import { mapGetters } from "vuex";
import moment from "moment";
import { T } from "../store/module-example/types";
export default {
  props: ["userId"],
  data() {
    return {
      columns,
      userId: "",
      content: "",
      userCallList: []
    };
  },
  computed: {},
  mounted() {
    this.db = firebase.firestore();
    this.userId = this.$props.userId;
    const thisObj = this;
    thisObj.userCallList = thisObj.db
      .collection("userCallHistory")
      .where("userId", "==", this.userId)
      .get()
      .then(querySnapshot => {
        let userList = [];
        let index = 1;
        querySnapshot.forEach(doc => {
          let id = doc.id;
          userList.push({
            index: index,
            id,
            ...doc.data(),
            createdDate: moment(doc.data().createdDate).format(
              "YYYY-MM-DD hh:mm"
            )
          });
          index++;
        });
        console.log(userList);
        thisObj.userCallList = userList;
      });
  },
  methods: {
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
    addCallHistory(id) {
      const thisObj = this;
      const newItem = {
        createdDate: Date.now(),
        content: thisObj.content,
        userId: thisObj.userId
      };
      thisObj.content = "";
      this.db
        .collection("userCallHistory")
        .add(newItem)
        .then(function() {
          thisObj.userCallList = [
            ...thisObj.userCallList,
            {
              ...newItem,
              index: thisObj.userCallList.length + 1,
              createdDate: moment(newItem.createdDate).format(
                "YYYY-MM-DD hh:mm"
              )
            }
          ];
          thisObj.alertMsg({ type: "success", msg: "등록 완료" });
        })
        .catch(function(error) {
          console.log(error);
          thisObj.alertMsg({ type: "error", msg: "등록 실패" });
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.ant-table-fixed {
}
</style>