<template>
  <div style="min-width:1080px; margin: 15px 0 15px 10px;">
    <div class="row" style="margin-bottom: 15px;">
      <a-input style="flex:10;" v-model="content"/>
      <a-button style="flex:1;" type="default" @click="addCallHistory">メモ作成</a-button>
    </div>
    <a-table
      :columns="columns"
      :dataSource="delinquentCallList"
      size="small"
      style="width:100%;"
      :pagination="false"
    ></a-table>
  </div>
</template>
<script>
const columns = [
  {
    title: "区分",
    width: 60,
    key: "index",
    dataIndex: "index"
  },
  {
    title: "記録日",
    width: 180,
    dataIndex: "createdDate",
    key: "createdDate"
  },
  { title: "メモ内容", width: "auto", dataIndex: "content", key: "content" }
];

import { mapGetters } from "vuex";
import moment from "moment";
import { T } from "../store/module-example/types";
export default {
  props: ["delinquentId"],
  data() {
    return {
      columns,
      delinquentId: "",
      content: "",
      delinquentCallList: []
    };
  },
  computed: {},
  mounted() {
    this.db = firebase.firestore();
    this.delinquentId = this.$props.delinquentId;
    const thisObj = this;
    thisObj.delinquentCallList = thisObj.db
      .collection("delinquentCallHistory")
      .where("delinquentId", "==", this.delinquentId)
      .get()
      .then(querySnapshot => {
        let delinquentList = [];
        let index = 1;
        querySnapshot.forEach(doc => {
          let id = doc.id;
          delinquentList.push({
            index: index,
            id,
            ...doc.data(),
            createdDate: moment(doc.data().createdDate).format(
              "YYYY-MM-DD hh:mm"
            )
          });
          index++;
        });
        console.log(delinquentList);
        thisObj.delinquentCallList = delinquentList;
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
        delinquentId: thisObj.delinquentId
      };
      thisObj.content = "";
      this.db
        .collection("delinquentCallHistory")
        .add(newItem)
        .then(function() {
          thisObj.delinquentCallList = [
            ...thisObj.delinquentCallList,
            {
              ...newItem,
              index: thisObj.delinquentCallList.length + 1,
              createdDate: moment(newItem.createdDate).format(
                "YYYY-MM-DD hh:mm"
              )
            }
          ];
          thisObj.alertMsg({ type: "success", msg: "登録 完了" });
        })
        .catch(function(error) {
          console.log(error);
          thisObj.alertMsg({ type: "error", msg: "登録 失敗" });
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.ant-table-fixed {
}
</style>