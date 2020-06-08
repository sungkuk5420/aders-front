<template>
  <div class="add-user-page">
    <div class="content">
      <a-form :layout="formLayout" :form="form" v-bind="formItemLayout">
        <div class="form-row">
          <h2>代理店 登録</h2>
        </div>
        <div class="form-row">
          <div class="form-cell">
            <a-form-item
              label="登録 区分"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <a-radio-group v-model="companyType">
                <a-radio-button value="不動産">不動産</a-radio-button>
                <a-radio-button value="管理会社">管理会社</a-radio-button>
                <a-radio-button value="その他">その他</a-radio-button>
              </a-radio-group>
            </a-form-item>

            <a-form-item
              label="会社名"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <a-input v-model="companyName"/>
            </a-form-item>
            <a-form-item
              label="会社住所"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <a-input v-model="companyAdress"/>
            </a-form-item>
            <a-form-item
              label="代表者"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <div class="form-row">
                <a-form-item :label-col="{ span: 1 }" :wrapper-col="{ span: 24 }">
                  <a-input v-model="companyOnwer"/>
                </a-form-item>
                <a-form-item
                  label="性別"
                  :label-col="formItemLayout.labelCol2"
                  :wrapper-col="formItemLayout.wrapperCol2"
                >
                  <a-radio-group v-model="companyOnwerSex">
                    <a-radio-button value="男性">男性</a-radio-button>
                    <a-radio-button value="女性">女性</a-radio-button>
                  </a-radio-group>
                </a-form-item>
              </div>
            </a-form-item>
            <a-form-item
              label="代表者 TEL"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <div class="form-row">
                <a-form-item :label-col="{ span: 1 }" :wrapper-col="{ span: 24 }">
                  <a-input v-model="companyOnwerTel"/>
                </a-form-item>
                <a-form-item
                  label="システム管理者"
                  :label-col="formItemLayout.labelCol2"
                  :wrapper-col="formItemLayout.wrapperCol2"
                >
                  <a-input v-model="systemManager"/>
                </a-form-item>
              </div>
            </a-form-item>
            <a-form-item
              label="システム管理者 メール"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <div class="form-row">
                <a-form-item :label-col="{ span: 1 }" :wrapper-col="{ span: 24 }">
                  <a-auto-complete
                    :dataSource="emailDataSource"
                    style="width: 100%;"
                    @change="handleChangeEmail"
                    v-model="systemManagerEmail"
                  />
                </a-form-item>
                <a-form-item
                  label="FAX"
                  :label-col="formItemLayout.labelCol2"
                  :wrapper-col="formItemLayout.wrapperCol2"
                >
                  <a-input v-model="fax"/>
                </a-form-item>
              </div>
            </a-form-item>
            <a-form-item
              label="備考"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <a-input v-model="notes"/>
            </a-form-item>
          </div>
          <div class="form-cell">
            <a-form-item
              label="登録日"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <a-input v-model="joinDate"/>
            </a-form-item>
            <a-form-item
              label="保有物件数"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <div class="form-row">
                <a-form-item :label-col="{ span: 1 }" :wrapper-col="{ span: 24 }">
                  <a-input v-model="buildingCount" addonAfter="개"/>
                </a-form-item>
                <a-form-item
                  label="従業員数"
                  :label-col="formItemLayout.labelCol2"
                  :wrapper-col="formItemLayout.wrapperCol2"
                >
                  <a-input v-model="employeeCount" addonAfter="명"/>
                </a-form-item>
              </div>
            </a-form-item>
            <a-form-item
              label="商品種類"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <a-select v-model="productType">
                <a-select-option value="A">A</a-select-option>
                <a-select-option value="B">B</a-select-option>
                <a-select-option value="C">C</a-select-option>
                <a-select-option value="D">D</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item
              label="保証審査料"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <a-input-number
                :max="999"
                v-model="fee1"
                :formatter="value => `緊急連絡先 ${value}%`"
                style="width:140px; margin-right:10px;"
              />
              <a-input-number
                :max="999"
                v-model="fee2"
                :formatter="value => `連帯保証人 ${value}%`"
                style="width:140px; margin-right:10px;"
              />
              <a-input-number
                :max="999"
                v-model="fee3"
                :formatter="value => `その他 ${value}%`"
                style="width:100px;"
              />
            </a-form-item>
            <a-form-item
              label="更新料"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <div class="form-row">
                <a-form-item :label-col="{ span: 1 }" :wrapper-col="{ span: 24 }">
                  <a-input v-model="novationFee"/>
                </a-form-item>
                <a-form-item
                  label="代理店手数料"
                  :label-col="formItemLayout.labelCol2"
                  :wrapper-col="formItemLayout.wrapperCol2"
                >
                  <a-input-number
                    :max="999"
                    v-model="propertyManagermentCompanyFee"
                    :formatter="value => `${value}%`"
                    style="width:100px;"
                  />
                </a-form-item>
              </div>
            </a-form-item>

            <a-form-item
              label="債権回収"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <a-radio-group v-model="debtCollectionType">
                <a-radio-button value="滞納報告型">滞納報告型</a-radio-button>
                <a-radio-button value="集金代行型">集金代行型</a-radio-button>
              </a-radio-group>
            </a-form-item>
          </div>
        </div>
        <div class="form-row">
          <h2>登録銀行情報</h2>
        </div>
        <div class="form-row">
          <div class="form-cell">
            <a-form-item
              label="銀行名"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <a-input v-model="bankName"/>
            </a-form-item>
            <a-form-item
              label="受取人名"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <div class="form-row">
                <a-form-item :label-col="{ span: 1 }" :wrapper-col="{ span: 24 }">
                  <a-input v-model="recipientName"/>
                </a-form-item>
                <a-form-item
                  label="カナ）"
                  :label-col="formItemLayout.labelCol2"
                  :wrapper-col="formItemLayout.wrapperCol2"
                >
                  <a-input v-model="recipientNameKana"/>
                </a-form-item>
              </div>
            </a-form-item>
            <a-form-item
              label="口座番号"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <div class="form-row">
                <a-form-item :label-col="{ span: 1 }" :wrapper-col="{ span: 24 }">
                  <a-input v-model="bankAccountNumber"/>
                </a-form-item>
                <a-form-item
                  label="送金タイプ"
                  :label-col="formItemLayout.labelCol2"
                  :wrapper-col="formItemLayout.wrapperCol2"
                >
                  <a-input v-model="remitType"/>
                </a-form-item>
              </div>
            </a-form-item>
            <a-form-item
              label="支店名"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <div class="form-row">
                <a-form-item :label-col="{ span: 1 }" :wrapper-col="{ span: 24 }">
                  <a-input v-model="branchOfficeName"/>
                </a-form-item>
                <a-form-item
                  label
                  :label-col="formItemLayout.labelCol2"
                  :wrapper-col="formItemLayout.wrapperCol2"
                ></a-form-item>
              </div>
            </a-form-item>
            <!-- <a-form-item
              v-for="(k, index) in form.getFieldValue('keys')"
              :key="k"
              v-bind="index === 0 ? formItemLayoutWithOutLabel : formItemLayoutWithOutLabel"
              :label="index === 0 ? '사용자 지정1' : '사용자 指定'+(index+1)"
              :required="false"
            >
              <a-input
                style="width: 60%; margin-right: 8px"
              />
              <a-icon
                v-if="form.getFieldValue('keys').length > 1"
                class="dynamic-delete-button"
                type="minus-circle-o"
                :disabled="form.getFieldValue('keys').length === 1"
                @click="() => remove(k)"
              />
            </a-form-item>-->
            <!-- <a-form-item v-bind="{wrapperCol:{ span: 16, offset: 4 }}" v-if="form.getFieldValue('keys').length < 5">
              <a-button type="dashed" style="width: 60%" @click="add">
                <a-icon type="plus" /> Add field
              </a-button>
            </a-form-item>-->
          </div>
          <div class="form-cell"></div>
        </div>
        <div class="form-row">
          <div class="form-cell"></div>
          <div class="form-cell">
            <a-form-item
              label="確認担当者"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <div class="form-row">
                <a-form-item :label-col="{ span: 1 }" :wrapper-col="{ span: 24 }">
                  <a-input v-model="comfirmPerson"/>
                </a-form-item>
                <a-form-item
                  label="上司承認者"
                  :label-col="formItemLayout.labelCol2"
                  :wrapper-col="formItemLayout.wrapperCol2"
                >
                  <a-input v-model="approvalPerson"/>
                </a-form-item>
              </div>
            </a-form-item>
          </div>
        </div>
        <div class="form-row--center" style="margin:30px 0;">
          <div class="ant-row ant-form-item">
            <div class="ant-col-4 ant-form-item-label"></div>
            <div class="ant-col-16 ant-form-item-control-wrapper">
              <div class="form-row">
                <a-button
                  type="primary"
                  v-show="!companyDataForUpdate"
                  @click="handleSubmit"
                  :loading="loading"
                >登録</a-button>
                <a-button
                  type="primary"
                  v-show="companyDataForUpdate"
                  @click="handleUpdate"
                  :loading="loading"
                >編集</a-button>
                <a-button type="default" @click="cancel" style="margin-left:10px;">キャンセル</a-button>
              </div>
            </div>
          </div>
        </div>
      </a-form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { T } from "../store/module-example/types";
let id = 0;
import ImageUpload from "../components/ImageUpload";
import VueSlideUpDown from "vue-slide-up-down";
export default {
  components: {
    ImageUpload,
    VueSlideUpDown
  },
  data() {
    return {
      loading: false,
      db: "", // firebase
      companyType: "不動産", // 登録選択
      companyName: "", // 会社名
      companyAdress: "", // 会社住所
      companyOnwer: "", // 会社 代表者
      companyOnwerSex: "男性", // 会社 代表者 性別
      companyOnwerTel: "", // 代表者 電話番号
      systemManager: "", // システム管理者
      systemManagerEmail: "", // システム管理者 メール
      fax: "", // FAX
      notes: "", // 備考
      joinDate: "", // 登録日
      buildingCount: 0, // 保有物件数
      employeeCount: 0, // 従業員数
      productType: 0, // 商品種類
      fee1: 0, // 保証審査料 緊急連絡先
      fee2: 0, // 保証審査料 連帯保証人
      fee3: 0, // 保証審査料 その他
      novationFee: 0, // 更新料
      propertyManagermentCompanyFee: 0, // 代理店手数料
      debtCollectionType: "滞納報告型", // 채권 추심 종류
      bankName: "", // 銀行名
      recipientName: "", // 受取人名
      recipientNameKana: "", // カナ
      bankAccountNumber: "", // 口座番号
      remitType: "", // 送金タイプ
      branchOfficeName: "", // 支店名
      comfirmPerson: "", // 確認担当者
      approvalPerson: "", // 上司承認者
      createdDate: Date.now(), // 생성날짜
      // companyType: "不動産", // 登録選択
      // companyName: "会社名", // 会社名
      // companyAdress: "会社住所", // 会社住所
      // companyOnwer: "会社 代表者", // 会社 代表者
      // companyOnwerSex: "男性", // 会社 代表者 性別
      // companyOnwerTel: "代表者 電話番号", // 代表者 電話番号
      // systemManager: "システム管理者", // システム管理者
      // systemManagerEmail: "システム管理者 メール", // システム管理者 メール
      // fax: "FAX", // FAX
      // notes: "備考", // 備考
      // joinDate: "登録日", // 登録日
      // buildingCount: 0, // 保有物件数
      // employeeCount: 0, // 従業員数
      // productType: 0, // 商品種類
      // fee1: 0, // 保証審査料 緊急連絡先
      // fee2: 0, // 保証審査料 連帯保証人
      // fee3: 0, // 保証審査料 その他
      // novationFee:0, // 更新料
      // propertyManagermentCompanyFee:0, // 代理店手数料
      // debtCollectionType:"", // 代理店手数料
      // bankName: "銀行名", // 銀行名
      // recipientName: "受取人名", // 受取人名
      // recipientNameKana: "カナ", // カナ
      // bankAccountNumber: "口座番号", // 口座番号
      // remitType: "送金タイプ", // 送金タイプ
      // branchOfficeName: "支店名", // 支店名
      // comfirmPerson: "確認担当者", // 確認担当者
      // approvalPerson: "上司承認者", // 上司承認者
      formLayout: "horizontal",
      emailDataSource: [],
      formItemLayoutWithOutLabel: {
        wrapperCol: {
          xs: { span: 16, offset: 0 },
          sm: { span: 16, offset: 0 }
        }
      }
    };
  },
  computed: {
    ...mapGetters({
      companyMaxIndex: "getCompanyMaxIndex",
      companyDataForUpdate: "getCompanyDataForUpdate"
    }),
    formItemLayout() {
      const { formLayout } = this;
      return {
        labelCol: { span: 4 },
        labelCol2: { span: 10 },
        wrapperCol: { span: 20 },
        wrapperCol2: { span: 14 }
      };
    },
    buttonItemLayout() {
      const { formLayout } = this;
      return {
        wrapperCol: { span: 14, offset: 4 }
      };
    }
  },

  watch: {
    companyDataForUpdate: {
      handler(companyData) {
        console.log("companyData", companyData);
        if (companyData) {
          this.companyType = companyData.companyType;
          this.companyName = companyData.companyName;
          this.companyAdress = companyData.companyAdress;
          this.companyOnwer = companyData.companyOnwer;
          this.companyOnwerSex = companyData.companyOnwerSex;
          this.companyOnwerTel = companyData.companyOnwerTel;
          this.systemManager = companyData.systemManager;
          this.systemManagerEmail = companyData.systemManagerEmail;
          this.fax = companyData.fax;
          this.notes = companyData.notes;
          this.joinDate = companyData.joinDate;
          this.buildingCount = companyData.buildingCount;
          this.employeeCount = companyData.employeeCount;
          this.productType = companyData.productType;
          this.fee1 = companyData.fee1;
          this.fee2 = companyData.fee2;
          this.fee3 = companyData.fee3;
          this.novationFee = companyData.novationFee;
          this.propertyManagermentCompanyFee =
            companyData.propertyManagermentCompanyFee;
          this.debtCollectionType = companyData.debtCollectionType;
          this.bankName = companyData.bankName;
          this.recipientName = companyData.recipientName;
          this.recipientNameKana = companyData.recipientNameKana;
          this.bankAccountNumber = companyData.bankAccountNumber;
          this.remitType = companyData.remitType;
          this.branchOfficeName = companyData.branchOfficeName;
          this.comfirmPerson = companyData.comfirmPerson;
          this.approvalPerson = companyData.approvalPerson;
          this.createdDate = companyData.createdDate;
        } else {
          this.clearDatas();
        }
      },
      immediate: true
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "validate_other" });
    this.form.getFieldDecorator("keys", { initialValue: [], preserve: true });
  },
  mounted() {
    this.db = firebase.firestore();
  },
  methods: {
    remove(k) {
      const { form } = this;
      const keys = form.getFieldValue("keys");
      if (keys.length === 1) {
        return;
      }
      form.setFieldsValue({
        keys: keys.filter(key => key !== k)
      });
    },

    add() {
      const { form } = this;
      const keys = form.getFieldValue("keys");
      if (keys.length > 4) {
        return false;
      }
      const nextKeys = keys.concat(id++);
      form.setFieldsValue({
        keys: nextKeys
      });
      console.log(nextKeys);
    },
    handleChangeEmail(value) {
      this.emailDataSource =
        !value || value.indexOf("@") >= 0
          ? []
          : [`${value}@gmail.com`, `${value}@yahoo.com`, `${value}@other.com`];
    },
    onChangeJoinDate(date, dateString) {
      this.joinDate = dateString;
    },
    onChangeRoomMateBirthday(date, dateString) {
      this.roomMateBirthday = dateString;
    },
    getCompanyInputValues() {
      const companyType = this.companyType;
      const companyName = this.companyName;
      const companyAdress = this.companyAdress;
      const companyOnwer = this.companyOnwer;
      const companyOnwerSex = this.companyOnwerSex;
      const companyOnwerTel = this.companyOnwerTel;
      const systemManager = this.systemManager;
      const systemManagerEmail = this.systemManagerEmail;
      const fax = this.fax;
      const notes = this.notes;
      const joinDate = this.joinDate;
      const buildingCount = this.buildingCount;
      const employeeCount = this.employeeCount;
      const productType = this.productType;
      const fee1 = this.fee1;
      const fee2 = this.fee2;
      const fee3 = this.fee3;
      const novationFee = this.novationFee;
      const propertyManagermentCompanyFee = this.propertyManagermentCompanyFee;
      const debtCollectionType = this.debtCollectionType;
      const bankName = this.bankName;
      const recipientName = this.recipientName;
      const recipientNameKana = this.recipientNameKana;
      const bankAccountNumber = this.bankAccountNumber;
      const remitType = this.remitType;
      const branchOfficeName = this.branchOfficeName;
      const comfirmPerson = this.comfirmPerson;
      const approvalPerson = this.approvalPerson;
      const createdDate = Date.now();
      return {
        companyType,
        companyName,
        companyAdress,
        companyOnwer,
        companyOnwerSex,
        companyOnwerTel,
        systemManager,
        systemManagerEmail,
        fax,
        notes,
        joinDate,
        buildingCount,
        employeeCount,
        productType,
        fee1,
        fee2,
        fee3,
        novationFee,
        propertyManagermentCompanyFee,
        debtCollectionType,
        bankName,
        recipientName,
        recipientNameKana,
        bankAccountNumber,
        remitType,
        branchOfficeName,
        comfirmPerson,
        approvalPerson,
        createdDate
      };
    },
    handleSubmit(e) {
      this.loading = true;
      const thisObj = this;
      const companyValues = this.getCompanyInputValues();
      this.db
        .collection("companys")
        .add({
          ...companyValues,
          approvalNumber: this.companyMaxIndex
        })
        .then(function(docRef) {
          thisObj.getCompanyList(() => {
            thisObj.clearDatas();
            thisObj.loading = false;
            thisObj.alertMsg({ type: "success", msg: "登録 完了" });
            thisObj.moveCompanyListPage();
          });
        })
        .catch(function(error) {
          thisObj.loading = false;
          thisObj.alertMsg({ type: "error", msg: "登録 失敗" });
          console.error("Error adding document: ", error);
        });
    },
    handleUpdate(e) {
      this.loading = true;
      const thisObj = this;
      const companyValues = this.getCompanyInputValues();
      this.db
        .collection("companys")
        .doc(this.companyDataForUpdate.id)
        .update({
          ...companyValues
        })
        .then(function(docRef) {
          thisObj.getCompanyList(() => {
            thisObj.clearDatas();
            thisObj.loading = false;
            thisObj.alertMsg({ type: "success", msg: "編集 完了" });
            thisObj.moveCompanyListPage();
          });
        })
        .catch(function(error) {
          thisObj.loading = false;
          thisObj.alertMsg({ type: "error", msg: "編集 失敗" });
          console.error("Error adding document: ", error);
        });
    },
    cancel() {
      this.moveCompanyListPage();
    },
    clearDatas() {
      this.companyType = "不動産";
      this.companyName = "";
      this.companyAdress = "";
      this.companyOnwer = "";
      this.companyOnwerSex = "男性";
      this.companyOnwerTel = "";
      this.systemManager = "";
      this.systemManagerEmail = "";
      this.fax = "";
      this.notes = "";
      this.joinDate = "";
      this.buildingCount = 0;
      this.employeeCount = 0;
      this.productType = "A";
      this.fee1 = 0;
      this.fee2 = 0;
      this.fee3 = 0;
      this.novationFee = 0;
      this.propertyManagermentCompanyFee = 0;
      this.debtCollectionType = "滞納報告型";
      this.bankName = "";
      this.recipientName = "";
      this.recipientNameKana = "";
      this.bankAccountNumber = "";
      this.remitType = "";
      this.branchOfficeName = "";
      this.comfirmPerson = "";
      this.approvalPerson = "";
      this.createdDate = "";
    },
    getCompanyList(cb) {
      this.$store.dispatch(T.GET_COMPANY_LIST, { cb });
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
    moveCompanyListPage() {
      this.$store.dispatch(T.CHANGE_TAB_INDEX, 2);
      this.$store.dispatch(T.CHANGE_UPDATE_COMPNAY_ID, "");
    }
  }
};
</script>

<style lang="scss">
.add-user-page {
  display: flex;
  flex-direction: column;
  height: 100%;
  .content {
    flex: 1;
    height: calc(100% - 50px);
    overflow: auto;
    .title {
      display: block;
      width: 16.66666667%;
      min-height: 32px;
      text-align: right;
      margin-bottom: 0;
      padding-right: 12px;
      color: rgba(0, 0, 0, 0.85);
      font-weight: 600;
      font-size: 20px;
      line-height: 32px;
    }
    .form-col {
      display: flex;
      flex-direction: column;
      & > * {
        min-height: 39px;
        margin-bottom: 5px;
      }
    }
    .form-row {
      display: flex;
      &--center {
        @extend .form-row;
        justify-content: center;
      }
      .ant-row.ant-form-item {
        margin-bottom: 10px;
        &.search-row {
          .ant-form-item-control,
          .ant-form-item-children {
            width: 100%;
            height: 40px;
            display: flex;
            align-items: center;
          }
        }
        .form-row {
          width: 100%;
          .ant-row.ant-form-item {
            flex: 1;
            &:nth-child(2) {
              flex: 1.5;
            }
            margin-bottom: 0;
          }
        }
      }
      .form-cell {
        flex: 1;
      }
    }
  }
  h2 {
    font-size: 24px;
    line-height: 32px;
    color: #0d1a26;
    font-family: Avenir, -apple-system, BlinkMacSystemFont, Segoe UI,
      PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica,
      Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
    font-variant: tabular-nums;
    font-weight: 500;
    clear: both;
  }
}

#components-form-demo-validate-other .dropbox {
  height: 180px;
  line-height: 1.5;
}
</style>
